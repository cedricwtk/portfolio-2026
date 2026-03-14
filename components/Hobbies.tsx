import SectionWrapper from "./SectionWrapper"

const hobbies = [
  {
    label: "Gaming",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M7.97 16L5 19.03A1.008 1.008 0 013 18.36V18h-.5A2.5 2.5 0 010 15.5v-8A2.5 2.5 0 012.5 5h19A2.5 2.5 0 0124 7.5v8a2.5 2.5 0 01-2.5 2.5H21v.36a1.008 1.008 0 01-2.03.29L16.03 16H7.97zM7 10H5v2h2v2h2v-2h2v-2H9V8H7v2zm9.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>
    ),
  },
  {
    label: "Music",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6zM10 19a2 2 0 110-4 2 2 0 010 4z"/>
      </svg>
    ),
  },
  {
    label: "Fitness",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
      </svg>
    ),
  },
  {
    label: "Photography",
    href: "https://www.instagram.com/thecroworker_photography/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M9 3L7.17 5H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.17L15 3H9zm3 15a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    ),
  },
  {
    label: "Videography",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"/>
      </svg>
    ),
  },
]

export default function Hobbies() {
  return (
    <SectionWrapper id="hobbies">
      <h2 className="text-3xl font-bold text-white mb-2">Interests & Hobbies</h2>
      <div className="w-12 h-1 bg-cyan-500 mb-10" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {hobbies.map((hobby) => {
          const classes = "bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-cyan-500/40 transition-colors group"
          const content = (
            <>
              <span className="text-cyan-500 group-hover:text-cyan-400 transition-colors">
                {hobby.icon}
              </span>
              <span className="text-gray-300 text-sm font-medium">{hobby.label}</span>
            </>
          )
          return hobby.href ? (
            <a key={hobby.label} href={hobby.href} target="_blank" rel="noopener noreferrer" className={classes}>
              {content}
            </a>
          ) : (
            <div key={hobby.label} className={classes}>
              {content}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
