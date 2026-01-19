import Head from "next/head";

interface BlogSEOProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  author?: string;
  publishedTime: string;
  modifiedTime?: string;
  category?: string;
  keywords?: string[];
}

export default function BlogSEO({
  title,
  description,
  slug,
  image = "/Images/logo.svg",
  author = "CodetoKloud",
  publishedTime,
  modifiedTime,
  category,
  keywords = [],
}: BlogSEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codetokloud.com";
  const url = `${siteUrl}/blogs/${slug}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  // Schema.org structured data for Article
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: author,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Images/logo.svg`,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "CodetoKloud",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Images/logo.svg`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(category && {
      articleSection: category,
    }),
    ...(keywords.length > 0 && {
      keywords: keywords.join(", "),
    }),
  };

  // BreadcrumbList schema
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
        name: "Blog",
        item: `${siteUrl}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title} | CodetoKloud Blog</title>
      <meta name="title" content={`${title} | CodetoKloud Blog`} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="CodetoKloud" />
      <meta property="article:published_time" content={publishedTime} />
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {category && <meta property="article:section" content={category} />}
      <meta property="article:author" content={author} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </Head>
  );
}
