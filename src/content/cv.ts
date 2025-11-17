import type {EducationItem, ExperienceItem, CVContent} from '../types/content'

export const cvContent: CVContent = {
  subtitle: 'Work experience and education.',
}

export const experience: ExperienceItem[] = [
    {
        role: 'Software Engineer (Working Student)',
        org: 'GUS Group',
        period: 'May 2025 – Present',
        points: [
            'Bachelor’s thesis: migration of existing web components to a state- and component-based architecture using Vite, React, and XState.',
            'Defined and conceptualized REST endpoints and contracts for the new architecture.',
            'Developed an internal library and built business-related software in Java.',
        ],
    },
    {
        role: 'Software Engineer (Intern)',
        org: 'GUS Group',
        period: 'Feb 2025 – Apr 2025',
        points: [
            'Built applications that exchange data via a message queue (ActiveMQ Artemis).',
            'Implemented producers/consumers and integration flows for reliable message-based communication.',
        ],
    },
    {
        role: 'Software Engineer (Working Student)',
        org: 'HBA-Consulting AG',
        period: 'Dec 2023 – Jun 2024',
        points: [
            'Developed business software in C# for business use cases.',
            'Created internal developer tools to support engineering workflows.',
        ],
    },
]

export const education: EducationItem[] = [
    {
        degree: 'M.Sc. Computer Science',
        org: 'University of Cologne',
        period: 'Oct 2025 – Present',
        points: [
            'Focus on software architecture, economics, and data-intensive applications.',
            'Coursework and projects oriented toward practical, team-based development.',
        ],
    },
    {
        degree: "B.Sc. Computer Science",
        org: "University of Applied Sciences Bonn-Rhein-Sieg",
        period: "Oct 2022 – Sep 2025",
        points: [
            "Studied core areas of computer science including algorithms, software engineering, systems architecture, databases, networks, and IT security.",
            "Worked on multiple practical projects focusing on web development, distributed systems, and modern development workflows.",
        ],
    }

]
