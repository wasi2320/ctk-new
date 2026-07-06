import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/devops-consulting-cost");

const data: DefinitionData = {
  path: "/devops-consulting-cost",
  heroTitle: "How Much Does DevOps Consulting Cost?",
  intro:
    "What drives the cost of DevOps and Kubernetes consulting, the common engagement models, and how to get an accurate quote. From CodetoKloud.",
  heroImage: "/services/aws-solution-illustration.png",
  capsuleQuestion: "How much does DevOps consulting cost?",
  capsuleAnswer:
    "DevOps consulting cost depends on scope, complexity, and engagement type rather than a single rate. Engagements usually fall into three buckets: fixed-scope projects (a CI/CD setup, a cloud migration, an audit), ongoing retainers for managed DevOps, and short assessments. CodetoKloud scopes each engagement to your needs and gives a clear quote before any work begins.",
  sections: [
    {
      title: "What drives the cost",
      body: "The main factors are scope (one pipeline versus a full platform), complexity (a single app versus microservices), compliance requirements (SOC 2, HIPAA, and PCI DSS add controls and effort), and whether you need a one-time project or ongoing operations.",
    },
    {
      title: "Common engagement models",
      body: "Fixed-scope projects deliver a defined outcome for a fixed price. Monthly retainers cover ongoing managed DevOps and Kubernetes operations. Short assessments, like a readiness review or cloud cost audit, are a low-commitment way to start before a larger project.",
    },
    {
      title: "How to get an accurate number",
      body: "The fastest path to a real number is a short, free call. We review your setup and goals and send a scoped quote with no obligation. See our engagement models for how we structure the work.",
    },
  ],
  faq: [
    {
      question: "Do you charge hourly or a fixed price?",
      answer:
        "Both are available. Fixed-scope projects have a fixed price tied to a defined outcome, while ongoing work is usually a monthly retainer. We agree on the model up front so there are no surprises.",
    },
    {
      question: "Is there a minimum engagement?",
      answer:
        "There is no fixed minimum. A short assessment is a common low-commitment way to start and see the value before committing to a larger project.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Book a free consultation. CodetoKloud reviews your requirements and sends a scoped quote, with no obligation.",
    },
  ],
  crossLinks: [
    { name: "Engagement Models", href: "/engagement-models" },
    { name: "DevOps Consulting", href: "/devops" },
    { name: "Kubernetes & EKS Consulting", href: "/kubernetes" },
  ],
  ctaHeading: "Get a scoped quote",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
