import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";

export const metadata = pageMetadata("/finops");

const finopsDeliverables = [
  {
    title: "Cost Baseline, Allocation, and Tagging",
    body: "We establish a usable baseline, review account and billing structures, improve tag coverage, and define allocation rules by workload, environment, team, product, or business unit so spend has an accountable owner.",
  },
  {
    title: "Unit Economics Where Data Allows",
    body: "When reliable business and usage data is available, we connect cloud spend to measures such as customer, tenant, transaction, request, or job. We document data gaps instead of presenting an unsupported cost-per-unit number.",
  },
  {
    title: "Rightsizing and Idle Resource Review",
    body: "We identify underused compute, storage, databases, load balancers, snapshots, development environments, and other idle resources, then rank actions by expected value, effort, operational risk, and reversibility.",
  },
  {
    title: "Kubernetes Cost and Capacity Signals",
    body: "For Amazon EKS, we compare pod requests and limits with observed use, node capacity, scheduling constraints, workload patterns, autoscaling behavior, and shared cluster costs before recommending changes.",
  },
  {
    title: "Commitment and Pricing Analysis",
    body: "We model Savings Plans, Reserved Instances, Spot capacity, storage classes, and service alternatives against measured demand and growth assumptions. Recommendations go to your authorized owner for review, and we do not claim to purchase commitments automatically.",
  },
  {
    title: "Forecasts, Budgets, and Governance",
    body: "We create a forecast and budget approach, alert and review thresholds, decision records, engineering feedback, and a recurring operating cadence that keeps cost visible without weakening availability, performance, security, or recovery requirements.",
  },
];

const finopsProcess = [
  {
    title: "Establish the financial and technical baseline",
    body: "We review billing history, architecture, workload behavior, ownership, tags, commitments, forecasts, and reliability requirements. Known data gaps and shared costs are made explicit before opportunities are estimated.",
  },
  {
    title: "Allocate spend and identify its drivers",
    body: "We organize costs around accountable teams and services, then connect spend changes to capacity, traffic, storage, data transfer, environments, Kubernetes use, or business activity where the source data supports it.",
  },
  {
    title: "Prioritize and verify optimization actions",
    body: "Each candidate is reviewed for expected value, delivery effort, performance, availability, recovery, security, and commitment risk. Reversible changes are measured first, and production changes follow your approval process.",
  },
  {
    title: "Build the recurring FinOps operating rhythm",
    body: "We hand over forecasts, budgets, dashboards, decision records, engineering actions, owners, and a review cadence so finance, engineering, and product teams can continue making informed tradeoffs.",
  },
];

const finopsFaqs = [
  {
    question: "What is AWS FinOps?",
    answer:
      "AWS FinOps is an operating practice that gives engineering, finance, product, and business owners shared visibility and accountability for cloud spend. It combines allocation, forecasting, optimization, governance, and feedback so teams can decide where cloud investment creates value. It is not simply a one-time cost-cutting exercise.",
  },
  {
    question: "What information is needed to allocate AWS cost?",
    answer:
      "Useful allocation starts with account structure, billing data, tag coverage, workload and environment ownership, shared platform costs, and the business dimensions you need to report. We can define initial rules with partial data, but we identify unallocated spend and confidence limits rather than forcing false precision.",
  },
  {
    question: "Can you calculate cloud cost per customer or transaction?",
    answer:
      "Yes, when AWS cost data can be connected to trustworthy application or business usage data. We agree on the unit, allocation method, shared cost treatment, and refresh cadence first. If the required telemetry does not exist, we define what must be instrumented before presenting unit economics.",
  },
  {
    question: "How do you optimize Amazon EKS cost?",
    answer:
      "We examine pod requests and limits, observed use, node utilization, workload schedules, autoscaling, availability constraints, storage, data transfer, and cluster overhead. Possible actions can include right sizing, node group changes, consolidating idle capacity, scheduling nonproduction workloads, or selective Spot use when interruption risk is acceptable.",
  },
  {
    question: "Will CodetoKloud automatically purchase Savings Plans or Reserved Instances?",
    answer:
      "No. We model commitment coverage, utilization, term risk, service flexibility, growth assumptions, and break-even scenarios, then provide recommendations for your authorized financial or cloud owner to review. Purchases require your decision and approval.",
  },
  {
    question: "How do you keep cost optimization from hurting reliability?",
    answer:
      "We treat availability, performance, recovery, security, and delivery constraints as decision inputs. Each recommendation includes its operating tradeoff, validation plan, rollback path, and owner. A lower bill is not an improvement if it creates unacceptable customer or recovery risk.",
  },
  {
    question: "What remains after a FinOps engagement ends?",
    answer:
      "Your team receives the agreed allocation model, optimization register, assumptions, forecast and budget approach, commitment analysis, dashboards or reports, engineering actions, ownership, and review cadence. Ongoing support can be defined if you want CodetoKloud to participate in recurring reviews.",
  },
];

const FinOps = () => {
  const finopsTechStack = {
    heading: "AWS Cost Visibility and Optimization Technologies",
    description:
      "AWS billing data, infrastructure as code, Kubernetes resource signals, and observability tools support allocation, optimization, forecasting, and engineering feedback.",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/terraform-cloud.png",
      "/Images/PNGSS/Kubernetes-Logo.png",
      "/Images/PNGSS/Docker.png",
      "/Images/PNGSS/prometheus.png",
      "/Images/PNGSS/Grafana_logo.svg.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/finops"]} />
      <HeroSection
        title="AWS FinOps and Cloud Cost Optimization Services"
        description="Understand where AWS spend goes, improve forecasts, rightsize resources, and evaluate Savings Plans without compromising reliability or delivery speed."
        imageSrc="/services/service-visuals/aws-finops-loop.svg"
        imageAlt="AWS FinOps operating loop from cost allocation and visibility through rightsizing, commitment analysis, forecasting, and engineering feedback"
        buttonText="Request an AWS cost review"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What does an AWS FinOps service do?",
          answer:
            "An AWS FinOps service establishes the data, ownership, decisions, and recurring practices that connect cloud spend to technical use and business value. CodetoKloud helps engineering, finance, product, and business owners allocate cost, evaluate optimization choices, improve forecasts, and turn findings into accountable engineering work.",
          detail:
            "FinOps is an operating practice, not a one-time savings report. The goal is efficient, explainable cloud investment. Some decisions reduce spend, while others protect availability, performance, security, recovery, or product growth and may justify continued investment.",
        }}
        deliverables={{
          heading: "AWS FinOps deliverables",
          intro:
            "The engagement combines financial context with workload signals so each recommendation has an owner, assumption, tradeoff, and review path.",
          items: finopsDeliverables,
        }}
        process={{
          heading: "How AWS cost becomes an operating decision",
          intro:
            "We build a trustworthy baseline first, then prioritize measurable changes and leave the team with a repeatable review cadence.",
          steps: finopsProcess,
        }}
        bestFit={{
          heading: "Signs that FinOps help is timely",
          intro:
            "A focused engagement is useful when spend is growing faster than the team's ability to explain, forecast, or act on it.",
          scenarios: [
            "AWS invoices are visible, but spend cannot be allocated confidently to workloads, environments, products, or owners.",
            "Monthly cost changes trigger manual investigation and forecasts do not reflect technical or business drivers.",
            "Idle resources and rightsizing candidates are known, but engineering lacks a prioritized, risk-aware action register.",
            "Amazon EKS nodes appear underused while pod requests, scheduling constraints, and shared cluster costs remain unclear.",
            "The organization is considering Savings Plans or Reserved Instances without a measured demand and risk model.",
            "Finance and engineering need a shared review cadence that protects service levels while controlling spend.",
          ],
        }}
        proof={{
          heading: "Cost decisions in customer environments",
          intro:
            "These examples describe individual project results and decision processes. They do not predict savings for another AWS environment because workload, usage, pricing, and reliability constraints differ.",
          items: [
            {
              href: "/goagalia-healthcare-workforce-management",
              title: "GoAgalia right sized an Amazon EKS platform",
              body: "For this healthcare workforce platform, CodetoKloud applied right sizing and auto scaling to the measured workload. The client project recorded approximately 35% lower infrastructure cost while handling 2.5 times more concurrent users at peak.",
              metrics: ["About 35% lower infrastructure cost", "2.5x peak concurrency"],
            },
            {
              href: "/monolithic-structure",
              title: "Clyk Studio compared AWS cost with reliability needs",
              body: "For this monolith migration, the project comparison included migration work, steady-state operations, compute, managed database, load balancing, and backup costs. AWS was selected for its balance of elastic capacity, managed availability, and security controls for this application.",
              metrics: ["Workload-specific TCO comparison", "Reliability included in decision"],
            },
          ],
        }}
        cta={{
          heading: "Make the next AWS cost decision with better evidence",
          body: "Bring a recent billing period, workload ownership, current commitments, and the service levels you must protect. We will identify the allocation gaps and first optimization decisions worth reviewing.",
          label: "Book an AWS cost review",
        }}
      />

      <TechDisplaySection techDisplaySection={finopsTechStack} />
      <FaqSection
        items={finopsFaqs}
        heading="AWS FinOps FAQs"
        description="Answers about allocation, unit economics, Kubernetes cost, commitments, reliability, and ongoing ownership."
      />
      <RelatedServices currentPath="/finops" />
    </div>
  );
};

export default FinOps;
