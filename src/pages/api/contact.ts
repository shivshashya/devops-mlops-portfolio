import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { Resend } from 'resend';

export const prerender = false;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const reply = (message: string, status: number) =>
	new Response(JSON.stringify({ message }), {
		status,
		headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
	});

export const POST: APIRoute = async ({ request }) => {
	const contentType = request.headers.get('content-type') ?? '';
	if (!contentType.includes('application/json')) {
		return reply('Please submit the form from this portfolio.', 415);
	}

	let values: Record<string, unknown>;
	try {
		values = await request.json();
	} catch {
		return reply('Please check the form and try again.', 400);
	}

	const name = typeof values.name === 'string' ? values.name.trim() : '';
	const email = typeof values.email === 'string' ? values.email.trim() : '';
	const message = typeof values.message === 'string' ? values.message.trim() : '';
	const website = typeof values.website === 'string' ? values.website.trim() : '';

	if (website) return reply('Message received.', 200);
	if (name.length < 2 || name.length > 100 || !emailPattern.test(email) || message.length < 12 || message.length > 3000) {
		return reply('Please provide your name, a valid email, and a message of at least 12 characters.', 400);
	}

	if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
		return reply('The contact form is not configured yet. Please use the email link instead.', 503);
	}

	try {
		const resend = new Resend(env.RESEND_API_KEY);
		const { error } = await resend.emails.send({
			from: env.CONTACT_FROM_EMAIL,
			to: [env.CONTACT_TO_EMAIL],
			replyTo: email,
			subject: `Portfolio message from ${name}`,
			text: `From: ${name} <${email}>\n\n${message}`,
		});

		if (error) return reply('Your message could not be sent right now. Please try again later.', 502);
		return reply('Thanks — your message is on its way.', 200);
	} catch {
		return reply('Your message could not be sent right now. Please try again later.', 502);
	}
};
