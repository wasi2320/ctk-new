import Link from "next/link";

const SERVICES = [
  { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
  { name: "DevOps", href: "/devops" },
  { name: "Kubernetes & EKS", href: "/kubernetes" },
  { name: "AI Automation", href: "/ai" },
  { name: "Full-Stack Development", href: "/web-solutions" },
  { name: "Security & Compliance", href: "/security-and-compliance" },
  { name: "Cloud Migration", href: "/cloud-migration" },
];

/**
 * Contextual internal links to sibling services + a contact CTA.
 * Improves crawlability and spreads link equity across service pages.
 */
export default function RelatedServices({
  currentPath,
}: {
  currentPath: string;
}) {
  const others = SERVICES.filter((s) => s.href !== currentPath);

  return (
    <section className="py-16 px-4 md:px-28 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Explore More Services
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {others.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="px-5 py-3 rounded-full border border-gray-300 text-gray-800 hover:border-[#0d1526] hover:text-[#0d1526] transition-colors"
            >
              {service.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-3 rounded-full bg-[#0d1526] text-white hover:bg-[#0d1526]/90 transition-colors"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
