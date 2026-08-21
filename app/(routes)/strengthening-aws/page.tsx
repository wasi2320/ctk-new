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

export const metadata = pageMetadata("/strengthening-aws");
const services = [
  "AWS Security Hardening",
  "DevSecOps",
  "Threat Detection and Monitoring",
];
const projectDetails = {
  client: "AlphaBravo Development",
  schedule: "Nov 2024 to Jan 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Private network boundaries",
    description:
      "Resources were isolated inside a private VPC, with AWS VPN providing a controlled path for developer access.",
  },
  {
    title: "Least privilege access",
    description:
      "IAM policies narrowed permissions by role and introduced managed key rotation to reduce long-lived credential exposure.",
  },
  {
    title: "Security checks in CI/CD",
    description:
      "SonarQube and Trivy added source and container vulnerability checks before deployment artifacts reached the AWS environment.",
  },
  {
    title: "Continuous threat detection",
    description:
      "Amazon GuardDuty monitored AWS activity for suspicious behavior, while edge protection and alerts supported incident response.",
  },
  {
    title: "Encrypted data and managed secrets",
    description:
      "Encryption was applied in transit and at rest, and AWS Secrets Manager centralized sensitive application configuration.",
  },
  {
    title: "Security telemetry",
    description:
      "Centralized logs, metrics, and alerts gave the team a clearer path from detection to investigation and response.",
  },
];
const techStack = [
  {
    name: "AWS",
    icon: "/Images/PNGSS/aws.png",
  },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "Prometheus", icon: "/Images/PNGSS/prometheus.png" },
];
const metrics = [
  {
    category: "Protection",
    description: "Enhanced protection of sensitive data",
    bgColor: "bg-[#16273c]",
    width: "w-[80%]",
  },
  {
    category: "Control",
    description: "Tighter control over access and faster threat detection",
    bgColor: "bg-[#16324f]",
    width: "w-[90%]",
  },
  {
    category: "Access",
    description: "Least privilege access and managed key rotation implemented",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[70%]",
  },
  {
    category: "Vulnerability Detection",
    description: "Improved vulnerability detection with automated tools",
    bgColor: "bg-[#4a86bf]",
    width: "w-[85%]",
  },
  {
    category: "Data Protection",
    description: "Encryption controls applied in transit and at rest",
    bgColor: "bg-[#5cae8b]",
    width: "w-full",
  },
];

const lesson = {
  firstLesson:
    "The breach response showed that point controls were not enough. Network boundaries, identity, pipeline checks, secrets, encryption, and monitoring had to operate together. Moving vulnerability checks earlier in delivery also gave developers a chance to correct issues before release.",
};

export default function StrengtheningAwsSecurityPage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Strengthening AWS Security with DevSecOps",
          description:
            "How CodetoKloud hardened AWS security after a breach using private VPCs, least-privilege IAM, vulnerability scanning (SonarQube, Trivy), and AWS GuardDuty threat detection.",
          path: "/strengthening-aws",
          image: "/services/architecture/aws-devsecops-security.svg",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="AWS Security Hardening After a Data Breach"
        subtitle="AlphaBravo Development added layered network, identity, pipeline, data, and detection controls across its AWS environment."
        services={services}
        arcSrc="/services/architecture/aws-devsecops-security.svg"
        alt="AWS DevSecOps security architecture with GitLab scanning, VPN access, least privilege IAM, managed secrets, and continuous threat detection"
      />
      <CaseStudyProblemStatement
        statement="AlphaBravo Development experienced an AWS data breach that exposed sensitive information. The incident revealed gaps across access management, encryption, vulnerability scanning, secrets, and threat detection. The team needed a layered remediation plan that could be operated continuously after the immediate response ended."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The remediation connected preventive controls in the delivery pipeline with detective controls in the running AWS environment. This gave the team clearer ownership from code review through incident response."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
      <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Need to prioritize AWS security remediation?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          We can review identity, network exposure, pipeline checks, encryption,
          secrets, and detection coverage and turn the findings into an ordered plan.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
        >
          Review my AWS security controls
        </Link>
      </section>
    </CaseStudyLayout>
    </>
  );
}
