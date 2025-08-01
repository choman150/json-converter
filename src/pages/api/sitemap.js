export default function handler(req, res) {
    // 로그 찍기 (Vercel 로그에서 확인 가능)
    console.log("✅ [SITEMAP] Request received:", {
        method: req.method,
        ua: req.headers["user-agent"],
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    });

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://choman150.click/</loc>
      <lastmod>2025-07-31</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://choman150.click/about</loc>
      <lastmod>2025-07-31</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://choman150.click/privacy-policy</loc>
      <lastmod>2025-07-31</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://choman150.click/contact</loc>
      <lastmod>2025-07-31</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://choman150.click/how-to</loc>
      <lastmod>2025-07-31</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>https://choman150.click/faq</loc>
      <lastmod>2025-07-31</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>https://choman150.click/flattening-json</loc>
      <lastmod>2025-07-31</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  </urlset>`;

    res.status(200).send(sitemap);
}
