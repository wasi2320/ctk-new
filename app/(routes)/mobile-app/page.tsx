import HeroSection from "@/app/components/HeroSection";
import JsonLd from "@/app/components/JsonLd";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ServiceBuyerSections from "@/app/components/sections/ServiceBuyerSections";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import { pageMetadata } from "@/lib/page-metadata";
import { coreServiceSchemas } from "@/lib/structured-data";

export const metadata = pageMetadata("/mobile-app");

const deliverables = [
  {
    title: "Product Scope and Platform Decision",
    body: "We define the users, core journeys, device needs, integrations, launch scope, and criteria for choosing native iOS and Android or a cross-platform approach.",
  },
  {
    title: "Mobile UX and Interactive Prototype",
    body: "We design touch-first flows, navigation, states, and prototypes so users and stakeholders can validate the experience before full implementation.",
  },
  {
    title: "iOS and Android Engineering",
    body: "We build maintainable native or cross-platform application code, including offline behavior, device permissions, notifications, and platform-specific requirements where needed.",
  },
  {
    title: "Cloud Backend and API Integration",
    body: "We connect the app to authentication, application APIs, data services, file handling, notifications, and approved third-party systems on scalable AWS infrastructure.",
  },
  {
    title: "Quality, Security, and Observability",
    body: "We test supported devices, network conditions, critical flows, access controls, error handling, analytics events, and crash visibility before release.",
  },
  {
    title: "Store Release and Operational Handover",
    body: "We prepare release builds, support App Store and Google Play submission, document environments, and define ownership for updates, monitoring, and support.",
  },
];

const processSteps = [
  {
    title: "Define the mobile use case",
    body: "We identify the primary users, repeated mobile moments, device capabilities, data sensitivity, integration needs, and the smallest release that can prove value.",
  },
  {
    title: "Choose native or cross-platform",
    body: "We compare performance, platform-specific features, delivery speed, team skills, expected lifespan, and maintenance cost before selecting the implementation path.",
  },
  {
    title: "Prototype and build in working slices",
    body: "We validate critical journeys, then implement the app and backend together so authentication, data, notifications, and failure states are tested end to end.",
  },
  {
    title: "Release and establish ownership",
    body: "We complete device testing, support store submission, monitor the first release, and provide documentation and a prioritized post-launch plan.",
  },
];

const mobileFaqs = [
  {
    question: "Should we build native apps or use a cross-platform framework?",
    answer:
      "Native Swift and Kotlin are a strong fit when the product depends heavily on platform-specific capabilities, maximum performance, or separate platform roadmaps. React Native or Flutter can reduce duplicate implementation when iOS and Android share most features. We compare user experience, device features, team skills, schedule, and long-term maintenance before recommending either path.",
  },
  {
    question: "Can CodetoKloud build the backend as well as the mobile app?",
    answer:
      "Yes. We can design and build the APIs, authentication, data services, file handling, notifications, deployment pipeline, and AWS infrastructure the application needs. We can also integrate an existing backend when its interfaces and security model are suitable.",
  },
  {
    question: "Do you support App Store and Google Play releases?",
    answer:
      "Yes. We can prepare signed release builds, required technical assets, store configuration, test tracks, and submission support. Your organization should own the store accounts so it retains control of publishing, billing, and future updates.",
  },
  {
    question: "How do you test a mobile application?",
    answer:
      "Testing is based on the supported device and operating system matrix, critical user journeys, permissions, network loss, authentication, API failures, notifications, and release builds. The exact mix of automated and manual testing depends on product risk and scope.",
  },
  {
    question: "Can you modernize an existing mobile app?",
    answer:
      "Yes. We can assess crash patterns, performance, usability, outdated dependencies, release processes, backend constraints, and platform requirements. The result may be a staged modernization plan, targeted remediation, or a rebuild when the current foundation prevents safe progress.",
  },
];

export default function MobileAppPage() {
  const mobileTechStack = {
    heading: "Mobile technologies chosen for long-term fit",
    description:
      "We select native, cross-platform, backend, and release tooling around device requirements, product risk, team ownership, and expected maintenance.",
    marqueeItems: [
      "/Images/PNGSS/swift-logo.png",
      "/Images/PNGSS/kotlin-logo.png",
      "/Images/PNGSS/react-native-logo.png",
      "/Images/PNGSS/flutter-logo.png",
      "/Images/PNGSS/firebase-logo.png",
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/app-store-logo.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/mobile-app"]} />
      <HeroSection
        title="Mobile App Development for iOS and Android"
        description="CodetoKloud designs and builds native and cross-platform mobile products with clear user journeys, secure APIs, scalable AWS backends, release automation, and an ownership plan for what happens after launch."
        imageSrc="/services/service-visuals/mobile-application.svg"
        imageAlt="Mobile application system connecting iOS and Android apps to authentication, APIs, cloud services, and data"
        buttonText="Discuss a mobile product"
        buttonLink="/contact"
      />

      <div className="-mt-2 mb-8 px-4 md:px-36">
        <TrustBadge />
      </div>

      <ServiceBuyerSections
        definition={{
          heading: "What does a mobile app development partner do?",
          answer:
            "A mobile app development partner turns a product goal into software that works on supported phones and tablets. The work includes product scope, mobile UX, native or cross-platform engineering, backend APIs, device testing, store release, analytics, and ongoing operations.",
          detail:
            "CodetoKloud treats the app, cloud backend, release pipeline, and support model as one product. We select the implementation approach after reviewing platform-specific features, performance needs, delivery speed, internal skills, and the expected life of the application.",
        }}
        deliverables={{
          heading: "Mobile application deliverables",
          intro:
            "A successful mobile launch needs more than interface screens. These deliverables cover the product, backend, release path, and operating model.",
          items: deliverables,
        }}
        process={{
          heading: "How we move from concept to store release",
          intro:
            "The process validates the platform decision and critical user journeys before the largest engineering investment.",
          steps: processSteps,
        }}
        bestFit={{
          heading: "When a dedicated mobile app makes sense",
          intro:
            "A mobile app should earn its place on the device by making a repeated task faster, more useful, or possible away from a browser.",
          scenarios: [
            "Customers or employees perform an important workflow frequently while away from a desktop.",
            "The product needs notifications, camera access, location, offline behavior, or other device capabilities.",
            "You need one product experience across iOS, Android, APIs, authentication, and cloud services.",
            "An existing app has reliability, usability, performance, or release problems that are limiting adoption.",
            "Your team needs a documented build and handoff instead of an opaque outsourced codebase.",
          ],
        }}
        cta={{
          heading: "Make the first mobile release focused and testable",
          body: "Share the users, core journey, device capabilities, existing systems, and launch target. We will help you define the smallest release that can validate the product direction.",
          label: "Book a mobile product review",
        }}
      />

      <TechDisplaySection techDisplaySection={mobileTechStack} />
      <FaqSection
        items={mobileFaqs}
        heading="Mobile app development FAQs"
        description="Answers about platform choice, cloud backends, testing, store releases, and modernization."
      />
      <RelatedServices currentPath="/mobile-app" />
    </div>
  );
}
