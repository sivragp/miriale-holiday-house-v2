"use client";

import Link from "next/link";
import { EMAIL, I, WHATSAPP_DISPLAY, mailto, telLink, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";

/** Footer globale, presente su tutte le pagine. Stile allineato ai mockup. */
export default function SiteFooter() {
  const { lang } = useLang();

  const quick1 = [
    { label: { it: "Appartamenti", en: "Apartments" }, href: "/#apartments" },
    { label: { it: "Posizione", en: "Location" }, href: "/#dove-siamo" },
    { label: { it: "Servizi", en: "Amenities" }, href: "/#servizi" },
  ];
  const quick2 = [
    { label: { it: "Recensioni", en: "Reviews" }, href: "/#recensioni" },
    { label: { it: "FAQ", en: "FAQ" }, href: "/#faq" },
    { label: { it: "Contatti", en: "Contact" }, href: "/contatti" },
  ];

  return (
    <footer className="bg-footer text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 md:px-8">
        {/* logo */}
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="MiriAle Holiday House — Home">
            <I.arch className="h-9 w-9 text-gold" />
            <span className="leading-tight">
              <span className="block font-serif text-lg font-bold tracking-[0.12em] text-cream">MiriAle Holiday House</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-cream/55">{tr(lang, { it: "Fiumicino · Italia", en: "Fiumicino · Italy" })}</span>
            </span>
          </Link>
        </div>

        {/* quick links */}
        <div>
          <h4 className="text-sm font-semibold text-cream">{tr(lang, { it: "Link rapidi", en: "Quick links" })}</h4>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-cream/75">
            <ul className="space-y-2">
              {quick1.map((q) => (
                <li key={q.href}><Link href={q.href} className="transition hover:text-cream">{tr(lang, q.label)}</Link></li>
              ))}
            </ul>
            <ul className="space-y-2">
              {quick2.map((q) => (
                <li key={q.href}><Link href={q.href} className="transition hover:text-cream">{tr(lang, q.label)}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* contact */}
        <div>
          <h4 className="text-sm font-semibold text-cream">{tr(lang, { it: "Contattaci", en: "Contact us" })}</h4>
          <ul className="mt-4 space-y-3 text-[13px] text-cream/75">
            <li><a href={telLink} className="flex items-center gap-2 transition hover:text-cream"><I.phone className="h-4 w-4 text-gold" /> {WHATSAPP_DISPLAY}</a></li>
            <li><a href={mailto} className="flex items-center gap-2 transition hover:text-cream"><I.mail className="h-4 w-4 text-gold" /> {EMAIL}</a></li>
            <li className="flex items-center gap-2"><I.pin className="h-4 w-4 text-gold" /> {tr(lang, { it: "Fiumicino (Roma), Italia", en: "Fiumicino (Rome), Italy" })}</li>
          </ul>
        </div>

        {/* follow */}
        <div>
          <h4 className="text-sm font-semibold text-cream">{tr(lang, { it: "Seguici", en: "Follow us" })}</h4>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 transition hover:border-cream/60"><I.facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 transition hover:border-cream/60"><I.instagram className="h-4 w-4" /></a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 transition hover:border-cream/60"><I.whatsapp className="h-4 w-4" /></a>
            <span aria-label="Google" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-sm font-bold">G</span>
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-cream/55">{tr(lang, { it: "Grazie per supportare la nostra attività familiare!", en: "Thank you for supporting our family business!" })}</p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[11px] text-cream/55 sm:flex-row md:px-8">
          <span>© 2025 MiriAle Holiday House · {tr(lang, { it: "Tutti i diritti riservati", en: "All rights reserved" })}</span>
          <span className="flex gap-5">
            <Link href="/contatti" className="transition hover:text-cream">{tr(lang, { it: "Privacy Policy", en: "Privacy Policy" })}</Link>
            <Link href="/contatti" className="transition hover:text-cream">{tr(lang, { it: "Termini e condizioni", en: "Terms & Conditions" })}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
