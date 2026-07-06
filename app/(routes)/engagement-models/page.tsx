import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import JsonLd from "@/app/components/JsonLd";
import { offerCatalogSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/engagement-models");

const data: DefinitionData = {
  path: "/engagement-models",
  heroTitle: "How We Work: Engagement Models",
  intro:
    "The three ways CodetoKloud works with clients: fixed-scope projects, managed retainers, and short assessments. Every engagement starts with a free consultation.",
  heroImage: "/services/aws_mono2.png",
  capsuleQuestion: "How does CodetoKloud engage with clients?",
  capsuleAnswer:
    "CodetoKloud works with clients in three ways: fixed-scope projects for a defined outcome, ongoing managed-operations retainers, and short assessments or readiness reviews as a low-commitment starting point. As an AWS Advanced Tier Partner, we scope each engagement to your goals and give a clear quote before any work begins.",
  sections: [
    {
      title: "Fixed-scope projects",
      body: "For a defined outcome such as a CI/CD pipeline, a cloud migration, an Amazon EKS platform, or a compliance buildout, we scope the work, agree a fixed price, and deliver against clear milestones.",
    },
    {
      title: "Managed operations (retainer)",
      body: "For ongoing needs, we run your AWS and Kubernetes infrastructure day to day: monitoring, autoscaling, version upgrades, cost optimization, and incident response, on a monthly retainer.",
    },
    {
      title: "Assessments and readiness reviews",
      body: "A low-commitment starting point. We review your setup, whether that is Kubernetes readiness, cloud cost, DevOps maturity, or compliance gaps, and hand you a prioritized plan. Many engagements start here.",
    },
    {
      title: "How we start",
      body: "Every engagement begins with a free consultation. We learn your goals, recommend an approach, and send a scoped quote before any work begins.",
    },
  ],
  faq: [
    {
      question: "How do CodetoKloud engagements work?",
      answer:
        "We start with a free consultation, agree on an engagement model (a fixed-scope project, a retainer, or an assessment), scope the work, and send a quote before starting.",
    },
    {
      question: "Can we start small?",
      answer:
        "Yes. A short assessment or readiness review is a common, low-commitment way to start and see the value before committing to a larger project.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. Managed-operations retainers cover ongoing DevOps and Kubernetes operations after a project goes live, including monitoring, upgrades, and incident response.",
    },
  ],
  crossLinks: [
    { name: "DevOps consulting cost", href: "/devops-consulting-cost" },
    { name: "DevOps Consulting", href: "/devops" },
    { name: "Kubernetes & EKS Consulting", href: "/kubernetes" },
  ],
  ctaHeading: "Start with a free consultation",
};

const offers = [
  {
    name: "Fixed-scope project",
    description:
      "A defined outcome such as a CI/CD setup, cloud migration, or EKS platform, delivered for a fixed price against milestones.",
  },
  {
    name: "Managed operations retainer",
    description:
      "Ongoing managed DevOps and Kubernetes operations, including monitoring, upgrades, cost optimization, and incident response.",
  },
  {
    name: "Assessment or readiness review",
    description:
      "A short, low-commitment review such as a Kubernetes readiness review, cloud cost audit, or compliance gap assessment.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={offerCatalogSchema(offers, "/engagement-models")} />
      <DefinitionPage data={data} />
    </>
  );
}
