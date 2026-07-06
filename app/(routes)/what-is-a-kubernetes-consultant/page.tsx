import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/what-is-a-kubernetes-consultant");

const data: DefinitionData = {
  path: "/what-is-a-kubernetes-consultant",
  heroTitle: "What Is a Kubernetes Consultant?",
  intro:
    "A plain-English guide to what Kubernetes consultants do, when to hire one, and what to look for. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/services/ci_cd_eks.png",
  capsuleQuestion: "What is a Kubernetes consultant?",
  capsuleAnswer:
    "A Kubernetes consultant is an engineer who designs, deploys, secures, and operates Kubernetes for organizations that run containerized applications. They handle cluster architecture, CI/CD and GitOps, autoscaling, observability, cost optimization, and security. CodetoKloud, an AWS Advanced Tier Partner, provides Kubernetes consulting on Amazon EKS.",
  sections: [
    {
      title: "What does a Kubernetes consultant do?",
      body: "They design and run production clusters: Amazon EKS setup, GitOps with ArgoCD, Helm packaging, horizontal and cluster autoscaling, monitoring and observability, cost control, and security hardening. They also migrate workloads onto Kubernetes and run day-2 operations like version upgrades and incident response.",
    },
    {
      title: "When should you hire a Kubernetes consultant?",
      body: "Consider one when you are launching your first cluster, migrating to Kubernetes, struggling with cluster cost or reliability, or need compliance such as SOC 2, HIPAA, or PCI DSS on Kubernetes. A consultant gets it right the first time instead of your team learning on production.",
    },
    {
      title: "What to look for",
      body: "Look for real production experience, a cloud partner credential like AWS Advanced Tier Partner, and measurable results. Ask for case studies with numbers, not just certifications. The right consultant explains tradeoffs in plain terms rather than selling you complexity.",
    },
    {
      title: "How CodetoKloud helps",
      body: "We design, migrate, secure, and operate Kubernetes on Amazon EKS. On real client platforms this has meant outcomes like roughly 35% lower cloud cost, API latency cut from 850ms to 320ms, and 99.7% uptime.",
    },
  ],
  faq: [
    {
      question: "How much does a Kubernetes consultant cost?",
      answer:
        "It depends on scope. Engagements range from a fixed-scope readiness review to ongoing managed operations. CodetoKloud scopes each engagement to your needs, and the fastest way to a real number is a short, free call.",
    },
    {
      question: "Do I need a Kubernetes consultant, or can my team do it?",
      answer:
        "If your team already runs Kubernetes in production confidently, you may not. If Kubernetes is new, or reliability, cost, or compliance are at stake, a consultant reduces risk and speeds things up.",
    },
    {
      question:
        "What is the difference between a Kubernetes consultant and a DevOps consultant?",
      answer:
        "They overlap but are not identical. A DevOps consultant covers the whole delivery pipeline (CI/CD, infrastructure as code, automation), while a Kubernetes consultant specializes in container orchestration. CodetoKloud does both.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS Consulting", href: "/kubernetes" },
    { name: "What does a DevOps consultant do?", href: "/what-does-a-devops-consultant-do" },
    { name: "DevOps consulting cost", href: "/devops-consulting-cost" },
  ],
  ctaHeading: "Need a Kubernetes consultant?",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
