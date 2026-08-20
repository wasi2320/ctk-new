/**
 * "Book a call" scheduler (Calendly / Cal.com). Driven by NEXT_PUBLIC_CALENDLY_URL.
 * Renders nothing until that env var is set, so it degrades gracefully before setup.
 *
 * - inline=false (default): a styled button/link that opens the scheduler.
 * - inline=true: an embedded scheduler iframe (used on the /thank-you page).
 */
// Public scheduling link, not a secret, so we default to the live value and
// let env override it. This makes "Book a call" work on deploy with no env step.
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/wasif-codetokloud/30min";

export default function BookCall({
  inline = false,
  label = "Book a call",
  className = "",
}: {
  inline?: boolean;
  label?: string;
  className?: string;
}) {
  if (!CALENDLY_URL) return null;

  if (inline) {
    // Calendly's inline embed params give a cleaner, native-looking scheduler.
    const inlineSrc = CALENDLY_URL.includes("?")
      ? `${CALENDLY_URL}&embed_domain=codetokloud.com&embed_type=Inline`
      : `${CALENDLY_URL}?embed_domain=codetokloud.com&embed_type=Inline`;
    return (
      <div className={`w-full ${className}`}>
        <iframe
          src={inlineSrc}
          title="Book a call with CodetoKloud"
          className="w-full min-h-[720px] rounded-2xl border border-gray-200"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "inline-block rounded-full bg-[#16212e] text-white font-semibold px-8 py-3 hover:bg-[#16212e]/90 transition-colors"
      }
    >
      {label}
    </a>
  );
}
