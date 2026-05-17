/**
 * Tema "MiriAle Holiday House" — casa vacanze vicino a Fiumicino.
 * (Palette e tipografia ereditate dal template originale e mantenute.)
 *
 * La fonte di verità per il tema visivo è `app/globals.css` (`@theme {...}`
 * di Tailwind v4): le classi `bg-ivory`, `text-deep-brown`, `font-serif`
 * ecc. nascono lì. Questo file espone le stesse costanti come oggetto
 * TypeScript per usi non-CSS:
 *   - animazioni GSAP / Framer Motion (interpolazioni colore)
 *   - script Node (sharp, ffmpeg) che generano media coerenti col brand
 *   - canvas / WebGL / SVG dinamici
 *
 * Mantenere allineati i due file a mano. Se cambi un colore qui,
 * cambialo anche in `globals.css`.
 */

export const palette = {
  // Superfici / sfondi caldi
  ivory: "#f7f2e6",
  ivory2: "#f1ead9",
  cream: "#ece4cc",
  cream2: "#e8debe",
  stone: "#ddd2b3",
  paper: "#ffffff",
  bone: "#faf6ec",

  // Verdi umbri (oliveti)
  olive: "#6e7a4a",
  olive2: "#5a6440",
  oliveDark: "#3b4524",
  oliveDeep: "#2a3219",
  oliveSection: "#424f2c",
  oliveSection2: "#3a4628",
  footer: "#161a0c",

  // Accenti caldi
  gold: "#b89968",
  goldSoft: "#cdb285",
  goldDeep: "#9a7f50",
  terracotta: "#b96f4a",

  // WhatsApp brand
  wa: "#25d366",
  waDark: "#1fb858",

  // Testo & linee
  deepBrown: "#1f1d15",
  warmGray: "#6e6857",
  line: "#e2d9c0",
  lineSoft: "#ede4ce",
} as const;

export const fonts = {
  /** Titoli — serif elegante, variable font con asse opsz e SOFT. */
  serif: "var(--font-fraunces), 'Fraunces', 'Times New Roman', serif",
  /** Corpo testo — sans-serif neutro e leggibile. */
  sans: "var(--font-inter), 'Inter', system-ui, -apple-system, sans-serif",
} as const;

export const shadows = {
  soft: "0 1px 2px rgba(31,29,21,0.04), 0 8px 22px rgba(31,29,21,0.05)",
  card: "0 1px 3px rgba(31,29,21,0.05), 0 18px 40px rgba(31,29,21,0.08)",
  pill: "0 1px 2px rgba(31,29,21,0.06), 0 14px 36px rgba(31,29,21,0.12)",
  hero: "0 20px 60px rgba(31,29,21,0.18), 0 4px 16px rgba(31,29,21,0.08)",
} as const;

/**
 * Easing curves coerenti con la sensibilità "casa di campagna" — niente
 * snap aggressivi, transizioni morbide e materiche.
 */
export const easings = {
  inOut: [0.65, 0, 0.35, 1] as const,
  out: [0.22, 0.61, 0.36, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
} as const;

export type Palette = typeof palette;
export type PaletteKey = keyof Palette;

export const theme = { palette, fonts, shadows, easings } as const;
export default theme;
