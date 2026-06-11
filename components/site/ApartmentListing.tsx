"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Car,
  Check,
  CigaretteOff,
  Clock,
  Home as HomeIcon,
  LogOut,
  PartyPopper,
  PawPrint,
  Plane,
  Star,
  Users,
} from "lucide-react";
import ImageSlider from "@/components/site/ImageSlider";
import BookingWidget from "@/components/site/BookingWidget";
import { I, MAPS_EMBED, MAPS_SHORT, waLink } from "@/lib/site";
import { type Appartamento, RECENSIONI } from "@/lib/apartments";

export default function ApartmentListing({ apt }: { apt: Appartamento }) {
  const altro = apt.slug === "miri" ? "ale" : "miri";
  const altroNome = apt.slug === "miri" ? "Ale" : "Miri";

  const stats = [
    { Icon: HomeIcon, label: apt.mq },
    { Icon: Users, label: `fino a ${apt.ospiti} ospiti` },
    { Icon: BedDouble, label: `${apt.camere} camere matrimoniali` },
    { Icon: Bath, label: `${apt.bagni} bagno` },
  ];
  const highlights = [
    { Icon: Users, t: "Ti accoglie l'host", s: "Fabio vi aspetta all'arrivo, niente check-in automatico." },
    { Icon: Plane, t: "Aeroporto a 10 minuti", s: "Transfer da/per Fiumicino con l'host, su richiesta." },
    { Icon: Car, t: "Parcheggio gratuito", s: "In loco, in una zona residenziale silenziosa." },
  ];
  const daSapere = [
    { Icon: Clock, t: "Check-in", s: "dalle 15:00 alle 24:00" },
    { Icon: LogOut, t: "Check-out", s: "entro le 11:00" },
    { Icon: CigaretteOff, t: "Non fumatori", s: "in tutta la struttura" },
    { Icon: PawPrint, t: "Animali", s: "non ammessi" },
    { Icon: PartyPopper, t: "Feste ed eventi", s: "non consentiti" },
    { Icon: Users, t: "Età minima", s: "18 anni per il check-in" },
  ];

  return (
    <main className="flex-1">
      {/* Galleria a mosaico */}
      <section className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
        <div className="grid auto-rows-[120px] grid-cols-4 gap-2 sm:auto-rows-[150px] md:auto-rows-[180px]">
          <div className="relative col-span-4 row-span-2 overflow-hidden rounded-2xl md:col-span-2">
            <ImageSlider images={apt.gallery} sizes="(max-width:768px) 100vw, 50vw" priority />
          </div>
          {apt.gallery.slice(1, 5).map((g) => (
            <div key={g.src + g.alt} className="relative col-span-2 overflow-hidden rounded-xl md:col-span-1">
              <Image src={g.src} alt={g.alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Intestazione + colonne */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="md:grid md:grid-cols-[1fr_360px] md:gap-12">
          {/* Colonna principale */}
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-terracotta">
              Appartamento
            </div>
            <h1 className="mt-1 font-serif text-4xl font-light text-deep-brown md:text-5xl">
              {apt.nome}
            </h1>
            <p className="mt-2 text-base text-warm-gray">{apt.tagline}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-deep-brown">
              {stats.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-2">
                  <s.Icon className="h-4 w-4 text-warm-gray" /> {s.label}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Star className="h-4 w-4 fill-current text-terracotta" /> 8.8 · 122 recensioni
              </span>
            </div>

            {/* Descrizione */}
            <p className="mt-8 max-w-2xl border-t border-line-soft pt-8 text-base leading-relaxed text-warm-gray">
              {apt.descrizione}
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-5 border-t border-line-soft pt-8 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.t}>
                  <h.Icon className="h-6 w-6 text-terracotta" />
                  <h3 className="mt-3 font-medium text-deep-brown">{h.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-warm-gray">{h.s}</p>
                </div>
              ))}
            </div>

            {/* Cosa offre */}
            <div className="mt-10 border-t border-line-soft pt-8">
              <h2 className="font-serif text-2xl font-light text-deep-brown">
                Cosa offre questo appartamento
              </h2>
              <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {apt.servizi.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-sm text-deep-brown">
                    <Check className="h-4 w-4 flex-shrink-0 text-terracotta" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Ambienti */}
            <div className="mt-10 border-t border-line-soft pt-8">
              <h2 className="font-serif text-2xl font-light text-deep-brown">
                Gli ambienti
              </h2>
              <div className="mt-8 space-y-12">
                {apt.stanze.map((s, i) => (
                  <article
                    key={s.nome + s.tag}
                    className={`grid items-center gap-6 md:grid-cols-2 md:gap-10 ${
                      i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
                      <ImageSlider images={s.imgs} sizes="(max-width:768px) 100vw, 40vw" />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-terracotta">
                        {s.tag}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-light text-deep-brown md:text-2xl">
                        {s.nome}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-warm-gray">{s.descr}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.dotazioni.map((d) => (
                          <li key={d} className="rounded-full bg-cream-2 px-3 py-1 text-xs text-deep-brown">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Colonna prenota (sticky) */}
          <aside className="mt-10 md:mt-0">
            <div className="md:sticky md:top-[84px]">
              <BookingWidget appartamento={apt.nome} />
            </div>
          </aside>
        </div>
      </section>

      {/* Recensioni */}
      <section className="border-t border-line-soft bg-bone py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end gap-4">
            <span className="font-serif text-5xl font-light leading-none text-deep-brown">8.8</span>
            <div className="pb-1">
              <div className="flex gap-0.5 text-terracotta">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-1 text-sm text-warm-gray">Ottimo · 122 recensioni verificate</div>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RECENSIONI.map((r) => (
              <figure key={r.testo} className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
                <div className="flex gap-0.5 text-terracotta">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-deep-brown">“{r.testo}”</blockquote>
                <figcaption className="mt-4 text-xs text-warm-gray">{r.meta}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Da sapere + Mappa */}
      <section className="border-t border-line-soft bg-paper py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="font-serif text-2xl font-light text-deep-brown">Da sapere</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {daSapere.map((d) => (
                <li key={d.t} className="flex items-start gap-3">
                  <d.Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-warm-gray" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-deep-brown">{d.t}</div>
                    <div className="text-xs text-warm-gray">{d.s}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-light text-deep-brown">Dove ti troverai</h2>
            <p className="mt-2 text-sm text-warm-gray">
              Fiumicino — a 10 min dall&apos;aeroporto, 32 min in treno da Roma, pochi minuti dal mare.
            </p>
            <iframe
              src={MAPS_EMBED}
              className="mt-4 block h-[260px] w-full rounded-2xl border-0"
              loading="lazy"
              title={`Mappa appartamento ${apt.nome}`}
            />
            <a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta hover:underline">
              <I.pin className="h-4 w-4" /> Apri su Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA finale + altro appartamento */}
      <section className="bg-deep-brown py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl font-light md:text-3xl">
            Ti piace {apt.nome}? Verifica le date.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80">
            Ti rispondiamo su WhatsApp e confermiamo tutto in chat. Nessun pagamento online.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink(apt.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-deep-brown transition hover:opacity-90"
            >
              <I.whatsapp className="h-4 w-4" /> Prenota {apt.nome}
            </a>
            <Link href={`/${altro}`} className="text-sm font-medium text-white/85 underline-offset-4 hover:underline">
              Guarda anche {altroNome} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
