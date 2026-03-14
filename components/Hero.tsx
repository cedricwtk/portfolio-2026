"use client"

import { motion } from "framer-motion"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
})

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.p {...fadeUp(0)} className="text-cyan-400 text-sm font-mono tracking-[0.2em] mb-4 uppercase">
          Hi, I&apos;m
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Wu Tchan Ki
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-xl md:text-2xl text-gray-400 mb-4">
          Full Stack Developer
        </motion.p>

        <motion.p {...fadeUp(0.3)} className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
          I build things for the web — clean, fast, and meaningful digital experiences.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-cyan-500 text-gray-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
