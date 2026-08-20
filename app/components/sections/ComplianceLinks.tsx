import Link from "next/link";

const COMPLIANCE = [
  { name: "HIPAA Compliance", href: "/hipaa-compliance" },
  { name: "SOC 2 Compliance", href: "/soc-2-compliance" },
  { name: "PCI DSS Compliance", href: "/pci-dss-compliance" },
  { name: "Security & Compliance", href: "/security-and-compliance" },
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
    <section className="py-16 px-4 md:px-28 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Explore Compliance on AWS
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {others.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-3 rounded-full border border-gray-300 text-gray-800 hover:border-[#16212e] hover:text-[#16212e] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-3 rounded-full bg-[#16212e] text-white hover:bg-[#16212e]/90 transition-colors"
          >
            Get a free compliance review
          </Link>
        </div>
      </div>
    </section>
  );
}
