import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { Card } from './ui/Card'
import { education, experience, cvContent } from '../content'
import { motion } from 'motion/react'
import { useState } from 'react'

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
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export function CV() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

  const tabs = [
    { key: 'experience' as const, label: 'Experience', icon: BriefcaseBusiness },
    { key: 'education' as const, label: 'Education', icon: GraduationCap },
  ]

  return (
    <Section id="cv">
      <SectionHeader title="CV" subtitle={cvContent.subtitle} />

      {/* Tabs */}
      <div role="tablist" aria-label="CV tabs" className="mt-4 flex gap-2">
        {tabs.map(({ key, label, icon: Icon }) => {
          const selected = activeTab === key
          return (
            <motion.button
              key={key}
              role="tab"
              aria-selected={selected}
              aria-controls={`${key}-panel`}
              id={`${key}-tab`}
              onClick={() => setActiveTab(key)}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.3 }}
              className={
                'relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-3 py-1.5 text-sm transition ' +
                (selected
                  ? 'border-indigo-500 text-indigo-700 dark:border-indigo-400/60 dark:text-indigo-300'
                  : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900')
              }
            >
              {selected && (
                <motion.span
                  layoutId="cv-tab-active-bg"
                  className="absolute inset-0 rounded-full bg-indigo-50 dark:bg-indigo-950/30"
                  transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.25 }}
                  aria-hidden
                />
              )}
              <Icon className="h-4 w-4" /> <span className="relative z-10">{label}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Panels */}
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-50px' }}
        className="mt-6 space-y-6"
      >
        {activeTab === 'experience' && (
          <div role="tabpanel" id="experience-panel" aria-labelledby="experience-tab" className="space-y-6">
            {experience.map((e) => (
              <motion.div key={`${e.role}-${e.org}`} variants={cardVariants}>
                <Card>
                  <h3 className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
                    <BriefcaseBusiness className="h-4 w-4 text-zinc-500" />
                    {e.role} — {e.org}
                  </h3>
                  <p className="text-sm text-zinc-500">{e.period}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div role="tabpanel" id="education-panel" aria-labelledby="education-tab" className="space-y-6">
            {education.map((ed) => (
              <motion.div key={`${ed.degree}-${ed.org}`} variants={cardVariants}>
                <Card>
                  <h3 className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
                    <GraduationCap className="h-4 w-4 text-zinc-500" />
                    {ed.degree} — {ed.org}
                  </h3>
                  <p className="text-sm text-zinc-500">{ed.period}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    {ed.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </Section>
  )
}
