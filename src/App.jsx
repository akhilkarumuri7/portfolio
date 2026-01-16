import Navbar from "./components/Navbar"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <Navbar />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-800/35" />
        <div className="absolute right-[-260px] top-[20%] h-[520px] w-[520px] rounded-full bg-zinc-200/40 blur-3xl dark:bg-zinc-800/25" />
      </div>
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
