"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Global error boundary. Catches render/runtime errors in the route tree
 * (including Supabase failures on dynamic pages) and shows a branded fallback
 * instead of Next's unstyled default error page.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for logging/monitoring.
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f4f7fb] px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#0972d3] mb-3">
          Something went wrong
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#16212e] mb-4">
          We hit an unexpected error
        </h1>
        <p className="text-[#5a6b81] mb-8">
          Sorry about that. You can try again, or head back to the homepage. If
          it keeps happening, reach us at{" "}
          <a
            href="mailto:info@codetokloud.com"
            className="text-[#0972d3] underline"
          >
            info@codetokloud.com
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="rounded-full px-6 py-3 bg-[#ff9900] text-[#16212e] font-semibold hover:brightness-95 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full px-6 py-3 border border-[#16212e]/20 text-[#16212e] font-semibold hover:border-[#0972d3] hover:text-[#0972d3] transition"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
