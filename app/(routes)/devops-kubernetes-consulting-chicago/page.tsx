import LocalServicePage, {
  type LocalData,
} from "@/app/components/sections/LocalServicePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/devops-kubernetes-consulting-chicago");

const data: LocalData = {
  path: "/devops-kubernetes-consulting-chicago",
  city: "Chicago",
  heroTitle: "DevOps & Kubernetes Consulting in Chicago",
  intro:
    "CodetoKloud is an AWS Advanced Tier Partner serving the Chicago area from nearby Naperville. We help Chicago businesses build, automate, and secure cloud infrastructure on AWS.",
  heroImage: "/Images/DevOps_Hero.png",
  metaDescription:
    "DevOps, Kubernetes, and AWS cloud consulting for Chicago-area businesses from CodetoKloud, an AWS Advanced Tier Partner. CI/CD, Amazon EKS, cost optimization, and SOC 2/HIPAA/PCI DSS compliance.",
  localIntro: [
    "Need DevOps or Kubernetes consulting in Chicago? CodetoKloud serves the greater Chicago area from Naperville, Illinois, as an AWS Advanced Tier Partner.",
    "We help Chicago startups and enterprises with CI/CD automation, Amazon EKS, cloud cost optimization, and SOC 2, HIPAA, and PCI DSS compliance on AWS.",
  ],
  services: [
    { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
    { name: "DevOps & CI/CD", href: "/devops" },
    { name: "Kubernetes & Amazon EKS", href: "/kubernetes" },
    { name: "Security & Compliance", href: "/security-and-compliance" },
    { name: "FinOps & Cost Optimization", href: "/finops" },
    { name: "AI Automation", href: "/ai" },
  ],
  whyLocal: [
    {
      title: "An AWS Advanced Tier Partner in the Chicago area",
      body: "Based in nearby Naperville, we serve Chicago businesses in your timezone, on-site or remote.",
    },
    {
      title: "Senior engineers, not resellers",
      body: "You work directly with the engineers who build and operate your infrastructure, not a sales layer.",
    },
    {
      title: "Proven, measurable results",
      body: "Real outcomes like 99.99% uptime, roughly 35% cloud cost cuts, and passed SOC 2 audits.",
    },
  ],
  caseStudies: [
    {
      href: "/goagalia-healthcare-workforce-management",
      title: "HIPAA-Compliant EKS for Healthcare",
      blurb: "~35% lower cost, 850ms to 320ms latency on Amazon EKS.",
    },
    {
      href: "/hybrid-cloud-kubernetes-case-study",
      title: "Hybrid On-Prem + Cloud Kubernetes",
      blurb: "99.9% uptime and sub-35ms latency across on-prem and cloud.",
    },
    {
      href: "/soc-2-healthcare-aws-case-study",
      title: "SOC 2 Multi-AZ Healthcare Platform",
      blurb: "Passed a SOC 2 audit and reached 99.99% uptime on AWS.",
    },
  ],
  faq: [
    {
      question: "Do you provide Kubernetes consulting in Chicago?",
      answer:
        "Yes. CodetoKloud serves the Chicago area from Naperville, Illinois, providing Kubernetes and Amazon EKS consulting, migrations, and managed operations.",
    },
    {
      question: "Where is CodetoKloud located?",
      answer:
        "CodetoKloud is based in Naperville, Illinois, in the Chicago metro area, and serves clients across the region and the US.",
    },
    {
      question: "Are you an AWS Advanced Tier Partner?",
      answer:
        "Yes. Our AWS expertise is validated by Amazon as an AWS Advanced Tier Partner.",
    },
  ],
};

export default function Page() {
  return <LocalServicePage data={data} />;
}
