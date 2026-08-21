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

export const metadata = pageMetadata("/security-and-deployment");
const services = [
  "Amazon ECS",
  "DevSecOps Automation",
  "Content and Media Processing",
];
const projectDetails = {
  client: "Centerboard Wellness Center",
  schedule: "Oct 2024 to Feb 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Containerized services on Amazon ECS",
    description:
      "Frontend and backend services were packaged as Docker containers and deployed on Amazon ECS with scaling policies for changing demand.",
  },
  {
    title: "Infrastructure managed with CloudFormation",
    description:
      "CloudFormation replaced repeat console changes with reviewable infrastructure definitions for networks, services, and supporting resources.",
  },
  {
    title: "Protected traffic and secrets",
    description:
      "AWS WAF filtered inbound requests, while AWS Secrets Manager kept application credentials out of code and deployment configuration.",
  },
  {
    title: "Automated content analysis",
    description:
      "Amazon Rekognition, Textract, and Comprehend handled image, document, and text analysis as part of the content workflow.",
  },
  {
    title: "Event-driven media conversion",
    description:
      "AWS Lambda coordinated media processing tasks and AWS Elemental MediaConvert produced required media formats without dedicated processing servers.",
  },
  {
    title: "Automated delivery",
    description:
      "AWS CodePipeline and CodeBuild, with GitHub Actions where appropriate, built and deployed changes through a repeatable CI/CD process.",
  },
  {
    title: "Shared operational visibility",
    description:
      "Amazon CloudWatch, Prometheus, and Grafana combined service health, application metrics, and alerting for faster investigation.",
  },
];
const techStack = [
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "GitHub", icon: "/Images/PNGSS/GitHub-Logo.png" },
  { name: "Prometheus", icon: "/Images/PNGSS/prometheus.png" },
];
const metrics = [
  {
    category: "Manual Deployment",
    description: "Reduced manual deployment efforts",
    bgColor: "bg-[#16273c]",
    width: "w-[80%]",
  },
  {
    category: "Security",
    description: "Improved security with WAF and Secret Manager",
    bgColor: "bg-[#16324f]",
    width: "w-[90%]",
  },
  {
    category: "Content",
    description: "Automated content moderation",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[85%]",
  },
  {
    category: "Scalability",
    description: "Scalability achieved via ECS auto-scaling",
    bgColor: "bg-[#4a86bf]",
    width: "w-[90%]",
  },
  {
    category: "System Health",
    description: "System health monitored through CloudWatch and Grafana",
    bgColor: "bg-[#1e3a5c]",
    width: "w-[85%]",
  },
];

const lesson = {
  firstLesson:
    "This engagement worked because security, deployment, and media processing were designed as one operating model. Infrastructure definitions reduced configuration drift, managed AWS services reduced server overhead, and content processing stayed outside the synchronous application request path.",
};

export default function AwsDeploymentSecurityPage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Secure Automated Deployment on AWS ECS",
          description:
            "How CodetoKloud automated secure application deployment on AWS ECS using CloudFormation, AWS WAF, and Secrets Manager.",
          path: "/security-and-deployment",
          image: "/services/architecture/secure-ecs-media-platform.svg",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="Secure AWS ECS Delivery for a Digital Wellness Platform"
        subtitle="Container delivery, content analysis, media conversion, secrets, and monitoring were automated on AWS."
        services={services}
        arcSrc="/services/architecture/secure-ecs-media-platform.svg"
        alt="Secure AWS ECS platform with automated CI/CD, WAF-protected application traffic, private services, content analysis, media conversion, managed secrets, and observability"
      />
      <CaseStudyProblemStatement
        statement="Centerboard Wellness Center needed a repeatable way to deploy and operate connected frontend and backend services that handle user content and media. Manual infrastructure work, sensitive environment values, content analysis, media conversion, monitoring, backups, and scaling all had to be addressed without expanding the operational burden."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The platform separated user traffic, application runtime, asynchronous content processing, and operational controls. This kept the deployment path repeatable and let each processing service scale for its own workload."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
      <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Need to secure and automate an ECS workload?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          We can review delivery, secrets, content processing, scaling, and
          observability as one AWS architecture.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
        >
          Review my ECS architecture
        </Link>
      </section>
    </CaseStudyLayout>
    </>
  );
}
