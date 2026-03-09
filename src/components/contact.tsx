import { motion } from 'motion/react'
import { contact } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-32 overflow-hidden"
    >
      {/* Background accent blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 30% 60%, color-mix(in srgb, var(--rose) 9%, transparent) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 80% 30%, color-mix(in srgb, var(--sage) 7%, transparent) 0%, transparent 65%)
          `,
        }}
      />

      <div className="container">
        {/* Top cap line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{ transformOrigin: 'left', backgroundColor: 'var(--border)' }}
          className="h-px w-full mb-16"
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-xs tracking-[0.25em] uppercase mb-8"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          Get in touch
        </motion.p>

        {/* Big display line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontVariationSettings: '"wght" 700',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
            color: 'var(--text-2)',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}
        >
          {contact.subtitle}
        </motion.p>

        {/* Giant email */}
        <motion.a
          href={`mailto:${contact.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="group block leading-none mb-12"
          style={{
            fontFamily: 'var(--font-display)',
            fontVariationSettings: '"wght" 700',
            fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
            color: 'var(--text)',
            lineHeight: '1.2',
            textDecoration: 'none',
            letterSpacing: '-0.03em',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--lavender)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
        >
          {contact.email}
          <motion.span
            className="ml-4 inline-block text-[0.5em] align-middle"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--lavender)' }}
          >
            →
          </motion.span>
        </motion.a>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="flex items-center gap-8"
        >
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-2)', fontFamily: 'var(--font-body)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--rose)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-2)')}
            >
              {social.label}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
