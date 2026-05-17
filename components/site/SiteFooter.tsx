import Link from "next/link";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  EMAIL,
  I,
  NAV,
  OliveBranch,
  WHATSAPP_DISPLAY,
  mailto,
  telLink,
  waLink,
} from "@/lib/site";

/** Footer globale, presente su tutte le pagine. */
export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-footer text-cream">
      <OliveBranch className="pointer-events-none absolute -right-8 top-6 hidden h-[300px] w-auto opacity-15 md:block" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Link
            href="/"
            className="font-serif text-2xl font-medium text-cream"
            aria-label="MiriAle Holiday House — Home"
          >
            MiriAle Holiday House
          </Link>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-cream/65">
            Casa vacanze vicino a Fiumicino — contatto diretto con il
            proprietario. A pochi minuti dall&apos;aeroporto di Roma
            Fiumicino.
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
                href={telLink}
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
            <li>
              <Link href="/" className="transition hover:text-cream">
                Home
              </Link>
            </li>
            {NAV.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="transition hover:text-cream">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-[11px] text-cream/55 sm:flex-row sm:items-center md:px-8">
          <span>
            © {new Date().getFullYear()} MiriAle Holiday House. Tutti i
            diritti riservati.
          </span>
          <span className="font-serif italic text-gold-soft">
            «Atterra. Respira. Sei già a casa.»
          </span>
        </div>
      </div>
    </footer>
  );
}
