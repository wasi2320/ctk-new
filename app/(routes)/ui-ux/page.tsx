import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";

export const metadata = pageMetadata("/ui-ux");

const deliverables = [
  {
    title: "Discovery and Experience Review",
    body: "We align business goals, user groups, product constraints, existing evidence, and the decisions the design must help the team make.",
  },
  {
    title: "User Journeys and Task Flows",
    body: "We map how each priority user reaches an outcome, including decisions, permissions, content, errors, and handoffs that can make the journey succeed or fail.",
  },
  {
    title: "Information Architecture and Wireframes",
    body: "We organize navigation, page hierarchy, content, and screen structure before visual detail makes changes slower and more expensive.",
  },
  {
    title: "Interactive Prototypes",
    body: "We create realistic prototypes for important journeys so stakeholders and representative users can respond to the behavior, not only static screens.",
  },
  {
    title: "Visual Design and Component System",
    body: "We define reusable patterns for typography, color, layout, controls, states, and responsive behavior to keep the product coherent as it grows.",
  },
  {
    title: "Validation and Engineering Handoff",
    body: "We document behavior, responsive states, accessibility considerations, assets, and acceptance details, then work with engineers to resolve implementation questions.",
  },
];

const processSteps = [
  {
    title: "Align on the product decision",
    body: "We clarify the users, business outcome, constraints, existing evidence, and the specific uncertainty the design work needs to reduce.",
  },
  {
    title: "Map the current and target journey",
    body: "We examine how the task works today, identify friction and missing information, then prioritize the moments that matter most to the user and the business.",
  },
  {
    title: "Prototype the riskiest flows",
    body: "We move from low-detail structure to an interactive prototype, focusing first on complex permissions, decisions, data entry, and responsive behavior.",
  },
  {
    title: "Validate, refine, and hand off",
    body: "We review the design with stakeholders and representative users when available, document the system, and stay involved as engineering turns it into working software.",
  },
];

const uiUxFaqs = [
  {
    question: "What is included in a UI and UX design engagement?",
    answer:
      "A typical engagement includes discovery, user and stakeholder input, journey maps, task flows, information architecture, wireframes, interactive prototypes, visual design, reusable components, responsive states, and engineering handoff. The exact mix depends on the product decision and evidence already available.",
  },
  {
    question: "Can you redesign an existing product without rebuilding everything?",
    answer:
      "Yes. We can assess the current experience, identify the journeys creating the most user or business friction, and produce a staged design plan. This lets engineering improve priority areas while preserving sound parts of the existing product.",
  },
  {
    question: "Do you test designs with users?",
    answer:
      "We can plan and facilitate usability sessions with representative users when access, recruitment, and scope support it. When direct research is limited, we make assumptions explicit, use available support and analytics evidence, and identify what should be validated after release.",
  },
  {
    question: "Do you create design systems?",
    answer:
      "Yes. We can create or extend a practical component system covering foundations, reusable interface patterns, responsive behavior, states, accessibility notes, and usage guidance. The depth should match the product size and the engineering team that will maintain it.",
  },
  {
    question: "How do designers work with our developers?",
    answer:
      "We provide inspectable design files, component behavior, assets, responsive states, and acceptance details, then review implementation questions with the engineering team. Early technical input helps avoid designs that are expensive or impractical to build.",
  },
];

export default function UiUxPage() {
  const uiUxTechStack = {
    heading: "Design, prototyping, and handoff tools",
    description:
      "Tools support the process, but the engagement is organized around user evidence, product decisions, reusable patterns, and a buildable handoff.",
    marqueeItems: [
      "/Images/PNGSS/Figma.png",
      "/Images/PNGSS/sketch-logo.png",
      "/Images/PNGSS/Illustrator-Logo.png",
      "/Images/PNGSS/photoshop-logo.png",
      "/Images/PNGSS/After-Effects-Logo.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/ui-ux"]} />
      <HeroSection
        title="UI and UX Design for SaaS, Web, and Mobile Products"
        description="CodetoKloud turns complex product workflows into clear, testable interfaces through user journeys, information architecture, prototypes, reusable components, and an engineering-ready handoff."
        imageSrc="/services/service-visuals/ui-ux-design.svg"
        imageAlt="UI and UX design workflow from discovery and journey mapping to prototype, validation, and engineering handoff"
        buttonText="Review a product experience"
        buttonLink="/contact"
      />

      <ServiceBuyerSections
        definition={{
          heading: "What is UI and UX design?",
          answer:
            "User experience design defines how people understand and complete a task within a product. User interface design defines the visual controls, layout, content, states, and responsive behavior that support that journey. Strong product design connects both to a measurable user and business outcome.",
          detail:
            "CodetoKloud designs SaaS, web, and mobile experiences in close connection with engineering. We focus on reducing uncertainty, testing important flows early, and delivering reusable interface decisions that can be implemented and maintained.",
        }}
        deliverables={{
          heading: "UI and UX design deliverables",
          intro:
            "The work moves from evidence and structure to a validated interface and a clear implementation handoff.",
          items: deliverables,
        }}
        process={{
          heading: "A design process built around decisions",
          intro:
            "The goal is not to produce more screens. It is to resolve the highest-risk product questions before they become expensive code.",
          steps: processSteps,
        }}
        bestFit={{
          heading: "When product design support is useful",
          intro:
            "The engagement works best when the team has a real workflow or product decision to improve, not only a request for visual polish.",
          scenarios: [
            "Users struggle to complete an important workflow or require frequent support to understand the product.",
            "A SaaS product has grown feature by feature and now lacks a coherent navigation or component system.",
            "A new web or mobile product needs validated flows before full engineering begins.",
            "The interface must serve multiple roles, permissions, devices, or complex data states.",
            "Design files exist, but engineers lack responsive behavior, states, accessibility notes, or reusable specifications.",
          ],
        }}
        cta={{
          heading: "Start with the product journey creating the most friction",
          body: "Bring the workflow, user group, existing product, known evidence, and business goal. We will help you define the design question and the right validation path.",
          label: "Book a UX review",
        }}
      />

      <TechDisplaySection techDisplaySection={uiUxTechStack} />
      <FaqSection
        items={uiUxFaqs}
        heading="UI and UX design FAQs"
        description="Answers about redesigns, user validation, design systems, deliverables, and engineering handoff."
      />
      <RelatedServices currentPath="/ui-ux" />
    </div>
  );
}
