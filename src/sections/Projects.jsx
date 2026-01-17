import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"
import { ChevronDown, ChevronUp } from "lucide-react"
import { PROJECTS } from "../data/projects"

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 18, transition: { duration: 0.25 } },
}

const layoutTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] }

export default function Projects() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, 6)

  return (
    <Section id="projects" title="Projects" className="pt-10 pb-20">
      <motion.div
        layout
        transition={{ layout: layoutTransition }}
        className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.title}
              layout
              variants={cardVariants}
              initial={false}     // prevents existing cards from re-animating
              animate="show"
              exit="exit"
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* button smoothly moves with layout */}
      <motion.div layout className="mt-8 flex justify-center">
        <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
            {expanded ? (
            <>
                Show less <ChevronUp className="h-4 w-4 opacity-80" />
            </>
            ) : (
            <>
                Show more <ChevronDown className="h-4 w-4 opacity-80" />
            </>
            )}
        </button>
      </motion.div>
    </Section>
  )
}
