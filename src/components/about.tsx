import { Section, SectionHeader } from './ui/Section'
import { about } from '../content'
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        label="01 — About"
        title="About"
        subtitle={about.subtitle}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-8 grid gap-12 sm:grid-cols-12"
      >
        {/* Bio */}
        <div className="sm:col-span-7 space-y-4">
          {about.paragraphs.map((p, i) => (
            <motion.p key={i} variants={itemVariants} className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {p}
            </motion.p>
          ))}
        </div>

        {/* Avatar + facts */}
        <motion.div variants={itemVariants} className="sm:col-span-5 flex flex-col gap-6">
          {/* Avatar */}
          <div className="flex justify-start sm:justify-center">
            <div className="group relative w-28 sm:w-32">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100" aria-hidden />
              <img
                src={new URL('../assets/avatar.png', import.meta.url).toString()}
                alt="Immanuel Sohn"
                className="relative block h-auto w-full rounded-full ring-2 ring-zinc-200/60 dark:ring-zinc-800/60 transition-[ring-color] duration-300 group-hover:ring-cyan-500/50"
                loading="lazy"
                width={128}
                height={128}
              />
            </div>
          </div>

          {/* Currently focusing on */}
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-zinc-400 uppercase mb-3">Currently exploring</p>
            <ul className="space-y-2">
              {about.learnings.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}