import { useState } from 'react'
import { motion } from 'motion/react'
import { projectsContent } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

export function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="projects" className="relative scroll-mt-24 py-28">
      <div className="container">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
            >
              Selected work
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
              Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:block text-sm text-right max-w-xs"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            {projectsContent.subtitle}
          </motion.p>
        </div>

        {/* Project rows */}
        <div>
          {projectsContent.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              onHoverStart={() => setHovered(project.title)}
              onHoverEnd={() => setHovered(null)}
              className="group relative"
            >
              {/* Hover background */}
              <motion.div
                animate={{
                  opacity: hovered === project.title ? 1 : 0,
                  scale: hovered === project.title ? 1 : 0.98,
                }}
                transition={{ duration: 0.22 }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--surface) 70%, transparent)',
                  border: '1px solid var(--border)',
                }}
              />

              <div className="relative grid grid-cols-1 gap-6 px-6 py-8 md:grid-cols-12 md:items-center md:px-8">
                {/* Index number */}
                <div className="hidden md:block md:col-span-1">
                  <span
                    className="text-sm font-medium tabular-nums"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontVariationSettings: '"wght" 700',
                      color: hovered === project.title ? 'var(--lavender)' : 'var(--border-2)',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-3">
                  <h3
                    className="text-lg font-semibold leading-tight transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-display)',
                    fontVariationSettings: '"wght" 700',
                    color: hovered === project.title ? 'var(--lavender)' : 'var(--text)',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {project.title}
                  </h3>
                  {/* Stack pills */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{
                          backgroundColor: 'color-mix(in srgb, var(--sage) 12%, transparent)',
                          color: 'var(--sage)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-2)', fontFamily: 'var(--font-body)' }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Link */}
                <div className="md:col-span-2 md:text-right">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
                      style={{
                        color: hovered === project.title ? 'var(--lavender)' : 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      View code
                      <motion.span
                        animate={{ x: hovered === project.title ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-4 inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                      style={{ color: 'var(--lavender)', fontFamily: 'var(--font-body)' }}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Separator line */}
              <div
                className="h-px mx-6 md:mx-8"
                style={{ backgroundColor: 'var(--border)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

