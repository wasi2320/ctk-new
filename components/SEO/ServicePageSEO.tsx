import Script from "next/script";

interface ServicePageSEOProps {
  serviceName: string;
  description: string;
  features?: string[];
  slug: string;
}

export default function ServicePageSEO({
  serviceName,
  description,
  features = [],
  slug,
}: ServicePageSEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codetokloud.com";
  const url = `${siteUrl}/${slug}`;

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "Organization",
      name: "CodetoKloud",
      url: siteUrl,
      logo: `${siteUrl}/Images/logo.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-XXX-XXX-XXXX", // Add your phone number
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    description: description,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    ...(features.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${serviceName} Features`,
        itemListElement: features.map((feature, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
          },
        })),
      },
    }),
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodetoKloud",
    url: siteUrl,
    logo: `${siteUrl}/Images/logo.svg`,
    description:
      "Leading cloud and DevOps consulting firm specializing in AWS, Azure, GCP migrations, Kubernetes, CI/CD, and infrastructure automation.",
    sameAs: [
      "https://www.linkedin.com/company/codetokloud",
      "https://twitter.com/codetokloud",
      // Add more social profiles
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: serviceName,
        item: url,
      },
    ],
  };

  return (
    <>
      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
