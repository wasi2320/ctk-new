import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/soc-2-cost");

const data: DefinitionData = {
  path: "/soc-2-cost",
  heroTitle: "How Much Does SOC 2 Compliance Cost on AWS?",
  intro:
    "What drives the cost of SOC 2 compliance on AWS, how the work is scoped, and how to plan for it. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/services/aws-solution-illustration.png",
  capsuleQuestion: "How much does SOC 2 compliance cost on AWS?",
  capsuleAnswer:
    "SOC 2 cost has two parts: the audit itself, paid to a licensed CPA firm, and the engineering work to build and evidence the controls, which is where CodetoKloud helps. The engineering cost depends on how far your current AWS environment is from the Trust Services Criteria, the audit scope, and whether you pursue a Type I or Type II report. As an AWS Advanced Tier Partner, CodetoKloud scopes the readiness and remediation work and quotes it before starting.",
  sections: [
    {
      title: "What drives the cost",
      body: "The main factors are your starting point (a greenfield AWS setup versus a legacy environment with gaps), the scope of systems in the audit, and Type I versus Type II. Type I assesses control design at a point in time; Type II assesses that controls operated effectively over a period, usually several months, which means more evidence and monitoring. The more controls already in place, the less remediation is needed.",
    },
    {
      title: "Where the money goes",
      body: "Budget for three things: the auditor (an independent CPA firm issues the report), tooling (a compliance automation platform plus AWS services like CloudTrail, Config, GuardDuty, and centralized logging), and the engineering effort to close gaps in access control, encryption, change management, monitoring, and backup. CodetoKloud covers the engineering side, building and documenting the technical controls on AWS.",
    },
    {
      title: "Readiness first",
      body: "Most of the controllable cost is in remediation, so we usually start with a readiness assessment. We map your AWS environment against the Trust Services Criteria, identify gaps, and produce a prioritized plan. That turns an open-ended compliance effort into a scoped project and avoids paying an auditor to find issues you could have fixed first.",
    },
    {
      title: "How to plan for it",
      body: "The fastest way to a real number is a short, free call. We review your AWS environment and target report type and send a scoped quote for the readiness and remediation work, with no obligation. See our SOC 2 compliance and security and compliance services, and our engagement models, for how we structure it.",
    },
  ],
  faq: [
    {
      question: "Does CodetoKloud issue the SOC 2 report?",
      answer:
        "No. The SOC 2 report is issued by an independent licensed CPA firm; that independence is required. CodetoKloud does the engineering work to build, harden, and document the controls on AWS and to prepare the evidence your auditor needs.",
    },
    {
      question: "What is the difference between Type I and Type II cost?",
      answer:
        "Type I assesses whether controls are designed properly at a single point in time and is less expensive. Type II assesses whether they operated effectively over a monitoring period of several months, which requires sustained evidence and typically costs more overall.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Book a free consultation. CodetoKloud assesses your AWS environment against the Trust Services Criteria and sends a scoped quote for the readiness and remediation work, with no obligation.",
    },
  ],
  crossLinks: [
    { name: "SOC 2 Compliance", href: "/soc-2-compliance" },
    { name: "Security & Compliance", href: "/security-and-compliance" },
    { name: "Engagement Models", href: "/engagement-models" },
  ],
  ctaHeading: "Get a scoped quote",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
