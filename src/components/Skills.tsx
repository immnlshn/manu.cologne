import { Check } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { Card } from './ui/Card'
import { skillsContent } from '../content'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader title="Skills" subtitle={skillsContent.subtitle} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-6 grid gap-6 sm:grid-cols-3"
      >
        {Object.entries(skillsContent.skills).map(([group, items]) => (
          <motion.div key={group} variants={cardVariants}>
            <Card>
              <h3 className="flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-700 dark:text-zinc-300">
                <Check className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                {group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
