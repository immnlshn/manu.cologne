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
			title: 'React + XState Thesis Evaluation App',
			description:
				'Thesis evaluation app exploring XState in React. Models complex UI flows as state machines and compares developer experience and maintainability.',
			stack: ['React', 'XState', 'TypeScript'],
			repo: 'https://github.com/immnlshn/thesis-react-xstate',
		},
		{
			title: 'React + Redux Thesis Evaluation App',
			description:
				'Thesis evaluation app exploring Redux in React. Implements centralized state management for complex UI flows and contrasts the approach with state machines.',
			stack: ['React', 'Redux', 'TypeScript'],
			repo: 'https://github.com/immnlshn/thesis-react-redux',
		},
	],
}

// Legacy export for backward compatibility
export const projects = projectsContent.projects
