/**
 * Infrastruttura condivisa MiriAle Holiday House.
 * Costanti, link, navigazione globale, icone e primitive riusate da
 * layout, home e pagine spoke. Unica fonte di verità: niente duplicazione.
 */

import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Contatti / costanti                                                       */
/* -------------------------------------------------------------------------- */

export const WHATSAPP_NUMBER = "393284898704";
export const WHATSAPP_DISPLAY = "+39 328 489 8704";
export const EMAIL = "info@mirialeholidayhouse.it";
export const ADDRESS_LINE_1 = "Via Castagnevizza, 76";
export const ADDRESS_LINE_2 = "00054 Fiumicino RM";
export const ADDRESS_FULL = "Via Castagnevizza, 76, 00054 Fiumicino RM";
export const MAPS_SHORT = "https://maps.app.goo.gl/2KgSGxzFX5MnWGMR8";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Via%20Castagnevizza%2C%2076%2C%2000054%20Fiumicino%20RM&output=embed";

/* Dati legali struttura (pubblicati sull'annuncio Booking). Gestita da host privato. */
export const LICENSE_NUMBER = "058120-ALT-00210";
export const CIN = "IT058120C27MWUIVNF";

export const waLink = (
  msg = "Ciao! Vorrei avere informazioni su MiriAle Holiday House.",
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const mailto = `mailto:${EMAIL}`;
export const telLink = `tel:+${WHATSAPP_NUMBER}`;

/* -------------------------------------------------------------------------- */
/*  Navigazione globale (header + footer) — punta alle pagine                  */
/* -------------------------------------------------------------------------- */

export const NAV = [
  { label: "Appartamenti", href: "/la-casa" },
  { label: "Esperienze", href: "/cosa-fare-intorno" },
  { label: "Contatti", href: "/contatti" },
];

/* -------------------------------------------------------------------------- */
/*  Motion variants                                                           */
/* -------------------------------------------------------------------------- */

export const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
  viewport: { once: true, amount: 0.05 },
};

export const fadeIn = {
  initial: { opacity: 0, scale: 1.02 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease },
  viewport: { once: true, amount: 0.05 },
};

/* -------------------------------------------------------------------------- */
/*  Icone inline (SVG)                                                        */
/* -------------------------------------------------------------------------- */

type IconProps = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const I = {
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
/*  Ramo d'ulivo decorativo (footer)                                          */
/* -------------------------------------------------------------------------- */

export function OliveBranch({
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
/*  Eyebrow                                                                   */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
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
/*  Link "approfondisci →" discreto (home → spoke)                            */
/* -------------------------------------------------------------------------- */

import Link from "next/link";

export function ApprofondisciLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-olive transition hover:text-terracotta"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
