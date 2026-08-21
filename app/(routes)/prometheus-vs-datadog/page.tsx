import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/prometheus-vs-datadog");

const data: ComparisonData = {
  path: "/prometheus-vs-datadog",
  heroTitle: "Prometheus vs Datadog",
  intro:
    "Open-source metrics versus a managed observability platform for Kubernetes, and how to choose. CodetoKloud, an AWS Advanced Tier Partner, helps teams pick a monitoring stack and build it on EKS.",
  heroImage: "/Images/DevOps_Hero.png",
  capsuleQuestion: "Prometheus vs Datadog: what's the difference?",
  capsuleAnswer:
    "Prometheus is an open-source metrics and alerting system you self-host, usually paired with Grafana for dashboards. Datadog is a commercial SaaS platform that combines metrics, logs, traces, and dashboards in one managed product. Prometheus gives full control and no per-host license fee, at the cost of running and scaling it yourself. Datadog reduces operational work and unifies signals, but pricing grows with hosts, data, and features. Both monitor Kubernetes well. CodetoKloud, an AWS Advanced Tier Partner, helps teams choose and build the right observability stack.",
  tableHeaders: ["Tool", "What it is", "Best for", "Tradeoffs"],
  tableRows: [
    [
      "Prometheus",
      "Open-source metrics and alerting, self-hosted and often paired with Grafana.",
      "Kubernetes-native metrics, full control, and avoiding per-host license fees.",
      "You run, scale, and store it yourself; long-term storage needs extra tooling.",
    ],
    [
      "Datadog",
      "Managed SaaS combining metrics, logs, and traces in one platform.",
      "Teams that want unified observability with little infrastructure to operate.",
      "Cost grows with hosts and data volume, and data lives with a third party.",
    ],
  ],
  recommendation: [
    {
      title: "Choose Prometheus if…",
      body: "you want a Kubernetes-native, open-source stack with full control over data and no per-host licensing, and you can operate it.",
    },
    {
      title: "Choose Datadog if…",
      body: "you want metrics, logs, and traces unified in one managed platform and prefer to trade cost for less operational overhead.",
    },
    {
      title: "Consider both if…",
      body: "some teams collect metrics with Prometheus and forward them to a managed backend, or run Prometheus for cost control while using a SaaS tool for tracing.",
    },
  ],
  faq: [
    {
      question: "Is Prometheus cheaper than Datadog?",
      answer:
        "Prometheus has no license fee, but you pay for the compute, storage, and engineering time to run it. Datadog removes that operational work while charging per host and by data volume. CodetoKloud, an AWS Advanced Tier Partner, models total cost including engineering effort before recommending one.",
    },
    {
      question: "Can I use Prometheus for Kubernetes monitoring on EKS?",
      answer:
        "Yes. Prometheus is a standard choice for Kubernetes and integrates through the kube-prometheus-stack and exporters. Amazon Managed Service for Prometheus is also available if you want the query engine without self-hosting.",
    },
    {
      question: "Does Datadog replace Prometheus?",
      answer:
        "It can, since Datadog ingests metrics, logs, and traces in one place. Some teams keep Prometheus for in-cluster metrics and use Datadog for correlation across signals, so the two are not always mutually exclusive.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "DevOps Consulting", href: "/devops" },
    { name: "FinOps & Cost Optimization", href: "/finops" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
