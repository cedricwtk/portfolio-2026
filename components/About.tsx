import SectionWrapper from "./SectionWrapper"

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="shrink-0 w-40 h-40 rounded-2xl bg-gray-800 border border-gray-700 overflow-hidden flex items-center justify-center">
          <img src="/wuTchanKi.svg" alt="Wu Tchan Ki" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hey! I&apos;m{" "}
            <span className="text-cyan-400 font-semibold">Wu Tchan Ki</span>, a
            passionate software developer who loves building clean and efficient
            applications. I enjoy working across the full stack and am always
            eager to pick up new technologies.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When I&apos;m not coding, you can find me exploring the latest tech
            trends, gaming, or tinkering on personal projects. I&apos;m currently
            open to new opportunities — feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["TypeScript", "React", "Next.js", "Python", "Node.js", "PostgreSQL"].map((skill) => (
              <span
                key={skill}
                className="text-xs bg-gray-800 border border-gray-700 text-cyan-400 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
