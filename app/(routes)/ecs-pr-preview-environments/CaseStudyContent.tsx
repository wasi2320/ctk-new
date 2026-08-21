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
  "Web Development",
];

const projectDetails = {
  client: "Orbital Installations LLC",
  schedule: "Jan 2025 to Apr 2025",
  size: "$200,000 to $499,999",
};

// AWS Partner Program Requirements - Customer Challenge
const customerChallenge = `Orbital Installations lacked isolated environments for testing pull requests, so concurrent feature reviews competed for shared environments. Deployments required significant DevOps involvement and took 2-3 hours, while infrastructure changes were spread across AWS Console operations, CloudFormation templates, and manual scripts. The team needed a reproducible AWS foundation, short-lived preview environments, automated production delivery, and reliable cleanup without leaving unused resources running.`;

// AWS Partner Program Requirements - Partner Solution
const solutionComponents = [
  {
    title: "Multi-Cluster ECS Architecture",
    description:
      "Separate Amazon ECS clusters isolated development and production. AWS Fargate tasks ran in private subnets across multiple Availability Zones and scaled with workload demand.",
  },
  {
    title: "Infrastructure as Code with Terraform",
    description:
      "VPCs, subnets, security groups, ECS clusters, and load balancers were moved into modular Terraform stored in Git. This replaced the mix of console operations and manual scripts with a reviewable source of truth.",
  },
  {
    title: "GitHub Actions CI/CD with PR Preview Environments",
    description:
      "When a pull request opens, GitHub Actions builds a Docker image, publishes it to Amazon ECR, creates an isolated ECS service, and returns a unique URL for focused review and QA.",
  },
  {
    title: "Automated Preview Environment Management",
    description:
      "Preview environments update when new commits are pushed. When a pull request closes or merges, the workflow removes its ECS service and associated resources to limit idle cost.",
  },
  {
    title: "Production Deployment Automation",
    description:
      "Merges to the main branch build a production image, update the ECS task definition, and start a controlled deployment with health checks and automated rollback.",
  },
  {
    title: "Comprehensive Monitoring with Prometheus and Grafana",
    description:
      "Prometheus collected metrics from ECS tasks and Grafana dashboards showed service health and application performance for preview and production environments.",
  },
  {
    title: "Secure Network Architecture",
    description:
      "ECS tasks ran in private subnets and used VPC endpoints for AWS service access. Public Application Load Balancers used AWS WAF and TLS certificates from AWS Certificate Manager for protected inbound traffic.",
  },
];

const techStack = [
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "Terraform", icon: "/Images/PNGSS/terraform-cloud.png" },
  { name: "GitHub Actions", icon: "/Images/PNGSS/GitHub-Logo.png" },
];

const metrics = [
  {
    category: "PR Review Time",
    description: "Decreased from 2-3 days to approximately 8-10 hours",
    bgColor: "bg-[#16273c]",
    width: "w-[70%]",
  },
  {
    category: "Deployment Frequency",
    description: "Increased from 2-3 to 8-10 deployments per week",
    bgColor: "bg-[#16324f]",
    width: "w-[75%]",
  },
  {
    category: "Deployment Time",
    description: "Reduced from 3-4 hours to under 40 minutes",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[65%]",
  },
  {
    category: "DevOps Effort",
    description: "Reduced from 15-20 hours to approximately 3-4 hours per week",
    bgColor: "bg-[#4a86bf]",
    width: "w-[80%]",
  },
  {
    category: "Production Incidents",
    description: "Decreased from 8-10 to 2-3 incidents per quarter",
    bgColor: "bg-[#5a95cf]",
    width: "w-[70%]",
  },
  {
    category: "MTTR",
    description: "Improved from 40+ minutes to 12-15 minutes",
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
          Orbital Installations LLC provides construction and installation
          management software to mid-market and enterprise customers. Its product
          team needed to review several changes in parallel and release frequently
          without making a shared test environment the delivery bottleneck.
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
            Pull request review time decreased from 2-3 days to approximately 8-10
            hours after QA could test each change at its own URL. Deployment
            frequency increased from 2-3 to 8-10 releases per week, and the full
            production pipeline reduced deployment time from 3-4 hours to under 40
            minutes.
          </p>
          <p>
            Terraform reduced environment provisioning from several days to under
            30 minutes for the measured workflow. Automated teardown also removed
            preview services after pull requests closed, limiting orphaned resource
            cost.
          </p>
          <p>
            Deployment-related production incidents decreased from 8-10 per quarter
            to 2-3. Mean time to recovery improved from more than 40 minutes to
            12-15 minutes through health checks and automated rollback. The preview
            workflow also moved more testing before merge, when changes were easier
            to isolate and correct.
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
        Need isolated preview environments on AWS?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
        We can review your current pull request workflow, ECS architecture, cleanup
        controls, and production release path and identify a practical pilot.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
      >
        Review my preview workflow
      </Link>
    </div>
  </section>
);

export default function CaseStudyContent() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="How Orbital Installations Automated ECS Preview Environments"
        subtitle="Each pull request received an isolated test URL, automated updates, and cleanup before production promotion."
        services={services}
        arcSrc="/services/architecture/ecs-pr-preview-workflow.svg"
        alt="GitHub pull request workflow that builds an image in Amazon ECR, creates an isolated Amazon ECS preview service and URL, promotes approved code to production, and removes preview resources when the pull request closes"
      />
      <AboutCustomerSection />
      <CaseStudyProblemStatement
        statement={customerChallenge}
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The workflow treated each pull request as a complete lifecycle: build, provision, test, update, approve, promote, and remove. Terraform kept the shared AWS foundation reproducible while automation controlled the short-lived services."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <ResultsBenefitsSection />
      <NextStepSection />
    </CaseStudyLayout>
  );
}
