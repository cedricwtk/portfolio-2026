"use client"

import { useState } from "react"
import SectionWrapper from "./SectionWrapper"

// TODO: Replace YOUR_FORM_ID with your Formspree form ID.
// Sign up free at https://formspree.io, create a form, and paste the ID here.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"

const socialLinks = [
  {
    icon: "✉",
    label: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    icon: "◈",
    label: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: "◈",
    label: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
]

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold text-white mb-2">Contact Me</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          <p className="text-gray-400 leading-relaxed mb-8">
            Have a project in mind, a question, or just want to say hi? Fill
            out the form and I&apos;ll get back to you as soon as I can.
          </p>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-cyan-500 text-lg">{link.icon}</span>
                <span className="text-sm group-hover:text-cyan-400 transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right column — form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="What&apos;s on your mind?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-cyan-500 text-gray-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✓ Message sent! I&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  )
}
