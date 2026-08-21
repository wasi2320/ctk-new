import React from "react";
import Link from "next/link";
import CaseStudyLayout from "@/app/components/sections/caseStudies/CaseStudyLayout";
import CaseStudyHeader from "@/app/components/sections/caseStudies/CaseStudyHeader";
import CaseStudyProblemStatement from "@/app/components/sections/caseStudies/CaseStudyProblemStatement";
import CaseStudySolution from "@/app/components/sections/caseStudies/CaseStudySolution";
import CaseStudyTechStack from "@/app/components/sections/caseStudies/CaseStudyTechStack";
import CaseStudyLessons from "@/app/components/sections/caseStudies/CaseStudyLessons";
import MetricsDisplay from "@/app/components/metrics";
import { pageMetadata } from "@/lib/page-metadata";
import JsonLd from "@/app/components/JsonLd";
import { caseStudySchema } from "@/lib/structured-data";

export const metadata = pageMetadata("/monolithic-structure");
const services = [
  "AWS Architecture",
  "Application Migration",
  "CI/CD and Operations",
];
const projectDetails = {
  client: "Clyk Studio",
  schedule: "Feb 2025 to Mar 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Highly available application tier",
    description:
      "An Application Load Balancer distributed traffic to Elastic Beanstalk instances in two Availability Zones, with Auto Scaling adjusting capacity.",
  },
  {
    title: "Managed Multi-AZ data",
    description:
      "Amazon RDS Multi-AZ provided managed database failover, while AWS Backup and EBS snapshots protected recoverable application data.",
  },
  {
    title: "Layered traffic and identity controls",
    description:
      "Route 53, CloudFront, AWS WAF, Amazon Cognito, VPC isolation, and AWS KMS protected requests, identities, networks, and stored data.",
  },
  {
    title: "Repeatable application delivery",
    description:
      "GitHub, CodePipeline, and CodeDeploy moved changes through a consistent release process instead of relying on manual server updates.",
  },
  {
    title: "Monitoring and alerting",
    description:
      "Amazon CloudWatch tracked application and infrastructure health, with Amazon SNS and Slack notifications directing issues to the team.",
  },
];
const techStack = [
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "GitHub", icon: "/Images/PNGSS/GitHub-Logo.png" },
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
];
const metrics = [
  {
    category: "Scalability",
    description:
      "Scalability achieved with Auto Scaling Groups and Elastic Beanstalk",
    bgColor: "bg-[#16273c]",
    width: "w-[90%]",
  },
  {
    category: "Availability",
    description:
      "High availability through Application Load Balancer and Route 53",
    bgColor: "bg-[#16324f]",
    width: "w-[85%]",
  },
  {
    category: "Security",
    description: "Strong security with Cognito, WAF, and KMS",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[55%]",
  },
  {
    category: "Errors",
    description: "CI/CD pipelines reduce errors",
    bgColor: "bg-[#4a86bf]",
    width: "w-[40%]",
  },
  {
    category: "Performance",
    description: "Performance monitoring via CloudWatch, alerts via SNS/Slack",
    bgColor: "bg-[#1e3a5c]",
    width: "w-[85%]",
  },
  {
    category: "Cost Optimization",
    description: "Cost optimization with S3 storage and Auto Scaling",
    bgColor: "bg-[#3a5a4a]",
    width: "w-[80%]",
  },
  {
    category: "Data Protection",
    description: "Data protection ensured through AWS Backup and EBS snapshots",
    bgColor: "bg-[#4a86bf]",
    width: "w-[90%]",
  },
];

const lesson = {
  firstLesson:
    "The monolith did not need to be rewritten to gain stronger availability and operations. Careful dependency discovery, migration rehearsal, health checks, backups, and monitoring reduced risk while managed AWS services improved the existing deployment model.",
  secondLesson:
    "The project TCO comparison included migration work, steady-state operations, compute, managed database, load balancing, and backup costs. The AWS option was selected because it combined elastic capacity with managed availability and security controls for this application.",
};

export default function AwsMonolithicAppArchitecturePage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Scalable AWS Architecture for a Monolithic Application",
          description:
            "How CodetoKloud architected a scalable, highly available AWS deployment for a monolithic application using Elastic Beanstalk, Auto Scaling Groups, and Route 53.",
          path: "/monolithic-structure",
          image: "/services/architecture/high-availability-aws-monolith.svg",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="Highly Available AWS Architecture for a Monolithic App"
        subtitle="Clyk Studio improved availability, scaling, delivery, and recovery without forcing an immediate application rewrite."
        services={services}
        arcSrc="/services/architecture/high-availability-aws-monolith.svg"
        alt="Highly available AWS monolith with CloudFront, an Application Load Balancer, Elastic Beanstalk across two Availability Zones, and Amazon RDS Multi-AZ"
      />
      <CaseStudyProblemStatement
        statement="Clyk Studio needed to move a monolithic application to AWS without introducing the risk of a simultaneous rewrite. The target architecture had to preserve the application model while adding Multi-AZ availability, automatic scaling, controlled releases, identity protection, monitoring, and recoverable data."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The migration used managed AWS services around the existing application. This reduced infrastructure risk first and preserved the option to modernize individual components later."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
      <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Moving a monolith to AWS?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          We will map application dependencies, availability needs, release risk,
          and recovery requirements before choosing a migration pattern.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
        >
          Review my monolith migration
        </Link>
      </section>
    </CaseStudyLayout>
    </>
  );
}
