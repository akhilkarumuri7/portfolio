import { motion } from "framer-motion"
import { EXPERIENCE } from "../data/experience"
import { SKILL_ICONS } from "../data/skillIcons"
import Section from "../components/Section"
import SkillPill from "../components/SkillPill"

const listVariants = {
  hidden: {},
  show: {
    transition: {
      // items animate one after another
      staggerChildren: 0.12,
      // header comes in first, then items start
      delayChildren: 0.15, // match/align with your titleDelay (0.8)
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.61, 0.35, 1] },
  },
}

function ExperienceItem({ item, isLast }) {
  return (
    <motion.div
      className="relative pl-10 sm:pl-12"
      variants={itemVariants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Timeline rail (bolder) */}
      <div
        className={[
          "absolute left-3 top-0 border-l-2 border-dashed",
          "border-zinc-400/80 dark:border-zinc-500/70",
          isLast ? "h-10" : "h-full",
        ].join(" ")}
      />

      {/* Timeline dot (bolder) */}
      <div className="absolute left-[6px] top-3 h-4 w-4 rounded-full bg-zinc-400 dark:bg-zinc-500 ring-4 ring-zinc-950/10 dark:ring-white/10" />

      {/* Header row */}
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Logo */}
        <div
          className={[
            "shrink-0 overflow-hidden rounded-2xl",
            "bg-white/70 dark:bg-zinc-900/60",
            "border border-zinc-200/60 dark:border-zinc-800/60",
            "grid place-items-center",
            "h-[60px] w-[60px] sm:h-[92px] sm:w-[92px]",
          ].join(" ")}
        >
          {item.logoSrc ? (
            <img
              src={item.logoSrc}
              alt={`${item.company} logo`}
              className="h-full w-full object-cover"
              draggable="false"
            />
          ) : (
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {item.logoText ?? item.company?.slice(0, 3)}
            </span>
          )}
        </div>

        {/* Text block */}
        <div className="min-w-0">
          <h3 className="text-lg sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug">
            {item.role}
          </h3>

          <div className="mt-0.5 sm:mt-1 text-sm sm:text-lg font-medium text-zinc-700 dark:text-zinc-300">
            {item.company}
            {item.location ? (
              <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                {" "}
                • {item.location}
              </span>
            ) : null}
          </div>

          <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {item.start} – {item.end}
          </div>
        </div>
      </div>

      {/* Bullets */}
      {item.bullets?.length ? (
        <ul className="mt-4 sm:mt-5 space-y-2 text-zinc-700 dark:text-zinc-300">
          {item.bullets.map((b, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
              <span className="text-sm sm:text-[15px] leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Skills */}
      {item.tech?.length ? (
        <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <SkillPill key={t} label={t} icon={SKILL_ICONS[t]} />
          ))}
        </div>
      ) : null}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience" className="pt-10 pb-6" titleDelay={0.8}>
      <motion.div
        className="mt-10 space-y-12"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {EXPERIENCE.map((item, idx) => (
          <ExperienceItem
            key={`${item.company}-${item.role}-${idx}`}
            item={item}
            isLast={idx === EXPERIENCE.length - 1}
          />
        ))}
      </motion.div>
    </Section>
  )
}
