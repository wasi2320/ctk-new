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

export const metadata = pageMetadata("/ai");

const deliverables = [
  {
    title: "AI Use Case and Feasibility Review",
    body: "We define the workflow, users, source data, quality threshold, risks, and business measure before recommending a model or platform.",
  },
  {
    title: "Knowledge and Retrieval Systems",
    body: "We build retrieval pipelines that connect approved business content to an AI application, with source attribution and access rules designed around your data.",
  },
  {
    title: "Workflow Automation",
    body: "We connect AI to existing APIs and business systems for bounded tasks such as document intake, classification, summarization, and assisted decision support.",
  },
  {
    title: "Model Integration and Evaluation",
    body: "We compare model options against representative examples, then track response quality, latency, failure modes, and operating cost before launch.",
  },
  {
    title: "Security and Guardrails",
    body: "We design authentication, authorization, data handling, prompt controls, output checks, audit logs, and human review for higher-risk actions.",
  },
  {
    title: "Production Deployment on AWS",
    body: "We deploy the application with repeatable infrastructure, monitoring, release automation, and clear operating documentation for your team.",
  },
];

const processSteps = [
  {
    title: "Frame one valuable workflow",
    body: "We identify the user, current process, expected output, approval boundary, and measurable result. A focused first use case creates a clearer path to production.",
  },
  {
    title: "Validate data and technical risk",
    body: "We review data access, privacy, integration points, model choices, expected usage, and evaluation criteria before committing to a build.",
  },
  {
    title: "Build and evaluate a working slice",
    body: "We implement the smallest end-to-end workflow and test it against realistic cases, including known failure scenarios and unacceptable outputs.",
  },
  {
    title: "Productionize and transfer",
    body: "We add security, monitoring, deployment automation, cost controls, documentation, and a handoff plan so the system can be operated responsibly.",
  },
];

const aiFaqs = [
  {
    question: "What types of AI systems does CodetoKloud build?",
    answer:
      "CodetoKloud builds focused AI applications such as internal knowledge assistants, document processing workflows, classification and extraction services, and AI features within existing software. We start with a defined business workflow and only recommend AI when the data, quality threshold, and operating model support it.",
  },
  {
    question: "How do you choose an AI model or platform?",
    answer:
      "We compare suitable models using representative business examples, required accuracy, latency, privacy, integration effort, and operating cost. The decision is based on measured fit for the use case rather than a preferred vendor or the largest available model.",
  },
  {
    question: "Can sensitive business data remain in our AWS environment?",
    answer:
      "Yes, when the selected architecture and model option support that requirement. We can keep application data, retrieval indexes, logs, and supporting services in your AWS account, apply least-privilege access, and document any external model endpoints that remain in the data path.",
  },
  {
    question: "What separates an AI prototype from a production system?",
    answer:
      "A production AI system needs repeatable evaluations, access controls, output guardrails, monitoring, cost limits, failure handling, deployment automation, and an owner for ongoing review. We include those operating requirements in the design instead of treating the model response as the finished product.",
  },
  {
    question: "What do you need from us to assess an AI use case?",
    answer:
      "A useful first review needs the current workflow, intended users, representative inputs and outputs, relevant data sources, privacy constraints, integration points, and a measurable definition of success. We can help refine those inputs during discovery.",
  },
];

export default function AiPage() {
  const aiTechStack = {
    heading: "AI platforms selected for the use case",
    description:
      "We choose model, retrieval, machine learning, and AWS services after evaluating data, quality, privacy, latency, and cost requirements.",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/openai-logo.png",
      "/Images/PNGSS/langchain-logo.png",
      "/Images/PNGSS/pytorch-logo.png",
      "/Images/PNGSS/tensorflow-logo.png",
      "/Images/PNGSS/scikit-learn-logo.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/ai"]} />
      <HeroSection
        title="Production AI and GenAI Engineering on AWS"
        description="CodetoKloud turns a defined business workflow into a secure AI application, from data preparation and retrieval to model integration, evaluation, deployment, and monitoring."
        imageSrc="/services/service-visuals/ai-engineering.svg"
        imageAlt="Production AI engineering workflow from business data to evaluated and monitored output"
        buttonText="Plan an AI use case"
        buttonLink="/contact"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What does an AI engineering partner deliver?",
          answer:
            "AI engineering turns a defined workflow into a dependable software system. That includes preparing data, selecting and evaluating models, connecting business systems, controlling access, monitoring quality, and operating the application after launch.",
          detail:
            "CodetoKloud focuses on bounded use cases with a clear user, approved data, measurable quality criteria, and a responsible human decision point where one is needed. We will also say when rules-based automation or better search is a more reliable fit than generative AI.",
        }}
        deliverables={{
          heading: "AI engineering deliverables",
          intro:
            "Each engagement connects the model to the data, controls, integrations, and operating practices required for production use.",
          items: deliverables,
        }}
        process={{
          heading: "From use case to production",
          intro:
            "The process is designed to test value and risk early, before a larger implementation commitment.",
          steps: processSteps,
        }}
        bestFit={{
          heading: "When this service is a good fit",
          intro:
            "AI engineering is most useful when the problem is specific and the surrounding workflow can be measured.",
          scenarios: [
            "Your team spends significant time reviewing, routing, or summarizing repeatable business information.",
            "Users need answers from approved internal documents with permissions and source references.",
            "You want to add an AI feature to an existing SaaS, web, or mobile product.",
            "Sensitive or regulated data requires clear access controls, logging, and human oversight.",
            "An existing prototype works in a demo but lacks evaluation, monitoring, and a safe production path.",
          ],
        }}
        proof={{
          heading: "Relevant AI delivery example",
          intro:
            "A production example combining an AI service with cloud infrastructure, delivery automation, and observability.",
          items: [
            {
              href: "/aws-scalable-secure",
              title: "AI call protection on Kubernetes",
              body: "CodetoKloud deployed a Python-based scam call detection service alongside a highly available VoIP platform, with GitOps delivery and operational monitoring.",
              metrics: ["50% faster releases", "40% faster issue resolution"],
            },
          ],
        }}
        cta={{
          heading: "Start with one AI workflow worth testing",
          body: "Bring the process, sample inputs, desired output, and constraints. We will help you identify the fastest responsible way to validate the use case.",
          label: "Book an AI use case review",
        }}
      />

      <TechDisplaySection techDisplaySection={aiTechStack} />
      <RelatedInsights
        heading="Use AI in delivery and operations without losing control"
        intro="These guides cover where AI changes DevOps work, how to review generated infrastructure, and which security and production controls still need deterministic enforcement."
        items={aiDevopsInsights}
      />
      <FaqSection
        items={aiFaqs}
        heading="AI engineering FAQs"
        description="Practical answers about use cases, model selection, data privacy, and production readiness."
      />
      <RelatedServices currentPath="/ai" />
    </div>
  );
}
