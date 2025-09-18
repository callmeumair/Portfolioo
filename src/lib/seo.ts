import type { NextSeoProps } from "next-seo"

export const homeSEO: NextSeoProps = {
  title: "Umer Patel — Frontend Engineer",
  description:
    "I build design-driven products with React/Next.js, turning ambiguity into shipped, measurable outcomes.",
  canonical: "https://umerpatel1.vercel.app",
  openGraph: {
    url: "https://umerpatel1.vercel.app",
    images: [
      { url: "/og?title=Umer%20Patel", width: 1200, height: 630, alt: "Umer Patel" },
    ],
  },
}


