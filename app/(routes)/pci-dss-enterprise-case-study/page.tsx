import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/pci-dss-enterprise-case-study");

const data: CaseStudyData = {
  path: "/pci-dss-enterprise-case-study",
  title: "PCI DSS-Aligned Cloud Workstations Foundation",
  heroTitle: "A PCI DSS-Aligned Cloud Workstations Foundation",
  intro:
    "An enterprise preparing for PCI DSS Level 1 needed developers to work inside controlled Google Cloud environments so cardholder-adjacent data would not be stored on local endpoints. We designed the technical foundation to support QSA review without claiming a certification outcome.",
  heroImage: "/services/architecture/pci-gcp-foundation.svg",
  heroImageAlt:
    "Architecture diagram showing developers accessing private Google Cloud Workstations built from hardened Ubuntu images, with Shielded VMs, customer-managed encryption keys, Shared VPC, Terraform modules, and services mapped for QSA review.",
  metaDescription:
    "How CodetoKloud designed PCI DSS-aligned Google Cloud Workstations with hardened Ubuntu images, private networking, Shielded VMs, CMEK, Terraform modules, and control documentation to support QSA review.",
  problem: [
    "The organization needed consistent developer workspaces inside a controlled cloud boundary rather than relying on varied local environments for work near cardholder data.",
    "The design also had to document how workstation, network, encryption, logging, and access controls mapped to PCI DSS responsibilities before QSA pre-assessment and review.",
  ],
  solution: [
    {
      title: "Hardened Ubuntu Workstation Images",
      body: "We built custom Ubuntu 24.04 workstation images on Google's base image, removed unnecessary packages, added auditd, AIDE, and ClamAV, disabled USB storage, and moved repeatable setup into the image build.",
    },
    {
      title: "Private and Protected Workstations",
      body: "We designed Cloud Workstations without public IP addresses and added Shielded VMs with Secure Boot, virtual TPM, and integrity monitoring. Cloud KMS customer-managed encryption keys and idle timeouts added further data and session controls.",
    },
    {
      title: "Shared VPC Network Design",
      body: "We recommended and documented a Shared VPC model for the multi-team environment, including its boundaries and tradeoffs compared with isolated VPCs and peering.",
    },
    {
      title: "Terraform Modules and Control Documentation",
      body: "We delivered Terraform modules alongside console-path documentation and mapped relevant controls to Google Cloud services such as Cloud Audit Logs, Security Command Center, VPC Service Controls, DLP, and MFA enforcement.",
    },
    {
      title: "QSA Review Preparation",
      body: "We documented an implementation sequence through QSA pre-assessment and review, anchored the design to Google's PCI responsibility matrix, and made clear which responsibilities remained with the organization.",
    },
  ],
  results: [
    "The organization received a PCI DSS-aligned workstation design built around private Google Cloud environments and hardened, repeatable Ubuntu images.",
    "Shielded VM controls, customer-managed encryption keys, idle timeouts, and private networking were incorporated into the workstation foundation.",
    "Terraform modules, console implementation paths, and control mapping documentation gave the team artifacts designed to support QSA review. Formal compliance and audit conclusions remain the responsibility of the organization and its assessor.",
  ],
  metrics: ["Private workstations", "Shielded VMs and CMEK", "Terraform control modules"],
  stack: [
    "Google Cloud",
    "Cloud Workstations",
    "Ubuntu 24.04",
    "Artifact Registry",
    "Shared VPC",
    "Shielded VMs",
    "Cloud KMS",
    "Terraform",
    "Cloud Audit Logs",
    "Security Command Center",
  ],
  crossLinks: [
    { name: "PCI DSS Compliance", href: "/pci-dss-compliance" },
    { name: "Security & Compliance", href: "/security-and-compliance" },
    { name: "Review my PCI DSS foundation", href: "/contact" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
