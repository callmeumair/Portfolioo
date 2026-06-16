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
  metadataBase: new URL("https://umerpatel1.vercel.app"),
  title: "Umer Patel - Full Stack Developer",
  description: "Portfolio of Umer Patel, a passionate full-stack developer specializing in modern web technologies and creating innovative digital solutions.",
  keywords: ["Umer Patel", "Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
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
    url: "https://umerpatel1.vercel.app",
    title: "Umer Patel - Full Stack Developer",
    description: "Portfolio of Umer Patel, a passionate full-stack developer specializing in modern web technologies.",
    siteName: "Umer Patel Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Umer Patel - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer Patel - Full Stack Developer",
    description: "Portfolio of Umer Patel, a passionate full-stack developer specializing in modern web technologies.",
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
            url: "https://umerpatel1.vercel.app",
            image: "https://umerpatel1.vercel.app/profile.jpg",
            jobTitle: "Full Stack Developer",
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
            url: "https://umerpatel1.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://umerpatel1.vercel.app/?q={search_term_string}",
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
