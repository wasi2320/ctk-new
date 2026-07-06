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
 * image — Next.js replaces (does not deep-merge) the parent openGraph.
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
    title: "Kubernetes & Amazon EKS Consulting Services | CodetoKloud",
    description:
      "Kubernetes and Amazon EKS consulting from CodetoKloud, an AWS Advanced Tier Partner: EKS cluster design, GitOps with ArgoCD, Helm, autoscaling, observability, cost optimization, and security hardening.",
  },
  "/ai": {
    title: "AI Automation & Machine Learning Services | CodetoKloud",
    description:
      "AI automation, ML, and GenAI solutions from CodetoKloud to automate workflows and drive smarter decisions across your cloud and application stack.",
  },
  "/web-solutions": {
    title: "Full-Stack Web Development | CodetoKloud",
    description:
      "Full-stack web and application development from CodetoKloud, building modern, scalable software on secure AWS cloud infrastructure.",
  },
  "/security-and-compliance": {
    title: "Cloud Security & Compliance: SOC 2, HIPAA, PCI DSS | CodetoKloud",
    description:
      "Security and compliance services from CodetoKloud covering SOC 2, HIPAA, and PCI DSS to help US businesses meet regulations on AWS.",
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
    title: "Custom Mobile App Development | CodetoKloud",
    description:
      "Custom native and cross-platform mobile app development from CodetoKloud, built on scalable, secure cloud infrastructure.",
  },
  "/ui-ux": {
    title: "UI/UX Design Services | CodetoKloud",
    description:
      "User interface and experience design from CodetoKloud: intuitive, accessible digital products that set your brand apart.",
  },

  // --- Industries ---
  "/e-commerce": {
    title: "E-Commerce Cloud Solutions | CodetoKloud",
    description:
      "Cloud-powered e-commerce solutions from CodetoKloud to build, scale, and secure online storefronts on AWS.",
  },
  "/ed-tech": {
    title: "EdTech Cloud Solutions | CodetoKloud",
    description:
      "EdTech cloud solutions from CodetoKloud for scalable digital learning platforms built on secure AWS infrastructure.",
  },
  "/fin-tech": {
    title: "FinTech Cloud Solutions | CodetoKloud",
    description:
      "FinTech cloud solutions from CodetoKloud: modernize legacy systems and scale securely while staying compliant with SOC 2 and PCI DSS.",
  },
  "/financial-services": {
    title: "Financial Services Technology Solutions | CodetoKloud",
    description:
      "Technology solutions for financial services from CodetoKloud, combining secure cloud infrastructure with SOC 2 and PCI DSS compliance expertise.",
  },
  "/healthcare": {
    title: "Healthcare Cloud Solutions (HIPAA) | CodetoKloud",
    description:
      "HIPAA-focused healthcare cloud solutions from CodetoKloud for secure patient data, scalable platforms, and compliant infrastructure.",
  },
  "/manufacturing": {
    title: "Manufacturing Cloud Solutions | CodetoKloud",
    description:
      "Cloud solutions for manufacturing from CodetoKloud: automation and scalable platforms to modernize production and operations.",
  },
  "/non-profits": {
    title: "Cloud Solutions for Non-Profits | CodetoKloud",
    description:
      "Scalable, cost-effective cloud and managed services from CodetoKloud to help non-profits streamline operations and expand their impact.",
  },
  "/pe-vc": {
    title: "Cloud Solutions for PE & VC Firms | CodetoKloud",
    description:
      "CodetoKloud partners with private equity and venture capital firms to accelerate portfolio digital transformation and growth.",
  },
  "/powering-business": {
    title: "Professional Services for Business | CodetoKloud",
    description:
      "Professional services from CodetoKloud that blend expert knowledge with modern cloud technology to deliver agile, results-driven outcomes.",
  },
  "/real-estate": {
    title: "Real Estate Technology Solutions | CodetoKloud",
    description:
      "Real estate technology and cloud solutions from CodetoKloud for smooth transactions, property management, and smart investment decisions.",
  },
  "/saas-isv": {
    title: "Cloud Solutions for SaaS & ISVs | CodetoKloud",
    description:
      "Cloud-native development, DevOps, and AI for SaaS providers and ISVs from CodetoKloud to launch, scale, and optimize software faster.",
  },
  "/small-and-mid-size-business": {
    title: "Cloud & IT Solutions for SMBs | CodetoKloud",
    description:
      "Agile web, app, AI, and cloud services from CodetoKloud tailored to small and mid-sized businesses looking to grow and compete.",
  },

  // --- Case studies ---
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
    title:
      "Case Study: Scalable, HIPAA-Compliant AWS Infrastructure for GoAgalia | CodetoKloud",
    description:
      "How CodetoKloud migrated GoAgalia's healthcare workforce platform to a scalable, HIPAA-compliant AWS architecture on Amazon EKS, cutting costs ~35% and API latency from 850ms to 320ms.",
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
    title: "Contact CodetoKloud | Schedule a Consultation",
    description:
      "Get in touch with CodetoKloud to discuss AWS cloud, DevOps, AI automation, and compliance solutions tailored to your business.",
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
