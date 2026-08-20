/**
 * Centralized JSON-LD structured data for GEO (Generative Engine Optimization).
 *
 * Verbatim business facts live here so every schema stays consistent. Placeholder
 * values are marked with `TODO:`, fill these in and they propagate everywhere.
 */

export const SITE_URL = "https://codetokloud.com";

const ORG_ID = `${SITE_URL}/#organization`;

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
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    ...(image ? { image } : {}),
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
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    ...(image ? { image } : {}),
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
export function faqPageSchema(items: FaqItem[]) {
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
    name: "Kubernetes & Amazon EKS Consulting",
    serviceType: "Kubernetes and Amazon EKS consulting",
    path: "/kubernetes",
    description:
      "Kubernetes and Amazon EKS consulting from CodetoKloud, an AWS Advanced Tier Partner, EKS cluster design, GitOps with ArgoCD, Helm packaging, autoscaling, observability, cost optimization, and security hardening.",
  }),
  "/ai": serviceSchema({
    name: "AI Automation",
    serviceType: "AI automation consulting",
    path: "/ai",
    description:
      "AI automation services from CodetoKloud that help businesses automate workflows and integrate intelligent solutions into their cloud and application stack.",
  }),
  "/web-solutions": serviceSchema({
    name: "Full-Stack Development",
    serviceType: "Full-stack software development",
    path: "/web-solutions",
    description:
      "Full-stack web and application development from CodetoKloud, building modern, scalable software solutions on secure cloud infrastructure.",
  }),
  "/security-and-compliance": serviceSchema({
    name: "Compliance & Security",
    serviceType: "Cloud security and compliance consulting",
    path: "/security-and-compliance",
    description:
      "Security and compliance services from CodetoKloud covering SOC 2, HIPAA, and PCI DSS, helping US businesses meet regulatory requirements on AWS.",
  }),
  "/hipaa-compliance": serviceSchema({
    name: "HIPAA-Compliant AWS & Kubernetes Infrastructure",
    serviceType: "HIPAA compliance consulting",
    path: "/hipaa-compliance",
    description:
      "CodetoKloud helps healthcare organizations build and run HIPAA-compliant infrastructure on AWS and Amazon EKS, encryption, access controls, audit logging, network isolation, and disaster recovery.",
  }),
  "/soc-2-compliance": serviceSchema({
    name: "SOC 2 Compliance on AWS",
    serviceType: "SOC 2 compliance consulting",
    path: "/soc-2-compliance",
    description:
      "CodetoKloud helps businesses implement and prepare for SOC 2 on AWS, access controls, audit logging, change management, monitoring, and infrastructure-as-code aligned to the Trust Services Criteria.",
  }),
  "/pci-dss-compliance": serviceSchema({
    name: "PCI DSS Compliance on AWS",
    serviceType: "PCI DSS compliance consulting",
    path: "/pci-dss-compliance",
    description:
      "CodetoKloud helps businesses build PCI DSS-aligned infrastructure on AWS, network segmentation, encryption, access control, logging, and vulnerability management for cardholder data environments.",
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
    name: "Mobile App Development",
    serviceType: "Mobile application development",
    path: "/mobile-app",
    description:
      "Native and cross-platform mobile app development from CodetoKloud, backed by secure, scalable cloud infrastructure on AWS.",
  }),
  "/ui-ux": serviceSchema({
    name: "UI/UX Design",
    serviceType: "UI/UX design",
    path: "/ui-ux",
    description:
      "UI/UX design from CodetoKloud, user-centered interfaces and product design for web and mobile applications.",
  }),
};
