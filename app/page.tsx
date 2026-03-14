import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import WorkHistory from "@/components/WorkHistory"
import Projects from "@/components/Projects"
import Hobbies from "@/components/Hobbies"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <WorkHistory />
      <Projects />
      <Hobbies />
      <Contact />
      <footer className="border-t border-gray-800 text-center text-gray-600 text-sm py-8">
        <p>© {new Date().getFullYear()} Wu Tchan Ki</p>
      </footer>
    </main>
  )
}
