import Section from "../components/Section"
import SkillPill from "../components/SkillPill"
import { SKILL_ICONS } from "../data/skillIcons"
import { Terminal } from "lucide-react"

const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "SQL", "R"],
  },
  {
    title: "Frameworks & Web",
    skills: ["React", "Node.js", "Flask", "Angular", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Unix/Linux", "JIRA", "Google Cloud Vision", "CLI / Bash"],
  },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="mt-10 space-y-8 sm:space-y-10">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {group.title}
            </h3>

            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
              {group.skills.map((name) => {
                const isCli = name === "CLI / Bash"

                return (
                  <SkillPill
                    key={name}
                    label={name}
                    icon={!isCli ? SKILL_ICONS[name] : undefined}
                    Icon={isCli ? Terminal : undefined}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
