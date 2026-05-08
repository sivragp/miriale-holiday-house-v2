import type { ReactNode } from "react";

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

const IMG = {
  hero: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=2400&q=85",
  living:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=85",
  bedroom:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1800&q=85",
  exterior:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=85",
  loggia:
    "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1800&q=85",
  gallery: [
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1525113990976-399835c43838?auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1100&q=80",
  ],
  parking:
    "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=1200&q=80",
  greenSide:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1100&q=85",
  ctaBanner:
    "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=2400&q=85",
  nearby: [
    {
      name: "Spoleto",
      km: "20 km",
      img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Assisi",
      km: "30 km",
      img: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Cascate Marmore",
      km: "35 km",
      img: "https://images.unsplash.com/photo-1559588227-b06c9bce5ce0?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Montefalco",
      km: "18 km",
      img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&q=80",
    },
  ],
  reviews: [
    {
      name: "Sofia M.",
      city: "Milano",
      avatar: "https://i.pravatar.cc/200?img=47",
      stars: 5,
      text:
        "Casa meravigliosa, curata in ogni dettaglio. La vista dalla loggia al tramonto è qualcosa che non dimenticheremo. Ospiti gentilissimi e disponibili.",
    },
    {
      name: "Andrea & Giulia",
      city: "Roma",
      avatar: "https://i.pravatar.cc/200?img=12",
      stars: 5,
      text:
        "Posizione perfetta nel cuore di Trevi, ideale per esplorare l'Umbria. Casa accogliente, calda, con tutti i comfort. Torneremo sicuramente.",
    },
    {
      name: "Lukas H.",
      city: "Monaco di Baviera",
      avatar: "https://i.pravatar.cc/200?img=33",
      stars: 5,
      text:
        "Una dimora autentica, con travi a vista e pavimenti in cotto. Tutto è impeccabile. La proprietaria ci ha consigliato luoghi fantastici da visitare.",
    },
  ],
};

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
  wifi: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 12.55a11 11 0 0 1 14 0" />
      <path d="M2 8.82a16 16 0 0 1 20 0" />
      <path d="M8.5 16.43a6 6 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  ),
  ac: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
    </svg>
  ),
  kitchen: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
      <path d="M7 11V6a5 5 0 0 1 10 0v5" />
      <path d="M9 15h6" />
    </svg>
  ),
  tv: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </svg>
  ),
  parking: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M10 17V8h3.5a2.5 2.5 0 0 1 0 5H10" />
    </svg>
  ),
  key: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="8" cy="14" r="4" />
      <path d="m11 11 9-9M16 6l3 3" />
    </svg>
  ),
  bed: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M3 18V8M3 12h18v6M21 18V11a3 3 0 0 0-3-3h-7v4" />
      <circle cx="7" cy="11" r="2" />
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
  heat: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  ),
  pin: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  mountain: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="m3 19 6-9 4 5 3-3 5 7Z" />
      <circle cx="17" cy="6" r="2" />
    </svg>
  ),
  sparkle: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4" />
    </svg>
  ),
  heart: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" />
    </svg>
  ),
  column: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 4h14v3H5zM5 17h14v3H5zM8 7v10M16 7v10M12 7v10" />
    </svg>
  ),
  clock: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
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
  smoke: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  card: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18M7 16h3" />
    </svg>
  ),
  check: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  ),
  music: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
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
  arrow: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowDown: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  menu: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M6 6l12 12M18 6 6 18" />
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
  search: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  calendar: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  ),
  guests: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Olive branch decorative SVG                                               */
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
      {/* leaves */}
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
      {/* olives */}
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
/*  Logo                                                                      */
/* -------------------------------------------------------------------------- */

function LogoMark({
  light = false,
  className = "h-12 w-12",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`grid place-items-center rounded-md ${
        light
          ? "border border-cream/30 text-cream"
          : "logo-frame text-olive-dark"
      } ${className}`}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" {...stroke}>
        {/* arched loggia silhouette */}
        <path d="M5 26V14a11 11 0 0 1 22 0v12" />
        <path d="M3 26h26" />
        <path d="M11 26v-7a3 3 0 0 1 6 0v7" />
        <path d="M19 26v-7a3 3 0 0 1 6 0v7" opacity="0.55" />
        <path d="M16 6v3" />
      </svg>
    </span>
  );
}

function Logo({
  light = false,
  className = "",
  compact = false,
}: {
  light?: boolean;
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-3 ${className}`}
      aria-label="Antica Loggia — Home"
    >
      <LogoMark light={light} className={compact ? "h-10 w-10" : "h-12 w-12"} />
      <span className="leading-tight">
        <span
          className={`block font-serif text-[15px] font-semibold tracking-[0.22em] ${
            light ? "text-cream" : "text-olive-dark"
          }`}
        >
          ANTICA LOGGIA
        </span>
        <span
          className={`block text-[9px] uppercase tracking-[0.36em] ${
            light ? "text-cream/65" : "text-warm-gray"
          }`}
        >
          Casa Vacanze
        </span>
        <span
          className={`block text-[8px] uppercase tracking-[0.4em] ${
            light ? "text-cream/45" : "text-warm-gray/80"
          }`}
        >
          Trevi · Umbria
        </span>
      </span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Buttons                                                                   */
/* -------------------------------------------------------------------------- */

function BtnContact({
  href = mailto,
  children,
  className = "",
  variant = "dark",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "dark" | "outline" | "olive";
}) {
  const styles =
    variant === "outline"
      ? "border border-olive-dark text-olive-dark hover:bg-olive-dark hover:text-cream"
      : variant === "olive"
        ? "bg-olive text-cream hover:bg-olive-2"
        : "bg-olive-dark text-cream hover:bg-olive-deep";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function BtnWhatsApp({
  message,
  children,
  className = "",
}: {
  message?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium tracking-wide text-white shadow-[0_8px_18px_rgba(37,211,102,0.3)] transition hover:bg-[#1fb858] ${className}`}
    >
      <I.whatsapp className="h-4 w-4" />
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow                                                                   */
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
      className={`eyebrow inline-flex items-center gap-3 ${
        light ? "text-gold-soft" : "text-gold"
      } ${className}`}
    >
      {centered ? (
        <span
          className={`h-px w-8 ${light ? "bg-gold-soft/50" : "bg-gold/50"}`}
        />
      ) : null}
      {children}
      {centered ? (
        <span
          className={`h-px w-8 ${light ? "bg-gold-soft/50" : "bg-gold/50"}`}
        />
      ) : null}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

const NAV = [
  { label: "Home", href: "#top" },
  { label: "La Casa", href: "#la-casa" },
  { label: "Servizi", href: "#servizi" },
  { label: "Gallery", href: "#gallery" },
  { label: "Dove siamo", href: "#dove-siamo" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#contatti" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ivory/92 backdrop-blur">
      <input type="checkbox" id="nav-toggle" className="peer hidden" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 md:px-8">
        <Logo compact />

        <nav className="hidden flex-1 items-center justify-center gap-7 text-[13px] text-deep-brown lg:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="transition hover:text-olive"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_14px_rgba(37,211,102,0.25)] transition hover:bg-[#1fb858]"
          >
            <I.whatsapp className="h-4 w-4" />
            WhatsApp
          </a>
          <label
            htmlFor="nav-toggle"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-olive-dark lg:hidden"
            aria-label="Apri menu"
          >
            <I.menu className="icon-menu h-5 w-5" />
            <I.close className="icon-close h-5 w-5" />
          </label>
        </div>
      </div>

      <nav className="mobile-nav hidden flex-col gap-1 border-t border-line/60 bg-ivory px-5 py-4 lg:hidden">
        {NAV.map((n) => (
          <a
            key={n.label}
            href={n.href}
            className="rounded-lg px-3 py-2 text-sm text-deep-brown transition hover:bg-cream"
          >
            {n.label}
          </a>
        ))}
        <BtnContact className="mt-2 self-start">Contattaci</BtnContact>
      </nav>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero — availability picker + dual CTA                                     */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMG.hero}
        alt="Vista panoramica del borgo medievale di Trevi al tramonto"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 hero-overlay" />

      <div className="mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-24 sm:pb-16 md:px-8 md:pt-32">
        <div className="max-w-2xl">
          <Eyebrow light>Casa Vacanze di Charme</Eyebrow>
          <h1 className="mt-5 font-serif text-[3.6rem] leading-[0.98] text-cream sm:text-7xl md:text-[5.8rem]">
            Antica Loggia
          </h1>
          <p className="mt-5 max-w-xl font-serif text-2xl leading-snug text-cream/95 sm:text-[1.7rem]">
            Il tuo rifugio nel cuore di Trevi, Umbria
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/80">
            Atmosfera autentica, comfort moderni e panorami che resteranno
            con te.
          </p>
        </div>

        {/* Availability picker bar */}
        <div className="mt-10 max-w-3xl">
          <div className="grid grid-cols-1 gap-2 rounded-2xl bg-paper/95 p-2 shadow-pill backdrop-blur sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center">
            <PickerField icon={<I.calendar className="h-4 w-4 text-olive" />} label="Arrivo" value="24 maggio 2026" />
            <PickerField icon={<I.calendar className="h-4 w-4 text-olive" />} label="Partenza" value="31 maggio 2026" />
            <PickerField icon={<I.guests className="h-4 w-4 text-olive" />} label="Ospiti" value="2 adulti" />
            <a
              href={waLink("Ciao! Vorrei verificare la disponibilità di Antica Loggia per un soggiorno.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-olive-dark px-5 py-3.5 text-sm font-medium text-cream transition hover:bg-olive-deep sm:min-w-[200px]"
            >
              <I.search className="h-4 w-4" />
              Verifica disponibilità
            </a>
          </div>
        </div>

        {/* Secondary action row */}
        <div className="mt-5 flex flex-wrap items-center gap-3 text-cream/80 text-[13px]">
          <span className="inline-flex items-center gap-2">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <I.star key={i} className="h-3.5 w-3.5 text-gold-soft" />
              ))}
            </span>
            <span>4.9 / 5 — oltre 120 recensioni</span>
          </span>
          <span className="opacity-50">·</span>
          <a href="#recensioni" className="underline-offset-4 hover:underline">
            Leggi le recensioni
          </a>
        </div>
      </div>
    </section>
  );
}

function PickerField({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-cream/40">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cream">
        {icon}
      </span>
      <div className="leading-tight">
        <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
          {label}
        </div>
        <div className="flex items-center gap-1 text-[13px] text-deep-brown">
          {value}
          <I.arrowDown className="h-3 w-3 opacity-60" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Highlight strip                                                           */
/* -------------------------------------------------------------------------- */

function HighlightStrip() {
  const items = [
    { Icon: I.wifi, label: "Wi-Fi gratuito", sub: "fino a 100 Mb/s" },
    { Icon: I.ac, label: "Aria condizionata" },
    { Icon: I.kitchen, label: "Cucina attrezzata" },
    { Icon: I.parking, label: "Parcheggio gratuito" },
    { Icon: I.tv, label: "Smart TV" },
    { Icon: I.key, label: "Self check-in" },
  ];
  return (
    <section className="border-y border-line/70 bg-cream/55">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-5 px-5 py-5 md:px-8">
        {items.map(({ Icon, label, sub }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-olive-dark"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-paper text-olive shadow-soft">
              <Icon className="h-4.5 w-4.5" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-medium text-deep-brown">
                {label}
              </div>
              {sub ? (
                <div className="text-[11px] text-warm-gray">{sub}</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Dove la storia incontra il comfort                                        */
/* -------------------------------------------------------------------------- */

function DoveLaStoria() {
  return (
    <section id="la-casa" className="bg-ivory py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8 lg:gap-16">
        <div className="flex flex-col justify-center md:col-span-5">
          <Eyebrow>La Casa</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-olive-dark sm:text-5xl md:text-[3.4rem]">
            Dove la storia
            <br />
            incontra il comfort
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-warm-gray">
            <p>
              Antica Loggia è una dimora dei primi del Novecento restaurata con
              cura nel cuore del borgo medievale di Trevi. Travi a vista,
              pavimenti in cotto e una loggia affacciata sulla valle disegnano
              spazi luminosi e raccolti.
            </p>
            <p>
              Tre camere da letto, due bagni, soggiorno con camino e cucina
              completa: una casa intera, accogliente e privata, perfetta per
              famiglie, coppie e piccoli gruppi che cercano l&apos;autenticità
              dell&apos;Umbria con i comfort di un soggiorno di pregio.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
            <Stat number="3" label="Camere" />
            <Stat number="2" label="Bagni" />
            <Stat number="6" label="Ospiti" />
          </div>

          <a
            href="#gallery"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-olive-dark transition hover:gap-3 hover:text-olive"
          >
            Scopri di più
            <I.arrow className="h-4 w-4" />
          </a>
        </div>

        <div className="relative md:col-span-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG.living}
            alt="Soggiorno di Antica Loggia con camino e travi a vista"
            className="aspect-[5/4] w-full rounded-3xl object-cover shadow-card"
          />
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rotate-[-6deg] rounded-2xl border border-line bg-paper p-3 shadow-card md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.bedroom}
              alt="Camera con vista"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="absolute -right-4 top-8 hidden flex-col items-center gap-1 rounded-2xl border border-line bg-paper px-4 py-3 text-center shadow-card md:flex">
            <span className="font-serif text-2xl text-olive-dark">1907</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
              anno di costruzione
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-paper px-4 py-3 text-center">
      <div className="font-serif text-2xl text-olive-dark">{number}</div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-warm-gray">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Gallery — mosaic                                                          */
/* -------------------------------------------------------------------------- */

function Gallery() {
  return (
    <section id="gallery" className="bg-ivory pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-7">
          <div>
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-olive-dark sm:text-4xl">
              Spazi che raccontano l&apos;Umbria
            </h2>
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-olive-dark hover:text-olive"
          >
            Tutte le foto <I.arrow className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          <GalleryTile src={IMG.gallery[0]} alt="Camera matrimoniale" className="col-span-2 row-span-2" />
          <GalleryTile src={IMG.gallery[1]} alt="Cucina" className="col-span-1 row-span-1" />
          <GalleryTile src={IMG.gallery[2]} alt="Bagno" className="col-span-1 row-span-1" />
          <GalleryTile src={IMG.gallery[3]} alt="Loggia" className="col-span-2 row-span-1" />
          <GalleryTile src={IMG.gallery[4]} alt="Soggiorno" className="col-span-2 row-span-2" />
          <GalleryTile src={IMG.gallery[5]} alt="Vista valle" className="col-span-2 row-span-1" />
          <GalleryTile src={IMG.gallery[6]} alt="Borgo di Trevi" className="col-span-1 row-span-1" />
          <GalleryTile src={IMG.gallery[7]} alt="Dettaglio in pietra" className="col-span-1 row-span-1" />
        </div>
      </div>
    </section>
  );
}

function GalleryTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl shadow-soft ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Perché scegliere Antica Loggia (olive section)                            */
/* -------------------------------------------------------------------------- */

function PercheScegliere() {
  const features = [
    {
      Icon: I.pin,
      title: "Posizione unica",
      text: "Nel cuore del borgo medievale, a due passi dalla piazza.",
    },
    {
      Icon: I.column,
      title: "Architettura autentica",
      text: "Pietra antica, travi a vista, pavimenti in cotto.",
    },
    {
      Icon: I.mountain,
      title: "Vista panoramica",
      text: "Dalla loggia, l'intera valle umbra al tramonto.",
    },
    {
      Icon: I.sparkle,
      title: "Comfort di pregio",
      text: "Materiali nobili e dotazioni di alta qualità.",
    },
  ];

  return (
    <section id="servizi" className="olive-tex py-20 text-cream md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Eyebrow light centered>
            Perché scegliere Antica Loggia
          </Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-cream sm:text-4xl md:text-[2.6rem]">
            Una dimora che custodisce il tempo
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 grid grid-cols-2 gap-x-8 gap-y-10">
            {features.map(({ Icon, title, text }) => (
              <div key={title} className="flex flex-col items-start">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-cream/25 bg-cream/[0.04]">
                  <Icon className="h-5 w-5 text-gold-soft" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-cream">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-cream/70">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="md:col-span-5 relative">
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.greenSide}
                alt="Dettaglio architettonico in pietra antica di Antica Loggia"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden md:flex flex-col items-start gap-1 rounded-2xl border border-cream/15 bg-olive-deep/95 px-5 py-4 backdrop-blur shadow-card">
              <span className="font-serif text-3xl text-gold-soft">100%</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-cream/65">
                Casa intera, riservata
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Servizi inclusi — 8 pill cards                                            */
/* -------------------------------------------------------------------------- */

function ServiziInclusi() {
  const items = [
    { Icon: I.wifi, label: "Wi-Fi", sub: "100 Mb/s" },
    { Icon: I.kitchen, label: "Cucina", sub: "completa" },
    { Icon: I.bed, label: "Biancheria", sub: "di pregio" },
    { Icon: I.tv, label: "Smart TV", sub: "Netflix · Prime" },
    { Icon: I.washer, label: "Lavatrice", sub: "" },
    { Icon: I.heat, label: "Riscaldamento", sub: "autonomo" },
    { Icon: I.ac, label: "Aria condizionata", sub: "in tutte le stanze" },
    { Icon: I.sparkle, label: "Kit cortesia", sub: "bio" },
  ];

  return (
    <section className="bg-ivory pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Servizi inclusi</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-olive-dark sm:text-4xl">
              Tutto ciò che serve, già qui
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-warm-gray">
            Ogni dotazione è stata scelta con cura per offrirti un soggiorno
            senza pensieri.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {items.map(({ Icon, label, sub }) => (
            <div
              key={label}
              className="card-hover flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-4 shadow-soft"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-olive">
                <Icon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-[13px] font-medium text-deep-brown">
                  {label}
                </div>
                {sub ? (
                  <div className="text-[11px] text-warm-gray">{sub}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Three cards: Parcheggio / Nei dintorni / Dove siamo                       */
/* -------------------------------------------------------------------------- */

function StylizedMap() {
  return (
    <div className="map-bg relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line">
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dots-2"
            x="0"
            y="0"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="0.7" fill="#b89968" opacity="0.28" />
          </pattern>
        </defs>
        <rect width="500" height="400" fill="url(#dots-2)" />
        <path
          d="M-20 280 C 80 220, 180 320, 260 250 S 420 200, 540 270 L 540 420 L -20 420 Z"
          fill="#6e7a4a"
          opacity="0.18"
        />
        <path
          d="M40 60 C 140 120, 220 100, 280 180 S 400 280, 480 300"
          stroke="#b89968"
          strokeWidth="3"
          fill="none"
          strokeDasharray="6 6"
          opacity="0.7"
        />
        <path
          d="M70 320 C 160 280, 250 230, 320 220 S 420 210, 470 140"
          stroke="#b89968"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 6"
          opacity="0.5"
        />
        <g
          fontFamily="Cormorant Garamond, serif"
          fill="#5a6440"
          fontSize="13"
        >
          <text x="60" y="80">Foligno</text>
          <text x="380" y="100">Spoleto</text>
          <text x="40" y="370">Montefalco</text>
          <text x="380" y="370">Valnerina</text>
        </g>
      </svg>

      {/* Pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <div className="relative flex flex-col items-center">
          <div className="rounded-full bg-paper px-3 py-1 text-[11px] font-medium text-olive-dark shadow-soft">
            Antica Loggia
          </div>
          <span className="-mt-1 h-2 w-2 rotate-45 bg-paper shadow-soft" />
          <span className="mt-1.5 grid h-8 w-8 place-items-center rounded-full bg-terracotta text-cream shadow-card">
            <I.pin className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ThreeCards() {
  return (
    <section id="dove-siamo" className="bg-ivory py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:gap-6 md:px-8">
        {/* Parcheggio */}
        <article className="rounded-3xl border border-line bg-paper p-6 shadow-soft">
          <Eyebrow>Parcheggio</Eyebrow>
          <h3 className="mt-3 font-serif text-2xl text-olive-dark">
            Parcheggio pubblico gratuito
            <br />a 5 minuti a piedi (200&nbsp;m)
          </h3>
          <div className="mt-5 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.parking}
              alt="Parcheggio gratuito a Trevi"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-warm-gray">
            Carico e scarico bagagli consentito davanti alla casa. Ti
            accompagniamo personalmente al parcheggio.
          </p>
          <a
            href="#contatti"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-olive-dark hover:text-olive"
          >
            Maggiori dettagli <I.arrow className="h-4 w-4" />
          </a>
        </article>

        {/* Nei dintorni */}
        <article className="rounded-3xl border border-line bg-paper p-6 shadow-soft">
          <Eyebrow>Nei dintorni</Eyebrow>
          <h3 className="mt-3 font-serif text-2xl text-olive-dark">
            Da non perdere
          </h3>
          <ul className="mt-5 space-y-4">
            {IMG.nearby.map((n) => (
              <li key={n.name} className="flex items-center gap-4">
                <div className="h-14 w-16 shrink-0 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={n.img}
                    alt={n.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-serif text-base text-olive-dark">
                    {n.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-gold">
                    {n.km}
                  </div>
                </div>
                <I.arrow className="h-4 w-4 text-warm-gray" />
              </li>
            ))}
          </ul>
          <a
            href="#contatti"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-olive-dark hover:text-olive"
          >
            Vedi tutti i suggerimenti <I.arrow className="h-4 w-4" />
          </a>
        </article>

        {/* Dove siamo */}
        <article className="rounded-3xl border border-line bg-paper p-6 shadow-soft">
          <Eyebrow>Dove siamo</Eyebrow>
          <h3 className="mt-3 font-serif text-2xl text-olive-dark">
            Trevi (PG), Umbria
          </h3>
          <div className="mt-5">
            <StylizedMap />
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-warm-gray">
            {ADDRESS_LINE_1}, {ADDRESS_LINE_2}.
            <br />A 1h da Perugia, 2h da Roma.
          </p>
          <a
            href="#contatti"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-olive-dark hover:text-olive"
          >
            Indicazioni stradali <I.arrow className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Three info cards                                                          */
/* -------------------------------------------------------------------------- */

function InfoCards() {
  const importanti = [
    { Icon: I.clock, label: "Check-in", text: "dalle 15:00 alle 19:00" },
    { Icon: I.key, label: "Check-out", text: "entro le 10:30" },
    { Icon: I.users, label: "Capienza", text: "fino a 6 ospiti" },
    { Icon: I.card, label: "Pagamenti", text: "carta · bonifico · contanti" },
  ];
  const regole = [
    { Icon: I.smoke, label: "Vietato fumare all'interno" },
    { Icon: I.music, label: "Silenzio dalle 22:00" },
    { Icon: I.paw, label: "Animali su richiesta" },
    { Icon: I.users, label: "Niente feste o eventi" },
  ];
  const incluso = [
    { Icon: I.wifi, label: "Wi-Fi gratuito" },
    { Icon: I.bed, label: "Biancheria di pregio" },
    { Icon: I.sparkle, label: "Kit cortesia" },
    { Icon: I.heat, label: "Riscaldamento" },
    { Icon: I.washer, label: "Lavatrice" },
    { Icon: I.kitchen, label: "Cucina completa" },
  ];

  function Card({
    eyebrow,
    title,
    items,
  }: {
    eyebrow: string;
    title: string;
    items: { Icon: (p: IconProps) => ReactNode; label: string; text?: string }[];
  }) {
    return (
      <article className="rounded-3xl border border-line bg-paper p-6 shadow-soft md:p-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-3 font-serif text-xl text-olive-dark">{title}</h3>
        <ul className="mt-5 space-y-3">
          {items.map(({ Icon, label, text }) => (
            <li
              key={label}
              className="flex items-start gap-3 text-[13px] text-deep-brown"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream text-olive">
                <Icon className="h-4 w-4" />
              </span>
              <div className="leading-snug">
                <div>{label}</div>
                {text ? (
                  <div className="text-warm-gray text-[12px]">{text}</div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <section className="bg-ivory pb-16 md:pb-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:gap-6 md:px-8">
        <Card
          eyebrow="Cose importanti"
          title="Da sapere prima del soggiorno"
          items={importanti}
        />
        <Card
          eyebrow="Regole della casa"
          title="Per il piacere di tutti"
          items={regole}
        />
        <Card
          eyebrow="Tutto incluso"
          title="Servizi e dotazioni"
          items={incluso}
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Recensioni                                                                */
/* -------------------------------------------------------------------------- */

function Recensioni() {
  return (
    <section id="recensioni" className="bg-ivory-2 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Eyebrow centered>Recensioni dei nostri ospiti</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-olive-dark sm:text-4xl md:text-[2.6rem]">
            Le voci di chi è già stato qui
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 text-sm text-warm-gray">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <I.star key={i} className="h-4 w-4 text-gold" />
              ))}
            </span>
            <span className="font-medium text-deep-brown">4.9 / 5</span>
            <span>·</span>
            <span>oltre 120 recensioni verificate</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {IMG.reviews.map((r) => (
            <article
              key={r.name}
              className="rounded-3xl border border-line bg-paper p-6 shadow-soft md:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <div className="font-serif text-base text-olive-dark">
                    {r.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-warm-gray">
                    {r.city}
                  </div>
                </div>
                <span className="ml-auto flex">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <I.star key={i} className="h-3.5 w-3.5 text-gold" />
                  ))}
                </span>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-deep-brown/80">
                «{r.text}»
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Contattaci form + WhatsApp panel                                          */
/* -------------------------------------------------------------------------- */

function ContactForm() {
  return (
    <section id="contatti" className="bg-ivory py-20 md:py-24 relative overflow-hidden">
      <OliveBranch className="pointer-events-none absolute -right-10 top-10 h-[420px] w-auto opacity-40 hidden md:block" />
      <OliveBranch className="pointer-events-none absolute -left-12 bottom-0 h-[300px] w-auto opacity-25 hidden lg:block" flip />

      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <div className="text-center">
          <Eyebrow centered>Contatti</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-olive-dark sm:text-4xl md:text-[2.6rem]">
            Pronti a darti il benvenuto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-warm-gray">
            Scrivici per disponibilità, preventivi o suggerimenti su misura.
            Risposta entro poche ore.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12 md:gap-7">
          {/* Form */}
          <form className="rounded-3xl border border-line bg-paper p-6 shadow-soft md:col-span-7 md:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.22em] text-warm-gray">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  className="input-base"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.22em] text-warm-gray">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@esempio.it"
                  className="input-base"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.22em] text-warm-gray">
                  Arrivo
                </label>
                <input type="date" className="input-base" />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.22em] text-warm-gray">
                  Partenza
                </label>
                <input type="date" className="input-base" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.22em] text-warm-gray">
                  Messaggio
                </label>
                <textarea
                  rows={4}
                  placeholder="Raccontaci del tuo soggiorno…"
                  className="input-base resize-none"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12px] text-warm-gray max-w-xs">
                Inviando il form accetti la nostra privacy policy. Nessuno spam.
              </p>
              <BtnContact
                href={mailto}
                className="!px-7"
              >
                <I.mail className="h-4 w-4" />
                Invia richiesta
              </BtnContact>
            </div>
          </form>

          {/* WhatsApp panel */}
          <aside className="relative md:col-span-5">
            <div className="wa-panel rounded-3xl p-7 text-white shadow-card md:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur">
                <I.whatsapp className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 font-serif text-2xl leading-tight md:text-[1.7rem]">
                Scrivici su WhatsApp
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/85">
                Per la risposta più veloce, scrivici un messaggio.
                Saremo felici di aiutarti a pianificare il tuo soggiorno.
              </p>

              <ul className="mt-6 space-y-3 text-[13px] text-white/90">
                <li className="flex items-center gap-2">
                  <I.check className="h-4 w-4 text-white" />
                  Risposta entro poche ore
                </li>
                <li className="flex items-center gap-2">
                  <I.check className="h-4 w-4 text-white" />
                  Disponibilità in tempo reale
                </li>
                <li className="flex items-center gap-2">
                  <I.check className="h-4 w-4 text-white" />
                  Consigli su misura per il soggiorno
                </li>
              </ul>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#1ba94e] transition hover:bg-white/95"
              >
                <I.whatsapp className="h-4 w-4" />
                Scrivici su WhatsApp
              </a>

              <div className="mt-5 flex items-center gap-3 text-[12px] text-white/80">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
                  <I.phone className="h-4 w-4" />
                </span>
                <span>{WHATSAPP_DISPLAY}</span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-paper px-5 py-4 shadow-soft">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
                  <I.mail className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                    Email
                  </div>
                  <div className="text-[13px] text-deep-brown break-all">
                    {EMAIL}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-paper px-5 py-4 shadow-soft">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
                  <I.pin className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">
                    Indirizzo
                  </div>
                  <div className="text-[13px] text-deep-brown">
                    {ADDRESS_LINE_1}
                    <br />
                    {ADDRESS_LINE_2}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA banner — Pronto a vivere l'Umbria?                                    */
/* -------------------------------------------------------------------------- */

function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMG.ctaBanner}
        alt="Paesaggio dell'Umbria al crepuscolo"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 cta-overlay" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 py-24 text-center text-cream md:px-8 md:py-28">
        <Eyebrow light centered>
          Antica Loggia · Trevi · Umbria
        </Eyebrow>
        <h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl md:text-[4rem]">
          Pronto a vivere l&apos;Umbria?
        </h2>
        <p className="max-w-xl text-[15px] leading-relaxed text-cream/80">
          Scrivici per disponibilità, preventivi o suggerimenti su misura.
          Saremo felici di accoglierti nella nostra dimora.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <BtnContact className="!bg-cream !text-olive-deep hover:!bg-paper !px-7 !py-3.5">
            Contattaci
          </BtnContact>
          <BtnWhatsApp className="!px-7 !py-3.5">
            Scrivici su WhatsApp
          </BtnWhatsApp>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="bg-footer text-cream relative overflow-hidden">
      <OliveBranch className="pointer-events-none absolute -right-8 top-6 h-[300px] w-auto opacity-15 hidden md:block" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-cream/65">
            Antica Loggia, casa vacanze di charme nel cuore di Trevi, Umbria.
            Un soggiorno autentico tra pietra antica, ulivi e silenzio.
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
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-[13px] text-cream/75">
            {NAV.slice(1).map((n) => (
              <li key={n.label}>
                <a href={n.href} className="transition hover:text-cream">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-[11px] text-cream/55 sm:flex-row sm:items-center md:px-8">
          <span>
            © {new Date().getFullYear()} Antica Loggia · Casa Vacanze · Trevi (PG), Umbria
          </span>
          <span className="font-serif italic text-gold-soft">
            «Dove la pietra antica racconta nuove storie.»
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
      <Header />
      <main className="flex-1">
        <Hero />
        <HighlightStrip />
        <DoveLaStoria />
        <Gallery />
        <PercheScegliere />
        <ServiziInclusi />
        <ThreeCards />
        <InfoCards />
        <Recensioni />
        <ContactForm />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
