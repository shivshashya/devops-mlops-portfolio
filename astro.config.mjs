// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare({ imageService: 'passthrough' }),
	session: false,
	integrations: [sitemap()],
	site: 'https://devops-mlops-portfolio-preview-20260908.swift-lime-0666.chatgpt.site',
});
