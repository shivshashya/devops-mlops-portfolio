export type Project = {
	id: string;
	label: string;
	title: string;
	description: string;
	stack: string[];
	steps: string[];
	accent: 'teal' | 'orange' | 'ink';
};

export const profile = {
	name: '[Your Name]',
	role: 'DevOps Engineer · MLOps Projects',
	intro:
		'I design dependable paths from a developer’s first commit to production — then make them observable, repeatable, and easier to improve.',
	availability: 'Open to DevOps and platform engineering opportunities',
	location: '[Your city, country]',
	email: 'hello@your-domain.com',
	linkedin: 'https://linkedin.com/in/your-handle',
	github: 'https://github.com/your-handle',
};

export const capabilities = [
	{
		number: '01',
		title: 'Delivery systems',
		description: 'CI/CD pipelines, automated validation, containers, and release confidence.',
	},
	{
		number: '02',
		title: 'Cloud-native operations',
		description: 'Kubernetes workloads, health checks, service networking, and practical recovery.',
	},
	{
		number: '03',
		title: 'Applied MLOps',
		description: 'Local inference workflows, structured outputs, review checkpoints, and auditability.',
	},
];

export const projects: Project[] = [
	{
		id: 'delivery',
		label: '01 / Continuous delivery',
		title: 'Local CI/CD to Kubernetes',
		description:
			'A local delivery workflow that moves a FastAPI service through build, validation, container packaging, and Kubernetes deployment with readiness checks.',
		stack: ['Jenkins', 'Docker', 'Kubernetes', 'FastAPI', 'PostgreSQL'],
		steps: ['Source change', 'Pipeline validation', 'Container image', 'Kind deployment', 'Readiness signal'],
		accent: 'teal',
	},
	{
		id: 'troubleshooting',
		label: '02 / Operational evidence',
		title: 'Kubernetes Troubleshooting Agent',
		description:
			'An investigation flow that gathers cluster evidence first, then produces an explainable diagnosis with clear boundaries between observed facts and optional AI assistance.',
		stack: ['FastAPI', 'Next.js', 'kind', 'kubectl', 'OpenRouter'],
		steps: ['Request', 'Cluster evidence', 'Health context', 'Diagnosis', 'Actionable report'],
		accent: 'orange',
	},
	{
		id: 'mlops',
		label: '03 / Applied MLOps project',
		title: 'AI Video-to-Lead Extraction',
		description:
			'A local vision-assisted pipeline that turns video frames into structured lead candidates with checkpoints, validation, provenance, and human review before export.',
		stack: ['Docker', 'Ollama', 'Qwen Vision', 'Python', 'Excel'],
		steps: ['Video input', 'Frame extraction', 'Local inference', 'Quality review', 'Structured export'],
		accent: 'ink',
	},
];

export const experience = [
	{
		period: 'Now',
		role: 'DevOps & platform engineering focus',
		body: 'Building practical delivery, observability, and cloud-native operations skills through local, end-to-end projects.',
	},
	{
		period: 'In progress',
		role: 'MLOps project practice',
		body: 'Exploring responsible local AI workflows where reliability, reviewability, and data provenance matter as much as model output.',
	},
];
