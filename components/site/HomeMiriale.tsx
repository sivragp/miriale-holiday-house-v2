"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Building2,
  CalendarCheck,
  CalendarX,
  Car,
  Check,
  CigaretteOff,
  Coffee,
  CookingPot,
  Fan,
  Fish,
  GraduationCap,
  Heart,
  Home as HomeIcon,
  Image as ImageIcon,
  Landmark,
  Leaf,
  Luggage,
  MoonStar,
  PartyPopper,
  PawPrint,
  Plane,
  ShieldCheck,
  SquareParking,
  Star,
  Train,
  Tv,
  UserCheck,
  Users,
  Waves,
  WashingMachine,
  Wifi,
  Wind,
} from "lucide-react";
import { I, MAPS_EMBED, waLink } from "@/lib/site";
import CardCarousel from "@/components/site/CardCarousel";
import ReviewsGridCarousel from "@/components/site/ReviewsGridCarousel";
import Reveal from "@/components/site/Reveal";
import { useLang, tr } from "@/components/site/LangProvider";
import { APPARTAMENTI, type B } from "@/lib/apartments";
import { REVIEWS } from "@/lib/reviews";

function Ph({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-cream-2 to-cream text-warm-gray ${className}`}>
      <ImageIcon className="h-6 w-6 opacity-60" strokeWidth={1.4} />
      <span className="px-2 text-center text-[10px] uppercase tracking-wide opacity-70">{label}</span>
    </div>
  );
}
function Wave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 8" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 5 q 7 -6 14 0 t 14 0 t 14 0 t 14 0" />
    </svg>
  );
}

export default function HomeMiriale() {
  const { lang } = useLang();
  const t = (b: B) => tr(lang, b);
  const eyebrow = "font-script text-2xl leading-none text-terracotta";
  const sectionTitle = "font-serif text-2xl font-bold text-deep-brown md:text-3xl";

  const miri = APPARTAMENTI.find((a) => a.slug === "miri")!;
  const ale = APPARTAMENTI.find((a) => a.slug === "ale")!;
  const casa = APPARTAMENTI.find((a) => a.slug === "casa")!;

  // Su mobile il carosello "Scegli il tuo soggiorno" parte centrato sulla card di mezzo (Ale).
  const staysRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = staysRef.current;
    if (!el || window.matchMedia("(min-width: 640px)").matches) return;
    const mid = el.children[1] as HTMLElement | undefined;
    if (mid) el.scrollLeft = mid.offsetLeft - (el.clientWidth - mid.clientWidth) / 2;
  }, []);

  const stats: { Icon: typeof Plane; a: B; b: B }[] = [
    { Icon: Plane, a: { it: "10 min", en: "10 min" }, b: { it: "dall'aeroporto FCO", en: "to FCO Airport" } },
    { Icon: HomeIcon, a: { it: "2", en: "2" }, b: { it: "appartamenti", en: "apartments" } },
    { Icon: Users, a: { it: "Fino a 10", en: "Up to 10" }, b: { it: "ospiti", en: "guests" } },
    { Icon: SquareParking, a: { it: "Gratis", en: "Free" }, b: { it: "parcheggio", en: "parking" } },
    { Icon: Leaf, a: { it: "Privato", en: "Private" }, b: { it: "giardino", en: "garden" } },
    { Icon: Star, a: { it: "8.8/10", en: "8.8/10" }, b: { it: "da 129 recensioni", en: "From 129 reviews" } },
  ];

  const stays: { apt: typeof miri; img: string; tab: B; tabColor: string; titolo: B; descr: B; best: B; href: string }[] = [
    { apt: miri, img: "/images/house/house-10.jpg", tab: { it: "Appartamento Miri", en: "Miri apartment" }, tabColor: "#0fa9b8", titolo: { it: "Spazioso e accogliente", en: "Spacious & warm" }, descr: { it: "Appartamento al piano terra con cucina in legno e soggiorno, due camere matrimoniali e spazi comodi per un soggiorno rilassante.", en: "Ground-floor apartment with wooden kitchen living room, two double bedrooms and comfortable spaces for a relaxing stay." }, best: { it: "Ideale per famiglie, coppie e amici fino a 6", en: "Best for families, couples and friends up to 6" }, href: "/miri" },
    { apt: ale, img: "/images/house/house-09.jpg", tab: { it: "Appartamento Ale", en: "Ale apartment" }, tabColor: "#1e88b5", titolo: { it: "Mansarda luminosa", en: "Bright attic loft" }, descr: { it: "Mansarda all'ultimo piano con soffitti spioventi, bagno moderno in marmo e cucina completamente attrezzata.", en: "Top-floor attic/loft with sloped ceilings, modern marble bathroom and fully equipped kitchen." }, best: { it: "Ideale per coppie, piccole famiglie e soggiorni di lavoro", en: "Best for couples, small families and business stays" }, href: "/ale" },
    { apt: casa, img: "/images/house/house-22.jpg", tab: { it: "Casa intera", en: "Whole house" }, tabColor: "#0f3d4a", titolo: { it: "Insieme, tutti", en: "Stay together" }, descr: { it: "Prenota entrambi gli appartamenti e goditi tutta la casa: 4 camere, 2 cucine e il giardino privato.", en: "Book both apartments and enjoy the whole house: 4 bedrooms, 2 kitchens and the private garden." }, best: { it: "Ideale per gruppi e famiglie fino a 10 ospiti", en: "Best for groups and families up to 10 guests" }, href: "/la-casa" },
  ];

  const gardenChecks: B[] = [
    { it: "Giardino privato a tuo uso esclusivo", en: "Private garden for your exclusive use" },
    { it: "Terrazza per la colazione e sedute all'aperto", en: "Breakfast terrace and outdoor seating" },
    { it: "Verde, tranquillo e perfetto per rilassarsi", en: "Green, quiet and perfect to unwind" },
    { it: "Parcheggio gratuito in loco, dentro la proprietà", en: "On-site free parking inside the property" },
  ];

  const praised: { t: B; v: string }[] = [
    { t: { it: "Personale", en: "Staff" }, v: "9.4" },
    { t: { it: "Pulizia", en: "Cleanliness" }, v: "9.3" },
    { t: { it: "Comfort", en: "Comfort" }, v: "8.7" },
    { t: { it: "Servizi", en: "Facilities" }, v: "8.7" },
    { t: { it: "Qualità-prezzo", en: "Value" }, v: "8.7" },
    { t: { it: "Posizione", en: "Location" }, v: "8.5" },
  ];

  const hostChecks: { Icon: typeof UserCheck; t: B }[] = [
    { Icon: UserCheck, t: { it: "Check-in di persona e consigli locali", en: "In-person check-in and local tips" } },
    { Icon: Luggage, t: { it: "Aiuto coi bagagli e supporto parcheggio", en: "Luggage help and parking support" } },
    { Icon: Coffee, t: { it: "Caffè al mattino offerto", en: "Complimentary morning coffee" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid service)" } },
    { Icon: Users, t: { it: "Parliamo italiano, inglese e spagnolo", en: "We speak Italian, English and Spanish" } },
  ];

  // Distanze REALI dall'annuncio Booking (sezione "Dintorni della struttura").
  const places: { Icon: typeof Plane; t: B; rows: { p: B; d: B; car?: boolean }[] }[] = [
    { Icon: Plane, t: { it: "Aeroporti", en: "Airports" }, rows: [
      { p: { it: "Aeroporto di Roma Fiumicino (FCO)", en: "Rome Fiumicino Airport (FCO)" }, d: { it: "5 km", en: "5 km" }, car: true },
      { p: { it: "Aeroporto di Roma Ciampino", en: "Rome Ciampino Airport" }, d: { it: "31 km", en: "31 km" }, car: true },
    ] },
    { Icon: Train, t: { it: "Roma e treni", en: "Rome & trains" }, rows: [
      { p: { it: "Bus pubblico (verso FCO e Ostia)", en: "Public bus (to FCO and Ostia)" }, d: { it: "500 m a piedi", en: "500 m walk" } },
      { p: { it: "Treno Lido Nord / Ostia Nord", en: "Lido Nord / Ostia Nord train" }, d: { it: "5 km", en: "5 km" }, car: true },
      { p: { it: "Roma centro (in auto)", en: "Central Rome (by car)" }, d: { it: "~30 km", en: "~30 km" }, car: true },
    ] },
    { Icon: Waves, t: { it: "Spiagge", en: "Beaches" }, rows: [
      { p: { it: "Lungomare della Salute", en: "Lungomare della Salute beach" }, d: { it: "3,9 km", en: "3.9 km" }, car: true },
      { p: { it: "Focene", en: "Focene" }, d: { it: "4,7 km", en: "4.7 km" }, car: true },
      { p: { it: "Ostia Lido", en: "Ostia Lido" }, d: { it: "4,7 km", en: "4.7 km" }, car: true },
      { p: { it: "Castel Fusano", en: "Castel Fusano" }, d: { it: "7 km", en: "7 km" }, car: true },
    ] },
    { Icon: Landmark, t: { it: "Cultura e natura", en: "Culture & nature" }, rows: [
      { p: { it: "Ostia Antica (scavi)", en: "Ostia Antica ruins" }, d: { it: "4,3 km", en: "4.3 km" }, car: true },
      { p: { it: "Bosco Macchia Grande di Focene", en: "Macchia Grande di Focene woods" }, d: { it: "11 km", en: "11 km" }, car: true },
    ] },
    { Icon: Building2, t: { it: "Fiere ed eventi", en: "Fairs & events" }, rows: [
      { p: { it: "Fiera di Roma", en: "Fiera di Roma" }, d: { it: "7 km", en: "7 km" }, car: true },
      { p: { it: "PalaLottomatica", en: "PalaLottomatica" }, d: { it: "22 km", en: "22 km" }, car: true },
      { p: { it: "Metro EUR Fermi", en: "EUR Fermi metro" }, d: { it: "23 km", en: "23 km" }, car: true },
    ] },
    { Icon: Fish, t: { it: "Ristoranti vicini", en: "Nearby restaurants" }, rows: [
      { p: { it: "It Italian Restaurant", en: "It Italian Restaurant" }, d: { it: "700 m", en: "700 m" } },
      { p: { it: "Ristorante Luana", en: "Luana restaurant" }, d: { it: "700 m", en: "700 m" } },
      { p: { it: "Ristorante Docking 9", en: "Docking 9 restaurant" }, d: { it: "1,8 km", en: "1.8 km" }, car: true },
    ] },
  ];

  const whoFor: { Icon: typeof Users; img: string; t: B }[] = [
    { Icon: Landmark, img: "/images/luoghi/roma-vittoriano.jpg", t: { it: "Turisti in visita a Roma e al mare", en: "Tourists visiting Rome and the sea" } },
    { Icon: Plane, img: "/images/luoghi/scali.jpg", t: { it: "Voli presto o tardi e scali", en: "Early or late flights & stopovers" } },
    { Icon: GraduationCap, img: "/images/luoghi/fiera.jpg", t: { it: "Visitatori della Fiera di Roma o esami", en: "Visitors to Fiera di Roma or exams" } },
    { Icon: ShieldCheck, img: "/images/luoghi/guardia-finanza.jpg", t: { it: "Visite ufficiali Guardia di Finanza e famiglie", en: "Guardia di Finanza official visitors and families" } },
    { Icon: Users, img: "/images/luoghi/famiglie.jpg", t: { it: "Famiglie e gruppi fino a 10 ospiti", en: "Families & groups up to 10 guests" } },
  ];

  const comforts: { Icon: typeof Wifi; t: B }[] = [
    { Icon: Wifi, t: { it: "Wi-Fi gratuito", en: "Free Wi-Fi" } },
    { Icon: Wind, t: { it: "Aria condizionata e riscaldamento", en: "Air conditioning & heating" } },
    { Icon: CookingPot, t: { it: "Cucine completamente attrezzate", en: "Fully equipped kitchens" } },
    { Icon: Tv, t: { it: "TV a schermo piatto", en: "Flat-screen TV" } },
    { Icon: WashingMachine, t: { it: "Lavatrice", en: "Washing machine" } },
    { Icon: Coffee, t: { it: "Moka per il caffè", en: "Moka coffee pot" } },
    { Icon: Fan, t: { it: "Phon", en: "Hair dryer" } },
    { Icon: Plane, t: { it: "Navetta aeroporto (a pagamento)", en: "Airport shuttle (paid)" } },
    { Icon: Baby, t: { it: "Culla su richiesta", en: "Baby cot on request" } },
    { Icon: SquareParking, t: { it: "Parcheggio privato gratuito", en: "Free private parking" } },
  ];

  const area: { img: string; t: B; s: B }[] = [
    { img: "/images/luoghi/roma.jpg", t: { it: "Roma", en: "Rome" }, s: { it: "storia, arte e cultura", en: "history, art & culture" } },
    { img: "/images/luoghi/beach.jpg", t: { it: "Vita da spiaggia", en: "Beach life" }, s: { it: "sole, mare e relax", en: "sun, sea & relaxation" } },
    { img: "/images/luoghi/pesce.jpg", t: { it: "Cene di pesce", en: "Seafood dinners" }, s: { it: "fresco e gustoso", en: "fresh & delicious" } },
    { img: "/images/luoghi/ostia.jpg", t: { it: "Ostia Antica", en: "Ostia Antica" }, s: { it: "antica città romana", en: "ancient Roman city" } },
    { img: "/images/luoghi/tramonto.jpg", t: { it: "Tramonto sul mare", en: "Sunset by the sea" }, s: { it: "momenti indimenticabili", en: "unforgettable moments" } },
  ];

  const rules: { Icon: typeof CalendarCheck; t: B; s: B }[] = [
    { Icon: CalendarCheck, t: { it: "Check-in", en: "Check-in" }, s: { it: "dalle 15:00", en: "from 15:00" } },
    { Icon: CalendarX, t: { it: "Check-out", en: "Check-out" }, s: { it: "entro le 11:00", en: "by 11:00" } },
    { Icon: CigaretteOff, t: { it: "Non fumatori", en: "No smoking" }, s: { it: "all'interno", en: "indoors" } },
    { Icon: PartyPopper, t: { it: "Niente feste", en: "No parties" }, s: { it: "o eventi", en: "or events" } },
    { Icon: MoonStar, t: { it: "Silenzio", en: "Quiet time" }, s: { it: "23:00 – 07:00", en: "23:00 – 07:00" } },
    { Icon: PawPrint, t: { it: "Animali", en: "Pets" }, s: { it: "non ammessi", en: "not allowed" } },
  ];

  const goodToKnow: B[] = [
    { it: "Pagamento in loco al check-in (nessun pagamento online)", en: "Payment on arrival at check-in (no online payment)" },
    { it: "Bambini di tutte le età benvenuti · culla su richiesta (€10/soggiorno)", en: "Children of all ages welcome · baby cot on request (€10/stay)" },
    { it: "Documenti d'identità richiesti al check-in", en: "ID documents required at check-in" },
    { it: "Eventuale tassa di soggiorno comunale, da saldare in loco", en: "Any municipal tourist tax payable on site" },
  ];

  return (
    <main className="flex-1">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-paper">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 pt-8 md:gap-8 md:pt-12 md:grid-cols-[1fr_1.15fr]">
          <div className="order-2 md:order-1">
            <p className={eyebrow}>{tr(lang, { it: "Benvenuti a MiriAle Holiday House", en: "Welcome to MiriAle Holiday House" })}</p>
            <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-deep-brown md:text-[2.9rem] lg:text-5xl">
              {lang === "it" ? (
                <>Vicino a FCO, <span className="text-terracotta">Roma</span> e al <span className="text-terracotta">mare</span></>
              ) : (
                <>Stay close to FCO, <span className="text-terracotta">Rome</span> and the <span className="text-terracotta">sea</span></>
              )}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-warm-gray">
              {tr(lang, {
                it: "Casa vacanze a gestione familiare in una zona tranquilla di Fiumicino. Due appartamenti indipendenti o la casa intera, ideali per scali, gite in città e soggiorni in famiglia.",
                en: "Family-run holiday house in a quiet area of Fiumicino. Two independent apartments or the whole house, ideal for stopovers, city trips and family stays.",
              })}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center rounded-full px-6 py-2.5 text-white shadow-sm transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold"><I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp" })}</span>
                <span className="text-[10px] text-white/90">{tr(lang, { it: "Miglior prezzo, nessuna commissione", en: "Best price, no fees" })}</span>
              </a>
              <Link href="#apartments" className="inline-flex items-center gap-2 rounded-full border border-terracotta px-6 py-3 text-sm font-semibold text-terracotta transition hover:bg-terracotta hover:text-white">
                {tr(lang, { it: "Scopri gli appartamenti", en: "Explore the apartments" })}
              </Link>
            </div>
            <p className="mt-4 flex items-start gap-2 text-xs text-warm-gray">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" />
              {tr(lang, { it: "Prenotazione diretta, nessun pagamento online. Paghi al check-in: semplice e sicuro.", en: "Direct booking, no online payment. Pay at check-in. It's simple and safe." })}
            </p>
          </div>

          {/* collage polaroid: foto grande incorniciata + 3 foto piccole inclinate */}
          <div className="relative order-1 md:order-2">
            {/* foto principale con cornice bianca */}
            <div className="relative -rotate-1 rounded-[2rem] bg-white p-3 shadow-card lg:mr-10">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem]">
                <Image src="/images/house/comune-32.jpg" alt="La villa MiriAle Holiday House a Fiumicino" fill priority sizes="(max-width:768px) 100vw, 45vw" className="object-cover" />
              </div>
            </div>
            {/* mobile: piccole foto "a rotaia" centrate sul bordo inferiore (cluster desktop invariato) */}
            <div className="relative z-10 -mt-12 mb-1 flex justify-center gap-4 lg:hidden">
              <div className="w-[26%] -rotate-3 rounded-xl bg-white p-1.5 shadow-lg">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/house/comune-24.jpg" alt="Giardino con ombrellone di MiriAle" fill sizes="100px" className="object-cover" /></div>
              </div>
              <div className="w-[26%] rotate-2 rounded-xl bg-white p-1.5 shadow-lg">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/house/house-19.jpg" alt="Colazione in giardino" fill sizes="100px" className="object-cover" /></div>
              </div>
              <div className="w-[26%] -rotate-2 rounded-xl bg-white p-1.5 shadow-lg">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/base-roma-mare.jpg" alt="Mare vicino a Fiumicino" fill sizes="100px" className="object-cover" /></div>
              </div>
            </div>
            {/* cluster di polaroid sovrapposte */}
            <div className="absolute -right-3 top-4 hidden w-36 lg:block xl:w-44">
              <div className="rotate-3 rounded-xl bg-white p-1.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/house/comune-24.jpg" alt="Giardino con ombrellone di MiriAle" fill sizes="130px" className="object-cover" /></div>
              </div>
              <div className="-mt-3 ml-4 -rotate-3 rounded-xl bg-white p-1.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/house/house-19.jpg" alt="Colazione in giardino" fill sizes="130px" className="object-cover" /></div>
              </div>
              <div className="-mt-3 ml-1 rotate-2 rounded-xl bg-white p-1.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/base-roma-mare.jpg" alt="Mare vicino a Fiumicino" fill sizes="130px" className="object-cover" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* stats integrate nella hero */}
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-8">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-line bg-paper px-6 py-4 shadow-card sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.b.en} className="flex items-center gap-3">
                <s.Icon className="h-6 w-6 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
                <div className="leading-tight"><div className="font-semibold text-deep-brown">{t(s.a)}</div><div className="text-xs text-warm-gray">{t(s.b)}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CHOOSE YOUR STAY ===================== */}
      <section id="apartments" className="relative overflow-hidden bg-cover bg-center py-12 md:py-14" style={{ backgroundImage: "url('/images/luoghi/teal-water.jpg')" }}>
        <div className="absolute inset-0 bg-paper/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="font-script text-2xl leading-none text-white drop-shadow">{tr(lang, { it: "Scegli il tuo soggiorno", en: "Choose your stay" })}</p>
            <h2 className="mt-1 font-serif text-2xl font-bold italic text-white drop-shadow md:text-3xl">{tr(lang, { it: "Due appartamenti, una casa", en: "Two apartments, one house" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div ref={staysRef} className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[8%] pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:min-w-[84%] [&>*]:shrink-0 [&>*]:snap-center sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 sm:[&>*]:min-w-0 lg:grid-cols-3">
            {stays.map((s) => (
              <article key={s.href} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[16/10]">
                  <CardCarousel images={s.apt.cardGallery} />
                  <span className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow" style={{ backgroundColor: s.tabColor }}>{t(s.tab)}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 border-b border-line-soft pb-3 text-xs text-warm-gray">
                    <span className="flex items-center gap-1"><HomeIcon className="h-3.5 w-3.5 text-terracotta" /> {s.apt.mq}</span>
                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-terracotta" /> {s.apt.camere} {tr(lang, { it: "matrimoniali", en: "double bedrooms" })}</span>
                    <span className="flex items-center gap-1"><Waves className="h-3.5 w-3.5 text-terracotta" /> {s.apt.bagni} {tr(lang, { it: s.apt.bagni > 1 ? "bagni" : "bagno", en: s.apt.bagni > 1 ? "bathrooms" : "bathroom" })}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-deep-brown">{t(s.titolo)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">{t(s.descr)}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 pt-2">
                    <p className="flex items-center gap-1.5 text-xs text-warm-gray"><Users className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(s.best)}</p>
                    <Link href={s.href} className="flex-shrink-0 rounded-full border border-terracotta px-4 py-2 text-xs font-semibold text-terracotta transition hover:bg-terracotta hover:text-white">{tr(lang, { it: "Dettagli", en: "View details" })}</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-center text-sm text-warm-gray shadow-sm">
            <Heart className="h-4 w-4 flex-shrink-0 text-terracotta" /> {tr(lang, { it: "L'unico spazio condiviso è il giardino privato con terrazza per la colazione, sedute e parcheggio gratuito.", en: "The only shared area is the private garden with breakfast terrace, seating and free parking." })}
          </p>
        </div>
      </section>

      {/* ===================== GARDEN ===================== */}
      <section className="relative overflow-hidden bg-paper py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-sm">
            <Image src="/images/house/house-29.jpg" alt="Il giardino di MiriAle" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Il tuo spazio all'aperto", en: "Your private outdoor space" })}</p>
            <h2 className={`mt-1 ${sectionTitle}`}>{tr(lang, { it: "Rilassati nel nostro giardino", en: "Relax in our garden" })}</h2>
            <ul className="mt-5 space-y-3">
              {gardenChecks.map((c) => (
                <li key={c.en} className="flex items-start gap-2.5 text-sm text-deep-brown"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" /> {t(c)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== REVIEWS ===================== */}
      <section id="recensioni" className="bg-cream py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            <div>
              <p className={eyebrow}>{tr(lang, { it: "Perché gli ospiti amano", en: "Why guests love" })}</p>
              <h2 className={`mt-1 ${sectionTitle}`}>MiriAle</h2>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-serif text-4xl font-bold text-deep-brown">8.8<span className="text-xl text-warm-gray">/10</span></span>
                <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              </div>
              <p className="mt-1 text-sm text-warm-gray">{tr(lang, { it: "Favoloso · da 129 recensioni", en: "Fabulous · from 129 reviews" })}</p>
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
            <div>
              <ReviewsGridCarousel reviews={REVIEWS} perPage={4} maxPages={3} />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <Link href="/recensioni" className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline">
                  {tr(lang, { it: "Leggi tutte le 129 recensioni →", en: "Read all 129 reviews →" })}
                </Link>
                <span className="text-xs text-warm-gray">{tr(lang, { it: "Recensioni reali verificate da Booking.com", en: "Genuine reviews verified by Booking.com" })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MEET HOST ===================== */}
      <section className="bg-paper py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-6 lg:grid-cols-[1fr_1fr_0.7fr] lg:gap-8">
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl">
            <Ph label={tr(lang, { it: "Foto della famiglia di Fabio", en: "Photo of Fabio's family" })} className="absolute inset-0" />
          </div>
          <div className="flex flex-col justify-center">
            <p className={eyebrow}>{tr(lang, { it: "Conosci il tuo host", en: "Meet your host" })}</p>
            <h2 className={`mt-1 ${sectionTitle}`}>{tr(lang, { it: "Ciao, siamo Fabio e famiglia!", en: "Hi, we're Fabio and family!" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{tr(lang, { it: "Viviamo a Fiumicino e accogliamo personalmente ogni ospite. Siamo sempre disponibili per rendere il tuo soggiorno facile e piacevole.", en: "We live here in Fiumicino and personally welcome every guest. We are always available to make your stay easy and enjoyable." })}</p>
            <ul className="mt-4 space-y-2">
              {hostChecks.map((c) => (
                <li key={c.t.en} className="flex items-center gap-2 text-sm text-deep-brown"><c.Icon className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(c.t)}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-terracotta/20 bg-cream-2 p-6 text-center">
            <p className="font-script text-xl leading-snug text-deep-brown">{tr(lang, { it: "“Trattiamo i nostri ospiti come vorremmo essere trattati noi.”", en: "“We treat our guests the way we'd like to be treated.”" })}</p>
            <p className="mt-3 font-script text-lg text-terracotta">{tr(lang, { it: "A presto!", en: "See you soon!" })}</p>
            <p className="mt-1 inline-flex items-center justify-center gap-1.5 font-serif text-sm font-semibold text-deep-brown">Fabio <Heart className="h-3.5 w-3.5 fill-terracotta text-terracotta" /></p>
          </div>
        </div>
      </section>

      {/* ===================== LOCATION ===================== */}
      <section id="dove-siamo" className="bg-cream py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className={eyebrow}>{tr(lang, { it: "In posizione perfetta", en: "Perfectly located" })}</p>
            <h2 className={`mt-1 ${sectionTitle}`}>{tr(lang, { it: "Vicino a tutto ciò che conta", en: "Close to everything that matters" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <iframe src={MAPS_EMBED} className="h-[300px] w-full rounded-2xl border-0 shadow-sm" loading="lazy" title="Map" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {places.map((x) => (
                <div key={x.t.en} className="rounded-xl border border-line bg-paper p-4">
                  <div className="flex items-center gap-2">
                    <x.Icon className="h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
                    <span className="font-semibold text-deep-brown">{t(x.t)}</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {x.rows.map((r) => (
                      <li key={r.p.en} className="flex items-center justify-between gap-3 text-xs">
                        <span className="text-warm-gray">{t(r.p)}</span>
                        <span className="flex flex-shrink-0 items-center gap-1 font-medium text-deep-brown">
                          {r.car ? <Car className="h-3.5 w-3.5 text-terracotta" strokeWidth={1.7} /> : null}
                          {t(r.d)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center rounded-2xl bg-paper px-6 py-4 text-center text-sm text-warm-gray shadow-sm">
            {[
              { it: "Zona residenziale tranquilla", en: "Quiet residential area" },
              { it: "Aeroporto FCO a 5 km", en: "FCO Airport 5 km away" },
              { it: "Ristoranti a 700 m", en: "Restaurants 700 m away" },
              { it: "Bus pubblico a 500 m", en: "Public bus 500 m away" },
            ].map((item, i) => (
              <span key={item.en} className={`px-4 py-1 ${i > 0 ? "border-l border-line" : ""}`}>{tr(lang, item)}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHO WE'RE PERFECT FOR ===================== */}
      <section className="relative overflow-hidden bg-paper py-12 md:py-14">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className={eyebrow}>{tr(lang, { it: "Ideale per", en: "Ideal for" })}</p>
            <h2 className={`mt-1 ${sectionTitle}`}>{tr(lang, { it: "Per chi siamo perfetti", en: "Who we're perfect for" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {whoFor.map((w) => (
              <article key={w.t.en} className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image src={w.img} alt={t(w.t)} fill sizes="(max-width:1024px) 50vw, 20vw" className="object-cover" />
                  <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-terracotta shadow-sm"><w.Icon className="h-5 w-5" strokeWidth={1.6} /></span>
                </div>
                <div className="p-4 text-center"><p className="text-sm font-semibold leading-snug text-deep-brown">{t(w.t)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMFORTS (AMENITIES) ===================== */}
      <section id="servizi" className="bg-cream py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className={sectionTitle}>{tr(lang, { it: "Tutti i comfort che ti servono", en: "All the comforts you need" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl border border-line bg-paper px-6 py-7 sm:grid-cols-3 lg:grid-cols-5">
            {comforts.map((c) => (
              <div key={c.t.en} className="flex flex-col items-center gap-2 text-center">
                <c.Icon className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
                <span className="text-xs leading-snug text-deep-brown">{t(c.t)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE THE AREA ===================== */}
      <section className="relative overflow-hidden bg-paper py-12 md:py-14">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className={sectionTitle}>{tr(lang, { it: "Vivi il meglio della zona", en: "Experience the best of the area" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {area.map((a) => (
              <article key={a.t.en} className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image src={a.img} alt={t(a.t)} fill sizes="(max-width:1024px) 50vw, 20vw" className="object-cover" />
                </div>
                <div className="p-3"><p className="text-sm font-semibold text-deep-brown">{t(a.t)}</p><p className="text-xs text-warm-gray">{t(a.s)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOUSE RULES + GOOD TO KNOW ===================== */}
      <section id="faq" className="relative overflow-hidden bg-cream py-12 md:py-14">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className={`text-center lg:text-left ${sectionTitle}`}>{tr(lang, { it: "Regole della casa e info pratiche", en: "House rules & practical info" })}</h2>
              <div className="mt-6 grid grid-cols-3 gap-5 rounded-2xl border border-line bg-paper px-5 py-6 sm:grid-cols-6">
                {rules.map((r) => (
                  <div key={r.t.en} className="flex flex-col items-center text-center">
                    <r.Icon className="h-6 w-6 text-terracotta" strokeWidth={1.5} />
                    <div className="mt-2 text-xs font-semibold leading-tight text-deep-brown">{t(r.t)}</div>
                    <div className="text-[11px] text-warm-gray">{t(r.s)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-serif text-lg font-bold text-deep-brown">{tr(lang, { it: "Buono a sapersi", en: "Good to know" })}</h3>
              <ul className="mt-3 space-y-2">
                {goodToKnow.map((g) => (
                  <li key={g.en} className="flex items-start gap-2 text-sm text-warm-gray"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" /> {t(g)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
