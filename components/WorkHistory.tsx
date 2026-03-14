import SectionWrapper from "./SectionWrapper"

const jobs = [
  {
    company: "Bell Media",
    role: "Full Stack Developer",
    period: "September 2022 – Present",
    location: "Montreal, Quebec, Canada",
    bullets: [],
    tech: [],
  },
  {
    company: "Université du Québec à Montréal",
    role: "Developer",
    period: "January 2022 – August 2022",
    location: "Montreal, Quebec, Canada",
    bullets: [],
    tech: ["React", "Node.js", "Redux", "Docker", "PostgreSQL", "JIRA", "DBeaver"],
  },
  {
    company: "Federal Government of Canada",
    role: "Software Developer & Data Analyst",
    period: "September 2017 – June 2018",
    location: "Montreal, Canada",
    bullets: [
      "Developed a web scraping application in Ruby on Rails from scratch.",
      "Maintained and updated the database.",
      "Collaborated with the team on decisions regarding processes relevant to problems encountered.",
    ],
    tech: ["Ruby on Rails", "PHP", "SQL", "T-SQL", "Linux", "Windows"],
  },
  {
    company: "XLCINQ",
    role: "Web Development Intern",
    period: "January 2017 – May 2017",
    location: "Montreal, Canada",
    bullets: [
      "Maintained and developed client websites (front-end and back-end).",
      "Developed custom modules and features.",
      "Managed projects using continuous integration practices.",
    ],
    tech: ["Ruby on Rails", "PHP", "Shopify", "Magento", "HTML", "CSS", "JavaScript"],
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
            <p className="text-gray-400">{job.company}</p>
            <p className="text-gray-600 text-xs mb-4">{job.location}</p>
            {job.bullets.length > 0 && (
              <ul className="space-y-2 mb-4">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="text-gray-400 text-sm flex gap-2 leading-relaxed">
                    <span className="text-cyan-500 shrink-0 mt-0.5">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {job.tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-800 border border-gray-700 text-cyan-400 px-2 py-1 rounded font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
