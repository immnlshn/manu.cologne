import { Github, Linkedin, Mail } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { ButtonLink } from './ui/ButtonLink'
import { contact } from '../content'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader title="Contact" subtitle={contact.subtitle ?? 'Feel free to reach out for project inquiries or collaborations.'} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-6 flex flex-wrap items-center gap-4"
      >
        <motion.div variants={itemVariants}>
          <ButtonLink href={`mailto:${contact.email}`} leftIcon={<Mail className="h-4 w-4" />}>
            Email me
          </ButtonLink>
        </motion.div>
        {contact.socials.map((social) => {
          const Icon = social.kind === 'linkedin' ? Linkedin : social.kind === 'github' ? Github : Mail
          return (
            <motion.div key={social.label} variants={itemVariants}>
              <ButtonLink href={social.href} external variant="outline" leftIcon={<Icon className="h-4 w-4" />}>
                {social.label}
              </ButtonLink>
            </motion.div>
          )
        })}
      </motion.div>
      <div className="h-96" aria-hidden="true" />
    </Section>
  )
}