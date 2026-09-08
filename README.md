# DevOps + MLOps Portfolio

An Astro portfolio deployed as a Cloudflare Worker. Pages are fast static assets, while `POST /api/contact` runs server-side to deliver messages through Resend.

## Local development

```sh
npm install
npm run dev -- --force
```

The contact form requires these values. Keep them only in a local `.dev.vars` file (never commit it):

```dotenv
RESEND_API_KEY="replace-with-your-key"
CONTACT_TO_EMAIL="your-inbox@example.com"
CONTACT_FROM_EMAIL="Portfolio <hello@example.com>"
```

## Cloudflare deployment

1. Sign in to your Cloudflare account locally:

   ```sh
   npx wrangler login
   ```

2. Add each production secret when prompted. Do not paste values into source files or Git:

   ```sh
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put CONTACT_TO_EMAIL
   npx wrangler secret put CONTACT_FROM_EMAIL
   ```

3. Deploy:

   ```sh
   npm run deploy:cloudflare
   ```

Cloudflare will provide a `workers.dev` URL. A custom domain can be attached later in the Cloudflare dashboard.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev -- --force` | Start Astro development mode |
| `npm run build` | Build for the existing hosted preview workflow |
| `npm run build:cloudflare` | Build the Cloudflare Worker |
| `npm run preview:cloudflare` | Build and run the Worker locally |
| `npm run deploy:cloudflare` | Build and deploy the Worker |
