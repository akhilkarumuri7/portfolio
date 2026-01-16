import headshot from "../assets/headshot.jpg"
import resumePdf from "../assets/Akhil_Karumuri_resume.pdf"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function About() {
  const iconBtn =
    "h-11 w-11 rounded-full grid place-items-center transition-all duration-200 " +
    "border border-zinc-200/60 dark:border-zinc-800/70 " +
    "bg-white/50 dark:bg-zinc-900/40 " +
    "hover:bg-white/80 dark:hover:bg-zinc-900/70 " +
    "active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"

  const iconBase = "h-5 w-5 transition-all duration-200"

  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[360px_1fr] items-center">
          {/* Photo */}
          <div className="mx-auto md:mx-0 w-72 sm:w-80 md:w-[340px] aspect-[5/6] rounded-3xl shadow-sm overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <img
              src={headshot}
              alt="Akhil headshot"
              className="h-full w-full object-cover object-top scale-110"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-teal-700 to-emerald-700 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Akhil Karumuri
            </span>
            </h1>


            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
                I am an undergraduate student at the University of Maryland studying Computer Science on the Machine Learning track. I love solving problems, and I use programming to turn ideas into real, usable products. 
                I'm especially interested in full-stack development and building modern web applications.
            </p>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              {/* LinkedIn (blue) */}
              <a
                className={`${iconBtn} group hover:shadow-[0_0_22px_rgba(59,130,246,0.45)]`}
                href="https://linkedin.com/in/akhil-karumuri/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin
                  className={`${iconBase} text-blue-600 dark:text-blue-400 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.75)]`}
                />
              </a>

              {/* GitHub (purple) */}
              <a
                className={`${iconBtn} group hover:shadow-[0_0_22px_rgba(168,85,247,0.45)]`}
                href="https://github.com/akhilkarumuri7"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github
                  className={`${iconBase} text-purple-600 dark:text-purple-400 group-hover:text-purple-500 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.75)]`}
                />
              </a>

              {/* Email (red) */}
              <a
                className={`${iconBtn} group hover:shadow-[0_0_22px_rgba(239,68,68,0.45)]`}
                href="mailto:akhilkarumuri7@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <Mail
                  className={`${iconBase} text-red-600 dark:text-red-400 group-hover:text-red-500 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.75)]`}
                />
              </a>

              {/* Resume (green) */}
              <a
                className={`${iconBtn} group hover:shadow-[0_0_22px_rgba(34,197,94,0.45)]`}
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
                title="Resume"
              >
                <FileText
                  className={`${iconBase} text-green-600 dark:text-green-400 group-hover:text-green-500 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.75)]`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
