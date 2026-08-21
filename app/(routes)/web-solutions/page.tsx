import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";

export const metadata = pageMetadata("/web-solutions");

const deliverables = [
  {
    title: "Product Scope and Technical Plan",
    body: "We turn business goals, user roles, integrations, and constraints into a prioritized scope, application architecture, delivery plan, and acceptance criteria.",
  },
  {
    title: "Responsive User Experience",
    body: "We design clear flows and responsive interfaces for the devices and tasks that matter, with reusable components and accessibility considered from the start.",
  },
  {
    title: "Front-End and Back-End Engineering",
    body: "We build maintainable application code for the interface, server logic, data access, authentication, and administrative workflows required by the product.",
  },
  {
    title: "APIs and Business Integrations",
    body: "We connect approved payment, identity, CRM, analytics, messaging, and internal systems through documented interfaces and controlled error handling.",
  },
  {
    title: "Performance, Accessibility, and Technical SEO",
    body: "We test loading behavior, responsive layouts, semantic markup, keyboard access, metadata, crawlability, and Core Web Vitals where they affect the experience.",
  },
  {
    title: "AWS Deployment and Handover",
    body: "We set up deployment automation, hosting, observability, environment documentation, and a practical handoff so your team retains control of the code and infrastructure.",
  },
];

const processSteps = [
  {
    title: "Define users, outcomes, and scope",
    body: "We map the primary users, jobs, integrations, content, constraints, and business measures, then separate launch requirements from later ideas.",
  },
  {
    title: "Validate the experience and architecture",
    body: "We review user flows, interface direction, data model, security needs, and AWS architecture before investing in full implementation.",
  },
  {
    title: "Build in reviewable increments",
    body: "We deliver working slices that can be reviewed against acceptance criteria, with code quality, automated checks, and deployment needs addressed throughout the build.",
  },
  {
    title: "Launch, measure, and transfer",
    body: "We complete production checks, monitor the release, document the system, and prioritize follow-up improvements using real usage and performance evidence.",
  },
];

const webFaqs = [
  {
    question: "What types of web products does CodetoKloud build?",
    answer:
      "CodetoKloud builds customer portals, SaaS applications, internal operations tools, dashboards, API-backed websites, and commerce experiences. The recommended architecture depends on user roles, data, integrations, traffic, compliance needs, and the team that will operate it.",
  },
  {
    question: "Can you improve an existing web application instead of rebuilding it?",
    answer:
      "Yes. We first identify whether the main constraint is performance, usability, maintainability, security, search visibility, or infrastructure. We can then improve targeted areas, modernize the application in stages, or recommend a rebuild when incremental work would preserve too much risk.",
  },
  {
    question: "Do you include technical SEO and accessibility?",
    answer:
      "We include semantic page structure, crawlable content, metadata support, responsive behavior, keyboard access, and performance checks in the build. Broader content strategy, ongoing search optimization, and formal accessibility certification require a defined scope.",
  },
  {
    question: "Who owns the code and AWS infrastructure?",
    answer:
      "The engagement is designed so your organization retains control of the source code, cloud accounts, deployment configuration, and project documentation. We agree on repository access, environments, and handoff responsibilities at the start.",
  },
  {
    question: "What happens after the web application launches?",
    answer:
      "We can provide a structured warranty period, planned enhancements, operational support, or a documented handoff to your team. The right model depends on release frequency, internal ownership, response expectations, and the complexity of the system.",
  },
];

export default function WebSolutionsPage() {
  const webTechStack = {
    heading: "Modern web application technologies",
    description:
      "We select a maintainable stack around the product, team, integrations, performance needs, and AWS operating model.",
    marqueeItems: [
      "/Images/PNGSS/typescript-logo.png",
      "/Images/PNGSS/react-logo.png",
      "/Images/PNGSS/next-js-logo.png",
      "/Images/PNGSS/node-js-logo.png",
      "/Images/PNGSS/GraphQL-logo.png",
      "/Images/PNGSS/tailwind-css-logo.png",
      "/Images/PNGSS/aws.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/web-solutions"]} />
      <HeroSection
        title="Custom Web Application Development on AWS"
        description="CodetoKloud designs and builds customer portals, SaaS products, internal tools, and high-performance websites with modern TypeScript frameworks and production-ready AWS infrastructure."
        imageSrc="/services/service-visuals/web-application.svg"
        imageAlt="Web application architecture connecting users, edge security, application services, APIs, and data on AWS"
        buttonText="Discuss a web application"
        buttonLink="/contact"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What is custom web application development?",
          answer:
            "Custom web application development is the design and engineering of browser-based software around specific users, workflows, data, and business rules. Unlike a template website, the interface, integrations, application logic, and infrastructure are built to support how the organization actually operates.",
          detail:
            "CodetoKloud combines product discovery, UI and UX design, full-stack engineering, AWS deployment, and release automation. The result is a web product your team can own, operate, and improve after launch.",
        }}
        deliverables={{
          heading: "What a web application engagement includes",
          intro:
            "The scope connects user experience, software engineering, cloud operations, and a practical ownership model.",
          items: deliverables,
        }}
        process={{
          heading: "How we take a web product to launch",
          intro:
            "Each stage produces something your stakeholders can review before the next level of investment.",
          steps: processSteps,
        }}
        bestFit={{
          heading: "When custom development is the right fit",
          intro:
            "A custom build is most valuable when the product needs more than a standard marketing template or a collection of plug-ins.",
          scenarios: [
            "You are launching a SaaS product, customer portal, or internal application with specific user roles and workflows.",
            "A slow or fragile legacy application is limiting releases, integrations, or customer experience.",
            "The product needs to connect business systems, APIs, payments, identity, or regulated data.",
            "Technical SEO, accessibility, or Core Web Vitals are being blocked by the current platform.",
            "You want ownership of the code and AWS infrastructure instead of long-term platform lock-in.",
          ],
        }}
        cta={{
          heading: "Turn the product idea into a buildable plan",
          body: "Share the users, workflows, current platform, integrations, and launch goal. We will help you identify the right first scope and the main technical decisions.",
          label: "Book a product review",
        }}
      />

      <TechDisplaySection techDisplaySection={webTechStack} />
      <FaqSection
        items={webFaqs}
        heading="Web application development FAQs"
        description="Answers about scope, modernization, ownership, technical SEO, accessibility, and post-launch support."
      />
      <RelatedServices currentPath="/web-solutions" />
    </div>
  );
}
