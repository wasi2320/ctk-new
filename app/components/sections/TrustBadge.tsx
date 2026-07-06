import Image from "next/image";

/**
 * Conversion trust strip: AWS Advanced Tier Partner badge + verifiable proof
 * points + a response-time promise. Placed next to primary CTAs (service hero,
 * contact form) so buyers see credibility at the point of decision.
 */
export default function TrustBadge({
  className = "",
  align = "start",
}: {
  className?: string;
  align?: "start" | "center";
}) {
  const justify = align === "center" ? "justify-center" : "justify-center md:justify-start";

  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${justify} ${className}`}
    >
      <Image
        src="/Images/homepage/aws_badge_.png"
        alt="AWS Advanced Tier Services Partner"
        width={769}
        height={376}
        className="h-10 md:h-12 w-auto"
      />
      <span className="text-sm font-medium text-gray-700">
        AWS Advanced Tier Partner
      </span>
      <span aria-hidden="true" className="hidden sm:inline text-gray-300">
        •
      </span>
      <span className="text-sm font-medium text-gray-700">
        ★ 4.9/5 on Clutch (9 reviews)
      </span>
      <span aria-hidden="true" className="hidden sm:inline text-gray-300">
        •
      </span>
      <span className="text-sm font-medium text-gray-700">
        Replies within 1 business day
      </span>
    </div>
  );
}
