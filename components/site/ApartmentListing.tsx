"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  Check,
  CigaretteOff,
  Clock,
  Coffee,
  CookingPot,
  CupSoda,
  DoorOpen,
  Fan,
  Fish,
  Flame,
  Heart,
  Home as HomeIcon,
  Image as ImageIcon,
  Landmark,
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
import { I, MAPS_EMBED, MAPS_SHORT, cardRail, waLink } from "@/lib/site";
import GalleryModal from "@/components/site/GalleryModal";
import Reveal from "@/components/site/Reveal";
import ReviewsGridCarousel from "@/components/site/ReviewsGridCarousel";
import { useLang, tr } from "@/components/site/LangProvider";
import { type Appartamento, type B } from "@/lib/apartments";
import { REVIEWS } from "@/lib/reviews";

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
    { it: "Gestione familiare · ti accoglie Fabio", en: "Family-run · hosted by Fabio", es: "Gestión familiar · te recibe Fabio" },
    { it: "10 min dall'aeroporto FCO · pochi minuti dal mare", en: "10 min to FCO Airport · minutes from the sea", es: "10 min del aeropuerto FCO · a pocos minutos del mar" },
    { it: "32 min in treno per Roma", en: "32 min by train to Rome", es: "32 min en tren a Roma" },
    { it: "Prenotazione diretta · paghi al check-in", en: "Direct booking · pay at check-in", es: "Reserva directa · pagas en el check-in" },
  ];
  const specs: { Icon: typeof HomeIcon; a: string; b: B }[] = [
    { Icon: HomeIcon, a: apt.mq, b: { it: "Dimensione", en: "Apartment size", es: "Superficie" } },
    { Icon: BedDouble, a: String(apt.camere), b: { it: "Camere matrimoniali", en: "Double bedrooms", es: "Habitaciones dobles" } },
    { Icon: ShowerHead, a: String(apt.bagni), b: { it: "Bagno con doccia", en: "Bathroom with shower", es: "Baño con ducha" } },
    { Icon: Users, a: `${lang === "it" ? "Fino a" : "Up to"} ${apt.ospiti}`, b: { it: "Ospiti", en: "Guests", es: "Huéspedes" } },
    isCasa
      ? { Icon: HomeIcon, a: "2", b: { it: "Appartamenti indipendenti", en: "Independent apartments", es: "Apartamentos independientes" } }
      : { Icon: DoorOpen, a: t(apt.piano).split(" · ")[0], b: { it: "Accesso comodo", en: "Easy access", es: "Acceso cómodo" } },
  ];
  const hostBullets: { Icon: typeof UserCheck; t: B }[] = [
    { Icon: HomeIcon, t: { it: "Ospitalità familiare", en: "Family-run hospitality", es: "Hospitalidad familiar" } },
    { Icon: UserCheck, t: { it: "Accoglienza di persona", en: "In-person welcome", es: "Recibimiento en persona" } },
    { Icon: Luggage, t: { it: "Aiuto coi bagagli", en: "Luggage help", es: "Ayuda con el equipaje" } },
    { Icon: Coffee, t: { it: "Caffè al mattino", en: "Morning coffee", es: "Café por la mañana" } },
    { Icon: MapPin, t: { it: "Consigli e suggerimenti locali", en: "Local tips & recommendations", es: "Consejos y recomendaciones locales" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid)", es: "Traslado al aeropuerto bajo petición (de pago)" } },
  ];
  const aboutFeatures: { Icon: typeof DoorOpen; t: B; s: B }[] = isCasa
    ? [
        { Icon: HomeIcon, t: { it: "2 appartamenti", en: "2 apartments", es: "2 apartamentos" }, s: { it: "indipendenti, con ingresso proprio", en: "independent, with own entrance", es: "independientes, con entrada propia" } },
        { Icon: BedDouble, t: { it: "4 camere", en: "4 double", es: "4 habitaciones" }, s: { it: "matrimoniali", en: "bedrooms", es: "dobles" } },
        { Icon: ShowerHead, t: { it: "2 bagni", en: "2 bathrooms", es: "2 baños" }, s: { it: "con doccia", en: "with shower", es: "con ducha" } },
        { Icon: CookingPot, t: { it: "2 cucine", en: "2 kitchens", es: "2 cocinas" }, s: { it: "attrezzate", en: "fully equipped", es: "totalmente equipadas" } },
        { Icon: Leaf, t: { it: "Giardino privato", en: "Private garden", es: "Jardín privado" }, s: { it: "condiviso, con terrazza colazione", en: "shared, with breakfast terrace", es: "compartido, con terraza para el desayuno" } },
      ]
    : [
        { Icon: DoorOpen, t: { it: "Piano terra", en: "Ground floor", es: "Planta baja" }, s: { it: "accesso comodo, niente scale", en: "Easy access · no stairs", es: "acceso cómodo, sin escaleras" } },
        { Icon: CookingPot, t: { it: "Cucina in legno", en: "Warm wooden", es: "Cocina de madera" }, s: { it: "e zona living", en: "kitchen & living room", es: "y zona de estar" } },
        { Icon: ShowerHead, t: { it: "Bagno", en: "Bathroom", es: "Baño" }, s: { it: "con doccia", en: "with shower", es: "con ducha" } },
        { Icon: Car, t: { it: "Parcheggio privato", en: "Private free", es: "Aparcamiento privado" }, s: { it: "gratuito", en: "parking", es: "gratuito" } },
        { Icon: Leaf, t: { it: "Accesso al giardino", en: "Access to shared", es: "Acceso al jardín" }, s: { it: "privato condiviso con terrazza colazione", en: "private garden with breakfast terrace", es: "privado compartido con terraza para el desayuno" } },
      ];
  const amenities: { Icon: typeof Wifi; t: B }[] = [
    { Icon: Wifi, t: { it: "Wi-Fi gratuito", en: "Free Wi-Fi", es: "Wi-Fi gratuito" } },
    { Icon: Wind, t: { it: "Aria condizionata", en: "Air conditioning", es: "Aire acondicionado" } },
    { Icon: Thermometer, t: { it: "Riscaldamento", en: "Heating", es: "Calefacción" } },
    { Icon: Utensils, t: { it: "Cucina attrezzata", en: "Fully equipped kitchen", es: "Cocina totalmente equipada" } },
    { Icon: CookingPot, t: { it: "Forno", en: "Oven", es: "Horno" } },
    { Icon: Flame, t: { it: "Piano cottura", en: "Hob", es: "Placa de cocina" } },
    { Icon: Refrigerator, t: { it: "Frigorifero", en: "Fridge", es: "Nevera" } },
    { Icon: Microwave, t: { it: "Microonde", en: "Microwave", es: "Microondas" } },
    { Icon: CupSoda, t: { it: "Bollitore", en: "Kettle", es: "Hervidor" } },
    { Icon: Coffee, t: { it: "Moka", en: "Moka coffee pot", es: "Cafetera moka" } },
    { Icon: WashingMachine, t: { it: "Lavatrice", en: "Washing machine", es: "Lavadora" } },
    { Icon: Tv, t: { it: "TV", en: "TV", es: "TV" } },
    { Icon: Fan, t: { it: "Phon", en: "Hairdryer", es: "Secador de pelo" } },
    { Icon: Bath, t: { it: "Biancheria inclusa", en: "Towels & linen included", es: "Toallas y ropa de cama incluidas" } },
    { Icon: Sun, t: { it: "Balcone", en: "Balcony", es: "Balcón" } },
    { Icon: Leaf, t: { it: "Giardino privato", en: "Private garden", es: "Jardín privado" } },
    { Icon: Plane, t: { it: "Navetta aeroporto (a pagamento)", en: "Airport shuttle (paid)", es: "Lanzadera al aeropuerto (de pago)" } },
    { Icon: Car, t: { it: "Parcheggio privato gratuito", en: "Private free parking", es: "Aparcamiento privado gratuito" } },
  ];
  const praised: { t: B; v: string }[] = [
    { t: { it: "Personale", en: "Staff", es: "Personal" }, v: "9.4" },
    { t: { it: "Pulizia", en: "Cleanliness", es: "Limpieza" }, v: "9.3" },
    { t: { it: "Comfort", en: "Comfort", es: "Confort" }, v: "8.7" },
    { t: { it: "Servizi", en: "Facilities", es: "Servicios" }, v: "8.7" },
    { t: { it: "Qualità-prezzo", en: "Value", es: "Relación calidad-precio" }, v: "8.7" },
    { t: { it: "Posizione", en: "Location", es: "Ubicación" }, v: "8.5" },
  ];
  const hostBullets2: { Icon: typeof UserCheck; t: B }[] = [
    { Icon: UserCheck, t: { it: "Accoglienza e aiuto coi bagagli", en: "Personal welcome and luggage help", es: "Recibimiento personal y ayuda con el equipaje" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid)", es: "Traslado al aeropuerto bajo petición (de pago)" } },
    { Icon: MapPin, t: { it: "Consigli su ristoranti, spiagge e Roma", en: "Local tips for restaurants, beaches & Rome", es: "Consejos sobre restaurantes, playas y Roma" } },
    { Icon: MessageCircle, t: { it: "Comunicazione rapida su WhatsApp", en: "Quick communication on WhatsApp", es: "Comunicación rápida por WhatsApp" } },
  ];
  // Distanze REALI dall'annuncio Booking ("Dintorni della struttura").
  const localPoints: { Icon: typeof Plane; t: B; rows: { p: B; d: B }[] }[] = [
    { Icon: Plane, t: { it: "Aeroporti", en: "Airports", es: "Aeropuertos" }, rows: [
      { p: { it: "Aeroporto di Roma Fiumicino (FCO)", en: "Rome Fiumicino Airport (FCO)", es: "Aeropuerto de Roma Fiumicino (FCO)" }, d: { it: "5 km", en: "5 km", es: "5 km" } },
      { p: { it: "Aeroporto di Roma Ciampino", en: "Rome Ciampino Airport", es: "Aeropuerto de Roma Ciampino" }, d: { it: "31 km", en: "31 km", es: "31 km" } },
    ] },
    { Icon: Train, t: { it: "Mezzi pubblici", en: "Public transport", es: "Transporte público" }, rows: [
      { p: { it: "Bus pubblico (FCO e Ostia)", en: "Public bus (FCO & Ostia)", es: "Autobús público (FCO y Ostia)" }, d: { it: "500 m a piedi", en: "500 m walk", es: "500 m a pie" } },
      { p: { it: "Treno Lido Nord / Ostia Nord", en: "Lido Nord / Ostia Nord train", es: "Tren Lido Nord / Ostia Nord" }, d: { it: "5 km", en: "5 km", es: "5 km" } },
    ] },
    { Icon: Fish, t: { it: "Ristoranti vicini", en: "Nearby restaurants", es: "Restaurantes cercanos" }, rows: [
      { p: { it: "It Italian Restaurant", en: "It Italian Restaurant", es: "It Italian Restaurant" }, d: { it: "700 m", en: "700 m", es: "700 m" } },
      { p: { it: "Ristorante Luana", en: "Luana restaurant", es: "Restaurante Luana" }, d: { it: "700 m", en: "700 m", es: "700 m" } },
      { p: { it: "Ristorante Docking 9", en: "Docking 9 restaurant", es: "Restaurante Docking 9" }, d: { it: "1,8 km", en: "1.8 km", es: "1,8 km" } },
    ] },
    { Icon: Waves, t: { it: "Spiagge", en: "Beaches", es: "Playas" }, rows: [
      { p: { it: "Lungomare della Salute", en: "Lungomare della Salute", es: "Lungomare della Salute" }, d: { it: "3,9 km", en: "3.9 km", es: "3,9 km" } },
      { p: { it: "Focene", en: "Focene", es: "Focene" }, d: { it: "4,7 km", en: "4.7 km", es: "4,7 km" } },
      { p: { it: "Ostia Lido", en: "Ostia Lido", es: "Ostia Lido" }, d: { it: "4,7 km", en: "4.7 km", es: "4,7 km" } },
      { p: { it: "Castel Fusano", en: "Castel Fusano", es: "Castel Fusano" }, d: { it: "7 km", en: "7 km", es: "7 km" } },
    ] },
    { Icon: Landmark, t: { it: "Cultura e natura", en: "Culture & nature", es: "Cultura y naturaleza" }, rows: [
      { p: { it: "Ostia Antica (scavi)", en: "Ostia Antica ruins", es: "Ostia Antica (excavaciones)" }, d: { it: "4,3 km", en: "4.3 km", es: "4,3 km" } },
      { p: { it: "Bosco Macchia Grande di Focene", en: "Macchia Grande di Focene woods", es: "Bosque Macchia Grande di Focene" }, d: { it: "11 km", en: "11 km", es: "11 km" } },
    ] },
    { Icon: Building2, t: { it: "Fiere ed eventi", en: "Fairs & events", es: "Ferias y eventos" }, rows: [
      { p: { it: "Fiera di Roma", en: "Fiera di Roma", es: "Fiera di Roma" }, d: { it: "7 km", en: "7 km", es: "7 km" } },
      { p: { it: "PalaLottomatica", en: "PalaLottomatica", es: "PalaLottomatica" }, d: { it: "22 km", en: "22 km", es: "22 km" } },
    ] },
  ];
  const whoFor: { Icon: typeof Users; img: string; t: B; s: B }[] = isCasa
    ? [
        { Icon: Users, img: "/images/luoghi/famiglia.jpg", t: { it: "Famiglie numerose", en: "Large families", es: "Familias numerosas" }, s: { it: "4 camere e 2 bagni: spazio per tutti, fino a 10 ospiti.", en: "4 bedrooms and 2 bathrooms: room for everyone, up to 10 guests.", es: "4 habitaciones y 2 baños: espacio para todos, hasta 10 huéspedes." } },
        { Icon: Sparkles, img: "/images/luoghi/amici.jpg", t: { it: "Gruppi di amici", en: "Groups of friends", es: "Grupos de amigos" }, s: { it: "Tutta la casa per voi, vicino al mare e a Roma.", en: "The whole house to yourselves, close to the sea and Rome.", es: "La casa entera para vosotros, cerca del mar y de Roma." } },
        { Icon: Heart, img: "/images/luoghi/coppia.jpg", t: { it: "Due famiglie insieme", en: "Two families together", es: "Dos familias juntas" }, s: { it: "Due appartamenti indipendenti, un solo giardino in comune.", en: "Two independent apartments, one shared garden.", es: "Dos apartamentos independientes, un solo jardín compartido." } },
        { Icon: Plane, img: "/images/luoghi/scali.jpg", t: { it: "Occasioni speciali", en: "Special occasions", es: "Ocasiones especiales" }, s: { it: "Reunion e ritrovi a due passi dall'aeroporto.", en: "Reunions and gatherings a step from the airport.", es: "Reuniones y encuentros a dos pasos del aeropuerto." } },
      ]
    : [
        { Icon: Users, img: "/images/luoghi/famiglia.jpg", t: { it: "Famiglie", en: "Families", es: "Familias" }, s: { it: "Spaziosa e comoda per una vacanza in famiglia.", en: "Spacious and comfortable for a relaxing family holiday.", es: "Espacioso y cómodo para unas vacaciones en familia." } },
        { Icon: Heart, img: "/images/luoghi/coppia.jpg", t: { it: "Coppie", en: "Couples", es: "Parejas" }, s: { it: "Un rifugio accogliente vicino al mare e alla magia di Roma.", en: "A cosy retreat close to the sea and the magic of Rome.", es: "Un refugio acogedor cerca del mar y de la magia de Roma." } },
        { Icon: Sparkles, img: "/images/luoghi/amici.jpg", t: { it: "Amici", en: "Friends", es: "Amigos" }, s: { it: "Ottimo spazio per esplorare, rilassarsi e stare insieme.", en: "Great space to explore, relax and enjoy time together.", es: "Un espacio ideal para explorar, relajarse y disfrutar juntos." } },
        { Icon: Plane, img: "/images/luoghi/scali.jpg", t: { it: "Scali aeroporto", en: "Airport stopovers", es: "Escalas en el aeropuerto" }, s: { it: "Ideale per soggiorni brevi prima o dopo il volo.", en: "Ideal for short stays before or after your flight.", es: "Ideal para estancias cortas antes o después del vuelo." } },
      ];
  const rules: { Icon: typeof Clock; t: B; s: B }[] = [
    { Icon: Clock, t: { it: "Check-in", en: "Check-in", es: "Check-in" }, s: { it: "dalle 15:00 a mezzanotte", en: "from 15:00 to midnight", es: "de 15:00 a medianoche" } },
    { Icon: LogOut, t: { it: "Check-out", en: "Check-out", es: "Check-out" }, s: { it: "entro le 11:00", en: "by 11:00", es: "antes de las 11:00" } },
    { Icon: CigaretteOff, t: { it: "Non fumatori", en: "Non-smoking", es: "No fumadores" }, s: { it: "all'interno", en: "inside", es: "en el interior" } },
    { Icon: PawPrint, t: { it: "Niente animali", en: "No pets", es: "No se admiten mascotas" }, s: { it: "", en: "", es: "" } },
    { Icon: PartyPopper, t: { it: "Niente feste", en: "No parties", es: "No se permiten fiestas" }, s: { it: "o eventi", en: "or events", es: "ni eventos" } },
    { Icon: Users, t: { it: "Bambini", en: "Children", es: "Niños" }, s: { it: "di tutte le età", en: "all ages welcome", es: "de todas las edades" } },
    { Icon: MoonStar, t: { it: "Silenzio", en: "Quiet time", es: "Horas de silencio" }, s: { it: "23:00 – 07:00", en: "23:00 – 07:00", es: "23:00 – 07:00" } },
  ];

  // "Cosa amerai" — punti forti curati per appartamento
  const highlightsBySlug: Record<string, { Icon: typeof HomeIcon; t: B; s: B }[]> = {
    miri: [
      { Icon: CookingPot, t: { it: "Una vera cucina in legno", en: "A real wooden kitchen", es: "Una auténtica cocina de madera" }, s: { it: "Forno, piano cottura, frigo e tutto per cucinare in autonomia, con tavolo da pranzo.", en: "Oven, hob, fridge and everything to cook on your own, with a dining table.", es: "Horno, placa, nevera y todo lo necesario para cocinar por tu cuenta, con mesa de comedor." } },
      { Icon: BedDouble, t: { it: "Due camere matrimoniali", en: "Two double bedrooms", es: "Dos habitaciones dobles" }, s: { it: "Spazio comodo fino a 6 ospiti, con biancheria di qualità e armadi.", en: "Comfortable space for up to 6 guests, with quality linens and wardrobes.", es: "Espacio cómodo para hasta 6 huéspedes, con ropa de cama de calidad y armarios." } },
      { Icon: DoorOpen, t: { it: "Piano terra, senza scale", en: "Ground floor, no stairs", es: "Planta baja, sin escaleras" }, s: { it: "Ingresso comodo con bagagli, passeggini o per chi preferisce evitare le scale.", en: "Easy entrance with luggage, strollers or for anyone avoiding stairs.", es: "Entrada cómoda con equipaje, cochecitos o para quien prefiere evitar las escaleras." } },
      { Icon: Leaf, t: { it: "Giardino e parcheggio", en: "Garden & parking", es: "Jardín y aparcamiento" }, s: { it: "Accesso al giardino privato condiviso con terrazza colazione e parcheggio gratuito.", en: "Access to the shared private garden with breakfast terrace and free parking.", es: "Acceso al jardín privado compartido con terraza para el desayuno y aparcamiento gratuito." } },
    ],
    ale: [
      { Icon: Sun, t: { it: "Mansarda luminosa", en: "Bright attic", es: "Buhardilla luminosa" }, s: { it: "Soffitti spioventi e lucernari che riempiono gli ambienti di luce naturale.", en: "Sloped ceilings and skylights that fill the rooms with natural light.", es: "Techos inclinados y tragaluces que llenan los ambientes de luz natural." } },
      { Icon: ShowerHead, t: { it: "Bagno moderno in marmo", en: "Modern marble bathroom", es: "Baño moderno en mármol" }, s: { it: "Doccia e finiture eleganti per un soggiorno curato nei dettagli.", en: "Shower and elegant finishes for a stay with attention to detail.", es: "Ducha y acabados elegantes para una estancia cuidada en los detalles." } },
      { Icon: CookingPot, t: { it: "Cucina attrezzata", en: "Equipped kitchen", es: "Cocina equipada" }, s: { it: "Angolo cottura completo con tavolo da pranzo: cucini quando vuoi.", en: "Fully equipped kitchen with dining table: cook whenever you like.", es: "Rincón de cocina completo con mesa de comedor: cocina cuando quieras." } },
      { Icon: Heart, t: { it: "Raccolta e tranquilla", en: "Cosy and quiet", es: "Recogida y tranquila" }, s: { it: "Perfetta per coppie e piccole famiglie, vicino al mare e a Roma.", en: "Perfect for couples and small families, close to the sea and Rome.", es: "Perfecta para parejas y familias pequeñas, cerca del mar y de Roma." } },
    ],
    casa: [
      { Icon: HomeIcon, t: { it: "Due appartamenti, una casa", en: "Two apartments, one house", es: "Dos apartamentos, una casa" }, s: { it: "Miri e Ale insieme: indipendenti ma uniti dallo stesso giardino.", en: "Miri and Ale together: independent but joined by the same garden.", es: "Miri y Ale juntos: independientes pero unidos por el mismo jardín." } },
      { Icon: BedDouble, t: { it: "4 camere, 2 bagni", en: "4 bedrooms, 2 bathrooms", es: "4 habitaciones, 2 baños" }, s: { it: "Spazio e privacy fino a 10 ospiti, ideale per gruppi e famiglie numerose.", en: "Space and privacy for up to 10 guests, ideal for groups and large families.", es: "Espacio y privacidad para hasta 10 huéspedes, ideal para grupos y familias numerosas." } },
      { Icon: CookingPot, t: { it: "Due cucine indipendenti", en: "Two independent kitchens", es: "Dos cocinas independientes" }, s: { it: "Una per appartamento: organizzazione facile anche in tanti.", en: "One per apartment: easy organisation even in large groups.", es: "Una por apartamento: organización fácil incluso siendo muchos." } },
      { Icon: Leaf, t: { it: "Giardino privato condiviso", en: "Shared private garden", es: "Jardín privado compartido" }, s: { it: "Terrazza per la colazione, sedute all'aperto e parcheggio gratuito.", en: "Breakfast terrace, outdoor seating and free parking.", es: "Terraza para el desayuno, asientos al aire libre y aparcamiento gratuito." } },
    ],
  };
  const highlights = highlightsBySlug[apt.slug] ?? highlightsBySlug.miri;

  // dotazioni (con icone) per ogni stanza, in ordine con apt.stanze
  const dotazioniBySlug: Record<string, Dotaz[][]> = {
    miri: [
      [{ icon: "bed", t: { it: "Letto matrimoniale", en: "Double bed", es: "Cama de matrimonio" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe", es: "Armario" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning", es: "Aire acondicionado" } }, { icon: "tv", t: { it: "TV", en: "TV", es: "TV" } }],
      [{ icon: "bed", t: { it: "Due letti singoli", en: "Two single beds", es: "Dos camas individuales" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe", es: "Armario" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning", es: "Aire acondicionado" } }],
      [{ icon: "shower", t: { it: "Doccia", en: "Shower", es: "Ducha" } }, { icon: "sink", t: { it: "Lavabo e WC", en: "Sink & WC", es: "Lavabo y WC" } }, { icon: "hairdryer", t: { it: "Phon", en: "Hairdryer", es: "Secador de pelo" } }],
      [{ icon: "kitchen", t: { it: "Cucina attrezzata", en: "Equipped kitchen", es: "Cocina equipada" } }, { icon: "sofa", t: { it: "Divano e TV", en: "Sofa & TV", es: "Sofá y TV" } }, { icon: "table", t: { it: "Tavolo da pranzo", en: "Dining table", es: "Mesa de comedor" } }],
      [{ icon: "garden", t: { it: "Giardino condiviso", en: "Shared garden", es: "Jardín compartido" } }, { icon: "table", t: { it: "Terrazza colazione", en: "Breakfast terrace", es: "Terraza para el desayuno" } }, { icon: "parking", t: { it: "Parcheggio", en: "Parking", es: "Aparcamiento" } }],
    ],
    ale: [
      [{ icon: "bed", t: { it: "Letto matrimoniale", en: "Double bed", es: "Cama de matrimonio" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe", es: "Armario" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning", es: "Aire acondicionado" } }, { icon: "skylight", t: { it: "Mansardata", en: "Attic", es: "Abuhardillada" } }],
      [{ icon: "bed", t: { it: "Letto matrimoniale", en: "Double bed", es: "Cama de matrimonio" } }, { icon: "wardrobe", t: { it: "Armadio", en: "Wardrobe", es: "Armario" } }, { icon: "ac", t: { it: "Aria condizionata", en: "Air conditioning", es: "Aire acondicionado" } }, { icon: "skylight", t: { it: "Lucernario", en: "Skylight", es: "Tragaluz" } }],
      [{ icon: "shower", t: { it: "Doccia in marmo", en: "Marble shower", es: "Ducha de mármol" } }, { icon: "sink", t: { it: "Lavabo e WC", en: "Sink & WC", es: "Lavabo y WC" } }, { icon: "hairdryer", t: { it: "Phon", en: "Hairdryer", es: "Secador de pelo" } }],
      [{ icon: "kitchen", t: { it: "Cucina attrezzata", en: "Equipped kitchen", es: "Cocina equipada" } }, { icon: "fridge", t: { it: "Frigorifero", en: "Fridge", es: "Nevera" } }, { icon: "table", t: { it: "Tavolo da pranzo", en: "Dining table", es: "Mesa de comedor" } }],
      [{ icon: "garden", t: { it: "Giardino condiviso", en: "Shared garden", es: "Jardín compartido" } }, { icon: "table", t: { it: "Terrazza colazione", en: "Breakfast terrace", es: "Terraza para el desayuno" } }, { icon: "parking", t: { it: "Parcheggio", en: "Parking", es: "Aparcamiento" } }],
    ],
    casa: [
      [{ icon: "bed", t: { it: "2 matrimoniali", en: "2 double beds", es: "2 camas de matrimonio" } }, { icon: "kitchen", t: { it: "Cucina in legno", en: "Wooden kitchen", es: "Cocina de madera" } }, { icon: "shower", t: { it: "Bagno con doccia", en: "Bathroom w/ shower", es: "Baño con ducha" } }],
      [{ icon: "bed", t: { it: "2 matrimoniali", en: "2 double beds", es: "2 camas de matrimonio" } }, { icon: "kitchen", t: { it: "Cucina attrezzata", en: "Equipped kitchen", es: "Cocina equipada" } }, { icon: "shower", t: { it: "Bagno in marmo", en: "Marble bathroom", es: "Baño de mármol" } }],
      [{ icon: "garden", t: { it: "Giardino privato", en: "Private garden", es: "Jardín privado" } }, { icon: "table", t: { it: "Terrazza colazione", en: "Breakfast terrace", es: "Terraza para el desayuno" } }, { icon: "parking", t: { it: "Parcheggio gratuito", en: "Free parking", es: "Aparcamiento gratuito" } }],
    ],
  };
  const roomDotazioni = dotazioniBySlug[apt.slug] ?? dotazioniBySlug.miri;

  // "Esplora la zona" — città e luoghi vicini con cosa vedere
  const exploreCities: { img: string; t: B; time: B; s: B }[] = [
    { img: "/images/luoghi/roma.jpg", t: { it: "Roma", en: "Rome", es: "Roma" }, time: { it: "~32 min in treno", en: "~32 min by train", es: "~32 min en tren" }, s: { it: "Colosseo, Vaticano, Fontana di Trevi e Trastevere: la Città Eterna in giornata, senza auto.", en: "Colosseum, Vatican, Trevi Fountain and Trastevere: the Eternal City in a day, no car needed.", es: "Coliseo, Vaticano, Fontana di Trevi y Trastevere: la Ciudad Eterna en un día, sin coche." } },
    { img: "/images/luoghi/ostia.jpg", t: { it: "Ostia Antica", en: "Ostia Antica", es: "Ostia Antica" }, time: { it: "~4 km in auto", en: "~4 km by car", es: "~4 km en coche" }, s: { it: "Uno dei siti archeologici meglio conservati: teatro romano, terme e mosaici.", en: "One of the best preserved archaeological sites: Roman theatre, baths and mosaics.", es: "Uno de los sitios arqueológicos mejor conservados: teatro romano, termas y mosaicos." } },
    { img: "/images/luoghi/beach.jpg", t: { it: "Spiagge e lungomare", en: "Beaches & seafront", es: "Playas y paseo marítimo" }, time: { it: "~10 min in auto", en: "~10 min by car", es: "~10 min en coche" }, s: { it: "Focene, Fregene e Ostia: stabilimenti, passeggiate e tramonti sul mare.", en: "Focene, Fregene and Ostia: beach clubs, walks and sunsets by the sea.", es: "Focene, Fregene y Ostia: chiringuitos, paseos y atardeceres junto al mar." } },
    { img: "/images/luoghi/pesce.jpg", t: { it: "Porto di Fiumicino", en: "Fiumicino Port", es: "Puerto de Fiumicino" }, time: { it: "~8 min in auto", en: "~8 min by car", es: "~8 min en coche" }, s: { it: "Ristoranti di pesce, il faro e la passeggiata lungo il porto-canale.", en: "Seafood restaurants, the lighthouse and a walk along the canal-port.", es: "Restaurantes de pescado, el faro y el paseo a lo largo del puerto-canal." } },
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
          <div className="order-2 flex flex-col md:order-1">
            <p className={eyebrow}>{tr(lang, { it: "Benvenuti a MiriAle Holiday House", en: "Welcome to MiriAle Holiday House", es: "Bienvenidos a MiriAle Holiday House" })}</p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-deep-brown md:text-5xl">
              {apt.titolo ? t(apt.titolo) : tr(lang, { it: `Appartamento ${apt.nome}`, en: `${apt.nome} Apartment`, es: `Apartamento ${apt.nome}` })}
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
          <div className="order-1 flex flex-col gap-2.5 md:order-2">
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
                <ImageIcon className="h-4 w-4 text-terracotta" /> {tr(lang, { it: "Vedi tutto", en: "View all", es: "Ver todo" })}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== SPECS BAR ===================== */}
      <section className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/luoghi/teal-water.jpg')" }}>
        <div className="absolute inset-0 bg-paper/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-8">
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
      <section className="relative overflow-hidden bg-cover bg-center pb-12" style={{ backgroundImage: "url('/images/luoghi/teal-water.jpg')" }}>
        <div className="absolute inset-0 bg-paper/30" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.4fr_1fr]">
          {/* booking */}
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
            <h3 className="font-serif text-lg font-semibold text-deep-brown">{tr(lang, { it: "Verifica disponibilità e scrivi a Fabio", en: "Check availability & message Fabio", es: "Comprueba la disponibilidad y escribe a Fabio" })}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <label className="block"><span className="text-xs font-medium text-warm-gray">Check-in</span><input type="date" value={ci} onChange={(e) => setCi(e.target.value)} className={campo} /></label>
              <label className="block"><span className="text-xs font-medium text-warm-gray">Check-out</span><input type="date" value={co} min={ci || undefined} onChange={(e) => setCo(e.target.value)} className={campo} /></label>
              <label className="block"><span className="text-xs font-medium text-warm-gray">{tr(lang, { it: "Ospiti", en: "Guests", es: "Huéspedes" })}</span>
                <select value={g} onChange={(e) => setG(Number(e.target.value))} className={campo}>{Array.from({ length: apt.ospiti }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? tr(lang, { it: "ospite", en: "guest", es: "huésped" }) : tr(lang, { it: "ospiti", en: "guests", es: "huéspedes" })}</option>)}</select>
              </label>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
                <I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivi su WhatsApp", en: "Message on WhatsApp", es: "Escribe por WhatsApp" })}
              </a>
              <span className="text-xs text-warm-gray">{tr(lang, { it: "Risposta rapida da Fabio", en: "Quick reply from Fabio", es: "Respuesta rápida de Fabio" })}</span>
            </div>
            <p className="mt-3 text-center text-xs text-warm-gray">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-terracotta" />
              {tr(lang, { it: "Prenotazione diretta · nessun pagamento online · paghi al check-in", en: "Direct booking · no online payment · pay at check-in", es: "Reserva directa · sin pago online · pagas en el check-in" })}
            </p>
          </div>

          {/* host */}
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Ph label={tr(lang, { it: "Foto Fabio", en: "Fabio photo", es: "Foto de Fabio" })} className="h-16 w-16 flex-shrink-0 rounded-full" />
              <div>
                <p className="font-script text-xl leading-none text-terracotta">{tr(lang, { it: "Ti ospita", en: "Hosted by", es: "Te recibe" })}</p>
                <p className="mt-0.5 font-serif text-xl font-semibold text-deep-brown">Fabio</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {hostBullets.map((b) => (
                <li key={b.t.en} className="flex items-center gap-2 text-sm text-deep-brown"><b.Icon className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(b.t)}</li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 border-t border-line-soft pt-3 text-xs text-warm-gray"><Users className="h-4 w-4 text-terracotta" /> {tr(lang, { it: "Parliamo italiano, inglese e spagnolo", en: "We speak Italian, English and Spanish", es: "Hablamos italiano, inglés y español" })}</p>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <Section bg="paper" id="about">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <div>
            <p className={eyebrow}>{isCasa ? tr(lang, { it: "La casa intera", en: "About the whole house", es: "La casa entera" }) : tr(lang, { it: `L'appartamento ${apt.nome}`, en: `About ${apt.nome} Apartment`, es: `El apartamento ${apt.nome}` })}</p>
            <h2 className={h2}>{tr(lang, { it: "Luminoso, accogliente e confortevole", en: "Bright, warm and comfortable", es: "Luminoso, acogedor y confortable" })}</h2>
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
            <p className={eyebrow}>{tr(lang, { it: "Cosa amerai", en: "What you'll love", es: "Lo que te encantará" })}</p>
            <h2 className={h2}>{tr(lang, { it: "Pensato per un soggiorno senza pensieri", en: "Designed for a carefree stay", es: "Pensado para una estancia sin preocupaciones" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{tr(lang, { it: "Pochi punti che fanno la differenza: spazi comodi, dotazioni vere e una posizione che ti fa risparmiare tempo, tra aeroporto, mare e Roma.", en: "A few things that make the difference: comfortable spaces, real amenities and a location that saves you time, between the airport, the sea and Rome.", es: "Pocos detalles que marcan la diferencia: espacios cómodos, equipamiento de verdad y una ubicación que te hace ganar tiempo, entre el aeropuerto, el mar y Roma." })}</p>
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
        <p className={eyebrow}>{tr(lang, { it: "Ambienti e layout", en: "What & layout", es: "Ambientes y distribución" })}</p>
        <h2 className={h2}>{tr(lang, { it: "Ogni ambiente, nel dettaglio", en: "Every room in detail", es: "Cada ambiente, en detalle" })}</h2>
        <div className={`mt-6 ${cardRail} md:grid-cols-2`}>
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
        <p className={eyebrow}>{tr(lang, { it: "Servizi", en: "Amenities", es: "Servicios" })}</p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((a) => (
            <div key={a.t.en} className="flex items-center gap-2.5 text-sm text-deep-brown"><a.Icon className="h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.5} /> {t(a.t)}</div>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 rounded-xl bg-paper px-4 py-3 text-sm text-warm-gray"><Leaf className="h-4 w-4 flex-shrink-0 text-terracotta" /> {tr(lang, { it: "Accesso al giardino privato in comune con terrazza per la colazione.", en: "Access to the shared private garden with breakfast terrace.", es: "Acceso al jardín privado compartido con terraza para el desayuno." })}</p>
      </Section>

      {/* ===================== REVIEWS ===================== */}
      <Section bg="paper" id="reviews">
        <p className={eyebrow}>{tr(lang, { it: "Recensioni degli ospiti", en: "Guest reviews", es: "Reseñas de los huéspedes" })}</p>
        <div className="mt-1 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <div>
            <h2 className={h2}>{tr(lang, { it: "Amati dagli ospiti", en: "Loved by our guests", es: "Adorados por nuestros huéspedes" })}</h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-serif text-4xl font-bold text-deep-brown">8.8<span className="text-xl font-semibold text-warm-gray">/10</span></span>
              <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            </div>
            <p className="mt-1 text-sm text-warm-gray">{tr(lang, { it: "da 129 recensioni", en: "from 129 reviews", es: "de 129 reseñas" })}</p>
            <p className="mt-5 text-sm font-semibold text-deep-brown">{tr(lang, { it: "Punteggi per categoria", en: "Category ratings", es: "Puntuaciones por categoría" })}</p>
            <ul className="mt-2 space-y-1.5">
              {praised.map((p) => (
                <li key={p.t.en} className="flex items-center justify-between gap-3 border-b border-line-soft pb-1 text-sm">
                  <span className="text-warm-gray">{t(p.t)}</span>
                  <span className="font-semibold text-deep-brown">{p.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ReviewsGridCarousel reviews={REVIEWS} perPage={4} maxPages={3} />
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href="/recensioni" className="inline-flex items-center gap-2 rounded-full border border-terracotta px-5 py-2.5 text-sm font-semibold text-terracotta transition hover:bg-terracotta hover:text-white">
                {tr(lang, { it: "Leggi tutte le 129 recensioni", en: "Read all 129 reviews", es: "Lee las 129 reseñas" })} <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-warm-gray">{tr(lang, { it: "Recensioni reali verificate da Booking.com", en: "Genuine reviews verified by Booking.com", es: "Reseñas reales verificadas por Booking.com" })}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== MEET YOUR HOST ===================== */}
      <Section bg="cream">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1.1fr_0.8fr] lg:gap-8">
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl">
            <Ph label={tr(lang, { it: "Foto della famiglia di Fabio", en: "Photo of Fabio's family", es: "Foto de la familia de Fabio" })} className="absolute inset-0" />
          </div>
          <div className="flex flex-col justify-center">
            <p className={eyebrow}>{tr(lang, { it: "Conosci l'host", en: "Meet your host", es: "Conoce a tu anfitrión" })}</p>
            <h2 className={h2}>{tr(lang, { it: "Ciao, sono Fabio", en: "Hi, I'm Fabio", es: "Hola, soy Fabio" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{tr(lang, { it: "Vivo qui a Fiumicino con la mia famiglia e amiamo accogliere ospiti da tutto il mondo. Faremo di tutto perché il vostro soggiorno sia facile, comodo e pieno di consigli locali!", en: "I live here in Fiumicino with my family and we love welcoming guests from all over the world. We'll make sure your stay is easy, comfortable and full of local tips!", es: "Vivo aquí en Fiumicino con mi familia y nos encanta recibir huéspedes de todo el mundo. Haremos todo lo posible para que vuestra estancia sea fácil, cómoda y llena de consejos locales." })}</p>
            <ul className="mt-4 space-y-2">
              {hostBullets2.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-deep-brown"><b.Icon className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(b.t)}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-terracotta/20 bg-cream-2 p-6 text-center">
            <p className="font-script text-xl leading-snug text-deep-brown">{tr(lang, { it: "“Trattiamo i nostri ospiti come vorremmo essere trattati noi.”", en: "“We treat our guests the way we'd like to be treated.”", es: "“Tratamos a nuestros huéspedes como nos gustaría que nos trataran a nosotros.”" })}</p>
            <p className="mt-4 font-script text-lg text-terracotta">{tr(lang, { it: "A presto!", en: "See you soon!", es: "¡Hasta pronto!" })}</p>
            <p className="mt-1 inline-flex items-center justify-center gap-1.5 font-serif text-sm font-semibold text-deep-brown">Fabio <Heart className="h-3.5 w-3.5 fill-terracotta text-terracotta" /></p>
          </div>
        </div>
      </Section>

      {/* ===================== LOCATION ===================== */}
      <Section bg="paper" id="location">
        <p className={eyebrow}>{tr(lang, { it: "Posizione e dintorni utili", en: "Location & local essentials", es: "Ubicación y servicios cercanos" })}</p>
        <h2 className={h2}>{tr(lang, { it: "Tutto l'essenziale a portata di mano", en: "Everything you need nearby", es: "Todo lo esencial al alcance de la mano" })}</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="flex flex-col gap-3">
            <iframe src={MAPS_EMBED} className="h-[300px] w-full rounded-2xl border-0" loading="lazy" title="Map" />
            <a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-terracotta hover:underline">{tr(lang, { it: "Apri su Google Maps →", en: "Open in Google Maps →", es: "Abrir en Google Maps →" })}</a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {localPoints.map((c) => (
              <div key={c.t.en} className="rounded-xl border border-line bg-paper p-4">
                <div className="flex items-center gap-2">
                  <c.Icon className="h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
                  <span className="font-semibold text-deep-brown">{t(c.t)}</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {c.rows.map((r) => (
                    <li key={r.p.en} className="flex items-baseline justify-between gap-3 text-xs">
                      <span className="text-warm-gray">{t(r.p)}</span>
                      <span className="flex-shrink-0 font-medium text-deep-brown">{t(r.d)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== EXPLORE THE AREA ===================== */}
      <Section bg="cream">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Esplora la zona", en: "Explore the area", es: "Explora la zona" })}</p>
            <h2 className={h2}>{tr(lang, { it: "Cosa c'è intorno a te", en: "What's around you", es: "Qué hay a tu alrededor" })}</h2>
          </div>
          <Link href="/cosa-fare-intorno" className="inline-flex items-center gap-2 rounded-full border border-terracotta px-5 py-2.5 text-sm font-semibold text-terracotta transition hover:bg-terracotta hover:text-white">
            {tr(lang, { it: "Scopri tutte le esperienze", en: "Discover all experiences", es: "Descubre todas las experiencias" })} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className={`mt-6 ${cardRail} sm:grid-cols-2 lg:grid-cols-4`}>
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
        <p className={eyebrow}>{tr(lang, { it: "Per chi è perfetto", en: "Who it's perfect for", es: "Para quién es perfecto" })}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {whoFor.map((w) => (
            <article key={w.t.en} className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
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
        <p className={eyebrow}>{tr(lang, { it: "Regole della casa e info pratiche", en: "House rules & practical info", es: "Normas de la casa e información práctica" })}</p>
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
        title={tr(lang, { it: `Appartamento ${apt.nome}`, en: `${apt.nome} apartment`, es: `Apartamento ${apt.nome}` })}
      />
    </main>
  );
}

function Section({ bg, id, children }: { bg: "paper" | "cream" | "teal"; id?: string; children: React.ReactNode }) {
  const isTeal = bg === "teal";
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-12 md:py-14 ${isTeal ? "bg-cover bg-center" : bg === "cream" ? "bg-cream" : "bg-paper"}`}
      style={isTeal ? { backgroundImage: "url('/images/luoghi/teal-water.jpg')" } : undefined}
    >
      {isTeal ? <div className="absolute inset-0 bg-paper/30" /> : null}
      <Reveal className="relative z-10 mx-auto max-w-7xl px-6">{children}</Reveal>
    </section>
  );
}
