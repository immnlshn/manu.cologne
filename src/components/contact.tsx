import { Github, Linkedin } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { contact } from '../content'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
}

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader label="05 — Say hi" title="Contact" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-10"
      >
        {/* CTA heading */}
        <motion.h3
          variants={itemVariants}
          className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl"
        >
          {contact.subtitle ?? "Let's work together."}
        </motion.h3>

        {/* Email link */}
        <motion.div variants={itemVariants} className="mt-8">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-baseline gap-1 font-[family-name:var(--font-display)] text-xl font-semibold text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 sm:text-2xl"
          >
            {contact.email}
            <span
              className="block h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden
            />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="mt-6 flex items-center gap-5">
          {contact.socials.map((social) => {
            const Icon = iconMap[social.kind] ?? Github
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Icon className="h-4 w-4" />
                {social.label}
              </a>
            )
          })}
        </motion.div>
      </motion.div>
    </Section>
  )
}