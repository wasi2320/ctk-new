import type { RelatedInsightItem } from "@/app/components/sections/RelatedInsights";

export const aiDevopsInsights: readonly RelatedInsightItem[] = [
  {
    href: "/blogs/how-ai-is-changing-devops",
    title: "How AI is changing DevOps",
    description:
      "Separate faster task completion from delivery outcomes, then measure the added change volume, review demand, risk, and operating cost.",
  },
  {
    href: "/blogs/ai-generated-infrastructure-as-code-review-checklist",
    title: "Reviewing AI-generated infrastructure as code",
    description:
      "Use deterministic validation, policy checks, plan review, approval gates, staged deployment, and rollback for Terraform and Kubernetes changes.",
  },
  {
    href: "/blogs/ai-incident-response-cloud-kubernetes",
    title: "AI for cloud and Kubernetes incident response",
    description:
      "Start with evidence gathering and recommendations, then define the production actions that still require explicit human approval.",
  },
  {
    href: "/blogs/securing-ai-coding-agents-ci-cd",
    title: "Securing AI coding agents in CI/CD",
    description:
      "Limit agent permissions, protect secrets, isolate execution, enforce deterministic security checks, and retain a human production gate.",
  },
];
