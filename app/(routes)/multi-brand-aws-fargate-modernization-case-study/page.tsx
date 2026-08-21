import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "/multi-brand-aws-fargate-modernization-case-study",
);

const data: CaseStudyData = {
  path: "/multi-brand-aws-fargate-modernization-case-study",
  title: "Four-Brand AWS Fargate Platform Modernization",
  heroTitle: "Four Brands Modernized on a Shared AWS Platform",
  intro:
    "A growing business needed to replace aging infrastructure and inconsistent manual releases across four digital brands. We built a repeatable AWS platform with managed containers, resilient data services, secure delivery, and a phased cutover plan.",
  heroImage: "/services/architecture/multi-brand-fargate-modernization.svg",
  heroImageAlt:
    "Architecture diagram showing four brands delivered through CloudFront, Amplify, API Gateway, and an Application Load Balancer to autoscaling ECS Fargate services backed by Aurora MySQL across multiple Availability Zones.",
  metaDescription:
    "How CodetoKloud modernized four brands on AWS using ECS Fargate, Aurora MySQL, Amplify, secure GitHub Actions delivery, autoscaling, monitoring, and a phased cutover.",
  problem: [
    "Four related brands were operating on aging AWS infrastructure with inconsistent manual deployment practices. The production environment also had performance problems that required careful diagnosis while services remained available.",
    "The modernization needed a common delivery pattern without forcing every application into one release cycle. The client also needed a clear handoff so its team could operate, troubleshoot, and roll back the platform after delivery.",
  ],
  solution: [
    {
      title: "Managed Container Platform",
      body: "We moved backend services to ECS Fargate so each brand could run containerized workloads without managing server fleets. Application Load Balancer and API Gateway routes separated web and API traffic while preserving independent service boundaries.",
    },
    {
      title: "Resilient Data Layer",
      body: "We used Aurora MySQL across multiple Availability Zones with a writer and read capacity. Database and service autoscaling allowed the platform to respond to demand without making capacity changes part of every release.",
    },
    {
      title: "Frontend Delivery and Edge Routing",
      body: "AWS Amplify hosted the web applications while CloudFront handled edge delivery. The architecture kept frontend releases distinct from backend services and supported the planned traffic cutover.",
    },
    {
      title: "Short-Lived Deployment Access",
      body: "GitHub Actions used AWS identity federation instead of stored cloud access keys. Pipelines retrieved runtime secrets from AWS Secrets Manager and deployed the brand services through a repeatable release workflow.",
    },
    {
      title: "Phased Migration and Cutover",
      body: "We delivered the foundation, container services, frontend delivery, and traffic changes in controlled phases. That sequence made dependencies visible and reduced the risk of moving every brand at once.",
    },
    {
      title: "Monitoring and Operational Handoff",
      body: "CloudWatch provided service health and container monitoring. The handoff documented the architecture, deployment workflow, troubleshooting steps, and rollback process for the client team.",
    },
  ],
  results: [
    "Four brands moved onto a consistent AWS infrastructure and deployment pattern while retaining separate application release paths.",
    "A production database performance issue was diagnosed and resolved without downtime during the engagement.",
    "The client received a documented architecture, deployment workflow, troubleshooting guide, and rollback runbook for ongoing operations.",
  ],
  stack: [
    "Amazon ECS Fargate",
    "Aurora MySQL",
    "AWS Amplify",
    "Application Load Balancer",
    "Amazon API Gateway",
    "Amazon CloudFront",
    "GitHub Actions",
    "AWS IAM OIDC",
    "AWS Secrets Manager",
    "Amazon CloudWatch",
  ],
  crossLinks: [
    { name: "AWS Cloud Infrastructure", href: "/cloud-service" },
    { name: "DevOps Automation", href: "/devops" },
    { name: "Cloud Migration", href: "/cloud-migration" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
