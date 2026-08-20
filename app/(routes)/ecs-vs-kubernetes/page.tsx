import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/ecs-vs-kubernetes");

const data: ComparisonData = {
  path: "/ecs-vs-kubernetes",
  heroTitle: "Amazon ECS vs Kubernetes",
  intro:
    "AWS-native container orchestration versus Kubernetes on EKS, and how to choose. CodetoKloud, an AWS Advanced Tier Partner, helps teams pick one and build it on AWS.",
  heroImage: "/services/ci_cd_eks.png",
  capsuleQuestion: "Amazon ECS vs Kubernetes: what's the difference?",
  capsuleAnswer:
    "Amazon ECS is AWS's own container orchestrator, and Kubernetes is an open-source orchestrator that runs on AWS through Amazon EKS. ECS is simpler to adopt, integrates tightly with AWS services, and has no control-plane concepts to learn beyond tasks and services. Kubernetes offers a large ecosystem, portability across clouds, and fine-grained control, at the cost of a steeper learning curve. Both run containers reliably at scale on AWS. CodetoKloud, an AWS Advanced Tier Partner, helps teams choose and build the right one for their roadmap.",
  tableHeaders: ["Option", "What it is", "Best for", "Tradeoffs"],
  tableRows: [
    [
      "Amazon ECS",
      "AWS-native orchestrator with deep integration into AWS services.",
      "Straightforward workloads, smaller teams, fast time to production on AWS.",
      "AWS-only and less portable; smaller ecosystem than Kubernetes.",
    ],
    [
      "Kubernetes (EKS)",
      "Open-source orchestrator run on AWS as managed Kubernetes.",
      "Portability, complex platforms, and teams standardizing on Kubernetes.",
      "More moving parts, a control-plane fee, and a steeper learning curve.",
    ],
  ],
  recommendation: [
    {
      title: "Choose ECS if…",
      body: "you want the simplest path to running containers on AWS, your team does not already know Kubernetes, and portability off AWS is not a priority.",
    },
    {
      title: "Choose Kubernetes (EKS) if…",
      body: "you want portability, a rich ecosystem of tools like Helm and operators, or you already run Kubernetes elsewhere.",
    },
    {
      title: "Either works if…",
      body: "both can run on Fargate to remove node management. The deciding factor is usually team skills and how complex your platform needs to be.",
    },
  ],
  faq: [
    {
      question: "Is ECS easier than Kubernetes?",
      answer:
        "Generally yes. ECS has fewer concepts and less to operate than Kubernetes, so teams new to containers often reach production faster. Kubernetes offers more power and portability but adds complexity.",
    },
    {
      question: "Does Kubernetes on AWS mean EKS?",
      answer:
        "Usually. Amazon EKS is the managed way to run Kubernetes on AWS, handling the control plane for you. You can self-manage Kubernetes on EC2, but most teams use EKS to reduce operational load.",
    },
    {
      question: "Can I migrate from ECS to Kubernetes later?",
      answer:
        "Yes, though task definitions and networking differ, so it takes planning. CodetoKloud, an AWS Advanced Tier Partner, helps teams start on ECS and move to EKS when portability or ecosystem needs justify it.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "EKS vs ECS vs Fargate", href: "/eks-vs-ecs-vs-fargate" },
    { name: "DevOps Consulting", href: "/devops" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
