/**
 * Centralized JSON-LD structured data for GEO (Generative Engine Optimization).
 *
 * Verbatim business facts live here so every schema stays consistent. Placeholder
 * values are marked with `TODO:`, fill these in and they propagate everywhere.
 */

export const SITE_URL = "https://codetokloud.com";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const HOME_PAGE_ID = `${SITE_URL}/#webpage`;
const HOME_SERVICE_ID = `${SITE_URL}/#service`;
const HOME_FAQ_ID = `${SITE_URL}/#faq`;

/**
 * Sitewide Organization schema. Rendered once in the root layout.
 * `sameAs` links are placeholders, fill in the real profile URLs.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "CodetoKloud",
  legalName: "CodetoKloud Inc",
  url: SITE_URL,
  telephone: "+1-309-590-3617",
  priceRange: "$$",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/Images/logo.svg`,
  },
  description:
    "CodetoKloud is a US-registered IT consulting company and AWS Advanced Tier Partner providing cloud infrastructure (AWS), DevOps, AI automation, full-stack development, and compliance services (SOC 2, HIPAA, PCI DSS).",
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "9165",
    addressLocality: "Naperville",
    addressRegion: "IL",
    postalCode: "60567",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.7508,
    longitude: -88.1535,
  },
  areaServed: "US",
  // Aggregate of 9 verified Clutch reviews (see utils/data/testimonials.ts).
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "9",
    bestRating: "5",
    worstRating: "1",
  },
  knowsAbout: [
    "AWS cloud infrastructure",
    "DevOps",
    "AI automation",
    "Full-stack development",
    "SOC 2 compliance",
    "HIPAA compliance",
    "PCI DSS compliance",
  ],
  sameAs: [
    "https://clutch.co/profile/codetokloud",
    "https://partners.amazonaws.com/partners/001aq000008YFg0AAG/",
    "https://www.linkedin.com/company/codetokloud-inc/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+1-309-590-3617",
    email: "info@codetokloud.com",
    areaServed: "US",
    availableLanguage: "English",
  },
};

/** Site identity for search engines and generative answer systems. */
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "CodetoKloud",
  description:
    "AWS cloud, DevOps, Kubernetes, FinOps, AI automation, and compliance engineering services from CodetoKloud.",
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
  copyrightHolder: { "@id": ORG_ID },
};

/** The canonical homepage and its relationship to the site and primary service. */
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": HOME_PAGE_ID,
  url: `${SITE_URL}/`,
  name: "AWS DevOps and Kubernetes Consulting | CodetoKloud",
  description:
    "CodetoKloud is an AWS Advanced Tier Services Partner in Naperville providing DevOps, Kubernetes, cloud migration, FinOps, and compliance engineering across the United States.",
  inLanguage: "en-US",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  mainEntity: { "@id": HOME_SERVICE_ID },
  hasPart: { "@id": HOME_FAQ_ID },
};

const homeServiceItems = [
  {
    name: "AWS architecture and migration",
    description:
      "AWS landing zones, networks, data services, backups, and tested cloud migration plans.",
    path: "/cloud-service",
  },
  {
    name: "DevOps and CI/CD",
    description:
      "Automated build, test, release, rollback, infrastructure, and GitOps workflows.",
    path: "/devops",
  },
  {
    name: "Kubernetes and Amazon EKS",
    description:
      "Amazon EKS design, migration, security, operations, observability, autoscaling, and cost controls.",
    path: "/kubernetes",
  },
  {
    name: "Security and compliance engineering",
    description:
      "Technical cloud controls and evidence for SOC 2, HIPAA, and PCI DSS programs.",
    path: "/security-and-compliance",
  },
  {
    name: "AWS FinOps",
    description:
      "AWS cost visibility, tagging, rightsizing, commitment planning, and cost-aware architecture.",
    path: "/finops",
  },
  {
    name: "AI workflows on AWS",
    description:
      "Secure AI applications and workflow automation built around defined business use cases and measurable outcomes.",
    path: "/ai",
  },
] as const;

/** Homepage service catalog, limited to services visibly presented on the page. */
export const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": HOME_SERVICE_ID,
  name: "AWS Cloud, DevOps, and Kubernetes Consulting",
  serviceType: "Cloud infrastructure and software delivery consulting",
  url: `${SITE_URL}/`,
  description:
    "CodetoKloud designs, migrates, secures, and operates AWS cloud infrastructure for companies across the United States.",
  provider: { "@id": ORG_ID },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CodetoKloud cloud engineering services",
    itemListElement: homeServiceItems.map((item) => ({
      "@type": "Offer",
      url: `${SITE_URL}${item.path}`,
      itemOffered: {
        "@type": "Service",
        name: item.name,
        description: item.description,
        url: `${SITE_URL}${item.path}`,
        provider: { "@id": ORG_ID },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
      },
    })),
  },
};

export interface BreadcrumbItem {
  name: string;
  /** Absolute URL */
  url: string;
}

/** Builds BreadcrumbList schema from an ordered list of crumbs. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ReviewInput {
  quote: string;
  name: string;
}

/** Builds Review schema items for client testimonials of the Organization. */
export function reviewsSchema(items: ReviewInput[]) {
  return items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: item.quote,
    author: { "@type": "Person", name: item.name },
    itemReviewed: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "CodetoKloud",
      url: SITE_URL,
    },
  }));
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  /** Route path, e.g. "/devops" */
  path: string;
  /** schema.org serviceType label */
  serviceType: string;
}

/** Builds a Service schema tied back to the Organization as provider. */
export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "CodetoKloud",
      url: SITE_URL,
    },
    areaServed: "US",
  };
}

export interface OfferItem {
  name: string;
  description: string;
}

/** Builds a Service + OfferCatalog schema for engagement models / service offers. */
export function offerCatalogSchema(offers: OfferItem[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#offers`,
    name: "CodetoKloud Consulting Engagements",
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "CodetoKloud",
      url: SITE_URL,
    },
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consulting engagement models",
      itemListElement: offers.map((o) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: o.name,
          description: o.description,
        },
      })),
    },
  };
}

export interface BlogPostingInput {
  title: string;
  description: string;
  slug: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  categoryName?: string;
}

/** Builds a BlogPosting schema for an individual article. */
export function blogPostingSchema({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  categoryName,
}: BlogPostingInput) {
  const url = `${SITE_URL}/blogs/${slug}`;
  const normalizedImage = image
    ? /^https?:\/\//i.test(image)
      ? image
      : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    ...(normalizedImage ? { image: normalizedImage } : {}),
    datePublished,
    dateModified: dateModified || datePublished,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "CodetoKloud",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "CodetoKloud",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Images/logo.svg`,
      },
    },
    ...(categoryName ? { articleSection: categoryName } : {}),
  };
}

export interface CaseStudyInput {
  title: string;
  description: string;
  /** Route path, e.g. "/ecs-pr-preview-environments" */
  path: string;
  image?: string;
}

/** Builds an Article schema for a case study, authored by the Organization. */
export function caseStudySchema({
  title,
  description,
  path,
  image,
}: CaseStudyInput) {
  const url = `${SITE_URL}${path}`;
  const normalizedImage = image
    ? /^https?:\/\//i.test(image)
      ? image
      : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    ...(normalizedImage ? { image: normalizedImage } : {}),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "CodetoKloud",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "CodetoKloud",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Images/logo.svg`,
      },
    },
  };
}

export interface LocalBusinessInput {
  /** City label, e.g. "Naperville, IL" */
  city: string;
  /** Route path, e.g. "/devops-consulting-naperville-il" */
  path: string;
  description: string;
}

/**
 * Builds a LocalBusiness (ProfessionalService) schema for a local landing page,
 * with areaServed set to the target city + Illinois, tied to the Organization.
 */
export function localBusinessSchema({
  city,
  path,
  description,
}: LocalBusinessInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}${path}#localbusiness`,
    name: `CodetoKloud, DevOps & Kubernetes Consulting in ${city}`,
    url: `${SITE_URL}${path}`,
    description,
    telephone: "+1-309-590-3617",
    priceRange: "$$",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "9165",
      addressLocality: "Naperville",
      addressRegion: "IL",
      postalCode: "60567",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.7508,
      longitude: -88.1535,
    },
    areaServed: [
      { "@type": "City", name: city },
      { "@type": "State", name: "Illinois" },
    ],
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Builds a FAQPage schema from question/answer pairs. */
export function faqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Homepage FAQ source of truth. The homepage UI imports this same array so the
 * visible content and structured data always remain identical.
 */
export const homepageFaqItems = [
  {
    question: "What does CodetoKloud do?",
    answer:
      "CodetoKloud designs, migrates, secures, and operates AWS cloud infrastructure. Core services include DevOps and CI/CD automation, Kubernetes and Amazon EKS, cloud migration, FinOps, and technical controls for SOC 2, HIPAA, and PCI DSS programs.",
  },
  {
    question: "Is CodetoKloud an AWS Partner?",
    answer:
      "Yes. CodetoKloud is an AWS Advanced Tier Services Partner based in Naperville, Illinois.",
  },
  {
    question: "Which companies does CodetoKloud work with?",
    answer:
      "CodetoKloud works with SaaS and ISV teams, healthcare companies, fintech and payments businesses, and growing digital platforms that need reliable cloud infrastructure.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "Start with a focused 30-minute review of your cloud, delivery, Kubernetes, cost, or compliance concern. CodetoKloud confirms fit within one business day and identifies three practical priorities before a larger engagement is proposed.",
  },
  {
    question: "Does CodetoKloud work across the United States?",
    answer:
      "Yes. CodetoKloud is headquartered in Naperville, Illinois and serves clients across the United States through remote and collaborative delivery.",
  },
] as const satisfies readonly FaqItem[];

/** FAQ entity for the visible homepage FAQ section. */
export const homeFaqSchema = {
  ...faqPageSchema(homepageFaqItems),
  "@id": HOME_FAQ_ID,
  url: `${SITE_URL}/#homepage-faq`,
  isPartOf: { "@id": HOME_PAGE_ID },
  inLanguage: "en-US",
};

/** Connected homepage entities emitted together in one server-rendered script. */
export const homepageSchemas = [
  webSiteSchema,
  homePageSchema,
  homeServiceSchema,
  homeFaqSchema,
];

/**
 * Service schema definitions for each core service, keyed by route path.
 * Descriptions use only verbatim business facts.
 */
export const coreServiceSchemas: Record<string, ReturnType<typeof serviceSchema>> = {
  "/cloud-service": serviceSchema({
    name: "Cloud Infrastructure (AWS)",
    serviceType: "Cloud infrastructure consulting",
    path: "/cloud-service",
    description:
      "AWS cloud infrastructure design, migration, and management from CodetoKloud, an AWS Advanced Tier Partner, delivering secure and scalable cloud platforms for US businesses.",
  }),
  "/devops": serviceSchema({
    name: "DevOps",
    serviceType: "DevOps consulting",
    path: "/devops",
    description:
      "DevOps consulting and implementation from CodetoKloud, CI/CD pipelines, automation, and infrastructure-as-code to accelerate delivery and improve reliability.",
  }),
  "/kubernetes": serviceSchema({
    name: "Kubernetes and Amazon EKS Consulting",
    serviceType: "Kubernetes and Amazon EKS consulting",
    path: "/kubernetes",
    description:
      "Kubernetes and Amazon EKS consulting from CodetoKloud, an AWS Advanced Tier Partner, EKS cluster design, GitOps with ArgoCD, Helm packaging, autoscaling, observability, cost optimization, and security hardening.",
  }),
  "/ai": serviceSchema({
    name: "AWS AI Automation and GenAI Development",
    serviceType: "AI workflow and application development",
    path: "/ai",
    description:
      "CodetoKloud designs and builds AI workflows on AWS for document processing, retrieval, and task automation, tied to trusted data, security requirements, and measurable business outcomes.",
  }),
  "/web-solutions": serviceSchema({
    name: "Custom Web Application Development on AWS",
    serviceType: "Web application development",
    path: "/web-solutions",
    description:
      "CodetoKloud builds SaaS products, customer portals, dashboards, APIs, and web applications with AWS infrastructure, CI/CD, accessibility, performance, and security in scope.",
  }),
  "/security-and-compliance": serviceSchema({
    name: "Compliance & Security",
    serviceType: "Cloud security and compliance consulting",
    path: "/security-and-compliance",
    description:
      "AWS security engineering and technical controls from CodetoKloud for SOC 2, HIPAA, and PCI DSS readiness, including IAM, encryption, logging, segmentation, and evidence workflows.",
  }),
  "/hipaa-compliance": serviceSchema({
    name: "AWS and Kubernetes Infrastructure for HIPAA-Regulated Workloads",
    serviceType: "HIPAA compliance consulting",
    path: "/hipaa-compliance",
    description:
      "CodetoKloud implements and documents encryption, access controls, audit logging, private networking, backup, and recovery safeguards for HIPAA-regulated workloads on AWS and Amazon EKS.",
  }),
  "/soc-2-compliance": serviceSchema({
    name: "SOC 2 Readiness and Technical Controls on AWS",
    serviceType: "SOC 2 compliance consulting",
    path: "/soc-2-compliance",
    description:
      "CodetoKloud assesses AWS control gaps, implements access, logging, change, monitoring, recovery, and encryption controls, and organizes technical evidence for independent SOC 2 audit review.",
  }),
  "/pci-dss-compliance": serviceSchema({
    name: "PCI DSS Readiness and Cardholder Data Controls on AWS",
    serviceType: "PCI DSS compliance consulting",
    path: "/pci-dss-compliance",
    description:
      "CodetoKloud helps teams define PCI scope, segment cardholder data environments on AWS, implement access, encryption, logging, and vulnerability controls, and prepare technical evidence for assessor review.",
  }),
  "/cloud-migration": serviceSchema({
    name: "AWS Cloud Migration",
    serviceType: "Cloud migration consulting",
    path: "/cloud-migration",
    description:
      "AWS cloud migration from CodetoKloud, an AWS Advanced Tier Partner, assessment, re-platforming, and low-downtime cutover to secure, scalable infrastructure on AWS.",
  }),
  "/finops": serviceSchema({
    name: "FinOps & AWS Cost Optimization",
    serviceType: "Cloud cost optimization (FinOps) consulting",
    path: "/finops",
    description:
      "FinOps and AWS cost optimization from CodetoKloud, cost visibility, forecasting, rightsizing, Savings Plans, and cost-aware architecture to keep cloud spend predictable.",
  }),
  "/consulting-and-advisory": serviceSchema({
    name: "Cloud Consulting & Advisory",
    serviceType: "Cloud and DevOps consulting and advisory",
    path: "/consulting-and-advisory",
    description:
      "Cloud and DevOps consulting and advisory from CodetoKloud, an AWS Advanced Tier Partner, architecture reviews, roadmaps, and hands-on guidance for teams building on AWS.",
  }),
  "/mobile-app": serviceSchema({
    name: "Custom Mobile App Development with AWS",
    serviceType: "Mobile application development",
    path: "/mobile-app",
    description:
      "CodetoKloud plans and builds native and cross-platform mobile applications with product discovery, accessible UX, secure AWS backends, analytics, launch support, and CI/CD.",
  }),
  "/ui-ux": serviceSchema({
    name: "UI/UX Design for SaaS, Web, and Mobile",
    serviceType: "UI/UX design",
    path: "/ui-ux",
    description:
      "CodetoKloud turns complex product workflows into clear user journeys, accessible interfaces, tested prototypes, and practical design systems for SaaS, web, and mobile products.",
  }),
};

/** Industry-specific service pages, keyed by their canonical route. */
export const industryServiceSchemas: Record<
  string,
  ReturnType<typeof serviceSchema>
> = {
  "/e-commerce": serviceSchema({
    name: "AWS Cloud and DevOps for E-Commerce",
    serviceType: "E-commerce cloud engineering",
    path: "/e-commerce",
    description:
      "AWS architecture, DevOps, observability, security, and cost controls for e-commerce platforms that need reliable checkout, integrations, and peak traffic readiness.",
  }),
  "/ed-tech": serviceSchema({
    name: "AWS Cloud and DevOps for EdTech",
    serviceType: "EdTech cloud engineering",
    path: "/ed-tech",
    description:
      "AWS infrastructure, delivery automation, security, and observability for learning platforms that need reliable releases and capacity for enrollment and assessment peaks.",
  }),
  "/fin-tech": serviceSchema({
    name: "AWS Cloud, DevOps, and Security for FinTech",
    serviceType: "FinTech cloud engineering",
    path: "/fin-tech",
    description:
      "AWS infrastructure, DevOps automation, security controls, and technical readiness support for FinTech products handling sensitive data and regulated payment workflows.",
  }),
  "/financial-services": serviceSchema({
    name: "AWS Engineering for Financial Services",
    serviceType: "Financial services cloud engineering",
    path: "/financial-services",
    description:
      "AWS architecture, delivery automation, resilience, observability, and technical controls for modern financial services platforms and regulated workloads.",
  }),
  "/healthcare": serviceSchema({
    name: "AWS Cloud and DevOps for Healthcare",
    serviceType: "Healthcare cloud engineering",
    path: "/healthcare",
    description:
      "AWS infrastructure for healthcare and HealthTech with encryption, access controls, audit logging, resilience, and technical safeguards that support HIPAA programs.",
  }),
  "/manufacturing": serviceSchema({
    name: "AWS Cloud and Data Platforms for Manufacturing",
    serviceType: "Manufacturing cloud engineering",
    path: "/manufacturing",
    description:
      "AWS infrastructure connecting manufacturing applications, operational data, analytics, and delivery workflows with practical security, reliability, and cost controls.",
  }),
  "/non-profits": serviceSchema({
    name: "AWS Cloud and DevOps for Nonprofits",
    serviceType: "Nonprofit cloud engineering",
    path: "/non-profits",
    description:
      "Practical AWS architecture, migration, automation, security, and cost optimization for nonprofits that need reliable technology and accountable cloud spending.",
  }),
  "/pe-vc": serviceSchema({
    name: "Cloud Engineering for PE and VC Portfolios",
    serviceType: "Portfolio cloud engineering advisory",
    path: "/pe-vc",
    description:
      "Cloud risk, delivery maturity, security, reliability, and AWS cost assessments for portfolio companies, followed by prioritized technical improvements.",
  }),
  "/powering-business": serviceSchema({
    name: "Cloud and DevOps for Professional Services",
    serviceType: "Professional services cloud engineering",
    path: "/powering-business",
    description:
      "AWS architecture, DevOps automation, security, and managed support for client portals, delivery workflows, data platforms, and cloud operations.",
  }),
  "/real-estate": serviceSchema({
    name: "AWS Cloud and Software for Real Estate",
    serviceType: "Real estate cloud and software engineering",
    path: "/real-estate",
    description:
      "Secure AWS infrastructure and delivery automation for real estate platforms, tenant portals, integrations, and operational data workflows.",
  }),
  "/saas-isv": serviceSchema({
    name: "AWS, DevOps, and Amazon EKS for SaaS and ISVs",
    serviceType: "SaaS cloud platform engineering",
    path: "/saas-isv",
    description:
      "AWS architecture, CI/CD, Amazon EKS, observability, FinOps, security, and ongoing platform engineering for SaaS and ISV product teams.",
  }),
  "/small-and-mid-size-business": serviceSchema({
    name: "AWS Cloud and DevOps for Growing Businesses",
    serviceType: "Small and mid-sized business cloud engineering",
    path: "/small-and-mid-size-business",
    description:
      "Practical AWS architecture, migration, DevOps, security, and cost optimization for growing businesses that need reliable systems without unnecessary complexity.",
  }),
};
