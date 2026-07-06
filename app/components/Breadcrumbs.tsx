"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL, breadcrumbSchema } from "@/lib/structured-data";

// Nice labels for known route segments. Unknown segments are prettified.
const LABELS: Record<string, string> = {
  "cloud-service": "Cloud Services",
  devops: "DevOps",
  kubernetes: "Kubernetes & EKS",
  ai: "AI & Automation",
  "web-solutions": "Web Solutions",
  "mobile-app": "Mobile App Development",
  "security-and-compliance": "Security & Compliance",
  "hipaa-compliance": "HIPAA Compliance",
  "soc-2-compliance": "SOC 2 Compliance",
  "pci-dss-compliance": "PCI DSS Compliance",
  "soc-2-healthcare-aws-case-study": "SOC 2 Healthcare Case Study",
  "kubernetes-compliance-platform-case-study": "Kubernetes Compliance Case Study",
  "hipaa-aws-hardening-case-study": "HIPAA Hardening Case Study",
  "pci-dss-enterprise-case-study": "PCI DSS Enterprise Case Study",
  "hybrid-cloud-kubernetes-case-study": "Hybrid Cloud Kubernetes Case Study",
  "eks-vs-ecs-vs-fargate": "EKS vs ECS vs Fargate",
  "eks-vs-gke-vs-aks": "EKS vs GKE vs AKS",
  "terraform-vs-cloudformation": "Terraform vs CloudFormation",
  "devops-consulting-naperville-il": "DevOps Consulting Naperville, IL",
  "devops-kubernetes-consulting-chicago": "DevOps & Kubernetes Consulting Chicago",
  "what-is-a-kubernetes-consultant": "What Is a Kubernetes Consultant?",
  "what-does-a-devops-consultant-do": "What Does a DevOps Consultant Do?",
  "devops-consulting-cost": "DevOps Consulting Cost",
  "engagement-models": "Engagement Models",
  "cloud-migration": "Cloud Migration",
  "consulting-and-advisory": "Consulting & Advisory",
  finops: "FinOps",
  "ui-ux": "UI/UX Design",
  "e-commerce": "E-Commerce",
  "ed-tech": "EdTech",
  "fin-tech": "FinTech",
  "financial-services": "Financial Services",
  healthcare: "Healthcare",
  manufacturing: "Manufacturing",
  "non-profits": "Non-Profits",
  "pe-vc": "PE & VC Firms",
  "powering-business": "Professional Services",
  "real-estate": "Real Estate",
  "saas-isv": "SaaS & ISVs",
  "small-and-mid-size-business": "Small & Mid-Sized Business",
  aboutus: "About Us",
  contact: "Contact",
  careers: "Careers",
  blogs: "Blog",
  faq: "FAQ",
  "privacy-policy": "Privacy Policy",
  "term-condition": "Terms & Conditions",
  roles: "Roles",
};

function prettify(segment: string): string {
  if (LABELS[segment]) return LABELS[segment];
  // Fallback: hyphens/underscores to spaces, title-case, cap length.
  const words = segment.replace(/[-_]/g, " ").split(" ");
  const label = words
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
  return label.length > 60 ? `${label.slice(0, 57)}…` : label;
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  // No breadcrumbs on the homepage.
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs = [
    { name: "Home", url: SITE_URL, href: "/" },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      return { name: prettify(segment), url: `${SITE_URL}${href}`, href };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-100 px-4 md:px-28 py-3"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500 max-w-[1400px] mx-auto">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-[#000209] transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      <JsonLd
        data={breadcrumbSchema(
          crumbs.map(({ name, url }) => ({ name, url }))
        )}
      />
    </nav>
  );
}
