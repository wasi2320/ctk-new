import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatFloat from "./components/ChatFloat";
import Script from "next/script";

// Add LocatorJS runtime setup
const setupLocator = async () => {
  if (process.env.NODE_ENV === "development") {
    const setupLocatorUI = (await import("@locator/runtime")).default;
    setupLocatorUI();
  }
};

// Execute setup in client-side only
if (typeof window !== "undefined") {
  setupLocator();
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Consolas", "Monaco", "Courier New", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://codetokloud.com'),
  title: {
    default: "CodetoKloud - AWS Cloud Migration, DevOps & Kubernetes Consulting",
    template: "%s | CodetoKloud",
  },
  description:
    "Expert AWS, Azure & GCP cloud migration services. Kubernetes consulting, CI/CD automation, Infrastructure as Code (Terraform), and DevOps transformation for enterprises.",
  keywords: [
    "AWS migration services",
    "cloud migration consulting",
    "Kubernetes consulting",
    "DevOps consulting",
    "Terraform consulting",
    "CI/CD pipeline setup",
    "cloud cost optimization",
    "infrastructure as code",
    "container orchestration",
    "Azure migration",
    "GCP migration",
    "cloud modernization",
    "DevOps automation",
    "microservices architecture",
  ],
  authors: [{ name: "CodetoKloud" }],
  creator: "CodetoKloud",
  publisher: "CodetoKloud",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/Images/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/Images/logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codetokloud.com/",
    siteName: "CodetoKloud",
    title: "CodetoKloud - Cloud Migration & DevOps Experts",
    description:
      "Transform your infrastructure with expert cloud migration, Kubernetes, and DevOps services. AWS, Azure, GCP certified consultants.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/dd5c0828-1890-4d85-8051-5fac6878e7ce.png?token=8F3WOtV6fyrJjvXYeTMLY4rjWwtjMDd_JLbEhytH9CE&height=630&width=1200&expires=33293625957",
        width: 1200,
        height: 630,
        alt: "CodetoKloud - Cloud & DevOps Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodetoKloud - Cloud Migration & DevOps Experts",
    description:
      "Transform your infrastructure with expert cloud migration, Kubernetes, and DevOps services.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/dd5c0828-1890-4d85-8051-5fac6878e7ce.png?token=8F3WOtV6fyrJjvXYeTMLY4rjWwtjMDd_JLbEhytH9CE&height=630&width=1200&expires=33293625957",
        alt: "CodetoKloud",
      },
    ],
  },
  alternates: {
    canonical: "https://codetokloud.com",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codetokloud.com';

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodetoKloud",
    url: siteUrl,
    logo: `${siteUrl}/Images/logo.svg`,
    description: "Leading cloud and DevOps consulting firm specializing in AWS, Azure, GCP migrations, Kubernetes, CI/CD, and infrastructure automation.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/codetokloud",
      "https://twitter.com/codetokloud",
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CodetoKloud",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blogs?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RRB63EKL29"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RRB63EKL29');
          `}
        </Script>

        {/* Google Ads Conversion Tracking */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17577411888/L_BtCI_VgaYbELCKyL1B',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <ScrollToTop />
        {children}
        <Footer />
        <ChatFloat />
      </body>
    </html>
  );
}
