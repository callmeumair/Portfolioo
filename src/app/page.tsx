import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Experience } from "@/components/experience"
import { BackgroundMount } from "@/components/background-mount"
// SEO handled via metadata in layout; NextSeo removed to avoid SSR issues
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackgroundMount />
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <TestimonialsMarquee />
      </main>
      <MobileStickyCTA />
      <Footer />
    </div>
  )
}
