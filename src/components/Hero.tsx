import { motion } from 'motion/react'
import { hero } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-dvh scroll-mt-0 flex flex-col overflow-hidden"
    >
      {/* ── Background blobs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
          className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full blur-[140px]"
          style={{ backgroundColor: 'color-mix(in srgb, var(--lavender) 10%, transparent)' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.4 }}
          className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: 'color-mix(in srgb, var(--rose) 8%, transparent)' }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="container flex flex-1 items-center pt-24 pb-16 lg:pt-32">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

          {/* Left: text */}
          <div className="lg:col-span-7">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease, delay: 0.05 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase"
              style={{
                border: '1px solid var(--border)',
                backgroundColor: 'color-mix(in srgb, var(--surface) 70%, transparent)',
                color: 'var(--text-2)',
                backdropFilter: 'blur(8px)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--sage)' }}
              />
              Software Engineer
            </motion.div>

            {/* Name — fade+slide reveal, no overflow-hidden so nothing clips */}
            <h1 className="mt-0 leading-none">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.15 }}
                className="block"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontVariationSettings: '"wght" 700',
                  fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                }}
              >
                Immanuel
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.28 }}
                className="block"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontVariationSettings: '"wght" 700',
                  fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  color: 'var(--lavender)',
                }}
              >
                Sohn
              </motion.span>
            </h1>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-5 max-w-lg text-base leading-relaxed lg:text-lg"
              style={{ color: 'var(--text-2)', fontFamily: 'var(--font-body)' }}
            >
              {hero.intro}
            </motion.p>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.55 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'].map((t) => (
                <span
                  key={t}
                  className="rounded-md px-2.5 py-1 text-xs font-medium"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text-2)',
                    backgroundColor: 'var(--surface-2)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.68 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-250"
                style={{
                  backgroundColor: 'var(--text)',
                  color: 'var(--bg)',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--lavender)'
                  ;(e.currentTarget as HTMLElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--text)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--bg)'
                }}
              >
                View projects
                <span className="transition-transform duration-250 group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-250"
                style={{
                  border: '1px solid var(--border-2)',
                  color: 'var(--text-2)',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--lavender)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--lavender)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-2)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                }}
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="hidden lg:flex lg:col-span-5 lg:justify-center lg:items-center"
          >
            <div className="relative" style={{ width: 'clamp(260px, 28vw, 380px)', height: 'clamp(260px, 28vw, 380px)' }}>
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 80px 20px color-mix(in srgb, var(--lavender) 18%, transparent)',
                }}
              />
              {/* Circle crop */}
              <div className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  border: '1.5px solid var(--border)',
                  background: 'radial-gradient(ellipse at 60% 40%, color-mix(in srgb, var(--lavender) 22%, var(--surface-2)), var(--surface))',
                }}
              >
                <img
                  src={new URL('../assets/avatar.png', import.meta.url).toString()}
                  alt={hero.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="container pb-8 flex items-center gap-2 self-end"
        aria-hidden
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--border-2)' }} />
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[11px] tracking-widest uppercase"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  )
}

