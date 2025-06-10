import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";


// Récupère dynamiquement les slugs de la documentation (avec catégories)
async function getDocumentationSlugs() {
  const docsDir = path.join(process.cwd(), "content/documentation");
  const categories = await fs.readdir(docsDir, { withFileTypes: true });
  let slugs: string[] = [];

  for (const entry of categories) {
    if (entry.isDirectory()) {
      const categoryDir = path.join(docsDir, entry.name);
      const files = await fs.readdir(categoryDir);
      const categorySlugs = files
        .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
        .map((file) => `${entry.name}/${file.replace(/\.mdx?$/, "")}`);
      slugs = slugs.concat(categorySlugs);
    }
    // Si tu veux aussi les fichiers à la racine de documentation, décommente ci-dessous :
    // else if (entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))) {
    //   slugs.push(entry.name.replace(/\.mdx?$/, ""));
    // }
  }
  return slugs;
}

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
  try {
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

    const baseUrl = "https://next-impact.digital";

// Ajoute les pages dynamiques études de cas
  const caseStudiesUrls = caseStudiesSlugs.map(
    (slug) => `
  <url>
    <loc>${baseUrl}/etudes-de-cas/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  );

    // Récupère dynamiquement les slugs de la documentation (avec catégories)
    const documentationSlugs = await getDocumentationSlugs();
    const documentationUrls = documentationSlugs.map(
      (slug) => `
    <url>
      <loc>${baseUrl}/documentation/${slug}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
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
      ...documentationUrls,
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
  } catch (e) {
    // Log l'erreur pour debug
    console.error("Erreur génération sitemap:", e);
    return new NextResponse(
      "<?xml version='1.0'?><urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'></urlset>",
      {
        status: 200,
        headers: { "Content-Type": "application/xml" },
      }
    );
  }
}