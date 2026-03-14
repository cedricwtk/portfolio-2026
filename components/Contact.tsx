import SectionWrapper from "./SectionWrapper"

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: "Email me",
    href: "mailto:cedric@wutchanki.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
      </svg>
    ),
    label: "+1 514 572 7372",
    href: "tel:+15145727372",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
      </svg>
    ),
    label: "Ottawa Vanier, Ontario, Canada",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    label: "GitHub",
    href: "https://github.com/cedricwtk",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    href: "https://linkedin.com/in/wutchankicedric",
  },
]

const availability = [
  { day: "Mon – Fri", hours: "6:00 PM – 10:00 PM EST" },
  { day: "Weekends", hours: "9:00 AM – 5:00 PM EST" },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact info */}
        <div className="space-y-4">
          <p className="text-gray-400 leading-relaxed mb-6">
            Have a question or just want to say hi? Here&apos;s where you can find me.
          </p>
          {contactItems.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-cyan-500">{item.icon}</span>
                <span className="text-sm group-hover:text-cyan-400 transition-colors">{item.label}</span>
              </a>
            ) : (
              <div key={item.label} className="flex items-center gap-3 text-gray-400">
                <span className="text-cyan-500">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
            )
          )}
        </div>

        {/* Availability */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-cyan-500">
              <path d="M12 2a10 10 0 110 20A10 10 0 0112 2zm0 2a8 8 0 100 16A8 8 0 0012 4zm.5 3v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
            </svg>
            Availability
          </h3>
          <div className="space-y-3">
            {availability.map((slot) => (
              <div key={slot.day} className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl px-4 py-3">
                <span className="text-gray-400 text-sm">{slot.day}</span>
                <span className="text-cyan-400 text-sm font-mono">{slot.hours}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
