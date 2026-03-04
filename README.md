# Barton Heyman – SEO Landing Page

React + Vite marketing site with prerendering for crawlers and search engines.

## Build & deploy

- **`npm run build`** – Builds the app, then prerenders key routes (so crawlers get full HTML) and generates `sitemap.xml`. Output is in `dist/`.
- **`npm run build:no-prerender`** – Build only + sitemap (no Puppeteer). Use if prerender fails in CI (e.g. set `SKIP_PRERENDER=1` and run the normal build, or use this script).

### Deploy from your machine (no GitHub repo access needed)

You can build (with prerender) and deploy from your own computer. No GitHub secrets required.

1. **Log in to Vercel** (one time)  
   ```bash
   npx vercel login
   ```
   Complete the login in the browser.

2. **Link this folder to the Vercel project**  
   You need a `.vercel` folder so the CLI knows which project to deploy to.
   - If **`vercel link`** works: run `npx vercel link`, pick the right scope, and choose the existing project.
   - If it says **“Project not found”**: someone with Vercel access (or you, if you have the project in the dashboard) can get the IDs and you create the link by hand:
     - Create a folder: `mkdir -p .vercel`
     - Create `.vercel/project.json` with:
       ```json
       {
         "orgId": "PUT_ORG_ID_HERE",
         "projectId": "PUT_PROJECT_ID_HERE"
       }
       ```
     - **Org ID**: Vercel dashboard → your team/account → Settings → General → Team ID (or similar).  
     - **Project ID**: Vercel dashboard → open the project → Settings → General → Project ID.

3. **Vercel project build settings**  
   In the Vercel dashboard for this project, set **Build Command** to **`npm run build`** and **Output Directory** to **`dist`** (so `vercel build` runs the full build including prerender).

4. **Build and deploy**  
   ```bash
   npm run deploy
   ```
   This runs `vercel build` (which runs your `npm run build` and prerender) then `vercel deploy --prebuilt --prod`.

5. **Verify**  
   ```bash
   curl -s https://www.bartonheyman.com/ | grep -o '<div id="root">.*</div>' | head -c 500
   ```  
   You should see a long HTML string inside `#root`, not just `<div id="root"></div>`.

---

### Deploy with GitHub Actions (if you have repo Settings access)

Vercel’s build environment often can’t run Puppeteer, so prerendered HTML isn’t produced when Vercel builds on push. Using GitHub Actions to build (with prerender) and deploy the pre-built output fixes that.

1. **Secrets** – In your GitHub repo: **Settings → Secrets and variables → Actions**. Add:
   - `VERCEL_TOKEN` – From [Vercel → Settings → Tokens](https://vercel.com/account/tokens): create a token.
   - `VERCEL_ORG_ID` – From Vercel project **Settings → General** (or run `vercel link` locally and check `.vercel/project.json`).
   - `VERCEL_PROJECT_ID` – Same place as org ID.

2. **Vercel project** – In Vercel: **Project → Settings → General**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Ignore Build Step:** `true` (or `echo skip`) so Vercel doesn’t build on push; only the Action deploys.

3. **Deploy** – Push to `main` (or run the “Build and deploy to Vercel” workflow manually). The Action runs `vercel build` (which runs your build + prerender) then `vercel deploy --prebuilt`.

4. **Verify** – After deploy, run:  
   `curl -s https://www.bartonheyman.com/ | grep -o '<div id="root">.*</div>' | head -c 500`  
   You should see a long HTML string inside `#root`, not just `<div id="root"></div>`.

## SEO (crawlers & blank page fix)

- **Prerender** – Key routes (`/`, `/about`, `/power`, etc.) are rendered to static HTML at build time so “View source” and crawlers see content, not an empty `<div id="root">`.
- **robots.txt** – In `public/robots.txt`: allows all crawlers and points to `Sitemap: https://www.bartonheyman.com/sitemap.xml`.
- **sitemap.xml** – Generated into `dist/` at build; submit this URL in Google Search Console.
- If the build environment can’t run Puppeteer (e.g. some CI), set **`SKIP_PRERENDER=1`** before `npm run build`; sitemap and robots still apply, but prerendered HTML won’t be generated for that build.

## Development

- `npm run dev` – Start dev server
- `npm run preview` – Serve production build locally
- `npm run lint` – Run ESLint
