# christichung.github.io

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Requires Node 20+ (CI uses Node 22).

## Edit content

All text lives in `src/data/content.ts` — experience, publications, talks, artwork, and links.
PDFs live in `public/docs/`; artwork images go in `public/art/` and are referenced as `/art/filename.jpg`.

## Deploy

Pushing to `main` (or `master`) runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
