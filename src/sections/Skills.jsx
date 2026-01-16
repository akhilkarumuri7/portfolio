import { motion } from "framer-motion"
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

const groupVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.045,
    },
  },
}

const pillVariants = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" className="pt-20 pb-10">
      <div className="mt-10 space-y-8 sm:space-y-10">
        {SKILL_GROUPS.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            variants={groupVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: groupIdx * 0.03 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {group.title}
            </h3>

            <motion.div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
              {group.skills.map((name) => {
                const isCli = name === "CLI / Bash"

                return (
                  <motion.div key={name} variants={pillVariants}>
                    <SkillPill
                      label={name}
                      icon={!isCli ? SKILL_ICONS[name] : undefined}
                      Icon={isCli ? Terminal : undefined}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
