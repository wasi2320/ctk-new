import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedInsights from "@/app/components/sections/RelatedInsights";
import ComplianceLinks from "@/app/components/sections/ComplianceLinks";
import RelatedServices from "@/app/components/sections/RelatedServices";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";
import { pageFaqs } from "@/lib/faqs";
import { aiDevopsInsights } from "@/utils/data/aiDevopsInsights";

export const metadata = pageMetadata("/kubernetes");

/** Capabilities, keyworded H3s with extractable, standalone prose. */
const capabilities = [
  {
    title: "Amazon EKS Cluster Design",
    body: "We architect Amazon EKS clusters with managed node groups, private networking, and separate development, staging, and production environments. The design integrates AWS IAM, VPC networking, CloudWatch, and the operating controls your team needs.",
  },
  {
    title: "GitOps Delivery with ArgoCD",
    body: "We implement GitOps with ArgoCD so your cluster's desired state lives in Git and syncs automatically. Every change is versioned, reviewable, and auditable. On one client pipeline this reduced manual deployment effort by 80% and made releases 50% faster.",
  },
  {
    title: "Helm Packaging & Releases",
    body: "We package applications as Helm charts to manage configuration, versioning, and repeatable releases across environments, making deployments consistent, easy to roll back, and simple for your team to maintain.",
  },
  {
    title: "Autoscaling & HPA",
    body: "We tune horizontal pod autoscaling, cluster autoscaling, and modern autoscalers like Karpenter so your workloads scale with demand and you only pay for the capacity you use.",
  },
  {
    title: "Observability & Monitoring",
    body: "We add full observability with Prometheus, Grafana, Datadog, and CloudWatch, metrics, logs, traces, dashboards, and alerting, so you catch issues early and keep mean time to recovery low.",
  },
  {
    title: "Kubernetes Cost Optimization",
    body: "We reduce Kubernetes spend by right-sizing pod requests, tuning node groups, using Spot capacity, and consolidating idle workloads. On a healthcare EKS migration this approach cut cloud costs by roughly 35%.",
  },
  {
    title: "Security & DevSecOps Hardening",
    body: "We harden clusters with least-privilege RBAC, IAM roles for service accounts, network policies, encrypted secrets, image scanning, and continuous monitoring. These controls can support the technical scope of SOC 2, HIPAA, and PCI DSS programs on AWS.",
  },
  {
    title: "Migrations to EKS",
    body: "We migrate applications from virtual machines, on-premises servers, or other container platforms to Kubernetes on Amazon EKS, including containerization, CI/CD, and low-downtime cutover. A recent migration cut API latency from 850ms to 320ms.",
  },
  {
    title: "Managed Day-2 Operations",
    body: "We run ongoing Kubernetes operations, version and node upgrades, patching, monitoring, autoscaling tuning, incident response, and disaster recovery, so your platform stays secure, current, and reliable after launch.",
  },
];

/** Curated Kubernetes/EKS proof, real, quantified case studies (crawlable links). */
const caseStudies = [
  {
    href: "/goagalia-healthcare-workforce-management",
    title: "Healthcare EKS Migration for GoAgalia",
    blurb:
      "Migrated a healthcare workforce platform to Amazon EKS with GitOps, autoscaling, and technical safeguards for regulated workloads.",
    metrics: ["About 35% lower cost", "Latency from 850 ms to 320 ms", "99.7% uptime"],
  },
  {
    href: "/helm-pipeline",
    title: "CI/CD with ArgoCD & Helm on EKS",
    blurb:
      "Built an automated CI/CD pipeline using ArgoCD, Helm, and Amazon EKS across dev, staging, and production environments.",
    metrics: ["80% less manual effort", "50% faster releases"],
  },
  {
    href: "/aws-scalable-secure",
    title: "Scalable VoIP & AI Call Protection on Kubernetes",
    blurb:
      "Deployed FusionPBX on Kubernetes with a Python-based AI service for real-time scam-call detection and high availability.",
    metrics: ["50% faster releases", "40% faster issue resolution"],
  },
  {
    href: "/scalable-secure-aws",
    title: "Scalable & Secure AWS Setup",
    blurb:
      "Migrated a SaaS application to modern AWS infrastructure with container orchestration, CI/CD, and full monitoring.",
    metrics: ["50% faster release cycles", "40% faster issue resolution"],
  },
  {
    href: "/kubernetes-compliance-platform-case-study",
    title: "Compliance-Ready On-Prem Kubernetes",
    blurb:
      "Built a four-node RKE2 platform with two control-plane nodes, two GPU workers, self-hosted observability, and an operational handoff for a company preparing for multiple frameworks.",
    metrics: ["4-node RKE2 platform", "2 GPU worker nodes"],
  },
  {
    href: "/cis-kubernetes-benchmark-assessment-case-study",
    title: "CIS Kubernetes Benchmark Assessment",
    blurb:
      "Assessed AWS EKS and Linode LKE environments control by control, documenting shared responsibility and collecting cluster evidence with kube-bench where available.",
    metrics: ["AWS EKS and Linode LKE", "Control-by-control evidence"],
  },
];

export default function KubernetesPage() {
  return (
    <div>
      <JsonLd data={coreServiceSchemas["/kubernetes"]} />

      <HeroSection
        title="Kubernetes and Amazon EKS Consulting"
        description="CodetoKloud designs, migrates, secures, and manages production Kubernetes on Amazon EKS, GitOps with ArgoCD, Helm, autoscaling, observability, and cost optimization from an AWS Advanced Tier Partner."
        imageSrc="/services/service-visuals/amazon-eks-operating-model.svg"
        imageAlt="Amazon EKS operating model with controlled ingress, private Multi-AZ workloads, Argo CD and Helm GitOps, IAM and RBAC, autoscaling, observability, cost visibility, and backup and recovery"
        buttonText="Book a Kubernetes readiness review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-5">
        <TrustBadge />
      </div>

      {/* Answer capsule, definition-first, standalone, names the company. */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What is Kubernetes consulting?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kubernetes consulting is expert help designing, deploying, securing,
            and operating Kubernetes, the platform that automates running
            containerized applications at scale. CodetoKloud, an AWS Advanced
            Tier Partner, provides Kubernetes consulting on Amazon EKS: cluster
            design, GitOps delivery, autoscaling, observability, cost
            optimization, and ongoing managed operations.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            Whether you are launching your first cluster, migrating existing
            workloads to Amazon EKS, or trying to control a Kubernetes bill
            that is growing faster than your traffic, we bring the production
            experience to improve the operating model and implement technical
            controls for regulated workloads where required.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Our Kubernetes &amp; Amazon EKS Services
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            End-to-end Kubernetes engineering, from first cluster to day-2
            operations, built on Amazon EKS.
          </p>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#16212e] transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {c.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table, the format AI engines cite most. */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            EKS vs ECS vs Fargate: Which Should You Use?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The three main ways to run containers on AWS, and when each fits.
            Not sure which is right for your workload? We help teams choose.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#16212e] text-white">
                  <th className="px-5 py-4 font-semibold">Option</th>
                  <th className="px-5 py-4 font-semibold">What it is</th>
                  <th className="px-5 py-4 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="px-5 py-4 font-semibold text-gray-900">
                    Amazon EKS
                  </td>
                  <td className="px-5 py-4">
                    Managed Kubernetes on AWS, with the full Kubernetes
                    ecosystem (Helm, ArgoCD, operators).
                  </td>
                  <td className="px-5 py-4">
                    Portability, complex or growing platforms, teams
                    standardizing on Kubernetes.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-gray-900">
                    Amazon ECS
                  </td>
                  <td className="px-5 py-4">
                    AWS-native container orchestrator that is simpler than
                    Kubernetes to adopt and operate.
                  </td>
                  <td className="px-5 py-4">
                    Straightforward workloads, smaller teams, faster time to
                    production on AWS.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-gray-900">
                    AWS Fargate
                  </td>
                  <td className="px-5 py-4">
                    Serverless compute for containers, runs EKS or ECS pods
                    without managing servers.
                  </td>
                  <td className="px-5 py-4">
                    Removing node management, variable or spiky workloads,
                    minimizing ops overhead.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deeper comparisons + local landing pages. */}
      <section className="px-4 pb-10 md:px-36 bg-gray-50">
        <nav
          aria-label="Kubernetes comparisons, locations, and guides"
          className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-5"
        >
          <h2 className="sr-only">
            Kubernetes comparisons, locations, and planning guides
          </h2>
          <div className="grid gap-5 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gray-200">
            <div className="md:pr-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Compare platforms
              </h3>
              <div className="flex flex-col items-start gap-1.5">
                <Link
                  href="/eks-vs-ecs-vs-fargate"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  EKS vs ECS vs Fargate
                </Link>
                <Link
                  href="/eks-vs-gke-vs-aks"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  EKS vs GKE vs AKS
                </Link>
                <Link
                  href="/terraform-vs-cloudformation"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  Terraform vs CloudFormation
                </Link>
              </div>
            </div>
            <div className="md:px-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Local consulting
              </h3>
              <div className="flex flex-col items-start gap-1.5">
                <Link
                  href="/devops-consulting-naperville-il"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  Naperville, IL
                </Link>
                <Link
                  href="/devops-kubernetes-consulting-chicago"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  Chicago
                </Link>
              </div>
            </div>
            <div className="md:pl-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Planning guides
              </h3>
              <div className="flex flex-col items-start gap-1.5">
                <Link
                  href="/what-is-a-kubernetes-consultant"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  What is a Kubernetes consultant?
                </Link>
                <Link
                  href="/engagement-models"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  Engagement models
                </Link>
                <Link
                  href="/devops-consulting-cost"
                  className="text-[#16212e] font-semibold underline hover:no-underline"
                >
                  Consulting cost
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>

      {/* Curated case studies, crawlable, quantified proof. */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Kubernetes &amp; EKS Case Studies
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Production Kubernetes, GitOps, and control assessment work across
            cloud and on-premise environments.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="block rounded-2xl border border-gray-200 p-6 hover:border-[#16212e] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cs.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{cs.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-sm font-medium text-[#16212e] bg-[#16212e]/10 rounded-full px-3 py-1"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedInsights
        heading="AI guidance for Kubernetes delivery and operations"
        intro="Use AI to assist with evidence, review, and troubleshooting while GitOps, policy checks, limited identities, and production approvals constrain the blast radius."
        items={aiDevopsInsights}
      />

      {/* CTA band */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-[#0d1526] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Review your Kubernetes operating model
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Tell us about your clusters, cloud spend, and operating concerns.
            We will confirm fit within one business day and use a focused
            30-minute review to identify three practical priorities.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a Kubernetes readiness review
          </Link>
        </div>
      </section>

      <FaqSection
        items={pageFaqs["/kubernetes"]}
        heading="Kubernetes & Amazon EKS FAQs"
        description="Common questions about Kubernetes and EKS consulting, migration, cost, and security."
      />

      <ComplianceLinks currentPath="/kubernetes" />
      <RelatedServices currentPath="/kubernetes" />
    </div>
  );
}
