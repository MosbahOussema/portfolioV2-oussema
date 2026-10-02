# Oussama Mosbah — Frontend Engineer

Official portfolio: [www.oussamamosbah.com](https://www.oussamamosbah.com/). Oussama Mosbah is a Frontend Engineer based in Sousse, Tunisia, working with React, Next.js and TypeScript. This React and Vite project presents his experience, selected projects, services, and contact channels in English and French.

## Tech Stack

- React 18
- Vite
- Component-scoped CSS files
- EmailJS
- React Toastify
- Self-hosted Plus Jakarta Sans (Fontsource, OFL-1.1)
- Build-time React pre-rendering for English and French

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill the EmailJS/contact values:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_CONTACT_EMAIL=
VITE_LINKEDIN_URL=
VITE_GITHUB_URL=
VITE_WHATSAPP_PHONE=
```

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` optimizes derived images, builds the client, and pre-renders `/` and `/fr/` into `dist/`.
- `npm run preview` previews the production build locally.
- `npm run lint` checks the code with ESLint.
- `npm run test:seo` validates the production HTML, JSON-LD, metadata, sitemap, assets and size budgets (run after the build).
- `npm run test:production-seo` checks the deployed public pages, crawler access, sitemap and canonical-domain redirects after release. It is expected to fail until the new build is published.
- `npm run test:e2e` builds the site and runs Playwright browser tests against the production preview (installed Chrome required).

## SEO and deployment

The canonical site is `https://www.oussamamosbah.com/`. The French version is at `/fr/`. Both pages contain the portfolio content before JavaScript runs; React hydrates it to preserve interactions.

Run `npm run lint`, `npm run build`, `npm run test:seo`, and `npm run test:e2e` before publishing. Deploy `dist/`; do not deploy `dist-ssr/`. Use `npm run build`, not a bare `vite build`, because pre-rendering is required.

Public profile defaults work without environment variables. EmailJS still needs its configured environment values for submissions. The optional `VITE_GOOGLE_SITE_VERIFICATION` is a public Search Console verification token; DNS verification is also supported without a code change.

See [the SEO implementation, test results and launch checklist](docs/SEO.md) for the plan to follow after deployment.
