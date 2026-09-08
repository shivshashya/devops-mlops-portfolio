export type Project = {
	id: string;
	slug: string;
	label: string;
	title: string;
	description: string;
	challenge: string;
	approach: string;
	learned: string;
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
		slug: 'local-cicd-kubernetes',
		label: '01 / Continuous delivery',
		title: 'Local CI/CD to Kubernetes',
		description:
			'A local delivery workflow that moves a FastAPI service through build, validation, container packaging, and Kubernetes deployment with readiness checks.',
		challenge: 'Make every handoff from a source change to a running workload visible and repeatable.',
		approach: 'Connect validation, image packaging, deployment, and readiness feedback in one local delivery path.',
		learned: 'A delivery pipeline earns trust when its failure signals are as clear as its success path.',
		stack: ['Jenkins', 'Docker', 'Kubernetes', 'FastAPI', 'PostgreSQL'],
		steps: ['Source change', 'Pipeline validation', 'Container image', 'Kind deployment', 'Readiness signal'],
		accent: 'teal',
	},
	{
		id: 'troubleshooting',
		slug: 'kubernetes-troubleshooting',
		label: '02 / Operational evidence',
		title: 'Kubernetes Troubleshooting Agent',
		description:
			'An investigation flow that gathers cluster evidence first, then produces an explainable diagnosis with clear boundaries between observed facts and optional AI assistance.',
		challenge: 'Turn a vague cluster problem into an evidence trail that a person can inspect.',
		approach: 'Collect Kubernetes context first, separate facts from inference, then surface a concise report.',
		learned: 'Helpful automation starts by making the current state legible, not by pretending certainty.',
		stack: ['FastAPI', 'Next.js', 'kind', 'kubectl', 'OpenRouter'],
		steps: ['Request', 'Cluster evidence', 'Health context', 'Diagnosis', 'Actionable report'],
		accent: 'orange',
	},
	{
		id: 'mlops',
		slug: 'ai-video-to-lead-extraction',
		label: '03 / Applied MLOps project',
		title: 'AI Video-to-Lead Extraction',
		description:
			'A local vision-assisted pipeline that turns video frames into structured lead candidates with checkpoints, validation, provenance, and human review before export.',
		challenge: 'Keep local AI extraction useful without losing traceability or human oversight.',
		approach: 'Break processing into recoverable stages, retain provenance, validate outputs, and review before export.',
		learned: 'The strongest AI workflow is one that makes it easy to verify, correct, and recover work.',
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
