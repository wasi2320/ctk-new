import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import HomeRedesign from "./components/home/HomeRedesign";
import { homepageSchemas } from "@/lib/structured-data";

const title = "AWS DevOps & Kubernetes Consulting | CodetoKloud";
const description =
  "CodetoKloud is an AWS Advanced Tier Services Partner in Naperville for DevOps, Kubernetes, cloud migration, FinOps, and compliance engineering across the US.";
const socialImage =
  "https://opengraph.b-cdn.net/production/images/dd5c0828-1890-4d85-8051-5fac6878e7ce.png?token=8F3WOtV6fyrJjvXYeTMLY4rjWwtjMDd_JLbEhytH9CE&height=630&width=1200&expires=33293625957";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://codetokloud.com/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://codetokloud.com/",
    siteName: "CodetoKloud",
    locale: "en_US",
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "CodetoKloud AWS cloud engineering consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: socialImage,
        alt: "CodetoKloud AWS cloud engineering consulting",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HomeRedesign />
      <JsonLd data={homepageSchemas} />
    </>
  );
}
