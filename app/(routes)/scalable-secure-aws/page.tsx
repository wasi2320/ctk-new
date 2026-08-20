import React from "react";
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

export const metadata = pageMetadata("/scalable-secure-aws");
const services = [
  "Cloud Consulting & SI",
  "Architectural Design",
  "Account-Based Marketing",
];
const projectDetails = {
  client: "Spiderdoor",
  schedule: "Oct 2024 to Dec 2024",
  size: "$10,000 to $49,999",
};
const solutionComponents = [
  {
    title: "ALB",
    description: "for traffic distribution",
  },
  {
    title: "Amazon RDS",
    description: "for secure database management",
  },
  {
    title: "Prometheus & Grafana",
    description: "for monitoring",
  },
  {
    title: "S3",
    description: "for log and backup storage",
  },
  {
    title: "VPC, VPN, WAF, CloudFront",
    description: "for security",
  },
];
const techStack = [
  {
    name: "Docker",
    icon: "/Images/PNGSS/bg_dock.png",
  },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "Google Cloud", icon: "/Images/PNGSS/gcloud.png" },
  { name: "Prometheus", icon: "/Images/PNGSS/prometheus.png" },
];
const metrics = [
  {
    category: "Release Cycles",
    description: "50% faster release cycles due to CI/CD automation",
    bgColor: "bg-[#16273c]",
    width: "w-[75%]",
  },
  {
    category: "Issue Resolution",
    description: "40% faster issue resolution with monitoring tools",
    bgColor: "bg-[#16324f]",
    width: "w-full",
  },
  {
    category: "Security",
    description: "Improved security and high availability",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[65%]",
  },
  {
    category: "Cost Efficiency",
    description:
      "Cost-efficiency and scalability aligned with future business growth",
    bgColor: "bg-[#4a86bf]",
    width: "w-[90%]",
  },
];

const lesson = {
  firstLesson:
    "Key takeaways included the importance of scalability with auto-scaling and Kubernetes, the value of automation in CI/CD workflows, the need for proactive monitoring, and the benefits of cloud-native security. Cost optimization required ongoing resource management to prevent overprovisioning.",
  secondLesson:
    "A comparison between VPS and AWS revealed significant savings and operational benefits. AWS reduced manual processes, improved security, and provided scalable infrastructure. Pay-as-you-go pricing minimized upfront costs, while automation reduced labor expenses. AWS's built-in services outperformed the client's existing VPS setup in cost, performance, and security.",
};

export default function ScalableSecureAwsPage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Scalable, Secure & Cost-Efficient AWS Setup",
          description:
            "How CodetoKloud migrated a SaaS application to modern AWS infrastructure with container orchestration, CI/CD, and Prometheus/Grafana monitoring, improving cost, security, and performance.",
          path: "/scalable-secure-aws",
          image: "/services/aws-solution-illustration.png",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="Scalable and Secure AWS Setup"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/strength_aws.png"
        alt="AWS Architecture Diagram"
      />
      <CaseStudyProblemStatement
        statement="A client sought to migrate their SaaS application from a VPS to AWS to improve scalability, security, and deployment efficiency. The existing setup lacked automation, robust CI/CD workflows, and strong security, making development slow and error-prone. The client needed a modern, well-architected cloud infrastructure with CI/CD, container orchestration, monitoring, and security best practices."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/aws-solution-illustration.png"
        illustrationAlt="Solution Illustration"
        description="The new AWS infrastructure integrates CI/CD using Jenkins, Docker, and ArgoCD, with Kubernetes handling container orchestration. A private code repository and Docker registry enhance code and image security. This setup enables efficient, automated deployments and improves reliability through continuous monitoring and infrastructure scalability."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons
        lessons={lesson.firstLesson}
        secondLesson={lesson.secondLesson}
      />
    </CaseStudyLayout>
    </>
  );
}
