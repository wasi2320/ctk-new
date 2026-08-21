import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/what-is-finops");

const data: DefinitionData = {
  path: "/what-is-finops",
  heroTitle: "What Is FinOps?",
  intro:
    "How FinOps brings visibility, accountability, and forecasting to AWS cloud spend through rightsizing, Savings Plans, and shared cost ownership between engineering and finance. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/services/aws-solution-illustration.png",
  capsuleQuestion: "What is FinOps?",
  capsuleAnswer:
    "FinOps is a practice for managing cloud spend as a shared responsibility between engineering, finance, and product, backed by real-time cost visibility. It combines tagging and cost allocation, forecasting, rightsizing of over-provisioned resources, and commitment discounts like Savings Plans and Reserved Instances. The goal is not just to cut spend but to tie cost to business value and make tradeoffs with data. CodetoKloud runs FinOps on AWS as an AWS Advanced Tier Partner.",
  sections: [
    {
      title: "Visibility and cost allocation",
      body: "FinOps starts with knowing where the money goes. That means a consistent tagging strategy, cost allocation by team, service, and environment, and dashboards that show spend trends. Amazon Cost Explorer, AWS Budgets, and Cost and Usage Reports feed this view. Without allocation, cost is a single opaque bill; with it, each team can see and own its footprint.",
    },
    {
      title: "Rightsizing and eliminating waste",
      body: "A large share of cloud spend is over-provisioned compute, idle resources, orphaned volumes, and oversized databases. Rightsizing matches instance types and container requests to real usage, and autoscaling handles variable load. On Kubernetes, this includes tuning requests and limits and using cluster autoscaling so you pay for what workloads actually need.",
    },
    {
      title: "Commitments and forecasting",
      body: "Once usage is steady, Savings Plans and Reserved Instances cut the rate on predictable compute significantly compared to on-demand. FinOps balances commitment coverage against flexibility so you do not over-commit. Forecasting projects future spend from current trends, which lets finance plan and engineering see the cost impact of design decisions before they ship.",
    },
    {
      title: "How CodetoKloud runs FinOps",
      body: "We combine an initial cost audit with ongoing optimization: tagging and allocation, rightsizing recommendations, commitment planning, and guardrails like budgets and anomaly alerts. As an AWS Advanced Tier Partner, we tie cost work to your architecture so savings are durable, not one-time. See our FinOps and cost optimization service for how the engagement works.",
    },
  ],
  faq: [
    {
      question: "Is FinOps just about cutting costs?",
      answer:
        "No. FinOps is about spending efficiently and tying cost to value, not blanket cost cutting. Sometimes the right call is to spend more on a workload that drives revenue. The discipline is making those decisions with clear data and shared accountability.",
    },
    {
      question: "Do we need a dedicated FinOps team?",
      answer:
        "Not to start. Many companies begin with a cost audit and a set of practices that engineering and finance adopt together. A partner like CodetoKloud can run the initial optimization and hand off repeatable processes, or manage it on an ongoing basis.",
    },
    {
      question: "What tools does FinOps use on AWS?",
      answer:
        "Core AWS tools include Cost Explorer, Budgets, Cost and Usage Reports, Compute Optimizer, and Savings Plans recommendations. On Kubernetes, tools like Kubecost help attribute cluster spend. We select and configure the right mix for your environment.",
    },
  ],
  crossLinks: [
    { name: "FinOps & Cost Optimization", href: "/finops" },
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
  ],
  ctaHeading: "Talk to an AWS partner",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
