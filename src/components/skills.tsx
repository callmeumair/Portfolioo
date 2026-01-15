"use client"

import { motion } from "framer-motion"
import { GradientBlob } from "@/components/ui/gradient-blob"

// Technology icons and data
const technologies = [
  { name: "TypeScript", icon: "⚡", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10" },
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600", bgColor: "bg-cyan-500/10" },
  { name: "Next.js", icon: "▲", color: "from-white to-gray-300", bgColor: "bg-white/10" },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600", bgColor: "bg-green-500/10" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500", bgColor: "bg-cyan-500/10" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-blue-600", bgColor: "bg-blue-500/10" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700", bgColor: "bg-green-500/10" },
  { name: "Python", icon: "🐍", color: "from-blue-400 to-yellow-500", bgColor: "bg-blue-500/10" },
  { name: "Git", icon: "🔧", color: "from-orange-500 to-red-600", bgColor: "bg-orange-500/10" },
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600", bgColor: "bg-blue-500/10" },
  { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600", bgColor: "bg-orange-500/10" },
  { name: "Figma", icon: "🎯", color: "from-emerald-400 to-pink-500", bgColor: "bg-purple-500/10" },
  { name: "React Native", icon: "📱", color: "from-cyan-400 to-blue-500", bgColor: "bg-cyan-500/10" },
  { name: "Three.js", icon: "🎮", color: "from-black to-gray-700", bgColor: "bg-gray-500/10" },
  { name: "Framer Motion", icon: "✨", color: "from-emerald-500 to-teal-500", bgColor: "bg-purple-500/10" },
  { name: "Swift", icon: "🍎", color: "from-orange-500 to-red-500", bgColor: "bg-orange-500/10" },
  { name: "GraphQL", icon: "◈", color: "from-amber-500 to-emerald-600", bgColor: "bg-pink-500/10" },
  { name: "Firebase", icon: "🔥", color: "from-yellow-400 to-orange-600", bgColor: "bg-yellow-500/10" },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Gradient Blobs */}
      <GradientBlob className="top-1/4 left-0" color="purple" size="xl" />
      <GradientBlob className="bottom-1/4 right-0" color="pink" size="xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 backdrop-blur-sm border border-primary/20"
          >
            <span className="text-2xl">💻</span>
            <span className="text-sm font-medium">My Tech Arsenal</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge tools and frameworks I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

                {/* Card */}
                <div className={`relative h-28 md:h-32 rounded-2xl ${tech.bgColor} backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center gap-2 overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>

                  {/* Label */}
                  <div className={`relative text-xs md:text-sm font-semibold text-center px-2 bg-clip-text text-transparent bg-gradient-to-r ${tech.color} group-hover:scale-105 transition-transform duration-300`}>
                    {tech.name}
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-amber-500">18+</div>
              <div className="text-sm text-muted-foreground mt-1">Technologies</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  )
}
