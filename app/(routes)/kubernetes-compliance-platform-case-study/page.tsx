import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/kubernetes-compliance-platform-case-study");

const data: CaseStudyData = {
  path: "/kubernetes-compliance-platform-case-study",
  title: "On-Prem Kubernetes Platform for SOC 2, HIPAA, HiTrust & NIST",
  heroTitle: "A Compliance-Ready On-Prem Kubernetes Platform",
  intro:
    "An Indianapolis-area technology company was preparing for SOC 2, HIPAA, HiTrust, and NIST 800-53 audits at the same time. We built an on-premise Kubernetes platform with the compliance controls built into the infrastructure.",
  heroImage: "/services/ci_cd_eks.png",
  metaDescription:
    "How CodetoKloud built an on-premise RKE2 Kubernetes platform with default encryption, SSO on every access path, GitOps change history, and audit evidence for a company preparing for SOC 2, HIPAA, HiTrust, and NIST 800-53 audits.",
  problem: [
    "An Indianapolis-area technology company ran sensitive workloads that could not move to public cloud. It had no container platform, and access was managed through individual SSH keys and local accounts.",
    "There was no audit trail for changes and no encryption for internal network traffic. Four compliance frameworks were in scope at once: SOC 2, HIPAA, HiTrust, and NIST 800-53.",
  ],
  solution: [
    {
      title: "Hardened Kubernetes on Bare Metal",
      body: "We deployed RKE2 on bare metal with a 3-node high-availability control plane, managed through Rancher for its hardened defaults and CIS profile support.",
    },
    {
      title: "Encryption by Default",
      body: "We used Cilium as the CNI with kube-proxy replacement, enabled WireGuard encryption between pods by default, and added Hubble for network observability that doubles as audit evidence. Network policies default to deny.",
    },
    {
      title: "SSO on Every Access Path",
      body: "We enforced Entra ID single sign-on across the Rancher UI, kubectl, and SSH. No local accounts, no shared keys. That was a hard auditor requirement.",
    },
    {
      title: "GitOps Change History",
      body: "We ran ArgoCD so every cluster change is tracked in Git and nothing is applied by hand. That gives auditors a complete, reviewable change history.",
    },
    {
      title: "Storage, Backups, and GPU Workloads",
      body: "We added Longhorn distributed storage, Velero backups with a tested restore path, and GPU worker nodes through the NVIDIA GPU Operator for machine learning workloads.",
    },
    {
      title: "Compliance Evidence on Tap",
      body: "We built Prometheus and Grafana dashboards oriented around audit evidence, and fed alarm coverage into a continuous compliance evidence platform, so the compliance team pulls evidence without engineering time.",
    },
  ],
  results: [
    "The platform passed readiness assessments across all four frameworks.",
    "The controls live in the infrastructure itself: encrypted traffic by default, SSO on every access path, Git-based change history, and tested recovery.",
    "The compliance team pulls auditor evidence from Grafana and Git without pulling engineering time.",
  ],
  metrics: ["SOC 2 · HIPAA · HiTrust · NIST 800-53", "Passed readiness assessments"],
  stack: [
    "RKE2",
    "Rancher",
    "Cilium",
    "WireGuard",
    "Hubble",
    "Longhorn",
    "Velero",
    "ArgoCD",
    "NVIDIA GPU Operator",
    "Prometheus",
    "Grafana",
    "Entra ID SSO",
  ],
  crossLinks: [
    { name: "HIPAA Compliance", href: "/hipaa-compliance" },
    { name: "SOC 2 Compliance", href: "/soc-2-compliance" },
    { name: "Kubernetes & EKS", href: "/kubernetes" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
