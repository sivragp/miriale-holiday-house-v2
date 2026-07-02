/**
 * Infrastruttura SEO / GEO (non visibile).
 * Metadata helper + costruttori JSON-LD (schema.org) per l'ottimizzazione su
 * motori di ricerca e motori di risposta AI/LLM. Niente output visivo: qui si
 * generano solo <head> metadata e blocchi <script type="application/ld+json">.
 *
 * Fonte di verità dei dati fattuali: `lib/site.tsx`, `lib/apartments.tsx`,
 * `lib/reviews.tsx`. Non si inventano dati non presenti nel repo.
 */

import type { Metadata } from "next";
import {
  ADDRESS_LINE_1,
  EMAIL,
  MAPS_SHORT,
  WHATSAPP_NUMBER,
} from "@/lib/site";
import type { Appartamento } from "@/lib/apartments";
import { REVIEWS, REVIEW_STATS } from "@/lib/reviews";

/* -------------------------------------------------------------------------- */
/*  Costanti sito                                                             */
/* -------------------------------------------------------------------------- */

/** Dominio canonico = host di produzione servito su Vercel. L'apex
 *  miriale-house.com fa 308 → www.miriale-house.com (host che risponde 200),
 *  quindi il canonical è www. Il vecchio mirialeholidayhouse.it non è collegato. */
export const SITE_URL = "https://www.miriale-house.com";
export const SITE_NAME = "MiriAle Holiday House";
export const TEL = `+${WHATSAPP_NUMBER}`;

/** Immagine OG di default (esterno reale della villa). */
export const DEFAULT_OG_IMAGE = "/images/house/comune-28.jpg";

const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

/* -------------------------------------------------------------------------- */
/*  Metadata helper                                                           */
/* -------------------------------------------------------------------------- */

/** Costruisce i Metadata Next per una pagina: canonical + hreflang, Open Graph
 *  completo e Twitter card. L'HTML servito/indicizzabile è in italiano; EN/ES
 *  sono solo un toggle client-side (vedi LangProvider), non pagine crawlabili
 *  separate. Quindi dichiariamo hreflang solo it-IT + x-default: annotare en/es
 *  su contenuto italiano sarebbe scorretto (Google le ignorerebbe). Aggiungere
 *  en/es solo quando esisteranno URL localizzati server-side. */
export function buildMetadata(opts: {
  title: string;
  description: string;
  /** Path assoluto dalla root, es. "/", "/miri". */
  path: string;
  /** Immagine OG (root-relative o assoluta). Default: esterno villa. */
  ogImage?: string;
}): Metadata {
  const { title, description, path } = opts;
  const url = path;
  const ogImage = opts.ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "it-IT": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: "it_IT",
      alternateLocale: "en_GB",
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Primitive JSON-LD                                                         */
/* -------------------------------------------------------------------------- */

type Json = Record<string, unknown>;

const postalAddress: Json = {
  "@type": "PostalAddress",
  streetAddress: ADDRESS_LINE_1,
  addressLocality: "Fiumicino",
  addressRegion: "RM",
  postalCode: "00054",
  addressCountry: "IT",
};

/** Coordinate della struttura (Via Castagnevizza, Isola Sacra, Fiumicino).
 *  Fonte: posizione fornita dal cliente + geocoding. Livello via. */
const geoCoordinates: Json = {
  "@type": "GeoCoordinates",
  latitude: 41.7500253,
  longitude: 12.2567663,
};

/** LocationFeatureSpecification: amenity confermata (value=true). */
const amenity = (name: string): Json => ({
  "@type": "LocationFeatureSpecification",
  name,
  value: true,
});

/** Amenity comuni alla struttura (dati reali dalle pagine annuncio). */
const BASE_AMENITIES: Json[] = [
  amenity("Free WiFi"),
  amenity("Free private parking"),
  amenity("Air conditioning"),
  amenity("Heating"),
  amenity("Kitchen"),
  amenity("TV"),
  amenity("Shared private garden"),
  amenity("Breakfast terrace"),
  amenity("Non-smoking rooms"),
  amenity("Family friendly"),
];

/** AggregateRating reale da Booking.com (scala /10). */
const aggregateRating: Json = {
  "@type": "AggregateRating",
  ratingValue: REVIEW_STATS.overall,
  bestRating: "10",
  worstRating: "1",
  ratingCount: REVIEW_STATS.count,
};

/** Elenco Review (le 10 recensioni testuali reali di Booking). */
function reviewNodes(): Json[] {
  return REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: `${r.date}-01`,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.score,
      bestRating: "10",
      worstRating: "1",
    },
    reviewBody: r.neg ? `${r.pos.it} ${r.neg.it}` : r.pos.it,
    inLanguage: "it",
  }));
}

/* -------------------------------------------------------------------------- */
/*  Nodi entità                                                               */
/* -------------------------------------------------------------------------- */

export function organizationNode(): Json {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    telephone: TEL,
    logo: abs("/images/logo-miriale.png"),
    image: abs(DEFAULT_OG_IMAGE),
    address: postalAddress,
    sameAs: [MAPS_SHORT],
  };
}

export function webSiteNode(): Json {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: ["it", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** LodgingBusiness principale (la struttura MiriAle nel suo insieme).
 *  `withReviews`: include l'elenco testuale delle recensioni (pagina dedicata). */
export function lodgingBusinessNode(opts?: { withReviews?: boolean }): Json {
  const node: Json = {
    "@type": ["LodgingBusiness", "VacationRental"],
    "@id": `${SITE_URL}/#lodging`,
    name: SITE_NAME,
    description:
      "Casa vacanze a conduzione familiare a Fiumicino: due appartamenti indipendenti (Miri e Ale) o la casa intera, fino a 10 ospiti, a circa 10 minuti dall'aeroporto di Roma Fiumicino (FCO), vicino al mare e a Roma.",
    url: SITE_URL,
    email: EMAIL,
    telephone: TEL,
    address: postalAddress,
    geo: geoCoordinates,
    image: [
      abs("/images/house/comune-28.jpg"),
      abs("/images/house/comune-21.jpg"),
      abs("/images/house/miri-01.jpg"),
      abs("/images/house/ale-01.jpg"),
    ],
    petsAllowed: false,
    smokingAllowed: false,
    checkinTime: "15:00",
    checkoutTime: "11:00",
    numberOfRooms: 4,
    currenciesAccepted: "EUR",
    availableLanguage: ["it", "en", "es"],
    amenityFeature: BASE_AMENITIES,
    aggregateRating,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    sameAs: [MAPS_SHORT],
  };
  if (opts?.withReviews) node.review = reviewNodes();
  return node;
}

/** Accommodation (Apartment) per una singola unità (miri/ale/casa). */
export function apartmentNode(apt: Appartamento): Json {
  const mqValue = parseInt(apt.mq, 10);
  const firstImages = apt.gallery.slice(0, 4).map((g) => abs(g.src));
  return {
    "@type": "Apartment",
    "@id": `${SITE_URL}/${apt.slug}#accommodation`,
    name: apt.titolo?.it ?? `Appartamento ${apt.nome}`,
    description: apt.descrizione.it,
    url: `${SITE_URL}/${apt.slug}`,
    image: firstImages,
    ...(Number.isFinite(mqValue)
      ? {
          floorSize: {
            "@type": "QuantitativeValue",
            value: mqValue,
            unitCode: "MTK",
          },
        }
      : {}),
    numberOfRooms: apt.camere,
    numberOfBedrooms: apt.camere,
    numberOfBathroomsTotal: apt.bagni,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: apt.ospiti,
      unitText: "person",
    },
    petsAllowed: false,
    smokingAllowed: false,
    amenityFeature: BASE_AMENITIES,
    address: postalAddress,
    containedInPlace: { "@id": `${SITE_URL}/#lodging` },
  };
}

/** BreadcrumbList da una lista di step { name, path }. */
export function breadcrumbNode(items: { name: string; path: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*  Graph wrapper                                                             */
/* -------------------------------------------------------------------------- */

/** Avvolge i nodi in un documento JSON-LD @graph. */
export function graph(...nodes: Json[]): Json {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
