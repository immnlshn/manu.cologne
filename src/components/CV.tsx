import { motion } from 'motion/react'
import { experience, education, cvContent } from '../content'
import type { ExperienceItem, EducationItem } from '../types/content'

const ease = [0.22, 1, 0.36, 1] as const

type TimelineItemProps = {
  title: string
  org: string
  period: string
  points: string[]
  index: number
  accent: string
}

function TimelineItem({ title, org, period, points, index, accent }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 0 4px color-mix(in srgb, ${accent} 18%, transparent)`,
        }}
      />
      {/* Vertical line (not last) */}
      <div
        className="absolute left-[5px] top-4 bottom-[-2rem] w-px"
        style={{ backgroundColor: 'var(--border)' }}
      />

      <div
        className="text-xs tracking-[0.15em] uppercase mb-1"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
      >
        {period}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontVariationSettings: '"wght" 700',
          fontSize: '1.05rem',
          color: 'var(--text)',
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p
        className="mt-0.5 text-sm font-medium"
        style={{ color: accent, fontFamily: 'var(--font-body)' }}
      >
        {org}
      </p>
      <ul className="mt-3 space-y-1.5 mb-8">
        {points.map((pt) => (
          <li
            key={pt}
            className="flex items-start gap-2 text-sm leading-relaxed"
            style={{ color: 'var(--text-2)', fontFamily: 'var(--font-body)' }}
          >
            <span
              className="mt-2 h-1 w-1 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--text-muted)' }}
            />
            {pt}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function CV() {
  return (
    <section id="cv" className="relative scroll-mt-24 py-28">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs tracking-[0.25em] uppercase mb-3"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontVariationSettings: '"wght" 700',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--text)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            CV
          </motion.h2>
          {cvContent.subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-2 text-sm"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
            >
              {cvContent.subtitle}
            </motion.p>
          )}
        </div>

        {/* Split columns */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs tracking-[0.25em] uppercase mb-8 flex items-center gap-3"
              style={{ color: 'var(--rose)', fontFamily: 'var(--font-body)' }}
            >
              <span className="h-px w-8" style={{ backgroundColor: 'var(--rose)' }} />
              Experience
            </motion.p>
            {experience.map((e: ExperienceItem, i: number) => (
              <TimelineItem
                key={`${e.role}-${e.org}`}
                title={e.role}
                org={e.org}
                period={e.period}
                points={e.points}
                index={i}
                accent="var(--rose)"
              />
            ))}
          </div>

          {/* Education */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className="text-xs tracking-[0.25em] uppercase mb-8 flex items-center gap-3"
              style={{ color: 'var(--lavender)', fontFamily: 'var(--font-body)' }}
            >
              <span className="h-px w-8" style={{ backgroundColor: 'var(--lavender)' }} />
              Education
            </motion.p>
            {education.map((ed: EducationItem, i: number) => (
              <TimelineItem
                key={`${ed.degree}-${ed.org}`}
                title={ed.degree}
                org={ed.org}
                period={ed.period}
                points={ed.points}
                index={i}
                accent="var(--lavender)"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

