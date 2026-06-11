"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ImageSlider from "@/components/site/ImageSlider";
import BookingWidget from "@/components/site/BookingWidget";
import {
  Bath,
  BedDouble,
  Car,
  CigaretteOff,
  Clock,
  Home as HomeIcon,
  KeyRound,
  LogOut,
  MoonStar,
  PartyPopper,
  PawPrint,
  Plane,
  ShieldCheck,
  Star,
  Tag,
  Train,
  Users,
} from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ApprofondisciLink,
  EMAIL,
  I,
  MAPS_SHORT,
  WHATSAPP_DISPLAY,
  ease,
  mailto,
  waLink,
} from "@/lib/site";

/* -------------------------------------------------------------------------- */
/*  HeroImage — immagine fullscreen + testo + chips                           */
/* -------------------------------------------------------------------------- */

function HeroImage() {
  const chips = [
    { Icon: HomeIcon, label: "2 appartamenti" },
    { Icon: Users, label: "Fino a 8 ospiti" },
    { Icon: BedDouble, label: "4 camere" },
    { Icon: Bath, label: "2 bagni" },
    { Icon: Plane, label: "Aeroporto 10 min" },
    { Icon: Train, label: "Roma 32 min in treno" },
  ];

  return (
    <section
      id="top"
      className="relative isolate min-h-[90vh] overflow-hidden bg-deep-brown"
    >
      <Image
        src="/images/house/hero-home.jpg"
        alt="Camera matrimoniale di MiriAle Holiday House"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[90vh] items-center px-[8%] md:px-[10%]">
        <div className="max-w-xl py-24">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="font-serif text-6xl font-light leading-none text-white md:text-8xl"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            Due appartamenti a Fiumicino.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-2 font-serif text-3xl font-light text-white/90 md:text-5xl"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}
          >
            A 10 minuti dall&apos;aeroporto.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-4 max-w-md text-lg leading-relaxed text-white/80"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            Due appartamenti indipendenti (75 e 55 m²), da prenotare
            singolarmente o insieme come casa intera: fino a 4 camere, 2 bagni e
            8 ospiti. Giardino e parcheggio gratuito, Roma a 32 minuti di treno
            e il mare a pochi minuti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* CTA: WhatsApp diretto */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-deep-brown shadow-xl transition hover:bg-[#f5f5f4]"
            >
              <I.whatsapp className="h-4 w-4" />
              Scrivici su WhatsApp
            </a>
            {/* CTA secondaria: ancora in pagina */}
            <a
              href="#prenota"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/85 underline underline-offset-4 transition hover:text-white"
            >
              Richiedi disponibilità
            </a>
          </motion.div>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {chips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white/85 backdrop-blur"
              >
                <c.Icon className="h-3.5 w-3.5" />
                {c.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  GalleryStrip (orizzontale)                                                */
/* -------------------------------------------------------------------------- */

function GalleryStrip() {
  const photos = [
    { src: "/images/house/house-02.jpg", alt: "MiriAle Holiday House — zona giorno" },
    { src: "/images/house/house-30.jpg", alt: "MiriAle Holiday House — cucina" },
    { src: "/images/house/house-32.jpg", alt: "MiriAle Holiday House — forno a microonde" },
    { src: "/images/house/house-33.jpg", alt: "MiriAle Holiday House — bollitore e caffè" },
    { src: "/images/house/house-28.jpg", alt: "MiriAle Holiday House — camera matrimoniale" },
    { src: "/images/house/house-09.jpg", alt: "MiriAle Holiday House — camera matrimoniale" },
    { src: "/images/house/house-05.jpg", alt: "MiriAle Holiday House — camera matrimoniale" },
    { src: "/images/house/house-11.jpg", alt: "MiriAle Holiday House — bagno" },
    { src: "/images/house/house-12.jpg", alt: "MiriAle Holiday House — bagno" },
    { src: "/images/house/house-13.jpg", alt: "MiriAle Holiday House — terrazza" },
    { src: "/images/house/house-14.jpg", alt: "MiriAle Holiday House — panorama" },
    { src: "/images/house/house-29.jpg", alt: "MiriAle Holiday House — giardino" },
    { src: "/images/house/house-19.jpg", alt: "MiriAle Holiday House — colazione" },
  ];

  // Duplico la lista per un loop infinito senza stacco.
  const loop = [...photos, ...photos];

  return (
    <section
      id="galleria"
      className="relative overflow-hidden bg-paper py-6"
      aria-label="Galleria fotografica di MiriAle Holiday House"
    >
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: photos.length * 4.5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((p, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={p.src}
              alt={p.alt}
              width={400}
              height={300}
              sizes="(max-width: 768px) 280px, 340px"
              className="aspect-[4/3] h-52 w-auto rounded-xl object-cover md:h-64"
              priority={i < 2}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Benvenuti (id="la-casa")                                                  */
/* -------------------------------------------------------------------------- */

function Benvenuti() {
  const badges = [
    { Icon: I.pin, label: "Aeroporto a circa 6 km" },
    { Icon: I.key, label: "Casa intera" },
    { Icon: I.users, label: "Contatto diretto" },
  ];

  return (
    <section
      id="la-casa"
      className="border-b border-line-soft bg-ivory py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[60fr_40fr] md:gap-12 md:px-8">
        {/* Colonna sinistra */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-terracotta">
            Vicino a Fiumicino
          </div>
          <h2 className="mb-5 font-serif text-4xl font-light leading-tight text-deep-brown md:text-5xl">
            Uno spazio pensato per chi viaggia.
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-warm-gray md:text-lg">
            Tre camere matrimoniali e due bagni, raccontati senza fretta. A
            pochi minuti dall&apos;aeroporto di Fiumicino: privacy, spazio e
            tutti i comfort per chi viaggia, riparte o vuole vivere Roma e il
            litorale con più libertà.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f4] px-4 py-2 text-sm text-[#44403c]"
              >
                <b.Icon className="h-4 w-4 text-warm-gray" />
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Colonna destra: video del mare in loop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          viewport={{ once: true, amount: 0.05 }}
        >
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg md:h-80">
            {/* TODO MiriAle: in futuro può diventare un video in loop (.mp4).
                Per ora: foto reale della terrazza con vista. */}
            <Image
              src="/images/house/house-31.jpg"
              alt="Giardino di MiriAle Holiday House"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ServiziInclusi (chip orizzontali)                                         */
/* -------------------------------------------------------------------------- */

function ServiziInclusi() {
  const items = [
    { Icon: I.wifi, label: "Wi-Fi", subtitle: "Gratuito in tutta la casa" },
    { Icon: I.parking, label: "Parcheggio", subtitle: "Gratuito in loco" },
    {
      Icon: I.snowflake,
      label: "Aria condizionata",
      subtitle: "In casa",
    },
    { Icon: I.heat, label: "Riscaldamento", subtitle: "In casa" },
    { Icon: I.tv, label: "TV schermo piatto", subtitle: "In soggiorno" },
    { Icon: I.washer, label: "Lavatrice", subtitle: "A disposizione" },
    {
      Icon: I.family,
      label: "Camere familiari",
      subtitle: "Adatto a famiglie",
    },
    { Icon: I.key, label: "Casa intera", subtitle: "Privacy e spazio" },
  ];

  return (
    <section id="servizi" className="border-b border-line-soft bg-paper py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-wrap items-end gap-x-4 gap-y-1"
        >
          <h2 className="font-serif text-3xl font-light text-deep-brown">
            Servizi e comfort
          </h2>
          <span className="mb-1 text-base text-warm-gray/70">
            — Tutto quello che serve, già incluso.
          </span>
        </motion.div>

        <div className="scrollbar-hide mt-8 overflow-x-auto">
          <div className="flex gap-3">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
                viewport={{ once: true, amount: 0.05 }}
                className="flex w-[140px] flex-shrink-0 flex-col rounded-xl border border-[#d8e2e5] bg-paper p-4 transition hover:shadow-md"
              >
                <it.Icon className="mb-3 h-8 w-8 text-warm-gray" />
                <div className="text-sm font-semibold leading-tight text-deep-brown">
                  {it.label}
                </div>
                <div className="mt-0.5 text-xs leading-tight text-warm-gray/70">
                  {it.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  InfoCards — 3 motivi "Perché MiriAle" + card rating                       */
/* -------------------------------------------------------------------------- */

function GoogleWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-medium ${className}`} aria-label="Google">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function InfoCards() {
  const cardAnim = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
    viewport: { once: true, amount: 0.05 },
  });

  return (
    <section id="perche" className="border-b border-line-soft bg-ivory py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {/* Card 1 — Vicina all'aeroporto */}
          <motion.article
            {...cardAnim(0)}
            className="flex h-[420px] flex-col overflow-hidden rounded-2xl text-white"
            style={{ backgroundColor: "#1d4a5a" }}
          >
            <div className="relative flex flex-1 flex-col p-5">
              <span
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/40 text-sm font-semibold"
                aria-hidden="true"
              >
                01
              </span>
              <h3 className="pr-12 font-serif text-lg md:text-xl">
                Vicina all&apos;aeroporto
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Perfetta per arrivi serali, partenze all&apos;alba o scali
                lunghi. Senza lo stress dell&apos;hotel.
              </p>
              <a
                href="#dove-siamo"
                className="mt-auto pt-4 text-sm font-medium text-white/90 transition hover:text-white"
              >
                Scopri la posizione →
              </a>
            </div>
            <div className="relative h-[200px] flex-shrink-0">
              <Image
                src="/images/aereo-aeroporto.jpg"
                alt="Vicina all'aeroporto di Fiumicino"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.article>

          {/* Card 2 — Più comoda di una stanza d'hotel */}
          <motion.article
            {...cardAnim(0.1)}
            className="flex h-[420px] flex-col overflow-hidden rounded-2xl bg-cream-2"
          >
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-lg text-deep-brown md:text-xl">
                Più comoda di una stanza d&apos;hotel
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-deep-brown/75">
                Più spazio, privacy e libertà rispetto a una camera
                tradizionale. Una casa intera, solo per te.
              </p>
            </div>
            <div className="relative h-[200px] flex-shrink-0">
              <Image
                src="/images/house/house-19.jpg"
                alt="Colazione di benvenuto a MiriAle"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.article>

          {/* Card 3 — Base tra Roma e mare */}
          <motion.article
            {...cardAnim(0.2)}
            className="flex h-[420px] flex-col overflow-hidden rounded-2xl bg-cream-2"
          >
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-lg text-deep-brown md:text-xl">
                Base tra Roma e mare
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-deep-brown/75">
                Una posizione pratica per muoversi tra Fiumicino, Roma e il
                litorale, con i tuoi tempi.
              </p>
            </div>
            <div className="relative h-[200px] flex-shrink-0">
              <Image
                src="/images/base-roma-mare.jpg"
                alt="Spiaggia del litorale vicino a MiriAle"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.article>

          {/* Card 4 — Dicono di noi (rating) */}
          <motion.article
            {...cardAnim(0.3)}
            className="flex h-[420px] flex-col overflow-hidden rounded-2xl bg-paper p-6"
          >
            <h3 className="font-serif text-lg text-deep-brown md:text-xl">
              Dicono di noi
            </h3>
            <div className="mt-auto">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-serif text-5xl font-medium leading-none text-deep-brown">
                  4,9
                </span>
                <I.star className="h-5 w-5 text-[#FBBC05]" />
                <span className="ml-1 rounded-full bg-olive/15 px-2.5 py-1 text-xs font-medium text-olive-dark">
                  Eccellente
                </span>
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <I.star key={i} className="h-4 w-4 text-[#FBBC05]" />
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-warm-gray">
                Basato su 87 recensioni su <GoogleWordmark />
              </p>
            </div>
          </motion.article>
        </div>

        <div className="mt-10">
          <ApprofondisciLink href="/la-famiglia">
            Conosci la famiglia che ti accoglie
          </ApprofondisciLink>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  GliSpazi (id="spazi") — tour stanza per stanza con slider per ambiente    */
/* -------------------------------------------------------------------------- */

function GliSpazi() {
  const appartamenti = [
    {
      nome: "Appartamento 1",
      mq: "75 m²",
      sintesi:
        "Il più ampio: soggiorno, cucina in legno, due camere matrimoniali e un bagno. Fino a 4 ospiti.",
      stanze: [
        {
          nome: "Soggiorno e cucina",
          tag: "Zona giorno",
          descr:
            "Salotto con divano e TV a schermo piatto, aperto sulla cucina in legno. Si cucina davvero: forno, piano cottura, frigorifero, microonde, bollitore e moka per il caffè. Tavolo da pranzo, stoviglie e pentole; lavatrice a disposizione.",
          imgs: [
            { src: "/images/house/house-02.jpg", alt: "Soggiorno dell'Appartamento 1" },
            { src: "/images/house/house-10.jpg", alt: "Cucina in legno" },
            { src: "/images/house/house-30.jpg", alt: "Cucina e zona pranzo" },
          ],
          dotazioni: ["Divano e TV", "Forno e piano cottura", "Frigorifero", "Microonde", "Bollitore e moka", "Lavatrice", "Stoviglie e pentole", "Tavolo da pranzo"],
        },
        {
          nome: "Camera matrimoniale",
          tag: "Parete decorativa",
          descr:
            "Letto matrimoniale con parete decorativa e affaccio sul balcone. Aria condizionata e riscaldamento, armadio e comodini; lenzuola e asciugamani inclusi.",
          imgs: [
            { src: "/images/house/house-28.jpg", alt: "Camera matrimoniale con parete decorativa" },
            { src: "/images/house/house-34.jpg", alt: "Camera matrimoniale con parete decorativa" },
          ],
          dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio e comodini", "Balcone", "Biancheria inclusa"],
        },
        {
          nome: "Camera matrimoniale",
          tag: "Toni caldi",
          descr:
            "Seconda matrimoniale, luminosa e tranquilla, con pavimento in cotto. Aria condizionata e riscaldamento, armadio e comodini; lenzuola e asciugamani inclusi.",
          imgs: [
            { src: "/images/house/house-26.jpg", alt: "Camera matrimoniale" },
            { src: "/images/house/house-05.jpg", alt: "Camera matrimoniale" },
          ],
          dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio e comodini", "Biancheria inclusa"],
        },
        {
          nome: "Bagno",
          tag: "Classico",
          descr:
            "Bagno privato con doccia, rivestito in tono caldo. Phon, asciugamani e set di cortesia inclusi; acqua calda e riscaldamento.",
          imgs: [
            { src: "/images/house/house-35.jpg", alt: "Bagno classico" },
            { src: "/images/house/house-36.jpg", alt: "Bagno classico, doccia" },
          ],
          dotazioni: ["Doccia", "Phon", "Asciugamani inclusi", "Set di cortesia", "Acqua calda"],
        },
      ],
    },
    {
      nome: "Appartamento 2",
      mq: "55 m²",
      sintesi:
        "Mansardato e raccolto: cucina attrezzata, due camere matrimoniali sotto il tetto e un bagno moderno in marmo. Fino a 4 ospiti.",
      stanze: [
        {
          nome: "Cucina e zona pranzo",
          tag: "Attrezzata",
          descr:
            "Angolo cottura moderno con tutto il necessario: piano cottura, frigorifero, microonde, bollitore e moka. Stoviglie, pentole e tavolo da pranzo. Perfetta per una cena veloce o la colazione prima del volo.",
          imgs: [
            { src: "/images/house/house-38.jpg", alt: "Cucina dell'Appartamento 2" },
            { src: "/images/house/house-32.jpg", alt: "Forno a microonde" },
            { src: "/images/house/house-33.jpg", alt: "Bollitore e moka" },
          ],
          dotazioni: ["Piano cottura", "Frigorifero", "Microonde", "Bollitore e moka", "Stoviglie e pentole", "Tavolo da pranzo"],
        },
        {
          nome: "Camera matrimoniale",
          tag: "Mansardata · rosa",
          descr:
            "Matrimoniale mansardata dai toni caldi, con parete effetto pietra e soffitto spiovente. Aria condizionata e armadio; lenzuola e asciugamani inclusi. (Soffitto basso su un lato: tienine conto se sei molto alto.)",
          imgs: [
            { src: "/images/house/house-09.jpg", alt: "Camera matrimoniale mansardata" },
            { src: "/images/house/house-37.jpg", alt: "Camera matrimoniale mansardata" },
          ],
          dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio", "Soffitto mansardato", "Biancheria inclusa"],
        },
        {
          nome: "Camera matrimoniale",
          tag: "Mansardata · lucernario",
          descr:
            "Seconda matrimoniale mansardata, luminosa grazie al lucernario. Aria condizionata e armadio; lenzuola e asciugamani inclusi.",
          imgs: [
            { src: "/images/house/house-06.jpg", alt: "Camera matrimoniale con lucernario" },
            { src: "/images/house/house-21.jpg", alt: "Camera matrimoniale luminosa" },
          ],
          dotazioni: ["Letto matrimoniale", "Aria condizionata", "Lucernario", "Armadio", "Biancheria inclusa"],
        },
        {
          nome: "Bagno",
          tag: "Moderno in marmo",
          descr:
            "Bagno privato rivestito in marmo, con doccia. Phon, asciugamani e set di cortesia inclusi; acqua calda e riscaldamento.",
          imgs: [
            { src: "/images/house/house-11.jpg", alt: "Bagno in marmo" },
            { src: "/images/house/house-20.jpg", alt: "Lavabo del bagno in marmo" },
            { src: "/images/house/house-12.jpg", alt: "Bagno in marmo" },
          ],
          dotazioni: ["Doccia", "Phon", "Asciugamani inclusi", "Set di cortesia", "Acqua calda"],
        },
      ],
    },
  ];

  const esterni = {
    nome: "Giardino e spazi esterni",
    tag: "In comune",
    descr:
      "Giardino privato con sedute, balcone e terrazza per la colazione all'aperto, condivisi tra i due appartamenti. Parcheggio gratuito in loco: arrivi, lasci l'auto e sei a casa.",
    imgs: [
      { src: "/images/house/house-29.jpg", alt: "Giardino di MiriAle" },
      { src: "/images/house/house-31.jpg", alt: "Giardino con sedute" },
      { src: "/images/house/house-17.jpg", alt: "Area relax in giardino" },
      { src: "/images/house/house-13.jpg", alt: "Terrazza di MiriAle" },
      { src: "/images/house/house-22.jpg", alt: "Terrazza con vista" },
    ],
    dotazioni: ["Giardino privato", "Terrazza e balcone", "Parcheggio gratuito", "Colazione all'aperto"],
  };

  const [att, setAtt] = useState(0);
  const app = appartamenti[att];

  return (
    <section
      id="spazi"
      className="border-b border-line-soft bg-ivory py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-widest text-terracotta">
            Entra nella casa
          </div>
          <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-deep-brown md:text-5xl">
            Due appartamenti, una casa.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-warm-gray">
            Prenoti un singolo appartamento o tutta la casa. Scegli quale vuoi
            vedere: trovi ogni stanza con le sue foto e dotazioni.
          </p>
        </div>

        {/* Tab: scegli l'appartamento */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {appartamenti.map((a, idx) => (
            <button
              key={a.nome}
              type="button"
              onClick={() => setAtt(idx)}
              aria-pressed={att === idx}
              className={`rounded-2xl border px-5 py-3 text-left transition ${
                att === idx
                  ? "border-terracotta bg-paper shadow-card"
                  : "border-line bg-transparent hover:border-terracotta/50"
              }`}
            >
              <span className="block font-serif text-lg text-deep-brown">
                {a.nome}
              </span>
              <span className="block text-xs text-warm-gray">
                {a.mq} · {a.stanze.length} ambienti
              </span>
            </button>
          ))}
          <a
            href="#prenota"
            className="ml-auto hidden items-center text-sm font-medium text-terracotta underline-offset-4 hover:underline sm:inline-flex"
          >
            Oppure prenota tutta la casa →
          </a>
        </div>

        {/* Caratteristiche dell'appartamento scelto */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-deep-brown">
          <span className="inline-flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-warm-gray" /> 2 camere matrimoniali
          </span>
          <span className="inline-flex items-center gap-2">
            <Bath className="h-4 w-4 text-warm-gray" /> 1 bagno
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-warm-gray" /> fino a 4 ospiti
          </span>
          <span className="inline-flex items-center gap-2">
            <HomeIcon className="h-4 w-4 text-warm-gray" /> {app.mq}
          </span>
        </div>

        {/* Griglia ambienti — stile "Where you'll sleep" */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {app.stanze.map((s) => (
            <article key={s.nome + s.tag}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
                <ImageSlider
                  images={s.imgs}
                  autoplay={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="mt-3 font-medium text-deep-brown">{s.nome}</h3>
              <p className="text-sm text-terracotta">{s.tag}</p>
              <p className="mt-1 text-xs leading-relaxed text-warm-gray">
                {s.dotazioni.slice(0, 4).join(" · ")}
              </p>
            </article>
          ))}
        </div>

        {/* Spazi in comune */}
        <div className="mt-14">
          <h3 className="font-serif text-xl font-light text-deep-brown md:text-2xl">
            In comune ai due appartamenti
          </h3>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <ImageSlider
                images={esterni.imgs}
                autoplay={false}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-base leading-relaxed text-warm-gray">
                {esterni.descr}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {esterni.dotazioni.map((d) => (
                  <li
                    key={d}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cream-2 px-3 py-1 text-xs text-deep-brown"
                  >
                    <span className="h-1 w-1 rounded-full bg-terracotta" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/la-casa"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: "#1d4a5a" }}
          >
            Vedi tutte le foto e i dettagli
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  DoveSiamo (id="dove-siamo")                                               */
/* -------------------------------------------------------------------------- */

function DoveSiamo() {
  // TODO MiriAle: distanze/tempi dei punti aggiuntivi da verificare col cliente.
  const parcheggi = [
    {
      name: "Aeroporto di Fiumicino",
      address: "Roma Fiumicino (FCO)",
      distance: "circa 6 km · pochi minuti d'auto",
      type: "free" as const,
    },
    {
      name: "Centro di Fiumicino",
      address: "Servizi, bar e ristoranti",
      distance: "circa 3 km",
      type: "free" as const,
    },
    {
      name: "Spiagge del litorale",
      address: "Focene, Ostia Lido",
      distance: "da 3,9 km",
      type: "paid" as const,
    },
    {
      name: "Roma centro",
      address: "Treno FL1 / Leonardo Express",
      distance: "circa 30 min in treno",
      type: "paid" as const,
    },
    {
      name: "Ostia Antica",
      address: "Parco archeologico",
      distance: "breve tragitto in auto",
      type: "paid" as const,
    },
    {
      name: "Stazione Fiumicino Aeroporto",
      address: "Treni regionali per Roma",
      distance: "circa 6 km",
      type: "free" as const,
    },
  ];

  return (
    <section
      id="dove-siamo"
      className="border-b border-line-soft bg-cream py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.3fr] md:items-start md:gap-12">
          {/* Colonna 1 — Card mappa */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="overflow-hidden rounded-2xl bg-paper shadow-sm"
          >
            <div className="px-4 pt-4">
              <h3 className="font-serif text-xl font-semibold text-deep-brown">
                Dove siamo
              </h3>
              <p className="mt-0.5 text-sm text-warm-gray/80">
                Via Castagnevizza, 76 · Fiumicino (RM)
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps?q=Via%20Castagnevizza%2C%2076%2C%2000054%20Fiumicino%20RM&output=embed"
              className="mt-3 block h-48 w-full border-0"
              style={{ border: 0 }}
              loading="lazy"
              title="Mappa MiriAle Holiday House"
            />
            <div className="flex flex-wrap gap-3 p-4">
              <a
                href={MAPS_SHORT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "#1d4a5a" }}
              >
                <I.pin className="h-4 w-4" />
                Apri su Google Maps
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f4] px-4 py-2 text-sm text-warm-gray">
                <I.clock className="h-4 w-4" />
                Aeroporto — circa 6 km
              </span>
            </div>
          </motion.div>

          {/* Colonna 2 — Distanze rapide */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="md:pl-6 lg:pl-8"
          >
            <h3 className="mb-6 font-serif text-2xl font-light text-deep-brown">
              A pochi minuti da te
            </h3>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {parcheggi.map((p) => (
                <li
                  key={p.name}
                  className="flex items-start gap-3 border-b border-[#d8e2e5] py-4"
                >
                  <span
                    className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 text-sm font-bold"
                    style={{
                      borderColor: "#a8a29e",
                      color: "#78716c",
                    }}
                    aria-hidden="true"
                  >
                    P
                  </span>
                  <div className="flex-1 leading-tight">
                    <div className="text-sm font-semibold text-deep-brown">
                      {p.name}
                    </div>
                    <div className="mt-0.5 text-xs text-warm-gray/65">
                      {p.address}
                    </div>
                    <div className="mt-0.5 text-xs text-warm-gray/65">
                      {p.distance}
                    </div>
                  </div>
                  <span
                    className="mt-1 self-start rounded-full px-3 py-0.5 text-xs font-medium"
                    style={
                      p.type === "free"
                        ? { backgroundColor: "#D1EDDA", color: "#2D6A4F" }
                        : { backgroundColor: "#FDE8C8", color: "#92580A" }
                    }
                  >
                    {p.type === "free" ? "Vicino" : "In zona"}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-10">
          <ApprofondisciLink href="/cosa-fare-intorno">
            Vedi cosa fare intorno a MiriAle
          </ApprofondisciLink>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Dintorni (id="dintorni")                                                  */
/* -------------------------------------------------------------------------- */

function Dintorni() {
  const borghi = [
    {
      id: "aeroporto",
      nome: "Aeroporto di Fiumicino",
      km: "~10 min · 4 km",
      img: "/images/aereo-aeroporto.jpg",
      cosa_vedere: [
        "Aeroporto Leonardo da Vinci (FCO)",
        "A pochi minuti dalla casa",
        "Stazione treni in aeroporto",
        "Parcheggio gratuito alla casa",
      ],
      attivita: [
        "Voli all'alba o arrivi serali senza stress",
        "Transfer su richiesta con il proprietario",
        "Navetta aeroporto a pagamento",
        "Deposito bagagli prima/dopo il volo",
      ],
      desc: "L'aeroporto Leonardo da Vinci è a circa 10 minuti: ideale per voli presto la mattina o arrivi in tarda serata. Su richiesta, il proprietario organizza il transfer.",
    },
    {
      id: "mare",
      nome: "Mare e spiagge",
      km: "da ~10 min",
      img: "/images/base-roma-mare.jpg",
      cosa_vedere: [
        "Spiaggia di Fregene",
        "Focene e Maccarese",
        "Lungomare della Salute",
        "Tramonti sul Tirreno",
      ],
      attivita: [
        "Giornata in spiaggia",
        "Aperitivo al tramonto",
        "Stabilimenti e chalet storici",
        "Passeggiate sul lungomare",
      ],
      desc: "Il litorale romano a pochi minuti: Focene e Fregene, con i loro chalet e i tramonti sul mare, sono tra le mete preferite dai romani.",
    },
    {
      id: "roma",
      nome: "Roma",
      km: "~30 km · treno 32 min",
      img: "",
      cosa_vedere: [
        "Colosseo e Fori Imperiali",
        "Pantheon e Fontana di Trevi",
        "Basilica di San Pietro",
        "Trastevere",
      ],
      attivita: [
        "Roma in giornata col Leonardo Express",
        "Musei Vaticani",
        "Cena nel centro storico",
        "Shopping in via del Corso",
      ],
      desc: "La Città Eterna è a mezz'ora: il Leonardo Express collega l'aeroporto di Fiumicino a Roma Termini in circa 32 minuti, senza pensare all'auto.",
    },
    {
      id: "ostia-antica",
      nome: "Ostia Antica",
      km: "~20 min in auto",
      img: "",
      cosa_vedere: [
        "Teatro romano",
        "Terme di Nettuno",
        "Domus e mosaici",
        "Decumano Massimo",
      ],
      attivita: [
        "Visita al parco archeologico",
        "Gita culturale di mezza giornata",
        "Trenino Roma–Lido",
        "Picnic nel verde",
      ],
      desc: "Uno dei siti archeologici meglio conservati d'Italia: l'antica città portuale di Roma, a due passi. Bastano 2–3 ore per il percorso principale.",
    },
    {
      id: "porto-fiumicino",
      nome: "Porto di Fiumicino",
      km: "~10 min",
      img: "",
      cosa_vedere: [
        "Porto-canale",
        "Lungomare e faro",
        "Mercato del pesce",
        "Necropoli di Porto",
      ],
      attivita: [
        "Cena di pesce fresco",
        "Passeggiata sul porto",
        "Aperitivo vista mare",
        "Gita in barca",
      ],
      desc: "Fiumicino è famosa per il pesce: lungo il porto-canale trovi alcune delle migliori tavole di mare della zona.",
    },
  ];

  const [aperta, setAperta] = useState<string | null>(null);
  const toggleCitta = (id: string) =>
    setAperta((prev) => (prev === id ? null : id));
  const borgoAperto = borghi.find((b) => b.id === aperta);

  return (
    <section id="dintorni" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl font-light text-deep-brown">
          Cosa c&apos;è intorno
        </h2>
        <p className="mt-1 text-sm text-warm-gray/65">
          Aeroporto, mare e Roma: tutto a portata di soggiorno.
        </p>

        <div className="scrollbar-hide mt-8 overflow-x-auto">
          <div className="flex gap-4">
            {borghi.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease }}
                viewport={{ once: true, amount: 0.05 }}
                className="relative h-72 w-56 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl md:w-64"
              >
                {/* Fallback gradiente sotto l'Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-cream-2) 0%, var(--color-stone) 100%)",
                  }}
                />
                {b.img && (
                  <Image
                    src={b.img}
                    alt={b.nome}
                    fill
                    sizes="(max-width: 768px) 224px, 256px"
                    className="object-cover"
                  />
                )}

                {/* Overlay scuro dal basso */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
                  }}
                />

                {/* Contenuto in basso */}
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="font-serif text-lg font-semibold text-white">
                    {b.nome}
                  </div>
                  <div className="text-sm text-white/70">{b.km}</div>
                  <button
                    type="button"
                    onClick={() => toggleCitta(b.id)}
                    className="mt-1 cursor-pointer text-xs text-white/90 underline transition hover:text-white"
                  >
                    Scopri di più →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pannello espandibile */}
        <AnimatePresence>
          {borgoAperto && (
            <motion.div
              key={borgoAperto.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-2xl bg-[#fafaf9] p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-deep-brown">
                      {borgoAperto.nome}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-warm-gray">
                      {borgoAperto.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAperta(null)}
                    aria-label="Chiudi pannello"
                    className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full text-2xl leading-none text-deep-brown transition hover:bg-cream"
                  >
                    ×
                  </button>
                </div>
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-warm-gray">
                      Cosa vedere
                    </h4>
                    <ul className="space-y-2">
                      {borgoAperto.cosa_vedere.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-deep-brown"
                        >
                          <I.eye className="mt-0.5 h-4 w-4 flex-shrink-0 text-olive" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-warm-gray">
                      Cosa fare
                    </h4>
                    <ul className="space-y-2">
                      {borgoAperto.attivita.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-deep-brown"
                        >
                          <I.sparkle className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Recensioni                                                                */
/* -------------------------------------------------------------------------- */

function Recensioni() {
  const recensioni = [
    {
      nome: "Giulia & Marco",
      luogo: "Milano, Italia",
      avatar: "/images/avatar-famiglia.webp",
      stelle: 5,
      testo:
        "Casa meravigliosa, vista spettacolare e posizione perfetta. Torneremo!",
    },
    {
      nome: "Thomas & Anna",
      luogo: "Berlino, Germania",
      avatar: "/images/avatar-marco.webp",
      stelle: 5,
      testo:
        "Tutto perfetto: pulizia, comfort e attenzione ai dettagli. Consigliatissima!",
    },
    {
      nome: "Laura",
      luogo: "Roma, Italia",
      avatar: "/images/avatar-chiara.webp",
      stelle: 5,
      testo:
        "Atmosfera autentica e host gentilissimo. Ci siamo sentiti a casa.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const len = recensioni.length;
  const visible = Array.from(
    { length: 3 },
    (_, i) => recensioni[(current + i) % len],
  );
  const prev = () => setCurrent((c) => (c - 1 + len) % len);
  const next = () => setCurrent((c) => (c + 1) % len);

  return (
    <section id="recensioni" className="bg-ivory py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-serif text-3xl font-light text-deep-brown">
          Cosa dicono i nostri ospiti
        </h2>

        <div className="flex items-center gap-3 md:gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Recensione precedente"
            className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-[#d8e2e5] bg-paper text-deep-brown shadow-md transition hover:bg-[#fafaf9]"
          >
            <span className="-mt-0.5 text-2xl leading-none">‹</span>
          </button>

          <div className="flex flex-1 gap-4 md:gap-6">
            {visible.map((r, i) => (
              <motion.article
                key={`${r.nome}-${current}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                viewport={{ once: true, amount: 0.05 }}
                className={`flex-1 rounded-2xl border border-[#d8e2e5] bg-paper p-6 shadow-sm ${
                  i === 1 ? "hidden md:block" : ""
                } ${i === 2 ? "hidden lg:block" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={r.avatar}
                    alt={r.nome}
                    width={80}
                    height={80}
                    sizes="48px"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-deep-brown">
                      {r.nome}
                    </div>
                    <div className="text-xs text-warm-gray/65">{r.luogo}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5 text-lg text-yellow-400">
                  {Array.from({ length: r.stelle }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-warm-gray">
                  {r.testo}
                </p>
              </motion.article>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Recensione successiva"
            className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-[#d8e2e5] bg-paper text-deep-brown shadow-md transition hover:bg-[#fafaf9]"
          >
            <span className="-mt-0.5 text-2xl leading-none">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Regole — Informazioni utili                                               */
/* -------------------------------------------------------------------------- */

function Regole() {
  const rules = [
    { Icon: Clock, label: "Check-in", sub: "15:00 — 00:00" },
    { Icon: LogOut, label: "Check-out", sub: "01:00 — 11:00" },
    { Icon: CigaretteOff, label: "Non fumare", sub: "in tutta la struttura" },
    { Icon: PawPrint, label: "Animali", sub: "non ammessi" },
    { Icon: PartyPopper, label: "Feste o eventi", sub: "non consentiti" },
    { Icon: MoonStar, label: "Bambini", sub: "tutte le età" },
    { Icon: Tag, label: "Culla 0–1 anno", sub: "€10/soggiorno · su richiesta" },
  ];
  return (
    <section className="bg-cream py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6">
        <div className="flex-shrink-0 border-r border-[#d8e2e5] pr-6 leading-tight">
          <div className="font-serif text-lg font-semibold text-deep-brown">
            Informazioni
          </div>
          <div className="font-serif text-lg font-semibold text-deep-brown">
            utili
          </div>
        </div>

        {rules.map((r) => (
          <div
            key={r.label}
            className="flex flex-col items-center text-center"
          >
            <r.Icon className="h-5 w-5 text-warm-gray/70" strokeWidth={1.5} />
            <div className="mt-1.5 text-sm leading-tight text-deep-brown">
              {r.label}
            </div>
            <div className="text-xs leading-tight text-warm-gray/65">
              {r.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ContactForm (id="prenota") — modulo veloce 6 campi                        */
/* -------------------------------------------------------------------------- */

function ContactForm() {
  const fieldClass =
    "mt-1 w-full border-b border-[#d8e2e5] bg-transparent py-2 text-sm text-deep-brown outline-none transition focus:border-deep-brown placeholder:text-warm-gray/50";
  const labelClass =
    "text-[10px] uppercase tracking-[0.22em] text-warm-gray";

  return (
    <section
      id="prenota"
      className="border-b border-line-soft bg-ivory py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="font-serif text-3xl font-light text-deep-brown md:text-4xl"
          >
            Vuoi sapere se la casa è libera nelle tue date?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-warm-gray"
          >
            Scegli le date e il numero di ospiti: ti rispondiamo su WhatsApp e
            confermiamo tutto in chat. Nessun pagamento online.
          </motion.p>
        </div>

        <div className="mx-auto mb-12 max-w-md">
          <BookingWidget />
        </div>

        <p className="mb-8 text-center text-sm text-warm-gray">
          Preferisci scriverci? Usa il modulo o i contatti diretti qui sotto.
        </p>

        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="rounded-2xl border border-[#d8e2e5] bg-paper p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Nome *</label>
                <input
                  type="text"
                  required
                  placeholder="Il tuo nome"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  required
                  placeholder="email@esempio.it"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass}>Telefono</label>
                <input
                  type="tel"
                  placeholder="+39 ..."
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass}>Check-in</label>
                <input type="date" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Check-out</label>
                <input type="date" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Messaggio</label>
                <textarea
                  rows={4}
                  placeholder="Date, numero di ospiti, domande…"
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[12px] text-warm-gray/70">
                Modulo dimostrativo. Per una risposta immediata, scrivici su
                WhatsApp.
              </p>
              <a
                href={mailto}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "#1d4a5a" }}
              >
                <I.mail className="h-4 w-4" />
                Invia richiesta
              </a>
            </div>
          </motion.form>

          {/* Info contatti */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col gap-3"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#d8e2e5] bg-paper p-5 shadow-sm transition hover:shadow-md"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
                <I.whatsapp className="h-5 w-5" />
              </span>
              <div className="flex-1 leading-tight">
                <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                  WhatsApp
                </div>
                <div className="text-sm font-medium text-deep-brown">
                  {WHATSAPP_DISPLAY}
                </div>
              </div>
            </a>
            <a
              href={mailto}
              className="flex items-center gap-4 rounded-2xl border border-[#d8e2e5] bg-paper p-5 shadow-sm transition hover:shadow-md"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
                <I.mail className="h-5 w-5" />
              </span>
              <div className="flex-1 leading-tight">
                <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                  Email
                </div>
                <div className="break-all text-sm font-medium text-deep-brown">
                  {EMAIL}
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-[#d8e2e5] bg-paper p-5 shadow-sm">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
                <I.pin className="h-5 w-5" />
              </span>
              <div className="flex-1 leading-tight">
                <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                  Indirizzo
                </div>
                <div className="text-sm text-deep-brown">
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-8 text-center">
          <ApprofondisciLink href="/contatti">
            Vai alla pagina contatti completa
          </ApprofondisciLink>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CtaBanner                                                                 */
/* -------------------------------------------------------------------------- */

function CtaBanner() {
  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[500px]">
      <Image
        src="/images/house/house-14.jpg"
        alt="Panorama dalla terrazza di MiriAle Holiday House"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-4 font-serif text-4xl font-light text-white md:text-5xl"
          style={{ textShadow: "0 2px 18px rgba(0,0,0,0.35)" }}
        >
          Vuoi sapere se la casa è libera nelle tue date?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-8 max-w-xl text-lg text-white/80"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.3)" }}
        >
          Scrivici su WhatsApp o invia una richiesta: il proprietario ti
          risponderà direttamente.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-deep-brown transition hover:bg-[#f5f5f4]"
          >
            Scrivici su WhatsApp
          </a>
          <span className="inline-flex cursor-default items-center gap-2 text-sm text-white/80 underline underline-offset-4 transition hover:text-white">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
            Contatto diretto col proprietario
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  Highlights (stile Airbnb)                                                  */
/* -------------------------------------------------------------------------- */

function Highlights() {
  const items = [
    {
      Icon: KeyRound,
      t: "Self check-in con keybox",
      s: "Arrivi e parti quando vuoi: codice e cassetta di sicurezza, comodo anche per voli notturni.",
    },
    {
      Icon: Plane,
      t: "A 10 minuti dall'aeroporto",
      s: "Leonardo da Vinci a un passo. Su richiesta, transfer con l'host.",
    },
    {
      Icon: Star,
      t: "8.8 su Booking",
      s: "122 recensioni verificate: pulizia e accoglienza al primo posto.",
    },
    {
      Icon: Car,
      t: "Parcheggio gratuito in loco",
      s: "Lasci l'auto e sei a casa. Zona residenziale tranquilla e silenziosa.",
    },
  ];

  return (
    <section className="border-b border-line-soft bg-paper py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="bg-paper p-6">
              <it.Icon className="h-6 w-6 text-terracotta" />
              <h3 className="mt-4 font-medium text-deep-brown">{it.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-warm-gray">
                {it.s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  HostStrip — anteprima host (stile Airbnb "Meet your host")                */
/* -------------------------------------------------------------------------- */

function HostStrip() {
  return (
    <section className="border-b border-line-soft bg-ivory py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-paper p-7 shadow-sm sm:flex-row sm:items-center md:p-9">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-deep-brown font-serif text-2xl text-white">
            F
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium uppercase tracking-widest text-terracotta">
              Conosci l&apos;host
            </div>
            <h2 className="mt-1 font-serif text-2xl font-light text-deep-brown">
              Ti ospitano Fabio e la sua famiglia
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-warm-gray">
              Host attento e sempre raggiungibile: ti accoglie all&apos;arrivo,
              ti dà una mano col parcheggio e — se serve — viene a prenderti in
              aeroporto. Conosce Fiumicino e Roma come le sue tasche.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-1.5 text-deep-brown">
                <Star className="h-4 w-4 text-terracotta" /> 8.8 · 122 recensioni
              </span>
              <Link
                href="/la-famiglia"
                className="font-medium text-terracotta underline-offset-4 hover:underline"
              >
                Scopri la famiglia →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <HeroImage />
      <GalleryStrip />
      <Highlights />
      <HostStrip />
      <Benvenuti />
      <GliSpazi />
      <ServiziInclusi />
      <InfoCards />
      <Recensioni />
      <DoveSiamo />
      <Dintorni />
      <Regole />
      <ContactForm />
      <CtaBanner />
    </main>
  );
}
