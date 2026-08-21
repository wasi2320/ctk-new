import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedInsights from "@/app/components/sections/RelatedInsights";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";
import { aiDevopsInsights } from "@/utils/data/aiDevopsInsights";

export const metadata = pageMetadata("/cloud-service");

const cloudDeliverables = [
  {
    title: "AWS landing zone and account structure",
    body: "We define the account layout, environment boundaries, baseline guardrails, logging destinations, and ownership model needed to separate workloads without making access or billing harder to manage.",
  },
  {
    title: "Network architecture",
    body: "We design VPCs, public and private subnets, routing, ingress, egress, service connectivity, and hybrid access around the systems that must communicate and the paths that must remain isolated.",
  },
  {
    title: "IAM and administrative access",
    body: "We map human and workload identities to least privilege roles, reduce standing access where practical, protect secrets, and document how engineers reach production systems.",
  },
  {
    title: "Infrastructure as code",
    body: "We implement the agreed foundation with Terraform or CloudFormation so changes are version controlled, reviewable, repeatable, and less dependent on manual console work.",
  },
  {
    title: "Resilience and availability design",
    body: "We match Multi-AZ architecture, health checks, scaling, managed services, failure boundaries, and recovery procedures to the workload's actual availability requirements.",
  },
  {
    title: "Observability and operational alerts",
    body: "We connect infrastructure and service metrics, logs, dashboards, and alerts to the operating questions your team must answer during a release or incident.",
  },
  {
    title: "Backup and recovery controls",
    body: "We define what must be backed up, how long recovery data is retained, where copies are stored, and how restore procedures will be tested for the selected AWS services.",
  },
  {
    title: "Operating handoff",
    body: "We provide architecture diagrams, code ownership, access procedures, runbooks, known constraints, and a prioritized backlog so your team can operate and improve the platform after delivery.",
  },
];

const cloudProcess = [
  {
    title: "Baseline the workload and operating model",
    body: "We review applications, data flows, dependencies, environments, access paths, reliability needs, recovery expectations, cloud costs, and the people responsible for day to day operation.",
  },
  {
    title: "Design the AWS foundation",
    body: "We turn those requirements into account, network, IAM, resilience, observability, backup, and infrastructure as code decisions, with tradeoffs documented before implementation.",
  },
  {
    title: "Build and validate in controlled stages",
    body: "We implement the agreed foundation, connect a representative workload, and validate access, deployment, monitoring, failure response, backup, and restore behavior against the project criteria.",
  },
  {
    title: "Transfer ownership and next actions",
    body: "We walk the team through the code and operating procedures, resolve handoff gaps, and leave a prioritized list for capacity, security, reliability, and cost improvements that remain outside the initial scope.",
  },
];

const cloudFaqs = [
  {
    question: "What is included in an AWS cloud infrastructure engagement?",
    answer:
      "The scope can include AWS account and landing zone design, VPC networking, IAM, infrastructure as code, workload architecture, observability, backup and recovery, cost controls, documentation, and operating handoff. The final scope depends on the workloads, risk, and ownership model in the current environment.",
  },
  {
    question: "Can you improve an existing AWS environment?",
    answer:
      "Yes. We can assess an existing AWS environment, identify the most important architecture and operational gaps, and improve it in stages. A project does not require rebuilding every account or workload when targeted changes can address the priority risks.",
  },
  {
    question: "Do all AWS workloads need a multi-account landing zone?",
    answer:
      "No. The right account structure depends on workload separation, team responsibilities, compliance scope, billing, and expected growth. We recommend enough separation to manage risk and ownership without adding account complexity that the team cannot support.",
  },
  {
    question: "How do you plan AWS resilience and disaster recovery?",
    answer:
      "We begin with business impact, recovery time, recovery point, and failure scenarios. Those requirements guide the use of Multi-AZ services, backups, cross-region copies, infrastructure as code, health checks, and tested recovery procedures. Not every workload needs the same recovery design.",
  },
  {
    question: "Will our team be able to operate the platform after launch?",
    answer:
      "Operating handoff is part of the delivery plan. We document architecture, access, deployments, monitoring, alerts, backups, recovery procedures, code ownership, and known constraints, then review those materials with the people who will own the environment.",
  },
  {
    question: "Can CodetoKloud provide ongoing AWS operations support?",
    answer:
      "Yes. CodetoKloud can deliver a defined foundation project, support implementation alongside your team, or provide ongoing cloud operations. Responsibilities, response expectations, access, and handoff criteria are agreed for each engagement.",
  },
];

const CloudService = () => {
  const cloudTechStack = {
    heading: "AWS Cloud Foundation Technologies",
    description:
      "AWS, infrastructure as code, container, automation, and observability tools support repeatable cloud foundations and production operations.",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/terraform-cloud.png",
      "/Images/PNGSS/ansible-logo.png",
      "/Images/PNGSS/Docker.png",
      "/Images/PNGSS/Kubernetes-Logo.png",
      "/Images/PNGSS/prometheus.png",
      "/Images/PNGSS/Grafana_logo.svg.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/cloud-service"]} />
      <HeroSection
        title="AWS Cloud Infrastructure Services Built for Security and Scale"
        description="Design, deploy, and optimize AWS cloud infrastructure for stronger reliability, security, and cost control. Get practical support from architecture and automation through ongoing operations."
        imageSrc="/services/service-visuals/aws-cloud-foundation.svg"
        imageAlt="AWS cloud foundation with a landing zone, network segmentation, Multi-AZ workloads, protected data, and centralized observability"
        buttonText="Plan your cloud project"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What is an AWS cloud infrastructure service?",
          answer:
            "An AWS cloud infrastructure service designs and implements the shared foundation that applications need to run securely and reliably. It connects account structure, networking, IAM, infrastructure as code, resilience, observability, backup, and operational ownership into one maintainable environment.",
          detail:
            "CodetoKloud works from workload requirements and team constraints. The goal is an AWS foundation your engineers can understand, change through code, monitor in production, and recover according to agreed business needs.",
        }}
        deliverables={{
          heading: "AWS cloud infrastructure deliverables",
          intro:
            "The scope is tailored to the workload, but each deliverable has a clear owner and an operational purpose.",
          items: cloudDeliverables,
        }}
        process={{
          heading: "How the AWS foundation is delivered",
          intro:
            "We make the architecture decisions explicit, validate the important operating paths, and transfer ownership with the implementation.",
          steps: cloudProcess,
        }}
        bestFit={{
          heading: "Signs your AWS foundation needs attention",
          intro:
            "A focused cloud infrastructure engagement is useful when the platform is becoming a constraint or risk for the teams using it.",
          scenarios: [
            "Production resources are concentrated in one account, one Availability Zone, or an unclear network layout.",
            "Engineers depend on manual console changes, shared credentials, or undocumented administrative access.",
            "A growing application needs clearer scaling, availability, backup, or recovery behavior.",
            "Monitoring shows infrastructure activity but does not explain whether critical services are healthy.",
            "Cloud costs are rising without clear workload ownership, resource standards, or review practices.",
            "A migration, compliance program, acquisition, or new product requires a stronger AWS baseline before workloads move.",
          ],
        }}
        proof={{
          heading: "AWS infrastructure in production",
          intro:
            "These case studies show how CodetoKloud applied cloud foundations to specific customer constraints. Results belong to those engagements and are not a guarantee for every workload.",
          items: [
            {
              href: "/multi-brand-aws-fargate-modernization-case-study",
              title: "Four-brand AWS modernization on ECS Fargate",
              body: "CodetoKloud standardized four application brands on ECS Fargate, Aurora MySQL Multi-AZ, Application Load Balancers, AWS Amplify, and GitHub Actions with OIDC and AWS Secrets Manager.",
              metrics: [
                "Four brands standardized",
                "Development, sandbox, and production",
              ],
            },
            {
              href: "/scalable-secure-aws",
              title: "Spiderdoor: from VPS to a private AWS platform",
              body: "CodetoKloud moved the SaaS workload to private Amazon EKS and RDS tiers with AWS WAF, controlled access, automated delivery, Prometheus, Grafana, and retained recovery data.",
              metrics: ["50% faster release cycles", "40% faster issue resolution"],
            },
          ],
        }}
        cta={{
          heading: "Review the foundation before the next workload depends on it",
          body: "Bring your current AWS account layout, architecture, operating concerns, and upcoming workload. We will help identify the first foundation decisions worth addressing.",
          label: "Book an AWS foundation review",
        }}
      />

      <TechDisplaySection techDisplaySection={cloudTechStack} />
      <RelatedInsights
        heading="Guides for AI-assisted cloud engineering"
        intro="Review the delivery, infrastructure, security, and production risks that appear when AI tools can propose or execute cloud changes."
        items={aiDevopsInsights}
      />
      <FaqSection
        items={cloudFaqs}
        heading="AWS cloud infrastructure FAQs"
        description="Answers about landing zones, existing AWS environments, resilience, operating handoff, and support."
      />
      <RelatedServices currentPath="/cloud-service" />
    </div>
  );
};

export default CloudService;
