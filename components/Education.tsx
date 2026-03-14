import SectionWrapper from "./SectionWrapper"

const education = [
  {
    school: "Université du Québec à Montréal",
    degree: "Bachelor's degree, Computer Science",
    years: "2018 – 2021",
    notes: null,
  },
  {
    school: "Collège de Bois-de-Boulogne",
    degree: "Technical DEC in Programming, Information Technology",
    years: "September 2014 – May 2017",
    notes: null,
  },
]

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="relative border-l-2 border-gray-800 pl-8 space-y-12">
        {education.map((entry, i) => (
          <div key={i} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-2 border-gray-950" />

            <span className="text-xs text-cyan-400 font-mono tracking-wider">{entry.years}</span>
            <h3 className="text-xl font-semibold text-white mt-1">{entry.school}</h3>
            <p className="text-gray-400 mt-0.5">{entry.degree}</p>
            {entry.notes && (
              <p className="text-gray-500 text-sm mt-2">{entry.notes}</p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
