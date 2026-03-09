import { motion } from 'motion/react'
import { skillsContent } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

// One accent color per category — cycling through the palette
const categoryAccents = ['--rose', '--sage', '--peach', '--lavender', '--rose']

export function Skills() {
  const entries = Object.entries(skillsContent.skills)

  return (
    <section id="skills" className="relative scroll-mt-24 py-28">
      {/* Background tonal block */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 60%, transparent)' }}
      />

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
            Toolkit
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
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-sm"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            {skillsContent.subtitle}
          </motion.p>
        </div>

        {/* Skill groups — staggered grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([category, skills], groupIndex) => {
            const accentVar = categoryAccents[groupIndex % categoryAccents.length]
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease, delay: groupIndex * 0.07 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: `var(${accentVar})` }}
                  />
                  <span
                    className="text-xs tracking-[0.2em] uppercase font-semibold"
                    style={{ color: `var(${accentVar})`, fontFamily: 'var(--font-body)' }}
                  >
                    {category}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: groupIndex * 0.07 + si * 0.04 }}
                      className="rounded-lg px-3 py-1.5 text-xs font-medium"
                      style={{
                        backgroundColor: `color-mix(in srgb, var(${accentVar}) 8%, var(--surface-2))`,
                        border: `1px solid color-mix(in srgb, var(${accentVar}) 18%, transparent)`,
                        color: 'var(--text-2)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

