"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Car,
  Check,
  CigaretteOff,
  Clock,
  Coffee,
  CookingPot,
  CupSoda,
  DoorOpen,
  Fan,
  Flame,
  Heart,
  Home as HomeIcon,
  Image as ImageIcon,
  Leaf,
  LogOut,
  Luggage,
  MapPin,
  MessageCircle,
  Microwave,
  MoonStar,
  PartyPopper,
  PawPrint,
  Plane,
  Quote,
  Refrigerator,
  ShieldCheck,
  Shirt,
  ShowerHead,
  Sofa,
  Sparkles,
  Star,
  Sun,
  Thermometer,
  Train,
  Tv,
  UserCheck,
  Users,
  Utensils,
  Waves,
  WashingMachine,
  Wifi,
  Wind,
} from "lucide-react";
import { I, MAPS_EMBED, MAPS_SHORT, waLink } from "@/lib/site";
import GalleryModal from "@/components/site/GalleryModal";
import { useLang, tr } from "@/components/site/LangProvider";
import { type Appartamento, type B, RECENSIONI } from "@/lib/apartments";

/** Mappa chiave dotazione → icona, per i bullet di ogni stanza. */
const AMENITY_ICONS: Record<string, typeof BedDouble> = {
  bed: BedDouble,
  wardrobe: Shirt,
  ac: Wind,
  tv: Tv,
  shower: ShowerHead,
  sink: Bath,
  hairdryer: Fan,
  kitchen: CookingPot,
  sofa: Sofa,
  table: Utensils,
  skylight: Sun,
  fridge: Refrigerator,
  garden: Leaf,
  parking: Car,
};
type Dotaz = { icon: keyof typeof AMENITY_ICONS; t: B };

function fmt(d: string) {
  if (!d) return "";
  const [y, m, g] = d.split("-");
  return `${g}/${m}/${y}`;
}

/** Placeholder grafico per immagini non ancora fornite dal cliente. */
function Ph({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-cream-2 to-cream text-warm-gray ${className}`}
    >
      <ImageIcon className="h-6 w-6 opacity-60" strokeWidth={1.4} />
      <span className="px-2 text-center text-[10px] uppercase tracking-wide opacity-70">{label}</span>
    </div>
  );
}

export default function ApartmentListing({ apt }: { apt: Appartamento }) {
  const { lang } = useLang();
  const t = (b: B) => tr(lang, b);
  const isCasa = apt.slug === "casa";

  // Booking box
  const [ci, setCi] = useState("");
  const [co, setCo] = useState("");
  const [g, setG] = useState(1);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const msg =
    t(apt.waMsg) +
    (ci && co
      ? lang === "it"
        ? ` Dal ${fmt(ci)} al ${fmt(co)}, ${g} ospiti.`
        : ` From ${fmt(ci)} to ${fmt(co)}, ${g} guests.`
      : lang === "it"
        ? ` ${g} ospiti.`
        : ` ${g} guests.`);

  /* ---- contenuti ---- */
  const heroBullets: B[] = [
    { it: "Gestione familiare · ti accoglie Fabio", en: "Family-run · hosted by Fabio" },
    { it: "10 min dall'aeroporto FCO · pochi minuti dal mare", en: "10 min to FCO Airport · minutes from the sea" },
    { it: "32 min in treno per Roma", en: "32 min by train to Rome" },
    { it: "Prenotazione diretta · paghi al check-in", en: "Direct booking · pay at check-in" },
  ];
  const specs: { Icon: typeof HomeIcon; a: string; b: B }[] = [
    { Icon: HomeIcon, a: apt.mq, b: { it: "Dimensione", en: "Apartment size" } },
    { Icon: BedDouble, a: String(apt.camere), b: { it: "Camere matrimoniali", en: "Double bedrooms" } },
    { Icon: ShowerHead, a: String(apt.bagni), b: { it: "Bagno con doccia", en: "Bathroom with shower" } },
    { Icon: Users, a: `${lang === "it" ? "Fino a" : "Up to"} ${apt.ospiti}`, b: { it: "Ospiti", en: "Guests" } },
    isCasa
      ? { Icon: HomeIcon, a: "2", b: { it: "Appartamenti indipendenti", en: "Independent apartments" } }
      : { Icon: DoorOpen, a: t(apt.piano).split(" · ")[0], b: { it: "Accesso comodo", en: "Easy access" } },
  ];
  const hostBullets: { Icon: typeof UserCheck; t: B }[] = [
    { Icon: HomeIcon, t: { it: "Ospitalità familiare", en: "Family-run hospitality" } },
    { Icon: UserCheck, t: { it: "Accoglienza di persona", en: "In-person welcome" } },
    { Icon: Luggage, t: { it: "Aiuto coi bagagli", en: "Luggage help" } },
    { Icon: MapPin, t: { it: "Consigli e suggerimenti locali", en: "Local tips & recommendations" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid)" } },
  ];
  const aboutFeatures: { Icon: typeof DoorOpen; t: B; s: B }[] = isCasa
    ? [
        { Icon: HomeIcon, t: { it: "2 appartamenti", en: "2 apartments" }, s: { it: "indipendenti, con ingresso proprio", en: "independent, with own entrance" } },
        { Icon: BedDouble, t: { it: "4 camere", en: "4 double" }, s: { it: "matrimoniali", en: "bedrooms" } },
        { Icon: ShowerHead, t: { it: "2 bagni", en: "2 bathrooms" }, s: { it: "con doccia", en: "with shower" } },
        { Icon: CookingPot, t: { it: "2 cucine", en: "2 kitchens" }, s: { it: "attrezzate", en: "fully equipped" } },
        { Icon: Leaf, t: { it: "Giardino privato", en: "Private garden" }, s: { it: "condiviso, con terrazza colazione", en: "shared, with breakfast terrace" } },
      ]
    : [
        { Icon: DoorOpen, t: { it: "Piano terra", en: "Ground floor" }, s: { it: "accesso comodo, niente scale", en: "Easy access · no stairs" } },
        { Icon: CookingPot, t: { it: "Cucina in legno", en: "Warm wooden" }, s: { it: "e zona living", en: "kitchen & living room" } },
        { Icon: ShowerHead, t: { it: "Bagno", en: "Bathroom" }, s: { it: "con doccia", en: "with shower" } },
        { Icon: Car, t: { it: "Parcheggio privato", en: "Private free" }, s: { it: "gratuito", en: "parking" } },
        { Icon: Leaf, t: { it: "Accesso al giardino", en: "Access to shared" }, s: { it: "privato condiviso con terrazza colazione", en: "private garden with breakfast terrace" } },
      ];
  const amenities: { Icon: typeof Wifi; t: B }[] = [
    { Icon: Wifi, t: { it: "Wi-Fi gratuito", en: "Free Wi-Fi" } },
    { Icon: Wind, t: { it: "Aria condizionata", en: "Air conditioning" } },
    { Icon: Thermometer, t: { it: "Riscaldamento", en: "Heating" } },
    { Icon: Utensils, t: { it: "Cucina attrezzata", en: "Fully equipped kitchen" } },
    { Icon: CookingPot, t: { it: "Forno", en: "Oven" } },
    { Icon: Flame, t: { it: "Piano cottura", en: "Hob" } },
    { Icon: Refrigerator, t: { it: "Frigorifero", en: "Fridge" } },
    { Icon: Microwave, t: { it: "Microonde", en: "Microwave" } },
    { Icon: CupSoda, t: { it: "Bollitore", en: "Kettle" } },
    { Icon: Coffee, t: { it: "Moka", en: "Moka coffee pot" } },
    { Icon: WashingMachine, t: { it: "Lavatrice", en: "Washing machine" } },
    { Icon: Tv, t: { it: "TV", en: "TV" } },
    { Icon: Fan, t: { it: "Phon", en: "Hairdryer" } },
    { Icon: Bath, t: { it: "Biancheria inclusa", en: "Towels & linen included" } },
    { Icon: Sun, t: { it: "Balcone", en: "Balcony" } },
    { Icon: Car, t: { it: "Parcheggio privato gratuito", en: "Private free parking" } },
  ];
  const praised: { t: B; v: string }[] = [
    { t: { it: "Personale", en: "Staff" }, v: "9.4" },
    { t: { it: "Pulizia", en: "Cleanliness" }, v: "9.3" },
    { t: { it: "Comfort", en: "Comfort" }, v: "8.7" },
    { t: { it: "Servizi", en: "Facilities" }, v: "8.7" },
    { t: { it: "Qualità-prezzo", en: "Value" }, v: "8.7" },
    { t: { it: "Posizione", en: "Location" }, v: "8.5" },
  ];
  const hostBullets2: { Icon: typeof UserCheck; t: B }[] = [
    { Icon: UserCheck, t: { it: "Accoglienza e aiuto coi bagagli", en: "Personal welcome and luggage help" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid)" } },
    { Icon: MapPin, t: { it: "Consigli su ristoranti, spiagge e Roma", en: "Local tips for restaurants, beaches & Rome" } },
    { Icon: MessageCircle, t: { it: "Comunicazione rapida su WhatsApp", en: "Quick communication on WhatsApp" } },
  ];
  const dist: { Icon: typeof Plane; d: B; t: B }[] = [
    { Icon: Plane, d: { it: "10 min", en: "10 min" }, t: { it: "dall'aeroporto FCO", en: "to FCO Airport" } },
    { Icon: Train, d: { it: "32 min", en: "32 min" }, t: { it: "con il Leonardo Express per Roma (Termini)", en: "by Leonardo Express to Rome (Termini)" } },
    { Icon: Waves, d: { it: "Pochi minuti", en: "Minutes" }, t: { it: "dal mare", en: "from the sea" } },
    { Icon: Utensils, d: { it: "Vicinissimo", en: "Close to" }, t: { it: "ai ristoranti di pesce di Fiumicino", en: "Fiumicino seafood restaurants" } },
  ];
  const whoFor: { Icon: typeof Users; img: string; t: B; s: B }[] = isCasa
    ? [
        { Icon: Users, img: "/images/luoghi/famiglia.jpg", t: { it: "Famiglie numerose", en: "Large families" }, s: { it: "4 camere e 2 bagni: spazio per tutti, fino a 8 ospiti.", en: "4 bedrooms and 2 bathrooms: room for everyone, up to 8 guests." } },
        { Icon: Sparkles, img: "/images/luoghi/amici.jpg", t: { it: "Gruppi di amici", en: "Groups of friends" }, s: { it: "Tutta la casa per voi, vicino al mare e a Roma.", en: "The whole house to yourselves, close to the sea and Rome." } },
        { Icon: Heart, img: "/images/luoghi/coppia.jpg", t: { it: "Due famiglie insieme", en: "Two families together" }, s: { it: "Due appartamenti indipendenti, un solo giardino in comune.", en: "Two independent apartments, one shared garden." } },
        { Icon: Plane, img: "/images/luoghi/scali.jpg", t: { it: "Occasioni speciali", en: "Special occasions" }, s: { it: "Reunion e ritrovi a due passi dall'aeroporto.", en: "Reunions and gatherings a step from the airport." } },
      ]
    : [
        { Icon: Users, img: "/images/luoghi/famiglia.jpg", t: { it: "Famiglie", en: "Families" }, s: { it: "Spaziosa e comoda per una vacanza in famiglia.", en: "Spacious and comfortable for a relaxing family holiday." } },
        { Icon: Heart, img: "/images/luoghi/coppia.jpg", t: { it: "Coppie", en: "Couples" }, s: { it: "Un rifugio accogliente vicino al mare e alla magia di Roma.", en: "A cosy retreat close to the sea and the magic of Rome." } },
        { Icon: Sparkles, img: "/images/luoghi/amici.jpg", t: { it: "Amici", en: "Friends" }, s: { it: "Ottimo spazio per esplorare, rilassarsi e stare insieme.", en: "Great space to explore, relax and enjoy time together." } },
        { Icon: Plane, img: "/images/luoghi/scali.jpg", t: { it: "Scali aeroporto", en: "Airport stopovers" }, s: { it: "Ideale per soggiorni brevi prima o dopo il volo.", en: "Ideal for short stays before or after your flight." } },
      ];
  const rules: { Icon: typeof Clock; t: B; s: B }[] = [
    { Icon: Clock, t: { it: "Check-in", en: "Check-in" }, s: { it: "dalle 15:00", en: "from 15:00" } },
    { Icon: LogOut, t: { it: "Check-out", en: "Check-out" }, s: { it: "entro le 11:00", en: "by 11:00" } },
    { Icon: CigaretteOff, t: { it: "Non fumatori", en: "Non-smoking" }, s: { it: "all'interno", en: "inside" } },
    { Icon: PawPrint, t: { it: "Niente animali", en: "No pets" }, s: { it: "", en: "" } },
    { Icon: PartyPopper, t: { it: "Niente feste", en: "No parties" }, s: { it: "o eventi", en: "or events" } },
    { Icon: UserCheck, t: { it: "Età minima", en: "Minimum age" }, s: { it: "18", en: "18" } },
    { Icon: MoonStar, t: { it: "Silenzio", en: "Quiet time" }, s: { it: "23:00 – 07:00", en: "23:00 – 07:00" } },
  ];

  // "Cosa amerai" — punti forti curati per appartamento
  const highlightsBySlug: Record<string, { Icon: typeof HomeIcon; t: B; s: B }[]> = {
    miri: [
      { Icon: CookingPot, t: { it: "Una vera cucina in legno", en: "A real wooden kitchen" }, s: { it: "Forno, piano cottura, frigo e tutto per cucinare in autonomia, con tavolo da pranzo.", en: "Oven, hob, fridge and everything to cook on your own, with a dining table." } },
      { Icon: BedDouble, t: { it: "Due camere matrimoniali", en: "Two double bedrooms" }, s: { it: "Spazio comodo fino a 4 ospiti, con biancheria di qualità e armadi.", en: "Comfortable space for up to 4 guests, with quality linens and wardrobes." } },
      { Icon: DoorOpen, t: { it: "Piano terra, senza scale", en: "Ground floor, no stairs" }, s: { it: "Ingresso comodo con bagagli, passeggini o per chi preferisce evitare le scale.", en: "Easy entrance with luggage, strollers or for anyone avoiding stairs." } },
      { Icon: Leaf, t: { it: "Giardino e parcheggio", en: "Garden & parking" }, s: { it: "Accesso al giardino privato condiviso con terrazza colazione e parcheggio gratuito.", en: "Access to the shared private garden with breakfast terrace and free parking." } },
    ],
    ale: [
      { Icon: Sun, t: { it: "Mansarda luminosa", en: "Bright attic" }, s: { it: "Soffitti spioventi e lucernari che riempiono gli ambienti di luce naturale.", en: "Sloped ceilings and skylights that fill the rooms with natural light." } },
      { Icon: ShowerHead, t: { it: "Bagno moderno in marmo", en: "Modern marble bathroom" }, s: { it: "Doccia e finiture eleganti per un soggiorno curato nei dettagli.", en: "Shower and elegant finishes for a stay with attention to detail." } },
      { Icon: CookingPot, t: { it: "Cucina attrezzata", en: "Equipped kitchen" }, s: { it: "Angolo cottura completo con tavolo da pranzo: cucini quando vuoi.", en: "Fully equipped kitchen with dining table: cook whenever you like." } },
      { Icon: Heart, t: { it: "Raccolta e tranquilla", en: "Cosy and quiet" }, s: { it: "Perfetta per coppie e piccole famiglie, vicino al mare e a Roma.", en: "Perfect for couples and small families, close to the sea and Rome." } },
    ],
    casa: [
      { Icon: HomeIcon, t: { it: "Due appartamenti, una casa", en: "Two apartments, one house" }, s: { it: "Miri e Ale insieme: indipendenti ma uniti dallo stesso giardino.", en: "Miri and Ale together: independent but joined by the same garden." } },
      { Icon: BedDouble, t: { it: "4 camere, 2 bagni", en: "4 bedrooms, 2 bathrooms" }, s: { it: "Spazio e privacy fino a 8 ospiti, ideale per gruppi e famiglie numerose.", en: "Space and privacy for up to 8 guests, ideal for groups and large families." } },
      { Icon: CookingPot, t: { it: "Due cucine indipendenti", en: "Two independent kitchens" }, s: { it: "Una per appartamento: organizzazione facile anche in tanti.", en: "One per apartment: easy organisation even in large groups." } },
      { Icon: Leaf, t: { it: "Giardino privato condiviso", en: "Shared private garden" }, s: { it: "Terrazza per la colazione, sedute all'aperto e parcheggio gratuito.", en: "Breakfast terrace, outdoor seating and free parking." } },
    ],
  };
  const highlights = highlightsBySlug[apt.slug] ?? highlightsBySlug.miri;

  // dotazioni (con icone) per ogni stanza, in ordine con apt.stanze
  const dotazioniBySlug: Record<string, Dotaz[][]> = {
    miri: [
      [{ icon: "bed", t: { it: "Letto matrimoniale", en: "Double bed" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning" } }, { icon: "tv", t: { it: "TV", en: "TV" } }],
      [{ icon: "bed", t: { it: "Letto matrimoniale", en: "Double bed" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning" } }],
      [{ icon: "shower", t: { it: "Doccia", en: "Shower" } }, { icon: "sink", t: { it: "Lavabo e WC", en: "Sink & WC" } }, { icon: "hairdryer", t: { it: "Phon", en: "Hairdryer" } }],
      [{ icon: "kitchen", t: { it: "Cucina attrezzata", en: "Equipped kitchen" } }, { icon: "sofa", t: { it: "Divano e TV", en: "Sofa & TV" } }, { icon: "table", t: { it: "Tavolo da pranzo", en: "Dining table" } }],
      [{ icon: "garden", t: { it: "Giardino condiviso", en: "Shared garden" } }, { icon: "table", t: { it: "Terrazza colazione", en: "Breakfast terrace" } }, { icon: "parking", t: { it: "Parcheggio", en: "Parking" } }],
    ],
    ale: [
      [{ icon: "bed", t: { it: "Letto matrimoniale", en: "Double bed" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning" } }, { icon: "skylight", t: { it: "Mansardata", en: "Attic" } }],
      [{ icon: "bed", t: { it: "Letto matrimoniale", en: "Double bed" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning" } }, { icon: "skylight", t: { it: "Lucernario", en: "Skylight" } }],
      [{ icon: "shower", t: { it: "Doccia in marmo", en: "Marble shower" } }, { icon: "sink", t: { it: "Lavabo e WC", en: "Sink & WC" } }, { icon: "hairdryer", t: { it: "Phon", en: "Hairdryer" } }],
      [{ icon: "kitchen", t: { it: "Cucina attrezzata", en: "Equipped kitchen" } }, { icon: "fridge", t: { it: "Frigorifero", en: "Fridge" } }, { icon: "table", t: { it: "Tavolo da pranzo", en: "Dining table" } }],
      [{ icon: "garden", t: { it: "Giardino condiviso", en: "Shared garden" } }, { icon: "table", t: { it: "Terrazza colazione", en: "Breakfast terrace" } }, { icon: "parking", t: { it: "Parcheggio", en: "Parking" } }],
    ],
    casa: [
      [{ icon: "bed", t: { it: "2 matrimoniali", en: "2 double beds" } }, { icon: "kitchen", t: { it: "Cucina in legno", en: "Wooden kitchen" } }, { icon: "shower", t: { it: "Bagno con doccia", en: "Bathroom w/ shower" } }],
      [{ icon: "bed", t: { it: "2 matrimoniali", en: "2 double beds" } }, { icon: "kitchen", t: { it: "Cucina attrezzata", en: "Equipped kitchen" } }, { icon: "shower", t: { it: "Bagno in marmo", en: "Marble bathroom" } }],
      [{ icon: "garden", t: { it: "Giardino privato", en: "Private garden" } }, { icon: "table", t: { it: "Terrazza colazione", en: "Breakfast terrace" } }, { icon: "parking", t: { it: "Parcheggio gratuito", en: "Free parking" } }],
    ],
  };
  const roomDotazioni = dotazioniBySlug[apt.slug] ?? dotazioniBySlug.miri;

  // "Esplora la zona" — città e luoghi vicini con cosa vedere
  const exploreCities: { img: string; t: B; time: B; s: B }[] = [
    { img: "/images/luoghi/roma.jpg", t: { it: "Roma", en: "Rome" }, time: { it: "~32 min in treno", en: "~32 min by train" }, s: { it: "Colosseo, Vaticano, Fontana di Trevi e Trastevere: la Città Eterna in giornata, senza auto.", en: "Colosseum, Vatican, Trevi Fountain and Trastevere: the Eternal City in a day, no car needed." } },
    { img: "/images/luoghi/ostia.jpg", t: { it: "Ostia Antica", en: "Ostia Antica" }, time: { it: "~12 min in auto", en: "~12 min by car" }, s: { it: "Uno dei siti archeologici meglio conservati: teatro romano, terme e mosaici.", en: "One of the best preserved archaeological sites: Roman theatre, baths and mosaics." } },
    { img: "/images/luoghi/beach.jpg", t: { it: "Spiagge e lungomare", en: "Beaches & seafront" }, time: { it: "~10 min in auto", en: "~10 min by car" }, s: { it: "Focene, Fregene e Ostia: stabilimenti, passeggiate e tramonti sul mare.", en: "Focene, Fregene and Ostia: beach clubs, walks and sunsets by the sea." } },
    { img: "/images/luoghi/pesce.jpg", t: { it: "Porto di Fiumicino", en: "Fiumicino Port" }, time: { it: "~8 min in auto", en: "~8 min by car" }, s: { it: "Ristoranti di pesce, il faro e la passeggiata lungo il porto-canale.", en: "Seafood restaurants, the lighthouse and a walk along the canal-port." } },
  ];

  const eyebrow = "font-script text-2xl leading-none text-terracotta";
  const h2 = "mt-1 font-serif text-2xl font-semibold text-deep-brown md:text-3xl";
  const campo =
    "mt-1 w-full rounded-xl border border-line bg-bone px-3 py-2.5 text-sm text-deep-brown outline-none focus:border-terracotta";

  return (
    <main className="flex-1">
      {/* ===================== HERO ===================== */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-6 py-10 md:grid-cols-2 md:gap-10">
          {/* sinistra: testo + foto in fondo */}
          <div className="flex flex-col">
            <p className={eyebrow}>{tr(lang, { it: "Benvenuti a MiriAle Holiday House", en: "Welcome to MiriAle Holiday House" })}</p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-deep-brown md:text-5xl">
              {apt.titolo ? t(apt.titolo) : tr(lang, { it: `Appartamento ${apt.nome}`, en: `${apt.nome} Apartment` })}
            </h1>
            <p className="mt-3 text-lg text-warm-gray">{t(apt.tagline)}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-gray line-clamp-3">{t(apt.descrizione)}</p>
            <ul className="mt-5 space-y-2.5">
              {heroBullets.map((b) => (
                <li key={b.en} className="flex items-start gap-2.5 text-sm text-deep-brown">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" /> <span>{t(b)}</span>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setGalleryOpen(true)} className="group relative mt-6 hidden h-40 w-full overflow-hidden rounded-2xl md:mt-auto md:block lg:h-48">
              <Image src={apt.gallery[3]?.src ?? apt.gallery[0].src} alt={apt.gallery[3]?.alt ?? apt.gallery[0].alt} fill sizes="45vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-deep-brown/0 transition group-hover:bg-deep-brown/15" />
            </button>
          </div>

          {/* destra: collage + foto in fondo con "Vedi tutto" */}
          <div className="flex flex-col gap-2.5">
            <div className="grid grid-cols-3 gap-2.5">
              <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl">
                <Image src={apt.gallery[0].src} alt={apt.gallery[0].alt} fill priority sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
              </div>
              {apt.gallery.slice(1, 3).map((im) => (
                <div key={im.src + im.alt} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src={im.src} alt={im.alt} fill sizes="20vw" className="object-cover" />
                </div>
              ))}
            </div>
            <button type="button" onClick={() => setGalleryOpen(true)} className="group relative h-40 w-full overflow-hidden rounded-2xl lg:h-48">
              <Image src={apt.gallery[7]?.src ?? apt.gallery[3].src} alt={apt.gallery[7]?.alt ?? "Giardino"} fill sizes="(max-width:768px) 100vw, 45vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-deep-brown/0 transition group-hover:bg-deep-brown/15" />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-4 py-2 text-xs font-semibold text-deep-brown shadow-sm">
                <ImageIcon className="h-4 w-4 text-terracotta" /> {tr(lang, { it: "Vedi tutto", en: "View all" })}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== SPECS BAR ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-line bg-paper px-6 py-5 shadow-card sm:grid-cols-3 lg:grid-cols-5">
            {specs.map((s) => (
              <div key={s.b.en} className="flex items-center gap-3">
                <s.Icon className="h-6 w-6 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
                <div className="leading-tight">
                  <div className="font-semibold text-deep-brown">{s.a}</div>
                  <div className="text-xs text-warm-gray">{t(s.b)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BOOKING + HOST ===================== */}
      <section className="bg-cream pb-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.4fr_1fr]">
          {/* booking */}
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
            <h3 className="font-serif text-lg font-semibold text-deep-brown">{tr(lang, { it: "Verifica disponibilità e scrivi a Fabio", en: "Check availability & message Fabio" })}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <label className="block"><span className="text-xs font-medium text-warm-gray">Check-in</span><input type="date" value={ci} onChange={(e) => setCi(e.target.value)} className={campo} /></label>
              <label className="block"><span className="text-xs font-medium text-warm-gray">Check-out</span><input type="date" value={co} min={ci || undefined} onChange={(e) => setCo(e.target.value)} className={campo} /></label>
              <label className="block"><span className="text-xs font-medium text-warm-gray">{tr(lang, { it: "Ospiti", en: "Guests" })}</span>
                <select value={g} onChange={(e) => setG(Number(e.target.value))} className={campo}>{Array.from({ length: apt.ospiti }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? tr(lang, { it: "ospite", en: "guest" }) : tr(lang, { it: "ospiti", en: "guests" })}</option>)}</select>
              </label>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
                <I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivi su WhatsApp", en: "Message on WhatsApp" })}
              </a>
              <span className="text-xs text-warm-gray">{tr(lang, { it: "Risposta rapida da Fabio", en: "Quick reply from Fabio" })}</span>
            </div>
            <p className="mt-3 text-center text-xs text-warm-gray">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-terracotta" />
              {tr(lang, { it: "Prenotazione diretta · nessun pagamento online · paghi al check-in", en: "Direct booking · no online payment · pay at check-in" })}
            </p>
          </div>

          {/* host */}
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Ph label={tr(lang, { it: "Foto Fabio", en: "Fabio photo" })} className="h-16 w-16 flex-shrink-0 rounded-full" />
              <div>
                <p className="font-script text-xl leading-none text-terracotta">{tr(lang, { it: "Ti ospita", en: "Hosted by" })}</p>
                <p className="mt-0.5 font-serif text-xl font-semibold text-deep-brown">Fabio</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {hostBullets.map((b) => (
                <li key={b.t.en} className="flex items-center gap-2 text-sm text-deep-brown"><b.Icon className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(b.t)}</li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 border-t border-line-soft pt-3 text-xs text-warm-gray"><Users className="h-4 w-4 text-terracotta" /> {tr(lang, { it: "Parliamo italiano, inglese e spagnolo", en: "We speak Italian, English and Spanish" })}</p>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <Section bg="paper" id="about">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <div>
            <p className={eyebrow}>{isCasa ? tr(lang, { it: "La casa intera", en: "About the whole house" }) : tr(lang, { it: `L'appartamento ${apt.nome}`, en: `About ${apt.nome} Apartment` })}</p>
            <h2 className={h2}>{tr(lang, { it: "Luminoso, accogliente e confortevole", en: "Bright, warm and comfortable" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{t(apt.descrizione)}</p>
          </div>
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-paper sm:grid-cols-3 lg:grid-cols-5">
            {aboutFeatures.map((f, i) => (
              <div key={i} className="border-line p-5 [&:not(:last-child)]:border-b sm:[&:not(:nth-child(3n))]:border-r lg:[&:not(:last-child)]:border-b-0 lg:[&:not(:last-child)]:border-r">
                <f.Icon className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
                <p className="mt-3 text-sm font-semibold leading-snug text-deep-brown">{t(f.t)}</p>
                <p className="mt-1 text-xs leading-snug text-warm-gray">{t(f.s)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== WHAT YOU'LL LOVE ===================== */}
      <Section bg="cream">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Cosa amerai", en: "What you'll love" })}</p>
            <h2 className={h2}>{tr(lang, { it: "Pensato per un soggiorno senza pensieri", en: "Designed for a carefree stay" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{tr(lang, { it: "Pochi punti che fanno la differenza: spazi comodi, dotazioni vere e una posizione che ti fa risparmiare tempo, tra aeroporto, mare e Roma.", en: "A few things that make the difference: comfortable spaces, real amenities and a location that saves you time, between the airport, the sea and Rome." })}</p>
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {highlights.map((hl) => (
              <div key={hl.t.en} className="flex gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-paper text-terracotta shadow-sm"><hl.Icon className="h-6 w-6" strokeWidth={1.5} /></span>
                <div>
                  <h3 className="font-serif text-base font-bold text-deep-brown">{t(hl.t)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-warm-gray">{t(hl.s)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== WHAT & LAYOUT ===================== */}
      <Section bg="paper">
        <p className={eyebrow}>{tr(lang, { it: "Ambienti e layout", en: "What & layout" })}</p>
        <h2 className={h2}>{tr(lang, { it: "Ogni ambiente, nel dettaglio", en: "Every room in detail" })}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {apt.stanze.map((s, i) => (
            <article key={s.nome.en} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm sm:flex-row">
              <div className="relative aspect-[4/3] sm:aspect-auto sm:w-44 sm:flex-shrink-0">
                <Image src={s.imgs[0].src} alt={t(s.nome)} fill sizes="(max-width:768px) 100vw, 180px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-lg font-bold text-deep-brown">{t(s.nome)}</h3>
                  <span className="rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-medium text-terracotta">{t(s.tag)}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(roomDotazioni[i] ?? []).map((d) => {
                    const Ic = AMENITY_ICONS[d.icon];
                    return (
                      <span key={d.t.en} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bone px-3 py-1 text-xs text-deep-brown">
                        <Ic className="h-3.5 w-3.5 flex-shrink-0 text-terracotta" strokeWidth={1.6} /> {t(d.t)}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===================== AMENITIES ===================== */}
      <Section bg="cream" id="amenities">
        <p className={eyebrow}>{tr(lang, { it: "Servizi", en: "Amenities" })}</p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((a) => (
            <div key={a.t.en} className="flex items-center gap-2.5 text-sm text-deep-brown"><a.Icon className="h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.5} /> {t(a.t)}</div>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 rounded-xl bg-paper px-4 py-3 text-sm text-warm-gray"><Leaf className="h-4 w-4 flex-shrink-0 text-terracotta" /> {tr(lang, { it: "Accesso al giardino privato in comune con terrazza per la colazione.", en: "Access to the shared private garden with breakfast terrace." })}</p>
      </Section>

      {/* ===================== REVIEWS ===================== */}
      <Section bg="paper" id="reviews">
        <p className={eyebrow}>{tr(lang, { it: "Recensioni degli ospiti", en: "Guest reviews" })}</p>
        <div className="mt-1 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <div>
            <h2 className={h2}>{tr(lang, { it: "Amati dagli ospiti", en: "Loved by our guests" })}</h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-serif text-4xl font-bold text-deep-brown">8.8<span className="text-xl font-semibold text-warm-gray">/10</span></span>
              <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            </div>
            <p className="mt-1 text-sm text-warm-gray">{tr(lang, { it: "da 122 recensioni", en: "from 122 reviews" })}</p>
            <p className="mt-5 text-sm font-semibold text-deep-brown">{tr(lang, { it: "Punteggi per categoria", en: "Category ratings" })}</p>
            <ul className="mt-2 space-y-1.5">
              {praised.map((p) => (
                <li key={p.t.en} className="flex items-center justify-between gap-3 border-b border-line-soft pb-1 text-sm">
                  <span className="text-warm-gray">{t(p.t)}</span>
                  <span className="font-semibold text-deep-brown">{p.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {RECENSIONI.map((r) => (
              <figure key={r.who} className="rounded-2xl border border-line bg-cream p-5">
                <Quote className="h-6 w-6 text-terracotta/60" />
                <blockquote className="mt-2 text-sm leading-relaxed text-deep-brown">{t(r.t)}</blockquote>
                <div className="mt-3 flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
                <figcaption className="mt-2 text-xs font-semibold text-warm-gray">{r.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== MEET YOUR HOST ===================== */}
      <Section bg="cream">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1.1fr_0.8fr] lg:gap-8">
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl">
            <Ph label={tr(lang, { it: "Foto della famiglia di Fabio", en: "Photo of Fabio's family" })} className="absolute inset-0" />
          </div>
          <div className="flex flex-col justify-center">
            <p className={eyebrow}>{tr(lang, { it: "Conosci l'host", en: "Meet your host" })}</p>
            <h2 className={h2}>{tr(lang, { it: "Ciao, sono Fabio", en: "Hi, I'm Fabio" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{tr(lang, { it: "Vivo qui a Fiumicino con la mia famiglia e amiamo accogliere ospiti da tutto il mondo. Faremo di tutto perché il vostro soggiorno sia facile, comodo e pieno di consigli locali!", en: "I live here in Fiumicino with my family and we love welcoming guests from all over the world. We'll make sure your stay is easy, comfortable and full of local tips!" })}</p>
            <ul className="mt-4 space-y-2">
              {hostBullets2.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-deep-brown"><b.Icon className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(b.t)}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-terracotta/20 bg-cream-2 p-6 text-center">
            <p className="font-script text-xl leading-snug text-deep-brown">{tr(lang, { it: "“Trattiamo i nostri ospiti come vorremmo essere trattati noi.”", en: "“We treat our guests the way we'd like to be treated.”" })}</p>
            <p className="mt-4 font-script text-lg text-terracotta">{tr(lang, { it: "A presto!", en: "See you soon!" })}</p>
            <p className="mt-1 inline-flex items-center justify-center gap-1.5 font-serif text-sm font-semibold text-deep-brown">Fabio <Heart className="h-3.5 w-3.5 fill-terracotta text-terracotta" /></p>
          </div>
        </div>
      </Section>

      {/* ===================== LOCATION ===================== */}
      <Section bg="paper" id="location">
        <p className={eyebrow}>{tr(lang, { it: "Posizione e comodità", en: "Location & convenience" })}</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <iframe src={MAPS_EMBED} className="h-[320px] w-full rounded-2xl border-0" loading="lazy" title="Map" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {dist.map((x) => (
              <div key={x.t.en} className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cream"><x.Icon className="h-5 w-5 text-terracotta" strokeWidth={1.6} /></span>
                <div className="leading-snug"><div className="font-semibold text-deep-brown">{t(x.d)}</div><div className="text-xs text-warm-gray">{t(x.t)}</div></div>
              </div>
            ))}
            <a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="inline-block self-end text-sm font-semibold text-terracotta hover:underline sm:col-span-2">{tr(lang, { it: "Apri su Google Maps →", en: "Open in Google Maps →" })}</a>
          </div>
        </div>
      </Section>

      {/* ===================== EXPLORE THE AREA ===================== */}
      <Section bg="cream">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Esplora la zona", en: "Explore the area" })}</p>
            <h2 className={h2}>{tr(lang, { it: "Cosa c'è intorno a te", en: "What's around you" })}</h2>
          </div>
          <Link href="/cosa-fare-intorno" className="inline-flex items-center gap-2 rounded-full border border-terracotta px-5 py-2.5 text-sm font-semibold text-terracotta transition hover:bg-terracotta hover:text-white">
            {tr(lang, { it: "Scopri tutte le esperienze", en: "Discover all experiences" })} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exploreCities.map((c) => (
            <article key={c.t.en} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
              <div className="relative aspect-[16/10]"><Image src={c.img} alt={t(c.t)} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" /></div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-deep-brown">{t(c.t)}</h3>
                  <span className="flex-shrink-0 text-[11px] font-medium text-terracotta">{t(c.time)}</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-warm-gray">{t(c.s)}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===================== WHO IT'S PERFECT FOR ===================== */}
      <Section bg="paper">
        <p className={eyebrow}>{tr(lang, { it: "Per chi è perfetto", en: "Who it's perfect for" })}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {whoFor.map((w) => (
            <article key={w.t.en} className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={w.img} alt={t(w.t)} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-terracotta shadow-sm"><w.Icon className="h-5 w-5" strokeWidth={1.6} /></span>
              </div>
              <div className="p-4 text-center"><h3 className="font-semibold text-deep-brown">{t(w.t)}</h3><p className="mt-1 text-xs leading-relaxed text-warm-gray">{t(w.s)}</p></div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===================== HOUSE RULES ===================== */}
      <Section bg="cream">
        <p className={eyebrow}>{tr(lang, { it: "Regole della casa e info pratiche", en: "House rules & practical info" })}</p>
        <div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-7">
          {rules.map((r) => (
            <div key={r.t.en} className="flex flex-col items-center text-center">
              <r.Icon className="h-6 w-6 text-terracotta" strokeWidth={1.5} />
              <div className="mt-2 text-sm font-semibold leading-tight text-deep-brown">{t(r.t)}</div>
              {t(r.s) ? <div className="text-xs text-warm-gray">{t(r.s)}</div> : null}
            </div>
          ))}
        </div>
      </Section>

      <GalleryModal
        images={apt.gallery}
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        title={tr(lang, { it: `Appartamento ${apt.nome}`, en: `${apt.nome} apartment` })}
      />
    </main>
  );
}

function Section({ bg, id, children }: { bg: "paper" | "cream"; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${bg === "cream" ? "bg-cream" : "bg-paper"} py-12 md:py-14`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
