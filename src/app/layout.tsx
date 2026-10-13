import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingContactButton } from "@/components/floating-contact-button";
import Script from "next/script";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umerpatel.vercel.app"),
  title: "Umer Patel - Scientific Computing & AI-Native Software Engineer",
  description: "Portfolio of Umer Patel, Scientific Computing Expert & AI-Native Software Engineer. Shipped App Store iOS apps, AI benchmark authoring, and evaluation for frontier LLMs.",
  keywords: ["Umer Patel", "Scientific Computing", "AI Engineer", "Terminal Bench", "TB-Science", "SwiftUI", "iOS Developer", "Next.js", "Python", "RLHF Evaluation", "Portfolio"],
  authors: [{ name: "Umer Patel" }],
  creator: "Umer Patel",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umerpatel.vercel.app",
    title: "Umer Patel - Scientific Computing & AI-Native Software Engineer",
    description: "Portfolio of Umer Patel, Scientific Computing Expert & AI-Native Software Engineer.",
    siteName: "Umer Patel Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Umer Patel - Scientific Computing & AI-Native Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer Patel - Scientific Computing & AI-Native Software Engineer",
    description: "Portfolio of Umer Patel, Scientific Computing Expert & AI-Native Software Engineer.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0C0C0C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${kanit.variable} ${geistMono.variable} antialiased custom-scrollbar`}
        style={{ fontFamily: "var(--font-kanit), system-ui, sans-serif" }}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] bg-primary text-primary-foreground px-3 py-2 rounded-md">Skip to content</a>

        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Umer Patel",
            url: "https://umerpatel.vercel.app",
            image: "https://umerpatel.vercel.app/profile.jpg",
            jobTitle: "Scientific Computing & AI-Native Software Engineer",
            sameAs: [
              "https://github.com/callmeumair",
              "https://www.linkedin.com/in/umerpatel",
              "https://x.com/Umerpatel11"
            ]
          })}
        </Script>
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Umer Patel Portfolio",
            url: "https://umerpatel.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://umerpatel.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        {children}
        <FloatingContactButton />
      </body>
    </html>
  );
}
