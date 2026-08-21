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

export const metadata = pageMetadata("/helm-pipeline");
const services = [
  "Amazon EKS",
  "GitOps and CI/CD",
  "Helm Release Management",
];
const projectDetails = {
  client: "Orbital Installs",
  schedule: "Oct 2024 to Mar 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Automated build and validation",
    description:
      "GitLab CI merged code, installed dependencies, ran tests, built Docker images, and published versioned artifacts to Amazon ECR.",
  },
  {
    title: "GitOps deployment control",
    description:
      "Argo CD reconciled the desired state stored in Git, which made application changes reviewable and gave the team a consistent rollback path.",
  },
  {
    title: "Separated environments on EKS",
    description:
      "Development, staging, and production ran as separate Amazon EKS environments with controlled promotion between each release stage.",
  },
  {
    title: "Versioned Helm configuration",
    description:
      "Helm charts captured application configuration and release versions so the same deployment pattern could be promoted without manual rework.",
  },
];
const techStack = [
  {
    name: "Docker",
    icon: "/Images/PNGSS/bg_dock.png",
  },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "Kubernetes", icon: "/Images/PNGSS/Kubernetes-Logo.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "ArgoCD", icon: "/Images/PNGSS/Argo-1-e1630327305635-1.png" },
];
const metrics = [
  {
    category: "Release Cycle",
    description: "50% faster release cycles",
    bgColor: "bg-[#16273c]",
    width: "w-[85%]",
  },
  {
    category: "Manual Effort",
    description: "80% reduction in manual effort",
    bgColor: "bg-[#16324f]",
    width: "w-[90%]",
  },
  {
    category: "Deployment",
    description: "95% deployment success rate",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[80%]",
  },
  {
    category: "Issue Resolution",
    description: "Faster issue resolution with real-time alerts",
    bgColor: "bg-[#4a86bf]",
    width: "w-[95%]",
  },
];

const lesson = {
  firstLesson:
    "For this engagement, release automation worked best when environment separation, approval gates, and rollback procedures were designed together. Argo CD and Helm reduced repetitive work, while version control kept deployment changes reviewable.",
  secondLesson:
    "The project analysis showed that fewer manual deployment steps and fewer failed releases reduced delivery overhead. Amazon EKS shifted cluster operations to a managed control plane, while Argo CD and Helm standardized day-to-day releases.",
};

export default function HelmPipelinePage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "CI/CD Pipeline with ArgoCD & Helm on Amazon EKS",
          description:
            "How CodetoKloud implemented an automated CI/CD pipeline using ArgoCD, Helm, and Amazon EKS, reaching a 95% deployment success rate and 80% less manual effort.",
          path: "/helm-pipeline",
          image: "/services/architecture/gitops-eks-pipeline.svg",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="How Orbital Installs Automated Releases on Amazon EKS"
        subtitle="Argo CD and Helm replaced manual, inconsistent releases across development, staging, and production."
        services={services}
        arcSrc="/services/architecture/gitops-eks-pipeline.svg"
        alt="GitOps CI/CD pipeline from GitLab CI and Amazon ECR through Argo CD and Helm to Amazon EKS"
      />
      <CaseStudyProblemStatement
        statement="Orbital Installs relied on manual deployment steps that delayed releases and produced inconsistent environments. The team needed one controlled path for building, testing, promoting, and rolling back application changes across development, staging, and production on Amazon EKS."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="GitLab CI handles continuous integration, while Argo CD and Helm control deployment from a versioned source of truth. Real-time notifications keep the delivery team informed when a release needs attention."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons
        lessons={lesson.firstLesson}
        secondLesson={lesson.secondLesson}
      />
      <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Planning an Amazon EKS delivery workflow?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Bring us your current pipeline and release bottlenecks. We will identify
          the highest-impact opportunities for automation, promotion, and rollback.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
        >
          Review my EKS pipeline
        </Link>
      </section>
    </CaseStudyLayout>
    </>
  );
}
