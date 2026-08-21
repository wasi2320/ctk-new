import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/SiteHeader";
import Footer from "./components/layout/SiteFooter";
import ScrollToTop from "./components/ScrollToTop";
import ChatFloat from "./components/ChatFloat";
import Breadcrumbs from "./components/Breadcrumbs";
import JsonLd from "./components/JsonLd";
import { organizationSchema } from "@/lib/structured-data";
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

// Redesign fonts (self-hosted via next/font).
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codetokloud.com"),
  title: {
    default:
      "CodetoKloud | AWS Cloud, DevOps & AI Automation Consulting",
    template: "%s",
  },
  description:
    "CodetoKloud is a US-registered IT consulting company and AWS Advanced Tier Partner providing cloud infrastructure, DevOps, AI automation, full-stack development, and compliance services (SOC 2, HIPAA, PCI DSS).",
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
    url: "https://codetokloud.com/",
    type: "website",
    title: "CodetoKloud",
    description:
      "CodetoKloud is a US-registered IT consulting company and AWS Advanced Tier Partner providing cloud infrastructure, DevOps, AI automation, full-stack development, and compliance services (SOC 2, HIPAA, PCI DSS).",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/dd5c0828-1890-4d85-8051-5fac6878e7ce.png?token=8F3WOtV6fyrJjvXYeTMLY4rjWwtjMDd_JLbEhytH9CE&height=630&width=1200&expires=33293625957",
        width: 1200,
        height: 630,
        alt: "CodetoKloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodetoKloud",
    description:
      "CodetoKloud is a US-registered IT consulting company and AWS Advanced Tier Partner providing cloud infrastructure, DevOps, AI automation, full-stack development, and compliance services (SOC 2, HIPAA, PCI DSS).",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/dd5c0828-1890-4d85-8051-5fac6878e7ce.png?token=8F3WOtV6fyrJjvXYeTMLY4rjWwtjMDd_JLbEhytH9CE&height=630&width=1200&expires=33293625957",
        alt: "CodetoKloud",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${inter.variable} ${jbMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <JsonLd data={organizationSchema} />
        <Header />
        <Breadcrumbs />
        <ScrollToTop />
        {children}
        <Footer />
        <ChatFloat />
      </body>
    </html>
  );
}
