import { Lightbulb, Palette } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { Card } from './ui/Card'
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
        title="About"
        subtitle={about.subtitle}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-6 grid gap-8 sm:grid-cols-12"
      >
        <div className="sm:col-span-7">
          {about.paragraphs.map((p, i) => (
            <motion.p key={i} variants={itemVariants} className="mt-4 first:mt-0 text-zinc-700 dark:text-zinc-300">
              {p}
            </motion.p>
          ))}
        </div>
        <motion.div variants={itemVariants} className="sm:col-span-5">
          <Card>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Currently focusing on</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {about.learnings.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  {item.toLowerCase().includes('design') ? (
                    <Palette className="mt-0.5 h-4 w-4" />
                  ) : (
                    <Lightbulb className="mt-0.5 h-4 w-4" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}