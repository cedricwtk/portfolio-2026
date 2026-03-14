import SectionWrapper from "./SectionWrapper"

const hobbies = [
  { emoji: "🎮", label: "Gaming" },
  { emoji: "🎵", label: "Music" },
  { emoji: "📚", label: "Reading" },
  { emoji: "🏋️", label: "Fitness" },
  { emoji: "🌍", label: "Traveling" },
  { emoji: "🍳", label: "Cooking" },
  { emoji: "📸", label: "Photography" },
  { emoji: "🖥️", label: "Open Source" },
]

export default function Hobbies() {
  return (
    <SectionWrapper id="hobbies">
      <h2 className="text-3xl font-bold text-white mb-2">Interests & Hobbies</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {hobbies.map((hobby) => (
          <div
            key={hobby.label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-cyan-500/40 transition-colors"
          >
            <span className="text-4xl" role="img" aria-label={hobby.label}>
              {hobby.emoji}
            </span>
            <span className="text-gray-300 text-sm font-medium">{hobby.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
