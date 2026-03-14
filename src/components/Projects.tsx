import { ArrowUpRight, Github } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { projectsContent } from '../content'
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader label="02 — Work" title="Projects" subtitle={projectsContent.subtitle} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {projectsContent.projects.map((p, idx) => (
          <motion.article
            key={p.title}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur transition-[border-color,shadow] duration-200 hover:border-cyan-500/40 hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:hover:border-cyan-400/30"
          >
            {/* Background index number */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-3 select-none font-[family-name:var(--font-display)] text-8xl font-bold leading-none text-zinc-900/[0.04] dark:text-zinc-100/[0.04]"
            >
              {String(idx + 1).padStart(2, '0')}
            </span>

            <header className="relative">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.description}</p>
            </header>

            {/* Tech stack — inline monospace */}
            <p className="relative mt-4 font-[family-name:var(--font-mono)] text-xs text-zinc-400 dark:text-zinc-500">
              {p.stack.join(' · ')}
            </p>

            {/* Links */}
            <footer className="relative mt-5 flex items-center gap-4">
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Live
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              )}
            </footer>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
