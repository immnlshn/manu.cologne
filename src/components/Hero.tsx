import { Mail, FolderGit2 } from 'lucide-react'
import { ButtonLink } from './ui/ButtonLink'
import { hero } from '../content'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useMemo } from 'react'

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = useMemo(() => hero.rotatingWords ?? ['passion'], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section id="home" className="relative scroll-mt-28 pt-36 pb-24 sm:pt-40 sm:pb-32">
      <div className="container">
        <div className="relative grid items-center gap-8 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl/tight font-semibold tracking-tight sm:text-5xl/tight"
            >
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{hero.name}</span>.{' '}
              <span className="inline-block">
                I turn complex ideas into{' '}
                <span className="inline-flex items-baseline">
                  <span
                    className="inline-flex items-baseline justify-start w-[12rem]"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWordIndex}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="inline-block text-indigo-600 dark:text-indigo-400"
                      >
                        {words[currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>{' '}
                  software.
                </span>
                <br className="hidden lg:block" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="mt-4 text-base text-zinc-600 dark:text-zinc-400"
            >
              {hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="mt-6 flex gap-3"
            >
              <ButtonLink href="#projects" leftIcon={<FolderGit2 className="h-4 w-4" />}>View Projects</ButtonLink>
              <ButtonLink href="#contact" variant="outline" leftIcon={<Mail className="h-4 w-4" />}>Contact Me</ButtonLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="sm:col-span-5"
          >
            <div className="mx-auto w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96">
              <img
                src={new URL('../assets/avatar.png', import.meta.url).toString()}
                alt={hero.name}
                className="block h-auto w-full"
                loading="eager"
                width={384}
                height={384}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
