"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Armchair,
  Bath,
  BedDouble,
  CigaretteOff,
  Clock,
  LogOut,
  MoonStar,
  PartyPopper,
  PawPrint,
  ShieldCheck,
  Tag,
  UtensilsCrossed,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const WHATSAPP_NUMBER = "393453224567";
const WHATSAPP_DISPLAY = "+39 345 322 4567";
const EMAIL = "info@anticaloggia.it";
const ADDRESS_LINE_1 = "Vicolo del Tempio 4";
const ADDRESS_LINE_2 = "06039 Trevi (PG), Umbria";

const waLink = (msg = "Ciao! Vorrei avere informazioni su Antica Loggia.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const mailto = `mailto:${EMAIL}`;

const NAV = [
  { label: "La casa", href: "#la-casa" },
  { label: "Servizi", href: "#servizi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Dove siamo", href: "#dove-siamo" },
  { label: "Cosa fare", href: "#dintorni" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#prenota" },
];

// Curva di easing comune per le animazioni viewport-triggered
const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

// Foto della galleria (orizzontale)
const GALLERY = [
  { src: "/images/salone-verso-camino.webp", alt: "Salone con camino acceso" },
  { src: "/images/salone-verso-finestre-2.webp", alt: "Salone con finestre sulla Valle Umbra" },
  { src: "/images/salone-verso-finestre.webp", alt: "Salone, prospettiva verso le finestre" },
  { src: "/images/camera-matrimoniale.webp", alt: "Camera matrimoniale" },
  { src: "/images/camera-padronale.webp", alt: "Camera padronale" },
  { src: "/images/finestra-verso-fuori.webp", alt: "Finestra con vista sulla Valle Umbra" },
  { src: "/images/finestra-verso-fuori2.webp", alt: "Vista panoramica dalla finestra" },
  { src: "/images/finestra-verso-fuori3.webp", alt: "Finestra sui tetti del borgo" },
  { src: "/images/foto-finestre-verso-salottino-fuori.webp", alt: "La Loggia con i sette finestroni" },
  { src: "/images/trevi-dall-alto-verso-casa.webp", alt: "Vista aerea di Trevi e della Valle Umbra" },
  { src: "/images/bagno-padronale.webp", alt: "Bagno padronale" },
  { src: "/images/trevi-panorama.webp", alt: "Panorama di Trevi al tramonto" },
];

// Recensioni
const REVIEWS = [
  {
    avatar: "/images/avatar-chiara.webp",
    name: "Chiara M.",
    city: "Milano",
    stars: 5,
    text: "Un posto meraviglioso. La loggia al tramonto è indimenticabile. Casa curatissima, ogni dettaglio racconta la storia del luogo. Torneremo sicuramente.",
  },
  {
    avatar: "/images/avatar-marco.webp",
    name: "Marco e Laura",
    city: "Roma",
    stars: 5,
    text: "Abbiamo festeggiato il nostro anniversario ad Antica Loggia. Il silenzio, la vista, l'autenticità umbra. Un'esperienza fuori dal tempo.",
  },
  {
    avatar: "/images/avatar-famiglia.webp",
    name: "Familie Becker",
    city: "Monaco",
    stars: 5,
    text: "Wunderschönes Haus in einer magischen Lage. Perfekte Ausstattung, ruhige Atmosphäre, traumhafte Aussicht auf Trevi. Empfehlenswert!",
  },
];

/* -------------------------------------------------------------------------- */
/*  Inline icons                                                              */
/* -------------------------------------------------------------------------- */

type IconProps = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const I = {
  whatsapp: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.5 3.5A10.4 10.4 0 0 0 12 0C6 0 1.2 4.8 1.2 10.7c0 1.9.5 3.7 1.4 5.3L1 22l6.2-1.6a10.7 10.7 0 0 0 4.8 1.2h.1c5.9 0 10.7-4.8 10.7-10.7 0-2.9-1.1-5.5-3.3-7.4Zm-8.4 16.4a8.8 8.8 0 0 1-4.5-1.2l-.3-.2-3.7 1 1-3.6-.2-.3a8.8 8.8 0 1 1 16.3-4.7c0 4.9-4 8.9-8.6 9Zm4.9-6.7c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.5-.4-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  ),
  mail: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  pin: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  instagram: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  facebook: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.9 1.9-1.9H17V2.1c-.3 0-1.5-.1-2.8-.1C11.3 2 10 3.7 10 6.8V10H7v4h3v8h3Z" />
    </svg>
  ),
  star: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="m12 2 3 7 7 .6-5.4 4.7 1.7 7L12 17.3 5.7 21.3l1.7-7L2 9.6 9 9Z" />
    </svg>
  ),
  wifi: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 12.55a11 11 0 0 1 14 0" />
      <path d="M2 8.82a16 16 0 0 1 20 0" />
      <path d="M8.5 16.43a6 6 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  ),
  parking: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M10 17V8h3.5a2.5 2.5 0 0 1 0 5H10" />
    </svg>
  ),
  kitchen: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
      <path d="M7 11V6a5 5 0 0 1 10 0v5" />
      <path d="M9 15h6" />
    </svg>
  ),
  ac: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
    </svg>
  ),
  heat: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  ),
  washer: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="14" r="4" />
      <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="11" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  bed: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M3 18V8M3 12h18v6M21 18V11a3 3 0 0 0-3-3h-7v4" />
      <circle cx="7" cy="11" r="2" />
    </svg>
  ),
  users: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M15 20a5 5 0 0 1 7-4.6" />
    </svg>
  ),
  clock: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  key: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="8" cy="14" r="4" />
      <path d="m11 11 9-9M16 6l3 3" />
    </svg>
  ),
  smoke: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  music: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  paw: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="6" cy="10" r="2" />
      <circle cx="10" cy="6" r="2" />
      <circle cx="14" cy="6" r="2" />
      <circle cx="18" cy="10" r="2" />
      <path d="M8 17a4 4 0 0 1 8 0c0 2.2-1.8 3-4 3s-4-.8-4-3Z" />
    </svg>
  ),
  heart: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" />
    </svg>
  ),
  calendar: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  ),
  arrow: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arch: ({ className }: IconProps) => (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M4 28V14a12 12 0 0 1 24 0v14" />
      <path d="M2 28h28" />
    </svg>
  ),
  eye: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  column: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 4h14v3H5zM5 17h14v3H5zM8 7v10M16 7v10M12 7v10" />
    </svg>
  ),
  snowflake: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
      <path d="M12 6l-2 2M12 6l2 2M12 18l-2-2M12 18l2-2" />
      <path d="M6 12l2-2M6 12l2 2M18 12l-2-2M18 12l-2 2" />
    </svg>
  ),
  tv: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </svg>
  ),
  family: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="12" cy="14" r="2" />
      <path d="M3 17a4 4 0 0 1 8 0v3M13 17a4 4 0 0 1 8 0v3M9 21v-2a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  play: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M8 5v14l11-7Z" />
    </svg>
  ),
  sparkle: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Olive branch decorative SVG (used in Footer)                              */
/* -------------------------------------------------------------------------- */

function OliveBranch({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 360"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <g fill="none" stroke="#6e7a4a" strokeWidth="1.4" strokeLinecap="round">
        <path d="M40 350 C 80 280, 100 200, 120 130 S 150 40, 170 10" opacity="0.85" />
        <path d="M120 130 C 100 110, 80 100, 60 110" opacity="0.5" />
        <path d="M130 90 C 145 75, 155 60, 158 40" opacity="0.5" />
        <path d="M110 180 C 90 175, 75 168, 65 158" opacity="0.5" />
        <path d="M95 230 C 75 220, 60 215, 48 220" opacity="0.5" />
        <path d="M82 280 C 65 280, 52 285, 45 295" opacity="0.5" />
        <path d="M140 60 C 158 55, 170 45, 175 30" opacity="0.5" />
      </g>
      <g fill="#6e7a4a" opacity="0.78">
        <ellipse cx="155" cy="14" rx="14" ry="5.5" transform="rotate(-32 155 14)" />
        <ellipse cx="170" cy="32" rx="13" ry="5" transform="rotate(20 170 32)" />
        <ellipse cx="142" cy="48" rx="14" ry="5.5" transform="rotate(-50 142 48)" />
        <ellipse cx="158" cy="62" rx="13" ry="5" transform="rotate(28 158 62)" />
        <ellipse cx="135" cy="86" rx="15" ry="5.5" transform="rotate(-40 135 86)" />
        <ellipse cx="115" cy="108" rx="14" ry="5" transform="rotate(45 115 108)" />
        <ellipse cx="95" cy="118" rx="14" ry="5.5" transform="rotate(-30 95 118)" />
        <ellipse cx="120" cy="148" rx="14" ry="5" transform="rotate(40 120 148)" />
        <ellipse cx="100" cy="172" rx="14" ry="5.5" transform="rotate(-32 100 172)" />
        <ellipse cx="78" cy="180" rx="13" ry="5" transform="rotate(35 78 180)" />
        <ellipse cx="105" cy="208" rx="14" ry="5" transform="rotate(-38 105 208)" />
        <ellipse cx="86" cy="224" rx="14" ry="5.5" transform="rotate(38 86 224)" />
        <ellipse cx="68" cy="236" rx="13" ry="5" transform="rotate(-42 68 236)" />
        <ellipse cx="92" cy="262" rx="14" ry="5" transform="rotate(-30 92 262)" />
        <ellipse cx="72" cy="278" rx="13" ry="5.5" transform="rotate(35 72 278)" />
        <ellipse cx="58" cy="300" rx="13" ry="5" transform="rotate(-30 58 300)" />
        <ellipse cx="80" cy="318" rx="14" ry="5" transform="rotate(40 80 318)" />
      </g>
      <g fill="#3b4524">
        <circle cx="148" cy="22" r="3" />
        <circle cx="120" cy="100" r="3" />
        <circle cx="98" cy="190" r="3" />
        <circle cx="78" cy="252" r="3" />
        <circle cx="62" cy="310" r="3" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow primitive                                                         */
/* -------------------------------------------------------------------------- */

function Eyebrow({
  children,
  light = false,
  centered = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  centered?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] ${
        light ? "text-gold-soft" : "text-olive"
      } ${className}`}
    >
      {centered ? (
        <span className={`h-px w-8 ${light ? "bg-gold-soft/40" : "bg-olive/30"}`} />
      ) : null}
      {children}
      {centered ? (
        <span className={`h-px w-8 ${light ? "bg-gold-soft/40" : "bg-olive/30"}`} />
      ) : null}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reusable motion variants                                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
  viewport: { once: true, amount: 0.05 },
};

const fadeIn = {
  initial: { opacity: 0, scale: 1.02 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease },
  viewport: { once: true, amount: 0.05 },
};

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ivory/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Antica Loggia — Home"
        >
          <I.arch className="h-9 w-9 text-deep-brown" />
          <span className="leading-tight">
            <span className="block font-serif text-base font-bold tracking-[0.18em] text-deep-brown md:text-lg">
              ANTICA LOGGIA
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-warm-gray">
              Casa Vacanze
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-deep-brown xl:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="transition hover:text-terracotta"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#prenota"
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          style={{ backgroundColor: "#2D4A2D" }}
        >
          <I.calendar className="h-4 w-4" />
          Prenota ora
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  HeroImage — immagine fullscreen + testo + booking widget + chips          */
/* -------------------------------------------------------------------------- */

function HeroImage() {
  const chips = [
    { Icon: I.wifi, label: "Wi-Fi veloce" },
    { Icon: I.key, label: "Self Check-in" },
    { Icon: I.parking, label: "Parcheggio vicino" },
    { Icon: I.ac, label: "Aria condizionata" },
  ];

  return (
    <section
      id="top"
      className="relative isolate min-h-[90vh] overflow-hidden bg-deep-brown"
    >
      <video
        src="/media/trevi-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
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
            Antica Loggia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-2 font-serif text-4xl font-light text-white/90 md:text-5xl"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}
          >
            Trevi, Umbria
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-4 max-w-md text-lg leading-relaxed text-white/80"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            Un rifugio autentico nel cuore dell&apos;Umbria.
            <br />
            Storia, comfort e panorami indimenticabili.
          </motion.p>

          {/* CTA: rimanda al CtaBanner finale */}
          <motion.a
            href="#prenota"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-deep-brown shadow-xl transition hover:bg-[#f5f5f4]"
          >
            <I.mail className="h-4 w-4" />
            Contattaci
          </motion.a>

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
  const stripRef = useRef<HTMLDivElement>(null);
  const photos = [
    { src: "/images/trevi-dall-alto-verso-casa.webp", alt: "Vista esterna di Trevi e di Antica Loggia" },
    { src: "/images/camera-padronale.webp", alt: "Camera padronale" },
    { src: "/images/salone-verso-camino.webp", alt: "Salone con camino" },
    { src: "/images/salone-verso-finestre.webp", alt: "Salone, prospettiva verso le finestre" },
    { src: "/images/foto-finestre-verso-salottino-fuori.webp", alt: "La Loggia con i sette finestroni" },
    { src: "/images/bagno-padronale.webp", alt: "Bagno padronale" },
    { src: "/images/finestra-verso-fuori.webp", alt: "Finestra con vista sulla Valle Umbra" },
  ];

  const scrollRight = () => {
    stripRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="galleria" className="relative bg-paper py-6">
      <div ref={stripRef} className="scrollbar-hide overflow-x-auto">
        <div className="flex gap-3">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`flex-shrink-0 ${i === 0 ? "ml-4" : ""} ${
                i === photos.length - 1 ? "mr-4" : ""
              }`}
            >
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
        </div>
      </div>
      <button
        type="button"
        onClick={scrollRight}
        aria-label="Scorri immagini a destra"
        className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-2xl leading-none text-deep-brown shadow-md transition hover:bg-cream"
      >
        ›
      </button>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Benvenuti (id="la-casa")                                                  */
/* -------------------------------------------------------------------------- */

function Benvenuti() {
  const [videoOpen, setVideoOpen] = useState(false);

  const badges = [
    { Icon: I.eye, label: "Vista panoramica" },
    { Icon: I.column, label: "Centro storico 200 m" },
    { Icon: I.users, label: "Ospitalità locale" },
  ];

  return (
    <>
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
              La tua casa in Umbria
            </div>
            <h2 className="mb-5 font-serif text-4xl font-light leading-tight text-deep-brown md:text-5xl">
              Benvenuti ad Antica Loggia
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-warm-gray md:text-lg">
              Una dimora storica ristrutturata con cura, affacciata sulle
              colline umbre e a pochi passi dal centro di Trevi. Ambienti
              accoglienti, finiture di pregio e tutti i comfort per un soggiorno
              rilassante, in ogni stagione.
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

          {/* Colonna destra: video card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            viewport={{ once: true, amount: 0.05 }}
          >
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Riproduci video di Antica Loggia"
              className="group relative h-72 w-full overflow-hidden rounded-2xl shadow-lg md:h-80"
            >
              <Image
                src="/images/trevi-panorama.webp"
                alt="Vista panoramica di Trevi al tramonto"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-deep-brown shadow-md transition group-hover:scale-110">
                  <I.play className="ml-0.5 h-6 w-6" />
                </span>
              </span>
              <div className="absolute bottom-4 left-4 text-left">
                <div className="font-serif text-lg font-semibold text-white">
                  Scopri Antica Loggia
                </div>
                <div className="mt-0.5 text-sm text-white/70">
                  Guarda il video della casa
                </div>
              </div>
              <span className="absolute bottom-4 right-4 rounded bg-black/50 px-2 py-0.5 text-xs text-white">
                1:20
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video di Antica Loggia"
        >
          <video
            src="/media/trevi-drone.mp4"
            controls
            autoPlay
            playsInline
            className="max-h-full max-w-full rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Chiudi video"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-2xl leading-none text-deep-brown shadow-md transition hover:bg-cream"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  ServiziChips (chip orizzontali)                                           */
/* -------------------------------------------------------------------------- */

function ServiziInclusi() {
  const items = [
    { Icon: I.wifi, label: "Wi-Fi", subtitle: "Fibra gratuita" },
    {
      Icon: I.snowflake,
      label: "Aria condizionata",
      subtitle: "In tutta la casa",
    },
    {
      Icon: I.kitchen,
      label: "Cucina attrezzata",
      subtitle: "Forno, lavastoviglie e macchina caffè",
    },
    { Icon: I.tv, label: "Smart TV", subtitle: "Netflix incluso" },
    { Icon: I.washer, label: "Lavatrice", subtitle: "A disposizione" },
    { Icon: I.bed, label: "Biancheria", subtitle: "Letti e bagno" },
    { Icon: I.key, label: "Self Check-in", subtitle: "Accesso autonomo" },
    {
      Icon: I.family,
      label: "Adatto a famiglie",
      subtitle: "Culla su richiesta",
    },
  ];

  return (
    <section
      id="servizi"
      className="border-b border-line-soft bg-paper py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-wrap items-end gap-x-4 gap-y-1"
        >
          <h2 className="font-serif text-3xl font-light text-deep-brown">
            Servizi inclusi
          </h2>
          <span className="mb-1 text-base text-warm-gray/70">
            — Tutto ciò che ti serve per sentirti a casa.
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
/*  InfoCards (4 card visive con immagine + rating Google)                    */
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
  // Animazione a cascata: delay 0, 0.1, 0.2, 0.3
  const cardAnim = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
    viewport: { once: true, amount: 0.05 },
  });

  return (
    <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {/* Card 1 — Parcheggio comodo (verde scuro) */}
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
                P
              </span>
              <h3 className="pr-12 font-serif text-lg md:text-xl">
                Parcheggio comodo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Parcheggio pubblico gratuito a pagamento nelle vicinanze
                (200–400 m). Info e mappe incluse.
              </p>
              <a
                href="#dove-siamo"
                className="mt-auto pt-4 text-sm font-medium text-white/90 transition hover:text-white"
              >
                Leggi di più →
              </a>
            </div>
            <div className="relative h-[200px] flex-shrink-0">
              <Image
                src="/images/auto-parcheggio.webp"
                alt="Parcheggio nelle vicinanze di Antica Loggia"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.article>

          {/* Card 2 — Arrivo in autonomia (cream) */}
          <motion.article
            {...cardAnim(0.1)}
            className="flex h-[420px] flex-col overflow-hidden rounded-2xl bg-cream-2"
          >
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-lg text-deep-brown md:text-xl">
                Arrivo in autonomia
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-deep-brown/75">
                Self Check-in con key box. Istruzioni chiare inviate prima del
                tuo arrivo.
              </p>
            </div>
            <div className="relative h-[200px] flex-shrink-0">
              <Image
                src="/images/keybox-checkin.webp"
                alt="Key box per il self check-in"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.article>

          {/* Card 3 — Posizione centrale (cream) */}
          <motion.article
            {...cardAnim(0.2)}
            className="flex h-[420px] flex-col overflow-hidden rounded-2xl bg-cream-2"
          >
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-lg text-deep-brown md:text-xl">
                Posizione centrale
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-deep-brown/75">
                Nel cuore di Trevi, a piedi raggiungi ristoranti, negozi e i
                principali punti di interesse.
              </p>
            </div>
            <div className="relative h-[200px] flex-shrink-0">
              <Image
                src="/images/vicolo-medievale.webp"
                alt="Vicolo medievale di Trevi"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.article>

          {/* Card 4 — Dicono di noi (rating Google) */}
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
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  GliSpazi (id="spazi") — 4 card dettagliate (sostituisce LaLoggia)         */
/* -------------------------------------------------------------------------- */

type Bullet = string | { strong: string; rest: string };

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
      <span className="text-sm leading-relaxed text-warm-gray">
        {children}
      </span>
    </li>
  );
}

function GliSpazi() {
  const cards: {
    Icon: typeof BedDouble;
    label: string;
    img: string;
    alt: string;
    intro: ReactNode;
    items: ReactNode[];
    outro?: ReactNode;
  }[] = [
    {
      Icon: BedDouble,
      label: "Dove dormirai",
      img: "/images/camera-padronale.webp",
      alt: "Camera padronale di Antica Loggia",
      intro: (
        <>
          Antica Loggia può accogliere fino a{" "}
          <span className="font-semibold text-deep-brown">8 ospiti</span> in 3
          camere da letto.
        </>
      ),
      items: [
        <>
          <span className="font-semibold text-deep-brown">Camera 1</span> —
          Camera padronale: 1 letto matrimoniale king size, vista sulle
          colline
        </>,
        <>
          <span className="font-semibold text-deep-brown">Camera 2</span> —
          Camera matrimoniale: 1 letto matrimoniale, finestre con persiane
          in legno
        </>,
        <>
          <span className="font-semibold text-deep-brown">Camera 3</span> —
          Camera singola/multipla: 2 letti singoli (unibili su richiesta)
        </>,
      ],
      outro:
        "Ambienti curati, aria condizionata in ogni camera e atmosfera accogliente.",
    },
    {
      Icon: Bath,
      label: "Bagni e dotazioni",
      img: "/images/bagno-padronale.webp",
      alt: "Bagno padronale di Antica Loggia",
      intro: (
        <>
          <span className="font-semibold text-deep-brown">2 bagni</span>{" "}
          funzionali e ben organizzati, dotati di tutto il necessario per il
          tuo soggiorno.
        </>
      ),
      items: [
        "Bagno padronale con doccia e vasca",
        "Secondo bagno con doccia",
        "Inclusi: asciugamani, biancheria da bagno, asciugacapelli e prodotti essenziali",
        "Ricambio biancheria disponibile su richiesta",
      ],
    },
    {
      Icon: UtensilsCrossed,
      label: "La cucina",
      img: "/images/salone-verso-camino.webp",
      alt: "La cucina di Antica Loggia, salone verso camino",
      intro:
        "Una cucina completamente attrezzata per cucinare con gusto e comodità.",
      items: [
        "Piano cottura a gas + forno elettrico",
        "Lavastoviglie e lavatrice",
        "Macchina del caffè e bollitore",
        "Frigorifero, freezer e microonde",
        "Stoviglie, pentole e tutto l'occorrente",
        <>
          <span className="font-semibold text-deep-brown">
            Tavolo da pranzo
          </span>{" "}
          interno per 8 persone
        </>,
      ],
    },
    {
      Icon: Armchair,
      label: "La Loggia e i saloni",
      img: "/images/foto-finestre-verso-salottino-fuori.webp",
      alt: "La Loggia con i sette finestroni sulla Valle Umbra",
      intro: (
        <>
          Il cuore della casa: la{" "}
          <span className="font-semibold text-deep-brown">
            loggia panoramica
          </span>{" "}
          affacciata sul verde umbro, perfetta in ogni stagione.
        </>
      ),
      items: [
        "Loggia esterna con tavolo e sedie per 8 — vista sulle colline",
        "Salone principale con camino e divani",
        "Smart TV con Netflix e connessione Wi-Fi fibra",
        "Zona lettura e relax",
        "Giardino privato con area barbecue",
        "Parcheggio privato nelle vicinanze",
      ],
    },
  ];

  return (
    <section
      id="spazi"
      className="border-b border-line-soft bg-ivory py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-medium uppercase tracking-widest text-terracotta">
          La tua casa
        </div>
        <h2 className="mt-2 font-serif text-4xl font-light text-deep-brown">
          Ogni spazio, una storia
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-warm-gray">
          Antica Loggia accoglie fino a 8 ospiti in un ambiente curato e
          autentico.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.article
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              viewport={{ once: true, amount: 0.05 }}
              className="overflow-hidden rounded-2xl border border-[#E5E0D8] bg-paper shadow-sm"
            >
              {/* Header card */}
              <div className="flex items-center gap-3 px-6 pb-4 pt-6">
                <c.Icon
                  className="h-5 w-5 text-warm-gray/65"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-warm-gray">
                  {c.label}
                </span>
              </div>

              {/* Foto */}
              <div className="relative h-52 w-full">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Corpo testo */}
              <div className="px-6 py-5">
                <p className="text-sm leading-relaxed text-warm-gray">
                  {c.intro}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {c.items.map((item, j) => (
                    <Bullet key={j}>{item}</Bullet>
                  ))}
                </ul>
                {c.outro ? (
                  <p className="mt-4 text-sm leading-relaxed text-warm-gray">
                    {c.outro}
                  </p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  DoveSiamo (id="dove-siamo") — 3 col: mappa + parcheggi + foto vicolo      */
/* -------------------------------------------------------------------------- */

function DoveSiamo() {
  const parcheggi = [
    {
      name: "Parcheggio Porta Nuova",
      address: "Via della Rocca",
      distance: "200 m · 3 min a piedi",
      type: "free" as const,
    },
    {
      name: "Parcheggio San Francesco",
      address: "Via Sant'Agostino",
      distance: "350 m · 5 min a piedi",
      type: "free" as const,
    },
    {
      name: "Parcheggio Piazza Garibaldi",
      address: "Piazza Garibaldi",
      distance: "450 m · 6 min a piedi",
      type: "paid" as const,
    },
  ];

  return (
    <section
      id="dove-siamo"
      className="border-b border-line-soft bg-cream py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.1fr_220px] md:items-start md:gap-6">
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
                Trevi (PG), Umbria
              </p>
            </div>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=12.7286%2C42.8545%2C12.7486%2C42.8645&layer=mapnik&marker=42.8588%2C12.7386"
              className="mt-3 block h-48 w-full border-0"
              style={{ border: 0 }}
              loading="lazy"
              title="Mappa di Trevi"
            />
            <div className="flex flex-wrap gap-3 p-4">
              <a
                href="https://maps.google.com/?q=Antica+Loggia,+Trevi,+PG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "#2D4A2D" }}
              >
                <I.pin className="h-4 w-4" />
                Indicazioni stradali
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f4] px-4 py-2 text-sm text-warm-gray">
                <I.clock className="h-4 w-4" />
                Centro storico — 200 m
              </span>
            </div>
          </motion.div>

          {/* Colonna 2 — Parcheggi */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="md:pl-6 lg:pl-8"
          >
            <h3 className="mb-6 font-serif text-2xl font-light text-deep-brown">
              Parcheggi nelle vicinanze
            </h3>
            <ul>
              {parcheggi.map((p, i) => (
                <li
                  key={p.name}
                  className={`flex items-start gap-3 py-4 ${
                    i < parcheggi.length - 1
                      ? "border-b border-[#E5E0D8]"
                      : ""
                  }`}
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
                    {p.type === "free" ? "Gratuito" : "A pagamento"}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonna 3 — Immagine vicolo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="relative mx-auto aspect-[11/16] w-48 overflow-hidden rounded-2xl shadow-md md:mx-0 md:w-full"
          >
            <Image
              src="/images/vicolo-medievale.webp"
              alt="Vicolo medievale di Trevi"
              fill
              sizes="(max-width: 768px) 192px, 220px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Dintorni (id="dintorni") — Scopri l'Umbria: 5 borghi + accordion          */
/* -------------------------------------------------------------------------- */

function Dintorni() {
  // PLACEHOLDER: img punta a foto della casa esistenti.
  // Sostituire con foto reali dei borghi in /public/images/borghi/{id}.webp
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
                {/* Fallback gradiente sotto l'Image (mostrato durante load o se l'img fallisce) */}
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
/*  Recensioni — 3 card con avatar AI                                         */
/* -------------------------------------------------------------------------- */

function Recensioni() {
  // NOTE: avatar-coppia.webp non esiste in /public/images/.
  // Fallback su avatar-marco.webp finché non viene aggiunto.
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
/*  Regole — strip orizzontale chiara con icone Lucide                        */
/* -------------------------------------------------------------------------- */

function Regole() {
  const rules = [
    { Icon: Clock, label: "Check-in", sub: "dalle 15:00" },
    { Icon: LogOut, label: "Check-out", sub: "entro 11:00" },
    { Icon: CigaretteOff, label: "Non fumare", sub: "all'interno" },
    { Icon: PawPrint, label: "Animali", sub: "non ammessi" },
    { Icon: PartyPopper, label: "Feste o eventi", sub: "non consentiti" },
    { Icon: MoonStar, label: "Rispetta il riposo", sub: "22:00 — 08:00" },
    { Icon: Tag, label: "Tassa di soggiorno", sub: "1,00€ a persona/notte" },
  ];
  return (
    <section className="bg-cream py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6">
        <div className="flex-shrink-0 border-r border-[#E5E0D8] pr-6 leading-tight">
          <div className="font-serif text-lg font-semibold text-deep-brown">
            Regole
          </div>
          <div className="font-serif text-lg font-semibold text-deep-brown">
            della casa
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
/*  ContactForm (id="prenota") — modulo per lasciare i contatti               */
/* -------------------------------------------------------------------------- */

function ContactForm() {
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
            Lasciaci i tuoi contatti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, amount: 0.05 }}
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-warm-gray"
          >
            Scrivici per disponibilità, preventivi o consigli sul soggiorno.
            Ti rispondiamo entro poche ore.
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
                <label className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  className="mt-1 w-full border-b border-[#E5E0D8] bg-transparent py-2 text-sm text-deep-brown outline-none transition focus:border-deep-brown placeholder:text-warm-gray/50"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@esempio.it"
                  className="mt-1 w-full border-b border-[#E5E0D8] bg-transparent py-2 text-sm text-deep-brown outline-none transition focus:border-deep-brown placeholder:text-warm-gray/50"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                  Messaggio
                </label>
                <textarea
                  rows={4}
                  placeholder="Raccontaci del tuo soggiorno…"
                  className="mt-1 w-full resize-none border-b border-[#E5E0D8] bg-transparent py-2 text-sm text-deep-brown outline-none transition focus:border-deep-brown placeholder:text-warm-gray/50"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[12px] text-warm-gray/70">
                Inviando il form accetti la nostra privacy policy. Nessuno
                spam.
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
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CtaBanner — full-width banner con immagine umbra                          */
/* -------------------------------------------------------------------------- */

function CtaBanner() {
  return (
    <section
      className="relative min-h-[420px] overflow-hidden md:min-h-[500px]"
    >
      <Image
        src="/images/umbria-cta-bg.webp"
        alt="Paesaggio dell'Umbria al tramonto"
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
          Pronto a vivere l&apos;Umbria?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-8 max-w-xl text-lg text-white/80"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.3)" }}
        >
          Regalati un soggiorno autentico tra arte, natura e relax.
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
            Prenota ora
          </a>
          <span className="inline-flex cursor-default items-center gap-2 text-sm text-white/80 underline underline-offset-4 transition hover:text-white">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
            Miglior prezzo garantito
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer text-cream">
      <OliveBranch className="pointer-events-none absolute -right-8 top-6 hidden h-[300px] w-auto opacity-15 md:block" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <a
            href="#top"
            className="font-serif text-2xl font-medium text-cream"
            aria-label="Antica Loggia — Home"
          >
            Antica Loggia
          </a>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-cream/65">
            Antica Loggia, ampio appartamento in caseggiato del XVII secolo, nel
            borgo medievale di Trevi. Sette finestroni affacciati sulla Valle
            Umbra, fino a 8 ospiti.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 transition hover:border-cream/60"
            >
              <I.instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 transition hover:border-cream/60"
            >
              <I.facebook className="h-4 w-4" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 transition hover:border-cream/60"
            >
              <I.whatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[12px] font-medium uppercase tracking-[0.22em] text-cream/55">
            Contatti
          </h4>
          <ul className="mt-4 space-y-3 text-[13px] text-cream/75">
            <li className="flex items-start gap-2">
              <I.pin className="mt-0.5 h-4 w-4 text-gold-soft" />
              <span>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </span>
            </li>
            <li>
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 transition hover:text-cream"
              >
                <I.phone className="h-4 w-4 text-gold-soft" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={mailto}
                className="flex items-center gap-2 transition hover:text-cream"
              >
                <I.mail className="h-4 w-4 text-gold-soft" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-medium uppercase tracking-[0.22em] text-cream/55">
            Esplora
          </h4>
          <ul className="mt-4 grid grid-cols-1 gap-y-2 text-[13px] text-cream/75">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="transition hover:text-cream">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#prenota" className="transition hover:text-cream">
                Prenota
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-[11px] text-cream/55 sm:flex-row sm:items-center md:px-8">
          <span>
            © {new Date().getFullYear()} Antica Loggia · Casa Vacanze · Trevi
            (PG), Umbria
          </span>
          <span className="font-serif italic text-gold-soft">
            «Sospesi nel cielo, sopra la Valle Umbra.»
          </span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating WhatsApp                                                         */
/* -------------------------------------------------------------------------- */

function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fab-whatsapp"
    >
      <I.whatsapp className="h-7 w-7" />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex-1">
        <HeroImage />
        <GalleryStrip />
        <Benvenuti />
        <ServiziInclusi />
        <InfoCards />
        <GliSpazi />
        <DoveSiamo />
        <Dintorni />
        <Recensioni />
        <Regole />
        <ContactForm />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
