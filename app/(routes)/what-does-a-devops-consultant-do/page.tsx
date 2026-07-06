import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/what-does-a-devops-consultant-do");

const data: DefinitionData = {
  path: "/what-does-a-devops-consultant-do",
  heroTitle: "What Does a DevOps Consultant Do?",
  intro:
    "A plain-English guide to what DevOps consultants do, when to hire one, and what to look for. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/Images/DevOps_Hero.png",
  capsuleQuestion: "What does a DevOps consultant do?",
  capsuleAnswer:
    "A DevOps consultant helps organizations automate how software is built, tested, deployed, and operated. They set up CI/CD pipelines, infrastructure as code, monitoring, and cloud automation so teams ship faster and more reliably. CodetoKloud, an AWS Advanced Tier Partner, provides DevOps consulting on AWS.",
  sections: [
    {
      title: "Core responsibilities",
      body: "A DevOps consultant designs CI/CD pipelines, provisions infrastructure as code with Terraform or CloudFormation, containerizes applications and runs them on Kubernetes, adds monitoring and observability, optimizes cloud cost, and builds security into the pipeline (DevSecOps).",
    },
    {
      title: "When should you hire a DevOps consultant?",
      body: "Consider one when deployments are slow or error-prone, infrastructure is manual and inconsistent, cloud costs are rising, or you need to scale reliably. A DevOps consultant automates the delivery pipeline and hardens your infrastructure so releases stop being risky.",
    },
    {
      title: "What to look for",
      body: "Look for hands-on engineers rather than a sales layer, a cloud partner credential like AWS Advanced Tier Partner, and case studies with real numbers such as deployment success rate and release frequency.",
    },
    {
      title: "How CodetoKloud helps",
      body: "We build CI/CD, infrastructure as code, GitOps, and observability on AWS. On real client pipelines this has meant outcomes like a 95% deployment success rate and 50% faster releases.",
    },
  ],
  faq: [
    {
      question: "How much does a DevOps consultant cost?",
      answer:
        "It depends on scope, from a fixed-scope pipeline audit to ongoing managed DevOps. CodetoKloud scopes each engagement to your needs. See our DevOps consulting cost guide for how pricing works.",
    },
    {
      question: "DevOps consultant vs DevOps engineer: what's the difference?",
      answer:
        "A DevOps engineer is usually a full-time team member. A consultant is an external expert brought in to set up, fix, or advise, often faster and with broader experience across many environments.",
    },
    {
      question: "Do you offer ongoing DevOps or one-time projects?",
      answer:
        "Both. CodetoKloud provides one-time setups such as CI/CD implementation, cloud migrations, and audits, as well as ongoing managed DevOps and Kubernetes operations.",
    },
  ],
  crossLinks: [
    { name: "DevOps Consulting", href: "/devops" },
    { name: "What is a Kubernetes consultant?", href: "/what-is-a-kubernetes-consultant" },
    { name: "DevOps consulting cost", href: "/devops-consulting-cost" },
  ],
  ctaHeading: "Need a DevOps consultant?",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
