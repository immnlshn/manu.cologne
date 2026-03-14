import type { ProjectsContent } from '../types/content'

export const projectsContent: ProjectsContent = {
	subtitle: 'Selected public projects. Professional work available on request.',
	projects: [
		{
			title: 'Todo Application',
			description:
				'A lightweight client-side todo app from a university web engineering course. Local storage persistence, keyboard-friendly task management, and a responsive UI. No backend required.',
			stack: ['HTML', 'CSS', 'TypeScript'],
			repo: 'https://github.com/immnlshn/Web-Engineering-ToDo-Application',
		},
		{
			title: 'Donation Box',
			description:
				'A Raspberry Pi donation system built as a university team project, with the main focus on backend engineering: FastAPI services, GPIO-based hardware integration, and an event bus for robust asynchronous communication between components.',
			stack: ['Python', 'FastAPI', 'GPIO', 'Event Bus', 'React'],
			repo: 'https://github.com/immnlshn/DonationBox',
		}
	],
}

// Legacy export for backward compatibility
export const projects = projectsContent.projects
