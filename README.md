# RTS-Style Site (Next.js + CSS Modules)

This project recreates the RTS International page style across:

- `/`
- `/about`
- `/insights`
- `/services`
- `/contact`

`My Account` in the header points to an external URL configured in `content/site.ts`.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Import this folder into a Vercel project.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Output setting: default (managed by Next.js).
5. Deploy.

## Content and branding handoff

Update text, links, and media URLs in:

- `content/site.ts`
- `content/home.ts`
- `content/about.ts`
- `content/insights.ts`
- `content/services.ts`
- `content/contact.ts`

For `My Account`, update `siteConfig.account.href` in `content/site.ts`.
