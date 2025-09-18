import type { DefaultSeoProps } from "next-seo"

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | Umer Patel",
  defaultTitle: "Umer Patel — Frontend Engineer",
  description: "I build design-driven products with React/Next.js, turning ambiguity into shipped, measurable outcomes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umerpatel1.vercel.app",
    siteName: "Umer Patel",
    images: [
      { url: "/api/og?title=Umer%20Patel", width: 1200, height: 630, alt: "Umer Patel" },
    ],
  },
  twitter: { cardType: "summary_large_image" },
}


