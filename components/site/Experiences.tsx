"use client";

import Image from "next/image";
import {
  Anchor,
  Building2,
  Bus,
  Car,
  Footprints,
  Heart,
  Image as ImageIcon,
  Landmark,
  Leaf,
  Lightbulb,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Tag,
  Train,
  TrainFront,
  Umbrella,
  Waves,
} from "lucide-react";
import { I, MAPS_EMBED, MAPS_SHORT, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";
import { type B } from "@/lib/apartments";

/** Placeholder grafico per le foto dei luoghi non ancora disponibili. */
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

export default function Experiences() {
  const { lang } = useLang();
  const t = (b: B) => tr(lang, b);

  const eyebrow = "font-script text-2xl leading-none text-terracotta";

  const heroFeatures: { Icon: typeof MapPin; t: B; s: B }[] = [
    { Icon: MapPin, t: { it: "Posizione perfetta", en: "Perfect location" }, s: { it: "Vicino ad aeroporto, Roma e mare", en: "Near airport, Rome and the sea" } },
    { Icon: Lightbulb, t: { it: "Consigli locali", en: "Local tips" }, s: { it: "Suggerimenti personali di Fabio", en: "Personal suggestions from Fabio" } },
    { Icon: TrainFront, t: { it: "Facile da raggiungere", en: "Easy to reach" }, s: { it: "Treni, spiagge e attrazioni vicine", en: "Trains, beaches and attractions nearby" } },
    { Icon: Heart, t: { it: "Comfort e relax", en: "Comfort & relax" }, s: { it: "Torna a casa e rilassati", en: "Come back home and unwind" } },
  ];

  const top: { img: string | null; phLabel: string; t: B; near: B; s: B; time: B; by: B; Icon: typeof Car }[] = [
    { img: "/images/luoghi/esp-roma-card.jpg", phLabel: "Roma", t: { it: "Roma", en: "Rome" }, near: { it: "~30 km", en: "~30 km" }, s: { it: "Colosseo, Vaticano, Fontana di Trevi, Trastevere e molto altro. Senza auto!", en: "Colosseum, Vatican, Trevi Fountain, Trastevere and more. No car needed!" }, time: { it: "32 min", en: "32 min" }, by: { it: "in treno", en: "by train" }, Icon: Train },
    { img: "/images/base-roma-mare.jpg", phLabel: "Mare", t: { it: "Il mare", en: "The Sea" }, near: { it: "Focene, Fregene, Ostia Lido", en: "Focene, Fregene, Ostia Lido" }, s: { it: "Spiagge, stabilimenti, passeggiate sul lungomare e tramonti spettacolari.", en: "Beaches, beach clubs, seafront walks and stunning sunsets." }, time: { it: "5–20 min", en: "5–20 min" }, by: { it: "in auto", en: "by car" }, Icon: Car },
    { img: "/images/luoghi/ostia.jpg", phLabel: "Ostia Antica", t: { it: "Ostia Antica", en: "Ostia Antica" }, near: { it: "~20 min", en: "~20 min" }, s: { it: "Uno dei siti romani meglio conservati d'Italia. Teatro, terme, mosaici e altro.", en: "One of Italy's best preserved Roman sites. Theatre, baths, mosaics and more." }, time: { it: "20 min", en: "20 min" }, by: { it: "in auto", en: "by car" }, Icon: Car },
    { img: "/images/luoghi/porto.jpg", phLabel: "Porto di Fiumicino", t: { it: "Porto di Fiumicino", en: "Fiumicino Port" }, near: { it: "~10 min", en: "~10 min" }, s: { it: "Il porto-canale con ottimi ristoranti di pesce, il faro e il lungomare.", en: "The canal-port with amazing seafood restaurants, lighthouse and lungomare." }, time: { it: "10 min", en: "10 min" }, by: { it: "in auto", en: "by car" }, Icon: Car },
    { img: "/images/luoghi/fiera.jpg", phLabel: "Fiera di Roma", t: { it: "Fiera di Roma", en: "Fiera di Roma" }, near: { it: "~15 min", en: "~15 min" }, s: { it: "Centro espositivo per fiere, eventi, esami e concorsi.", en: "Exhibition centre for fairs, events, exams and competitions." }, time: { it: "15 min", en: "15 min" }, by: { it: "in auto", en: "by car" }, Icon: Car },
    { img: "/images/luoghi/negozi.jpg", phLabel: "Negozi e servizi", t: { it: "Negozi e servizi", en: "Shops & services" }, near: { it: "~5 min", en: "~5 min" }, s: { it: "Supermercati, ristoranti, farmacie e tutto ciò che serve.", en: "Supermarkets, restaurants, pharmacies and everything you need." }, time: { it: "5 min", en: "5 min" }, by: { it: "in auto", en: "by car" }, Icon: Car },
  ];

  type Step = { time: string; a: B; sub?: B };
  const ideas: { n: string; img: string | null; phLabel: string; t: B; sub: B; steps: Step[]; tip: B }[] = [
    {
      n: "01", img: "/images/luoghi/pantheon.jpg", phLabel: "Roma", t: { it: "Una giornata a Roma", en: "A day in Rome" }, sub: { it: "Storia, arte e cultura", en: "History, art & culture" },
      steps: [
        { time: "09:00", a: { it: "Treno per Roma Termini (Leonardo Express — 32 min)", en: "Train to Roma Termini (Leonardo Express — 32 min)" } },
        { time: "09:30", a: { it: "Colosseo e Foro Romano", en: "Colosseum & Roman Forum" } },
        { time: "12:00", a: { it: "Pantheon e Piazza Navona", en: "Pantheon & Piazza Navona" } },
        { time: "14:00", a: { it: "Pranzo a Trastevere", en: "Lunch in Trastevere" } },
        { time: "16:00", a: { it: "Fontana di Trevi", en: "Trevi Fountain" } },
        { time: "17:00", a: { it: "Basilica di San Pietro e Vaticano", en: "St. Peter's Basilica & Vatican" } },
        { time: "19:30", a: { it: "Treno di rientro a Fiumicino", en: "Train back to Fiumicino" } },
      ],
      tip: { it: "Compra i biglietti del treno online e parti presto per goderti ogni momento.", en: "Buy train tickets online and start early to enjoy every moment." },
    },
    {
      n: "02", img: "/images/base-roma-mare.jpg", phLabel: "Mare", t: { it: "Pomeriggio in spiaggia", en: "Beach afternoon" }, sub: { it: "Sole, mare e relax", en: "Sun, sea & relax" },
      steps: [
        { time: "10:00", a: { it: "Spiaggia di Fregene o Focene", en: "Fregene or Focene beach" }, sub: { it: "Relax in riva al mare o in uno stabilimento", en: "Relax by the sea or in a beach club" } },
        { time: "13:00", a: { it: "Pranzo con vista mare", en: "Lunch with sea view" } },
        { time: "16:30", a: { it: "Passeggiata sul lungomare o spiaggia", en: "Seafront walk or beach time" } },
        { time: "19:30", a: { it: "Aperitivo al tramonto", en: "Aperitivo at sunset" } },
      ],
      tip: { it: "Fregene è perfetta per i tramonti e l'aperitivo in riva al mare.", en: "Fregene is perfect for sunsets and seaside aperitivo." },
    },
    {
      n: "03", img: "/images/luoghi/ostia-antica.jpg", phLabel: "Ostia Antica", t: { it: "Mezza giornata a Ostia Antica", en: "Half day in Ostia Antica" }, sub: { it: "Indietro nel tempo", en: "Step back in time" },
      steps: [
        { time: "10:00", a: { it: "Arrivo e inizio della visita", en: "Arrive & start your visit" }, sub: { it: "Esplora la città antica: teatro, terme, mosaici", en: "Explore the ancient city: theatre, baths, mosaics" } },
        { time: "12:30", a: { it: "Pausa al caffè dentro il parco", en: "Break at the café inside the park" } },
        { time: "13:30", a: { it: "Visita al museo o al litorale", en: "Explore the museum or the seafront" } },
        { time: "14:30", a: { it: "Rientro a casa o tempo in spiaggia", en: "Back home or beach time" } },
      ],
      tip: { it: "Indossa scarpe comode e porta acqua, soprattutto in estate.", en: "Wear comfortable shoes and bring water, especially in summer." },
    },
    {
      n: "04", img: "/images/luoghi/ristorante-pesce.jpg", phLabel: "Porto di Fiumicino", t: { it: "Serata di pesce al porto", en: "Seafood evening at the port" }, sub: { it: "Buon cibo e atmosfera locale", en: "Good food & local vibe" },
      steps: [
        { time: "19:00", a: { it: "Passeggiata al porto-canale di Fiumicino", en: "Fiumicino canal-port stroll" } },
        { time: "19:30", a: { it: "Cena con pesce fresco e vino locale", en: "Dinner with fresh fish and local wine" } },
        { time: "21:30", a: { it: "Passeggiata al molo e al faro", en: "Walk along the pier and lighthouse" } },
      ],
      tip: { it: "Prova gli spaghetti alle vongole e un vino bianco locale.", en: "Try the spaghetti alle vongole and a local white wine." },
    },
  ];

  const nearby: { Icon: typeof Plane; t: B; v: B }[] = [
    { Icon: Plane, t: { it: "Aeroporto FCO", en: "FCO Airport" }, v: { it: "10 min", en: "10 min" } },
    { Icon: Train, t: { it: "Roma (Termini) con Leonardo Express", en: "Rome (Termini) by Leonardo Express" }, v: { it: "32 min", en: "32 min" } },
    { Icon: Waves, t: { it: "Spiagge (Focene)", en: "Beaches (Focene)" }, v: { it: "5–10 min", en: "5–10 min" } },
    { Icon: Anchor, t: { it: "Porto di Fiumicino", en: "Fiumicino Port" }, v: { it: "10 min", en: "10 min" } },
    { Icon: Landmark, t: { it: "Ostia Antica", en: "Ostia Antica" }, v: { it: "20 min", en: "20 min" } },
    { Icon: Building2, t: { it: "Fiera di Roma", en: "Fiera di Roma" }, v: { it: "15 min", en: "15 min" } },
    { Icon: Umbrella, t: { it: "Ostia Lido", en: "Ostia Lido" }, v: { it: "20 min", en: "20 min" } },
    { Icon: ShoppingCart, t: { it: "Supermercati e ristoranti", en: "Supermarkets & restaurants" }, v: { it: "5 min", en: "5 min" } },
    { Icon: Footprints, t: { it: "Stazione dei treni", en: "Train station" }, v: { it: "7 min a piedi", en: "7 min walk" } },
    { Icon: Stethoscope, t: { it: "Farmacia", en: "Pharmacy" }, v: { it: "5 min", en: "5 min" } },
    { Icon: Stethoscope, t: { it: "Ospedale", en: "Hospital" }, v: { it: "10 min", en: "10 min" } },
    { Icon: ShieldCheck, t: { it: "Guardia di Finanza", en: "Guardia di Finanza" }, v: { it: "5 min", en: "5 min" } },
  ];

  const nearbyBar: { Icon: typeof Leaf; t: B }[] = [
    { Icon: Leaf, t: { it: "Zona residenziale tranquilla", en: "Quiet residential area" } },
    { Icon: Car, t: { it: "Parcheggio gratuito alla casa", en: "Free parking at the house" } },
    { Icon: Plane, t: { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid)" } },
  ];

  const practical: { Icon: typeof Bus; t: B; s: B }[] = [
    { Icon: Bus, t: { it: "Spostarsi", en: "Getting around" }, s: { it: "Treni, bus e collegamenti facili.", en: "Trains, buses and easy connections." } },
    { Icon: Train, t: { it: "Auto non necessaria", en: "No car needed" }, s: { it: "Roma si raggiunge facilmente in treno.", en: "Rome is easy to reach by train." } },
    { Icon: MessageCircle, t: { it: "Supporto locale", en: "Local support" }, s: { it: "Fabio ti aiuta con consigli e prenotazioni.", en: "Fabio is here to help with tips & bookings." } },
    { Icon: Leaf, t: { it: "Soggiorno comodo", en: "Comfortable stay" }, s: { it: "Torna a casa e rilassati nel nostro giardino.", en: "Come back home and relax in our garden." } },
    { Icon: Tag, t: { it: "Prenotazione diretta", en: "Direct booking" }, s: { it: "Miglior prezzo garantito. Nessun pagamento online.", en: "Best price guaranteed. No online payment." } },
  ];

  return (
    <main className="flex-1">
      {/* ===================== HERO ===================== */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-12">
          <div>
            <p className={eyebrow}>{tr(lang, { it: "Esplora i dintorni", en: "Explore more" })}</p>
            <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-deep-brown md:text-5xl">
              {tr(lang, { it: "Tanto da vedere, vicino a casa", en: "So much to see, so close to home" })}
            </h1>
            <Wave className="mt-3 h-2 w-20 text-terracotta" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-warm-gray">
              {tr(lang, {
                it: "Dalle meraviglie senza tempo di Roma alle spiagge dorate, dai siti archeologici al pesce fresco: tutto è a portata di mano. Fabio e la sua famiglia sono qui con consigli locali per rendere il tuo soggiorno indimenticabile.",
                en: "From Rome's timeless wonders to golden beaches, ancient ruins and delicious seafood — everything is within easy reach. Fabio and his family are here with local tips to make your stay unforgettable.",
              })}
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {heroFeatures.map((f) => (
                <div key={f.t.en} className="flex flex-col gap-1.5">
                  <f.Icon className="h-6 w-6 text-terracotta" strokeWidth={1.5} />
                  <p className="text-sm font-semibold leading-tight text-deep-brown">{t(f.t)}</p>
                  <p className="text-xs leading-snug text-warm-gray">{t(f.s)}</p>
                </div>
              ))}
            </div>
          </div>
          {/* collage polaroid: foto grande incorniciata + foto piccole inclinate (come in home) */}
          <div className="relative">
            {/* foto principale con cornice bianca */}
            <div className="relative -rotate-1 rounded-[2rem] bg-white p-3 shadow-card lg:mr-10">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem]">
                <Image src="/images/luoghi/esp-roma.jpg" alt={tr(lang, { it: "Panorama di Roma", en: "Rome skyline" })} fill priority sizes="(max-width:768px) 100vw, 45vw" className="object-cover" />
              </div>
            </div>
            {/* cluster di polaroid sovrapposte */}
            <div className="absolute -right-3 top-4 hidden w-36 lg:block xl:w-44">
              <div className="rotate-3 rounded-xl bg-white p-1.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/luoghi/esp-vaticano.jpg" alt={tr(lang, { it: "Piazza San Pietro", en: "St. Peter's Square" })} fill sizes="130px" className="object-cover" /></div>
              </div>
              <div className="-mt-3 ml-4 -rotate-3 rounded-xl bg-white p-1.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/luoghi/esp-trevi.jpg" alt={tr(lang, { it: "Fontana di Trevi", en: "Trevi Fountain" })} fill sizes="130px" className="object-cover" /></div>
              </div>
              <div className="-mt-3 ml-1 rotate-2 rounded-xl bg-white p-1.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/luoghi/esp-villa-borghese.jpg" alt={tr(lang, { it: "Giardini di Villa Borghese", en: "Villa Borghese gardens" })} fill sizes="130px" className="object-cover" /></div>
              </div>
              <div className="-mt-3 ml-3 -rotate-2 rounded-xl bg-white p-1.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-lg"><Image src="/images/luoghi/esp-lungomare.jpg" alt={tr(lang, { it: "Lungomare e mare di Fiumicino", en: "Fiumicino seafront" })} fill sizes="130px" className="object-cover" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TOP EXPERIENCES ===================== */}
      <section className="relative overflow-hidden bg-cover bg-center py-12 md:py-14" style={{ backgroundImage: "url('/images/luoghi/teal-water.jpg')" }}>
        <div className="absolute inset-0 bg-paper/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-deep-brown md:text-3xl">{tr(lang, { it: "Le migliori esperienze vicino a MiriAle Holiday House", en: "Top experiences near MiriAle Holiday House" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {top.map((c) => (
              <article key={c.t.en} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
                <div className="relative aspect-[4/3]">
                  {c.img ? <Image src={c.img} alt={t(c.t)} fill sizes="(max-width:1280px) 50vw, 16vw" className="object-cover" /> : <Ph label={c.phLabel} className="absolute inset-0" />}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-deep-brown">{t(c.t)}</h3>
                  <p className="text-xs font-medium text-terracotta">{t(c.near)}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-warm-gray">{t(c.s)}</p>
                  <p className="mt-3 flex items-center gap-2 border-t border-line-soft pt-3 text-xs text-deep-brown">
                    <c.Icon className="h-4 w-4 text-terracotta" strokeWidth={1.6} /> <span className="font-semibold">{t(c.time)}</span> <span className="text-warm-gray">{t(c.by)}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== READY-MADE DAY IDEAS ===================== */}
      <section className="bg-paper py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-deep-brown md:text-3xl">{tr(lang, { it: "Idee per la giornata, pronte all'uso", en: "Ready-made day ideas" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
            <p className="mt-3 text-sm text-warm-gray">{tr(lang, { it: "Itinerari facili per ispirare il tuo soggiorno — suggeriti da Fabio", en: "Easy itineraries to inspire your stay — suggested by Fabio" })}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ideas.map((d) => (
              <article key={d.n} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
                <div className="relative aspect-[16/10]">
                  {d.img ? <Image src={d.img} alt={t(d.t)} fill sizes="(max-width:1280px) 50vw, 25vw" className="object-cover" /> : <Ph label={d.phLabel} className="absolute inset-0" />}
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-deep-brown text-sm font-bold text-white shadow">{d.n}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold text-deep-brown">{t(d.t)}</h3>
                  <p className="font-script text-lg text-terracotta">{t(d.sub)}</p>
                  <ul className="mt-4 flex-1 space-y-3">
                    {d.steps.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="w-12 flex-shrink-0 font-semibold text-terracotta">{s.time}</span>
                        <span className="relative border-l border-line pl-3">
                          <span className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-terracotta" />
                          <span className="text-deep-brown">{t(s.a)}</span>
                          {s.sub ? <span className="mt-0.5 block text-xs text-warm-gray">{t(s.sub)}</span> : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-xl bg-cream p-3">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-deep-brown"><Lightbulb className="h-4 w-4 text-terracotta" /> {tr(lang, { it: "Il consiglio di Fabio", en: "Fabio's tip" })}</p>
                    <p className="mt-1 text-xs leading-relaxed text-warm-gray">{t(d.tip)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* custom plan bar */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-cream px-6 py-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-semibold text-deep-brown">{tr(lang, { it: "Vuoi un piano su misura?", en: "Need a custom plan?" })}</p>
              <p className="text-sm text-warm-gray">{tr(lang, { it: "Fabio è felice di aiutarti a organizzare la giornata perfetta.", en: "Fabio is happy to help you plan the perfect day." })}</p>
            </div>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex flex-shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
              <I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivi a Fabio su WhatsApp", en: "Chat with Fabio on WhatsApp" })}
            </a>
          </div>
        </div>
      </section>

      {/* ===================== ALL NEARBY AT A GLANCE ===================== */}
      <section className="bg-cream py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-deep-brown md:text-3xl">{tr(lang, { it: "Tutto nei dintorni — in sintesi", en: "All nearby – at a glance" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <iframe src={MAPS_EMBED} className="h-[300px] w-full rounded-2xl border-0" loading="lazy" title="Map" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {nearby.map((n) => (
                <div key={n.t.en} className="flex items-center justify-between gap-3 border-b border-line-soft pb-2">
                  <span className="flex items-center gap-2.5 text-sm text-deep-brown"><n.Icon className="h-4 w-4 flex-shrink-0 text-terracotta" strokeWidth={1.6} /> {t(n.t)}</span>
                  <span className="flex-shrink-0 text-sm font-semibold text-deep-brown">{t(n.v)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-x-8 gap-y-2 rounded-2xl bg-paper px-6 py-4 text-sm text-warm-gray sm:flex-row">
            {nearbyBar.map((b) => (
              <span key={b.t.en} className="flex items-center gap-2"><b.Icon className="h-4 w-4 text-terracotta" /> {t(b.t)}</span>
            ))}
          </div>
          <p className="mt-3 text-center"><a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-terracotta hover:underline">{tr(lang, { it: "Apri su Google Maps →", en: "Open in Google Maps →" })}</a></p>
        </div>
      </section>

      {/* ===================== PRACTICAL INFO ===================== */}
      <section className="bg-paper py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-deep-brown md:text-3xl">{tr(lang, { it: "Info pratiche per il tuo soggiorno", en: "Practical info for your stay" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {practical.map((p) => (
              <div key={p.t.en} className="rounded-2xl border border-line bg-cream p-5 text-center">
                <p.Icon className="mx-auto h-7 w-7 text-terracotta" strokeWidth={1.5} />
                <h3 className="mt-3 font-semibold text-deep-brown">{t(p.t)}</h3>
                <p className="mt-1 text-xs leading-relaxed text-warm-gray">{t(p.s)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
