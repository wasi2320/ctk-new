import type { Metadata } from "next";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | CodetoKloud",
  description: "Thanks for reaching out to CodetoKloud. We'll be in touch shortly.",
  // Conversion/confirmation page, keep it out of search results.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
