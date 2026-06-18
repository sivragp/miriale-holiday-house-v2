/** Dati bilingui (IT/EN) dei due appartamenti (Miri e Ale) per le pagine-annuncio.
 *
 * NOTA CONTENUTI — DA CONFERMARE COL CLIENTE:
 * metrature (75/55 m²), finiture (bagno in marmo, mansarda/lucernari, cucina in
 * legno) e capienze (Miri fino a 6, Ale fino a 4, Casa fino a 10) sono una
 * ricostruzione plausibile NON pubblicata su Booking. Tutto il resto (recensioni,
 * voti, regole, distanze) è allineato all'annuncio Booking reale.
 */

export type B = { it: string; en: string };
export type Img = { src: string; alt: string };
export type Stanza = { nome: B; tag: B; descr: B; imgs: Img[] };
export type Love = { img: string; t: B; s: B };

export type Appartamento = {
  slug: "miri" | "ale" | "casa";
  nome: string;
  mq: string;
  ospiti: number;
  camere: number;
  bagni: number;
  piano: B;
  tagline: B;
  descrizione: B;
  gallery: Img[];
  stanze: Stanza[];
  love: Love[];
  waMsg: B;
  /** Override del titolo hero (default: "<nome> Apartment"). Usato dalla casa intera. */
  titolo?: B;
};

/* --------------------------------------------------------------------------
 *  Foto reali categorizzate per appartamento (vedi public/images/house):
 *  miri-NN (28, piano terra) · ale-NN (67, mansarda) · comune-NN (34, esterni).
 *  Verificate col campo `associated_rooms` di Booking + categorizzazione cliente.
 * -------------------------------------------------------------------------- */
const pad = (n: number) => String(n).padStart(2, "0");
/** Lista di Img da prefisso + numeri foto, con alt comune. */
function ph(prefix: string, nums: number[], alt: string): Img[] {
  return nums.map((n) => ({ src: `/images/house/${prefix}-${pad(n)}.jpg`, alt }));
}
/** Numeri 1..count esclusi quelli già usati (per appendere "tutte le altre foto"). */
function others(count: number, used: number[]): number[] {
  return Array.from({ length: count }, (_, i) => i + 1).filter((n) => !used.includes(n));
}

export const APPARTAMENTI: Appartamento[] = [
  {
    slug: "miri",
    nome: "Miri",
    mq: "75 m²",
    ospiti: 6,
    camere: 2,
    bagni: 1,
    piano: { it: "Piano terra · accesso comodo", en: "Ground floor · easy access" },
    tagline: { it: "Luminoso, accogliente, vivere facile a Fiumicino", en: "Bright, warm, easy living in Fiumicino" },
    descrizione: {
      it: "Comodo appartamento al piano terra con cucina in legno calda e accogliente, due camere matrimoniali e tutto ciò che serve per un soggiorno rilassante vicino all'aeroporto, al mare e a Roma.",
      en: "A comfortable ground-floor apartment with a warm wooden kitchen, two double bedrooms and everything you need for a relaxing stay near the airport, the sea and Rome.",
    },
    gallery: [
      ...ph("miri", [1, 14, 11, 10, 8, 5, 16], "Appartamento Miri"),
      ...ph("comune", [21], "Giardino di MiriAle"),
      ...ph("miri", others(28, [1, 14, 11, 10, 8, 5, 16]), "Appartamento Miri"),
      ...ph("comune", [13, 16, 7, 1, 3, 26, 28, 4], "Spazi comuni e giardino"),
    ],
    stanze: [
      { nome: { it: "Camera matrimoniale", en: "Double bedroom" }, tag: { it: "Luminosa", en: "Bright" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata e TV.", en: "Double bed, wardrobe, air conditioning and TV." }, imgs: ph("miri", [14, 16, 15], "Camera di Miri") },
      { nome: { it: "Seconda camera", en: "Second bedroom" }, tag: { it: "Due letti", en: "Twin beds" }, descr: { it: "Due letti singoli, armadio e aria condizionata.", en: "Two single beds, wardrobe and air conditioning." }, imgs: ph("miri", [5, 6], "Seconda camera di Miri") },
      { nome: { it: "Bagno", en: "Bathroom" }, tag: { it: "Con doccia", en: "With shower" }, descr: { it: "Bagno con doccia, lavabo e WC. Phon incluso.", en: "Bathroom with shower, sink and WC. Hairdryer included." }, imgs: ph("miri", [11, 12, 13], "Bagno di Miri") },
      { nome: { it: "Cucina e soggiorno", en: "Kitchen & living area" }, tag: { it: "Cucina in legno", en: "Wooden kitchen" }, descr: { it: "Cucina in legno attrezzata e soggiorno con divano e TV.", en: "Fully equipped wooden kitchen and living room with sofa and TV." }, imgs: ph("miri", [1, 8, 2, 10], "Cucina e soggiorno di Miri") },
      { nome: { it: "Spazi esterni", en: "Outdoor spaces" }, tag: { it: "Giardino e terrazzo", en: "Garden & terrace" }, descr: { it: "Giardino privato condiviso con terrazza per la colazione e terrazzo panoramico.", en: "Shared private garden with breakfast terrace and a panoramic terrace." }, imgs: [...ph("comune", [21, 13], "Giardino di MiriAle"), ...ph("miri", [22], "Terrazzo di Miri")] },
    ],
    love: [
      { img: "/images/house/house-10.jpg", t: { it: "Cucina in legno", en: "Warm wooden kitchen" }, s: { it: "Attrezzata, con tutto il necessario.", en: "Fully equipped, everything you need." } },
      { img: "/images/house/house-28.jpg", t: { it: "Due camere matrimoniali", en: "Two double bedrooms" }, s: { it: "Comode, con biancheria di qualità.", en: "Comfortable, with quality linens." } },
      { img: "/images/aereo-aeroporto.jpg", t: { it: "Scali facili", en: "Easy airport stopovers" }, s: { it: "A 10 minuti dall'aeroporto FCO.", en: "Just 10 minutes from FCO Airport." } },
      { img: "/images/house/house-19.jpg", t: { it: "Colazione in giardino", en: "Breakfast in the garden" }, s: { it: "Terrazza privata immersa nel verde.", en: "Private terrace surrounded by greenery." } },
      { img: "/images/house/house-29.jpg", t: { it: "Parcheggio gratuito", en: "Free private parking" }, s: { it: "Comodo e gratuito, in loco.", en: "Easy and free, inside the property." } },
      { img: "/images/house/house-22.jpg", t: { it: "Zona tranquilla", en: "Quiet residential area" }, s: { it: "Silenziosa, vicino al mare e a Roma.", en: "Peaceful, close to the sea and Rome." } },
    ],
    waMsg: {
      it: "Ciao Fabio! Vorrei prenotare l'appartamento Miri (75 m²). C'è disponibilità?",
      en: "Hi Fabio! I'd like to book the Miri apartment (75 m²). Is it available?",
    },
  },
  {
    slug: "ale",
    nome: "Ale",
    mq: "55 m²",
    ospiti: 4,
    camere: 2,
    bagni: 1,
    piano: { it: "Mansarda · soffitti spioventi", en: "Attic · sloped ceilings" },
    tagline: { it: "Mansarda luminosa e raccolta a Fiumicino", en: "Bright, cosy attic in Fiumicino" },
    descrizione: {
      it: "Mansarda all'ultimo piano con soffitti spioventi, bagno moderno in marmo e cucina completamente attrezzata. Luminosa grazie ai lucernari, perfetta vicino all'aeroporto, al mare e a Roma. (Soffitto basso su un lato: tienine conto se sei molto alto.)",
      en: "A top-floor attic with sloped ceilings, a modern marble bathroom and a fully equipped kitchen. Bright thanks to the skylights, perfect near the airport, the sea and Rome. (Low ceiling on one side: keep in mind if you're very tall.)",
    },
    gallery: [
      ...ph("ale", [1, 40, 9, 15, 17, 5, 21], "Appartamento Ale"),
      ...ph("comune", [21], "Giardino di MiriAle"),
      ...ph("ale", others(67, [1, 40, 9, 15, 17, 5, 21]), "Appartamento Ale"),
      ...ph("comune", [13, 16, 7, 1, 3, 26, 28, 4], "Spazi comuni e giardino"),
    ],
    stanze: [
      { nome: { it: "Camera matrimoniale", en: "Double bedroom" }, tag: { it: "Mansardata", en: "Attic" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata. Soffitto spiovente.", en: "Double bed, wardrobe, air conditioning. Sloped ceiling." }, imgs: ph("ale", [40, 5, 18, 44], "Camera di Ale") },
      { nome: { it: "Seconda camera", en: "Second bedroom" }, tag: { it: "Con lucernario", en: "With skylight" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata. Luminosa con lucernario.", en: "Double bed, wardrobe, air conditioning. Bright with skylight." }, imgs: ph("ale", [9, 7, 46, 52], "Camera con lucernario di Ale") },
      { nome: { it: "Bagno", en: "Bathroom" }, tag: { it: "In marmo", en: "Marble" }, descr: { it: "Bagno in marmo con doccia. Phon incluso.", en: "Marble bathroom with shower. Hairdryer included." }, imgs: ph("ale", [15, 14, 56, 12], "Bagno di Ale") },
      { nome: { it: "Cucina e zona pranzo", en: "Kitchen & dining" }, tag: { it: "Attrezzata", en: "Equipped" }, descr: { it: "Angolo cottura completo con tavolo da pranzo.", en: "Fully equipped kitchen with dining table." }, imgs: ph("ale", [1, 17, 2, 4], "Cucina di Ale") },
      { nome: { it: "Spazi esterni", en: "Outdoor spaces" }, tag: { it: "Balcone e giardino", en: "Balcony & garden" }, descr: { it: "Balcone con vista e giardino privato condiviso con terrazza per la colazione.", en: "Balcony with a view and shared private garden with breakfast terrace." }, imgs: [...ph("ale", [21, 19], "Balcone di Ale"), ...ph("comune", [21], "Giardino di MiriAle")] },
    ],
    love: [
      { img: "/images/house/house-38.jpg", t: { it: "Cucina attrezzata", en: "Equipped kitchen" }, s: { it: "Tutto il necessario per cucinare.", en: "Everything you need to cook." } },
      { img: "/images/house/house-09.jpg", t: { it: "Camere mansardate", en: "Cosy attic bedrooms" }, s: { it: "Raccolte e luminose, sotto il tetto.", en: "Cosy and bright, under the roof." } },
      { img: "/images/house/house-11.jpg", t: { it: "Bagno in marmo", en: "Marble bathroom" }, s: { it: "Moderno, con doccia.", en: "Modern, with shower." } },
      { img: "/images/aereo-aeroporto.jpg", t: { it: "Scali facili", en: "Easy airport stopovers" }, s: { it: "A 10 minuti dall'aeroporto FCO.", en: "Just 10 minutes from FCO Airport." } },
      { img: "/images/house/house-29.jpg", t: { it: "Parcheggio gratuito", en: "Free private parking" }, s: { it: "Comodo e gratuito, in loco.", en: "Easy and free, inside the property." } },
      { img: "/images/house/house-22.jpg", t: { it: "Zona tranquilla", en: "Quiet residential area" }, s: { it: "Silenziosa, vicino al mare e a Roma.", en: "Peaceful, close to the sea and Rome." } },
    ],
    waMsg: {
      it: "Ciao Fabio! Vorrei prenotare l'appartamento Ale (55 m²). C'è disponibilità?",
      en: "Hi Fabio! I'd like to book the Ale apartment (55 m²). Is it available?",
    },
  },
  {
    slug: "casa",
    nome: "Casa intera",
    mq: "130 m²",
    ospiti: 10,
    camere: 4,
    bagni: 2,
    piano: { it: "2 appartamenti indipendenti", en: "2 independent apartments" },
    titolo: { it: "Tutta la casa MiriAle", en: "The whole MiriAle house" },
    tagline: { it: "Due appartamenti, una casa: fino a 10 ospiti a Fiumicino", en: "Two apartments, one house: up to 10 guests in Fiumicino" },
    descrizione: {
      it: "Prenota tutta MiriAle per il tuo gruppo: i due appartamenti indipendenti Miri e Ale insieme, con 4 camere matrimoniali, 2 bagni e 2 cucine, più il giardino privato in comune. Spazio e privacy per famiglie numerose o gruppi di amici, a pochi minuti dall'aeroporto di Fiumicino, dal mare e dai treni per Roma.",
      en: "Book the whole of MiriAle for your group: the two independent Miri and Ale apartments together, with 4 double bedrooms, 2 bathrooms and 2 kitchens, plus the shared private garden. Space and privacy for large families or groups of friends, minutes from Fiumicino airport, the sea and the trains to Rome.",
    },
    gallery: [
      ...ph("miri", [1], "Soggiorno di Miri"),
      ...ph("ale", [40], "Camera di Ale"),
      ...ph("comune", [21], "Giardino di MiriAle"),
      ...ph("miri", [14], "Camera di Miri"),
      ...ph("ale", [1], "Cucina di Ale"),
      ...ph("comune", [28], "La villa MiriAle"),
      ...ph("miri", [11], "Bagno di Miri"),
      ...ph("ale", [15], "Bagno di Ale"),
      ...ph("miri", [8, 10, 5, 16, 2, 22], "Appartamento Miri"),
      ...ph("ale", [5, 9, 17, 46, 12, 25, 21], "Appartamento Ale"),
      ...ph("comune", others(34, [21, 28]), "Spazi comuni e giardino"),
    ],
    stanze: [
      { nome: { it: "Appartamento Miri · 75 m²", en: "Miri apartment · 75 m²" }, tag: { it: "Piano terra", en: "Ground floor" }, descr: { it: "Cucina in legno, soggiorno, 2 camere e 1 bagno. Fino a 6 ospiti.", en: "Wooden kitchen, living room, 2 bedrooms and 1 bathroom. Up to 6 guests." }, imgs: ph("miri", [1, 14], "Appartamento Miri") },
      { nome: { it: "Appartamento Ale · 55 m²", en: "Ale apartment · 55 m²" }, tag: { it: "Mansarda", en: "Attic" }, descr: { it: "Cucina attrezzata, 2 camere mansardate e 1 bagno in marmo. Fino a 4 ospiti.", en: "Equipped kitchen, 2 attic bedrooms and 1 marble bathroom. Up to 4 guests." }, imgs: ph("ale", [40, 1], "Appartamento Ale") },
      { nome: { it: "Giardino condiviso", en: "Shared garden" }, tag: { it: "In comune", en: "Shared" }, descr: { it: "L'unico spazio in comune: giardino privato con terrazza per la colazione e parcheggio.", en: "The only shared space: private garden with breakfast terrace and parking." }, imgs: ph("comune", [21, 13, 16], "Giardino di MiriAle") },
    ],
    love: [
      { img: "/images/house/house-10.jpg", t: { it: "Due cucine attrezzate", en: "Two equipped kitchens" }, s: { it: "Una per appartamento: cucinate in autonomia.", en: "One per apartment: cook independently." } },
      { img: "/images/house/house-28.jpg", t: { it: "4 camere matrimoniali", en: "4 double bedrooms" }, s: { it: "Spazio comodo per un massimo di 10 ospiti.", en: "Comfortable space for up to 10 guests." } },
      { img: "/images/house/house-02.jpg", t: { it: "Tutta la casa per voi", en: "The whole house to yourselves" }, s: { it: "Privacy totale per famiglie e gruppi.", en: "Full privacy for families and groups." } },
      { img: "/images/house/house-19.jpg", t: { it: "Giardino privato", en: "Private garden" }, s: { it: "Terrazza condivisa per la colazione all'aperto.", en: "Shared terrace for breakfast outdoors." } },
      { img: "/images/house/house-29.jpg", t: { it: "Parcheggio gratuito", en: "Free private parking" }, s: { it: "Comodo e gratuito, in loco.", en: "Easy and free, inside the property." } },
      { img: "/images/aereo-aeroporto.jpg", t: { it: "Aeroporto, mare e Roma", en: "Airport, sea & Rome" }, s: { it: "A 10 minuti dall'aeroporto FCO.", en: "Just 10 minutes from FCO Airport." } },
    ],
    waMsg: {
      it: "Ciao Fabio! Vorrei prenotare tutta la casa MiriAle (Miri + Ale, fino a 10 ospiti). C'è disponibilità?",
      en: "Hi Fabio! I'd like to book the whole MiriAle house (Miri + Ale, up to 10 guests). Is it available?",
    },
  },
];

export function getAppartamento(slug: string): Appartamento | undefined {
  return APPARTAMENTI.find((a) => a.slug === slug);
}

// Le recensioni reali sono ora in `lib/reviews.tsx` (REVIEWS + REVIEW_STATS).
