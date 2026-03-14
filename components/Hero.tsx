"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
})

interface Ring {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
  delay: number
  born: number
}

interface Drop {
  x: number
  y: number
  spawnedAt: number
  rings: Ring[]
}

function RippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const drops: Drop[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Spawn a new drop at a random position
    const spawnDrop = () => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const now = performance.now()
      const maxRadius = 80 + Math.random() * 100

      drops.push({
        x, y,
        spawnedAt: now,
        rings: [
          { x, y, radius: 0, maxRadius,               opacity: 0, delay: 0,   born: now },
          { x, y, radius: 0, maxRadius: maxRadius * 0.65, opacity: 0, delay: 180, born: now },
          { x, y, radius: 0, maxRadius: maxRadius * 0.35, opacity: 0, delay: 80,  born: now },
        ],
      })
    }

    // Spawn a burst of 2–4 drops at once, then schedule the next burst
    let spawnTimer: ReturnType<typeof setTimeout>
    const scheduleSpawn = () => {
      const interval = 600 + Math.random() * 800
      spawnTimer = setTimeout(() => {
        const count = 2 + Math.floor(Math.random() * 3)
        for (let i = 0; i < count; i++) spawnDrop()
        scheduleSpawn()
      }, interval)
    }
    const count = 2 + Math.floor(Math.random() * 3)
    for (let i = 0; i < count; i++) spawnDrop()
    scheduleSpawn()

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let d = drops.length - 1; d >= 0; d--) {
        const drop = drops[d]
        let allDone = true

        for (const ring of drop.rings) {
          const elapsed = now - ring.born - ring.delay
          if (elapsed < 0) { allDone = false; continue }

          const progress = elapsed / 1800  // 1.8s lifetime
          if (progress >= 1) continue

          allDone = false
          ring.radius = ring.maxRadius * progress
          // Opacity: fade in quickly, then slowly fade out
          ring.opacity = progress < 0.1
            ? progress / 0.1 * 0.35
            : 0.35 * (1 - (progress - 0.1) / 0.9)

          ctx.beginPath()
          ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(41, 171, 226, ${ring.opacity})`
          ctx.lineWidth = 1.8
          ctx.stroke()
        }

        if (allDone) drops.splice(d, 1)
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(spawnTimer)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Ripple background */}
      <RippleCanvas />

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
