import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";

export const metadata = pageMetadata("/consulting-and-advisory");

const advisoryDeliverables = [
  {
    title: "Current-state assessment",
    body: "We document the relevant applications, infrastructure, data flows, delivery practices, security controls, cloud costs, operating responsibilities, constraints, and risks instead of starting from assumptions.",
  },
  {
    title: "Architecture decision record",
    body: "We compare practical options against the agreed criteria and record the selected direction, alternatives considered, tradeoffs, dependencies, and conditions that could change the decision later.",
  },
  {
    title: "Prioritized roadmap",
    body: "We sequence work by business impact, risk, effort, dependencies, and team capacity, with near-term actions separated from later improvements that should not block progress.",
  },
  {
    title: "Target architecture",
    body: "We create diagrams and implementation guidance for the chosen AWS, DevOps, Kubernetes, security, reliability, or cost model at the level your engineers need to estimate and build it.",
  },
  {
    title: "Implementation support",
    body: "We can review designs and pull requests, validate an initial implementation, build selected platform components, or work alongside your team through the highest-risk part of the roadmap.",
  },
];

const advisoryProcess = [
  {
    title: "Frame the decision and success criteria",
    body: "We identify the business event, technical decision, stakeholders, deadlines, nonnegotiable constraints, and evidence that will determine whether the recommendation is useful.",
  },
  {
    title: "Assess the current state",
    body: "We review architecture, code and infrastructure patterns, cloud configuration, delivery workflows, operating data, cost information, and existing documentation relevant to the decision.",
  },
  {
    title: "Compare options and record tradeoffs",
    body: "We workshop viable approaches with the people who will build and operate them, then document why the preferred option fits and which risks still require validation.",
  },
  {
    title: "Sequence delivery and support the first step",
    body: "We turn the decision into a target architecture and prioritized roadmap, define the first implementation checkpoint, and provide the agreed level of engineering support.",
  },
];

const advisoryFaqs = [
  {
    question: "What does cloud and DevOps advisory work produce?",
    answer:
      "A focused advisory engagement produces a current-state assessment, documented architecture decision, prioritized roadmap, target architecture, risks, dependencies, and an implementation support plan. The exact artifacts depend on the decision and the people who will use them.",
  },
  {
    question: "What decisions can CodetoKloud help with?",
    answer:
      "CodetoKloud advises on AWS account and network architecture, workload modernization, ECS or EKS selection, CI/CD and GitOps, infrastructure as code, observability, reliability, security controls, compliance infrastructure, migration sequencing, and cloud cost governance.",
  },
  {
    question: "Can you review an architecture our team already designed?",
    answer:
      "Yes. We can assess an existing proposal against business requirements, failure scenarios, security boundaries, operating effort, cost drivers, and team capability. The review records useful parts of the design as well as gaps and alternative options.",
  },
  {
    question: "Do you only provide recommendations, or can you implement them?",
    answer:
      "CodetoKloud can stop at an independent assessment and roadmap or continue into implementation. Support can include design review, infrastructure as code, a pilot, platform engineering, delivery automation, or work alongside your internal team.",
  },
  {
    question: "How is a consulting roadmap prioritized?",
    answer:
      "We rank work using the agreed business impact, risk, dependencies, engineering effort, operating burden, and team capacity. Urgent risk reduction and enabling work are separated from improvements that can wait, so the roadmap is usable rather than a flat list of recommendations.",
  },
  {
    question: "How long does a cloud advisory engagement take?",
    answer:
      "The schedule depends on the breadth of the environment, access to evidence and stakeholders, and whether implementation validation is included. We define the decision, required inputs, review sessions, artifacts, and delivery checkpoints before work begins.",
  },
];

const ConsultingAndAdvisory = () => {
  const consultingTechStack = {
    heading: "Platforms Used to Validate AWS Recommendations",
    description:
      "AWS architecture, infrastructure as code, delivery, Kubernetes, and observability tools help test assumptions and turn the roadmap into implementable work.",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/terraform-cloud.png",
      "/Images/PNGSS/GitHub-Logo.png",
      "/Images/PNGSS/Kubernetes-Logo.png",
      "/Images/PNGSS/Docker.png",
      "/Images/PNGSS/prometheus.png",
      "/Images/PNGSS/Grafana_logo.svg.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/consulting-and-advisory"]} />
      <HeroSection
        title="Cloud and DevOps Consulting for Clearer Technical Decisions"
        description="Get expert guidance for AWS architecture, DevOps, Kubernetes, security, and cost optimization. We assess your environment, prioritize the work, and create a delivery roadmap your team can use."
        imageSrc="/services/service-visuals/aws-architecture-advisory.svg"
        imageAlt="AWS architecture advisory flow from current-state assessment through technical decisions and a prioritized roadmap to implementation"
        buttonText="Book a consulting call"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What is cloud and DevOps advisory consulting?",
          answer:
            "Cloud and DevOps advisory consulting helps a team make a defined technical decision using evidence from its current environment, business priorities, risks, and operating model. The result should explain what to do, why it fits, what it depends on, and how to implement it in a realistic order.",
          detail:
            "CodetoKloud focuses on AWS architecture, DevOps, Kubernetes, security, reliability, and cost. Recommendations are documented as decisions, target designs, and sequenced work that engineering and business stakeholders can review together.",
        }}
        deliverables={{
          heading: "Cloud advisory deliverables your team can use",
          intro:
            "Each artifact is tied to a decision, an owner, and the next implementation step.",
          items: advisoryDeliverables,
        }}
        process={{
          heading: "How we turn an open question into a delivery plan",
          intro:
            "The engagement begins with the decision, collects only the evidence needed to make it, and ends with an implementable first step.",
          steps: advisoryProcess,
        }}
        bestFit={{
          heading: "When outside architecture guidance is useful",
          intro:
            "Advisory work fits best when an important decision is blocked by competing priorities, incomplete evidence, or limited specialist capacity.",
          scenarios: [
            "A migration, modernization, or compliance deadline requires a target architecture before implementation begins.",
            "The team is choosing among Amazon ECS, Amazon EKS, serverless services, virtual machines, or a hybrid approach.",
            "Cloud cost, reliability, security, and delivery concerns compete, but there is no agreed order of work.",
            "Leadership needs an independent current-state assessment and a roadmap that engineering can estimate.",
            "An existing architecture proposal needs review before a material investment or production cutover.",
            "Your engineers can implement the work but need specialist support for the highest-risk decisions.",
          ],
        }}
        proof={{
          heading: "Constraint-led architecture decisions",
          intro:
            "These engagements show how CodetoKloud connected customer constraints to practical target architectures. Their outcomes are specific to the work described in each case study.",
          items: [
            {
              href: "/monolithic-structure",
              title: "Clyk Studio: modernizing infrastructure without forcing a rewrite",
              body: "The architecture decision preserved the existing monolith while managed AWS services added Multi-AZ availability, scaling, controlled delivery, monitoring, identity protection, and recoverable data.",
              metrics: ["Existing application model preserved", "Multi-AZ target design"],
            },
            {
              href: "/kubernetes-compliance-platform-case-study",
              title: "On-premise RKE2 for GPU and compliance targets",
              body: "CodetoKloud designed a four-node RKE2 platform with two control-plane nodes, two GPU workers, GitOps, distributed storage, backup capabilities, self-hosted observability, and detailed operating runbooks.",
              metrics: ["4-node RKE2 platform", "2 GPU worker nodes"],
            },
          ],
        }}
        cta={{
          heading: "Bring one hard cloud decision into focus",
          body: "Share the decision, current architecture, constraints, and deadline. We will help define the evidence and next step needed for a useful advisory engagement.",
          label: "Book an architecture decision review",
        }}
      />

      <TechDisplaySection techDisplaySection={consultingTechStack} />
      <FaqSection
        items={advisoryFaqs}
        heading="Cloud and DevOps advisory FAQs"
        description="Answers about deliverables, architecture reviews, implementation support, prioritization, and timing."
      />
      <RelatedServices currentPath="/consulting-and-advisory" />
    </div>
  );
};

export default ConsultingAndAdvisory;
