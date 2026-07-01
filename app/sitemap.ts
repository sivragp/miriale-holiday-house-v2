import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Sitemap dinamica con tutte le route reali del sito.
 * Il sito è bilingue su singola URL (toggle IT/EN client-side): ogni pagina
 * serve entrambe le lingue allo stesso indirizzo, quindi gli alternates
 * hreflang puntano alla stessa URL.
 */
type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

const ROUTES: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/la-casa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/miri", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ale", priority: 0.9, changeFrequency: "monthly" },
  { path: "/cosa-fare-intorno", priority: 0.7, changeFrequency: "monthly" },
  { path: "/recensioni", priority: 0.7, changeFrequency: "weekly" },
  { path: "/la-famiglia", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contatti", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => {
    const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
    return {
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: { "it-IT": url, en: url, "x-default": url },
      },
    };
  });
}
