import LocalServicePage, {
  type LocalData,
} from "@/app/components/sections/LocalServicePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/devops-consulting-dallas");

const data: LocalData = {
  path: "/devops-consulting-dallas",
  city: "Dallas, TX",
  heroTitle: "DevOps & Kubernetes Consulting in Dallas",
  intro:
    "CodetoKloud is an AWS Advanced Tier Partner serving Dallas-area businesses remotely across the US. We help Dallas teams build, automate, and secure cloud infrastructure on AWS while working in your timezone.",
  heroImage: "/Images/DevOps_Hero.png",
  metaDescription:
    "Remote DevOps, Kubernetes, and AWS cloud consulting for Dallas-area businesses from CodetoKloud, an AWS Advanced Tier Partner. CI/CD, Amazon EKS, cost optimization, and SOC 2/HIPAA/PCI DSS compliance.",
  localIntro: [
    "Looking for DevOps or Kubernetes consulting in Dallas? CodetoKloud works with Dallas-area teams remotely across the US as an AWS Advanced Tier Partner, in your timezone.",
    "We help Dallas startups and enterprises with CI/CD automation, Amazon EKS, cloud cost optimization, and SOC 2, HIPAA, and PCI DSS compliance on AWS.",
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
      title: "An AWS Advanced Tier Partner serving Dallas remotely",
      body: "We serve Dallas businesses across the US remotely, working in your timezone.",
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
      blurb: "Retained on-premise capacity and added cloud burst nodes through an encrypted WireGuard mesh.",
    },
    {
      href: "/soc-2-healthcare-aws-case-study",
      title: "SOC 2 Multi-AZ Healthcare Platform",
      blurb: "Passed a SOC 2 audit and reached 99.99% uptime on AWS.",
    },
  ],
  faq: [
    {
      question: "Do you provide Kubernetes consulting in Dallas?",
      answer:
        "Yes. CodetoKloud serves Dallas-area businesses remotely across the US, providing Kubernetes and Amazon EKS consulting, migrations, and managed operations in your timezone.",
    },
    {
      question: "Do you work with Dallas clients remotely?",
      answer:
        "Yes. CodetoKloud is based in Naperville, Illinois, and works with Dallas-area teams remotely across the US as an AWS Advanced Tier Partner.",
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
