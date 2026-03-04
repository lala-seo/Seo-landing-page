# Barton Heyman – SEO Landing Page

React + Vite marketing site with prerendering for crawlers and search engines.

## Build & deploy

- **`npm run build`** – Builds the app, then prerenders key routes (so crawlers get full HTML) and generates `sitemap.xml`. Output is in `dist/`.
- **`npm run build:no-prerender`** – Build only + sitemap (no Puppeteer). Use if prerender fails in CI (e.g. set `SKIP_PRERENDER=1` and run the normal build, or use this script).
- **Vercel** – Deploy the `dist` folder. Static files (e.g. prerendered `/about/index.html`) are served before the SPA rewrite, so search engines receive the prerendered HTML.

## SEO (crawlers & blank page fix)

- **Prerender** – Key routes (`/`, `/about`, `/power`, etc.) are rendered to static HTML at build time so “View source” and crawlers see content, not an empty `<div id="root">`.
- **robots.txt** – In `public/robots.txt`: allows all crawlers and points to `Sitemap: https://www.bartonheyman.com/sitemap.xml`.
- **sitemap.xml** – Generated into `dist/` at build; submit this URL in Google Search Console.
- If the build environment can’t run Puppeteer (e.g. some CI), set **`SKIP_PRERENDER=1`** before `npm run build`; sitemap and robots still apply, but prerendered HTML won’t be generated for that build.

## Development

- `npm run dev` – Start dev server
- `npm run preview` – Serve production build locally
- `npm run lint` – Run ESLint
