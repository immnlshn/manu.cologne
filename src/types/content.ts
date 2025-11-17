export type HeroContent = {
  name: string
  intro: string
  rotatingWords?: string[]
}

export type AboutContent = {
  paragraphs: string[]
  learnings: string[]
  subtitle?: string
}

export type Project = {
  title: string
  description: string
  stack: string[]
  href?: string
  repo?: string
}

export type ProjectsContent = {
  projects: Project[]
  subtitle?: string
}

export type SkillsContent = {
  skills: Record<string, string[]>
  subtitle?: string
}

export type CVContent = {
  subtitle?: string
}

export type ExperienceItem = {
  role: string
  org: string
  period: string
  points: string[]
}

export type EducationItem = {
  degree: string
  org: string
  period: string
  points: string[]
}

export type ContactContent = {
  email: string
  socials: { label: string; href: string; kind: 'github' | 'linkedin' | 'other' }[]
  subtitle?: string
}
