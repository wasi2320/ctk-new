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
  client: "AlphaBravo Development",
  schedule: "Nov 2024 — Jan 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Private VPC",
    description: "for resource isolation.",
  },
  {
    title: "AWS VPN",
    description: "Secured developer access.",
  },
  {
    title: "IAM policies",
    description: "Enforced least privilege with automated key rotation.",
  },
  {
    title: "Secured CI/CD pipeline",
    description: "with SonarQube and Trivy for vulnerability scanning.",
  },
  {
    title: "AWS GuardDuty",
    description: "Continuous threat detection and DDoS protection.",
  },
  {
    title: "Applied data encryption",
    description: "for both in-transit and at-rest data.",
  },
  {
    title: "Managed secrets",
    description: "with AWS Secrets Manager.",
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
    category: "Protection",
    description: "Enhanced protection of sensitive data",
    bgColor: "bg-[#1a2e22]",
    width: "w-[80%]",
  },
  {
    category: "Control",
    description: "Tighter control over access and faster threat detection",
    bgColor: "bg-[#1a3b2a]",
    width: "w-[90%]",
  },
  {
    category: "Access",
    description: "Reduced unauthorized access incidents",
    bgColor: "bg-[#3a6a50]",
    width: "w-[70%]",
  },
  {
    category: "Vulnerability Detection",
    description: "Improved vulnerability detection with automated tools",
    bgColor: "bg-[#4d7a65]",
    width: "w-[85%]",
  },
  {
    category: "Data Protection",
    description: "Full compliance with data protection standards",
    bgColor: "bg-[#5cae8b]",
    width: "w-full",
  },
];

const lesson = {
  firstLesson:
    "Proactive security is more cost-effective than reacting to breaches. Integrating security into the development process through DevSecOps helps identify vulnerabilities early. Regularly rotating IAM keys and continuous monitoring of threats are essential for maintaining a secure environment. Investing in security prevents potentially far higher costs from data breaches.",
};

export default function StrengtheningAwsSecurityPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="Strengthening AWS Security to Prevent Breaches"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/strength_aws.png"
        alt="AWS Security Architecture Diagram"
      />
      <CaseStudyProblemStatement
        statement="The company suffered a major data breach in its AWS cloud, exposing sensitive data. The breach highlighted gaps in access management, data encryption, vulnerability scanning, and compliance. To prevent future incidents, the company needed to implement DevSecOps practices, strengthen IAM policies, improve data encryption, and enhance threat detection and monitoring."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/strength_aws2.png"
        illustrationAlt="Solution Illustration"
        description="To improve AWS security, the solution focused on network security, access management, pipeline security, monitoring, and data encryption."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
    </CaseStudyLayout>
  );
}
