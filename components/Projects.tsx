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
  },
  {
    name: "Project Beta",
    description:
      "A CLI tool that automates deployment workflows and integrates with popular CI/CD platforms.",
    tech: ["Python", "Docker", "GitHub Actions"],
    github: "https://github.com/yourusername/project-beta",
    demo: null,
    demoLabel: "Live Demo",
  },
  {
    name: "Project Gamma",
    description:
      "A mobile-responsive portfolio generator that creates static sites from a simple YAML config.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-gamma",
    demo: "https://project-gamma.vercel.app",
    demoLabel: "Live Demo",
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
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-cyan-500/40 transition-colors group"
          >
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
            <div className="flex gap-4 text-sm">
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
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
