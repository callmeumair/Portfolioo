import { notFound } from "next/navigation"
// Use app router metadata or script tags; avoid next-seo to reduce SSR conflicts
import CaseStudyHeader from "@/components/sections/CaseStudyHeader"
import CaseStudyMeta from "@/components/sections/CaseStudyMeta"
import { projectSchema } from "@/lib/schema"

const CASES = {
  "ai-fitness": {
    title: "AI-Powered Fitness App",
    subtitle: "Personalized training with AI; faster performance and premium motion.",
    emoji: "💪",
    role: "Frontend Engineer",
    stack: ["Next.js","TypeScript","Framer Motion","Vercel"],
    outcomes: [
      { label: "LCP improvement", value: "-22%" },
      { label: "trial-to-paid", value: "+18%" },
      { label: "bundle size", value: "-28%" },
    ],
    links: [
      { label: "Live", href: "https://pulsefitai.vercel.app/" },
      { label: "Code", href: "https://github.com/callmeumair/PulseFit.AI" },
    ],
    description: "Built a design-driven interface, added accessible motion, reduced LCP with image and 3D lazy-loading, and implemented analytics for funnel clarity.",
  },
} as const

type CaseKey = keyof typeof CASES

export default function CaseStudyPage({ params }: { params: { slug: CaseKey } }) {
  const data = CASES[params.slug]
  if (!data) return notFound()

  const schema = projectSchema({
    name: data.title,
    url: `https://umerpatel1.vercel.app/case-studies/${params.slug}`,
    description: data.description,
    technologies: data.stack,
    metrics: data.outcomes,
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CaseStudyHeader title={data.title} subtitle={data.subtitle} coverEmoji={data.emoji} />
      <CaseStudyMeta role={data.role} stack={data.stack} outcomes={data.outcomes} links={data.links} />
      <section className="section-y">
        <div className="container-x prose prose-invert:dark max-w-none">
          <h2>Problem</h2>
          <p>{data.description}</p>
          <h2>Approach</h2>
          <ul>
            <li>Introduced design tokens and reduced-motion compliant animations</li>
            <li>Optimized LCP via next/image, dynamic imports, and font preconnect</li>
            <li>Added analytics events and OG/sitemap for SEO</li>
          </ul>
          <h2>Outcome</h2>
          <p>Measured gains across performance, conversion, and code health as listed above.</p>
          <h2>Lessons</h2>
          <p>Design-led engineering with a performance budget yields measurable business impact.</p>
        </div>
      </section>
    </div>
  )
}


