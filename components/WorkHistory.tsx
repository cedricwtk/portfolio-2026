import SectionWrapper from "./SectionWrapper"

const jobs = [
  {
    company: "Example Corp",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    bullets: [
      "Built and maintained features for a high-traffic web application serving 100k+ users",
      "Collaborated with cross-functional teams to ship product requirements on schedule",
      "Improved API response time by 30% through caching strategies and query optimization",
    ],
  },
  {
    company: "Startup Inc.",
    role: "Frontend Developer Intern",
    period: "Jun 2023 – Dec 2023",
    bullets: [
      "Developed React components for the company's main SaaS dashboard",
      "Worked closely with designers to implement pixel-perfect, accessible UIs",
      "Wrote unit and integration tests using Jest and React Testing Library",
    ],
  },
]

export default function WorkHistory() {
  return (
    <SectionWrapper id="work">
      <h2 className="text-3xl font-bold text-white mb-2">Work History</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="relative border-l-2 border-gray-800 pl-8 space-y-14">
        {jobs.map((job, i) => (
          <div key={i} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-2 border-gray-950" />

            <span className="text-xs text-cyan-400 font-mono tracking-wider">{job.period}</span>
            <h3 className="text-xl font-semibold text-white mt-1">{job.role}</h3>
            <p className="text-gray-400 mb-4">{job.company}</p>
            <ul className="space-y-2">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="text-gray-400 text-sm flex gap-2 leading-relaxed">
                  <span className="text-cyan-500 shrink-0 mt-0.5">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
