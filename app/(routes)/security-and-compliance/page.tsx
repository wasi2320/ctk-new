import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import ComplianceLinks from "@/app/components/sections/ComplianceLinks";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedInsights from "@/app/components/sections/RelatedInsights";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";
import { aiDevopsInsights } from "@/utils/data/aiDevopsInsights";

export const metadata = pageMetadata("/security-and-compliance");

const securityDeliverables = [
  {
    title: "AWS Security Baseline and Control Map",
    body: "We inventory accounts, workloads, data paths, trust boundaries, existing safeguards, and known findings. The resulting control map connects technical gaps to the selected framework, risk owner, priority, and evidence source.",
  },
  {
    title: "Identity and Access Controls",
    body: "We implement least-privilege IAM, role separation, MFA expectations, workload identities, privileged access paths, credential handling, and access review procedures based on how people and services use the environment.",
  },
  {
    title: "Network and Data Protection",
    body: "We design network segmentation, private workload placement, controlled ingress and egress, encryption in transit and at rest, KMS key use, and secrets handling around the actual data flow and threat model.",
  },
  {
    title: "Logging, Monitoring, and Evidence",
    body: "We centralize relevant AWS activity, access, workload, and security logs, define retention and alert paths, and organize technical evidence so control owners can retrieve it for an assessor or internal review.",
  },
  {
    title: "Vulnerability Management and Remediation",
    body: "We establish asset and image scanning, finding triage, severity and ownership rules, patch or upgrade workflows, exception handling, and verification that agreed remediation work has been completed.",
  },
  {
    title: "Backup, Recovery, and Team Handoff",
    body: "We align backups, retention, restore testing, recovery procedures, and resilience controls with workload needs, then hand over diagrams, evidence locations, runbooks, control ownership, and an open remediation register.",
  },
];

const securityProcess = [
  {
    title: "Confirm scope, obligations, and owners",
    body: "We identify the AWS accounts, workloads, data, third parties, selected framework requirements, existing policies, and people responsible for each control. Your legal, privacy, and audit advisors remain responsible for interpreting obligations.",
  },
  {
    title: "Assess the implemented environment",
    body: "We inspect identity, network, encryption, logging, vulnerability, backup, recovery, and change controls. Findings are documented with risk, affected resources, evidence, dependencies, and a practical remediation sequence.",
  },
  {
    title: "Implement and verify technical controls",
    body: "We make approved changes through repeatable infrastructure and operating procedures, test expected behavior, review residual risk, and confirm that remediation evidence can be reproduced.",
  },
  {
    title: "Prepare evidence and transfer ownership",
    body: "We organize technical artifacts, resolve agreed findings, document exceptions, rehearse evidence retrieval, and hand off runbooks and recurring control tasks to named owners before the engagement closes.",
  },
];

const securityFaqs = [
  {
    question: "What does an AWS security and compliance engagement include?",
    answer:
      "A scoped engagement can include architecture and configuration review, control mapping, IAM, network segmentation, encryption, secrets protection, logging, evidence workflows, vulnerability management, backup and recovery, remediation, documentation, and team handoff. The exact work depends on the workloads, data, framework, existing controls, and assessment timeline.",
  },
  {
    question: "Does CodetoKloud certify that our organization is compliant?",
    answer:
      "No. CodetoKloud implements and documents cloud infrastructure controls. We do not provide legal advice, issue SOC 2 reports, perform PCI DSS assessments, certify HIPAA compliance, or guarantee an audit result. Independent auditors, qualified assessors, legal counsel, and your organization determine the applicable requirements and formal outcome.",
  },
  {
    question: "Can you work with our auditor or compliance advisor?",
    answer:
      "Yes. With your approval, we can explain the AWS architecture, provide requested technical evidence, clarify how a control is implemented, and remediate agreed infrastructure findings. The auditor or advisor remains independent and decides whether the evidence satisfies the relevant criteria.",
  },
  {
    question: "What evidence can you help prepare from AWS?",
    answer:
      "Depending on scope, evidence can include approved infrastructure changes, IAM and access records, network diagrams, encryption settings, CloudTrail and configuration records, vulnerability and remediation records, backup policies, restore test results, monitoring alerts, and operating runbooks. Evidence is tied to a named control and owner.",
  },
  {
    question: "How do you handle security findings and vulnerabilities?",
    answer:
      "We record the affected asset, severity, context, owner, expected action, and target date. Remediation can include configuration changes, patching, dependency or image updates, access changes, compensating controls, or a documented risk decision. Completed work is verified and the supporting evidence is retained.",
  },
  {
    question: "What happens after the initial remediation project?",
    answer:
      "We hand over diagrams, infrastructure code, runbooks, evidence locations, recurring control tasks, open risks, and named ownership. CodetoKloud can also support an ongoing control and remediation cadence when the responsibilities and response expectations are defined in the engagement.",
  },
];

const SecurityAndCompliance = () => {
  const securityTechStack = {
    heading: "AWS Security Control Technologies",
    description:
      "AWS, infrastructure as code, secrets protection, security monitoring, and observability tools support access, data, logging, remediation, and evidence workflows.",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/terraform-cloud.png",
      "/Images/PNGSS/vault-hashicorp.png",
      "/Images/PNGSS/crowdstrike-logo.png",
      "/Images/PNGSS/prometheus.png",
      "/Images/PNGSS/Grafana_logo.svg.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/security-and-compliance"]} />
      <HeroSection
        title="AWS Cloud Security and Compliance Services"
        description="Reduce cloud risk and prepare for SOC 2, HIPAA, and PCI DSS requirements with practical controls, evidence workflows, and remediation support tailored to your AWS environment."
        imageSrc="/services/service-visuals/aws-security-controls.svg"
        imageAlt="AWS security and compliance control flow covering identity, network, data protection, logging, monitoring, remediation, and evidence"
        buttonText="Request a security assessment"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What do AWS security and compliance services do?",
          answer:
            "AWS security and compliance services assess, implement, and document the infrastructure controls that protect cloud workloads and support a defined compliance program. CodetoKloud helps teams turn control requirements into working identity, network, data protection, logging, vulnerability, recovery, and evidence practices.",
          detail:
            "This work supports your security and audit readiness, but it is not legal advice, a certification, an audit report, or a guarantee of compliance. Your organization owns its policies and operating controls, while an authorized independent assessor determines any formal audit or certification result.",
        }}
        deliverables={{
          heading: "AWS security control deliverables",
          intro:
            "The engagement connects each technical safeguard to the workload, evidence, owner, and operating procedure needed to keep it effective.",
          items: securityDeliverables,
        }}
        process={{
          heading: "From control scope to operational handoff",
          intro:
            "We begin with the applicable environment and control scope, then implement approved remediation in a sequence your team can verify and operate.",
          steps: securityProcess,
        }}
        bestFit={{
          heading: "When a security engagement is timely",
          intro:
            "A focused review is useful when infrastructure risk or a formal assessment has created a clear deadline or ownership gap.",
          scenarios: [
            "A SOC 2 auditor, PCI DSS assessor, customer review, or internal risk team has identified technical gaps in AWS.",
            "A healthcare workload needs stronger safeguards for protected health information and a clearer evidence trail.",
            "IAM access, network boundaries, encryption, secrets, or production administration have grown without consistent review.",
            "Security findings exist across scanners and accounts, but remediation priority, ownership, or verification is unclear.",
            "Backups exist, but restore procedures, recovery ownership, or evidence of testing are incomplete.",
            "The platform team needs infrastructure code, runbooks, diagrams, and recurring control tasks before taking ownership.",
          ],
        }}
        proof={{
          heading: "Security control work in customer environments",
          intro:
            "These are attributed results from individual engagements. They show what happened in those environments and do not guarantee the same audit, security, or reliability outcome elsewhere.",
          items: [
            {
              href: "/soc-2-healthcare-aws-case-study",
              title: "SOC 2 controls for a healthcare platform on AWS",
              body: "For this healthcare engagement, CodetoKloud implemented Multi-AZ availability, network segmentation, access controls, encryption, audit logging, and alerting. The client reported passing its SOC 2 audit and 99.99% uptime after the rebuild.",
              metrics: ["Client passed SOC 2 audit", "99.99% reported uptime"],
            },
            {
              href: "/hipaa-aws-hardening-case-study",
              title: "HIPAA hardening for an AWS data platform",
              body: "CodetoKloud moved this patient-facing platform to private ECS Fargate networking, end-to-end TLS, Aurora PostgreSQL, managed secrets, and encrypted, replicated data to support its HIPAA workload requirements.",
              metrics: ["Private ECS Fargate", "Aurora PostgreSQL"],
            },
            {
              href: "/pci-dss-enterprise-case-study",
              title: "PCI DSS-aligned Cloud Workstations foundation",
              body: "For this Google Cloud engagement, CodetoKloud designed hardened Ubuntu workstations with private networking, Shielded VMs, customer-managed encryption keys, Shared VPC, Terraform modules, and control documentation to support QSA review.",
              metrics: ["Private workstations", "Shielded VMs and CMEK"],
            },
            {
              href: "/cis-kubernetes-benchmark-assessment-case-study",
              title: "CIS Kubernetes Benchmark assessment",
              body: "CodetoKloud assessed AWS EKS and Linode LKE controls against the CIS Kubernetes Benchmark, documented provider responsibilities, and used cluster configuration and kube-bench evidence where available.",
              metrics: ["AWS EKS and Linode LKE", "Control-by-control evidence"],
            },
          ],
        }}
        cta={{
          heading: "Turn your highest-risk AWS gaps into an action plan",
          body: "Share the workload scope, target framework, recent findings, and assessment timeline. We will identify the technical controls, evidence dependencies, and first remediation steps worth reviewing.",
          label: "Book an AWS security review",
        }}
      />

      <TechDisplaySection techDisplaySection={securityTechStack} />
      <ComplianceLinks currentPath="/security-and-compliance" />
      <RelatedInsights
        heading="Security controls for AI-assisted engineering"
        intro="Understand prompt injection, excessive permissions, insecure generated infrastructure, secret exposure, and the deterministic controls that should block unsafe changes."
        items={aiDevopsInsights}
      />
      <FaqSection
        items={securityFaqs}
        heading="AWS security and compliance FAQs"
        description="Answers about technical scope, audit boundaries, evidence, remediation, and ownership after handoff."
      />
      <RelatedServices currentPath="/security-and-compliance" />
    </div>
  );
};

export default SecurityAndCompliance;
