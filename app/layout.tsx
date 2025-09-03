import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatFloat from "./components/ChatFloat";

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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code to Kloud",
  description: "CodeToKloud offers AWS, cloud, DevOps, AI/ML, and web solutions to help businesses modernize legacy systems with secure, scalable multi-cloud platforms.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RRB63EKL29"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RRB63EKL29');
</script>
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
