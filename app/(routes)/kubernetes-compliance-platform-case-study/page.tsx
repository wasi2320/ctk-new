import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/kubernetes-compliance-platform-case-study");

const data: CaseStudyData = {
  path: "/kubernetes-compliance-platform-case-study",
  title: "On-Prem Kubernetes Platform for SOC 2, HIPAA, HITRUST, and NIST",
  heroTitle: "A Compliance-Ready On-Prem Kubernetes Platform",
  intro:
    "A technology company needed a production-grade on-premise Kubernetes platform with GPU scheduling and a complete operational handoff while preparing controls for SOC 2, HIPAA, HITRUST, and NIST 800-53.",
  heroImage: "/services/architecture/onprem-kubernetes-compliance.svg",
  heroImageAlt:
    "Four-node RKE2 platform with two control-plane nodes, two GPU workers, Entra ID access, GitOps, storage, backup, observability, runtime security, and documented alert escalation",
  metaDescription:
    "How CodetoKloud built a four-node on-premise RKE2 platform with two control-plane nodes, two GPU workers, GitOps, self-hosted observability, and operational runbooks for a company preparing for multiple security frameworks.",
  problem: [
    "The company needed a production-grade on-premise Kubernetes platform that could schedule AI workloads across dedicated NVIDIA GPU capacity while keeping operational telemetry inside its environment.",
    "Its internal team also needed enough documentation to install, operate, monitor, troubleshoot, and escalate issues across the platform while preparing controls for SOC 2, HIPAA, HITRUST, and NIST 800-53.",
  ],
  solution: [
    {
      title: "Four-Node RKE2 Foundation",
      body: "We deployed RKE2 on Ubuntu 24.04 across four bare-metal nodes: two control-plane nodes and two GPU worker nodes. Rancher provided a central cluster management interface.",
    },
    {
      title: "Cilium Networking and GPU Placement",
      body: "We installed Cilium with eBPF-based kube-proxy replacement and configured the NVIDIA GPU Operator. Node labels and NoSchedule taints kept general workloads off the GPU workers while allowing selected AI workloads to request GPU capacity.",
    },
    {
      title: "Identity and GitOps Controls",
      body: "We integrated Kubernetes access and node SSH with Microsoft Entra ID and used ArgoCD to manage desired application and platform state through Git.",
    },
    {
      title: "Storage and Backup Services",
      body: "We added Longhorn distributed storage and Velero backup capabilities so the platform team had cluster-native storage and a defined backup component in the operating model.",
    },
    {
      title: "Self-Hosted Observability and Runtime Security",
      body: "We deployed Prometheus, Alertmanager, Grafana, Loki with Promtail, Tempo, Falco, and NVIDIA DCGM Exporter inside the cluster. Node exporter, kube-state-metrics, and cAdvisor added infrastructure and workload visibility without sending the primary telemetry stack off site.",
    },
    {
      title: "Runbooks and Alert Escalation",
      body: "We delivered step-by-step installation guides, architecture documentation, component troubleshooting matrices, a data center hardware runbook, log retention guidance, dashboard definitions, alert routing, and documented escalation paths.",
    },
  ],
  results: [
    "The company received a four-node RKE2 platform with two control-plane nodes and two dedicated GPU workers.",
    "Self-hosted metrics, logs, traces, GPU telemetry, and runtime security events gave the team one operating view while keeping the monitoring stack on premise.",
    "The internal team received install guides, architecture documentation, troubleshooting matrices, on-call procedures, and an alert escalation model for ongoing ownership.",
  ],
  metrics: ["4-node RKE2 platform", "2 GPU workers", "Self-hosted observability"],
  stack: [
    "RKE2",
    "Rancher",
    "Cilium",
    "Longhorn",
    "Velero",
    "ArgoCD",
    "NVIDIA GPU Operator",
    "Prometheus",
    "Alertmanager",
    "Grafana",
    "Loki",
    "Tempo",
    "Falco",
    "NVIDIA DCGM Exporter",
    "Entra ID SSO",
  ],
  crossLinks: [
    { name: "HIPAA Compliance", href: "/hipaa-compliance" },
    { name: "SOC 2 Compliance", href: "/soc-2-compliance" },
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "Review my Kubernetes controls", href: "/contact" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
