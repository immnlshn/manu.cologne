import type { SkillsContent } from '../types/content'

export const skillsContent: SkillsContent = {
  subtitle: 'Languages, frameworks, tools, and methodologies I work with.',
  skills: {
    Languages: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C#', 'C'],
    Backend: ['Spring Boot', 'Express.js', 'Flask', 'Apache ActiveMQ Artemis'],
    Frontend: ['React', 'Vue', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
    Methodologies: ['Agile', 'Software Modelling', 'Design Thinking'],
    Tools: ['Git', 'Docker', 'ESLint', 'CI/CD', 'Jira', 'Confluence', 'JetBrains IDEs', 'Linux'],
  },
}

// Legacy export for backward compatibility
export const skills = skillsContent.skills
