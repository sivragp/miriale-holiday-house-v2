/** Dati bilingui (IT/EN) dei due appartamenti (Miri e Ale) per le pagine-annuncio.
 *
 * NOTA CONTENUTI — DA CONFERMARE COL CLIENTE:
 * metrature (75/55 m²), finiture (bagno in marmo, mansarda/lucernari, cucina in
 * legno) e capienze (Miri fino a 6, Ale fino a 4, Casa fino a 10) sono una
 * ricostruzione plausibile NON pubblicata su Booking. Tutto il resto (recensioni,
 * voti, regole, distanze) è allineato all'annuncio Booking reale.
 */

export type B = { it: string; en: string; es?: string };
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
  /** Selezione curata (max 10, ~2 per stanza) per il carosello in home "Scegli il tuo soggiorno". */
  cardGallery: Img[];
  stanze: Stanza[];
  love: Love[];
  waMsg: B;
  /** Override del titolo hero (default: "<nome> Apartment"). Usato dalla casa intera. */
  titolo?: B;
};

/* --------------------------------------------------------------------------
 *  Foto reali categorizzate per appartamento (vedi public/images/house):
 *  miri-NN (28, primo piano) · ale-NN (67, mansarda) · comune-NN (34, esterni).
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
    piano: { it: "Primo piano · accesso con scale", en: "First floor · stair access", es: "Primera planta · acceso por escaleras" },
    tagline: { it: "Luminoso, accogliente, vivere facile a Fiumicino", en: "Bright, warm, easy living in Fiumicino", es: "Luminoso, acogedor, vivir fácil en Fiumicino" },
    descrizione: {
      it: "Comodo appartamento al primo piano (accesso tramite scale) con cucina in legno calda e accogliente, due camere matrimoniali e tutto ciò che serve per un soggiorno rilassante vicino all'aeroporto, al mare e a Roma.",
      en: "A comfortable first-floor apartment (reached via stairs) with a warm wooden kitchen, two double bedrooms and everything you need for a relaxing stay near the airport, the sea and Rome.",
      es: "Cómodo apartamento en la primera planta (acceso por escaleras) con una cocina de madera cálida y acogedora, dos dormitorios de matrimonio y todo lo necesario para una estancia relajante cerca del aeropuerto, el mar y Roma.",
    },
    gallery: [
      ...ph("miri", [1, 14, 11, 10, 8, 5, 16], "Appartamento Miri"),
      ...ph("comune", [21], "Giardino di MiriAle"),
      ...ph("miri", others(28, [1, 14, 11, 10, 8, 5, 16]), "Appartamento Miri"),
      ...ph("comune", [13, 16, 7, 1, 3, 26, 28, 4], "Spazi comuni e giardino"),
    ],
    cardGallery: [
      ...ph("miri", [1, 8], "Soggiorno e cucina di Miri"),
      ...ph("miri", [14, 16], "Camera matrimoniale di Miri"),
      ...ph("miri", [5, 6], "Seconda camera di Miri"),
      ...ph("miri", [11, 12], "Bagno di Miri"),
      ...ph("comune", [21], "Giardino di MiriAle"),
      ...ph("miri", [22], "Terrazzo di Miri"),
    ],
    stanze: [
      { nome: { it: "Camera matrimoniale", en: "Double bedroom", es: "Dormitorio de matrimonio" }, tag: { it: "Luminosa", en: "Bright", es: "Luminoso" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata e TV.", en: "Double bed, wardrobe, air conditioning and TV.", es: "Cama de matrimonio, armario, aire acondicionado y TV." }, imgs: ph("miri", [14, 16, 15], "Camera di Miri") },
      { nome: { it: "Seconda camera", en: "Second bedroom", es: "Segundo dormitorio" }, tag: { it: "Due letti", en: "Twin beds", es: "Dos camas" }, descr: { it: "Due letti singoli, armadio e aria condizionata.", en: "Two single beds, wardrobe and air conditioning.", es: "Dos camas individuales, armario y aire acondicionado." }, imgs: ph("miri", [5, 6], "Seconda camera di Miri") },
      { nome: { it: "Bagno", en: "Bathroom", es: "Baño" }, tag: { it: "Con doccia", en: "With shower", es: "Con ducha" }, descr: { it: "Bagno con doccia, lavabo e WC. Phon incluso.", en: "Bathroom with shower, sink and WC. Hairdryer included.", es: "Baño con ducha, lavabo e inodoro. Secador incluido." }, imgs: ph("miri", [11, 12, 13], "Bagno di Miri") },
      { nome: { it: "Cucina e soggiorno", en: "Kitchen & living area", es: "Cocina y salón" }, tag: { it: "Cucina in legno", en: "Wooden kitchen", es: "Cocina de madera" }, descr: { it: "Cucina in legno attrezzata e soggiorno con divano e TV.", en: "Fully equipped wooden kitchen and living room with sofa and TV.", es: "Cocina de madera totalmente equipada y salón con sofá y TV." }, imgs: ph("miri", [1, 8, 2, 10], "Cucina e soggiorno di Miri") },
      { nome: { it: "Spazi esterni", en: "Outdoor spaces", es: "Espacios exteriores" }, tag: { it: "Giardino e terrazzo", en: "Garden & terrace", es: "Jardín y terraza" }, descr: { it: "Giardino privato condiviso con terrazza per la colazione e terrazzo panoramico.", en: "Shared private garden with breakfast terrace and a panoramic terrace.", es: "Jardín privado compartido con terraza para el desayuno y terraza panorámica." }, imgs: [...ph("comune", [21, 13], "Giardino di MiriAle"), ...ph("miri", [22], "Terrazzo di Miri")] },
    ],
    love: [
      { img: "/images/house/house-10.jpg", t: { it: "Cucina in legno", en: "Warm wooden kitchen", es: "Cocina de madera" }, s: { it: "Attrezzata, con tutto il necessario.", en: "Fully equipped, everything you need.", es: "Equipada, con todo lo necesario." } },
      { img: "/images/house/house-28.jpg", t: { it: "Due camere matrimoniali", en: "Two double bedrooms", es: "Dos dormitorios de matrimonio" }, s: { it: "Comode, con biancheria di qualità.", en: "Comfortable, with quality linens.", es: "Cómodos, con ropa de cama de calidad." } },
      { img: "/images/aereo-aeroporto.jpg", t: { it: "Scali facili", en: "Easy airport stopovers", es: "Escalas fáciles" }, s: { it: "A 10 minuti dall'aeroporto FCO.", en: "Just 10 minutes from FCO Airport.", es: "A 10 minutos del aeropuerto FCO." } },
      { img: "/images/house/house-19.jpg", t: { it: "Colazione in giardino", en: "Breakfast in the garden", es: "Desayuno en el jardín" }, s: { it: "Terrazza privata immersa nel verde.", en: "Private terrace surrounded by greenery.", es: "Terraza privada rodeada de vegetación." } },
      { img: "/images/house/house-29.jpg", t: { it: "Parcheggio gratuito", en: "Free private parking", es: "Aparcamiento gratuito" }, s: { it: "Comodo e gratuito, in loco.", en: "Easy and free, inside the property.", es: "Cómodo y gratuito, en la propiedad." } },
      { img: "/images/house/house-22.jpg", t: { it: "Zona tranquilla", en: "Quiet residential area", es: "Zona tranquila" }, s: { it: "Silenziosa, vicino al mare e a Roma.", en: "Peaceful, close to the sea and Rome.", es: "Silenciosa, cerca del mar y de Roma." } },
    ],
    waMsg: {
      it: "Ciao Fabio! Vorrei prenotare l'appartamento Miri (75 m²). C'è disponibilità?",
      en: "Hi Fabio! I'd like to book the Miri apartment (75 m²). Is it available?",
      es: "¡Hola Fabio! Me gustaría reservar el apartamento Miri (75 m²). ¿Hay disponibilidad?",
    },
  },
  {
    slug: "ale",
    nome: "Ale",
    mq: "55 m²",
    ospiti: 4,
    camere: 2,
    bagni: 1,
    piano: { it: "Mansarda · soffitti spioventi", en: "Attic · sloped ceilings", es: "Buhardilla · techos inclinados" },
    tagline: { it: "Mansarda luminosa e raccolta a Fiumicino", en: "Bright, cosy attic in Fiumicino", es: "Buhardilla luminosa y recogida en Fiumicino" },
    descrizione: {
      it: "Mansarda all'ultimo piano con soffitti spioventi, bagno moderno in marmo e cucina completamente attrezzata. Luminosa grazie ai lucernari, perfetta vicino all'aeroporto, al mare e a Roma. (Soffitto basso su un lato: tienine conto se sei molto alto.)",
      en: "A top-floor attic with sloped ceilings, a modern marble bathroom and a fully equipped kitchen. Bright thanks to the skylights, perfect near the airport, the sea and Rome. (Low ceiling on one side: keep in mind if you're very tall.)",
      es: "Buhardilla en la última planta con techos inclinados, baño moderno de mármol y cocina totalmente equipada. Luminosa gracias a las claraboyas, perfecta cerca del aeropuerto, el mar y Roma. (Techo bajo en un lado: tenlo en cuenta si eres muy alto.)",
    },
    gallery: [
      ...ph("ale", [1, 40, 9, 15, 17, 5, 21], "Appartamento Ale"),
      ...ph("comune", [21], "Giardino di MiriAle"),
      ...ph("ale", others(67, [1, 40, 9, 15, 17, 5, 21]), "Appartamento Ale"),
      ...ph("comune", [13, 16, 7, 1, 3, 26, 28, 4], "Spazi comuni e giardino"),
    ],
    cardGallery: [
      ...ph("ale", [1, 17], "Cucina e zona pranzo di Ale"),
      ...ph("ale", [40, 5], "Camera matrimoniale di Ale"),
      ...ph("ale", [9, 7], "Camera con lucernario di Ale"),
      ...ph("ale", [15, 14], "Bagno in marmo di Ale"),
      ...ph("ale", [21], "Balcone di Ale"),
      ...ph("comune", [21], "Giardino di MiriAle"),
    ],
    stanze: [
      { nome: { it: "Camera matrimoniale", en: "Double bedroom", es: "Dormitorio de matrimonio" }, tag: { it: "Mansardata", en: "Attic", es: "Abuhardillada" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata. Soffitto spiovente.", en: "Double bed, wardrobe, air conditioning. Sloped ceiling.", es: "Cama de matrimonio, armario, aire acondicionado. Techo inclinado." }, imgs: ph("ale", [40, 5, 18, 44], "Camera di Ale") },
      { nome: { it: "Seconda camera", en: "Second bedroom", es: "Segundo dormitorio" }, tag: { it: "Con lucernario", en: "With skylight", es: "Con claraboya" }, descr: { it: "Letto matrimoniale, armadio, aria condizionata. Luminosa con lucernario.", en: "Double bed, wardrobe, air conditioning. Bright with skylight.", es: "Cama de matrimonio, armario, aire acondicionado. Luminosa con claraboya." }, imgs: ph("ale", [9, 7, 46, 52], "Camera con lucernario di Ale") },
      { nome: { it: "Bagno", en: "Bathroom", es: "Baño" }, tag: { it: "In marmo", en: "Marble", es: "De mármol" }, descr: { it: "Bagno in marmo con doccia. Phon incluso.", en: "Marble bathroom with shower. Hairdryer included.", es: "Baño de mármol con ducha. Secador incluido." }, imgs: ph("ale", [15, 14, 56, 12], "Bagno di Ale") },
      { nome: { it: "Cucina e zona pranzo", en: "Kitchen & dining", es: "Cocina y zona de comedor" }, tag: { it: "Attrezzata", en: "Equipped", es: "Equipada" }, descr: { it: "Angolo cottura completo con tavolo da pranzo.", en: "Fully equipped kitchen with dining table.", es: "Cocina completa con mesa de comedor." }, imgs: ph("ale", [1, 17, 2, 4], "Cucina di Ale") },
      { nome: { it: "Spazi esterni", en: "Outdoor spaces", es: "Espacios exteriores" }, tag: { it: "Balcone e giardino", en: "Balcony & garden", es: "Balcón y jardín" }, descr: { it: "Balcone con vista e giardino privato condiviso con terrazza per la colazione.", en: "Balcony with a view and shared private garden with breakfast terrace.", es: "Balcón con vistas y jardín privado compartido con terraza para el desayuno." }, imgs: [...ph("ale", [21, 19], "Balcone di Ale"), ...ph("comune", [21], "Giardino di MiriAle")] },
    ],
    love: [
      { img: "/images/house/house-38.jpg", t: { it: "Cucina attrezzata", en: "Equipped kitchen", es: "Cocina equipada" }, s: { it: "Tutto il necessario per cucinare.", en: "Everything you need to cook.", es: "Todo lo necesario para cocinar." } },
      { img: "/images/house/house-09.jpg", t: { it: "Camere mansardate", en: "Cosy attic bedrooms", es: "Dormitorios abuhardillados" }, s: { it: "Raccolte e luminose, sotto il tetto.", en: "Cosy and bright, under the roof.", es: "Recogidos y luminosos, bajo el tejado." } },
      { img: "/images/house/house-11.jpg", t: { it: "Bagno in marmo", en: "Marble bathroom", es: "Baño de mármol" }, s: { it: "Moderno, con doccia.", en: "Modern, with shower.", es: "Moderno, con ducha." } },
      { img: "/images/aereo-aeroporto.jpg", t: { it: "Scali facili", en: "Easy airport stopovers", es: "Escalas fáciles" }, s: { it: "A 10 minuti dall'aeroporto FCO.", en: "Just 10 minutes from FCO Airport.", es: "A 10 minutos del aeropuerto FCO." } },
      { img: "/images/house/house-29.jpg", t: { it: "Parcheggio gratuito", en: "Free private parking", es: "Aparcamiento gratuito" }, s: { it: "Comodo e gratuito, in loco.", en: "Easy and free, inside the property.", es: "Cómodo y gratuito, en la propiedad." } },
      { img: "/images/house/house-22.jpg", t: { it: "Zona tranquilla", en: "Quiet residential area", es: "Zona tranquila" }, s: { it: "Silenziosa, vicino al mare e a Roma.", en: "Peaceful, close to the sea and Rome.", es: "Silenciosa, cerca del mar y de Roma." } },
    ],
    waMsg: {
      it: "Ciao Fabio! Vorrei prenotare l'appartamento Ale (55 m²). C'è disponibilità?",
      en: "Hi Fabio! I'd like to book the Ale apartment (55 m²). Is it available?",
      es: "¡Hola Fabio! Me gustaría reservar el apartamento Ale (55 m²). ¿Hay disponibilidad?",
    },
  },
  {
    slug: "casa",
    nome: "Casa intera",
    mq: "130 m²",
    ospiti: 10,
    camere: 4,
    bagni: 2,
    piano: { it: "2 appartamenti indipendenti", en: "2 independent apartments", es: "2 apartamentos independientes" },
    titolo: { it: "Tutta la casa MiriAle", en: "The whole MiriAle house", es: "Toda la casa MiriAle" },
    tagline: { it: "Due appartamenti, una casa: fino a 10 ospiti a Fiumicino", en: "Two apartments, one house: up to 10 guests in Fiumicino", es: "Dos apartamentos, una casa: hasta 10 huéspedes en Fiumicino" },
    descrizione: {
      it: "Prenota tutta MiriAle per il tuo gruppo: i due appartamenti indipendenti Miri e Ale insieme, con 4 camere matrimoniali, 2 bagni e 2 cucine, più il giardino privato in comune. Spazio e privacy per famiglie numerose o gruppi di amici, a pochi minuti dall'aeroporto di Fiumicino, dal mare e dai treni per Roma.",
      en: "Book the whole of MiriAle for your group: the two independent Miri and Ale apartments together, with 4 double bedrooms, 2 bathrooms and 2 kitchens, plus the shared private garden. Space and privacy for large families or groups of friends, minutes from Fiumicino airport, the sea and the trains to Rome.",
      es: "Reserva toda MiriAle para tu grupo: los dos apartamentos independientes Miri y Ale juntos, con 4 dormitorios de matrimonio, 2 baños y 2 cocinas, además del jardín privado compartido. Espacio y privacidad para familias numerosas o grupos de amigos, a pocos minutos del aeropuerto de Fiumicino, del mar y de los trenes hacia Roma.",
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
    cardGallery: [
      ...ph("miri", [1], "Soggiorno di Miri"),
      ...ph("ale", [1], "Cucina di Ale"),
      ...ph("miri", [14], "Camera di Miri"),
      ...ph("ale", [40], "Camera di Ale"),
      ...ph("miri", [11], "Bagno di Miri"),
      ...ph("ale", [15], "Bagno di Ale"),
      ...ph("miri", [16], "Camera di Miri"),
      ...ph("ale", [9], "Camera di Ale"),
      ...ph("comune", [21], "Giardino di MiriAle"),
      ...ph("comune", [28], "La villa MiriAle"),
    ],
    stanze: [
      { nome: { it: "Appartamento Miri · 75 m²", en: "Miri apartment · 75 m²", es: "Apartamento Miri · 75 m²" }, tag: { it: "Primo piano", en: "First floor", es: "Primera planta" }, descr: { it: "Cucina in legno, soggiorno, 2 camere e 1 bagno. Fino a 6 ospiti.", en: "Wooden kitchen, living room, 2 bedrooms and 1 bathroom. Up to 6 guests.", es: "Cocina de madera, salón, 2 dormitorios y 1 baño. Hasta 6 huéspedes." }, imgs: ph("miri", [1, 14], "Appartamento Miri") },
      { nome: { it: "Appartamento Ale · 55 m²", en: "Ale apartment · 55 m²", es: "Apartamento Ale · 55 m²" }, tag: { it: "Mansarda", en: "Attic", es: "Buhardilla" }, descr: { it: "Cucina attrezzata, 2 camere mansardate e 1 bagno in marmo. Fino a 4 ospiti.", en: "Equipped kitchen, 2 attic bedrooms and 1 marble bathroom. Up to 4 guests.", es: "Cocina equipada, 2 dormitorios abuhardillados y 1 baño de mármol. Hasta 4 huéspedes." }, imgs: ph("ale", [40, 1], "Appartamento Ale") },
      { nome: { it: "Giardino condiviso", en: "Shared garden", es: "Jardín compartido" }, tag: { it: "In comune", en: "Shared", es: "Compartido" }, descr: { it: "L'unico spazio in comune: giardino privato con terrazza per la colazione e parcheggio.", en: "The only shared space: private garden with breakfast terrace and parking.", es: "El único espacio compartido: jardín privado con terraza para el desayuno y aparcamiento." }, imgs: ph("comune", [21, 13, 16], "Giardino di MiriAle") },
    ],
    love: [
      { img: "/images/house/house-10.jpg", t: { it: "Due cucine attrezzate", en: "Two equipped kitchens", es: "Dos cocinas equipadas" }, s: { it: "Una per appartamento: cucinate in autonomia.", en: "One per apartment: cook independently.", es: "Una por apartamento: cocinad con total autonomía." } },
      { img: "/images/house/house-28.jpg", t: { it: "4 camere matrimoniali", en: "4 double bedrooms", es: "4 dormitorios de matrimonio" }, s: { it: "Spazio comodo per un massimo di 10 ospiti.", en: "Comfortable space for up to 10 guests.", es: "Espacio cómodo para un máximo de 10 huéspedes." } },
      { img: "/images/house/house-02.jpg", t: { it: "Tutta la casa per voi", en: "The whole house to yourselves", es: "Toda la casa para vosotros" }, s: { it: "Privacy totale per famiglie e gruppi.", en: "Full privacy for families and groups.", es: "Privacidad total para familias y grupos." } },
      { img: "/images/house/house-19.jpg", t: { it: "Giardino privato", en: "Private garden", es: "Jardín privado" }, s: { it: "Terrazza condivisa per la colazione all'aperto.", en: "Shared terrace for breakfast outdoors.", es: "Terraza compartida para desayunar al aire libre." } },
      { img: "/images/house/house-29.jpg", t: { it: "Parcheggio gratuito", en: "Free private parking", es: "Aparcamiento gratuito" }, s: { it: "Comodo e gratuito, in loco.", en: "Easy and free, inside the property.", es: "Cómodo y gratuito, en la propiedad." } },
      { img: "/images/aereo-aeroporto.jpg", t: { it: "Aeroporto, mare e Roma", en: "Airport, sea & Rome", es: "Aeropuerto, mar y Roma" }, s: { it: "A 10 minuti dall'aeroporto FCO.", en: "Just 10 minutes from FCO Airport.", es: "A 10 minutos del aeropuerto FCO." } },
    ],
    waMsg: {
      it: "Ciao Fabio! Vorrei prenotare tutta la casa MiriAle (Miri + Ale, fino a 10 ospiti). C'è disponibilità?",
      en: "Hi Fabio! I'd like to book the whole MiriAle house (Miri + Ale, up to 10 guests). Is it available?",
      es: "¡Hola Fabio! Me gustaría reservar toda la casa MiriAle (Miri + Ale, hasta 10 huéspedes). ¿Hay disponibilidad?",
    },
  },
];

export function getAppartamento(slug: string): Appartamento | undefined {
  return APPARTAMENTI.find((a) => a.slug === slug);
}

// Le recensioni reali sono ora in `lib/reviews.tsx` (REVIEWS + REVIEW_STATS).
