import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/what-is-a-well-architected-review");

const data: DefinitionData = {
  path: "/what-is-a-well-architected-review",
  heroTitle: "What Is an AWS Well-Architected Review?",
  intro:
    "How an AWS Well-Architected Review works: a structured assessment of your workload against six pillars, the risks it surfaces, and how CodetoKloud runs one as an AWS Advanced Tier Partner.",
  heroImage: "/Images/Cloud_Hero.png",
  capsuleQuestion: "What is an AWS Well-Architected Review?",
  capsuleAnswer:
    "An AWS Well-Architected Review is a structured assessment of a workload against the AWS Well-Architected Framework's six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. A reviewer works through the framework's questions with your team, identifies high and medium risks, and produces a prioritized remediation plan. It is a point-in-time health check, not an audit. CodetoKloud runs Well-Architected Reviews as an AWS Advanced Tier Partner.",
  sections: [
    {
      title: "The six pillars",
      body: "The framework organizes best practices into six pillars. Operational excellence covers how you run and observe workloads. Security covers identity, data protection, and detection. Reliability covers recovery and fault tolerance. Performance efficiency covers using the right resources. Cost optimization covers eliminating waste. Sustainability covers reducing the environmental impact of your workload. A review scores your workload against each.",
    },
    {
      title: "What the review finds",
      body: "The output is a list of identified risks, categorized as high risk (HRIs) or medium risk, tied to specific best practices. Common findings include gaps in backup and recovery testing, over-broad IAM permissions, missing encryption or logging, single points of failure, and over-provisioned resources. Each finding comes with a recommended improvement, so you leave with a concrete backlog rather than a vague grade.",
    },
    {
      title: "How the process works",
      body: "A review is a working session, not a form. We walk through the framework's questions with your engineers and operators, using the AWS Well-Architected Tool to record answers and risks against the workload. We look at real configuration, not just self-reported answers. The result is a prioritized remediation plan that separates quick wins from larger architectural work.",
    },
    {
      title: "How CodetoKloud runs one",
      body: "As an AWS Advanced Tier Partner, CodetoKloud runs Well-Architected Reviews as a short, fixed-scope engagement. We assess the workload, document risks by pillar, and deliver a prioritized plan, then can execute the remediation if you want. It pairs naturally with security and compliance work and with FinOps for the cost pillar.",
    },
  ],
  faq: [
    {
      question: "Is a Well-Architected Review the same as an audit?",
      answer:
        "No. A Well-Architected Review is a collaborative best-practice assessment that produces improvement recommendations, not a pass/fail compliance audit. It can, however, surface issues relevant to SOC 2, HIPAA, or PCI DSS and help you prepare for a formal audit.",
    },
    {
      question: "How long does a review take?",
      answer:
        "A single-workload review is usually a short, focused engagement measured in days rather than weeks, depending on the workload's complexity. Remediation of the findings is separate and scoped based on the risks identified.",
    },
    {
      question: "What do I get at the end?",
      answer:
        "You get a documented set of risks organized by the six pillars, each with a recommended improvement, and a prioritized remediation plan. CodetoKloud can then implement the fixes as a follow-on project if you choose.",
    },
  ],
  crossLinks: [
    { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
    { name: "Security & Compliance", href: "/security-and-compliance" },
    { name: "FinOps & Cost Optimization", href: "/finops" },
  ],
  ctaHeading: "Talk to an AWS partner",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
