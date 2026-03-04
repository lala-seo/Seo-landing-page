/**
 * Prerender key routes so crawlers get full HTML (fixes blank page / SEO).
 * Runs after `vite build`. Set SKIP_PRERENDER=1 to skip (e.g. if Puppeteer fails in CI).
 */
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "..", "dist");
const port = 4173;

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

function serveDist(req, res) {
  const url = new URL(req.url || "/", `http://localhost:${port}`);
  let filePath = path.join(dist, url.pathname === "/" ? "index.html" : url.pathname);
  if (!path.relative(dist, filePath).startsWith("..") && path.resolve(filePath).startsWith(dist)) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const types = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".xml": "application/xml", ".txt": "text/plain" };
      res.setHeader("Content-Type", types[ext] || "application/octet-stream");
      return res.end(fs.readFileSync(filePath));
    }
    if (fs.existsSync(path.join(filePath, "index.html"))) {
      filePath = path.join(filePath, "index.html");
      res.setHeader("Content-Type", "text/html");
      return res.end(fs.readFileSync(filePath));
    }
  }
  res.setHeader("Content-Type", "text/html");
  res.end(fs.readFileSync(path.join(dist, "index.html")));
}

async function main() {
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("SKIP_PRERENDER=1 — skipping prerender (sitemap/robots still applied).");
    return;
  }

  if (!fs.existsSync(dist) || !fs.existsSync(path.join(dist, "index.html"))) {
    console.error("dist/ or dist/index.html missing. Run vite build first.");
    process.exit(1);
  }

  const server = createServer(serveDist);
  server.listen(port);
  await new Promise((resolve) => server.once("listening", resolve));
  console.log(`Serving dist at http://localhost:${port}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  } catch (err) {
    console.warn("Puppeteer launch failed (run with SKIP_PRERENDER=1 to skip):", err.message);
    server.close();
    return;
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.setUserAgent(
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  );

  for (const route of ROUTES) {
    try {
      const url = `http://localhost:${port}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 20000 });
      await page.waitForSelector("#root > *", { timeout: 8000 }).catch(() => {});
      const html = await page.content();
      const filePath =
        route === "/"
          ? path.join(dist, "index.html")
          : path.join(dist, route.replace(/^\//, ""), "index.html");
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html, "utf8");
      console.log("Prerendered:", route);
    } catch (err) {
      console.warn(`Prerender failed for ${route}:`, err.message);
    }
  }

  await browser.close();
  server.close();
  console.log("Prerender done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
