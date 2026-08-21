import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";

export const metadata = pageMetadata("/cloud-migration");

const migrationDeliverables = [
  {
    title: "Workload discovery and dependency map",
    body: "We inventory applications, data stores, integrations, traffic paths, scheduled jobs, operational tooling, access, performance needs, recovery expectations, and owners so hidden dependencies surface before cutover.",
  },
  {
    title: "Migration strategy and wave plan",
    body: "We select a practical treatment for each workload, group systems by dependency and business risk, define wave order, and identify what must be remediated or validated before a workload moves.",
  },
  {
    title: "AWS landing zone preparation",
    body: "We prepare the required account structure, networking, connectivity, IAM, logging, security baseline, infrastructure as code, backup, and operational access before production workloads depend on it.",
  },
  {
    title: "Test migration and cutover runbook",
    body: "We migrate a representative workload or rehearsal dataset, record timing and failure points, validate the target, and turn the findings into an owned cutover checklist with communication and decision points.",
  },
  {
    title: "Cutover and rollback plan",
    body: "We define data synchronization, change freeze, traffic switch, health checks, acceptance criteria, roles, timing, and the conditions that trigger rollback while the source environment remains recoverable.",
  },
  {
    title: "Post-migration validation and handoff",
    body: "We verify application behavior, integrations, data, security, monitoring, backups, performance, and cost signals, then provide diagrams, runbooks, code ownership, known issues, and the next optimization backlog.",
  },
];

const migrationProcess = [
  {
    title: "Discover workloads and dependencies",
    body: "We collect technical evidence and owner input to map systems, data, integrations, operating requirements, business criticality, and migration constraints.",
  },
  {
    title: "Prepare the landing zone and migration waves",
    body: "We build the required AWS foundation, choose the treatment for each workload, and sequence waves so shared services and tightly coupled dependencies move in a controlled order.",
  },
  {
    title: "Run a test migration",
    body: "We rehearse the migration on a representative workload, validate function and operations, measure the steps, and refine success criteria, cutover timing, and rollback triggers.",
  },
  {
    title: "Execute cutover with rollback readiness",
    body: "We coordinate the production wave, synchronize data, switch traffic, run agreed health checks, and keep the source recovery path available until the acceptance criteria are met.",
  },
  {
    title: "Validate, stabilize, and hand over",
    body: "We confirm data and integrations, observe production behavior, resolve migration defects, verify backups and monitoring, and transfer the new environment to its named operating owners.",
  },
];

const migrationFaqs = [
  {
    question: "What is included in an AWS cloud migration service?",
    answer:
      "An AWS migration can include workload discovery, dependency mapping, migration treatment and wave planning, landing zone preparation, infrastructure as code, test migration, cutover, rollback planning, post-migration validation, stabilization, documentation, and operating handoff.",
  },
  {
    question: "Does an application need to be rewritten before moving to AWS?",
    answer:
      "Not always. Some workloads can move with limited application change, while others benefit from replatforming or selective modernization. CodetoKloud evaluates business risk, dependencies, operating burden, and the target outcome before recommending how much change belongs in the migration itself.",
  },
  {
    question: "How do you reduce downtime during migration?",
    answer:
      "We map dependencies, prepare the target in advance, rehearse the migration, measure data movement and validation steps, define a controlled change window, and assign cutover roles. The appropriate approach depends on the application's state, integrations, data volume, and tolerance for interruption.",
  },
  {
    question: "What should an AWS migration rollback plan include?",
    answer:
      "A rollback plan should define the source recovery path, data synchronization limits, decision owner, health and acceptance checks, rollback triggers, communication steps, and the latest safe point to reverse the traffic or data change. These details are tested where the workload allows it.",
  },
  {
    question: "How are workloads grouped into migration waves?",
    answer:
      "Workloads are grouped by dependencies, shared services, business criticality, data movement, technical similarity, owner availability, and the lessons that one wave can provide for the next. The first wave should be representative enough to validate the approach without carrying unnecessary business risk.",
  },
  {
    question: "What happens after the production cutover?",
    answer:
      "The team validates application behavior, integrations, data, security, performance, monitoring, alerts, backups, and cost signals. CodetoKloud documents known issues, stabilizes the environment within the agreed scope, transfers operating knowledge, and records later optimization work separately.",
  },
];

const CloudMigration = () => {
  const migrationTechStack = {
    heading: "AWS Migration and Validation Technologies",
    description:
      "AWS, infrastructure as code, automation, containers, and observability tools support workload discovery, target build, test migration, cutover, and validation.",
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
      <JsonLd data={coreServiceSchemas["/cloud-migration"]} />
      <HeroSection
        title="AWS Cloud Migration Services with Less Risk and Disruption"
        description="Plan and migrate applications, data, and infrastructure to AWS with workload discovery, target architecture, phased execution, security validation, and cost planning."
        imageSrc="/services/service-visuals/aws-migration-path.svg"
        imageAlt="AWS migration flow from discovery and dependency mapping through landing zone preparation, test migration, cutover, validation, and rollback readiness"
        buttonText="Plan your cloud migration"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What is an AWS cloud migration service?",
          answer:
            "An AWS cloud migration service moves applications, data, and supporting infrastructure into an AWS environment through planned waves. It combines discovery, dependency mapping, target foundation work, rehearsal, cutover, rollback readiness, validation, and operating handoff so the move is treated as a controlled change rather than a server copy exercise.",
          detail:
            "CodetoKloud selects the migration treatment by workload. The work can preserve an application, replatform it onto managed AWS services, or modernize selected components when that change has a clear operational or business reason.",
        }}
        deliverables={{
          heading: "AWS migration deliverables",
          intro:
            "Every migration artifact supports a cutover decision, validation step, or future operating responsibility.",
          items: migrationDeliverables,
        }}
        process={{
          heading: "A phased path from discovery to operating handoff",
          intro:
            "We reduce uncertainty before production cutover, learn from representative workloads, and preserve an agreed recovery path until validation is complete.",
          steps: migrationProcess,
        }}
        bestFit={{
          heading: "When migration planning should start",
          intro:
            "A structured migration engagement is useful when the move affects business continuity, shared systems, or the team's future operating model.",
          scenarios: [
            "A data center, hosting contract, or VPS environment is approaching an exit date.",
            "The current platform cannot meet availability, scaling, security, or recovery requirements without material change.",
            "The team has a cloud target but no verified inventory, dependency map, wave order, or cutover owner.",
            "A prior migration stalled because application, data, network, or identity dependencies were discovered too late.",
            "Leadership needs cost and operating implications considered alongside the technical move.",
            "A test migration, rollback plan, and post-cutover acceptance criteria are required before production approval.",
          ],
        }}
        proof={{
          heading: "AWS migrations tied to customer constraints",
          intro:
            "These results were reported for the named engagements and depend on each workload, baseline, scope, and operating model.",
          items: [
            {
              href: "/goagalia-healthcare-workforce-management",
              title: "GoAgalia: healthcare platform migration to Amazon EKS",
              body: "CodetoKloud moved the healthcare workforce platform into a private Multi-AZ AWS architecture with EKS, RDS, GitOps, observability, backup, and technical safeguards for regulated workloads.",
              metrics: ["About 35% lower infrastructure cost", "API latency from 850 ms to 320 ms"],
            },
            {
              href: "/monolithic-structure",
              title: "Clyk Studio: monolith migration without a simultaneous rewrite",
              body: "CodetoKloud mapped dependencies, rehearsed the move, and used managed AWS services to add Multi-AZ availability, controlled releases, monitoring, identity controls, and recoverable data around the existing application.",
              metrics: ["Application model preserved", "Multi-AZ database failover"],
            },
            {
              href: "/multi-brand-aws-fargate-modernization-case-study",
              title: "Four-brand modernization on AWS",
              body: "CodetoKloud migrated four application brands onto a consistent AWS platform using ECS Fargate, Aurora MySQL Multi-AZ, Application Load Balancers, AWS Amplify, and phased production cutovers.",
              metrics: ["Four application brands", "Phased AWS cutover"],
            },
          ],
        }}
        cta={{
          heading: "Map the migration before setting the cutover date",
          body: "Bring the current workload list, known dependencies, target date, and business constraints. We will help define the discovery and validation needed for a credible migration plan.",
          label: "Book an AWS migration review",
        }}
      />

      <TechDisplaySection techDisplaySection={migrationTechStack} />
      <FaqSection
        items={migrationFaqs}
        heading="AWS cloud migration FAQs"
        description="Answers about scope, modernization, downtime, rollback, migration waves, and post-cutover validation."
      />
      <RelatedServices currentPath="/cloud-migration" />
    </div>
  );
};

export default CloudMigration;
