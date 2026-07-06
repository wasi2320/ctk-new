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
  heroImage: "/services/aws-solution-illustration.png",
  metaDescription:
    "How CodetoKloud connected on-premise hardware and cloud burst capacity into one secure Kubernetes platform over a WireGuard mesh, reaching 99.9% uptime and sub-35ms inter-node latency.",
  problem: [
    "A media company ran latency-sensitive streaming workloads on existing on-premise hardware. It wanted to add cloud burst capacity without throwing away that hardware.",
    "It also did not want to pay for dedicated network links between sites, and the connection between on-premise and cloud had to be secure.",
  ],
  solution: [
    {
      title: "Encrypted Mesh Between Sites",
      body: "We connected every node with a WireGuard mesh, so traffic between on-premise and cloud is encrypted at the network layer. No dedicated links, and nothing exposed on the public internet.",
    },
    {
      title: "One Kubernetes Platform Across Both",
      body: "We ran K3s clusters with high-availability masters spanning on-premise and cloud, managed through Rancher, so both sites behave as one platform.",
    },
    {
      title: "GitOps and Distributed Storage",
      body: "We used ArgoCD for GitOps delivery, Longhorn for distributed storage, and CloudNativePG for databases, so state and deployments stay consistent across sites.",
    },
    {
      title: "Low-Latency Streaming Stack",
      body: "We ran OvenMediaEngine for live streaming behind NGINX ingress, with cert-manager and Let's Encrypt for TLS and Cloudflare for DNS.",
    },
    {
      title: "Network Fabric",
      body: "We used Flannel VXLAN for pod networking across the mesh, tuned for the low latency the streaming workloads needed.",
    },
  ],
  results: [
    "The platform holds 99.9% uptime.",
    "Inter-node latency stays under 35ms across on-premise and cloud.",
    "Total cost came in well below an equivalent all-cloud footprint, because the existing hardware kept doing real work.",
  ],
  metrics: ["99.9% uptime", "Sub-35ms inter-node latency", "Lower cost than all-cloud"],
  stack: [
    "K3s",
    "WireGuard",
    "Rancher",
    "ArgoCD",
    "Longhorn",
    "CloudNativePG",
    "OvenMediaEngine",
    "NGINX",
    "cert-manager",
    "Cloudflare",
  ],
  crossLinks: [
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
