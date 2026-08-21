import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/hybrid-cloud-kubernetes-case-study");

const data: CaseStudyData = {
  path: "/hybrid-cloud-kubernetes-case-study",
  title: "Hybrid On-Prem + Cloud Kubernetes over a WireGuard Mesh",
  heroTitle: "Hybrid On-Prem + Cloud Kubernetes over a WireGuard Mesh",
  intro:
    "A media company ran latency-sensitive streaming workloads on existing on-premise hardware and wanted cloud burst capacity, without dedicated links between sites. We joined both into one secure Kubernetes platform.",
  heroImage: "/services/architecture/hybrid-kubernetes-wireguard.svg",
  heroImageAlt:
    "Hybrid K3s platform connecting retained on-premise capacity and cloud burst nodes through an encrypted WireGuard mesh with Rancher, ArgoCD, Longhorn, and CloudNativePG",
  metaDescription:
    "How CodetoKloud connected retained on-premise hardware and cloud burst capacity into a managed Kubernetes platform over an encrypted WireGuard mesh.",
  problem: [
    "A media company ran latency-sensitive streaming workloads on existing on-premise hardware. It wanted to add cloud burst capacity without throwing away that hardware.",
    "It also did not want to pay for dedicated network links between sites, and the connection between on-premise and cloud had to be secure.",
  ],
  solution: [
    {
      title: "Encrypted Mesh Between Sites",
      body: "We connected every node with a WireGuard mesh, so workload traffic between on-premise and cloud is encrypted at the network layer without requiring dedicated private links.",
    },
    {
      title: "One Kubernetes Platform Across Both",
      body: "We ran K3s across on-premise servers and cloud nodes, managed through Rancher, so the existing hardware and added cloud capacity could operate through one platform model.",
    },
    {
      title: "GitOps and Distributed Storage",
      body: "We used ArgoCD for GitOps delivery, Longhorn for distributed storage, and CloudNativePG for databases, so state and deployments stay consistent across sites.",
    },
    {
      title: "Retained On-Premise Capacity",
      body: "We kept the client's existing hardware in active service for its latency-sensitive streaming workloads instead of requiring an immediate move to an all-cloud footprint.",
    },
    {
      title: "Cloud Burst Capacity",
      body: "We added cloud nodes for expansion while avoiding a dependency on dedicated private links between the on-premise and cloud environments.",
    },
  ],
  results: [
    "The company retained its on-premise hardware as useful workload capacity rather than discarding the existing investment.",
    "Cloud burst nodes added capacity through the same Kubernetes operating model.",
    "WireGuard provided encrypted connectivity between the on-premise and cloud environments without requiring dedicated links.",
  ],
  metrics: ["Encrypted hybrid connectivity", "Retained on-premise capacity", "Cloud burst capacity"],
  stack: [
    "K3s",
    "WireGuard",
    "Rancher",
    "ArgoCD",
    "Longhorn",
    "CloudNativePG",
  ],
  crossLinks: [
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
    { name: "Review my hybrid platform", href: "/contact" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
