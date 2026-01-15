import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <div className="min-h-screen relative bg-background font-sans selection:bg-primary/30">
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  )
}
