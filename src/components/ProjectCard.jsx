import { ArrowUpRight, ExternalLink, Github, Terminal, Video, FileText } from "lucide-react";
import SkillPill from "./SkillPill"
import { SKILL_ICONS } from "../data/skillIcons"

export default function ProjectCard({
  title,
  description,
  tech = [],
  image,
  websiteUrl,
  sourceUrl,
  demoUrl,
  writeupUrl,
  extraLink, // optional: { label: "Model", url: "..." }
}) {
  const hasLinks = websiteUrl || sourceUrl || demoUrl || writeupUrl || extraLink?.url

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
      <div className="relative h-36 sm:h-40 lg:h-44 border-b border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover"
            draggable="false"
          />
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10 dark:from-white/0 dark:via-white/0 dark:to-white/10" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>

          <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 transition group-hover:opacity-100 dark:text-zinc-500" />
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 line-clamp-4 dark:text-zinc-300">
          {description}
        </p>

        {/* Skill pills */}
        {tech.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {tech.map((name) => {
                const isCli = name === "CLI / Bash"

                return (
                  <SkillPill
                    key={name}
                    label={name}
                    icon={!isCli ? SKILL_ICONS[name] : undefined}
                    Icon={isCli ? Terminal : undefined}
                    size="sm"
                  />
                )
              })}
            </div>
          </div>
        )}

        {/* Bottom links */}
        {hasLinks && (
          <div className="mt-auto pt-5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs">
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
                >
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  Website
                </a>
              )}

              {sourceUrl && (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
                >
                  <Github className="h-3.5 w-3.5 opacity-80" />
                  Code
                </a>
              )}

              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
                >
                  <Video className="h-3.5 w-3.5 opacity-80" />
                  Demo
                </a>
              )}

              {writeupUrl && (
                <a
                  href={writeupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
                >
                  <FileText className="h-3.5 w-3.5 opacity-80" />
                  Write-up
                </a>
              )}

              {extraLink?.url && (
                <a
                  href={extraLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
                >
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  {extraLink.label || "Link"}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}