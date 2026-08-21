import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedInsights from "@/app/components/sections/RelatedInsights";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";
import { aiDevopsInsights } from "@/utils/data/aiDevopsInsights";

export const metadata = pageMetadata("/devops");

const deliverables = [
  {
    title: "Delivery and Operations Assessment",
    body: "We review the path from code change to production, infrastructure ownership, release failures, recovery steps, environments, access, monitoring, and current operating constraints.",
  },
  {
    title: "CI/CD Pipeline Engineering",
    body: "We build test, build, security check, approval, deployment, health verification, and rollback stages around the way your team releases software.",
  },
  {
    title: "Infrastructure as Code",
    body: "We define AWS infrastructure with Terraform or CloudFormation so environments are version-controlled, reviewable, repeatable, and less dependent on console changes.",
  },
  {
    title: "Containers, ECS, and Amazon EKS",
    body: "We containerize applications and implement the appropriate AWS runtime, from ECS for simpler workloads to Amazon EKS when the Kubernetes ecosystem and portability are justified.",
  },
  {
    title: "Observability and Reliability",
    body: "We connect service metrics, logs, traces, dashboards, alerts, health checks, and recovery procedures to the customer journeys and systems your team must protect.",
  },
  {
    title: "DevSecOps Controls and Handover",
    body: "We add least-privilege access, secrets handling, dependency and image checks, change evidence, runbooks, and documentation that your team can operate after delivery.",
  },
];

const processSteps = [
  {
    title: "Baseline the current delivery system",
    body: "We measure how a change reaches production, where work waits, what fails, how recovery happens, and which manual steps or access paths create the most risk.",
  },
  {
    title: "Design the target path and controls",
    body: "We agree on environments, branching and release rules, infrastructure ownership, approvals, security checks, deployment strategy, rollback, and observable success criteria.",
  },
  {
    title: "Automate in production-relevant increments",
    body: "We implement the highest-value path first, test it with representative services, and expand only after the team can see and operate the new workflow.",
  },
  {
    title: "Document, transfer, and improve",
    body: "We provide runbooks, diagrams, code ownership, operating guidance, and a prioritized backlog based on delivery performance and reliability evidence.",
  },
];

const devopsFaqs = [
  {
    question: "What does a DevOps consulting engagement include?",
    answer:
      "A DevOps engagement can include delivery assessment, CI/CD pipelines, infrastructure as code, container platforms, GitOps, monitoring, release controls, secrets management, runbooks, and team handoff. The scope should target a defined constraint such as slow releases, frequent failures, infrastructure drift, or limited operational visibility.",
  },
  {
    question: "Can you improve our existing tools instead of replacing them?",
    answer:
      "Yes. We review whether the current Git provider, CI platform, cloud services, and monitoring tools can support the target workflow. We keep useful tools when practical and recommend a change only when a clear requirement, operating burden, or integration limit justifies it.",
  },
  {
    question: "Do we need Kubernetes for DevOps automation?",
    answer:
      "No. CI/CD, infrastructure as code, observability, and release controls apply to virtual machines, serverless services, Amazon ECS, and other runtimes. Kubernetes is appropriate when its scheduling, portability, ecosystem, and platform capabilities are worth the additional operational complexity.",
  },
  {
    question: "How do you include security in the delivery pipeline?",
    answer:
      "We define least-privilege access, protected secrets, code review and approval rules, dependency and image checks, infrastructure policy checks, deployment evidence, and centralized logs according to workload risk and compliance requirements.",
  },
  {
    question: "How do you measure whether DevOps work is improving delivery?",
    answer:
      "We select measures tied to the initial constraint, such as deployment lead time, deployment frequency, change failure rate, recovery time, manual effort, environment provisioning time, or alert quality. The baseline and target are agreed before implementation where reliable data is available.",
  },
  {
    question: "Do you provide one-time projects and ongoing DevOps support?",
    answer:
      "Yes. CodetoKloud can deliver a defined automation or platform project, provide embedded engineering for a transformation, or support ongoing operations. Responsibilities, response expectations, access, and handoff criteria are defined for each engagement.",
  },
];

export default function DevOpsPage() {
  const devopsTechStack = {
    heading: "DevOps tools selected around the operating model",
    description:
      "We work with established delivery, infrastructure, container, GitOps, and observability tools, while keeping the workflow and ownership model more important than the tool list.",
    marqueeItems: [
      "/Images/PNGSS/GitHub-Logo.png",
      "/Images/PNGSS/gitlab.png",
      "/Images/PNGSS/Jenkins-logo.png",
      "/Images/PNGSS/terraform-cloud.png",
      "/Images/PNGSS/Docker.png",
      "/Images/PNGSS/Kubernetes-Logo.png",
      "/Images/PNGSS/Argo-1-e1630327305635-1.png",
      "/Images/PNGSS/prometheus.png",
      "/Images/PNGSS/aws.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/devops"]} />
      <HeroSection
        title="AWS DevOps Consulting and CI/CD Automation"
        description="CodetoKloud improves how teams build, release, and operate software on AWS through CI/CD pipelines, infrastructure as code, GitOps, containers, observability, and practical DevSecOps controls."
        imageSrc="/services/service-visuals/devops-delivery.svg"
        imageAlt="AWS DevOps workflow from code change through CI checks, artifact creation, deployment, observability, and rollback"
        buttonText="Book a DevOps delivery review"
        buttonLink="/contact"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What is DevOps consulting?",
          answer:
            "DevOps consulting is expert help improving the system that moves software from a code change into reliable production operation. It connects delivery automation, cloud infrastructure, release controls, observability, security, and team ownership so releases become repeatable and recoverable.",
          detail:
            "CodetoKloud provides DevOps consulting for AWS environments using CI/CD, Terraform or CloudFormation, GitOps, Amazon ECS, Amazon EKS, and production observability. We start from the delivery constraint and operating model, not from a requirement to adopt a particular tool.",
        }}
        deliverables={{
          heading: "AWS DevOps consulting deliverables",
          intro:
            "The engagement connects automation with the controls, visibility, and team ownership needed to use it safely in production.",
          items: deliverables,
        }}
        process={{
          heading: "How we improve the path to production",
          intro:
            "We baseline the current workflow first, then automate the highest-value path and transfer ownership in measurable stages.",
          steps: processSteps,
        }}
        bestFit={{
          heading: "Signs that DevOps help is timely",
          intro:
            "A focused engagement is useful when delivery or operations problems have become a constraint on the product team.",
          scenarios: [
            "Production deployments depend on manual steps, a small number of people, or direct console access.",
            "Development, staging, and production environments drift or take too long to reproduce.",
            "Failed changes are difficult to detect, diagnose, or roll back with confidence.",
            "The team adopted containers or Kubernetes but lacks a stable release and operating model.",
            "An upcoming SOC 2, HIPAA, or PCI DSS assessment requires stronger change evidence and access controls.",
            "Monitoring produces noise but does not clearly show whether customer-facing services are healthy.",
          ],
        }}
        proof={{
          heading: "DevOps delivery results",
          intro:
            "Examples of CI/CD and cloud automation engagements with results documented in the full case studies.",
          items: [
            {
              href: "/helm-pipeline",
              title: "GitOps delivery with ArgoCD, Helm, and Amazon EKS",
              body: "CodetoKloud implemented an automated pipeline across development, staging, and production environments with GitOps reconciliation and repeatable Helm releases.",
              metrics: [
                "80% less manual effort",
                "50% faster releases",
              ],
            },
            {
              href: "/ecs-pr-preview-environments",
              title: "Amazon ECS deployment with pull request previews",
              body: "CodetoKloud used GitHub Actions and Terraform to create isolated preview environments and automate the path from code change to Amazon ECS production deployment.",
              metrics: [
                "Under 40 minutes to production",
                "8 to 10 deployments per week",
              ],
            },
            {
              href: "/eks-gitops-microservices-case-study",
              title: "Microservices delivery on Amazon EKS with GitOps",
              body: "CodetoKloud connected GitHub Actions, Amazon ECR, Helm, ArgoCD, and External Secrets Operator into a controlled delivery path with automatic development sync and a manual production approval gate.",
              metrics: [
                "Three environment configurations",
                "Manual production approval",
              ],
            },
          ],
        }}
        cta={{
          heading: "Find the highest-value delivery constraint first",
          body: "Bring the current release flow, toolchain, recent failure patterns, and desired outcome. We will help you identify the first automation or reliability change worth making.",
          label: "Book a DevOps review",
        }}
      />

      <TechDisplaySection techDisplaySection={devopsTechStack} />

      <section className="bg-white px-4 py-10 sm:px-6 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            DevOps planning guides
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/what-is-gitops",
                label: "What is GitOps?",
                description:
                  "Use Git as the source of truth for safe, auditable delivery.",
              },
              {
                href: "/what-is-infrastructure-as-code",
                label: "What is infrastructure as code?",
                description:
                  "Version and reproduce cloud environments with less drift.",
              },
              {
                href: "/github-actions-vs-jenkins-vs-gitlab-ci",
                label: "GitHub Actions vs Jenkins vs GitLab CI",
                description:
                  "Compare CI platforms by ownership, integrations, and team fit.",
              },
              {
                href: "/engagement-models",
                label: "Engagement models",
                description:
                  "Select the right project, embedded, or ongoing support model.",
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 transition-colors hover:border-[#16212e] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85f00] focus-visible:ring-offset-2"
              >
                <span className="flex items-center justify-between gap-4 font-semibold text-gray-900 group-hover:text-[#b85f00]">
                  {guide.label}
                  <span aria-hidden="true">&rarr;</span>
                </span>
                <span className="mt-1 block text-sm leading-5 text-gray-600">
                  {guide.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedInsights
        heading="AI-assisted DevOps with measurable guardrails"
        intro="Learn how AI changes delivery volume and review work, then apply practical controls to infrastructure changes, CI/CD agents, and incident response."
        items={aiDevopsInsights}
      />

      <FaqSection
        items={devopsFaqs}
        heading="DevOps consulting FAQs"
        description="Answers about scope, tool choices, Kubernetes, DevSecOps, engagement models, and measuring delivery improvement."
      />
      <RelatedServices currentPath="/devops" />
    </div>
  );
}
