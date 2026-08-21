"use client";

import React, { useState } from "react";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL ||
  "https://discord.com/api/webhooks/1382850558288855200/FdgEKZeNdokxtBgahKci9FS70F_AS3lObDBZEaA0ruun7H98PxK-_oGKjFQs65KvQnU4";

type Status = "idle" | "submitting" | "success" | "error";

export default function SmsConsentPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setMessage("Please check the consent box to opt in.");
      return;
    }
    setStatus("submitting");
    setMessage("");

    const content =
      "**New SMS Consent Opt-In**\n" +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      "Consent: YES (checkbox confirmed)\n" +
      `Timestamp: ${new Date().toISOString()}\n` +
      "Source: codetokloud SMS consent form";

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      setMessage(
        "Thank you. Your SMS consent has been recorded. You may reply STOP at any time to opt out."
      );
      setName("");
      setPhone("");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage(
        "Sorry, something went wrong submitting your consent. Please email info@codetokloud.com."
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">SMS Consent</h1>
        <p className="text-gray-600">
          Opt in to receive text messages related to your engagement with
          CodetoKloud.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-sm text-gray-700">
          <h2 className="font-semibold text-base mb-2">
            What you are agreeing to
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              By submitting this form with the consent box checked, you give{" "}
              <strong>CodetoKloud</strong> express written permission to send you
              SMS text messages related to your engagement and services.
            </li>
            <li>
              <strong>Message frequency varies.</strong> Message and data rates
              may apply.
            </li>
            <li>
              You can opt out at any time by replying <strong>STOP</strong> to
              any message. Reply <strong>HELP</strong> for assistance.
            </li>
            <li>
              Your SMS consent and opt-in data will <strong>not</strong> be
              shared with any third parties or affiliates for marketing or any
              other purposes.
            </li>
            <li>
              See our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/term-condition"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms &amp; Conditions
              </a>
              .
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-medium mb-1.5 text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1.5 text-sm">
              Mobile phone number
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 (555) 123-4567"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1.5 text-sm">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <label className="flex items-start gap-3 border border-gray-200 rounded-lg p-3.5 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-[18px] h-[18px] flex-none"
            />
            <span className="text-sm text-gray-700">
              <strong>
                I agree to receive SMS text messages from CodetoKloud
              </strong>{" "}
              at the number provided. I understand message frequency varies,
              message and data rates may apply, and I can reply STOP to opt out
              at any time. My consent is not a condition of purchase.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {status === "submitting" ? "Submitting…" : "Submit Consent"}
          </button>

          {message && (
            <div
              className={`text-sm p-3 rounded-lg ${
                status === "success"
                  ? "bg-[#eef6fd] text-[#1b3a5c] border border-[#bfdcf5]"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}
        </form>

        <p className="text-xs text-gray-500 text-center mt-5">
          Questions about our SMS program? Email{" "}
          <a href="mailto:info@codetokloud.com" className="text-blue-600">
            info@codetokloud.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
