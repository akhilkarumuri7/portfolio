import { motion } from "framer-motion"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"
import { PROJECTS } from "../data/projects"

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22, // controls "one by one"
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" className="pt-10 pb-20">
      <motion.div
        className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PROJECTS.map((p) => (
          <motion.div key={p.title} variants={cardVariants}>
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
