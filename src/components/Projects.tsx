import { ExternalLink, Github } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { Card } from './ui/Card'
import { ButtonLink } from './ui/ButtonLink'
import { TagList } from './ui/TagList'
import { projectsContent } from '../content'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader title="Projects" subtitle={projectsContent.subtitle} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-8 grid gap-6 sm:grid-cols-2"
      >
        {projectsContent.projects.map((p) => (
          <motion.div key={p.title} variants={cardVariants}>
            <Card>
              <header>
                <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
              </header>
              <TagList items={p.stack} />
              <footer className="mt-4 flex gap-4">
                {p.href && (
                  <ButtonLink href={p.href} external leftIcon={<ExternalLink className="h-4 w-4" />}>Live</ButtonLink>
                )}
                {p.repo && (
                  <ButtonLink href={p.repo} external variant="outline" leftIcon={<Github className="h-4 w-4" />}>Code</ButtonLink>
                )}
              </footer>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
