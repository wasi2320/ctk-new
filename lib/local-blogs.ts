import type { Blog, Category } from "@/lib/blogs";
import { aiGeneratedInfrastructureAsCodeReviewChecklistContent } from "@/lib/local-blog-content/ai-generated-infrastructure-as-code-review-checklist";
import { aiIncidentResponseCloudKubernetesContent } from "@/lib/local-blog-content/ai-incident-response-cloud-kubernetes";
import { howAiIsChangingDevopsContent } from "@/lib/local-blog-content/how-ai-is-changing-devops";
import { securingAiCodingAgentsCiCdContent } from "@/lib/local-blog-content/securing-ai-coding-agents-ci-cd";

export const LOCAL_BLOG_CATEGORY: Category = {
  id: "local-ai-devops",
  name: "AI and DevOps",
  description:
    "Practical guidance for using AI safely in software delivery, infrastructure, and cloud operations.",
  created_at: "2026-08-20T12:00:00.000Z",
};

export const LOCAL_BLOGS: Blog[] = [
  {
    id: "local-how-ai-is-changing-devops",
    title: "How AI Is Changing DevOps: Gains, Risks, and Controls",
    slug: "how-ai-is-changing-devops",
    excerpt:
      "AI is increasing code and change volume, but DevOps gains depend on review capacity, small batches, strong testing, access controls, and reliable measurement.",
    content: howAiIsChangingDevopsContent,
    poster_url: "/blogs/ai-devops/how-ai-is-changing-devops.svg",
    poster_alt:
      "AI-assisted DevOps lifecycle showing faster creation balanced by review, security, delivery, and reliability controls",
    author_id: "CodetoKloud Editorial Team",
    created_at: "2026-08-20T23:59:00.000Z",
    updated_at: "2026-08-20T23:59:00.000Z",
    category_id: LOCAL_BLOG_CATEGORY.id,
    categories: { name: LOCAL_BLOG_CATEGORY.name },
    seo_keywords: [
      "AI in DevOps",
      "AI DevOps risks",
      "DevOps automation",
      "AI software delivery",
      "DORA metrics",
    ],
    related_slugs: [
      "ai-generated-infrastructure-as-code-review-checklist",
      "securing-ai-coding-agents-ci-cd",
      "ai-incident-response-cloud-kubernetes",
    ],
    cta: {
      heading: "Review how AI fits your delivery system",
      body: "Map the highest-value use cases, the controls they need, and the delivery metrics that will show whether AI is helping your engineering system.",
      primaryLabel: "Book an AI and DevOps review",
      primaryHref: "/contact",
      secondaryLabel: "Explore DevOps services",
      secondaryHref: "/devops",
    },
  },
  {
    id: "local-ai-generated-infrastructure-as-code-review-checklist",
    title: "AI-Generated Terraform and Kubernetes Review Checklist",
    slug: "ai-generated-infrastructure-as-code-review-checklist",
    excerpt:
      "Review AI-generated Terraform, CloudFormation, Kubernetes, Helm, and pipeline changes with deterministic validation, approval gates, and tested recovery.",
    content: aiGeneratedInfrastructureAsCodeReviewChecklistContent,
    poster_url:
      "/blogs/ai-devops/ai-generated-infrastructure-as-code-review-checklist.svg",
    poster_alt:
      "Infrastructure as code review flow from AI draft through validation, security policy, plan review, approval, and controlled deployment",
    author_id: "CodetoKloud Editorial Team",
    created_at: "2026-08-20T23:58:00.000Z",
    updated_at: "2026-08-20T23:58:00.000Z",
    category_id: LOCAL_BLOG_CATEGORY.id,
    categories: { name: LOCAL_BLOG_CATEGORY.name },
    seo_keywords: [
      "AI-generated Terraform",
      "Kubernetes manifest review",
      "infrastructure as code security",
      "Terraform review checklist",
      "AI infrastructure code",
    ],
    related_slugs: [
      "how-ai-is-changing-devops",
      "securing-ai-coding-agents-ci-cd",
      "ai-incident-response-cloud-kubernetes",
    ],
    cta: {
      heading: "Review your AI-assisted infrastructure workflow",
      body: "Identify where deterministic validation, policy checks, approval boundaries, and recovery tests belong before AI-generated changes reach a cloud environment.",
      primaryLabel: "Book an infrastructure review",
      primaryHref: "/contact",
      secondaryLabel: "Explore infrastructure as code",
      secondaryHref: "/what-is-infrastructure-as-code",
    },
  },
  {
    id: "local-ai-incident-response-cloud-kubernetes",
    title: "AI for Cloud and Kubernetes Incident Response",
    slug: "ai-incident-response-cloud-kubernetes",
    excerpt:
      "Learn where AI can assist cloud and Kubernetes incident response, which production actions require approval, and how to measure safety and operational value.",
    content: aiIncidentResponseCloudKubernetesContent,
    poster_url:
      "/blogs/ai-devops/ai-incident-response-cloud-kubernetes.svg",
    poster_alt:
      "Cloud and Kubernetes incident response workflow showing telemetry, AI analysis, human approval, bounded action, and audit evidence",
    author_id: "CodetoKloud Editorial Team",
    created_at: "2026-08-20T23:57:00.000Z",
    updated_at: "2026-08-20T23:57:00.000Z",
    category_id: LOCAL_BLOG_CATEGORY.id,
    categories: { name: LOCAL_BLOG_CATEGORY.name },
    seo_keywords: [
      "AI incident response",
      "Kubernetes incident response",
      "cloud operations AI",
      "AI SRE",
      "AI observability",
    ],
    related_slugs: [
      "how-ai-is-changing-devops",
      "securing-ai-coding-agents-ci-cd",
      "ai-generated-infrastructure-as-code-review-checklist",
    ],
    cta: {
      heading: "Strengthen your cloud incident operating model",
      body: "Review the telemetry, permissions, runbooks, approval boundaries, and recovery controls required before AI assists production response.",
      primaryLabel: "Book an incident readiness review",
      primaryHref: "/contact",
      secondaryLabel: "Explore Kubernetes services",
      secondaryHref: "/kubernetes",
    },
  },
  {
    id: "local-securing-ai-coding-agents-ci-cd",
    title: "Securing AI Coding Agents in CI/CD",
    slug: "securing-ai-coding-agents-ci-cd",
    excerpt:
      "Secure AI coding agents with separate identities, short-lived credentials, isolated runners, deterministic checks, and human-controlled production gates.",
    content: securingAiCodingAgentsCiCdContent,
    poster_url: "/blogs/ai-devops/securing-ai-coding-agents-ci-cd.svg",
    poster_alt:
      "Secure CI/CD path for an AI coding agent with isolated execution, short-lived identity, automated checks, approval, and production boundary",
    author_id: "CodetoKloud Editorial Team",
    created_at: "2026-08-20T23:56:00.000Z",
    updated_at: "2026-08-20T23:56:00.000Z",
    category_id: LOCAL_BLOG_CATEGORY.id,
    categories: { name: LOCAL_BLOG_CATEGORY.name },
    seo_keywords: [
      "AI coding agent security",
      "AI CI/CD security",
      "secure coding agents",
      "CI/CD access controls",
      "AI DevSecOps",
    ],
    related_slugs: [
      "how-ai-is-changing-devops",
      "ai-generated-infrastructure-as-code-review-checklist",
      "ai-incident-response-cloud-kubernetes",
    ],
    cta: {
      heading: "Constrain AI agents before they reach production",
      body: "Review agent identities, runner isolation, secrets, pull request controls, security checks, and production approval boundaries for your delivery pipeline.",
      primaryLabel: "Book an AI pipeline security review",
      primaryHref: "/contact",
      secondaryLabel: "Explore security services",
      secondaryHref: "/security-and-compliance",
    },
  },
];
