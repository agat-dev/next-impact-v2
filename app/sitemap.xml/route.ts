import { NextResponse } from "next/server";

// Simule la liste des slugs dynamiques (à remplacer par une vraie source si besoin)
const caseStudiesSlugs = [
  "proditec",
  "doleances",
  "french-touch-seeds",
  "sowee",
  "salon-de-la-carrosserie",
  "hermitage",
  "erp-services",
  "senza-nature",
  "wagner-hamisky",
];

export async function GET() {
  // Liste des routes principales à indexer
  const pages = [
    "",
    "services/wordpress",
    "services/headless",
    "etudes-de-cas",
    "cahier-des-charges",
    "simulateur-tarifs",
    "cms-headless",
    // Ajoute d'autres routes si besoin
  ];

  const baseUrl = "https://next-impact.digital"; // Remplace par ton domaine

  // Ajoute les pages dynamiques études de cas
  const caseStudiesUrls = caseStudiesSlugs.map(
    (slug) => `
  <url>
    <loc>${baseUrl}/etudes-de-cas/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  );

  const urls = [
    ...pages.map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    ),
    ...caseStudiesUrls,
  ].join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}