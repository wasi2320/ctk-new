import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/eks-gitops-microservices-case-study");

const data: CaseStudyData = {
  path: "/eks-gitops-microservices-case-study",
  title: "EKS Microservices Migration with GitOps Delivery",
  heroTitle: "Microservices Delivery on EKS with GitOps Controls",
  intro:
    "A product team needed to replace manual application releases with containerized microservices, environment-specific configuration, and controlled promotion to production. We built a GitOps delivery path around Amazon EKS, Helm, and ArgoCD.",
  heroImage: "/services/architecture/eks-gitops-microservices.svg",
  heroImageAlt:
    "GitOps delivery diagram showing GitHub Actions building microservice containers, pushing images to Amazon ECR, updating environment-specific Helm configuration, and ArgoCD deploying to Amazon EKS with health checks and production approval.",
  metaDescription:
    "How CodetoKloud containerized microservices and built an Amazon EKS GitOps workflow with GitHub Actions, ECR, Helm, ArgoCD, health checks, production approval, and external secrets.",
  problem: [
    "A microservices application still depended on manual deployment steps. Releases needed a consistent container build, clear environment promotion, and a reliable way to keep credentials out of source control.",
    "One workload also required specialized compute capacity. When preferred capacity was not available, the delivery design needed a fallback path rather than leaving that service blocked indefinitely.",
  ],
  solution: [
    {
      title: "Microservice Containerization",
      body: "We created optimized Docker build definitions for the application services so each component could be built, versioned, and released independently.",
    },
    {
      title: "GitHub Actions to Amazon ECR",
      body: "GitHub Actions built the service images, pushed versioned artifacts to Amazon ECR, and updated the image reference used by the deployment configuration.",
    },
    {
      title: "Environment-Specific Helm Configuration",
      body: "Helm values separated development, staging, and production configuration. The same chart structure could therefore promote a tested release without copying deployment manifests between environments.",
    },
    {
      title: "ArgoCD Reconciliation",
      body: "ArgoCD synchronized approved configuration into Amazon EKS. Automated post-deployment health checks provided a clear signal after each development release.",
    },
    {
      title: "Controlled Production Promotion",
      body: "Production releases required manual approval and were coordinated within planned maintenance windows, adding a deliberate control before customer-facing changes.",
    },
    {
      title: "External Secrets and Capacity Fallback",
      body: "AWS Secrets Manager and External Secrets Operator kept sensitive values outside Git. We also added a fallback strategy for specialized compute capacity when the preferred option was temporarily unavailable.",
    },
  ],
  results: [
    "The application services were packaged as independently versioned containers and delivered through a repeatable EKS workflow.",
    "Development releases gained automated reconciliation and post-deployment health checks, while production retained a manual approval gate.",
    "Sensitive configuration remained outside the Git repository, and specialized workloads gained a documented capacity fallback path.",
  ],
  stack: [
    "Amazon EKS",
    "ArgoCD",
    "Helm",
    "GitHub Actions",
    "Amazon ECR",
    "Docker",
    "AWS Secrets Manager",
    "External Secrets Operator",
  ],
  crossLinks: [
    { name: "Kubernetes and EKS", href: "/kubernetes" },
    { name: "DevOps Automation", href: "/devops" },
    { name: "AWS Cloud Infrastructure", href: "/cloud-service" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
