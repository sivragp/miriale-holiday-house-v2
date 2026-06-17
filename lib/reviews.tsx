/** Recensioni reali MiriAle House (Booking.com · 8.8 "Favoloso" · 129 recensioni).
 *
 * Testo ITALIANO VERBATIM estratto dall'annuncio Booking (scrape 2026-06-17);
 * versione EN = traduzione fedele. Booking espone a testo integrale solo queste
 * 10 recensioni (con pro/contro, punteggio, data e tipo di viaggiatore reali);
 * delle altre 119 sono pubblici solo l'aggregato e i sub-punteggi.
 */

import type { B } from "@/lib/apartments";

export type TravellerType =
  | "COUPLE"
  | "YOUNG_COUPLE"
  | "FAMILY_WITH_YOUNG_CHILDREN"
  | "GROUP"
  | "WITH_FRIENDS"
  | "SOLO_TRAVELLER";

export type Purpose = "LEISURE" | "BUSINESS";

export type Review = {
  name: string;
  cc: string; // codice paese ISO (per bandiera)
  score: number; // /10
  date: string; // "YYYY-MM"
  traveller: TravellerType;
  purpose: Purpose;
  pos: B; // testo positivo
  neg?: B; // testo negativo (se presente)
};

export const REVIEWS: Review[] = [
  {
    name: "Antonio", cc: "it", score: 9, date: "2025-09", traveller: "WITH_FRIENDS", purpose: "LEISURE",
    pos: {
      it: "Struttura molto carina in una villetta su più piani, pulita e vicina all'aeroporto. Host molto gentile. Ottima la possibilità del caffè al mattino e del parcheggio interno (è necessario essere motorizzati trovandosi in una bella zona residenziale).",
      en: "A very nice place in a multi-storey villa, clean and close to the airport. Very kind host. Great to have coffee in the morning and private parking inside (you need a car as it's in a lovely residential area).",
    },
  },
  {
    name: "Ulisse", cc: "it", score: 10, date: "2025-07", traveller: "FAMILY_WITH_YOUNG_CHILDREN", purpose: "LEISURE",
    pos: {
      it: "Appartamento molto accogliente, posizione buona sia per il mare che per la Fiera di Roma.",
      en: "Very welcoming apartment, great location both for the sea and for Fiera di Roma.",
    },
    neg: {
      it: "Doccia dell'appartamento in mansarda leggermente scomoda per chi è alto.",
      en: "The shower in the attic apartment is a little awkward for tall people.",
    },
  },
  {
    name: "Massimo", cc: "it", score: 10, date: "2025-05", traveller: "GROUP", purpose: "LEISURE",
    pos: {
      it: "Ottima struttura, molto carina, pulita e confortevole per trascorrere la notte prima della partenza da Fiumicino per gli Stati Uniti! Fabio, il gestore, gentilissimo e super disponibile, ci ha attesi per il check-in e ci ha aiutati a raggiungere l'aeroporto in perfetto orario per agevolare la nostra partenza 🤩",
      en: "Great, very nice, clean and comfortable place to spend the night before flying from Fiumicino to the United States! Fabio, the host, was extremely kind and helpful — he waited for us at check-in and helped us reach the airport right on time for our departure 🤩",
    },
  },
  {
    name: "Alfonso", cc: "it", score: 8, date: "2025-04", traveller: "GROUP", purpose: "LEISURE",
    pos: {
      it: "Ambienti puliti, letti comodi e il cucinino per la colazione. Ottima accoglienza. Gentilissimo Fabio, che ci ha accolto e si è offerto di venirci a prendere alla stazione. Cosa molto apprezzata.",
      en: "Clean rooms, comfortable beds and a kitchenette for breakfast. Lovely welcome. Fabio was so kind — he welcomed us and offered to pick us up at the station. Much appreciated.",
    },
    neg: {
      it: "Qualcosa da sistemare nel bagno, doccia un po' scomoda. Da tenere presente le due rampe di scale per chi ha problemi di mobilità.",
      en: "A few things to fix in the bathroom, the shower is a bit awkward. Bear in mind the two flights of stairs if you have mobility issues.",
    },
  },
  {
    name: "Martina", cc: "it", score: 9, date: "2024-09", traveller: "FAMILY_WITH_YOUNG_CHILDREN", purpose: "LEISURE",
    pos: {
      it: "Appartamento molto carino e dotato di tutto il necessario. Molto comodo il parcheggio privato all'interno della struttura. Host veramente molto gentile e disponibile a rispondere alle nostre esigenze.",
      en: "Very nice apartment, equipped with everything you need. The private parking inside the property is really handy. A genuinely kind host, happy to meet our needs.",
    },
  },
  {
    name: "Paparcone", cc: "us", score: 10, date: "2024-08", traveller: "FAMILY_WITH_YOUNG_CHILDREN", purpose: "LEISURE",
    pos: {
      it: "Fabio e sua moglie sono stati gentilissimi e molto ospitali. Ci hanno aiutato con le valigie e si sono messi a disposizione per qualsiasi cosa. Anche il collegamento con l'aeroporto è stato efficiente e veloce: Fabio guida un taxi e ci ha accompagnato al mattino prestissimo. Decisamente torneremo da loro quando ne avremo la necessità :)",
      en: "Fabio and his wife were extremely kind and welcoming. They helped us with our luggage and were available for anything. The airport connection was efficient and fast too: Fabio drives a taxi and took us there very early in the morning. We'll definitely be back when we need to :)",
    },
  },
  {
    name: "Bruno", cc: "it", score: 10, date: "2024-07", traveller: "YOUNG_COUPLE", purpose: "LEISURE",
    pos: {
      it: "Bella struttura, pulita, proprietario disponibile e gentile.",
      en: "Lovely place, clean, with a helpful and kind owner.",
    },
  },
  {
    name: "Hannes", cc: "it", score: 10, date: "2024-06", traveller: "FAMILY_WITH_YOUNG_CHILDREN", purpose: "LEISURE",
    pos: {
      it: "Mi sono trovato molto bene!! Bellissimo appartamento, proprietario molto disponibile!! Sicuramente ritornerò!",
      en: "I had a great time!! Beautiful apartment, very helpful owner!! I'll definitely be back!",
    },
  },
  {
    name: "Marco", cc: "it", score: 10, date: "2024-05", traveller: "FAMILY_WITH_YOUNG_CHILDREN", purpose: "BUSINESS",
    pos: {
      it: "Host gentile, locale pulito e ottima posizione. Lo consiglio!",
      en: "Kind host, clean place and great location. Recommended!",
    },
  },
  {
    name: "Guglielmo", cc: "it", score: 8, date: "2024-03", traveller: "WITH_FRIENDS", purpose: "BUSINESS",
    pos: {
      it: "Posto tranquillo, facilmente raggiungibile dalla Fiera (con l'automobile), con posto auto riservato. Proprietario disponibile e cordiale.",
      en: "Quiet spot, easy to reach from the Fiera (by car), with reserved parking. Helpful and friendly owner.",
    },
  },
];

/** Aggregato e sub-punteggi reali (Booking). */
export const REVIEW_STATS = {
  overall: "8.8",
  word: { it: "Favoloso", en: "Fabulous" } as B,
  count: 129,
  couples: "9.2",
  subs: [
    { t: { it: "Personale", en: "Staff" } as B, v: 9.4 },
    { t: { it: "Pulizia", en: "Cleanliness" } as B, v: 9.3 },
    { t: { it: "Comfort", en: "Comfort" } as B, v: 8.7 },
    { t: { it: "Servizi", en: "Facilities" } as B, v: 8.7 },
    { t: { it: "Rapporto qualità-prezzo", en: "Value for money" } as B, v: 8.7 },
    { t: { it: "Posizione", en: "Location" } as B, v: 8.5 },
    { t: { it: "WiFi gratuito", en: "Free WiFi" } as B, v: 8.0 },
  ],
};

/** Argomenti più citati nelle recensioni (Booking). */
export const REVIEW_TOPICS: B[] = [
  { it: "Aeroporto", en: "Airport" },
  { it: "Posizione", en: "Location" },
  { it: "Navetta", en: "Shuttle" },
  { it: "Ristorante", en: "Restaurant" },
  { it: "Letto", en: "Bed" },
];

/* ----------------------------- helper ----------------------------- */

const FLAGS: Record<string, string> = {
  it: "🇮🇹", us: "🇺🇸", gb: "🇬🇧", ca: "🇨🇦", au: "🇦🇺", de: "🇩🇪", fr: "🇫🇷",
  es: "🇪🇸", nl: "🇳🇱", cz: "🇨🇿", il: "🇮🇱", ch: "🇨🇭", at: "🇦🇹", be: "🇧🇪",
};
export const flag = (cc: string) => FLAGS[cc] ?? "🌍";

export const TRAVELLER_LABEL: Record<TravellerType, B> = {
  COUPLE: { it: "Coppia", en: "Couple" },
  YOUNG_COUPLE: { it: "Giovane coppia", en: "Young couple" },
  FAMILY_WITH_YOUNG_CHILDREN: { it: "Famiglia con bambini", en: "Family with young children" },
  GROUP: { it: "Gruppo", en: "Group" },
  WITH_FRIENDS: { it: "Gruppo di amici", en: "Group of friends" },
  SOLO_TRAVELLER: { it: "Viaggiatore singolo", en: "Solo traveller" },
};

export const PURPOSE_LABEL: Record<Purpose, B> = {
  LEISURE: { it: "Vacanza", en: "Leisure" },
  BUSINESS: { it: "Lavoro", en: "Business" },
};

const MONTHS_IT = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2025-09" → "Settembre 2025" / "September 2025". */
export function formatReviewDate(date: string, lang: "it" | "en"): string {
  const [y, m] = date.split("-");
  const i = Number(m) - 1;
  const months = lang === "it" ? MONTHS_IT : MONTHS_EN;
  const label = months[i] ?? "";
  const cap = label.charAt(0).toUpperCase() + label.slice(1);
  return `${cap} ${y}`;
}
