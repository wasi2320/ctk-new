# Lead Funnel Setup

This site captures leads through a secure server-side endpoint (`/api/lead`) and
routes them to up to three channels. A lead is considered captured if **any** one
succeeds, so a lead is never silently lost:

1. **HubSpot** — your CRM (contact record, pipeline, auto-reply email, notifications). _Primary._
2. **Supabase `leads` table** — an owned backup copy of every lead.
3. **Discord** — optional instant team ping.

The contact form → posts to `/api/lead` → visitor is redirected to `/thank-you`
(which fires the Google Ads conversion and shows the Calendly scheduler).

Nothing is exposed to the browser except the public Calendly link. No AWS keys or
webhook URLs ship to the client anymore.

---

## Environment variables

Set these in the **AWS Amplify console → App settings → Environment variables**,
then redeploy. (`NEXT_PUBLIC_*` values must be present at build time.)

| Variable | Required | What it is |
| --- | --- | --- |
| `HUBSPOT_PORTAL_ID` | for HubSpot | Your HubSpot Hub ID (a number). |
| `HUBSPOT_FORM_GUID` | for HubSpot | The ID of the HubSpot form you create. |
| `NEXT_PUBLIC_CALENDLY_URL` | for scheduling | Your Calendly/Cal.com scheduling link. |
| `LEADS_DISCORD_WEBHOOK_URL` | optional | Discord webhook for a team ping. |

Until `HUBSPOT_*` are set, HubSpot is skipped. Until `NEXT_PUBLIC_CALENDLY_URL`
is set, the "Book a call" button/embed simply doesn't render. So it degrades
gracefully, but **set up HubSpot (or the Supabase table) before going live** so
leads are actually captured.

---

## 1. HubSpot (free CRM)

1. Create a free account at <https://www.hubspot.com/> (Free CRM).
2. Go to **Marketing → Forms → Create form → Embedded form → Regular form**.
3. Add exactly these fields (they map to what the site sends):
   - **First name** (`firstname`)
   - **Last name** (`lastname`)
   - **Email** (`email`) — required
   - **Company name** (`company`)
   - **Message** (`message`) — multi-line text
4. **Publish** the form.
5. Get the two IDs:
   - **Portal ID (Hub ID):** shown in the top-right of HubSpot, or under
     **Settings → Account Management → Account Defaults**. It's a number.
   - **Form GUID:** open the form → **Share/Embed** → the embed code contains
     `formId: "xxxxxxxx-xxxx-..."`. That GUID is `HUBSPOT_FORM_GUID`.
6. (Recommended) **Auto-reply to the prospect:** in the form editor →
   **Follow-up → Send follow-up email** → write a "Thanks, we'll reply within 1
   business day" email.
7. (Recommended) **Team notification:** form editor → **Automation/Notifications**
   → send internal notification to your inbox.
8. (Recommended) **Pipeline:** **CRM → Contacts** shows every lead. Use
   **CRM → Deals** to create a pipeline (New → Contacted → Qualified → Proposal →
   Won/Lost) and drag leads across it.

Set `HUBSPOT_PORTAL_ID` and `HUBSPOT_FORM_GUID` in Amplify.

---

## 2. Supabase `leads` table (owned backup)

Run this in the **Supabase SQL editor** so every lead is also stored in your own DB:

```sql
create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  name       text,
  email      text,
  company    text,
  topic      text,
  message    text,
  source     text,
  created_at timestamptz not null default now()
);

-- Server (service role) writes leads; no public/anon access.
alter table public.leads enable row level security;
```

No env change needed — the server already uses your Supabase service key.
View leads under **Table editor → leads**.

---

## 3. Calendly (scheduling)

1. Create a free account at <https://calendly.com/> (or Cal.com).
2. Create an event type, e.g. **"30-min Intro Call"**.
3. Copy its scheduling link, e.g. `https://calendly.com/codetokloud/30min`.
4. Set `NEXT_PUBLIC_CALENDLY_URL` to that link in Amplify and redeploy.

The link then appears as a "Book a call" button on the contact page and as an
embedded scheduler on `/thank-you`.

---

## 4. Optional: Discord ping

Keep your existing Discord webhook (or make a new one in **Server Settings →
Integrations → Webhooks**) and set `LEADS_DISCORD_WEBHOOK_URL`. You'll get an
embed for every new lead.

---

## Testing

1. Set the env vars in Amplify and redeploy (or add them to a local `.env.local`
   and run `npm run dev`).
2. Submit the contact form with a test email.
3. Confirm: you land on `/thank-you`, the lead appears in HubSpot Contacts, a row
   appears in the Supabase `leads` table, and (if configured) a Discord message
   arrives.
