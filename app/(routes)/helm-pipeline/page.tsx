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
  "Web Development",
];
const projectDetails = {
  client: "Orbital Installs",
  schedule: "Oct 2024 — Mar 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Implemented an automated CI/CD pipeline",
    description: "using ArgoCD, Helm, and EKS",
  },
  {
    title: "Automated code",
    description:
      "merging, dependency installation, testing, and Docker image building",
  },
  {
    title: "Application deployed",
    description:
      "to development, staging, and production environments via EKS and ArgoCD",
  },
  {
    title: "Helm charts",
    description: "manage configurations and versioning",
  },
];
const techStack = [
  {
    name: "Docker",
    icon: "/Images/PNGSS/bg_dock.png",
  },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "Kubernetes", icon: "/Images/PNGSS/Kubernetes-Logo.png" },
  { name: "Google Cloud", icon: "/Images/PNGSS/gcloud.png" },
  { name: "ArgoCD", icon: "/Images/PNGSS/Argo-1-e1630327305635-1.png" },
];
const metrics = [
  {
    category: "Release Cycle",
    description: "50% faster release cycles",
    bgColor: "bg-[#1a2e22]",
    width: "w-[75%]",
  },
  {
    category: "Manual Effort",
    description: "80% reduction in manual effort",
    bgColor: "bg-[#1a3b2a]",
    width: "w-[80%]",
  },
  {
    category: "Deployment",
    description: "95% deployment success rate",
    bgColor: "bg-[#3a6a50]",
    width: "w-[95%]",
  },
  {
    category: "Issue Resolution",
    description: "Faster issue resolution with real-time alerts",
    bgColor: "bg-[#4d7a65]",
    width: "w-[90%]",
  },
];

const lesson = {
  firstLesson:
    "Automation, environment separation, and approval gates improved deployment confidence and reduced errors. EKS, ArgoCD, and Helm simplified Kubernetes management, but required version control and team training. Investing in automation early ensures long-term efficiency and faster delivery.",
  secondLesson:
    "A TCO analysis showed that automation reduced manual work, deployment failures, and operational costs. EKS minimized infrastructure management, while tools like ArgoCD and Helm cut overhead. The solution proved cost-effective, scalable, and efficient.",
};

export default function HelmPipelinePage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="CI/CD Pipeline with ArgoCD Helm on EKS"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/ci_cd_eks2.png"
        alt="CI/CD EKS Architecture Diagram"
      />
      <CaseStudyProblemStatement
        statement="Manual deployment processes cause delays, errors, and inconsistent environments, hindering quick, high-quality application delivery. An automated CI/CD pipeline is needed to streamline development, testing, deployment, and ensure security and operational readiness."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/ci_cd_eks.png"
        illustrationAlt="Solution Illustration"
        description="This setup ensures real-time notifications which keep teams informed, ensuring consistent and reliable delivery."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons
        lessons={lesson.firstLesson}
        secondLesson={lesson.secondLesson}
      />
    </CaseStudyLayout>
  );
}
