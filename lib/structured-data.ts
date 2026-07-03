/**
 * Centralized JSON-LD structured data for GEO (Generative Engine Optimization).
 *
 * Verbatim business facts live here so every schema stays consistent. Placeholder
 * values are marked with `TODO:` — fill these in and they propagate everywhere.
 */

export const SITE_URL = "https://codetokloud.com";

const ORG_ID = `${SITE_URL}/#organization`;

/**
 * Sitewide Organization schema. Rendered once in the root layout.
 * `sameAs` links are placeholders — fill in the real profile URLs.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "CodetoKloud",
  legalName: "CodetoKloud Inc",
  url: SITE_URL,
  telephone: "+1-480-572-7818",
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
      "DevOps consulting and implementation from CodetoKloud — CI/CD pipelines, automation, and infrastructure-as-code to accelerate delivery and improve reliability.",
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
};
