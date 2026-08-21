import Link from "next/link";

const COMPLIANCE = [
  {
    name: "HIPAA Compliance",
    href: "/hipaa-compliance",
    description:
      "Protect electronic health data on AWS with access, encryption, logging, and evidence controls.",
  },
  {
    name: "SOC 2 Compliance",
    href: "/soc-2-compliance",
    description:
      "Prepare AWS systems and operating processes for the SOC 2 Trust Services Criteria.",
  },
  {
    name: "PCI DSS Compliance",
    href: "/pci-dss-compliance",
    description:
      "Reduce cardholder data risk with scoped architecture, cloud controls, and audit evidence.",
  },
  {
    name: "Security & Compliance",
    href: "/security-and-compliance",
    description:
      "Strengthen identity, data protection, monitoring, response, and cloud governance together.",
  },
];

/**
 * Cross-links between the compliance pages (a small internal hub). Improves
 * crawlability and spreads link equity across the compliance cluster.
 */
export default function ComplianceLinks({
  currentPath,
}: {
  currentPath: string;
}) {
  const others = COMPLIANCE.filter((c) => c.href !== currentPath);

  return (
    <section className="bg-gray-50 px-4 py-10 sm:px-6 md:px-10 md:py-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Explore Compliance on AWS
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 md:text-base">
          Compare focused compliance services and choose the next step for your
          AWS environment.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {others.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-gray-200 bg-white px-5 py-4 transition-colors hover:border-[#16212e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85f00] focus-visible:ring-offset-2"
            >
              <span className="flex items-center justify-between gap-4 font-semibold text-gray-900 group-hover:text-[#b85f00]">
                {item.name}
                <span aria-hidden="true">&rarr;</span>
              </span>
              <span className="mt-1 block text-sm leading-5 text-gray-600">
                {item.description}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="group rounded-xl bg-[#16212e] px-5 py-4 text-white transition-colors hover:bg-[#16212e]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85f00] focus-visible:ring-offset-2"
          >
            <span className="flex items-center justify-between gap-4 font-semibold">
              Book a compliance readiness review
              <span aria-hidden="true">&rarr;</span>
            </span>
            <span className="mt-1 block text-sm leading-5 text-gray-200">
              Review control gaps, evidence needs, and practical next steps with
              a cloud compliance consultant.
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
