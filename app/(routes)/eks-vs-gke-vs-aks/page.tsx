import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/eks-vs-gke-vs-aks");

const data: ComparisonData = {
  path: "/eks-vs-gke-vs-aks",
  heroTitle: "EKS vs GKE vs AKS",
  intro:
    "The managed Kubernetes services from AWS, Google Cloud, and Azure, and how to choose. CodetoKloud is an AWS Advanced Tier Partner and specializes in Amazon EKS.",
  heroImage: "/services/aws-solution-illustration.png",
  capsuleQuestion: "EKS vs GKE vs AKS: which managed Kubernetes should you use?",
  capsuleAnswer:
    "Amazon EKS, Google GKE, and Azure AKS are the managed Kubernetes services from AWS, Google Cloud, and Azure. The right one usually follows the cloud you already use and your existing tooling. CodetoKloud is an AWS Advanced Tier Partner that specializes in Amazon EKS, and we help teams choose based on their cloud footprint rather than hype.",
  tableHeaders: ["Service", "Cloud", "Strengths", "Best for"],
  tableRows: [
    [
      "Amazon EKS",
      "AWS",
      "Deep AWS integration (IAM, VPC, ALB), broad adoption, and the widest ecosystem.",
      "Teams on AWS, or that want the largest cloud and partner ecosystem.",
    ],
    [
      "Google GKE",
      "Google Cloud",
      "Mature Kubernetes experience (Google created Kubernetes), strong autopilot and autoscaling.",
      "Teams on Google Cloud, or that want the most hands-off managed Kubernetes.",
    ],
    [
      "Azure AKS",
      "Azure",
      "Tight integration with Entra ID, Azure DevOps, and the Microsoft stack.",
      "Teams already invested in Azure and Microsoft tooling.",
    ],
  ],
  recommendation: [
    {
      title: "Choose EKS if…",
      body: "you run on AWS or want the broadest ecosystem and partner support. This is where CodetoKloud specializes.",
    },
    {
      title: "Choose GKE if…",
      body: "you are on Google Cloud or want the most automated, hands-off Kubernetes operations.",
    },
    {
      title: "Choose AKS if…",
      body: "you are standardized on Azure and Microsoft identity and tooling.",
    },
  ],
  faq: [
    {
      question: "Which managed Kubernetes is best?",
      answer:
        "There is no single best. The right choice almost always follows the cloud you already run on and your team's tooling. For AWS-centric organizations, Amazon EKS is the natural fit, and it is where CodetoKloud focuses.",
    },
    {
      question: "Can you migrate between EKS, GKE, and AKS?",
      answer:
        "Yes. Because they are all Kubernetes, workloads are portable, though networking, load balancers, and identity differ per cloud. CodetoKloud handles those cloud-specific pieces during a migration.",
    },
    {
      question: "Do you work with GKE and AKS too?",
      answer:
        "Our specialty and partner status are with AWS and Amazon EKS. We can advise on GKE and AKS, but we lead with EKS, where our depth and AWS Advanced Tier Partner credential are.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS Consulting", href: "/kubernetes" },
    { name: "EKS vs ECS vs Fargate", href: "/eks-vs-ecs-vs-fargate" },
    { name: "Terraform vs CloudFormation", href: "/terraform-vs-cloudformation" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
