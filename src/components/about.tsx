import { motion } from 'motion/react'
import { about } from '../content'

const ease = [0.22, 1, 0.36, 1] as const
const revealItem = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-28 overflow-hidden"
    >
      {/* Decorative side label */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 hidden xl:flex -translate-y-1/2 items-center gap-4"
        style={{ transform: 'translateX(-42%) translateY(-50%) rotate(-90deg)', transformOrigin: 'center' }}
      >
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: 'var(--border-2)', fontFamily: 'var(--font-body)' }}
        >
          About
        </span>
        <span
          className="h-px w-16"
          style={{ backgroundColor: 'var(--border)' }}
        />
      </div>

      <div className="container">
        {/* Section line header */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          style={{ transformOrigin: 'left', backgroundColor: 'var(--border)' }}
          className="h-px w-full mb-12"
        />

        {/* Main grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          {/* Left: Section title + pull quote */}
          <div className="lg:col-span-4">
            <motion.p
              variants={revealItem}
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
            >
              About
            </motion.p>
            <motion.blockquote
              variants={revealItem}
              style={{
                fontFamily: 'var(--font-display)',
                fontVariationSettings: '"wght" 700',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                lineHeight: '1.3',
                color: 'var(--text)',
              }}
            >
  {about.subtitle}
            </motion.blockquote>

            {/* Learnings */}
            <motion.div variants={revealItem} className="mt-10">
              <p
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
              >
                Currently exploring
              </p>
              <ul className="space-y-2">
                {about.learnings.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: 'var(--text-2)', fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--rose)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Paragraphs */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6">
              {about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={revealItem}
                  className="text-base leading-relaxed lg:text-lg"
                  style={{ color: 'var(--text-2)', fontFamily: 'var(--font-body)' }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Stack badges */}
            <motion.div variants={revealItem} className="mt-8 flex flex-wrap gap-2">
              {['Java', 'TypeScript', 'React', 'Spring Boot', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text-2)',
                    backgroundColor: 'var(--surface-2)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
