import { Mail, ArrowRight, ChevronDown } from 'lucide-react'
import { ButtonLink } from './ui/ButtonLink'
import { hero } from '../content'
import { motion } from 'motion/react'

const [firstName, ...lastParts] = hero.name.split(' ')
const lastName = lastParts.join(' ')

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-28 pt-44 pb-28 sm:pt-52 sm:pb-36">
      <div className="container">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.p
            {...fade(0)}
            className="mb-6 font-[family-name:var(--font-mono)] text-xs tracking-widest text-cyan-600 dark:text-cyan-400 uppercase"
          >
            Software Engineer
          </motion.p>

          {/* Name — large display */}
          <motion.h1
            {...fade(0.1)}
            className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,12vw,8rem)] font-bold leading-[0.9] tracking-tight text-zinc-900 dark:text-zinc-50"
            aria-label={hero.name}
          >
            <span className="block">{firstName}</span>
            <span className="block text-cyan-600 dark:text-cyan-400">{lastName}.</span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            {...fade(0.25)}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
          >
            {hero.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fade(0.4)}
            className="mt-10 flex flex-wrap gap-3"
          >
            <ButtonLink href="#projects" leftIcon={<ArrowRight className="h-4 w-4" />}>
              View Projects
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline" leftIcon={<Mail className="h-4 w-4" />}>
              Get in Touch
            </ButtonLink>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-24 hidden sm:flex items-center gap-2 text-zinc-400 dark:text-zinc-600"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
