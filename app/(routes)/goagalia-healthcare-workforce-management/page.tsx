"use client";
import React from "react";
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
  schedule: "Dec 2024 — June 2025",
  size: "$200,000 to $499,999",
};

// AWS Partner Program Requirements - Customer Challenge
const customerChallenge = `GoAgalia&apos;s legacy infrastructure could not scale to meet growing demand from expanding hospital networks, causing performance degradation during peak scheduling periods that affected thousands of healthcare workers. As a healthcare application handling sensitive employee data, GoAgalia needed HIPAA compliance but lacked necessary security controls, encryption standards, and audit capabilities. Manual deployment processes led to inconsistent environments, prolonged deployment times, and increased risk of human error, while over-provisioning infrastructure resulted in unnecessary costs. Without addressing these challenges, GoAgalia risked losing customer trust, facing compliance violations with severe financial penalties, and being unable to scale their business.`;

// AWS Partner Program Requirements - Partner Solution
const solutionComponents = [
  {
    title: "Amazon EKS (Elastic Kubernetes Service)",
    description:
      "Migrated backend services and microservices to a private EKS cluster with managed node groups that automatically scale based on workload demands. Deployed Redis and RabbitMQ as containerized pods within the EKS cluster for caching and message queuing.",
  },
  {
    title: "Amazon VPC with Multi-Tier Architecture",
    description:
      "Implemented a multi-tier VPC architecture with public and private subnets across multiple availability zones. The private EKS cluster was deployed in private subnets with no direct internet access, while an AWS Application Load Balancer (ALB) was configured in the public subnet to route external traffic.",
  },
  {
    title: "Amazon RDS with High Availability",
    description:
      "Deployed Amazon RDS in private subnets with automated backups, multi-AZ deployment for high availability, and encryption at rest using AWS KMS. Database credentials were managed through AWS Secrets Manager with automatic rotation enabled. Implemented read replicas to offload reporting queries.",
  },
  {
    title: "AWS Amplify and Amazon CloudFront",
    description:
      "Deployed the frontend application using AWS Amplify with seamless CI/CD integration and automatic HTTPS configuration. Integrated Amazon CloudFront as the content delivery network to cache static assets globally, significantly reducing latency for end users.",
  },
  {
    title: "GitOps CI/CD Pipeline",
    description:
      "Implemented a GitOps-based CI/CD pipeline using GitHub Actions for continuous integration and ArgoCD for continuous deployment. Infrastructure was defined using Terraform and Kubernetes manifests stored in version control, enabling reproducible deployments and easy rollbacks.",
  },
  {
    title: "Comprehensive Monitoring and Security",
    description:
      "Implemented enterprise-grade monitoring using Datadog and Amazon CloudWatch. Enabled AWS CloudTrail for comprehensive audit logging, configured AWS Config for compliance monitoring, and deployed AWS WAF in front of the Application Load Balancer. Integrated CrowdStrike Falcon for advanced threat detection.",
  },
  {
    title: "AWS Backup and Disaster Recovery",
    description:
      "Implemented automated backup strategies using AWS Backup for RDS and EBS volumes, with cross-region replication for critical data. Created a documented disaster recovery plan with RTO and RPO targets, utilizing EKS cluster snapshots and Infrastructure as Code.",
  },
];

const techStack = [
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "Kubernetes", icon: "/Images/PNGSS/Kubernetes-Logo.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "ArgoCD", icon: "/Images/PNGSS/Argo-1-e1630327305635-1.png" },
  { name: "GitHub Actions", icon: "/Images/PNGSS/gitlab.png" },
];

const metrics = [
  {
    category: "Performance",
    description: "Average API response time reduced from 850ms to 320ms",
    bgColor: "bg-[#1a2e22]",
    width: "w-[75%]",
  },
  {
    category: "Scalability",
    description: "Handles 2.5x more concurrent users during peak periods",
    bgColor: "bg-[#1a3b2a]",
    width: "w-[70%]",
  },
  {
    category: "Deployment Time",
    description: "Deployment time reduced from 3-4 hours to under 40 minutes",
    bgColor: "bg-[#3a6a50]",
    width: "w-[80%]",
  },
  {
    category: "Cost Optimization",
    description: "Infrastructure costs reduced by approximately 35%",
    bgColor: "bg-[#4d7a65]",
    width: "w-[65%]",
  },
  {
    category: "Uptime",
    description: "System uptime improved to 99.7% with improved monitoring",
    bgColor: "bg-[#5a8a75]",
    width: "w-[85%]",
  },
  {
    category: "MTTR",
    description: "Mean time to recovery improved from 40+ minutes to 10-12 minutes",
    bgColor: "bg-[#6a9a85]",
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
          GoAgalia is a healthcare technology company that provides workforce
          management solutions for hospitals and healthcare facilities. Their
          platform streamlines scheduling, placement coordination, and payroll
          management for nurses, doctors, and medical staff across multiple
          healthcare organizations. Operating in the fast-paced healthcare
          industry, GoAgalia serves facilities that require 24/7 operational
          reliability and must comply with strict data privacy regulations
          including HIPAA.
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
            The AWS cloud migration and DevOps transformation delivered
            substantial, measurable improvements across all areas of GoAgalia&apos;s
            operations. Application response times improved significantly, with the
            average API response time dropping from 850ms to 320ms. The
            auto-scaling capabilities enabled the platform to handle 2.5x more
            concurrent users during peak scheduling periods without performance
            degradation. The system now automatically scales based on demand,
            ensuring optimal resource utilization.
          </p>
          <p>
            Deployment times were reduced from 3-4 hours of manual deployment to
            fully automated deployments completing in under 40 minutes. The DevOps
            team saved significant time previously spent on manual deployment and
            maintenance tasks, allowing them to focus on feature development and
            innovation. Overall infrastructure costs decreased by approximately 35%
            through right-sizing instances, implementing auto-scaling, and
            optimizing resource allocation.
          </p>
          <p>
            The platform achieved full HIPAA compliance with all required
            security controls in place. System uptime improved to 99.7% with
            enhanced monitoring and automated failover capabilities. Mean time to
            recovery (MTTR) improved from 40+ minutes to 10-12 minutes through
            automated monitoring and self-healing capabilities in Kubernetes.
            GoAgalia successfully onboarded multiple new hospital networks within
            six months of the migration, and customer satisfaction scores improved
            due to enhanced application performance and reliability.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

// AWS Partner Program Requirements - About the Partner Section
const AboutPartnerSection = () => (
  <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          About the Partner
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          CodeToKloud is an AWS Partner specializing in cloud infrastructure
          design, DevOps transformation, and containerized application
          deployment. We help healthcare and enterprise clients modernize their
          infrastructure, implement DevOps best practices, and achieve
          compliance with industry regulations. Our team of AWS-certified
          engineers has extensive experience with Kubernetes, CI/CD automation,
          and cloud-native architectures. We focus on delivering secure,
          scalable, and cost-effective cloud solutions that enable our clients
          to innovate faster and operate more efficiently. Our DevOps expertise
          spans infrastructure automation, container orchestration, monitoring
          and observability, and security best practices, helping organizations
          transform their software delivery processes and achieve measurable
          business outcomes.
        </p>
      </motion.div>
    </div>
  </section>
);

export default function GoAgaliaHealthcareWorkforceManagementPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="GoAgalia: Scalable AWS Cloud Infrastructure"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/strength_aws.png"
        alt="GoAgalia AWS Architecture Diagram"
      />
      <AboutCustomerSection />
      <CaseStudyProblemStatement
        statement={customerChallenge}
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/strength_aws2.png"
        illustrationAlt="GoAgalia Solution Architecture"
        description="This comprehensive AWS cloud-native solution leverages DevOps best practices and modern containerization technologies to deliver a secure, scalable, and cost-effective infrastructure that meets HIPAA compliance requirements and enables GoAgalia to serve their growing healthcare customer base."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <ResultsBenefitsSection />
      <AboutPartnerSection />
    </CaseStudyLayout>
  );
}

