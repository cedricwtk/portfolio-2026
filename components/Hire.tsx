"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionWrapper from "./SectionWrapper"

type ToastType = "success" | "error"

function Toast({ type, onClose }: { type: ToastType; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg border text-sm font-medium ${
        type === "success"
          ? "bg-gray-900 border-cyan-500/40 text-white"
          : "bg-gray-900 border-red-500/40 text-white"
      }`}
    >
      <span className={type === "success" ? "text-cyan-400 text-lg" : "text-red-400 text-lg"}>
        {type === "success" ? "✓" : "✕"}
      </span>
      {type === "success" ? "Inquiry sent! I'll get back to you soon." : "Something went wrong. Please try again."}
      <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-300 transition-colors">✕</button>
    </motion.div>
  )
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1 14H5a1 1 0 01-1-1V7h16v10a1 1 0 01-1 1zM7 9h10v2H7zm0 4h7v2H7z"/>
      </svg>
    ),
    title: "Websites",
    description: "Landing pages, portfolios, business sites — responsive and modern.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm-5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5-5H7V5h10v10z"/>
      </svg>
    ),
    title: "Mobile Apps",
    description: "Android apps built for performance and a smooth user experience.",
  },
]

export default function Hire() {
  const [status, setStatus] = useState<"idle" | "loading">("idle")
  const [toast, setToast] = useState<ToastType | null>(null)

  function showToast(type: ToastType) {
    setToast(type)
    setTimeout(() => setToast(null), 5000)
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, message: `[Business Inquiry]\n\n${data.message}` }),
      })
      if (res.ok) {
        form.reset()
        showToast("success")
      } else {
        showToast("error")
      }
    } catch {
      showToast("error")
    } finally {
      setStatus("idle")
    }
  }

  return (
    <SectionWrapper id="hire">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Work With Me</h2>
          <div className="w-12 h-1 bg-cyan-500" />
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full self-start md:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for projects
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left — pitch + services */}
        <div className="space-y-8">
          <p className="text-gray-400 leading-relaxed">
            Looking to build something? I take on freelance projects on the side.
            Tell me what you have in mind and I&apos;ll get back to you with details.
          </p>

          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.title} className="flex items-start gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl">
                <span className="text-cyan-500 shrink-0 mt-0.5">{s.icon}</span>
                <div>
                  <p className="text-white font-medium text-sm">{s.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — inquiry form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5" htmlFor="hire-name">Name</label>
            <input
              id="hire-name"
              type="text"
              name="name"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5" htmlFor="hire-email">Email</label>
            <input
              id="hire-email"
              type="email"
              name="email"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5" htmlFor="hire-message">Tell me about your project</label>
            <textarea
              id="hire-message"
              name="message"
              required
              rows={5}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="What are you looking to build?"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-cyan-500 text-gray-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Send Inquiry"}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {toast && <Toast type={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  )
}
