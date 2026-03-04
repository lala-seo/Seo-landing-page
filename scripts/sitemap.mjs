/**
 * Generate sitemap.xml in dist/ so crawlers can discover all pages.
 * Uses same BASE_URL as seoConfig (must match production domain).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "..", "dist");
const BASE_URL = process.env.SITEMAP_BASE_URL || "https://www.bartonheyman.com";

const ROUTES = [
  "/",
  "/about",
  "/power",
  "/capital",
  "/technology",
  "/insights",
  "/career",
  "/contact",
  "/press",
  "/videos",
  "/photos",
  "/news",
];

const today = new Date().toISOString().slice(0, 10);

const urls = ROUTES.map(
  (route) =>
    `  <url>\n    <loc>${BASE_URL}${route === "/" ? "" : route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n  </url>`
).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

if (!fs.existsSync(dist)) {
  console.error("dist/ missing. Run vite build first.");
  process.exit(1);
}

fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap, "utf8");
console.log("Wrote dist/sitemap.xml");
