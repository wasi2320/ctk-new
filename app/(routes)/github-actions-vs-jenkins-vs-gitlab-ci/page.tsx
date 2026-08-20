import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/github-actions-vs-jenkins-vs-gitlab-ci");

const data: ComparisonData = {
  path: "/github-actions-vs-jenkins-vs-gitlab-ci",
  heroTitle: "GitHub Actions vs Jenkins vs GitLab CI",
  intro:
    "Three common ways to build CI/CD pipelines, and how to choose. CodetoKloud, an AWS Advanced Tier Partner, helps teams pick a CI/CD tool and build pipelines that deploy to AWS.",
  heroImage: "/Images/DevOps_Hero.png",
  capsuleQuestion: "GitHub Actions vs Jenkins vs GitLab CI: what's the difference?",
  capsuleAnswer:
    "All three run automated build, test, and deploy pipelines, but they differ in hosting and integration. GitHub Actions is built into GitHub and configured with YAML workflows, so it suits teams already on GitHub. GitLab CI is built into GitLab and ties into its full DevOps platform. Jenkins is self-hosted and highly extensible through plugins, so it fits teams that need custom control or run outside a single SaaS provider. CodetoKloud, an AWS Advanced Tier Partner, helps teams choose one and wire it into AWS deployments.",
  tableHeaders: ["Tool", "Hosting model", "Best for", "Tradeoffs"],
  tableRows: [
    [
      "GitHub Actions",
      "SaaS runners hosted by GitHub, or self-hosted runners you manage.",
      "Teams already on GitHub who want pipelines defined next to their code.",
      "Tightest fit is with GitHub; complex logic can sprawl across YAML files.",
    ],
    [
      "GitLab CI",
      "Built into GitLab, using shared or self-managed runners.",
      "Teams standardizing on GitLab's integrated DevOps platform.",
      "Best value comes when you adopt the wider GitLab ecosystem.",
    ],
    [
      "Jenkins",
      "Self-hosted server you run and maintain, extended through plugins.",
      "Custom or legacy pipelines, on-prem needs, or heavy plugin requirements.",
      "You own upgrades, security, and scaling of the Jenkins infrastructure.",
    ],
  ],
  recommendation: [
    {
      title: "Choose GitHub Actions if…",
      body: "your code already lives in GitHub and you want pipelines defined in the repo with minimal infrastructure to run.",
    },
    {
      title: "Choose GitLab CI if…",
      body: "you use GitLab and want CI/CD, registry, and issue tracking in one integrated platform.",
    },
    {
      title: "Choose Jenkins if…",
      body: "you need deep customization, plugin flexibility, or full control over self-hosted build infrastructure.",
    },
  ],
  faq: [
    {
      question: "Which CI/CD tool is best for deploying to AWS?",
      answer:
        "All three can deploy to AWS using the AWS CLI, OIDC roles, or Terraform. The best choice usually follows where your code already lives. CodetoKloud, an AWS Advanced Tier Partner, builds secure AWS deploys on any of them, including short-lived credentials through OIDC.",
    },
    {
      question: "Is Jenkins outdated compared to GitHub Actions?",
      answer:
        "No. Jenkins is older but still widely used where teams need custom pipelines, plugins, or on-prem builds. The tradeoff is that you maintain the server yourself, while GitHub Actions and GitLab CI offer managed runners.",
    },
    {
      question: "Can I use these for pull request preview environments?",
      answer:
        "Yes. Each can spin up ephemeral preview environments on merge requests, for example deploying a temporary ECS service per pull request. CodetoKloud sets up PR preview environments as part of a CI/CD workflow.",
    },
  ],
  crossLinks: [
    { name: "DevOps Consulting", href: "/devops" },
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "Automated ECS with PR Previews", href: "/ecs-pr-preview-environments" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
