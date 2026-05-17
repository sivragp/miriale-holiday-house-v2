import type { ReactNode } from "react";

/**
 * Segnaposto visibile per contenuti che il cliente deve ancora fornire.
 * Non è filler: rende esplicito cosa manca, sia in pagina sia nel codice
 * (accanto va sempre lasciato un commento {/* TODO MiriAle: ... *​/}).
 */
export default function TodoNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-terracotta/40 bg-terracotta/[0.04] p-5 text-sm leading-relaxed text-warm-gray">
      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta">
        Contenuto da fornire
      </span>
      {children}
    </div>
  );
}
