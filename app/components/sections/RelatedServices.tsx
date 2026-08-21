import Link from "next/link";

const SERVICES = {
  "/cloud-service": "AWS Cloud Infrastructure",
  "/consulting-and-advisory": "Cloud Architecture Advisory",
  "/devops": "DevOps and CI/CD",
  "/kubernetes": "Kubernetes and Amazon EKS",
  "/security-and-compliance": "Security and Compliance",
  "/cloud-migration": "AWS Cloud Migration",
  "/finops": "AWS FinOps",
  "/ai": "AI Automation on AWS",
  "/web-solutions": "Web Application Development",
  "/mobile-app": "Mobile App Development",
  "/ui-ux": "UI and UX Design",
} as const;

const RELATED_PATHS: Record<string, Array<keyof typeof SERVICES>> = {
  "/cloud-service": ["/cloud-migration", "/devops", "/kubernetes", "/security-and-compliance", "/finops", "/consulting-and-advisory"],
  "/consulting-and-advisory": ["/cloud-service", "/cloud-migration", "/devops", "/kubernetes", "/security-and-compliance", "/finops"],
  "/devops": ["/cloud-service", "/kubernetes", "/cloud-migration", "/security-and-compliance", "/finops", "/consulting-and-advisory"],
  "/kubernetes": ["/devops", "/cloud-service", "/security-and-compliance", "/finops", "/cloud-migration", "/consulting-and-advisory"],
  "/security-and-compliance": ["/cloud-service", "/devops", "/kubernetes", "/cloud-migration", "/finops", "/consulting-and-advisory"],
  "/cloud-migration": ["/cloud-service", "/devops", "/security-and-compliance", "/kubernetes", "/finops", "/consulting-and-advisory"],
  "/finops": ["/cloud-service", "/devops", "/kubernetes", "/cloud-migration", "/consulting-and-advisory", "/security-and-compliance"],
  "/ai": ["/web-solutions", "/cloud-service", "/security-and-compliance", "/devops", "/ui-ux", "/consulting-and-advisory"],
  "/web-solutions": ["/ui-ux", "/mobile-app", "/cloud-service", "/devops", "/ai", "/security-and-compliance"],
  "/mobile-app": ["/ui-ux", "/web-solutions", "/cloud-service", "/devops", "/ai", "/security-and-compliance"],
  "/ui-ux": ["/web-solutions", "/mobile-app", "/ai", "/cloud-service", "/devops", "/consulting-and-advisory"],
};

/**
 * Contextual internal links to sibling services + a contact CTA.
 * Improves crawlability and spreads link equity across service pages.
 */
export default function RelatedServices({
  currentPath,
}: {
  currentPath: string;
}) {
  const fallback = (Object.keys(SERVICES) as Array<keyof typeof SERVICES>)
    .filter((path) => path !== currentPath)
    .slice(0, 6);
  const paths = RELATED_PATHS[currentPath] || fallback;

  return (
    <section className="bg-white px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          Explore More Services
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {paths.map((path) => (
            <Link
              key={path}
              href={path}
              className="rounded-full border border-gray-300 px-4 py-2.5 text-gray-800 transition-colors hover:border-[#0d1526] hover:text-[#0d1526]"
            >
              {SERVICES[path]}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-[#0d1526] px-4 py-2.5 text-white transition-colors hover:bg-[#0d1526]/90"
          >
            Book an AWS review
          </Link>
        </div>
      </div>
    </section>
  );
}
