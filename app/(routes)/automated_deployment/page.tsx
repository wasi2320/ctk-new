import React from "react";
import CaseStudyLayout from "@/app/components/sections/caseStudies/CaseStudyLayout";
import CaseStudyHeader from "@/app/components/sections/caseStudies/CaseStudyHeader";
import CaseStudyProblemStatement from "@/app/components/sections/caseStudies/CaseStudyProblemStatement";
import CaseStudySolution from "@/app/components/sections/caseStudies/CaseStudySolution";
import CaseStudyTechStack from "@/app/components/sections/caseStudies/CaseStudyTechStack";
import CaseStudyLessons from "@/app/components/sections/caseStudies/CaseStudyLessons";
import MetricsDisplay from "@/app/components/metrics";

const services = [
  "Cloud Consulting & SI",
  "DevOps Managed Services",
  "Mobile App Development",
];
const projectDetails = {
  client: "Topflight Apps",
  schedule: "Jan 2025 — Mar 2025",
  size: "$10,000 to $49,999",
};
const solutionComponents = [
  {
    title: "Automating deployment using GitLab CI/CD, Docker, and AWS",
    description:
      "Code is stored in GitLab, triggering builds, tests, and deployments. Application is containerized with Docker, and images are stored securely in AWS ECR. Deployed and managed containers for scalability and high availability, while Route 53 handles DNS.",
  },
];
const techStack = [
  {
    name: "Docker",
    icon: "/Images/PNGSS/bg_dock.png",
  },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "Google Cloud", icon: "/Images/PNGSS/gcloud.png" },
];
const metrics = [
  {
    category: "Deployment Process",
    description: "Faster, secure, and scalable deployment process",
    bgColor: "bg-[#1a2e22]",
    width: "w-[90%]",
  },
  {
    category: "High Availability",
    description:
      "Zero-downtime deployments with high availability via AWS ECS and Route 53",
    bgColor: "bg-[#1a3b2a]",
    width: "w-[95%]",
  },
  {
    category: "Image Storage",
    description: "Secure image storage in AWS ECR",
    bgColor: "bg-[#3a6a50]",
    width: "w-[80%]",
  },
  {
    category: "Cost Efficiency",
    description: "Improved cost-efficiency with AWS's pay-as-you-go model",
    bgColor: "bg-[#4d7a65]",
    width: "w-[85%]",
  },
];

const lesson = {
  firstLesson:
    "Key lessons include the value of automation through GitLab CI/CD and Docker, which reduced manual effort and errors. Leveraging AWS services demonstrated scalability and cost-effectiveness compared to on-premise hardware. Storing Docker images in AWS ECR ensured better security, and continuous updates to the CI/CD pipeline improved performance and reliability over time.",
};

export default function AutomatedDeploymentPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="Automated Deployment of Financial App"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/automated_aws.png"
        alt="AWS Architecture Diagram"
      />
      <CaseStudyProblemStatement
        statement="The challenge was to create a streamlined, automated, and scalable deployment process for a Python-based financial application. The goal was to ensure efficient CI/CD pipelines, secure container image management, high availability, scalability, and reduced downtime and operational costs."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/automated_aws2.png"
        illustrationAlt="Solution Illustration"
        description="This approach minimizes downtime, ensures secure storage, and offers cost-effective scalability with continuous zero-downtime updates."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
    </CaseStudyLayout>
  );
}
