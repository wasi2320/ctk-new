import LocalServicePage, {
  type LocalData,
} from "@/app/components/sections/LocalServicePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/devops-consulting-naperville-il");

const data: LocalData = {
  path: "/devops-consulting-naperville-il",
  city: "Naperville, IL",
  heroTitle: "DevOps & Kubernetes Consulting in Naperville, IL",
  intro:
    "CodetoKloud is an AWS Advanced Tier Partner headquartered in Naperville, Illinois. We help Naperville-area businesses build, automate, and secure cloud infrastructure on AWS.",
  heroImage: "/Images/DevOps_Hero.png",
  metaDescription:
    "DevOps, Kubernetes, and AWS cloud consulting in Naperville, IL from CodetoKloud, a local AWS Advanced Tier Partner. CI/CD, Amazon EKS, cost optimization, and SOC 2/HIPAA/PCI DSS compliance.",
  localIntro: [
    "Looking for DevOps or Kubernetes consulting in Naperville? CodetoKloud is headquartered in Naperville, Illinois, and works with local startups and established companies to modernize on AWS.",
    "As an AWS Advanced Tier Partner, we bring CI/CD automation, Amazon EKS, cloud cost optimization, and SOC 2, HIPAA, and PCI DSS compliance expertise to businesses across the Naperville and Chicago area.",
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
      title: "A local AWS Advanced Tier Partner",
      body: "We are based in Naperville, so you work with a partner in your timezone who understands the local business landscape.",
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
      href: "/soc-2-healthcare-aws-case-study",
      title: "SOC 2 Multi-AZ Healthcare Platform",
      blurb: "Passed a SOC 2 audit and reached 99.99% uptime on AWS.",
    },
    {
      href: "/helm-pipeline",
      title: "CI/CD with ArgoCD & Helm on EKS",
      blurb: "95% deployment success and 80% less manual effort.",
    },
  ],
  faq: [
    {
      question: "Do you offer DevOps consulting in Naperville?",
      answer:
        "Yes. CodetoKloud is headquartered in Naperville, Illinois, and provides DevOps, Kubernetes, and AWS cloud consulting to businesses in Naperville and across the Chicago area.",
    },
    {
      question: "Are you an AWS partner?",
      answer:
        "Yes. CodetoKloud is an AWS Advanced Tier Partner, which means our AWS expertise has been validated by Amazon.",
    },
    {
      question: "Do you work with companies outside Naperville?",
      answer:
        "Yes. We are based in Naperville and work with clients across Illinois and the US, both on-site in the Chicago area and remotely.",
    },
  ],
};

export default function Page() {
  return <LocalServicePage data={data} />;
}
