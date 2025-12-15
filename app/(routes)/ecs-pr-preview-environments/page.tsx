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
  "Web Development",
];

const projectDetails = {
  client: "Orbital Installations LLC",
  schedule: "Jan 2025 — Apr 2025",
  size: "$200,000 to $499,999",
};

// AWS Partner Program Requirements - Customer Challenge
const customerChallenge = `The customer faced significant challenges with their development and deployment workflow that hindered their ability to innovate and scale. The development team lacked isolated preview environments for testing pull requests, creating bottlenecks when multiple features were tested simultaneously. The deployment process was semi-manual, requiring significant DevOps involvement with deployments taking 2-3 hours. The lack of automation increased the risk of human error and configuration drift between environments, leading to "works on my machine" scenarios. Infrastructure was managed through AWS Console operations, CloudFormation templates, and manual scripts, making it difficult to track changes or reproduce environments.`;

// AWS Partner Program Requirements - Partner Solution
const solutionComponents = [
  {
    title: "Multi-Cluster ECS Architecture",
    description:
      "Architected separate Amazon ECS clusters for development and production environments, each deployed in private subnets across multiple availability zones. Utilized AWS Fargate for serverless container management with automatic scaling based on demand.",
  },
  {
    title: "Infrastructure as Code with Terraform",
    description:
      "Implemented 100% of the infrastructure using Terraform, completely eliminating manual AWS Console operations. All AWS infrastructure including VPCs, subnets, security groups, ECS clusters, and ALBs are defined in modular, reusable Terraform code stored in Git.",
  },
  {
    title: "GitHub Actions CI/CD with PR Preview Environments",
    description:
      "Implemented a sophisticated CI/CD workflow that automatically creates ephemeral preview environments for every pull request. When a PR is opened, GitHub Actions builds a Docker image, pushes it to ECR, creates an isolated ECS service, and provides a unique URL for testing changes in isolation.",
  },
  {
    title: "Automated Preview Environment Management",
    description:
      "Preview environments persist throughout the PR lifecycle and automatically update when new commits are pushed. When PRs are closed or merged, automated cleanup workflows remove ECS services and associated resources, ensuring no resource waste or cost accumulation.",
  },
  {
    title: "Production Deployment Automation",
    description:
      "When changes are merged to main branch, GitHub Actions automatically builds production Docker images, updates ECS task definitions, and performs rolling updates with zero downtime. The pipeline implements blue-green deployment strategies, health checks, and automatic rollback capabilities.",
  },
  {
    title: "Comprehensive Monitoring with Prometheus and Grafana",
    description:
      "Deployed Prometheus and Grafana on dedicated ECS services to provide enterprise-grade monitoring. Prometheus scrapes metrics from all ECS tasks, while Grafana dashboards provide real-time visualization of system health, application performance, and business KPIs.",
  },
  {
    title: "Secure Network Architecture",
    description:
      "All ECS tasks run in private subnets with no direct internet access, communicating through VPC endpoints for enhanced security. Application Load Balancers in public subnets provide entry points with AWS WAF protection. All traffic is encrypted in transit using TLS certificates from AWS Certificate Manager.",
  },
];

const techStack = [
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "Terraform", icon: "/Images/PNGSS/gcloud.png" },
  { name: "GitHub Actions", icon: "/Images/PNGSS/gitlab.png" },
];

const metrics = [
  {
    category: "PR Review Time",
    description: "Decreased from 2-3 days to approximately 8-10 hours",
    bgColor: "bg-[#1a2e22]",
    width: "w-[70%]",
  },
  {
    category: "Deployment Frequency",
    description: "Increased from 2-3 to 8-10 deployments per week",
    bgColor: "bg-[#1a3b2a]",
    width: "w-[75%]",
  },
  {
    category: "Deployment Time",
    description: "Reduced from 3-4 hours to under 40 minutes",
    bgColor: "bg-[#3a6a50]",
    width: "w-[65%]",
  },
  {
    category: "DevOps Effort",
    description: "Reduced from 15-20 hours to approximately 3-4 hours per week",
    bgColor: "bg-[#4d7a65]",
    width: "w-[80%]",
  },
  {
    category: "Production Incidents",
    description: "Decreased from 8-10 to 2-3 incidents per quarter",
    bgColor: "bg-[#5a8a75]",
    width: "w-[70%]",
  },
  {
    category: "MTTR",
    description: "Improved from 40+ minutes to 12-15 minutes",
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
          Orbital Installations LLC is a rapidly growing SaaS company providing
          construction and installation management solutions to mid-market and
          enterprise clients across North America. Their platform serves thousands
          of daily active users who depend on consistent availability and rapid
          feature delivery. As a technology-forward organization, the company
          operates on a rapid release cycle, deploying new features and updates
          multiple times per week to stay competitive in their market.
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
            The transformation to automated ECS deployment with PR preview
            environments delivered substantial improvements across development
            velocity, operational efficiency, and system reliability. Pull request
            review time decreased significantly, from an average of 2-3 days to
            approximately 8-10 hours, as QA teams could immediately test changes in
            isolated preview environments. The development team increased their
            deployment frequency from 2-3 deployments per week to 8-10 deployments
            per week. Time from code commit to production deployment reduced from
            3-4 hours to under 40 minutes for the entire automated pipeline.
          </p>
          <p>
            Infrastructure management time decreased through Infrastructure as Code, with the
            ability to provision complete environments in under 30 minutes versus
            several days with manual processes. Automated cleanup of PR preview
            environments saved costs by eliminating orphaned resources.
          </p>
          <p>
            Production incidents related to deployment issues decreased from 8-10
            incidents per quarter to 2-3 incidents. Mean time to recovery (MTTR) for
            incidents improved from 40+ minutes to 12-15 minutes through automated
            rollback capabilities. Bug detection shifted left in the development
            cycle, with a significant portion of issues now caught in PR preview
            environments before reaching production. Zero-downtime deployments
            ensured high uptime even during frequent release cycles. Developer
            productivity increased as measured by features delivered per sprint,
            enabled by rapid feedback loops and reduced context switching.
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
          modernization, DevOps transformation, and automated deployment solutions.
          We help organizations build scalable, secure, and efficient cloud
          infrastructure using Infrastructure as Code and modern CI/CD practices. Our
          team of AWS-certified engineers has deep expertise in container
          orchestration, serverless architectures, and GitOps methodologies. We focus
          on eliminating manual processes and implementing automation that
          accelerates software delivery while improving reliability and security. Our
          approach emphasizes Infrastructure as Code, comprehensive monitoring, and
          developer-friendly workflows that enable teams to deploy with confidence.
        </p>
      </motion.div>
    </div>
  </section>
);

export default function EcsPrPreviewEnvironmentsPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="Automated ECS Deployment with PR Preview Environments"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/automated_aws.png"
        alt="ECS PR Preview Architecture Diagram"
      />
      <AboutCustomerSection />
      <CaseStudyProblemStatement
        statement={customerChallenge}
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/automated_aws2.png"
        illustrationAlt="ECS PR Preview Solution Architecture"
        description="This comprehensive AWS cloud-native solution leverages Infrastructure as Code and modern CI/CD practices to deliver automated deployment workflows with PR preview environments, enabling rapid feature delivery while maintaining high reliability and security standards."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <ResultsBenefitsSection />
      <AboutPartnerSection />
    </CaseStudyLayout>
  );
}

