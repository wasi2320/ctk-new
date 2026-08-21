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

export const metadata = pageMetadata("/automated_deployment");
const services = [
  "Amazon ECS",
  "CI/CD Automation",
  "Container Delivery",
];
const projectDetails = {
  client: "Topflight Apps",
  schedule: "Jan 2025 to Mar 2025",
  size: "$10,000 to $49,999",
};
const solutionComponents = [
  {
    title: "Automated validation in GitLab CI",
    description:
      "Every code change triggered a controlled pipeline that built the Python application, ran tests, and prepared a versioned container release.",
  },
  {
    title: "Private image storage in Amazon ECR",
    description:
      "Validated Docker images were published to Amazon ECR so deployments referenced a traceable artifact instead of rebuilding in production.",
  },
  {
    title: "Highly available Amazon ECS service",
    description:
      "Amazon ECS ran application tasks across two Availability Zones behind health checks, with Route 53 directing users to the service.",
  },
  {
    title: "Rolling updates with rollback",
    description:
      "The deployment workflow replaced healthy tasks gradually and returned to the last known image when health checks failed.",
  },
];
const techStack = [
  {
    name: "Docker",
    icon: "/Images/PNGSS/bg_dock.png",
  },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
];
const metrics = [
  {
    category: "Deployment Process",
    description: "Faster, secure, and scalable deployment process",
    bgColor: "bg-[#16273c]",
    width: "w-[90%]",
  },
  {
    category: "High Availability",
    description:
      "Zero-downtime deployments with high availability via AWS ECS and Route 53",
    bgColor: "bg-[#16324f]",
    width: "w-[95%]",
  },
  {
    category: "Image Storage",
    description: "Secure image storage in AWS ECR",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[80%]",
  },
  {
    category: "Cost Efficiency",
    description: "Improved cost-efficiency with AWS's pay-as-you-go model",
    bgColor: "bg-[#4a86bf]",
    width: "w-[85%]",
  },
];

const lesson = {
  firstLesson:
    "For this financial application, the strongest reliability gain came from treating build artifacts, health checks, deployment order, and rollback as one workflow. Amazon ECR made each release traceable, while Amazon ECS provided a consistent runtime across Availability Zones.",
};

export default function AutomatedDeploymentPage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Zero-Downtime Automated Deployment for a Financial App",
          description:
            "How CodetoKloud built zero-downtime automated deployments for a Python financial application using GitLab CI/CD, Docker, and AWS ECS.",
          path: "/automated_deployment",
          image: "/services/architecture/ecs-deployment-pipeline.svg",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="Zero Downtime Deployment for a Python Financial App"
        subtitle="GitLab CI, Amazon ECR, and Amazon ECS created a repeatable release path with health checks and rollback."
        services={services}
        arcSrc="/services/architecture/ecs-deployment-pipeline.svg"
        alt="GitLab CI deployment pipeline to an Amazon ECS service across two Availability Zones with health checks and rollback"
      />
      <CaseStudyProblemStatement
        statement="Topflight Apps needed a safer release process for a Python financial application. Manual steps made deployments difficult to repeat, while the production service needed traceable container images, capacity across Availability Zones, health-based rollout decisions, and a practical rollback path."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The finished pipeline linked every production task to a tested container image and used service health to decide whether a release should continue or roll back."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
      <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Need safer releases on Amazon ECS?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          We can review your current build, image, deployment, health check, and
          rollback path and identify the highest-risk manual steps.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
        >
          Review my ECS delivery process
        </Link>
      </section>
    </CaseStudyLayout>
    </>
  );
}
