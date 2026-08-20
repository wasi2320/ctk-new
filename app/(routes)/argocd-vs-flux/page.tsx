import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/argocd-vs-flux");

const data: ComparisonData = {
  path: "/argocd-vs-flux",
  heroTitle: "ArgoCD vs Flux",
  intro:
    "The two leading GitOps controllers for Kubernetes, and how to pick one. CodetoKloud, an AWS Advanced Tier Partner, helps teams choose and build a GitOps workflow on EKS.",
  heroImage: "/services/ci_cd_eks.png",
  capsuleQuestion: "ArgoCD vs Flux: what's the difference?",
  capsuleAnswer:
    "ArgoCD and Flux are both CNCF GitOps tools that keep a Kubernetes cluster in sync with manifests stored in Git. ArgoCD ships a web UI and a strong application dashboard, so it favors teams that want to see and manage deployments visually. Flux is a set of composable controllers with no built-in UI, so it favors teams that prefer a lightweight, config-driven approach. Both support Helm and Kustomize and run well on Amazon EKS. CodetoKloud, an AWS Advanced Tier Partner, helps teams pick one and build the pipeline around it.",
  tableHeaders: ["Tool", "What it is", "Best for", "Tradeoffs"],
  tableRows: [
    [
      "ArgoCD",
      "GitOps controller with a built-in web UI and application-centric model.",
      "Teams that want a visual dashboard, RBAC, and multi-cluster app management.",
      "More components to run, and the UI is another surface to secure.",
    ],
    [
      "Flux",
      "Composable set of GitOps controllers driven by Kubernetes custom resources.",
      "Teams that prefer a lightweight, CLI and manifest-driven workflow.",
      "No official UI, so visibility relies on other tools like a dashboard add-on.",
    ],
  ],
  recommendation: [
    {
      title: "Choose ArgoCD if…",
      body: "you want a visual dashboard, application-level views, and built-in RBAC for developers who deploy across many services.",
    },
    {
      title: "Choose Flux if…",
      body: "you prefer a minimal, config-driven controller that composes with your existing tooling and stays close to plain Kubernetes resources.",
    },
    {
      title: "Either works if…",
      body: "you standardize on Helm or Kustomize and want Git as the single source of truth. The bigger win is committing to GitOps, not the specific tool.",
    },
  ],
  faq: [
    {
      question: "Are ArgoCD and Flux both CNCF projects?",
      answer:
        "Yes. Both are CNCF graduated projects with active communities, so either is a safe long-term choice for GitOps on Kubernetes.",
    },
    {
      question: "Can I run ArgoCD or Flux on Amazon EKS?",
      answer:
        "Yes. Both run as controllers inside the cluster and work well on EKS. CodetoKloud, an AWS Advanced Tier Partner, sets up either one with IRSA, private repositories, and progressive delivery.",
    },
    {
      question: "Do I need a UI for GitOps?",
      answer:
        "No. GitOps works purely from Git commits and reconciliation. A UI like ArgoCD's helps with visibility and troubleshooting, but Flux teams often use dashboards or their existing observability stack instead.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS Consulting", href: "/kubernetes" },
    { name: "What Is GitOps?", href: "/what-is-gitops" },
    { name: "CI/CD with ArgoCD & Helm on EKS", href: "/helm-pipeline" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
