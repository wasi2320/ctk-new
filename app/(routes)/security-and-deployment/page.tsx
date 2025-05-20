import React from "react";
import CaseStudyLayout from "@/app/components/sections/caseStudies/CaseStudyLayout";
import CaseStudyHeader from "@/app/components/sections/caseStudies/CaseStudyHeader";
import CaseStudyProblemStatement from "@/app/components/sections/caseStudies/CaseStudyProblemStatement";
import CaseStudySolution from "@/app/components/sections/caseStudies/CaseStudySolution";
import CaseStudyTechStack from "@/app/components/sections/caseStudies/CaseStudyTechStack";
import CaseStudyLessons from "@/app/components/sections/caseStudies/CaseStudyLessons";
import MetricsDisplay from "@/app/components/metrics";

const services = [
  "Internet & Technology Law",
  "DevOps Managed Services",
  "Web Development",
];
const projectDetails = {
  client: "Centerboard Wellness Center",
  schedule: "Oct 2024 — Feb 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Applications are deployed using Docker containers on AWS ECS",
    description: "",
  },
  {
    title: "Automated with AWS CloudFormation",
    description: "for scalability",
  },
  {
    title: "Security is handled with AWS WAF and Secret Manager",
    description: "",
  },
  {
    title: "Content moderation uses AWS Recognition, Textract, and Comprehend",
    description: "",
  },
  {
    title: "Media conversion is done with AWS MediaConvert and Lambda",
    description: "",
  },
  {
    title:
      "CI/CD is automated via AWS CodePipeline, CodeBuild, or GitHub actions",
    description: "",
  },
  {
    title: "System monitoring implemented using AWS CloudWatch, Grafana",
    description: "",
  },
  {
    title: "Prometheus for performance tracking.",
    description: "",
  },
];
const techStack = [
  { name: "docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "Google Cloud", icon: "/Images/PNGSS/gcloud.png" },
];
const metrics = [
  {
    category: "Manual Deployment",
    description: "Reduced manual deployment efforts",
    bgColor: "bg-[#1a2e22]",
    width: "w-[80%]",
  },
  {
    category: "Security",
    description: "Improved security with WAF and Secret Manager",
    bgColor: "bg-[#1a3b2a]",
    width: "w-[90%]",
  },
  {
    category: "Content",
    description: "Automated content moderation",
    bgColor: "bg-[#3a6a50]",
    width: "w-[85%]",
  },
  {
    category: "Scalability",
    description: "Scalability achieved via ECS auto-scaling",
    bgColor: "bg-[#4d7a65]",
    width: "w-[90%]",
  },
  {
    category: "System Health",
    description: "System health monitored through CloudWatch and Grafana",
    bgColor: "bg-[#2e4d3a]",
    width: "w-[85%]",
  },
];

const lesson = {
  firstLesson:
    "Automation (CI/CD, CloudFormation) minimized manual errors and streamlined infrastructure management. Using managed AWS services (ECS, MongoDB Atlas, Lambda) improved scalability and reduced overhead. Early integration of security measures (WAF, Secret Manager) ensured robust protection without added complexity. The TCO analysis highlighted the long-term cost savings of cloud services. Content moderation and media conversion were efficiently automated using AWS AI tools.",
};

export default function AwsDeploymentSecurityPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="AWS Deployment & Security"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/awsDeployment2.png"
        alt="AWS Architecture Diagram"
      />
      <CaseStudyProblemStatement
        statement="The challenge involves deploying and managing scalable, secure, and efficient cloud-based applications across various platforms. The solution needs to ensure seamless front-end/back-end integration, handle content moderation and media conversion, manage sensitive environment variables securely, and automate CI/CD pipelines. Additionally, system monitoring, database backups, and security are critical for smooth operation, while maintaining cost-effectiveness and scalability."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/aws_mon2.png"
        illustrationAlt="Solution Illustration"
        description=""
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
    </CaseStudyLayout>
  );
}
