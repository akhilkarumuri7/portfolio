import { motion } from "framer-motion"

export default function Section({
  id,
  title,
  children,
  className = "",
  titleDelay = 0.15,
}) {
  return (
    <section id={id} className={`px-4 py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: titleDelay,
          }}
        >
          {title}
        </motion.h2>

        {children}
      </div>
    </section>
  )
}
