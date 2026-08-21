import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/soc-2-healthcare-aws-case-study");

const data: CaseStudyData = {
  path: "/soc-2-healthcare-aws-case-study",
  title: "SOC 2 Multi-AZ Healthcare Platform on AWS",
  heroTitle: "SOC 2-Ready Multi-AZ Healthcare Platform on AWS",
  intro:
    "A healthcare application storing patient records and billing data needed to pass a SOC 2 audit. We rebuilt its AWS infrastructure for high availability, audit logging, and encryption.",
  heroImage: "/services/architecture/soc2-healthcare-multiaz.svg",
  metaDescription:
    "How CodetoKloud rebuilt a healthcare platform on AWS with Multi-AZ failover, cross-AZ replication, audit logging, and encryption to pass a SOC 2 audit and reach 99.99% uptime.",
  problem: [
    "A healthcare company stored patient records and billing data on legacy single-AZ infrastructure. There was no reliable audit trail, and replication between systems was inconsistent.",
    "Enterprise healthcare partners were walking away from deals because the platform could not show SOC 2 compliance. The infrastructure had to change before the business could grow.",
  ],
  solution: [
    {
      title: "Multi-AZ Rebuild with Automated Failover",
      body: "We rebuilt the platform across multiple Availability Zones with automated failover, so a single zone outage no longer takes the application down.",
    },
    {
      title: "Cross-AZ Database Replication",
      body: "We moved to RDS for MSSQL with synchronous cross-AZ replication, and added S3 and file server storage with asynchronous replication for durability.",
    },
    {
      title: "Network Segmentation and Access Control",
      body: "We segmented the VPC, added a VPN to the on-premise environment, put a WAF in front of the application, and enforced role-based access control.",
    },
    {
      title: "Audit Trail and Alerting",
      body: "We added Elasticsearch logging with a real-time audit trail and alerting. That gave the compliance team the evidence a SOC 2 audit requires.",
    },
    {
      title: "Containerized Services",
      body: "We containerized the application services with Docker, so deployments became consistent and repeatable across environments.",
    },
  ],
  results: [
    "The platform passed its SOC 2 audit.",
    "Uptime has held at 99.99% since Multi-AZ failover went live.",
    "The client closed enterprise deals that compliance gaps had previously blocked.",
  ],
  metrics: ["Passed SOC 2 audit", "99.99% uptime"],
  stack: [
    "AWS Multi-AZ",
    "Docker",
    "RDS for MSSQL",
    "Amazon S3",
    "AWS VPN",
    "AWS WAF",
    "Elasticsearch",
  ],
  crossLinks: [
    { name: "SOC 2 Compliance on AWS", href: "/soc-2-compliance" },
    { name: "Security & Compliance", href: "/security-and-compliance" },
    { name: "Review my SOC 2 architecture", href: "/contact" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
