import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/what-is-amazon-eks");

const data: DefinitionData = {
  path: "/what-is-amazon-eks",
  heroTitle: "What Is Amazon EKS?",
  intro:
    "How Amazon EKS provides managed Kubernetes on AWS: a managed control plane, flexible compute with EC2 or Fargate, and deep integration with AWS networking, IAM, and load balancing. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/services/ci_cd_eks.png",
  capsuleQuestion: "What is Amazon EKS?",
  capsuleAnswer:
    "Amazon EKS (Elastic Kubernetes Service) is AWS's managed Kubernetes service. AWS runs and scales the Kubernetes control plane across multiple Availability Zones, applies patches, and handles its availability, so you manage workloads instead of the control plane. You run pods on EC2 node groups or serverless AWS Fargate, and EKS integrates with IAM, VPC networking, and Elastic Load Balancing. CodetoKloud designs and operates EKS clusters as an AWS Advanced Tier Partner.",
  sections: [
    {
      title: "A managed control plane",
      body: "The Kubernetes control plane (API server, etcd, scheduler) is the part that is operationally demanding to run yourself. EKS runs it for you across multiple Availability Zones, patches it, and scales it, with an SLA on availability. You still use standard, upstream-conformant Kubernetes and the same kubectl, Helm, and manifests, so workloads stay portable.",
    },
    {
      title: "Compute: EC2 node groups or Fargate",
      body: "EKS gives you two ways to run pods. Managed node groups run on EC2 instances you size and can bin-pack, which is cost-effective at steady scale and supports GPUs and custom AMIs. AWS Fargate runs pods without managing servers, which suits spiky or isolated workloads. Many clusters use both, placing baseline load on EC2 and burst on Fargate.",
    },
    {
      title: "AWS integration",
      body: "EKS integrates with the rest of AWS: IAM Roles for Service Accounts scope pod permissions, the VPC CNI gives pods real VPC IP addresses, the AWS Load Balancer Controller provisions ALBs and NLBs from Kubernetes resources, and EBS or EFS provide persistent storage. This is the main reason to pick EKS over self-managed Kubernetes on AWS: identity, networking, and load balancing are native.",
    },
    {
      title: "How CodetoKloud runs EKS",
      body: "We design EKS clusters with Terraform, GitOps delivery via ArgoCD or Flux, autoscaling, observability, and security hardening, and we tune them for cost. As an AWS Advanced Tier Partner, we also help teams decide when EKS is the right tool versus ECS or Fargate. See our Kubernetes and EKS consulting service for details.",
    },
  ],
  faq: [
    {
      question: "How is EKS different from running Kubernetes myself?",
      answer:
        "With self-managed Kubernetes you own the control plane: its availability, patching, etcd backups, and upgrades. EKS takes that on and integrates identity, networking, and load balancing with AWS. You still manage your workloads and node scaling, but the hardest operational surface is handled.",
    },
    {
      question: "When should I use EKS instead of ECS?",
      answer:
        "EKS is the right call when you want the Kubernetes ecosystem, portability across clouds or on-prem, or advanced scheduling. ECS is simpler and tightly coupled to AWS. Our EKS vs ECS vs Fargate guide walks through how to choose.",
    },
    {
      question: "Does EKS work with GitOps?",
      answer:
        "Yes. EKS is a standard Kubernetes cluster, so ArgoCD and Flux run on it normally. We commonly pair EKS with a GitOps workflow so deployments are declarative and auditable.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "EKS vs ECS vs Fargate", href: "/eks-vs-ecs-vs-fargate" },
    { name: "What Is GitOps?", href: "/what-is-gitops" },
  ],
  ctaHeading: "Talk to an AWS partner",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
