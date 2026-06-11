/** Dati dei due appartamenti (Miri e Ale) per le pagine-annuncio. */

export type Img = { src: string; alt: string };
export type Stanza = {
  nome: string;
  tag: string;
  descr: string;
  imgs: Img[];
  dotazioni: string[];
};
export type Appartamento = {
  slug: "miri" | "ale";
  nome: string;
  mq: string;
  ospiti: number;
  camere: number;
  bagni: number;
  tagline: string;
  descrizione: string;
  gallery: Img[];
  stanze: Stanza[];
  servizi: string[];
  waMsg: string;
};

const SERVIZI_BASE = [
  "Wi-Fi gratuito",
  "Aria condizionata",
  "Riscaldamento",
  "Cucina attrezzata",
  "Forno e piano cottura",
  "Microonde",
  "Bollitore e moka",
  "Frigorifero",
  "TV schermo piatto",
  "Phon",
  "Asciugamani e biancheria",
  "Set di cortesia",
  "Parcheggio gratuito",
  "Giardino e terrazza",
];

export const APPARTAMENTI: Appartamento[] = [
  {
    slug: "miri",
    nome: "Miri",
    mq: "75 m²",
    ospiti: 4,
    camere: 2,
    bagni: 1,
    tagline: "Soggiorno con cucina in legno e due camere matrimoniali.",
    descrizione:
      "Miri è l'appartamento più ampio di MiriAle: 75 m² indipendenti, con un soggiorno che si apre sulla cucina in legno e due camere matrimoniali. Ingresso e bagno propri, aria condizionata in ogni ambiente e affaccio sul balcone. A 10 minuti dall'aeroporto di Fiumicino, ma in una zona residenziale silenziosa: ideale per voli presto, una visita a Roma o qualche giorno di mare. Vi accoglie Fabio di persona — niente check-in automatico.",
    gallery: [
      { src: "/images/house/house-02.jpg", alt: "Soggiorno di Miri" },
      { src: "/images/house/house-10.jpg", alt: "Cucina in legno di Miri" },
      { src: "/images/house/house-28.jpg", alt: "Camera matrimoniale di Miri" },
      { src: "/images/house/house-26.jpg", alt: "Camera matrimoniale di Miri" },
      { src: "/images/house/house-30.jpg", alt: "Zona pranzo di Miri" },
      { src: "/images/house/house-35.jpg", alt: "Bagno di Miri" },
      { src: "/images/house/house-34.jpg", alt: "Camera di Miri" },
      { src: "/images/house/house-05.jpg", alt: "Camera di Miri" },
    ],
    stanze: [
      {
        nome: "Soggiorno e cucina",
        tag: "Zona giorno",
        descr:
          "Salotto con divano e TV a schermo piatto, aperto sulla cucina in legno. Forno, piano cottura, frigorifero, microonde, bollitore e moka per il caffè. Tavolo da pranzo, stoviglie e pentole; lavatrice a disposizione.",
        imgs: [
          { src: "/images/house/house-02.jpg", alt: "Soggiorno di Miri" },
          { src: "/images/house/house-10.jpg", alt: "Cucina in legno" },
          { src: "/images/house/house-30.jpg", alt: "Cucina e zona pranzo" },
        ],
        dotazioni: ["Divano e TV", "Forno e piano cottura", "Frigorifero", "Microonde", "Bollitore e moka", "Lavatrice", "Tavolo da pranzo"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Parete decorativa",
        descr:
          "Letto matrimoniale con parete decorativa e affaccio sul balcone. Aria condizionata e riscaldamento, armadio e comodini; lenzuola e asciugamani inclusi.",
        imgs: [
          { src: "/images/house/house-28.jpg", alt: "Camera con parete decorativa" },
          { src: "/images/house/house-34.jpg", alt: "Camera con parete decorativa" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio e comodini", "Balcone"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Toni caldi",
        descr:
          "Seconda matrimoniale, luminosa e tranquilla, con pavimento in cotto. Aria condizionata e riscaldamento, armadio e comodini; biancheria inclusa.",
        imgs: [
          { src: "/images/house/house-26.jpg", alt: "Camera matrimoniale" },
          { src: "/images/house/house-05.jpg", alt: "Camera matrimoniale" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio e comodini"],
      },
      {
        nome: "Bagno",
        tag: "Classico",
        descr:
          "Bagno privato con doccia, in tono caldo. Phon, asciugamani e set di cortesia inclusi; acqua calda e riscaldamento.",
        imgs: [
          { src: "/images/house/house-35.jpg", alt: "Bagno classico" },
          { src: "/images/house/house-36.jpg", alt: "Bagno classico, doccia" },
        ],
        dotazioni: ["Doccia", "Phon", "Asciugamani inclusi", "Set di cortesia"],
      },
    ],
    servizi: SERVIZI_BASE,
    waMsg:
      "Ciao! Vorrei prenotare l'appartamento Miri (75 m²) a MiriAle. C'è disponibilità?",
  },
  {
    slug: "ale",
    nome: "Ale",
    mq: "55 m²",
    ospiti: 4,
    camere: 2,
    bagni: 1,
    tagline: "Mansardato e raccolto, con bagno in marmo e due camere sotto il tetto.",
    descrizione:
      "Ale è l'appartamento mansardato di MiriAle: 55 m² raccolti e accoglienti, con una cucina attrezzata, due camere matrimoniali sotto il tetto e un bagno moderno in marmo. Indipendente, con cucina e bagno propri, aria condizionata e lucernario che porta luce. A 10 minuti dall'aeroporto di Fiumicino, in una zona silenziosa. Vi accoglie Fabio di persona — niente check-in automatico. (Le camere hanno il soffitto spiovente: tienine conto se sei molto alto.)",
    gallery: [
      { src: "/images/house/house-38.jpg", alt: "Cucina di Ale" },
      { src: "/images/house/house-09.jpg", alt: "Camera mansardata di Ale" },
      { src: "/images/house/house-06.jpg", alt: "Camera con lucernario di Ale" },
      { src: "/images/house/house-11.jpg", alt: "Bagno in marmo di Ale" },
      { src: "/images/house/house-37.jpg", alt: "Camera di Ale" },
      { src: "/images/house/house-21.jpg", alt: "Camera luminosa di Ale" },
      { src: "/images/house/house-12.jpg", alt: "Bagno in marmo di Ale" },
      { src: "/images/house/house-33.jpg", alt: "Area caffè di Ale" },
    ],
    stanze: [
      {
        nome: "Cucina e zona pranzo",
        tag: "Attrezzata",
        descr:
          "Angolo cottura moderno con piano cottura, frigorifero, microonde, bollitore e moka. Stoviglie, pentole e tavolo da pranzo: perfetta per una cena veloce o la colazione prima del volo.",
        imgs: [
          { src: "/images/house/house-38.jpg", alt: "Cucina di Ale" },
          { src: "/images/house/house-32.jpg", alt: "Forno a microonde" },
          { src: "/images/house/house-33.jpg", alt: "Bollitore e moka" },
        ],
        dotazioni: ["Piano cottura", "Frigorifero", "Microonde", "Bollitore e moka", "Tavolo da pranzo"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Mansardata · rosa",
        descr:
          "Matrimoniale mansardata dai toni caldi, con parete effetto pietra e soffitto spiovente. Aria condizionata e armadio; biancheria inclusa.",
        imgs: [
          { src: "/images/house/house-09.jpg", alt: "Camera mansardata" },
          { src: "/images/house/house-37.jpg", alt: "Camera mansardata" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio", "Soffitto mansardato"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Mansardata · lucernario",
        descr:
          "Seconda matrimoniale mansardata, luminosa grazie al lucernario. Aria condizionata e armadio; biancheria inclusa.",
        imgs: [
          { src: "/images/house/house-06.jpg", alt: "Camera con lucernario" },
          { src: "/images/house/house-21.jpg", alt: "Camera luminosa" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Lucernario", "Armadio"],
      },
      {
        nome: "Bagno",
        tag: "Moderno in marmo",
        descr:
          "Bagno privato rivestito in marmo, con doccia. Phon, asciugamani e set di cortesia inclusi; acqua calda e riscaldamento.",
        imgs: [
          { src: "/images/house/house-11.jpg", alt: "Bagno in marmo" },
          { src: "/images/house/house-20.jpg", alt: "Lavabo in marmo" },
          { src: "/images/house/house-12.jpg", alt: "Bagno in marmo" },
        ],
        dotazioni: ["Doccia", "Phon", "Asciugamani inclusi", "Set di cortesia"],
      },
    ],
    servizi: SERVIZI_BASE,
    waMsg:
      "Ciao! Vorrei prenotare l'appartamento Ale (55 m²) a MiriAle. C'è disponibilità?",
  },
];

export function getAppartamento(slug: string): Appartamento | undefined {
  return APPARTAMENTI.find((a) => a.slug === slug);
}

/** Recensioni reali sintetizzate da Booking (8.8 · 122). */
export const RECENSIONI = [
  {
    testo:
      "Fabio e la sua famiglia sono host fantastici: ci ha accolti in aeroporto e ci ha persino portati a scoprire angoli nascosti di Roma.",
    meta: "Ospite verificato · Booking",
  },
  {
    testo:
      "Appartamento immacolato e cucina super attrezzata. Luminoso, spazioso e con una bella terrazza.",
    meta: "Ospite verificato · Booking",
  },
  {
    testo:
      "A 10 minuti dall'aeroporto ma in una zona tranquilla e silenziosa: perfetto prima di un volo presto.",
    meta: "Ospite verificato · Booking",
  },
  {
    testo:
      "Pulito, fornito e comodo, ideale per famiglie. Comunicazione ottima con il proprietario.",
    meta: "Ospite verificato · Booking",
  },
];
