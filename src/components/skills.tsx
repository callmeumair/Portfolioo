"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    number: "01",
    title: "Frontend Engineering",
    description: "Building pixel-perfect, responsive, and performant user interfaces with modern frameworks.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description: "Integrating AI capabilities into products, from LLM-powered features to intelligent automation.",
    technologies: ["Python", "OpenAI API", "AI/ML", "Swift"],
  },
  {
    number: "03",
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance and beautiful interfaces.",
    technologies: ["React Native", "Swift"],
  },
  {
    number: "04",
    title: "Backend & Databases",
    description: "Scalable server architecture, API design, and data management systems.",
    technologies: ["Node.js", "PostgreSQL", "MongoDB", "Firebase", "GraphQL"],
  },
  {
    number: "05",
    title: "DevOps & Design",
    description: "Cloud infrastructure, containerization, version control, and product design.",
    technologies: ["Docker", "AWS", "Git", "Figma"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="font-bold tracking-tight mb-6 text-gradient-accent"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}
          >
            Technology Stack
          </h2>
          <p
            className="text-lg max-w-xl font-light"
            style={{ color: 'rgba(215,226,234,0.55)' }}
          >
            Cutting-edge tools and frameworks I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Editorial Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.number}
              variants={itemVariants}
              className="group"
            >
              {/* Divider */}
              {index === 0 && (
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              )}

              <div
                className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 items-start transition-all duration-300 group-hover:pl-2"
              >
                {/* Number */}
                <span
                  className="text-gradient-accent font-bold"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                >
                  {category.number}
                </span>

                {/* Title + Description */}
                <div>
                  <h3
                    className="font-semibold tracking-tight mb-2"
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      color: '#D7E2EA',
                    }}
                  >
                    {category.title}
                  </h3>
                  <p
                    className="font-light leading-relaxed"
                    style={{ color: 'rgba(215,226,234,0.5)' }}
                  >
                    {category.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-light tracking-wide transition-all duration-300"
                      style={{
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: 'rgba(215,226,234,0.5)',
                        background: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div
            className="inline-flex items-center gap-8 md:gap-12 px-8 py-5 rounded-2xl"
            style={{
              background: 'rgba(22,22,22,0.6)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-accent">18+</div>
              <div className="text-sm font-light mt-1" style={{ color: 'rgba(215,226,234,0.45)' }}>Technologies</div>
            </div>
            <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.08)' }} />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-accent">5+</div>
              <div className="text-sm font-light mt-1" style={{ color: 'rgba(215,226,234,0.45)' }}>Years Experience</div>
            </div>
            <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.08)' }} />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-accent">50+</div>
              <div className="text-sm font-light mt-1" style={{ color: 'rgba(215,226,234,0.45)' }}>Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambient Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(187,204,215,0.03) 0%, transparent 60%)',
        }}
      />
    </section>
  )
}
