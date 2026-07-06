import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";
import ComplianceLinks from "@/app/components/sections/ComplianceLinks";
import RelatedServices from "@/app/components/sections/RelatedServices";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";
import { pageFaqs } from "@/lib/faqs";

export const metadata = pageMetadata("/kubernetes");

/** Capabilities — keyworded H3s with extractable, standalone prose. */
const capabilities = [
  {
    title: "Amazon EKS Cluster Design",
    body: "We architect production-grade Amazon EKS clusters with managed node groups, private networking, and multi-environment setups for development, staging, and production. As an AWS Advanced Tier Partner, we build EKS the way AWS recommends — integrated with IAM, VPC, and CloudWatch.",
  },
  {
    title: "GitOps Delivery with ArgoCD",
    body: "We implement GitOps with ArgoCD so your cluster's desired state lives in Git and syncs automatically. Every change is versioned, reviewable, and auditable. On one client pipeline this delivered a 95% deployment success rate and cut manual deployment effort by 80%.",
  },
  {
    title: "Helm Packaging & Releases",
    body: "We package applications as Helm charts to manage configuration, versioning, and repeatable releases across environments — making deployments consistent, easy to roll back, and simple for your team to maintain.",
  },
  {
    title: "Autoscaling & HPA",
    body: "We tune horizontal pod autoscaling, cluster autoscaling, and modern autoscalers like Karpenter so your workloads scale with demand and you only pay for the capacity you use.",
  },
  {
    title: "Observability & Monitoring",
    body: "We add full observability with Prometheus, Grafana, Datadog, and CloudWatch — metrics, logs, traces, dashboards, and alerting — so you catch issues early and keep mean time to recovery low.",
  },
  {
    title: "Kubernetes Cost Optimization",
    body: "We reduce Kubernetes spend by right-sizing pod requests, tuning node groups, using Spot capacity, and consolidating idle workloads. On a healthcare EKS migration this approach cut cloud costs by roughly 35%.",
  },
  {
    title: "Security & DevSecOps Hardening",
    body: "We harden clusters with least-privilege RBAC, IAM roles for service accounts, network policies, encrypted secrets, image scanning, and continuous monitoring — supporting SOC 2, HIPAA, and PCI DSS workloads on AWS.",
  },
  {
    title: "Migrations to EKS",
    body: "We migrate applications from virtual machines, on-premises servers, or other container platforms to Kubernetes on Amazon EKS — including containerization, CI/CD, and low-downtime cutover. A recent migration cut API latency from 850ms to 320ms.",
  },
  {
    title: "Managed Day-2 Operations",
    body: "We run ongoing Kubernetes operations — version and node upgrades, patching, monitoring, autoscaling tuning, incident response, and disaster recovery — so your platform stays secure, current, and reliable after launch.",
  },
];

/** Curated Kubernetes/EKS proof — real, quantified case studies (crawlable links). */
const caseStudies = [
  {
    href: "/goagalia-healthcare-workforce-management",
    title: "HIPAA-Compliant EKS for GoAgalia Healthcare",
    blurb:
      "Migrated a healthcare workforce platform to a scalable, HIPAA-compliant AWS architecture on Amazon EKS with GitOps and autoscaling.",
    metrics: ["~35% lower cost", "850ms → 320ms latency", "99.7% uptime"],
  },
  {
    href: "/helm-pipeline",
    title: "CI/CD with ArgoCD & Helm on EKS",
    blurb:
      "Built an automated CI/CD pipeline using ArgoCD, Helm, and Amazon EKS across dev, staging, and production environments.",
    metrics: ["95% deploy success", "80% less manual effort", "50% faster releases"],
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
    metrics: ["Lower cost", "Improved security", "Better performance"],
  },
  {
    href: "/kubernetes-compliance-platform-case-study",
    title: "Compliance-Ready On-Prem Kubernetes",
    blurb:
      "Built an on-premise RKE2 platform with default encryption, SSO on every access path, and GitOps for a company facing four audit frameworks.",
    metrics: ["SOC 2 · HIPAA · HiTrust · NIST", "Passed readiness assessments"],
  },
];

export default function KubernetesPage() {
  return (
    <div>
      <JsonLd data={coreServiceSchemas["/kubernetes"]} />

      <HeroSection
        title="Kubernetes & Amazon EKS Consulting"
        description="CodetoKloud designs, migrates, secures, and manages production Kubernetes on Amazon EKS — GitOps with ArgoCD, Helm, autoscaling, observability, and cost optimization from an AWS Advanced Tier Partner."
        imageSrc="/services/ci_cd_eks.png"
        cover
        buttonText="Book a Kubernetes readiness review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Answer capsule — definition-first, standalone, names the company. */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What is Kubernetes consulting?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kubernetes consulting is expert help designing, deploying, securing,
            and operating Kubernetes — the platform that automates running
            containerized applications at scale. CodetoKloud, an AWS Advanced
            Tier Partner, provides Kubernetes consulting on Amazon EKS: cluster
            design, GitOps delivery, autoscaling, observability, cost
            optimization, and ongoing managed operations.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            Whether you are launching your first cluster, migrating existing
            workloads to Amazon EKS, or trying to control a Kubernetes bill
            that is growing faster than your traffic, we bring the production
            experience to get it right — with the security and compliance
            controls regulated workloads require.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Our Kubernetes &amp; Amazon EKS Services
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            End-to-end Kubernetes engineering, from first cluster to day-2
            operations — built on Amazon EKS.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#152F27] transition-colors"
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

      {/* Comparison table — the format AI engines cite most. */}
      <section className="py-16 px-4 md:px-36 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            EKS vs ECS vs Fargate: Which Should You Use?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The three main ways to run containers on AWS, and when each fits.
            Not sure which is right for your workload? We help teams choose.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#152F27] text-white">
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
                    Serverless compute for containers — runs EKS or ECS pods
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
      <section className="px-4 md:px-36 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-3">
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Compare in depth:</span>{" "}
            <Link
              href="/eks-vs-ecs-vs-fargate"
              className="text-[#152F27] font-semibold underline hover:no-underline"
            >
              EKS vs ECS vs Fargate
            </Link>
            {" · "}
            <Link
              href="/eks-vs-gke-vs-aks"
              className="text-[#152F27] font-semibold underline hover:no-underline"
            >
              EKS vs GKE vs AKS
            </Link>
            {" · "}
            <Link
              href="/terraform-vs-cloudformation"
              className="text-[#152F27] font-semibold underline hover:no-underline"
            >
              Terraform vs CloudFormation
            </Link>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Local:</span>{" "}
            <Link
              href="/devops-consulting-naperville-il"
              className="text-[#152F27] font-semibold underline hover:no-underline"
            >
              Naperville, IL
            </Link>
            {" · "}
            <Link
              href="/devops-kubernetes-consulting-chicago"
              className="text-[#152F27] font-semibold underline hover:no-underline"
            >
              Chicago
            </Link>
          </p>
        </div>
      </section>

      {/* Curated case studies — crawlable, quantified proof. */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Kubernetes &amp; EKS Case Studies
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Real Amazon EKS engagements with measurable outcomes.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="block rounded-2xl border border-gray-200 p-6 hover:border-[#152F27] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cs.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{cs.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-sm font-medium text-[#152F27] bg-[#152F27]/10 rounded-full px-3 py-1"
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

      {/* CTA band */}
      <section className="py-16 px-4 md:px-36 bg-[#000209] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a free Kubernetes readiness review
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us about your clusters, cloud spend, and goals. We&apos;ll
            review your Kubernetes or Amazon EKS setup and recommend the highest-
            impact next steps — no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#000209] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
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
