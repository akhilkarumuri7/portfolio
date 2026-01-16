import resumePdf from "../assets/Akhil_Karumuri_resume.pdf"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function Footer() {
  const iconBtn =
    "h-10 w-10 rounded-full grid place-items-center transition-all duration-200 " +
    "border border-zinc-200/60 dark:border-zinc-800/70 " +
    "bg-white/50 dark:bg-zinc-900/40 " +
    "hover:bg-white/80 dark:hover:bg-zinc-900/70 " +
    "active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"

  const iconBase = "h-[18px] w-[18px] transition-all duration-200"

  const emailSubject = encodeURIComponent("Portfolio Contact")
  const emailBody = encodeURIComponent(`Hi Akhil,\n\nI wanted to reach out about...\n\nBest,\n`)

  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center gap-5">
          {/* Social icons */}
          <div className="flex items-center justify-center gap-3">
            <a
              className={`${iconBtn} group hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]`}
              href="https://linkedin.com/in/akhil-karumuri/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin
                className={`${iconBase} text-blue-600 dark:text-blue-400 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]`}
              />
            </a>

            <a
              className={`${iconBtn} group hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]`}
              href="https://github.com/akhilkarumuri7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github
                className={`${iconBase} text-purple-600 dark:text-purple-400 group-hover:text-purple-500 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]`}
              />
            </a>

            <a
              className={`${iconBtn} group hover:shadow-[0_0_18px_rgba(239,68,68,0.35)]`}
              href={`mailto:akhilkarumuri7@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              aria-label="Email"
              title="Email"
            >
              <Mail
                className={`${iconBase} text-red-600 dark:text-red-400 group-hover:text-red-500 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]`}
              />
            </a>

            <a
              className={`${iconBtn} group hover:shadow-[0_0_18px_rgba(34,197,94,0.35)]`}
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              title="Resume"
            >
              <FileText
                className={`${iconBase} text-green-600 dark:text-green-400 group-hover:text-green-500 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]`}
              />
            </a>
          </div>

          {/* Simple line */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Made by{" "}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              Akhil Karumuri
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
