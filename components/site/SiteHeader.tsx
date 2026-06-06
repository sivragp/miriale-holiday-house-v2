import Link from "next/link";
import { I, NAV, waLink } from "@/lib/site";

/** Header globale: wordmark → home, menu → pagine, CTA WhatsApp sempre visibile. */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ivory/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="MiriAle Holiday House — Home"
        >
          <I.arch className="h-9 w-9 text-deep-brown" />
          <span className="leading-tight">
            <span className="block font-serif text-base font-bold tracking-[0.14em] text-deep-brown md:text-lg">
              MiriAle Holiday House
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-warm-gray">
              Casa Vacanze
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-deep-brown lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="transition hover:text-terracotta"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          style={{ backgroundColor: "#1d4a5a" }}
        >
          <I.whatsapp className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
