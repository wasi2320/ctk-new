import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/kubernetes-consulting-cost");

const data: DefinitionData = {
  path: "/kubernetes-consulting-cost",
  heroTitle: "How Much Does Kubernetes Consulting Cost?",
  intro:
    "What drives the cost of Kubernetes and Amazon EKS consulting, the common engagement models, and how to get an accurate quote. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/services/ci_cd_eks.png",
  capsuleQuestion: "How much does Kubernetes consulting cost?",
  capsuleAnswer:
    "Kubernetes consulting cost depends on scope, cluster complexity, and engagement type rather than a single rate. Work generally falls into three buckets: fixed-scope projects (an EKS cluster build, a migration onto Kubernetes, a security or cost review), ongoing retainers for managed Kubernetes operations, and short assessments. As an AWS Advanced Tier Partner, CodetoKloud scopes each engagement to your environment and gives a clear quote before any work begins.",
  sections: [
    {
      title: "What drives the cost",
      body: "The main factors are scope (a single cluster versus a multi-cluster platform), workload complexity (a few stateless services versus stateful, GPU, or multi-tenant workloads), how much needs building versus tuning, and compliance requirements. SOC 2, HIPAA, and PCI DSS add controls, audit evidence, and hardening effort. Whether you need a one-time build or ongoing day-two operations also shapes the model.",
    },
    {
      title: "Common engagement models",
      body: "Fixed-scope projects deliver a defined outcome for a fixed price, such as a production-ready EKS cluster with GitOps, autoscaling, and observability. Monthly retainers cover ongoing managed Kubernetes operations, upgrades, and on-call support. Short assessments, like an EKS readiness review, security audit, or cost review, are a low-commitment way to start before a larger project.",
    },
    {
      title: "Cluster cost vs consulting cost",
      body: "Keep two things separate: what AWS charges to run the cluster (control plane, EC2 or Fargate compute, networking, storage) and what consulting costs to design and operate it. Good Kubernetes consulting usually reduces the first number through rightsizing and autoscaling, so the engagement often pays for part of itself in lower cloud spend.",
    },
    {
      title: "How to get an accurate number",
      body: "The fastest path to a real number is a short, free call. We review your clusters, workloads, and goals and send a scoped quote with no obligation. See our engagement models for how we structure the work, or our DevOps consulting cost guide for the broader picture.",
    },
  ],
  faq: [
    {
      question: "Do you charge hourly or a fixed price?",
      answer:
        "Both are available. Fixed-scope projects have a fixed price tied to a defined outcome, while ongoing Kubernetes operations are usually a monthly retainer. We agree on the model up front so there are no surprises.",
    },
    {
      question: "Can you just review our existing cluster?",
      answer:
        "Yes. A short assessment, such as an EKS security or cost review, is a common low-commitment way to start. You get a prioritized list of findings, and you can decide whether to have us implement the fixes.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Book a free consultation. CodetoKloud reviews your Kubernetes environment and requirements and sends a scoped quote, with no obligation.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "Engagement Models", href: "/engagement-models" },
    { name: "DevOps Consulting Cost", href: "/devops-consulting-cost" },
  ],
  ctaHeading: "Get a scoped quote",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
