import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"
import { Experience } from "@/components/experience"

const ParticlesBackground = dynamic(
  () => import("@/components/particles-background").then(m => m.ParticlesBackground),
  { ssr: false, loading: () => null }
)

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
