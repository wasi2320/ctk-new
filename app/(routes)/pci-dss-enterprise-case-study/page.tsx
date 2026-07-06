import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/pci-dss-enterprise-case-study");

const data: CaseStudyData = {
  path: "/pci-dss-enterprise-case-study",
  title: "PCI DSS Enterprise Cloud Foundation",
  heroTitle: "A PCI DSS Enterprise Cloud Foundation",
  intro:
    "An enterprise needed to standardize developer environments and access controls to work under PCI DSS. We built the foundation on Google Cloud, with governance enforced through code.",
  heroImage: "/services/aws-solution-illustration.png",
  metaDescription:
    "How CodetoKloud built a PCI DSS-aligned enterprise cloud foundation with standardized Cloud Workstations, shared VPC networking, and Terraform-managed IAM and privileged access.",
  problem: [
    "An enterprise needed to standardize developer environments and tighten access controls to work under PCI DSS. Inconsistent local setups and ad hoc access are exactly what a PCI audit flags.",
  ],
  solution: [
    {
      title: "Standardized Developer Workstations",
      body: "We rolled out managed Cloud Workstations on a validated Ubuntu 24.04 image with a Linux-only constraint, so every developer works from a consistent, controlled environment.",
    },
    {
      title: "Segmented Network Foundation",
      body: "We built a Shared VPC architecture to separate and control network access across teams and workloads.",
    },
    {
      title: "Access Governance as Code",
      body: "We managed IAM and privileged access through Terraform, including entitlement creation, organization policy, and drift detection, so access stays auditable and consistent.",
    },
  ],
  results: [
    "The enterprise got a PCI DSS-aligned foundation where developer environments and access controls are standardized and enforced through code.",
    "Access and policy are version-controlled and monitored for drift, which is the kind of evidence a PCI audit looks for.",
  ],
  metrics: ["PCI DSS-aligned", "Access governed via Terraform"],
  stack: [
    "Google Cloud",
    "Cloud Workstations",
    "Shared VPC",
    "Terraform",
    "IAM / PAM",
  ],
  crossLinks: [
    { name: "PCI DSS Compliance", href: "/pci-dss-compliance" },
    { name: "Security & Compliance", href: "/security-and-compliance" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
