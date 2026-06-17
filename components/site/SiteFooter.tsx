"use client";

import Image from "next/image";
import Link from "next/link";
import { CIN, EMAIL, I, LICENSE_NUMBER, WHATSAPP_DISPLAY, mailto, telLink, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";

/** CTA finale + footer globale: un'unica sezione con sfondo mare condiviso. */
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
    <footer
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cta-mare.jpg')" }}
    >
      {/* velo leggero in alto (CTA), piu' scuro in basso (footer leggibile) */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/10 via-deep-brown/28 to-deep-brown/68" />

      <div className="relative">
        {/* ---------- CTA ---------- */}
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white">
          <h2 className="font-serif text-3xl font-bold drop-shadow md:text-4xl">{tr(lang, { it: "Pronto a prenotare?", en: "Ready to book?" })}</h2>
          <p className="mt-1 font-script text-2xl text-white drop-shadow">{tr(lang, { it: "Siamo qui per te!", en: "We're here for you!" })}</p>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/90 drop-shadow">{tr(lang, { it: "Scrivici su WhatsApp per disponibilità, info sul soggiorno e il miglior prezzo diretto. Risposta rapida garantita.", en: "Chat with us on WhatsApp for availability, stay info and the best direct price. Quick reply guaranteed." })}</p>
          <div className="mt-6 flex justify-center">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center rounded-full px-8 py-3 text-white shadow-lg transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
              <span className="inline-flex items-center gap-2 text-sm font-semibold"><I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp" })}</span>
              <span className="text-[11px] text-white/90">{tr(lang, { it: "Risposta rapida!", en: "Quick reply!" })}</span>
            </a>
          </div>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/85 drop-shadow">
            <span>{tr(lang, { it: "Nessuna commissione", en: "No booking fees" })}</span>·
            <span>{tr(lang, { it: "Nessun pagamento online", en: "No online payment" })}</span>·
            <span>{tr(lang, { it: "Paghi al check-in", en: "Pay at check-in" })}</span>
          </p>
        </div>

        {/* ---------- FOOTER ---------- */}
        <div className="border-t border-white/15">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-cream md:grid-cols-4 md:px-8">
            <div>
              <Link href="/" className="inline-block" aria-label="MiriAle Holiday House — Home">
                <Image src="/images/logo-miriale-light.png" alt="MiriAle Holiday House" width={367} height={276} className="h-20 w-auto" />
              </Link>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-cream/60">{tr(lang, { it: "Fiumicino · Italia", en: "Fiumicino · Italy" })}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-cream">{tr(lang, { it: "Link rapidi", en: "Quick links" })}</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-cream/80">
                <ul className="space-y-2">
                  {quick1.map((q) => <li key={q.href}><Link href={q.href} className="transition hover:text-white">{tr(lang, q.label)}</Link></li>)}
                </ul>
                <ul className="space-y-2">
                  {quick2.map((q) => <li key={q.href}><Link href={q.href} className="transition hover:text-white">{tr(lang, q.label)}</Link></li>)}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-cream">{tr(lang, { it: "Contattaci", en: "Contact us" })}</h4>
              <ul className="mt-4 space-y-3 text-[13px] text-cream/80">
                <li><a href={telLink} className="flex items-center gap-2 transition hover:text-white"><I.phone className="h-4 w-4 text-gold" /> {WHATSAPP_DISPLAY}</a></li>
                <li><a href={mailto} className="flex items-center gap-2 transition hover:text-white"><I.mail className="h-4 w-4 text-gold" /> {EMAIL}</a></li>
                <li className="flex items-center gap-2"><I.pin className="h-4 w-4 text-gold" /> {tr(lang, { it: "Fiumicino (Roma), Italia", en: "Fiumicino (Rome), Italy" })}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-cream">{tr(lang, { it: "Seguici", en: "Follow us" })}</h4>
              <div className="mt-4 flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 transition hover:border-cream/70"><I.facebook className="h-4 w-4" /></a>
                <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 transition hover:border-cream/70"><I.instagram className="h-4 w-4" /></a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 transition hover:border-cream/70"><I.whatsapp className="h-4 w-4" /></a>
                <span aria-label="Google" className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 text-sm font-bold">G</span>
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-cream/65">{tr(lang, { it: "Grazie per supportare la nostra attività familiare!", en: "Thank you for supporting our family business!" })}</p>
            </div>
          </div>
        </div>

        {/* ---------- legal line ---------- */}
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-6 py-3 text-center text-[11px] leading-relaxed text-cream/55 md:px-8">
            {tr(lang, {
              it: `Casa vacanze gestita da host privato · Codice identificativo nazionale (CIN) ${CIN} · N. licenza ${LICENSE_NUMBER}`,
              en: `Holiday home managed by a private host · National identification code (CIN) ${CIN} · Licence no. ${LICENSE_NUMBER}`,
            })}
          </p>
        </div>

        {/* ---------- bottom bar ---------- */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[11px] text-cream/65 sm:flex-row md:px-8">
            <span>© 2026 MiriAle Holiday House · {tr(lang, { it: "Tutti i diritti riservati", en: "All rights reserved" })}</span>
            <span className="flex gap-5">
              <Link href="/contatti" className="transition hover:text-white">{tr(lang, { it: "Privacy Policy", en: "Privacy Policy" })}</Link>
              <Link href="/contatti" className="transition hover:text-white">{tr(lang, { it: "Termini e condizioni", en: "Terms & Conditions" })}</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
