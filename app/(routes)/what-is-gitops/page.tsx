import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/what-is-gitops");

const data: DefinitionData = {
  path: "/what-is-gitops",
  heroTitle: "What Is GitOps?",
  intro:
    "How GitOps works on Kubernetes: a Git repository as the source of truth, declarative manifests, and controllers like ArgoCD and Flux that reconcile your cluster to match. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/services/ci_cd_eks.png",
  capsuleQuestion: "What is GitOps?",
  capsuleAnswer:
    "GitOps is an operational model where a Git repository holds the desired state of your infrastructure and applications as declarative manifests, and an automated controller continuously reconciles the running system to match. Every change is a pull request, so Git becomes the single source of truth and the audit log. On Kubernetes, agents like ArgoCD or Flux run inside the cluster, watch the repo, and apply changes. CodetoKloud builds GitOps workflows on Amazon EKS as an AWS Advanced Tier Partner.",
  sections: [
    {
      title: "Git as the source of truth",
      body: "In GitOps, the desired state of every cluster lives in version-controlled YAML or Helm charts, not in ad hoc kubectl commands. Changes go through pull requests with review, so you get a full history of who changed what and why. Rolling back is a git revert, and the same manifests describe every environment, which removes configuration drift between staging and production.",
    },
    {
      title: "Reconciliation with ArgoCD and Flux",
      body: "A GitOps controller runs inside the cluster and continuously compares the live state against the repo. If someone changes a resource by hand, the controller flags the drift and can restore the declared state automatically. ArgoCD adds a UI and application dashboards; Flux is lighter and composes from smaller controllers. Both use a pull model, so no CI system needs cluster credentials.",
    },
    {
      title: "Why teams adopt GitOps",
      body: "GitOps gives you repeatable deployments, a clear audit trail for SOC 2 and similar frameworks, and faster recovery because the cluster state is reproducible from Git. It also separates build from deploy: CI produces an image, and a commit to the config repo triggers the rollout. That separation reduces the blast radius of a bad pipeline and makes multi-cluster management practical.",
    },
    {
      title: "How CodetoKloud implements it",
      body: "We set up GitOps on Amazon EKS with ArgoCD or Flux, structured repositories per environment, sealed or externally managed secrets, and progressive delivery where it fits. As an AWS Advanced Tier Partner, we wire it into your existing CI and observability so deployments are traceable end to end. See our ArgoCD vs Flux guide for how we pick between the two.",
    },
  ],
  faq: [
    {
      question: "Is GitOps only for Kubernetes?",
      answer:
        "GitOps started with Kubernetes and is most mature there, but the model of a declarative source of truth plus automated reconciliation also applies to Terraform-managed infrastructure and other declarative systems. On AWS, teams most often run it on Amazon EKS with ArgoCD or Flux.",
    },
    {
      question: "Do I need both ArgoCD and Flux?",
      answer:
        "No. They solve the same core problem, and most teams standardize on one. ArgoCD is a good fit when you want a visual dashboard and application-centric view; Flux suits teams that prefer a lean, composable, CLI-driven setup. We help you choose based on your team and workflow.",
    },
    {
      question: "How does GitOps help with compliance?",
      answer:
        "Because every change is a reviewed commit, Git becomes an audit log of infrastructure changes with author, timestamp, and approval. That change history is useful evidence for SOC 2, HIPAA, and PCI DSS controls around change management.",
    },
  ],
  crossLinks: [
    { name: "ArgoCD vs Flux", href: "/argocd-vs-flux" },
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "DevOps Consulting", href: "/devops" },
  ],
  ctaHeading: "Talk to an AWS partner",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
