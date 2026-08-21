"use client";
import React from "react";
import Link from "next/link";
import CaseStudyLayout from "@/app/components/sections/caseStudies/CaseStudyLayout";
import CaseStudyHeader from "@/app/components/sections/caseStudies/CaseStudyHeader";
import CaseStudyProblemStatement from "@/app/components/sections/caseStudies/CaseStudyProblemStatement";
import CaseStudySolution from "@/app/components/sections/caseStudies/CaseStudySolution";
import CaseStudyTechStack from "@/app/components/sections/caseStudies/CaseStudyTechStack";
import MetricsDisplay from "@/app/components/metrics";
import { motion } from "framer-motion";

const services = [
  "Cloud Consulting & SI",
  "DevOps Managed Services",
  "Healthcare IT Solutions",
];

const projectDetails = {
  client: "GoAgalia",
  schedule: "Dec 2024 to June 2025",
  size: "$200,000 to $499,999",
};

// AWS Partner Program Requirements - Customer Challenge
const customerChallenge = `GoAgalia's infrastructure could not scale cleanly during peak scheduling periods as the company added hospital networks. The healthcare workforce platform handled sensitive employee data, but its existing environment lacked the security controls, encryption, and audit evidence needed to support HIPAA workloads. Manual deployments created inconsistent environments and took several hours, while over-provisioned resources increased AWS cost. GoAgalia needed to improve performance, delivery, security, and cost without disrupting a platform used by healthcare operations.`;

// AWS Partner Program Requirements - Partner Solution
const solutionComponents = [
  {
    title: "Amazon EKS (Elastic Kubernetes Service)",
    description:
      "Backend services and supporting workloads moved to a private Amazon EKS cluster with managed node groups that scale with demand. Redis and RabbitMQ ran as containerized workloads for caching and message queuing.",
  },
  {
    title: "Amazon VPC with Multi-Tier Architecture",
    description:
      "A multi-tier VPC used public and private subnets across multiple Availability Zones. EKS workloads had no direct inbound internet access, while an Application Load Balancer routed approved external traffic.",
  },
  {
    title: "Amazon RDS with High Availability",
    description:
      "Amazon RDS ran in private subnets with Multi-AZ availability, automated backups, and encryption through AWS KMS. AWS Secrets Manager handled database credentials and rotation, while read replicas moved reporting queries away from the primary database.",
  },
  {
    title: "AWS Amplify and Amazon CloudFront",
    description:
      "AWS Amplify deployed the frontend with automated HTTPS and CI/CD integration. Amazon CloudFront cached static assets closer to users and reduced repeated work at the application origin.",
  },
  {
    title: "GitOps CI/CD Pipeline",
    description:
      "GitHub Actions handled continuous integration and Argo CD reconciled deployments from version control. Terraform and Kubernetes manifests made infrastructure and application changes reproducible and reviewable.",
  },
  {
    title: "Comprehensive Monitoring and Security",
    description:
      "Datadog and Amazon CloudWatch monitored services and infrastructure. AWS CloudTrail recorded account activity, AWS Config tracked configuration, AWS WAF protected the load balancer, and CrowdStrike Falcon added endpoint threat detection.",
  },
  {
    title: "AWS Backup and Disaster Recovery",
    description:
      "AWS Backup protected RDS and EBS data, with cross-region copies for critical recovery data. The team documented recovery procedures and used infrastructure as code to make the platform reproducible.",
  },
];

const techStack = [
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "Kubernetes", icon: "/Images/PNGSS/Kubernetes-Logo.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "ArgoCD", icon: "/Images/PNGSS/Argo-1-e1630327305635-1.png" },
  { name: "GitHub Actions", icon: "/Images/PNGSS/GitHub-Logo.png" },
];

const metrics = [
  {
    category: "Performance",
    description: "Average API response time reduced from 850ms to 320ms",
    bgColor: "bg-[#16273c]",
    width: "w-[75%]",
  },
  {
    category: "Scalability",
    description: "Handles 2.5x more concurrent users during peak periods",
    bgColor: "bg-[#16324f]",
    width: "w-[70%]",
  },
  {
    category: "Deployment Time",
    description: "Deployment time reduced from 3-4 hours to under 40 minutes",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[80%]",
  },
  {
    category: "Cost Optimization",
    description: "Infrastructure costs reduced by approximately 35%",
    bgColor: "bg-[#4a86bf]",
    width: "w-[65%]",
  },
  {
    category: "Uptime",
    description: "System uptime improved to 99.7% with improved monitoring",
    bgColor: "bg-[#5a95cf]",
    width: "w-[85%]",
  },
  {
    category: "MTTR",
    description: "Mean time to recovery improved from 40+ minutes to 10-12 minutes",
    bgColor: "bg-[#6aa5db]",
    width: "w-[75%]",
  },
];

// AWS Partner Program Requirements - About the Customer Section
const AboutCustomerSection = () => (
  <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          About the Customer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          GoAgalia provides workforce management software for hospitals and
          healthcare facilities. Its platform supports scheduling, placement
          coordination, and payroll workflows for medical staff. Those workflows
          require reliable access and careful handling of sensitive workforce data.
        </p>
      </motion.div>
    </div>
  </section>
);

// AWS Partner Program Requirements - Results and Benefits Section
const ResultsBenefitsSection = () => (
  <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Results and Benefits
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            For this engagement, average API response time decreased from 850ms to
            320ms. The platform handled 2.5x more concurrent users during peak
            scheduling periods, with EKS capacity adjusting to workload demand.
          </p>
          <p>
            Deployment time decreased from 3-4 hours of manual work to under 40
            minutes through the automated delivery workflow. Infrastructure cost
            decreased by approximately 35% after right sizing and auto scaling were
            applied to the measured workload.
          </p>
          <p>
            The platform implemented the technical safeguards described above to
            support HIPAA workloads. Measured uptime improved to 99.7%, and mean
            time to recovery improved from more than 40 minutes to 10-12 minutes.
            The stronger capacity and recovery posture supported GoAgalia as it
            onboarded additional hospital networks after the migration.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const NextStepSection = () => (
  <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
    <div className="mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold md:text-4xl">
        Modernizing a healthcare workload on AWS?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
        We can review your runtime, data protection, delivery, recovery, and cost
        priorities and identify the first three actions for the environment.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
      >
        Review my healthcare platform
      </Link>
    </div>
  </section>
);

export default function CaseStudyContent() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="How GoAgalia Modernized a Healthcare Platform on AWS"
        subtitle="Amazon EKS, GitOps, private data services, and observability improved performance, recovery, and infrastructure cost."
        services={services}
        arcSrc="/services/architecture/secure-aws-eks-platform.svg"
        alt="GoAgalia healthcare platform architecture on Amazon EKS with GitOps delivery, private workloads, encrypted data, and observability"
      />
      <AboutCustomerSection />
      <CaseStudyProblemStatement
        statement={customerChallenge}
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The solution connected private application runtime, managed data, automated delivery, technical safeguards, and recovery procedures in one AWS operating model for GoAgalia."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <ResultsBenefitsSection />
      <NextStepSection />
    </CaseStudyLayout>
  );
}
