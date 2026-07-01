"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { I, waLink } from "@/lib/site";
import { type Lang, useLang, tr } from "@/components/site/LangProvider";
import ContactFormModal, { GmailChip, GMAIL_BLUE } from "@/components/site/ContactFormModal";

/** Le 3 lingue disponibili. Le etichette sono endonimi: restano sempre
 *  nella loro lingua nativa, non si traducono per lingua corrente. */
const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "it", label: "Italiano", short: "IT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

/** Tendina lingua IT/EN/ES riusata in header (desktop) e accanto all'hamburger (mobile). */
function LangSwitch({
  lang,
  setLang,
  className = "",
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Lingua / Language / Idioma"
        className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-deep-brown transition hover:bg-cream-2"
      >
        {current.short}
        <span className="text-[10px] leading-none">▾</span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-1 min-w-[9rem] overflow-hidden rounded-xl border border-line bg-paper p-1 text-xs font-semibold shadow-card"
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitem"
              autoFocus={l.code === lang}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 transition ${
                l.code === lang ? "bg-deep-brown text-white" : "text-deep-brown hover:bg-cream-2"
              }`}
            >
              <span>{l.label}</span>
              <span className={l.code === lang ? "text-white/80" : "text-warm-gray"}>{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const nav = [
    { label: { it: "Esperienze", en: "Experiences", es: "Experiencias" }, href: "/cosa-fare-intorno" },
    { label: { it: "Contatti", en: "Contact", es: "Contacto" }, href: "/contatti" },
  ];
  const apts = [
    { label: { it: "Miri · 75 m²", en: "Miri · 75 m²", es: "Miri · 75 m²" }, href: "/miri" },
    { label: { it: "Ale · 55 m²", en: "Ale · 55 m²", es: "Ale · 55 m²" }, href: "/ale" },
    { label: { it: "Casa intera", en: "Whole house", es: "Casa entera" }, href: "/la-casa" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center" aria-label="MiriAle Holiday House">
          <Image src="/images/logo-miriale.png" alt="MiriAle Holiday House" width={391} height={300} priority className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-deep-brown lg:flex">
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-terracotta"
            >
              {tr(lang, { it: "Appartamenti", en: "Apartments", es: "Apartamentos" })}
              <span className="text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full z-10 w-48 translate-y-1 rounded-xl border border-line bg-paper p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {apts.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="block rounded-lg px-3 py-2 text-sm text-deep-brown transition hover:bg-cream-2"
                >
                  {tr(lang, a.label)}
                </Link>
              ))}
            </div>
          </div>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-terracotta">
              {tr(lang, n.label)}
            </Link>
          ))}
          <Link href="/recensioni" className="transition hover:text-terracotta">
            {tr(lang, { it: "Recensioni", en: "Reviews", es: "Reseñas" })}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* switch lingua desktop/tablet (≥ sm) */}
          <LangSwitch lang={lang} setLang={setLang} className="hidden sm:flex" />

          {/* header desktop: resta solo il WhatsApp (Email spostato nel menu mobile) */}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center gap-2 rounded-full px-4 py-2 text-white shadow-sm transition hover:opacity-90 sm:inline-flex"
            style={{ backgroundColor: "#25d366" }}
          >
            <I.whatsapp className="h-4 w-4 flex-shrink-0" />
            <span className="hidden flex-col items-start leading-tight sm:flex">
              <span className="text-sm font-medium">{tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp", es: "Escríbenos por WhatsApp" })}</span>
              <span className="text-[10px] text-white/90">{tr(lang, { it: "Risposta rapida!", en: "Quick reply!", es: "¡Respuesta rápida!" })}</span>
            </span>
          </a>

          {/* switch lingua mobile (< sm): accanto all'hamburger, un solo switch visibile */}
          <LangSwitch lang={lang} setLang={setLang} className="flex sm:hidden" />

          {/* hamburger (mobile/tablet) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={tr(lang, { it: "Apri il menu", en: "Open menu", es: "Abrir el menú" })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-deep-brown transition hover:bg-cream-2 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* ===================== MOBILE MENU (effetto bolla) ===================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* backdrop */}
            <button
              type="button"
              aria-label={tr(lang, { it: "Chiudi il menu", en: "Close menu", es: "Cerrar el menú" })}
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-deep-brown/40 backdrop-blur-sm"
            />

            {/* bolla che cresce dall'angolo in alto a destra */}
            <motion.div
              className="absolute right-3 top-3 w-[88vw] max-w-sm origin-top-right overflow-hidden rounded-[2.5rem] bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: "url('/images/luoghi/teal-water.jpg')" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              <div className="absolute inset-0 bg-paper/88" />

              {/* bollicine decorative (tema mare) */}
              {[
                { s: 26, l: "12%", b: "8%", d: 5 },
                { s: 16, l: "70%", b: "14%", d: 6.5 },
                { s: 40, l: "82%", b: "30%", d: 7.5 },
                { s: 12, l: "30%", b: "22%", d: 5.8 },
              ].map((b, i) => (
                <motion.span
                  key={i}
                  className="pointer-events-none absolute rounded-full bg-terracotta/15"
                  style={{ width: b.s, height: b.s, left: b.l, bottom: b.b }}
                  animate={{ y: [0, -14, 0], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between">
                  <Image src="/images/logo-miriale.png" alt="MiriAle Holiday House" width={391} height={300} className="h-9 w-auto" />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label={tr(lang, { it: "Chiudi", en: "Close", es: "Cerrar" })}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper/80 text-deep-brown shadow-sm transition hover:bg-paper"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1">
                  <p className="px-1 font-script text-xl text-terracotta">{tr(lang, { it: "Appartamenti", en: "Apartments", es: "Apartamentos" })}</p>
                  {apts.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl bg-paper/70 px-4 py-3 font-serif text-lg font-semibold text-deep-brown shadow-sm transition hover:bg-paper"
                    >
                      {tr(lang, a.label)}
                    </Link>
                  ))}
                  <div className="my-2 h-px bg-deep-brown/10" />
                  {nav.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3 font-serif text-lg font-semibold text-deep-brown transition hover:bg-paper/60"
                    >
                      {tr(lang, n.label)}
                    </Link>
                  ))}
                  <Link
                    href="/recensioni"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 font-serif text-lg font-semibold text-deep-brown transition hover:bg-paper/60"
                  >
                    {tr(lang, { it: "Recensioni", en: "Reviews", es: "Reseñas" })}
                  </Link>
                </nav>

                {/* WhatsApp + Email affiancati, stessa dimensione */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    style={{ backgroundColor: "#25d366" }}
                  >
                    <I.whatsapp className="h-4 w-4" /> WhatsApp
                  </a>
                  <ContactFormModal
                    renderTrigger={(open) => (
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          open();
                        }}
                        aria-haspopup="dialog"
                        aria-label="Email"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                        style={{ backgroundColor: GMAIL_BLUE }}
                      >
                        <GmailChip /> Email
                      </button>
                    )}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
