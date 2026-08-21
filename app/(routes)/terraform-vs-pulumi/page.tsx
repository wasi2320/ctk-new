import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/terraform-vs-pulumi");

const data: ComparisonData = {
  path: "/terraform-vs-pulumi",
  heroTitle: "Terraform vs Pulumi",
  intro:
    "Two approaches to infrastructure as code, and how to choose. CodetoKloud, an AWS Advanced Tier Partner, helps teams pick an IaC tool and build repeatable AWS infrastructure.",
  heroImage: "/services/aws-solution-illustration.png",
  capsuleQuestion: "Terraform vs Pulumi: what's the difference?",
  capsuleAnswer:
    "Terraform and Pulumi both provision cloud infrastructure as code and track it in state. Terraform uses its own declarative language, HCL, and has a very large provider and module ecosystem. Pulumi lets you define infrastructure in general-purpose languages like TypeScript, Python, and Go, which suits teams that want loops, tests, and abstractions from a familiar language. Both support AWS well and manage drift through state. CodetoKloud, an AWS Advanced Tier Partner, helps teams choose one and build the surrounding workflow.",
  tableHeaders: ["Tool", "Language", "Best for", "Tradeoffs"],
  tableRows: [
    [
      "Terraform",
      "HCL, a purpose-built declarative configuration language.",
      "Teams that want the largest provider and module ecosystem and a clear declarative model.",
      "HCL has limits for complex logic, and licensing changed to BSL in recent versions.",
    ],
    [
      "Pulumi",
      "General-purpose languages such as TypeScript, Python, Go, and C#.",
      "Teams that want real programming constructs, unit tests, and shared abstractions.",
      "Smaller ecosystem, and code flexibility can reduce consistency without guardrails.",
    ],
  ],
  recommendation: [
    {
      title: "Choose Terraform if…",
      body: "you want the widest provider ecosystem, a large hiring pool, and a declarative model that stays readable across teams.",
    },
    {
      title: "Choose Pulumi if…",
      body: "your team prefers writing infrastructure in a familiar programming language with loops, functions, and unit tests.",
    },
    {
      title: "Either works if…",
      body: "you commit to code review, remote state, and a clear module structure. The discipline around IaC matters more than the tool.",
    },
  ],
  faq: [
    {
      question: "Is Pulumi better than Terraform?",
      answer:
        "Neither is strictly better. Pulumi suits teams that want a real programming language and testing, while Terraform has a larger ecosystem and a simpler declarative model. The right pick depends on your team's skills and existing tooling.",
    },
    {
      question: "Does the Terraform license change affect me?",
      answer:
        "Terraform moved to the Business Source License, which matters mainly for vendors building competing products. Most teams using it to manage their own infrastructure are unaffected, and OpenTofu exists as an open-source fork if licensing is a concern.",
    },
    {
      question: "Can CodetoKloud build our AWS infrastructure as code?",
      answer:
        "Yes. CodetoKloud, an AWS Advanced Tier Partner, builds AWS infrastructure with Terraform or Pulumi, including remote state, modules, and CI pipelines that plan and apply changes safely.",
    },
  ],
  crossLinks: [
    { name: "DevOps Consulting", href: "/devops" },
    { name: "Terraform vs CloudFormation", href: "/terraform-vs-cloudformation" },
    { name: "What Is Infrastructure as Code?", href: "/what-is-infrastructure-as-code" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
