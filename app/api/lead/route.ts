import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

/**
 * Server-side lead intake. Runs on the server so no API keys or webhook URLs are
 * exposed to the browser. A lead is captured through up to three channels and is
 * considered successful if ANY of them accepts it, so a lead is never silently lost:
 *   1. HubSpot (primary CRM, pipeline, auto-reply, notifications)
 *   2. Supabase `leads` table (owned backup)
 *   3. Discord webhook (optional team ping)
 *
 * Configure via env vars, see docs/setup/leads-funnel-setup.md.
 */

// Portal ID + Form GUID are not secrets (they ship in HubSpot's public embed
// code), so we default to the live values and let env override them. This means
// HubSpot lead capture works on deploy without any extra env configuration.
// Account is on the na2 data center; api.hsforms.com is verified to accept it.
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || "246687213";
const HUBSPOT_FORM_GUID =
  process.env.HUBSPOT_FORM_GUID || "d7cd96dc-7cbb-40a2-8171-629f7c09db38";
const LEADS_DISCORD_WEBHOOK_URL = process.env.LEADS_DISCORD_WEBHOOK_URL;

interface LeadBody {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  topic?: string;
  pageUri?: string;
}

type ChannelResult = { ok: boolean; skipped?: boolean };

/** Submit the lead to a HubSpot form (creates/updates the contact in the CRM). */
async function submitToHubSpot(lead: LeadBody): Promise<ChannelResult> {
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) return { ok: false, skipped: true };

  const parts = (lead.name || "").trim().split(/\s+/);
  const firstname = parts[0] || "";
  const lastname = parts.slice(1).join(" ");
  const message = lead.topic
    ? `[Interested in: ${lead.topic}]\n\n${lead.message || ""}`
    : lead.message || "";

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "email", value: lead.email || "" },
            { name: "firstname", value: firstname },
            { name: "lastname", value: lastname },
            { name: "company", value: lead.company || "" },
            { name: "message", value: message },
          ],
          context: {
            pageUri: lead.pageUri || "https://codetokloud.com/contact",
            pageName: "Contact, CodetoKloud",
          },
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("HubSpot submit failed:", res.status, text);
      return { ok: false };
    }
    return { ok: true };
  } catch (error) {
    console.error("HubSpot submit error:", error);
    return { ok: false };
  }
}

/** Best-effort backup of the lead into a Supabase `leads` table. */
async function backupToSupabase(lead: LeadBody): Promise<ChannelResult> {
  try {
    const supabase = createServerClient();
    const { error } = await supabase.from("leads").insert([
      {
        name: lead.name || null,
        email: lead.email || null,
        company: lead.company || null,
        topic: lead.topic || null,
        message: lead.message || null,
        source: "website_contact_form",
      },
    ]);
    if (error) {
      console.error("Supabase lead backup failed:", error.message);
      return { ok: false };
    }
    return { ok: true };
  } catch (error) {
    console.error("Supabase lead backup error:", error);
    return { ok: false };
  }
}

/** Optional Discord ping so the team is notified instantly. */
async function notifyDiscord(lead: LeadBody): Promise<ChannelResult> {
  if (!LEADS_DISCORD_WEBHOOK_URL) return { ok: false, skipped: true };
  try {
    const res = await fetch(LEADS_DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "🎯 New lead from codetokloud.com",
            color: 0x152f27,
            fields: [
              { name: "Name", value: lead.name || ", ", inline: true },
              { name: "Email", value: lead.email || ", ", inline: true },
              { name: "Company", value: lead.company || ", ", inline: true },
              { name: "Interested in", value: lead.topic || ", ", inline: true },
              { name: "Message", value: lead.message || ", ", inline: false },
            ],
          },
        ],
      }),
    });
    if (!res.ok) {
      console.error("Discord notify failed:", res.status);
      return { ok: false };
    }
    return { ok: true };
  } catch (error) {
    console.error("Discord notify error:", error);
    return { ok: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadBody;

    if (!body.email || !body.name) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const [hubspot, backup, discord] = await Promise.all([
      submitToHubSpot(body),
      backupToSupabase(body),
      notifyDiscord(body),
    ]);

    // Success if the lead landed in at least one channel.
    if (hubspot.ok || backup.ok || discord.ok) {
      return NextResponse.json({ ok: true });
    }

    console.error("Lead not captured by any channel", { hubspot, backup, discord });
    return NextResponse.json(
      {
        error:
          "We couldn't submit your request right now. Please email info@codetokloud.com.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Lead route error:", error);
    return NextResponse.json(
      { error: "Unexpected error. Please email info@codetokloud.com." },
      { status: 500 }
    );
  }
}
