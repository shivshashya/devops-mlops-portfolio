// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// Cloudflare's local Worker runner can retain a dependency path while Vite
// re-optimizes the SSR cache. Keeping the Worker environment's dependency set
// stable prevents the resulting `deps_ssr/... file does not exist` crash in dev.
const stabilizeCloudflareDev = {
	name: 'stabilize-cloudflare-dev',
	apply: 'serve',
	configEnvironment(name) {
		if (name === 'client') return;

		return {
			optimizeDeps: {
				include: ['resend'],
				noDiscovery: true,
			},
		};
	},
};

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare({ imageService: 'passthrough' }),
	session: false,
	integrations: [sitemap()],
	vite: {
		plugins: [stabilizeCloudflareDev],
	},
	site: 'https://devops-mlops-portfolio-preview-20260908.swift-lime-0666.chatgpt.site',
});
