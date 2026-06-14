"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Building2,
  Car,
  Check,
  CigaretteOff,
  Clock,
  Coffee,
  Croissant,
  Fish,
  Globe,
  Home as HomeIcon,
  Landmark,
  Leaf,
  LogOut,
  Luggage,
  MapPin,
  MoonStar,
  PartyPopper,
  PawPrint,
  Plane,
  ShieldCheck,
  Star,
  Sun,
  Tv,
  UserCheck,
  Users,
  WashingMachine,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
import { I, MAPS_EMBED, MAPS_SHORT, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";

type Tx = { it: string; en: string };

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
function Hero() {
  const { lang } = useLang();
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-16">
        <div>
          <p className="font-script text-2xl leading-none text-terracotta">
            {tr(lang, { it: "Benvenuti a MiriAle Holiday House", en: "Welcome to MiriAle Holiday House" })}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-deep-brown md:text-5xl">
            {tr(lang, { it: "Vicino a FCO, Roma e il mare", en: "Stay close to FCO, Rome and the sea" })}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-warm-gray">
            {tr(lang, {
              it: "Casa vacanze a conduzione familiare in una zona tranquilla di Fiumicino. Due appartamenti indipendenti o la casa intera: perfetti per scali, città e soggiorni in famiglia.",
              en: "Family-run holiday house in a quiet area of Fiumicino. Two independent apartments or the whole house, ideal for stopovers, city trips and family stays.",
            })}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: "#25d366" }}
            >
              <I.whatsapp className="h-4 w-4" />
              {tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp" })}
            </a>
            <a
              href="#apartments"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-deep-brown transition hover:border-terracotta"
            >
              {tr(lang, { it: "Scopri gli appartamenti", en: "Explore the apartments" })}
            </a>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-warm-gray">
            <ShieldCheck className="h-4 w-4 text-terracotta" />
            {tr(lang, {
              it: "Prenotazione diretta, nessun pagamento online. Paghi al check-in: semplice e sicuro.",
              en: "Direct booking, no online payment. Pay at check-in. It's simple and safe.",
            })}
          </p>
        </div>

        {/* Collage */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src="/images/house/house-10.jpg" alt="Cucina" fill priority sizes="(max-width:768px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src="/images/house/house-06.jpg" alt="Camera" fill sizes="22vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src="/images/base-roma-mare.jpg" alt="Mare" fill sizes="22vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats bar                                                                  */
/* -------------------------------------------------------------------------- */
function StatsBar() {
  const { lang } = useLang();
  const stats: { Icon: typeof Plane; label: Tx; sub: Tx }[] = [
    { Icon: Plane, label: { it: "10 min", en: "10 min" }, sub: { it: "dall'aeroporto FCO", en: "to FCO Airport" } },
    { Icon: HomeIcon, label: { it: "2", en: "2" }, sub: { it: "appartamenti", en: "apartments" } },
    { Icon: Users, label: { it: "Fino a 8", en: "Up to 8" }, sub: { it: "ospiti", en: "guests" } },
    { Icon: Car, label: { it: "Gratis", en: "Free" }, sub: { it: "parcheggio", en: "parking" } },
    { Icon: Leaf, label: { it: "Privato", en: "Private" }, sub: { it: "giardino", en: "garden" } },
    { Icon: Star, label: { it: "8.8/10", en: "8.8/10" }, sub: { it: "122 recensioni", en: "from 122 reviews" } },
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto -mt-2 max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-line bg-paper px-6 py-6 shadow-card sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.sub.en} className="flex items-center gap-3">
              <s.Icon className="h-6 w-6 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
              <div className="leading-tight">
                <div className="font-semibold text-deep-brown">{tr(lang, s.label)}</div>
                <div className="text-xs text-warm-gray">{tr(lang, s.sub)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Apartments                                                                 */
/* -------------------------------------------------------------------------- */
function Apartments() {
  const { lang } = useLang();
  const cards = [
    {
      tag: { it: "Appartamento Miri", en: "Miri Apartment" },
      tagColor: "#0fa9b8",
      img: "/images/house/house-02.jpg",
      specs: { it: "75 m² · 2 camere matrimoniali · 1 bagno", en: "75 m² · 2 double bedrooms · 1 bathroom" },
      title: { it: "Spazioso e accogliente", en: "Spacious & warm" },
      desc: {
        it: "Appartamento al piano terra con soggiorno e cucina in legno, due camere matrimoniali e spazi comodi per un soggiorno rilassante.",
        en: "Ground-floor apartment with wooden kitchen living room, two double bedrooms and comfortable spaces for a relaxing stay.",
      },
      best: { it: "Ideale per famiglie, coppie e amici, fino a 4.", en: "Best for families, couples and friends up to 4." },
      href: "/miri",
    },
    {
      tag: { it: "Appartamento Ale", en: "Ale Apartment" },
      tagColor: "#1e88b5",
      img: "/images/house/house-09.jpg",
      specs: { it: "55 m² · 2 camere matrimoniali · 1 bagno", en: "55 m² · 2 double bedrooms · 1 bathroom" },
      title: { it: "Mansarda luminosa", en: "Bright attic loft" },
      desc: {
        it: "Mansarda all'ultimo piano con soffitti spioventi, bagno moderno in marmo e cucina completamente attrezzata.",
        en: "Top-floor attic with sloped ceilings, modern marble bathroom and fully equipped kitchen.",
      },
      best: { it: "Ideale per coppie, piccole famiglie e business.", en: "Best for couples, small families and business stays." },
      href: "/ale",
    },
    {
      tag: { it: "Casa intera", en: "Whole house" },
      tagColor: "#0f3d4a",
      img: "/images/house/hero-23-enhanced.jpg",
      specs: { it: "130 m² · 4 camere matrimoniali · 2 bagni", en: "130 m² · 4 double bedrooms · 2 bathrooms" },
      title: { it: "Tutto insieme", en: "Stay together" },
      desc: {
        it: "Prenota entrambi gli appartamenti e goditi tutta la casa: 4 camere, 2 cucine e il giardino privato.",
        en: "Book both apartments and enjoy the whole house: 4 bedrooms, 2 kitchens and the private garden.",
      },
      best: { it: "Ideale per gruppi e famiglie, fino a 8 ospiti.", en: "Best for groups and families, up to 8 guests." },
      href: "/la-casa",
    },
  ];
  return (
    <section id="apartments" className="scroll-mt-20 bg-cream pb-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-script text-2xl leading-none text-terracotta">{tr(lang, { it: "Scegli il tuo soggiorno", en: "Choose your stay" })}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-deep-brown md:text-4xl">
            {tr(lang, { it: "Due appartamenti, una casa", en: "Two apartments, one house" })}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title.en} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[16/10]">
                <Image src={c.img} alt={tr(lang, c.title)} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm" style={{ backgroundColor: c.tagColor }}>
                  {tr(lang, c.tag)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs text-warm-gray">{tr(lang, c.specs)}</div>
                <h3 className="mt-2 font-serif text-xl text-deep-brown">{tr(lang, c.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">{tr(lang, c.desc)}</p>
                <p className="mt-3 flex-1 text-xs italic text-warm-gray">{tr(lang, c.best)}</p>
                <Link href={c.href} className="mt-5 inline-flex w-max items-center gap-2 rounded-full border border-terracotta px-5 py-2 font-script text-2xl leading-none text-terracotta transition hover:bg-cream-2">
                  {tr(lang, { it: "Vedi dettagli", en: "View details" })}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 rounded-full bg-cream-2 px-5 py-3 text-center text-sm text-deep-brown">
          <Leaf className="h-4 w-4 flex-shrink-0 text-terracotta" />
          {tr(lang, {
            it: "L'unico spazio in comune è il giardino privato con terrazza per la colazione, sedute e parcheggio gratuito.",
            en: "The only shared area is the private garden with breakfast terrace, seating and free parking.",
          })}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Garden                                                                     */
/* -------------------------------------------------------------------------- */
function Garden() {
  const { lang } = useLang();
  const points: { Icon: typeof Leaf; t: Tx }[] = [
    { Icon: Leaf, t: { it: "Giardino privato per il tuo soggiorno", en: "Private garden for your exclusive use" } },
    { Icon: Croissant, t: { it: "Terrazza e sedute per la colazione all'aperto", en: "Breakfast terrace and outdoor seating" } },
    { Icon: Waves, t: { it: "Verde, silenzioso, perfetto per rilassarsi", en: "Green, quiet and perfect to unwind" } },
    { Icon: Car, t: { it: "Parcheggio gratuito all'interno della proprietà", en: "On-site free parking inside the property" } },
  ];
  return (
    <section className="bg-paper py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
          <Image src="/images/house/house-19.jpg" alt="Giardino" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="font-script text-2xl leading-none text-terracotta">{tr(lang, { it: "Il tuo spazio all'aperto", en: "Your private outdoor space" })}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-deep-brown md:text-4xl">{tr(lang, { it: "Relax in giardino", en: "Relax in our garden" })}</h2>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p.t.en} className="flex items-start gap-3 text-sm text-deep-brown">
                <p.Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
                {tr(lang, p.t)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reviews                                                                    */
/* -------------------------------------------------------------------------- */
function Reviews() {
  const { lang } = useLang();
  const praised: Tx[] = [
    { it: "Accoglienza dell'host", en: "Host's welcome" },
    { it: "Pulizia", en: "Cleanliness" },
    { it: "Zona tranquilla", en: "Quiet area" },
    { it: "Posizione comoda", en: "Convenient location" },
    { it: "Appartamenti luminosi e attrezzati", en: "Bright, well-equipped apartments" },
  ];
  const quotes: { t: Tx; who: string }[] = [
    { t: { it: "Fabio ci ha accolti come vecchi amici. Ci ha aiutati coi bagagli e dato ottimi consigli!", en: "Fabio welcomed us like old friends. He helped with our luggage and gave us great tips!" }, who: "Sophie · 🇫🇷" },
    { t: { it: "Appartamento super pulito, ben attrezzato e tranquillo per riposare prima del volo.", en: "Super clean apartment, very well equipped and a quiet place to rest before our flight." }, who: "Mark · 🇬🇧" },
    { t: { it: "Posizione perfetta per visitare Roma e il mare. Il treno per Roma è comodissimo!", en: "Perfect location to visit Rome and the sea. The train to Rome is so easy!" }, who: "Laura · 🇩🇪" },
    { t: { it: "Giardino bellissimo e parcheggio gratuito. Ci siamo sentiti a casa!", en: "Beautiful garden and free parking. We felt at home!" }, who: "Marco · 🇮🇹" },
  ];
  return (
    <section id="recensioni" className="scroll-mt-20 bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <div>
            <p className="font-script text-2xl leading-none text-terracotta">{tr(lang, { it: "Perché piacciamo agli ospiti", en: "Why guests love" })}</p>
            <h2 className="font-serif text-3xl font-semibold text-deep-brown">MiriAle</h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-serif text-4xl font-semibold text-deep-brown">8.8</span>
              <div className="flex gap-0.5 text-terracotta">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>
            <p className="mt-1 text-sm text-warm-gray">{tr(lang, { it: "da 122 recensioni", en: "from 122 reviews" })}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-warm-gray">{tr(lang, { it: "Più apprezzati", en: "Most praised for" })}</p>
            <ul className="mt-2 space-y-1.5">
              {praised.map((p) => (
                <li key={p.en} className="flex items-center gap-2 text-sm text-deep-brown">
                  <Check className="h-4 w-4 text-terracotta" /> {tr(lang, p)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {quotes.map((q) => (
                <figure key={q.who} className="rounded-2xl border border-line bg-paper p-5 shadow-sm">
                  <div className="flex gap-0.5 text-terracotta">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-deep-brown">“{tr(lang, q.t)}”</blockquote>
                  <figcaption className="mt-3 text-xs font-medium text-warm-gray">{q.who} · {tr(lang, { it: "Ospite verificato", en: "Verified guest" })}</figcaption>
                </figure>
              ))}
            </div>
            <a href="https://www.booking.com/hotel/it/miriale-house.html" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-script text-2xl leading-none text-terracotta hover:underline">
              {tr(lang, { it: "Leggi altre recensioni su Booking →", en: "Read more reviews on Booking →" })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Host                                                                       */
/* -------------------------------------------------------------------------- */
function Host() {
  const { lang } = useLang();
  const points: { Icon: typeof UserCheck; t: Tx }[] = [
    { Icon: UserCheck, t: { it: "Check-in di persona e consigli locali", en: "In-person check-in and local tips" } },
    { Icon: Luggage, t: { it: "Aiuto con bagagli e parcheggio", en: "Luggage help and parking support" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid service)" } },
    { Icon: Globe, t: { it: "Parliamo italiano, inglese e spagnolo", en: "We speak Italian, English and Spanish" } },
  ];
  return (
    <section className="bg-paper py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-2">
          <Image src="/images/house/house-17.jpg" alt="Host" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="font-script text-2xl leading-none text-terracotta">{tr(lang, { it: "Conosci l'host", en: "Meet your host" })}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-deep-brown md:text-4xl">{tr(lang, { it: "Ciao, siamo Fabio e famiglia!", en: "Hi, we're Fabio and family!" })}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-warm-gray">
            {tr(lang, {
              it: "Viviamo a Fiumicino e accogliamo di persona ogni ospite. Siamo sempre disponibili per rendere il vostro soggiorno facile e piacevole.",
              en: "We live in Fiumicino and personally welcome every guest. We are always available to make your stay easy and enjoyable.",
            })}
          </p>
          <ul className="mt-5 space-y-2.5">
            {points.map((p) => (
              <li key={p.t.en} className="flex items-start gap-3 text-sm text-deep-brown">
                <p.Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
                {tr(lang, p.t)}
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl border border-line bg-cream px-5 py-4 font-serif text-sm italic text-deep-brown">
            {tr(lang, {
              it: "“Trattiamo i nostri ospiti come vorremmo essere trattati noi. A presto! Fabio”",
              en: "“We treat our guests the way we'd like to be treated. See you soon! Fabio”",
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Location                                                                   */
/* -------------------------------------------------------------------------- */
function Location() {
  const { lang } = useLang();
  const dist: { t: Tx; d: Tx }[] = [
    { t: { it: "Aeroporto FCO", en: "FCO Airport" }, d: { it: "10 min", en: "10 min" } },
    { t: { it: "Fiera di Roma", en: "Fiera di Roma" }, d: { it: "12 min", en: "12 min" } },
    { t: { it: "Ostia Antica", en: "Ostia Antica" }, d: { it: "12 min", en: "12 min" } },
    { t: { it: "Spiagge", en: "Beaches" }, d: { it: "10 min", en: "10 min" } },
    { t: { it: "Ristoranti sul porto", en: "Port restaurants" }, d: { it: "8 min", en: "8 min" } },
    { t: { it: "Roma Termini (treno)", en: "Rome Termini (train)" }, d: { it: "32 min", en: "32 min" } },
  ];
  return (
    <section id="dove-siamo" className="scroll-mt-20 bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-script text-2xl leading-none text-terracotta">{tr(lang, { it: "Perfettamente posizionati", en: "Perfectly located" })}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-deep-brown md:text-4xl">{tr(lang, { it: "Vicino a tutto ciò che conta", en: "Close to everything that matters" })}</h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <iframe src={MAPS_EMBED} className="h-[300px] w-full rounded-2xl border-0" loading="lazy" title="Mappa" />
          <div className="grid grid-cols-2 gap-4 self-center">
            {dist.map((x) => (
              <div key={x.t.en} className="rounded-xl border border-line bg-paper p-4">
                <div className="flex items-center gap-2 font-semibold text-deep-brown">
                  <MapPin className="h-4 w-4 text-terracotta" /> {tr(lang, x.d)}
                </div>
                <div className="mt-1 text-sm text-warm-gray">{tr(lang, x.t)}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 rounded-full bg-paper px-5 py-3 text-center text-sm text-warm-gray">
          {tr(lang, {
            it: "Zona residenziale tranquilla · Supermercati 5 min · Ristoranti e bar 5 min · Stazione a 7 min a piedi",
            en: "Quiet residential area · Supermarkets 5 min · Restaurants & cafés 5 min · Train station 7 min walk",
          })}
        </p>
        <div className="mt-4 text-center">
          <a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="font-script text-2xl leading-none text-terracotta hover:underline">
            {tr(lang, { it: "Apri su Google Maps →", en: "Open in Google Maps →" })}
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Who we're for                                                              */
/* -------------------------------------------------------------------------- */
function WhoFor() {
  const { lang } = useLang();
  const personas: { Icon: typeof Plane; t: Tx }[] = [
    { Icon: Landmark, t: { it: "Turisti per Roma e il mare", en: "Tourists visiting Rome and the sea" } },
    { Icon: Plane, t: { it: "Voli presto/tardi e scali", en: "Early or late flights & stopovers" } },
    { Icon: Building2, t: { it: "Fiera di Roma, eventi e concorsi", en: "Visitors to Fiera di Roma or exams" } },
    { Icon: ShieldCheck, t: { it: "Guardia di Finanza: visite e famiglie", en: "Guardia di Finanza visitors and families" } },
    { Icon: Users, t: { it: "Famiglie e gruppi fino a 8", en: "Families & groups up to 8 guests" } },
  ];
  return (
    <section className="bg-paper py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-script text-2xl leading-none text-terracotta">{tr(lang, { it: "Ideale per", en: "Ideal for" })}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-deep-brown md:text-4xl">{tr(lang, { it: "Per chi siamo perfetti", en: "Who we're perfect for" })}</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {personas.map((p) => (
            <div key={p.t.en} className="rounded-2xl border border-line bg-cream p-5 text-center">
              <p.Icon className="mx-auto h-8 w-8 text-terracotta" strokeWidth={1.5} />
              <p className="mt-3 text-sm text-deep-brown">{tr(lang, p.t)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Amenities                                                                  */
/* -------------------------------------------------------------------------- */
function Amenities() {
  const { lang } = useLang();
  const items: { Icon: typeof Wifi; t: Tx }[] = [
    { Icon: Wifi, t: { it: "Wi-Fi gratuito", en: "Free Wi-Fi" } },
    { Icon: Wind, t: { it: "Aria condizionata e riscaldamento", en: "Air conditioning & heating" } },
    { Icon: HomeIcon, t: { it: "Cucine attrezzate", en: "Fully equipped kitchens" } },
    { Icon: Tv, t: { it: "Smart TV", en: "Smart TV" } },
    { Icon: WashingMachine, t: { it: "Lavatrice", en: "Washing machine" } },
    { Icon: Coffee, t: { it: "Moka e bollitore", en: "Coffee machine" } },
    { Icon: Bath, t: { it: "Phon", en: "Hair dryer" } },
    { Icon: BedDouble, t: { it: "Culla su richiesta", en: "Baby bed on request" } },
    { Icon: Car, t: { it: "Parcheggio privato gratuito", en: "Free private parking" } },
    { Icon: Leaf, t: { it: "Giardino e terrazza", en: "Garden & terrace" } },
  ];
  return (
    <section id="servizi" className="scroll-mt-20 bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-2xl font-semibold text-deep-brown md:text-3xl">
          {tr(lang, { it: "Tutti i comfort che ti servono", en: "All the comforts you need" })}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((it) => (
            <div key={it.t.en} className="flex flex-col items-center gap-2 text-center">
              <it.Icon className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
              <span className="text-sm text-deep-brown">{tr(lang, it.t)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Experiences                                                                */
/* -------------------------------------------------------------------------- */
function Experiences() {
  const { lang } = useLang();
  const exp: { Icon: typeof Landmark; t: Tx; s: Tx }[] = [
    { Icon: Landmark, t: { it: "Roma", en: "Rome" }, s: { it: "storia, arte e cultura", en: "history, art & culture" } },
    { Icon: Waves, t: { it: "Vita di mare", en: "Beach life" }, s: { it: "sole, mare e relax", en: "sun, sea & relaxation" } },
    { Icon: Fish, t: { it: "Cene di pesce", en: "Seafood dinners" }, s: { it: "fresco e gustoso", en: "fresh & delicious" } },
    { Icon: Building2, t: { it: "Ostia Antica", en: "Ostia Antica" }, s: { it: "l'antica città romana", en: "ancient Roman city" } },
    { Icon: Sun, t: { it: "Tramonti sul mare", en: "Sunset by the sea" }, s: { it: "momenti indimenticabili", en: "unforgettable moments" } },
  ];
  return (
    <section className="bg-paper py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-2xl font-semibold text-deep-brown md:text-3xl">
          {tr(lang, { it: "Vivi il meglio della zona", en: "Experience the best of the area" })}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {exp.map((e) => (
            <div key={e.t.en} className="rounded-2xl border border-line bg-cream p-5">
              <e.Icon className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
              <h3 className="mt-3 font-medium text-deep-brown">{tr(lang, e.t)}</h3>
              <p className="text-xs text-warm-gray">{tr(lang, e.s)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/cosa-fare-intorno" className="font-script text-2xl leading-none text-terracotta hover:underline">
            {tr(lang, { it: "Scopri cosa fare nei dintorni →", en: "Discover what to do nearby →" })}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  House rules                                                                */
/* -------------------------------------------------------------------------- */
function HouseRules() {
  const { lang } = useLang();
  const rules: { Icon: typeof Clock; t: Tx; s: Tx }[] = [
    { Icon: Clock, t: { it: "Check-in", en: "Check-in" }, s: { it: "dalle 15:00", en: "from 15:00" } },
    { Icon: LogOut, t: { it: "Check-out", en: "Check-out" }, s: { it: "entro le 11:00", en: "by 11:00" } },
    { Icon: CigaretteOff, t: { it: "Non fumatori", en: "No smoking" }, s: { it: "in casa", en: "indoors" } },
    { Icon: PartyPopper, t: { it: "Niente feste", en: "No parties" }, s: { it: "o eventi", en: "or events" } },
    { Icon: MoonStar, t: { it: "Silenzio", en: "Quiet time" }, s: { it: "23:00 – 07:00", en: "23:00 – 07:00" } },
    { Icon: PawPrint, t: { it: "Animali", en: "Pets" }, s: { it: "non ammessi", en: "not allowed" } },
  ];
  const good: Tx[] = [
    { it: "Pagamento al check-in, contanti o carta", en: "Payment at check-in, cash or card" },
    { it: "Nessun pagamento online richiesto", en: "No online payment required" },
    { it: "Documento richiesto al check-in", en: "ID documents required at check-in" },
    { it: "Tassa di soggiorno non inclusa (da confermare)", en: "City tax not included (to be confirmed)" },
  ];
  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-2xl font-semibold text-deep-brown md:text-3xl">
          {tr(lang, { it: "Regole della casa e info pratiche", en: "House rules & practical info" })}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="grid grid-cols-3 gap-5">
            {rules.map((r) => (
              <div key={r.t.en} className="text-center">
                <r.Icon className="mx-auto h-6 w-6 text-terracotta" strokeWidth={1.5} />
                <div className="mt-2 text-sm font-medium text-deep-brown">{tr(lang, r.t)}</div>
                <div className="text-xs text-warm-gray">{tr(lang, r.s)}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6">
            <h3 className="font-medium text-deep-brown">{tr(lang, { it: "Buono a sapersi", en: "Good to know" })}</h3>
            <ul className="mt-4 space-y-2">
              {good.map((g) => (
                <li key={g.en} className="flex items-start gap-2 text-sm text-warm-gray">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" /> {tr(lang, g)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Final CTA                                                                  */
/* -------------------------------------------------------------------------- */
function FinalCTA() {
  const { lang } = useLang();
  return (
    <section className="bg-olive-section py-16 text-center text-white">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">
          {tr(lang, { it: "Hai domande o vuoi prenotare?", en: "Have questions or ready to book?" })}
        </h2>
        <p className="mt-3 font-serif text-lg italic text-white/85">{tr(lang, { it: "Siamo qui per te!", en: "We're here for you!" })}</p>
        <p className="mt-2 text-sm text-white/75">
          {tr(lang, { it: "Ti rispondiamo in fretta, con la migliore tariffa diretta.", en: "Quick reply guaranteed, and the best direct price." })}
        </p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
          <I.whatsapp className="h-4 w-4" />
          {tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp" })}
        </a>
        <p className="mt-5 text-xs text-white/70">
          {tr(lang, { it: "Nessuna commissione · Nessun pagamento online · Paghi al check-in", en: "No booking fees · No online payment · Pay at check-in" })}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */
function FAQ() {
  const { lang } = useLang();
  const faqs: { q: Tx; a: Tx }[] = [
    { q: { it: "Dove si trova MiriAle?", en: "Where is MiriAle located?" }, a: { it: "A Fiumicino, a ~10 minuti dall'aeroporto Leonardo da Vinci. Roma a 32 minuti in treno, il mare a pochi minuti.", en: "In Fiumicino, ~10 minutes from Leonardo da Vinci Airport. Rome is 32 min by train, the sea a few minutes away." } },
    { q: { it: "Come funziona il check-in?", en: "How does check-in work?" }, a: { it: "Niente check-in automatico: vi accoglie Fabio di persona. Check-in dalle 15:00, check-out entro le 11:00.", en: "No self check-in: Fabio welcomes you in person. Check-in from 15:00, check-out by 11:00." } },
    { q: { it: "C'è il transfer dall'aeroporto?", en: "Is there an airport transfer?" }, a: { it: "Sì, su richiesta: Fabio è tassista e offre il transfer da e per l'aeroporto (a pagamento).", en: "Yes, on request: Fabio is a taxi driver and offers transfers to/from the airport (paid)." } },
    { q: { it: "Posso prenotare tutta la casa?", en: "Can I book the whole house?" }, a: { it: "Sì: Miri e Ale insieme = 4 camere, 2 bagni, fino a 8 ospiti, ideale per gruppi e famiglie.", en: "Yes: Miri and Ale together = 4 bedrooms, 2 bathrooms, up to 8 guests, ideal for groups and families." } },
    { q: { it: "Come si paga?", en: "How do I pay?" }, a: { it: "Nessun pagamento online: si paga al check-in, in contanti o carta. Si prenota via WhatsApp.", en: "No online payment: you pay at check-in, cash or card. Booking is via WhatsApp." } },
  ];
  return (
    <section id="faq" className="scroll-mt-20 bg-paper py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-serif text-2xl font-semibold text-deep-brown md:text-3xl">
          {tr(lang, { it: "Domande frequenti", en: "Frequently asked questions" })}
        </h2>
        <div className="mt-8 border-y border-line">
          {faqs.map((f) => (
            <details key={f.q.en} className="group border-b border-line py-4 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-deep-brown marker:content-['']">
                {tr(lang, f.q)}
                <span className="text-xl leading-none text-terracotta transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">{tr(lang, f.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <StatsBar />
      <Apartments />
      <Garden />
      <Reviews />
      <Host />
      <Location />
      <WhoFor />
      <Amenities />
      <Experiences />
      <HouseRules />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
