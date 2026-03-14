import { Section, SectionHeader } from './ui/Section'
import { skillsContent } from '../content'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader label="03 — Craft" title="Skills" subtitle={skillsContent.subtitle} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-10"
      >
        {Object.entries(skillsContent.skills).map(([group, items]) => (
          <motion.div
            key={group}
            variants={rowVariants}
            className="flex flex-col gap-1 border-b border-zinc-100 py-4 dark:border-zinc-800/60 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="w-36 shrink-0 font-[family-name:var(--font-mono)] text-xs tracking-widest text-zinc-400 uppercase">
              {group}
            </span>
            <p className="font-[family-name:var(--font-mono)] text-sm text-zinc-700 dark:text-zinc-300">
              {items.join(' · ')}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
