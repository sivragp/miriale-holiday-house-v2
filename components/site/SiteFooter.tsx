"use client";

import Image from "next/image";
import Link from "next/link";
import { CIN, EMAIL, I, LICENSE_NUMBER, WHATSAPP_DISPLAY, mailto, telLink, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";
import ContactFormModal from "@/components/site/ContactFormModal";

/** CTA finale + footer globale: un'unica sezione con sfondo mare condiviso. */
export default function SiteFooter() {
  const { lang } = useLang();

  return (
    <footer
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cta-mare.jpg')" }}
    >
      {/* velo leggero in alto (CTA), piu' scuro in basso (footer leggibile) */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/10 via-deep-brown/28 to-deep-brown/68" />

      <div className="relative">
        {/* ---------- CTA ---------- */}
        <div className="mx-auto max-w-5xl px-6 py-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold drop-shadow md:text-4xl">{tr(lang, { it: "Pronto a prenotare?", en: "Ready to book?" })}</h2>
          <p className="mt-1 font-script text-2xl text-white drop-shadow">{tr(lang, { it: "Siamo qui per te!", en: "We're here for you!" })}</p>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/90 drop-shadow">{tr(lang, { it: "Scrivici su WhatsApp per disponibilità, info sul soggiorno e il miglior prezzo diretto. Risposta rapida garantita.", en: "Chat with us on WhatsApp for availability, stay info and the best direct price. Quick reply guaranteed." })}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center rounded-full px-8 py-3 text-white shadow-lg transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
              <span className="inline-flex items-center gap-2 text-sm font-semibold"><I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp" })}</span>
              <span className="text-[11px] text-white/90">{tr(lang, { it: "Risposta rapida!", en: "Quick reply!" })}</span>
            </a>
            <ContactFormModal
              variant="outline"
              size="lg"
              label={{ it: "Compila il modulo", en: "Fill in the form" }}
              className="border-white/60 bg-white/10 text-white shadow-lg backdrop-blur-sm hover:border-white hover:bg-white/20 hover:text-white"
            />
          </div>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/85 drop-shadow">
            <span>{tr(lang, { it: "Nessuna commissione", en: "No booking fees" })}</span>·
            <span>{tr(lang, { it: "Nessun pagamento online", en: "No online payment" })}</span>·
            <span>{tr(lang, { it: "Paghi al check-in", en: "Pay at check-in" })}</span>
          </p>
        </div>

        {/* ---------- FOOTER (compatto: logo + contatti affiancati, social ridotti) ---------- */}
        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-7 text-cream sm:flex-row sm:items-center sm:justify-between md:px-8">
            {/* logo + contatti affiancati */}
            <div className="flex items-center gap-5">
              <Link href="/" className="flex-shrink-0" aria-label="MiriAle Holiday House — Home">
                <Image src="/images/logo-miriale-light.png" alt="MiriAle Holiday House" width={367} height={276} className="h-14 w-auto" />
              </Link>
              <ul className="space-y-1.5 border-l border-white/15 pl-5 text-[13px] text-cream/80">
                <li><a href={telLink} className="flex items-center gap-2 transition hover:text-white"><I.phone className="h-4 w-4 text-gold" /> {WHATSAPP_DISPLAY}</a></li>
                <li><a href={mailto} className="flex items-center gap-2 transition hover:text-white"><I.mail className="h-4 w-4 text-gold" /> {EMAIL}</a></li>
                <li className="flex items-center gap-2"><I.pin className="h-4 w-4 text-gold" /> {tr(lang, { it: "Fiumicino (Roma), Italia", en: "Fiumicino (Rome), Italy" })}</li>
              </ul>
            </div>

            {/* social: solo Instagram + WhatsApp */}
            <div className="flex flex-col gap-2 sm:items-end">
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/mirialehouse" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 transition hover:border-cream/70"><I.instagram className="h-4 w-4" /></a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 transition hover:border-cream/70"><I.whatsapp className="h-4 w-4" /></a>
              </div>
              <p className="text-[12px] leading-relaxed text-cream/65">{tr(lang, { it: "Grazie per supportare la nostra attività familiare!", en: "Thank you for supporting our family business!" })}</p>
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
            <span className="text-cream/55">
              {tr(lang, { it: "Sito realizzato da", en: "Website designed and developed by" })}{" "}
              <a href="https://sivragp.com" target="_blank" rel="noopener noreferrer" className="font-medium text-gold transition hover:text-white">SIVRA Growth Partner</a>
            </span>
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
