import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/hipaa-aws-hardening-case-study");

const data: CaseStudyData = {
  path: "/hipaa-aws-hardening-case-study",
  title: "HIPAA Hardening for a Healthcare Data Platform on AWS",
  heroTitle: "HIPAA Hardening for a Healthcare Data Platform",
  intro:
    "A healthcare data company had a working patient-facing analytics portal on AWS. The next phase had one requirement: take it from staging to a HIPAA-hardened production posture.",
  heroImage: "/services/GoAgalia.png",
  metaDescription:
    "How CodetoKloud hardened a healthcare data company's patient-facing analytics portal for HIPAA on AWS, with private ECS Fargate networking, end-to-end TLS, and Aurora PostgreSQL.",
  problem: [
    "A healthcare data company ran a working patient-facing analytics portal on ECS Fargate, built with Node.js and Prisma on PostgreSQL. It worked, but working software and audit-ready software are two different problems.",
    "The next phase had a single requirement: make the platform HIPAA-compliant and production-grade.",
  ],
  solution: [
    {
      title: "Private, Encrypted Networking",
      body: "We moved the ECS Fargate services into private subnets and put TLS end to end using ACM, so protected health information stays encrypted in transit and off the public internet.",
    },
    {
      title: "Managed Database Migration",
      body: "We migrated the database to Aurora PostgreSQL with proper HTTPS and certificate setup, for durability and managed failover.",
    },
    {
      title: "Fixed the Network Architecture",
      body: "We found and resolved a regional NAT gateway architecture issue that was breaking connectivity, then hardened the surrounding setup.",
    },
    {
      title: "Milestone-Based Production Buildout",
      body: "We delivered the production infrastructure as a milestone-based engagement across three milestones, so the move from staging to production stayed controlled.",
    },
  ],
  results: [
    "The platform moved from a staging setup to a HIPAA-hardened production posture on AWS.",
    "Protected health information is encrypted in transit and at rest, running on private networking with managed, replicated data.",
  ],
  metrics: ["HIPAA-hardened production", "Private ECS Fargate + Aurora"],
  stack: [
    "AWS ECS Fargate",
    "Aurora PostgreSQL",
    "Prisma",
    "Node.js",
    "AWS ACM",
    "VPC / NAT",
    "AWS Secrets Manager",
  ],
  crossLinks: [
    { name: "HIPAA Compliance", href: "/hipaa-compliance" },
    { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
