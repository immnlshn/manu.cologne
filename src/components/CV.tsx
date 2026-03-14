import { Section, SectionHeader } from './ui/Section'
import { education, experience, cvContent } from '../content'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const entryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

function TimelineEntry({ title, org, period, points }: Readonly<{ title: string; org: string; period: string; points: string[] }>) {
  return (
    <motion.div variants={entryVariants} className="relative border-l-2 border-cyan-500/30 pl-5 dark:border-cyan-400/20">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-[family-name:var(--font-display)] text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {title} <span className="font-normal text-zinc-500">— {org}</span>
        </h4>
        <span className="font-[family-name:var(--font-mono)] text-xs text-zinc-400">{period}</span>
      </div>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-600 dark:text-zinc-400">
        {points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export function CV() {
  return (
    <Section id="cv">
      <SectionHeader label="04 — Background" title="Experience" subtitle={cvContent.subtitle} />

      {/* Experience */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-10 space-y-8"
      >
        {experience.map((e) => (
          <TimelineEntry
            key={`${e.role}-${e.org}`}
            title={e.role}
            org={e.org}
            period={e.period}
            points={e.points}
          />
        ))}
      </motion.div>

      {/* Education */}
      <h3 className="mt-14 font-[family-name:var(--font-mono)] text-xs tracking-widest text-zinc-400 uppercase">Education</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-6 space-y-8"
      >
        {education.map((ed) => (
          <TimelineEntry
            key={`${ed.degree}-${ed.org}`}
            title={ed.degree}
            org={ed.org}
            period={ed.period}
            points={ed.points}
          />
        ))}
      </motion.div>
    </Section>
  )
}
