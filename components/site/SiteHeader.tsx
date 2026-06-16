"use client";

import Image from "next/image";
import Link from "next/link";
import { I, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";

export default function SiteHeader() {
  const { lang, setLang } = useLang();

  const nav = [
    { label: { it: "Esperienze", en: "Experiences" }, href: "/cosa-fare-intorno" },
    { label: { it: "Contatti", en: "Contact" }, href: "/contatti" },
  ];
  const apts = [
    { label: { it: "Miri · 75 m²", en: "Miri · 75 m²" }, href: "/miri" },
    { label: { it: "Ale · 55 m²", en: "Ale · 55 m²" }, href: "/ale" },
    { label: { it: "Casa intera", en: "Whole house" }, href: "/la-casa" },
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
              {tr(lang, { it: "Appartamenti", en: "Apartments" })}
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
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-line text-xs font-semibold sm:flex">
            <button
              type="button"
              onClick={() => setLang("it")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "it"
                  ? "bg-deep-brown text-white"
                  : "text-warm-gray hover:text-deep-brown"
              }`}
            >
              IT
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "en"
                  ? "bg-deep-brown text-white"
                  : "text-warm-gray hover:text-deep-brown"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: "#25d366" }}
          >
            <I.whatsapp className="h-4 w-4 flex-shrink-0" />
            <span className="hidden flex-col items-start leading-tight sm:flex">
              <span className="text-sm font-medium">{tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp" })}</span>
              <span className="text-[10px] text-white/90">{tr(lang, { it: "Risposta rapida!", en: "Quick reply!" })}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
