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
            <span className="text-cyan-400 font-semibold">Cedric Wu Tchan Ki</span>, a
            Full Stack Developer at Bell Media based in Montreal, Quebec. I love
            building clean, efficient applications and enjoy working across the
            entire stack.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I enjoy writing clean code and shipping products that work. When
            I&apos;m not at my day job, I&apos;m usually working on side
            projects or exploring new technologies.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
