"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ImageSlider from "@/components/site/ImageSlider";
import {
  CigaretteOff,
  Clock,
  LogOut,
  MoonStar,
  PartyPopper,
  PawPrint,
  ShieldCheck,
  Tag,
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
    { Icon: I.pin, label: "Vicina a Fiumicino" },
    { Icon: I.key, label: "Casa intera" },
    { Icon: I.wifi, label: "Wi-Fi e parcheggio" },
    { Icon: I.whatsapp, label: "Contatto diretto" },
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
            className="font-serif text-7xl font-light leading-none text-white md:text-8xl"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            Atterra. Respira.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-2 font-serif text-4xl font-light text-white/90 md:text-5xl"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}
          >
            Sei già a casa.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-4 max-w-md text-lg leading-relaxed text-white/80"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            A pochi minuti dall&apos;aeroporto di Fiumicino, MiriAle Holiday
            House è una casa accogliente per chi viaggia, riparte o vuole
            vivere Roma e il litorale con più libertà.
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
                className="flex w-[140px] flex-shrink-0 flex-col rounded-xl border border-[#E5E0D8] bg-paper p-4 transition hover:shadow-md"
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
            style={{ backgroundColor: "#2D4A2D" }}
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
/*  GliSpazi (id="spazi") — 4 ambienti immersivi full-bleed                   */
/* -------------------------------------------------------------------------- */

function GliSpazi() {
  const ambienti = [
    {
      nome: "Ingresso & esterni",
      sub: "Giardino e parcheggio",
      imgs: [
        { src: "/images/house/house-29.jpg", alt: "Giardino di MiriAle" },
        { src: "/images/house/house-31.jpg", alt: "Giardino con sedute di MiriAle" },
        { src: "/images/house/house-17.jpg", alt: "Area relax in giardino di MiriAle" },
        { src: "/images/house/house-23.jpg", alt: "Ingresso di MiriAle" },
      ],
      features: [
        "Giardino privato con sedute",
        "Parcheggio gratuito in loco",
        "Casa intera, solo per te",
        "Wi-Fi gratuito e aria condizionata",
      ],
    },
    {
      nome: "Cucina",
      sub: "Attrezzata",
      imgs: [
        { src: "/images/house/house-30.jpg", alt: "Cucina di MiriAle" },
        { src: "/images/house/house-10.jpg", alt: "Angolo cottura di MiriAle" },
        { src: "/images/house/house-32.jpg", alt: "Forno a microonde in cucina" },
        { src: "/images/house/house-33.jpg", alt: "Bollitore e set caffè" },
      ],
      features: [
        "Forno, piano cottura e frigorifero",
        "Microonde, bollitore e set caffè",
        "Lavatrice a disposizione",
        "Tavolo da pranzo e TV",
      ],
    },
    {
      nome: "Camere",
      sub: "3 matrimoniali",
      imgs: [
        { src: "/images/house/house-09.jpg", alt: "Camera matrimoniale di MiriAle" },
        { src: "/images/house/house-28.jpg", alt: "Camera matrimoniale di MiriAle" },
        { src: "/images/house/house-05.jpg", alt: "Camera matrimoniale di MiriAle" },
        { src: "/images/house/house-26.jpg", alt: "Camera matrimoniale di MiriAle" },
        { src: "/images/house/house-06.jpg", alt: "Camera matrimoniale di MiriAle" },
      ],
      features: [
        "3 camere matrimoniali",
        "Biancheria curata e letti comodi",
        "Aria condizionata in ogni camera",
        "Armadio, comodini e alcune con balcone",
      ],
    },
    {
      nome: "Bagni",
      sub: "2 bagni privati",
      imgs: [
        { src: "/images/house/house-11.jpg", alt: "Bagno di MiriAle" },
        { src: "/images/house/house-12.jpg", alt: "Bagno di MiriAle" },
        { src: "/images/house/house-24.jpg", alt: "Bagno di MiriAle" },
        { src: "/images/house/house-20.jpg", alt: "Bagno di MiriAle" },
      ],
      features: [
        "2 bagni privati con doccia",
        "Asciugacapelli incluso",
        "Set di cortesia",
        "Riscaldamento autonomo",
      ],
    },
  ];

  return (
    <section
      id="spazi"
      className="border-b border-line-soft bg-ivory py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro: testo a sinistra, immagine grande a destra */}
        <div className="grid items-center gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, amount: 0.05 }}
          >
            <div className="text-xs font-medium uppercase tracking-widest text-terracotta">
              Entra nella casa
            </div>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-deep-brown md:text-5xl">
              Uno spazio pensato per chi viaggia.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-warm-gray">
              Raccontati senza fretta: 3 camere matrimoniali e 2 bagni, fino a
              6 ospiti.
            </p>
            <ul className="mt-7 space-y-3">
              {ambienti.map((a) => (
                <li
                  key={a.nome}
                  className="flex items-center gap-3 text-sm text-deep-brown"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                  {a.nome}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm md:aspect-[16/11]"
          >
            <ImageSlider
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              images={[
                { src: "/images/house/house-28.jpg", alt: "Camera matrimoniale di MiriAle" },
                { src: "/images/house/house-09.jpg", alt: "Camera matrimoniale di MiriAle" },
                { src: "/images/house/house-30.jpg", alt: "Cucina di MiriAle" },
                { src: "/images/house/house-31.jpg", alt: "Giardino di MiriAle" },
                { src: "/images/house/house-13.jpg", alt: "Terrazza di MiriAle" },
              ]}
            />
          </motion.div>
        </div>

        {/* Griglia ambienti */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ambienti.map((a, i) => (
            <motion.article
              key={a.nome}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              viewport={{ once: true, amount: 0.05 }}
              className="overflow-hidden rounded-2xl border border-line-soft bg-paper shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3]">
                <ImageSlider
                  images={a.imgs}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl text-deep-brown">
                    {a.nome}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-terracotta">
                    {a.sub}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {a.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm leading-relaxed text-warm-gray"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-terracotta" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA centrato */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/la-casa"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: "#2D4A2D" }}
          >
            Scopri la casa nel dettaglio
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
                style={{ backgroundColor: "#2D4A2D" }}
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
                  className="flex items-start gap-3 border-b border-[#E5E0D8] py-4"
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
  // PLACEHOLDER: img punta a foto della casa esistenti.
  const borghi = [
    {
      id: "spoleto",
      nome: "Spoleto",
      km: "20 km · 25 min",
      img: "/images/trevi-dall-alto-verso-casa.webp",
      cosa_vedere: [
        "Duomo di Spoleto",
        "Rocca Albornoziana",
        "Ponte delle Torri",
        "Teatro Romano",
      ],
      attivita: [
        "Festival dei Due Mondi (giugno-luglio)",
        "Trekking sulla Via di Francesco",
        "Degustazione vini Sagrantino",
        "Mercato settimanale del venerdì",
      ],
      desc: "Città d'arte e cultura, famosa per il Festival dei Due Mondi. Centro medievale intatto con monumenti romani e romanici.",
    },
    {
      id: "assisi",
      nome: "Assisi",
      km: "34 km · 40 min",
      img: "/images/vicolo-medievale.webp",
      cosa_vedere: [
        "Basilica di San Francesco",
        "Rocca Maggiore",
        "Tempio di Minerva",
        "Eremo delle Carceri",
      ],
      attivita: [
        "Pellegrinaggio e spiritualità",
        "Calendimaggio (maggio)",
        "Trekking sul Monte Subasio",
        "Olio extravergine umbro",
      ],
      desc: "Patrimonio UNESCO, città natale di San Francesco. Uno dei borghi più visitati d'Italia, tra fede, arte e panorami mozzafiato.",
    },
    {
      id: "montefalco",
      nome: "Montefalco",
      km: "12 km · 15 min",
      img: "/images/trevi-panorama.webp",
      cosa_vedere: [
        "Museo di San Francesco",
        "Torre Comunale",
        "Mura medievali",
        "Belvedere panoramico",
      ],
      attivita: [
        "Degustazione Sagrantino DOCG",
        "Vendemmia (settembre)",
        "Passeggio sul Corso Mameli",
        "Cantine e wine tour",
      ],
      desc: "La «Ringhiera dell'Umbria» per il panorama a 360°. Capitale del Sagrantino, uno dei vini rossi più potenti d'Italia.",
    },
    {
      id: "spello",
      nome: "Spello",
      km: "18 km · 20 min",
      img: "/images/trevi-dall-alto-verso-casa2.webp",
      cosa_vedere: [
        "Infiorate (Corpus Domini)",
        "Cappella Baglioni",
        "Porta Venere romana",
        "Pinacoteca civica",
      ],
      attivita: [
        "Infiorata di Spello (giugno)",
        "Trekking verso Collepino",
        "Degustazione olio DOP",
        "Ceramiche artigianali",
      ],
      desc: "Uno dei borghi più belli d'Italia. Famoso per le Infiorate di Corpus Domini e le sue strade fiorite tutto l'anno.",
    },
    {
      id: "foligno",
      nome: "Foligno",
      km: "12 km · 15 min",
      img: "/images/foto-finestre-verso-salottino-fuori.webp",
      cosa_vedere: [
        "Duomo di Foligno",
        "Palazzo Trinci",
        "Museo Diocesano",
        "Centro storico",
      ],
      attivita: [
        "Giostra della Quintana (giugno e settembre)",
        "Mercato dell'antiquariato",
        "Ristorazione tipica umbra",
        "Ciclovia del Clitunno",
      ],
      desc: "Vivace città di pianura, cuore commerciale dell'Umbria. La Giostra della Quintana è tra le rievocazioni medievali più spettacolari d'Italia.",
    },
  ];

  const [aperta, setAperta] = useState<string | null>(null);
  const toggleCitta = (id: string) =>
    setAperta((prev) => (prev === id ? null : id));
  const borgoAperto = borghi.find((b) => b.id === aperta);

  return (
    <section id="dintorni" className="bg-paper py-16">
      {/* TODO MiriAle: sezione "Scopri l'Umbria" lasciata invariata su richiesta del cliente — contenuti (borghi, immagini, accordion) da sostituire in un secondo momento */}
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl font-light text-deep-brown">
          Scopri l&apos;Umbria
        </h2>
        <p className="mt-1 text-sm text-warm-gray/65">
          Borghi, arte e natura a pochi minuti da Trevi.
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
                <Image
                  src={b.img}
                  alt={b.nome}
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover"
                />

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
            className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-[#E5E0D8] bg-paper text-deep-brown shadow-md transition hover:bg-[#fafaf9]"
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
                className={`flex-1 rounded-2xl border border-[#E5E0D8] bg-paper p-6 shadow-sm ${
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
            className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-[#E5E0D8] bg-paper text-deep-brown shadow-md transition hover:bg-[#fafaf9]"
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
        <div className="flex-shrink-0 border-r border-[#E5E0D8] pr-6 leading-tight">
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
    "mt-1 w-full border-b border-[#E5E0D8] bg-transparent py-2 text-sm text-deep-brown outline-none transition focus:border-deep-brown placeholder:text-warm-gray/50";
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
            Scrivici su WhatsApp o invia una richiesta: il proprietario ti
            risponderà direttamente.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="rounded-2xl border border-[#E5E0D8] bg-paper p-6 shadow-sm md:p-8"
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
                style={{ backgroundColor: "#2D4A2D" }}
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
              className="flex items-center gap-4 rounded-2xl border border-[#E5E0D8] bg-paper p-5 shadow-sm transition hover:shadow-md"
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
              className="flex items-center gap-4 rounded-2xl border border-[#E5E0D8] bg-paper p-5 shadow-sm transition hover:shadow-md"
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
            <div className="flex items-center gap-4 rounded-2xl border border-[#E5E0D8] bg-paper p-5 shadow-sm">
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

export default function Home() {
  return (
    <main className="flex-1">
      <HeroImage />
      <GalleryStrip />
      <Benvenuti />
      <Regole />
      <ServiziInclusi />
      <InfoCards />
      <GliSpazi />
      <DoveSiamo />
      <Dintorni />
      <Recensioni />
      <ContactForm />
      <CtaBanner />
    </main>
  );
}
