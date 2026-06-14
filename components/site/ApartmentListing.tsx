"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Car,
  Check,
  CigaretteOff,
  Clock,
  Coffee,
  DoorOpen,
  Globe,
  Home as HomeIcon,
  Leaf,
  LogOut,
  Luggage,
  MapPin,
  MoonStar,
  PartyPopper,
  PawPrint,
  Plane,
  ShieldCheck,
  ShowerHead,
  Star,
  Tv,
  UserCheck,
  Users,
  WashingMachine,
  Wifi,
  Wind,
} from "lucide-react";
import { I, MAPS_EMBED, MAPS_SHORT, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";
import { type Appartamento, type B, RECENSIONI } from "@/lib/apartments";

function fmt(d: string) {
  if (!d) return "";
  const [y, m, g] = d.split("-");
  return `${g}/${m}/${y}`;
}

export default function ApartmentListing({ apt }: { apt: Appartamento }) {
  const { lang } = useLang();
  const t = (b: B) => tr(lang, b);
  const altro = apt.slug === "miri" ? "/ale" : "/miri";
  const altroNome = apt.slug === "miri" ? "Ale" : "Miri";

  // Booking box
  const [ci, setCi] = useState("");
  const [co, setCo] = useState("");
  const [g, setG] = useState(2);
  const msg =
    t(apt.waMsg) +
    (ci && co
      ? lang === "it"
        ? ` Dal ${fmt(ci)} al ${fmt(co)}, ${g} ospiti.`
        : ` From ${fmt(ci)} to ${fmt(co)}, ${g} guests.`
      : lang === "it"
        ? ` ${g} ospiti.`
        : ` ${g} guests.`);

  const heroBullets: B[] = [
    { it: "Gestione familiare · ospiti di Fabio", en: "Family-run · hosted by Fabio" },
    { it: "Fabio ti accoglie di persona", en: "Fabio welcomes you in person" },
    { it: "10 min dall'aeroporto FCO", en: "10 min to FCO Airport" },
    { it: "A pochi minuti dal mare", en: "Minutes from the sea" },
    { it: "Prenotazione diretta · paghi al check-in", en: "Direct booking · pay at check-in" },
  ];
  const specs: { Icon: typeof HomeIcon; a: string; b: B }[] = [
    { Icon: HomeIcon, a: apt.mq, b: { it: "Dimensione", en: "Apartment size" } },
    { Icon: BedDouble, a: String(apt.camere), b: { it: "Camere matrimoniali", en: "Double bedrooms" } },
    { Icon: ShowerHead, a: String(apt.bagni), b: { it: "Bagno con doccia", en: "Bathroom with shower" } },
    { Icon: Users, a: `${lang === "it" ? "Fino a" : "Up to"} ${apt.ospiti}`, b: { it: "Ospiti", en: "Guests" } },
    { Icon: DoorOpen, a: t(apt.piano), b: { it: "Accesso", en: "Access" } },
  ];
  const hostBullets: { Icon: typeof UserCheck; t: B }[] = [
    { Icon: HomeIcon, t: { it: "Ospitalità familiare", en: "Family-run hospitality" } },
    { Icon: UserCheck, t: { it: "Accoglienza di persona", en: "In-person welcome" } },
    { Icon: Luggage, t: { it: "Aiuto coi bagagli", en: "Luggage help" } },
    { Icon: MapPin, t: { it: "Consigli locali", en: "Local tips & recommendations" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid)" } },
  ];
  const amenities: { Icon: typeof Wifi; t: B }[] = [
    { Icon: Wifi, t: { it: "Wi-Fi gratuito", en: "Free Wi-Fi" } },
    { Icon: Wind, t: { it: "Aria condizionata", en: "Air conditioning" } },
    { Icon: HomeIcon, t: { it: "Cucina attrezzata", en: "Fully equipped kitchen" } },
    { Icon: Coffee, t: { it: "Moka e bollitore", en: "Moka & kettle" } },
    { Icon: WashingMachine, t: { it: "Lavatrice", en: "Washing machine" } },
    { Icon: Tv, t: { it: "TV", en: "TV" } },
    { Icon: Bath, t: { it: "Phon", en: "Hairdryer" } },
    { Icon: BedDouble, t: { it: "Biancheria inclusa", en: "Towels & linen included" } },
    { Icon: Car, t: { it: "Parcheggio gratuito", en: "Free private parking" } },
    { Icon: Leaf, t: { it: "Giardino in comune", en: "Shared garden" } },
  ];
  const dist: { d: B; t: B }[] = [
    { d: { it: "10 min", en: "10 min" }, t: { it: "Aeroporto FCO", en: "to FCO Airport" } },
    { d: { it: "32 min", en: "32 min" }, t: { it: "Roma Termini in treno", en: "to Rome by train" } },
    { d: { it: "Pochi min", en: "Minutes" }, t: { it: "dal mare", en: "from the sea" } },
    { d: { it: "Vicino", en: "Close" }, t: { it: "ai ristoranti del porto", en: "to port restaurants" } },
  ];
  const whoFor: { Icon: typeof Users; t: B; s: B }[] = [
    { Icon: Users, t: { it: "Famiglie", en: "Families" }, s: { it: "Spazio e comfort per la famiglia.", en: "Spacious and comfortable for a family holiday." } },
    { Icon: HomeIcon, t: { it: "Coppie", en: "Couples" }, s: { it: "Un rifugio vicino al mare e a Roma.", en: "A cosy retreat close to the sea and Rome." } },
    { Icon: Coffee, t: { it: "Amici", en: "Friends" }, s: { it: "Spazio per esplorare e rilassarsi.", en: "Great space to explore and relax." } },
    { Icon: Plane, t: { it: "Scali aeroporto", en: "Airport stopovers" }, s: { it: "Ideale per soggiorni brevi prima o dopo il volo.", en: "Ideal for short stays before or after your flight." } },
  ];
  const rules: { Icon: typeof Clock; t: B; s: B }[] = [
    { Icon: Clock, t: { it: "Check-in", en: "Check-in" }, s: { it: "dalle 15:00", en: "from 15:00" } },
    { Icon: LogOut, t: { it: "Check-out", en: "Check-out" }, s: { it: "entro le 11:00", en: "by 11:00" } },
    { Icon: CigaretteOff, t: { it: "Non fumatori", en: "Non-smoking" }, s: { it: "in casa", en: "indoors" } },
    { Icon: PawPrint, t: { it: "Animali", en: "No pets" }, s: { it: "non ammessi", en: "" } },
    { Icon: PartyPopper, t: { it: "Niente feste", en: "No parties" }, s: { it: "o eventi", en: "or events" } },
    { Icon: MoonStar, t: { it: "Silenzio", en: "Quiet time" }, s: { it: "23:00 – 07:00", en: "23:00 – 07:00" } },
  ];
  const explore: { img: string; t: B; s: B }[] = [
    { img: "/images/base-roma-mare.jpg", t: { it: "Lungomare di Fiumicino", en: "Fiumicino waterfront" }, s: { it: "passeggiate e viste mare", en: "seaside walks & views" } },
    { img: "/images/house/house-14.jpg", t: { it: "Ostia Antica", en: "Ostia Antica" }, s: { it: "antica città romana", en: "ancient Roman city" } },
    { img: "/images/aereo-aeroporto.jpg", t: { it: "Roma", en: "Rome" }, s: { it: "storia, arte e cultura", en: "history, art & culture" } },
    { img: "/images/house/house-19.jpg", t: { it: "Pesce locale", en: "Local seafood" }, s: { it: "fresco e gustoso", en: "fresh & delicious" } },
  ];

  const eyebrow = "text-sm font-medium text-terracotta";
  const h2 = "mt-1 font-serif text-2xl font-light text-deep-brown md:text-3xl";
  const campo = "mt-1 w-full rounded-xl border border-line bg-bone px-3 py-2.5 text-sm text-deep-brown outline-none focus:border-terracotta";

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Benvenuti a MiriAle Holiday House", en: "Welcome to MiriAle Holiday House" })}</p>
            <h1 className="mt-2 font-serif text-4xl font-light text-deep-brown md:text-5xl">
              {tr(lang, { it: `Appartamento ${apt.nome}`, en: `${apt.nome} Apartment` })}
            </h1>
            <p className="mt-2 text-base text-warm-gray">{t(apt.tagline)}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-gray">{t(apt.descrizione)}</p>
            <ul className="mt-5 space-y-2">
              {heroBullets.map((b) => (
                <li key={b.en} className="flex items-center gap-2 text-sm text-deep-brown">
                  <Check className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(b)}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl">
              <Image src={apt.gallery[0].src} alt={apt.gallery[0].alt} fill priority sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
            </div>
            {apt.gallery.slice(1, 3).map((im) => (
              <div key={im.src + im.alt} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={im.src} alt={im.alt} fill sizes="20vw" className="object-cover" />
              </div>
            ))}
            <div className="relative col-span-3 aspect-[16/6] overflow-hidden rounded-xl">
              <Image src="/images/base-roma-mare.jpg" alt="Mare" fill sizes="(max-width:768px) 100vw, 60vw" className="object-cover" />
              <span className="absolute bottom-3 right-3 rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-deep-brown shadow-sm">
                +{apt.gallery.length + 4} {tr(lang, { it: "foto", en: "photos" })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS BAR */}
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

      {/* BOOKING + HOST */}
      <section className="bg-cream pb-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
            <h3 className="font-serif text-lg text-deep-brown">{tr(lang, { it: "Verifica disponibilità e scrivi a Fabio", en: "Check availability & message Fabio" })}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <label className="block"><span className="text-xs font-medium uppercase tracking-wide text-warm-gray">Check-in</span><input type="date" value={ci} onChange={(e) => setCi(e.target.value)} className={campo} /></label>
              <label className="block"><span className="text-xs font-medium uppercase tracking-wide text-warm-gray">Check-out</span><input type="date" value={co} min={ci || undefined} onChange={(e) => setCo(e.target.value)} className={campo} /></label>
              <label className="block"><span className="text-xs font-medium uppercase tracking-wide text-warm-gray">{tr(lang, { it: "Ospiti", en: "Guests" })}</span>
                <select value={g} onChange={(e) => setG(Number(e.target.value))} className={campo}>{[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}</select>
              </label>
            </div>
            <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
              <I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivi su WhatsApp", en: "Message on WhatsApp" })}
            </a>
            <p className="mt-3 text-center text-xs text-warm-gray">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-terracotta" />
              {tr(lang, { it: "Prenotazione diretta · nessun pagamento online · paghi al check-in", en: "Direct booking · no online payment · pay at check-in" })}
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-deep-brown font-serif text-xl text-white">F</div>
              <div>
                <p className="text-xs text-warm-gray">{tr(lang, { it: "Ti ospita", en: "Hosted by" })}</p>
                <p className="font-serif text-xl text-deep-brown">Fabio</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {hostBullets.map((b) => (
                <li key={b.t.en} className="flex items-center gap-2 text-sm text-deep-brown"><b.Icon className="h-4 w-4 text-terracotta" /> {t(b.t)}</li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 border-t border-line-soft pt-3 text-xs text-warm-gray"><Globe className="h-4 w-4 text-terracotta" /> {tr(lang, { it: "Parliamo italiano, inglese e spagnolo", en: "We speak Italian, English and Spanish" })}</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section bg="paper">
        <p className={eyebrow}>{tr(lang, { it: `Appartamento ${apt.nome}`, en: `About ${apt.nome} Apartment` })}</p>
        <h2 className={h2}>{tr(lang, { it: "Luminoso, accogliente e confortevole", en: "Bright, warm and comfortable" })}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-warm-gray">{t(apt.descrizione)}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { Icon: DoorOpen, t: apt.piano },
            { Icon: HomeIcon, t: { it: "Cucina e soggiorno", en: "Kitchen & living room" } as B },
            { Icon: ShowerHead, t: { it: "Bagno con doccia", en: "Bathroom with shower" } as B },
            { Icon: Car, t: { it: "Parcheggio gratuito", en: "Private free parking" } as B },
            { Icon: Leaf, t: { it: "Giardino in comune", en: "Shared garden" } as B },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-line bg-cream p-4 text-center">
              <f.Icon className="mx-auto h-7 w-7 text-terracotta" strokeWidth={1.5} />
              <p className="mt-2 text-sm text-deep-brown">{t(f.t)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT YOU'LL LOVE */}
      <Section bg="cream">
        <p className={eyebrow}>{tr(lang, { it: "Cosa amerai", en: "What you'll love" })}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apt.love.map((l) => (
            <article key={l.t.en} className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
              <div className="relative aspect-[16/10]"><Image src={l.img} alt={t(l.t)} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover" /></div>
              <div className="p-4"><h3 className="font-medium text-deep-brown">{t(l.t)}</h3><p className="mt-1 text-xs text-warm-gray">{t(l.s)}</p></div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHAT & LAYOUT */}
      <Section bg="paper">
        <p className={eyebrow}>{tr(lang, { it: "Ambienti e layout", en: "Rooms & layout" })}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {apt.stanze.map((s) => (
            <article key={s.nome.en} className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <div className="relative aspect-[4/3]"><Image src={s.imgs[0].src} alt={t(s.nome)} fill sizes="(max-width:1024px) 50vw, 20vw" className="object-cover" /></div>
              <div className="p-4"><h3 className="font-medium text-deep-brown">{t(s.nome)}</h3><p className="mt-1 text-xs text-warm-gray">{t(s.descr)}</p></div>
            </article>
          ))}
        </div>
      </Section>

      {/* AMENITIES */}
      <Section bg="cream">
        <p className={eyebrow}>{tr(lang, { it: "Servizi", en: "Amenities" })}</p>
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((a) => (
            <div key={a.t.en} className="flex items-center gap-2.5 text-sm text-deep-brown"><a.Icon className="h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.5} /> {t(a.t)}</div>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 rounded-full bg-paper px-4 py-3 text-sm text-warm-gray"><Leaf className="h-4 w-4 text-terracotta" /> {tr(lang, { it: "Accesso al giardino privato in comune con terrazza per la colazione.", en: "Access to the shared private garden with breakfast terrace." })}</p>
      </Section>

      {/* REVIEWS */}
      <Section bg="paper">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Amati dagli ospiti", en: "Loved by our guests" })}</p>
            <div className="mt-2 flex items-center gap-2"><span className="font-serif text-4xl font-light text-deep-brown">8.8</span><div className="flex gap-0.5 text-terracotta">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div></div>
            <p className="mt-1 text-sm text-warm-gray">{tr(lang, { it: "da 122 recensioni", en: "from 122 reviews" })}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {RECENSIONI.map((r) => (
              <figure key={r.who} className="rounded-2xl border border-line bg-cream p-5">
                <div className="flex gap-0.5 text-terracotta">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
                <blockquote className="mt-2 text-sm leading-relaxed text-deep-brown">“{t(r.t)}”</blockquote>
                <figcaption className="mt-2 text-xs font-medium text-warm-gray">{r.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* HOST */}
      <Section bg="cream">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src="/images/house/house-17.jpg" alt="Host" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" /></div>
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Conosci l'host", en: "Meet your host" })}</p>
            <h2 className={h2}>{tr(lang, { it: "Ciao, sono Fabio", en: "Hi, I'm Fabio" })}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-warm-gray">{tr(lang, { it: "Vivo a Fiumicino con la mia famiglia e amiamo accogliere ospiti da tutto il mondo. Faremo di tutto perché il vostro soggiorno sia facile e piacevole.", en: "I live in Fiumicino with my family and we love welcoming guests from all over the world. We'll make sure your stay is easy and full of local tips." })}</p>
            <ul className="mt-4 space-y-2">
              {[{ Icon: UserCheck, t: { it: "Accoglienza e aiuto bagagli", en: "Personal welcome and luggage help" } as B }, { Icon: Plane, t: { it: "Transfer aeroporto su richiesta", en: "Airport transfer on request (paid)" } as B }, { Icon: MapPin, t: { it: "Consigli su ristoranti, spiagge e Roma", en: "Local tips for restaurants, beaches & Rome" } as B }, { Icon: Globe, t: { it: "Risposta rapida su WhatsApp", en: "Quick communication on WhatsApp" } as B }].map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-deep-brown"><b.Icon className="h-4 w-4 text-terracotta" /> {t(b.t)}</li>
              ))}
            </ul>
            <p className="mt-5 rounded-2xl border border-line bg-paper px-5 py-4 font-serif text-sm italic text-deep-brown">{tr(lang, { it: "“Trattiamo i nostri ospiti come vorremmo essere trattati noi. A presto! Fabio”", en: "“We treat our guests the way we'd like to be treated. See you soon! Fabio”" })}</p>
          </div>
        </div>
      </Section>

      {/* LOCATION */}
      <Section bg="paper">
        <p className={eyebrow}>{tr(lang, { it: "Posizione e comodità", en: "Location & convenience" })}</p>
        <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
          <iframe src={MAPS_EMBED} className="h-[280px] w-full rounded-2xl border-0" loading="lazy" title="Map" />
          <div>
            <div className="grid grid-cols-2 gap-3">
              {dist.map((x) => (
                <div key={x.t.en} className="rounded-xl border border-line bg-cream p-3"><div className="flex items-center gap-1.5 font-semibold text-deep-brown"><MapPin className="h-4 w-4 text-terracotta" /> {t(x.d)}</div><div className="mt-0.5 text-xs text-warm-gray">{t(x.t)}</div></div>
              ))}
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-warm-gray">{tr(lang, { it: "Esplora la zona", en: "Explore the area" })}</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {explore.map((e) => (
                <div key={e.t.en} className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image src={e.img} alt={t(e.t)} fill sizes="25vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white"><div className="text-xs font-semibold">{t(e.t)}</div><div className="text-[10px] text-white/80">{t(e.s)}</div></div>
                </div>
              ))}
            </div>
            <a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-terracotta hover:underline">{tr(lang, { it: "Apri su Google Maps →", en: "Open in Google Maps →" })}</a>
          </div>
        </div>
      </Section>

      {/* WHO FOR */}
      <Section bg="cream">
        <p className={eyebrow}>{tr(lang, { it: "Per chi è perfetto", en: "Who it's perfect for" })}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {whoFor.map((w) => (
            <div key={w.t.en} className="rounded-2xl border border-line bg-paper p-5 text-center"><w.Icon className="mx-auto h-7 w-7 text-terracotta" strokeWidth={1.5} /><h3 className="mt-3 font-medium text-deep-brown">{t(w.t)}</h3><p className="mt-1 text-xs text-warm-gray">{t(w.s)}</p></div>
          ))}
        </div>
      </Section>

      {/* RULES */}
      <Section bg="paper">
        <p className={eyebrow}>{tr(lang, { it: "Regole e info pratiche", en: "House rules & practical info" })}</p>
        <div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-6">
          {rules.map((r) => (
            <div key={r.t.en} className="text-center"><r.Icon className="mx-auto h-6 w-6 text-terracotta" strokeWidth={1.5} /><div className="mt-2 text-sm font-medium text-deep-brown">{t(r.t)}</div><div className="text-xs text-warm-gray">{t(r.s)}</div></div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-olive-section py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl font-light md:text-4xl">{tr(lang, { it: `Pronto per ${apt.nome}?`, en: `Ready to stay at ${apt.nome}?` })}</h2>
          <p className="mt-2 text-sm text-white/80">{tr(lang, { it: "Chiedi a Fabio le tue date su WhatsApp.", en: "Ask Fabio about your dates on WhatsApp." })}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href={waLink(t(apt.waMsg))} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}><I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivi su WhatsApp", en: "Message on WhatsApp" })}</a>
            <Link href={altro} className="text-sm font-medium text-white/85 underline-offset-4 hover:underline">{tr(lang, { it: `Guarda anche ${altroNome} →`, en: `See also ${altroNome} →` })}</Link>
          </div>
          <p className="mt-5 text-xs text-white/70">{tr(lang, { it: "Risposta rapida · Prenotazione diretta · Nessun pagamento online · Paghi al check-in", en: "Quick reply · Direct booking · No online payment · Pay at check-in" })}</p>
        </div>
      </section>
    </main>
  );
}

function Section({ bg, children }: { bg: "paper" | "cream"; children: React.ReactNode }) {
  return (
    <section className={`${bg === "cream" ? "bg-cream" : "bg-paper"} py-12 md:py-14`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
