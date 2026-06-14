/** Dati bilingui (IT/EN) dei due appartamenti (Miri e Ale) per le pagine-annuncio. */

export type B = { it: string; en: string };
export type Img = { src: string; alt: string };
export type Stanza = { nome: B; tag: B; descr: B; imgs: Img[] };
export type Love = { img: string; t: B; s: B };

export type Appartamento = {
  slug: "miri" | "ale";
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
};

export const APPARTAMENTI: Appartamento[] = [
  {
    slug: "miri",
    nome: "Miri",
    mq: "75 m²",
    ospiti: 4,
    camere: 2,
    bagni: 1,
    piano: { it: "Piano terra · accesso comodo", en: "Ground floor · easy access" },
    tagline: { it: "Luminoso, accogliente, vivere facile a Fiumicino", en: "Bright, warm, easy living in Fiumicino" },
    descrizione: {
      it: "Comodo appartamento al piano terra con cucina in legno calda e accogliente, due camere matrimoniali e tutto ciò che serve per un soggiorno rilassante vicino all'aeroporto, al mare e a Roma.",
      en: "A comfortable ground-floor apartment with a warm wooden kitchen, two double bedrooms and everything you need for a relaxing stay near the airport, the sea and Rome.",
    },
    gallery: [
      { src: "/images/house/house-10.jpg", alt: "Cucina di Miri" },
      { src: "/images/house/house-28.jpg", alt: "Camera di Miri" },
      { src: "/images/house/house-35.jpg", alt: "Bagno di Miri" },
      { src: "/images/house/house-02.jpg", alt: "Soggiorno di Miri" },
      { src: "/images/house/house-26.jpg", alt: "Camera di Miri" },
      { src: "/images/house/house-30.jpg", alt: "Zona pranzo di Miri" },
      { src: "/images/house/house-34.jpg", alt: "Camera di Miri" },
      { src: "/images/house/house-19.jpg", alt: "Colazione in giardino" },
    ],
    stanze: [
      { nome: { it: "Camera 1", en: "Bedroom 1" }, tag: { it: "Parete decorativa", en: "Decorative wall" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata e TV.", en: "Double bed, wardrobe, air conditioning and TV." }, imgs: [{ src: "/images/house/house-28.jpg", alt: "Camera 1" }, { src: "/images/house/house-34.jpg", alt: "Camera 1" }] },
      { nome: { it: "Camera 2", en: "Bedroom 2" }, tag: { it: "Toni caldi", en: "Warm tones" }, descr: { it: "Letto matrimoniale, armadio e aria condizionata.", en: "Double bed, wardrobe and air conditioning." }, imgs: [{ src: "/images/house/house-26.jpg", alt: "Camera 2" }, { src: "/images/house/house-05.jpg", alt: "Camera 2" }] },
      { nome: { it: "Bagno", en: "Bathroom" }, tag: { it: "Con doccia", en: "With shower" }, descr: { it: "Bagno moderno con doccia, lavabo e WC. Phon incluso.", en: "Modern bathroom with shower, sink and WC. Hairdryer included." }, imgs: [{ src: "/images/house/house-35.jpg", alt: "Bagno" }, { src: "/images/house/house-36.jpg", alt: "Bagno" }] },
      { nome: { it: "Cucina e soggiorno", en: "Kitchen & living area" }, tag: { it: "Cucina in legno", en: "Wooden kitchen" }, descr: { it: "Cucina in legno attrezzata e soggiorno con divano e TV.", en: "Fully equipped wooden kitchen and living room with sofa and TV." }, imgs: [{ src: "/images/house/house-10.jpg", alt: "Cucina" }, { src: "/images/house/house-30.jpg", alt: "Cucina" }, { src: "/images/house/house-02.jpg", alt: "Soggiorno" }] },
      { nome: { it: "Spazi esterni", en: "Outdoor spaces" }, tag: { it: "In comune", en: "Shared" }, descr: { it: "Giardino privato condiviso con terrazza per la colazione e sedute.", en: "Shared private garden with breakfast terrace and seating." }, imgs: [{ src: "/images/house/house-19.jpg", alt: "Giardino" }, { src: "/images/house/house-29.jpg", alt: "Giardino" }] },
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
      { src: "/images/house/house-38.jpg", alt: "Cucina di Ale" },
      { src: "/images/house/house-09.jpg", alt: "Camera di Ale" },
      { src: "/images/house/house-11.jpg", alt: "Bagno in marmo di Ale" },
      { src: "/images/house/house-06.jpg", alt: "Camera con lucernario" },
      { src: "/images/house/house-37.jpg", alt: "Camera di Ale" },
      { src: "/images/house/house-12.jpg", alt: "Bagno di Ale" },
      { src: "/images/house/house-21.jpg", alt: "Camera luminosa" },
      { src: "/images/house/house-19.jpg", alt: "Colazione in giardino" },
    ],
    stanze: [
      { nome: { it: "Camera 1", en: "Bedroom 1" }, tag: { it: "Mansardata", en: "Attic" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata. Soffitto spiovente.", en: "Double bed, wardrobe, air conditioning. Sloped ceiling." }, imgs: [{ src: "/images/house/house-09.jpg", alt: "Camera 1" }, { src: "/images/house/house-37.jpg", alt: "Camera 1" }] },
      { nome: { it: "Camera 2", en: "Bedroom 2" }, tag: { it: "Con lucernario", en: "With skylight" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata. Luminosa.", en: "Double bed, wardrobe, air conditioning. Bright." }, imgs: [{ src: "/images/house/house-06.jpg", alt: "Camera 2" }, { src: "/images/house/house-21.jpg", alt: "Camera 2" }] },
      { nome: { it: "Bagno", en: "Bathroom" }, tag: { it: "In marmo", en: "Marble" }, descr: { it: "Bagno moderno in marmo con doccia. Phon incluso.", en: "Modern marble bathroom with shower. Hairdryer included." }, imgs: [{ src: "/images/house/house-11.jpg", alt: "Bagno" }, { src: "/images/house/house-12.jpg", alt: "Bagno" }, { src: "/images/house/house-20.jpg", alt: "Bagno" }] },
      { nome: { it: "Cucina e zona pranzo", en: "Kitchen & dining" }, tag: { it: "Attrezzata", en: "Equipped" }, descr: { it: "Angolo cottura completo con tavolo da pranzo.", en: "Fully equipped kitchen with dining table." }, imgs: [{ src: "/images/house/house-38.jpg", alt: "Cucina" }, { src: "/images/house/house-33.jpg", alt: "Cucina" }] },
      { nome: { it: "Spazi esterni", en: "Outdoor spaces" }, tag: { it: "In comune", en: "Shared" }, descr: { it: "Giardino privato condiviso con terrazza per la colazione.", en: "Shared private garden with breakfast terrace." }, imgs: [{ src: "/images/house/house-19.jpg", alt: "Giardino" }, { src: "/images/house/house-29.jpg", alt: "Giardino" }] },
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
];

export function getAppartamento(slug: string): Appartamento | undefined {
  return APPARTAMENTI.find((a) => a.slug === slug);
}

/** Recensioni reali sintetizzate da Booking (8.8 · 122), bilingui. */
export const RECENSIONI: { t: B; who: string }[] = [
  { t: { it: "Fabio ci ha accolti di persona e ci ha aiutati coi bagagli. Ottimi consigli su ristoranti e Roma!", en: "Fabio welcomed us in person and helped with our bags. Great tips for restaurants and Rome!" }, who: "Sophia · 🇫🇷" },
  { t: { it: "Appartamento super pulito, ben attrezzato e a soli 10 minuti dall'aeroporto. Perfetto!", en: "Super clean apartment, very well equipped and just 10 minutes from the airport. Perfect!" }, who: "Mark · 🇬🇧" },
  { t: { it: "Zona tranquilla, letti comodi e un grazioso giardino per la colazione. Ci siamo sentiti a casa!", en: "Quiet area, comfy beds and a lovely garden for breakfast. We felt at home!" }, who: "Laura · 🇩🇪" },
  { t: { it: "Appartamento luminoso con tutto il necessario. Il treno per Roma è comodissimo.", en: "Bright apartment with everything we needed. The train to Rome is easy and fast." }, who: "James · 🇮🇪" },
];
