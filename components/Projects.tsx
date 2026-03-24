import SectionWrapper from "./SectionWrapper"

const projects = [
  {
    name: "Riftbound Companion",
    description:
      "A mobile app designed for Riftbound TCG players that offers score tracking, match history, deckbuilding and stats and more! Currently only available for Android.",
    tech: [] as string[],
    github: null,
    demo: "https://www.riftbound-companion.net",
    demoLabel: "More details here",
    hoverImage: "/riftbound.png",
  },
  {
    name: "LunaSol",
    description:
      "A personal life companion Android app featuring calorie tracking, fasting timer, expense management, task reminders, and a 14-day cleanse program with meal prep checklists.",
    tech: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    github: null,
    demo: null,
    demoLabel: "Live Demo",
    hoverImage: "/lunasol.png",
    apk: "http://5.161.90.215:3002/downloads/lunasol.apk",
  },
  {
    name: "Project Gamma",
    description:
      "A mobile-responsive portfolio generator that creates static sites from a simple YAML config.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-gamma",
    demo: "https://project-gamma.vercel.app",
    demoLabel: "Live Demo",
    hoverImage: null,
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-cyan-500/40 transition-colors group overflow-hidden"
          >
            {project.hoverImage && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${project.hoverImage})` }}
              />
            )}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-800 text-cyan-400 border border-gray-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {project.demoLabel} →
                </a>
              )}
              {"apk" in project && project.apk && (
                <a
                  href={project.apk}
                  download
                  className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 px-3 py-1 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download APK
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
