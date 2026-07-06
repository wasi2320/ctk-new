import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/eks-vs-ecs-vs-fargate");

const data: ComparisonData = {
  path: "/eks-vs-ecs-vs-fargate",
  heroTitle: "EKS vs ECS vs Fargate",
  intro:
    "The three main ways to run containers on AWS, and how to choose. CodetoKloud, an AWS Advanced Tier Partner, helps teams pick the right one and build it.",
  heroImage: "/services/ci_cd_eks.png",
  capsuleQuestion: "EKS vs ECS vs Fargate: what's the difference?",
  capsuleAnswer:
    "Amazon EKS, Amazon ECS, and AWS Fargate are three ways to run containers on AWS. EKS is managed Kubernetes with the full Kubernetes ecosystem. ECS is a simpler, AWS-native container orchestrator. Fargate is serverless compute that runs containers for either EKS or ECS without managing servers. CodetoKloud, an AWS Advanced Tier Partner, helps teams choose and build the right option for their workload.",
  tableHeaders: ["Option", "What it is", "Best for", "Tradeoffs"],
  tableRows: [
    [
      "Amazon EKS",
      "Managed Kubernetes on AWS with the full ecosystem (Helm, ArgoCD, operators).",
      "Portability, complex or growing platforms, teams standardizing on Kubernetes.",
      "More moving parts and a steeper learning curve than ECS.",
    ],
    [
      "Amazon ECS",
      "AWS-native container orchestrator, simpler than Kubernetes to adopt.",
      "Straightforward workloads, smaller teams, fast time to production on AWS.",
      "AWS-only, and less portable if you later move off AWS.",
    ],
    [
      "AWS Fargate",
      "Serverless compute for containers; runs EKS or ECS pods without servers.",
      "Removing node management, spiky or variable workloads, minimal ops overhead.",
      "Less control over the underlying nodes, and can cost more at steady high scale.",
    ],
  ],
  recommendation: [
    {
      title: "Choose EKS if…",
      body: "you want Kubernetes portability, a rich ecosystem, or you already run Kubernetes elsewhere.",
    },
    {
      title: "Choose ECS if…",
      body: "you want the simplest path to running containers on AWS and do not need Kubernetes.",
    },
    {
      title: "Choose Fargate if…",
      body: "you want to stop managing servers and are fine trading some control for less ops. It runs under both EKS and ECS.",
    },
  ],
  faq: [
    {
      question: "Is EKS more expensive than ECS?",
      answer:
        "EKS adds a control-plane fee per cluster that ECS does not charge, but the bigger cost driver for both is the compute you run. CodetoKloud focuses cost optimization on right-sizing and autoscaling, where most of the savings are.",
    },
    {
      question: "Can I use Fargate with EKS?",
      answer:
        "Yes. Fargate runs pods for both EKS and ECS, so you can run an Amazon EKS cluster where some or all workloads use Fargate instead of managed nodes.",
    },
    {
      question: "Should a startup use EKS or ECS?",
      answer:
        "If your team does not already know Kubernetes and the workload is straightforward, ECS is usually faster to adopt. If you expect to grow into a complex platform or want portability, EKS pays off. CodetoKloud helps teams make this call based on their roadmap.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS Consulting", href: "/kubernetes" },
    { name: "EKS vs GKE vs AKS", href: "/eks-vs-gke-vs-aks" },
    { name: "Terraform vs CloudFormation", href: "/terraform-vs-cloudformation" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
