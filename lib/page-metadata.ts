import type { Metadata } from "next";
import { SITE_URL } from "@/lib/structured-data";

/**
 * Per-page SEO/GEO metadata (unique title + description per route).
 *
 * Copy is derived from each page's existing hero content plus verbatim business
 * facts (US-registered IT consulting company, AWS Advanced Tier Partner,
 * Bolingbrook/Addison IL). Edit titles/descriptions here in one place.
 */

interface PageMeta {
  title: string;
  description: string;
}

/**
 * Canonical 1200x630 brand OpenGraph image (same asset used in the root layout).
 * Included on every page so per-page openGraph objects don't drop the preview
 * image, Next.js replaces (does not deep-merge) the parent openGraph.
 */
const OG_IMAGE =
  "https://opengraph.b-cdn.net/production/images/dd5c0828-1890-4d85-8051-5fac6878e7ce.png?token=8F3WOtV6fyrJjvXYeTMLY4rjWwtjMDd_JLbEhytH9CE&height=630&width=1200&expires=33293625957";

const PAGES: Record<string, PageMeta> = {
  // --- Core services ---
  "/cloud-service": {
    title: "AWS Cloud Infrastructure Services | CodetoKloud",
    description:
      "Secure, scalable AWS cloud infrastructure design, deployment, and management from CodetoKloud, an AWS Advanced Tier Partner serving US businesses.",
  },
  "/devops": {
    title: "AWS DevOps Consulting & CI/CD Automation | CodetoKloud",
    description:
      "AWS DevOps consulting from CodetoKloud, an AWS Advanced Tier Partner: CI/CD pipelines, Terraform infrastructure-as-code, GitOps, and Kubernetes automation to ship faster and improve reliability.",
  },
  "/kubernetes": {
    title: "Kubernetes and Amazon EKS Consulting Services | CodetoKloud",
    description:
      "Kubernetes and Amazon EKS consulting from CodetoKloud, an AWS Advanced Tier Partner: EKS cluster design, GitOps with ArgoCD, Helm, autoscaling, observability, cost optimization, and security hardening.",
  },
  "/ai": {
    title: "AWS AI Automation & GenAI Development | CodetoKloud",
    description:
      "Design and build secure AI workflows on AWS for document processing, retrieval, and task automation, tied to trusted data and measurable business outcomes.",
  },
  "/web-solutions": {
    title: "Custom Web Application Development on AWS | CodetoKloud",
    description:
      "Build responsive SaaS products, customer portals, dashboards, APIs, and web applications with secure AWS infrastructure, CI/CD, accessibility, and performance in scope.",
  },
  "/security-and-compliance": {
    title: "Cloud Security & Compliance: SOC 2, HIPAA, PCI DSS | CodetoKloud",
    description:
      "AWS security engineering and technical controls for SOC 2, HIPAA, and PCI DSS readiness, including IAM, encryption, logging, segmentation, and evidence workflows.",
  },
  "/hipaa-compliance": {
    title: "AWS & Kubernetes for HIPAA Workloads | CodetoKloud",
    description:
      "Implement and document encryption, access controls, audit logging, private networking, backup, and recovery safeguards for HIPAA-regulated workloads on AWS and Amazon EKS.",
  },
  "/soc-2-compliance": {
    title: "SOC 2 Compliance on AWS | CodetoKloud",
    description:
      "SOC 2 readiness on AWS from CodetoKloud: access controls, audit logging, change management, and monitoring aligned to the Trust Services Criteria for US businesses.",
  },
  "/pci-dss-compliance": {
    title: "PCI DSS Compliance on AWS | CodetoKloud",
    description:
      "PCI DSS-aligned AWS infrastructure from CodetoKloud: network segmentation, encryption, access control, logging, and vulnerability management for cardholder data environments.",
  },

  // --- Other services ---
  "/cloud-migration": {
    title: "AWS Cloud Migration Services | CodetoKloud",
    description:
      "Cloud migration services from CodetoKloud for smooth, low-downtime transitions to AWS that improve flexibility, security, and performance.",
  },
  "/consulting-and-advisory": {
    title: "Cloud Consulting & Advisory Services | CodetoKloud",
    description:
      "Strategic cloud consulting and advisory from CodetoKloud, an AWS Advanced Tier Partner guiding US businesses through cloud transformation.",
  },
  "/finops": {
    title: "FinOps & Cloud Cost Optimization | CodetoKloud",
    description:
      "FinOps services from CodetoKloud to optimize AWS cloud spend, improve cost efficiency, and enable sustainable, well-managed growth.",
  },
  "/mobile-app": {
    title: "Custom Mobile App Development with AWS | CodetoKloud",
    description:
      "Plan and build native or cross-platform mobile applications with product discovery, accessible UX, secure AWS backends, analytics, launch support, and CI/CD.",
  },
  "/ui-ux": {
    title: "UI/UX Design for SaaS, Web & Mobile | CodetoKloud",
    description:
      "Turn complex product workflows into clear user journeys, accessible interfaces, tested prototypes, and practical design systems for SaaS, web, and mobile products.",
  },

  // --- Industries ---
  "/e-commerce": {
    title: "AWS Cloud & DevOps for E-Commerce | CodetoKloud",
    description:
      "AWS architecture, DevOps, observability, security, and cost controls for e-commerce platforms that need reliable checkout, integrations, and peak traffic readiness.",
  },
  "/ed-tech": {
    title: "AWS Cloud & DevOps for EdTech Platforms | CodetoKloud",
    description:
      "Build and operate EdTech platforms on AWS with reliable releases, secure student data, observability, and infrastructure that can handle enrollment and assessment peaks.",
  },
  "/fin-tech": {
    title: "AWS Cloud, DevOps & Security for FinTech | CodetoKloud",
    description:
      "AWS infrastructure, DevOps automation, security controls, and technical readiness support for FinTech products handling sensitive data and regulated payment workflows.",
  },
  "/financial-services": {
    title: "AWS Engineering for Financial Services | CodetoKloud",
    description:
      "Modernize financial services platforms with AWS architecture, delivery automation, resilience, observability, and technical controls for regulated workloads.",
  },
  "/healthcare": {
    title: "AWS Cloud & DevOps for Healthcare | CodetoKloud",
    description:
      "Design and operate AWS infrastructure for healthcare and HealthTech with encryption, access controls, audit logging, resilience, and technical support for HIPAA programs.",
  },
  "/manufacturing": {
    title: "AWS Cloud & Data Platforms for Manufacturing | CodetoKloud",
    description:
      "Connect manufacturing applications, operational data, analytics, and delivery workflows through reliable AWS infrastructure with practical security and cost controls.",
  },
  "/non-profits": {
    title: "AWS Cloud & DevOps for Nonprofits | CodetoKloud",
    description:
      "Practical AWS architecture, migration, automation, security, and cost optimization for nonprofits that need reliable technology and accountable cloud spending.",
  },
  "/pe-vc": {
    title: "Cloud Engineering for PE & VC Portfolios | CodetoKloud",
    description:
      "Assess cloud risk, delivery maturity, security, reliability, and AWS cost across portfolio companies, then prioritize technical improvements that support value creation.",
  },
  "/powering-business": {
    title: "Cloud & DevOps for Professional Services | CodetoKloud",
    description:
      "Modernize client portals, delivery workflows, data platforms, and cloud operations with AWS architecture, DevOps automation, security, and managed support.",
  },
  "/real-estate": {
    title: "AWS Cloud & Software for Real Estate | CodetoKloud",
    description:
      "Build and modernize real estate platforms, tenant portals, integrations, and data workflows on secure AWS infrastructure with reliable delivery automation.",
  },
  "/saas-isv": {
    title: "AWS, DevOps & EKS for SaaS and ISVs | CodetoKloud",
    description:
      "Design, migrate, secure, and operate SaaS platforms on AWS with CI/CD, Amazon EKS, observability, FinOps, and infrastructure built for product teams.",
  },
  "/small-and-mid-size-business": {
    title: "AWS Cloud & DevOps for Growing Businesses | CodetoKloud",
    description:
      "Practical AWS architecture, migration, DevOps, security, and cost optimization for growing businesses that need reliable systems without unnecessary complexity.",
  },

  // --- Case studies ---
  "/case-studies": {
    title: "AWS, DevOps & Kubernetes Case Studies | CodetoKloud",
    description:
      "Production case studies covering AWS architecture, DevOps, Kubernetes, security, compliance controls, FinOps, and hybrid infrastructure, with project-specific outcomes.",
  },
  "/automated_deployment": {
    title: "Case Study: Automated Deployment of a Financial App | CodetoKloud",
    description:
      "How CodetoKloud built zero-downtime automated deployments for a financial application using GitLab CI/CD, Docker, and AWS ECS.",
  },
  "/aws-scalable-secure": {
    title: "Case Study: Scalable VoIP & AI Call Protection | CodetoKloud",
    description:
      "How CodetoKloud deployed a scalable, secure VoIP platform with AI call protection on Kubernetes.",
  },
  "/helm-pipeline": {
    title: "Case Study: CI/CD Pipeline with ArgoCD & Helm on EKS | CodetoKloud",
    description:
      "How CodetoKloud implemented an automated CI/CD pipeline using ArgoCD, Helm, and Amazon EKS.",
  },
  "/monolithic-structure": {
    title: "Case Study: AWS Monolithic App Architecture | CodetoKloud",
    description:
      "How CodetoKloud architected a scalable AWS deployment using Elastic Beanstalk, Auto Scaling Groups, and Route 53.",
  },
  "/scalable-secure-aws": {
    title: "Case Study: Scalable & Secure AWS Setup | CodetoKloud",
    description:
      "How CodetoKloud built a scalable, secure, cost-efficient AWS environment with Amazon RDS and Prometheus/Grafana monitoring.",
  },
  "/security-and-deployment": {
    title: "Case Study: AWS Deployment & Security | CodetoKloud",
    description:
      "How CodetoKloud automated secure application deployment on AWS ECS using CloudFormation and CodePipeline.",
  },
  "/strengthening-aws": {
    title: "Case Study: Strengthening AWS Security | CodetoKloud",
    description:
      "How CodetoKloud hardened AWS security to prevent breaches using private VPCs, AWS VPN, and layered access controls.",
  },
  "/ecs-pr-preview-environments": {
    title:
      "Case Study: Automated ECS Deployment with PR Preview Environments | CodetoKloud",
    description:
      "How CodetoKloud automated Amazon ECS deployments with ephemeral PR preview environments using Terraform and GitHub Actions, cutting deployment time to under 40 minutes.",
  },
  "/goagalia-healthcare-workforce-management": {
    title: "Case Study: Healthcare EKS Migration for GoAgalia | CodetoKloud",
    description:
      "How CodetoKloud migrated GoAgalia's healthcare workforce platform to Amazon EKS with technical safeguards for regulated workloads, reducing cost by about 35% and API latency from 850 ms to 320 ms.",
  },
  "/multi-brand-aws-fargate-modernization-case-study": {
    title: "Case Study: Multi-Brand AWS Fargate Modernization | CodetoKloud",
    description:
      "How CodetoKloud standardized four brands on Amazon ECS Fargate, Aurora MySQL, AWS Amplify, and repeatable delivery, then resolved a production database issue without downtime.",
  },
  "/eks-gitops-microservices-case-study": {
    title: "Case Study: EKS Microservices Delivery with GitOps | CodetoKloud",
    description:
      "How CodetoKloud containerized microservices and built an Amazon EKS delivery workflow with GitHub Actions, Helm, ArgoCD, ECR, and secrets kept out of Git.",
  },
  "/cis-kubernetes-benchmark-assessment-case-study": {
    title: "Case Study: CIS Kubernetes Benchmark Assessment | CodetoKloud",
    description:
      "How CodetoKloud assessed Amazon EKS and Linode LKE against the CIS Kubernetes Benchmark and mapped managed service control responsibilities.",
  },
  "/soc-2-healthcare-aws-case-study": {
    title: "Case Study: SOC 2 Multi-AZ Healthcare Platform on AWS | CodetoKloud",
    description:
      "How CodetoKloud rebuilt a healthcare platform on AWS with Multi-AZ failover, cross-AZ replication, audit logging, and encryption to pass a SOC 2 audit and reach 99.99% uptime.",
  },
  "/kubernetes-compliance-platform-case-study": {
    title:
      "Case Study: On-Prem Kubernetes for Compliance Targets | CodetoKloud",
    description:
      "How CodetoKloud built a four-node on-premise RKE2 platform with two control-plane nodes, two GPU workers, GitOps, self-hosted observability, and operational runbooks for multiple security framework targets.",
  },
  "/hipaa-aws-hardening-case-study": {
    title: "Case Study: HIPAA Hardening on AWS | CodetoKloud",
    description:
      "How CodetoKloud hardened a healthcare data company's patient-facing analytics portal for HIPAA on AWS, with private ECS Fargate networking, end-to-end TLS, and Aurora PostgreSQL.",
  },
  "/pci-dss-enterprise-case-study": {
    title: "Case Study: PCI DSS-Aligned Cloud Workstations | CodetoKloud",
    description:
      "How CodetoKloud designed PCI DSS-aligned Google Cloud Workstations with hardened Ubuntu images, private networking, Shielded VMs, CMEK, Terraform modules, and control documentation to support QSA review.",
  },
  "/hybrid-cloud-kubernetes-case-study": {
    title:
      "Case Study: Hybrid On-Prem + Cloud Kubernetes over WireGuard | CodetoKloud",
    description:
      "How CodetoKloud connected on-premise hardware and cloud burst capacity into one Kubernetes platform using encrypted inter-site connectivity over a WireGuard mesh.",
  },

  // --- Comparisons ---
  "/eks-vs-ecs-vs-fargate": {
    title: "EKS vs ECS vs Fargate: How to Choose | CodetoKloud",
    description:
      "Amazon EKS vs ECS vs Fargate compared: what each is, what it's best for, and how to choose the right way to run containers on AWS. From AWS Advanced Tier Partner CodetoKloud.",
  },
  "/eks-vs-gke-vs-aks": {
    title: "EKS vs GKE vs AKS: Managed Kubernetes Compared | CodetoKloud",
    description:
      "Amazon EKS vs Google GKE vs Azure AKS compared: strengths, best fit, and how to choose a managed Kubernetes service. From AWS Advanced Tier Partner CodetoKloud.",
  },
  "/terraform-vs-cloudformation": {
    title: "Terraform vs CloudFormation: Which to Use | CodetoKloud",
    description:
      "Terraform vs AWS CloudFormation compared: scope, strengths, and tradeoffs, and how to choose the right infrastructure-as-code tool. From CodetoKloud.",
  },

  // --- Local ---
  "/devops-consulting-naperville-il": {
    title: "DevOps & Kubernetes Consulting in Naperville, IL | CodetoKloud",
    description:
      "DevOps, Kubernetes, and AWS cloud consulting in Naperville, IL from CodetoKloud, a local AWS Advanced Tier Partner: CI/CD, Amazon EKS, cost optimization, and SOC 2/HIPAA/PCI DSS compliance.",
  },
  "/devops-kubernetes-consulting-chicago": {
    title: "DevOps & Kubernetes Consulting in Chicago | CodetoKloud",
    description:
      "DevOps, Kubernetes, and AWS cloud consulting for Chicago-area businesses from CodetoKloud, an AWS Advanced Tier Partner: CI/CD, Amazon EKS, cost optimization, and compliance.",
  },

  // --- Guides / definitional ---
  "/what-is-a-kubernetes-consultant": {
    title: "What Is a Kubernetes Consultant? | CodetoKloud",
    description:
      "What a Kubernetes consultant does, when to hire one, and what to look for. From CodetoKloud, an AWS Advanced Tier Partner specializing in Amazon EKS.",
  },
  "/what-does-a-devops-consultant-do": {
    title: "What Does a DevOps Consultant Do? | CodetoKloud",
    description:
      "What a DevOps consultant does, when to hire one, and what to look for. From CodetoKloud, an AWS Advanced Tier Partner: CI/CD, IaC, Kubernetes, and observability.",
  },
  "/devops-consulting-cost": {
    title: "How Much Does DevOps Consulting Cost? | CodetoKloud",
    description:
      "What drives the cost of DevOps and Kubernetes consulting, the common engagement models, and how to get an accurate quote. From CodetoKloud.",
  },
  "/engagement-models": {
    title: "How We Work: Engagement Models | CodetoKloud",
    description:
      "How CodetoKloud engages with clients: fixed-scope projects, managed retainers, and short assessments. Every engagement starts with a free consultation.",
  },

  // --- Company / legal ---
  "/faq": {
    title: "Frequently Asked Questions | CodetoKloud",
    description:
      "Answers to common questions about CodetoKloud's AWS cloud, DevOps, AI automation, and security & compliance services.",
  },
  "/aboutus": {
    title: "About CodetoKloud | AWS Advanced Tier Partner",
    description:
      "CodetoKloud is a US-registered IT consulting company and AWS Advanced Tier Partner in Illinois, delivering cloud, DevOps, AI, and compliance solutions.",
  },
  "/contact": {
    title: "Book an AWS Architecture Review | CodetoKloud",
    description:
      "Book a focused 30-minute review for an AWS cloud, DevOps, Amazon EKS, FinOps, migration, security, or compliance priority.",
  },
  "/careers": {
    title: "Careers at CodetoKloud",
    description:
      "Join CodetoKloud, an AWS Advanced Tier Partner in Illinois. Explore open roles in cloud, DevOps, AI, and full-stack development.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | CodetoKloud",
    description:
      "CodetoKloud privacy policy: how we collect, use, and protect your information.",
  },
  "/term-condition": {
    title: "Terms & Conditions | CodetoKloud",
    description:
      "Terms and conditions governing the use of CodetoKloud services and website.",
  },

  // --- Comparison guides ---
  "/argocd-vs-flux": {
    title: "ArgoCD vs Flux: GitOps on Kubernetes Compared | CodetoKloud",
    description:
      "ArgoCD vs Flux for GitOps on Kubernetes, how they differ and how to choose. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/github-actions-vs-jenkins-vs-gitlab-ci": {
    title: "GitHub Actions vs Jenkins vs GitLab CI | CodetoKloud",
    description:
      "GitHub Actions vs Jenkins vs GitLab CI compared for CI/CD pipelines, and how to choose. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/fargate-vs-ec2": {
    title: "AWS Fargate vs EC2 for Containers | CodetoKloud",
    description:
      "AWS Fargate vs EC2 for running containers, cost, control, and when to use each. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/ecs-vs-kubernetes": {
    title: "Amazon ECS vs Kubernetes: How to Choose | CodetoKloud",
    description:
      "Amazon ECS vs Kubernetes (EKS) compared, simplicity versus portability, and how to choose. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/terraform-vs-pulumi": {
    title: "Terraform vs Pulumi: Choosing an IaC Tool | CodetoKloud",
    description:
      "Terraform vs Pulumi for infrastructure as code on AWS, how they differ and how to choose. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/prometheus-vs-datadog": {
    title: "Prometheus vs Datadog: Kubernetes Monitoring | CodetoKloud",
    description:
      "Prometheus vs Datadog for monitoring and observability on Kubernetes and AWS, and how to choose. From CodetoKloud.",
  },

  // --- Definitional / GEO guides ---
  "/what-is-gitops": {
    title: "What Is GitOps? A Practical Guide | CodetoKloud",
    description:
      "What GitOps is, how it works with ArgoCD and Flux on Kubernetes, and why teams adopt it. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/what-is-finops": {
    title: "What Is FinOps? Cloud Cost Management Explained | CodetoKloud",
    description:
      "What FinOps is and how it brings visibility and control to AWS cloud spend. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/what-is-amazon-eks": {
    title: "What Is Amazon EKS? Managed Kubernetes on AWS | CodetoKloud",
    description:
      "What Amazon EKS is, how managed Kubernetes on AWS works, and when to use it. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/what-is-a-well-architected-review": {
    title: "What Is an AWS Well-Architected Review? | CodetoKloud",
    description:
      "What an AWS Well-Architected Review is, what it covers, and how CodetoKloud, an AWS Advanced Tier Partner, runs one.",
  },
  "/what-is-infrastructure-as-code": {
    title: "What Is Infrastructure as Code (IaC)? | CodetoKloud",
    description:
      "What Infrastructure as Code is, how Terraform and CloudFormation work, and why it matters. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/platform-engineering-vs-devops": {
    title: "Platform Engineering vs DevOps: The Difference | CodetoKloud",
    description:
      "Platform engineering vs DevOps, how they differ, how they overlap, and what your team needs. From CodetoKloud, an AWS Advanced Tier Partner.",
  },

  // --- Cost guides ---
  "/kubernetes-consulting-cost": {
    title: "How Much Does Kubernetes Consulting Cost? | CodetoKloud",
    description:
      "What drives the cost of Kubernetes and Amazon EKS consulting, common engagement models, and how to get a quote. From CodetoKloud.",
  },
  "/cloud-migration-cost": {
    title: "How Much Does AWS Cloud Migration Cost? | CodetoKloud",
    description:
      "What drives AWS cloud migration cost, how projects are scoped, and how to estimate yours. From CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/soc-2-cost": {
    title: "How Much Does SOC 2 Compliance Cost on AWS? | CodetoKloud",
    description:
      "What drives the cost of SOC 2 compliance on AWS and how to plan for it. From CodetoKloud, an AWS Advanced Tier Partner.",
  },

  // --- Local landing pages ---
  "/devops-consulting-austin": {
    title: "DevOps & Kubernetes Consulting in Austin | CodetoKloud",
    description:
      "DevOps, Kubernetes, and AWS cloud consulting for Austin-area businesses from CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/devops-consulting-dallas": {
    title: "DevOps & Kubernetes Consulting in Dallas | CodetoKloud",
    description:
      "DevOps, Kubernetes, and AWS cloud consulting for Dallas-area businesses from CodetoKloud, an AWS Advanced Tier Partner.",
  },
  "/devops-consulting-denver": {
    title: "DevOps & Kubernetes Consulting in Denver | CodetoKloud",
    description:
      "DevOps, Kubernetes, and AWS cloud consulting for Denver-area businesses from CodetoKloud, an AWS Advanced Tier Partner.",
  },
};

/** Returns a Next.js Metadata object (title, description, canonical) for a route. */
export function pageMetadata(path: string): Metadata {
  const meta = PAGES[path];
  if (!meta) {
    return {};
  }
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${path}`,
      title: meta.title,
      description: meta.description,
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: "CodetoKloud" },
      ],
    },
  };
}
