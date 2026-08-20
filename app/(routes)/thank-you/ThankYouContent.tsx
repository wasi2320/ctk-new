"use client";

import { useEffect } from "react";
import Link from "next/link";
import BookCall from "@/app/components/sections/BookCall";

export default function ThankYouContent() {
  // Fire the Google Ads conversion on this clean confirmation URL.
  useEffect(() => {
    const report = (
      window as unknown as { gtag_report_conversion?: () => void }
    ).gtag_report_conversion;
    if (typeof report === "function") report();
  }, []);

  return (
    <section className="min-h-[70vh] px-4 md:px-8 py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#16212e] text-white text-3xl">
          ✓
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Thank you, we&apos;ve got your request
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          A member of our AWS Advanced Tier Partner team will review your details
          and reply within <strong>1 business day</strong>.
        </p>
        <p className="text-gray-600 mb-10">
          Prefer to talk sooner? Grab a time that works for you below.
        </p>

        {/* Calendly embed, appears once NEXT_PUBLIC_CALENDLY_URL is configured. */}
        <BookCall inline />

        <div className="mt-10">
          <Link
            href="/"
            className="text-[#16212e] font-medium underline hover:no-underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
