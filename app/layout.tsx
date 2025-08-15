import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
  title: "Ctk",
  description: "",
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
        <script 
          type="text/javascript" 
          async 
          src="https://bot.leadoo.com/bot/dynamic.js?company=I1hDKCU7"
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
      </body>
    </html>
  );
}
