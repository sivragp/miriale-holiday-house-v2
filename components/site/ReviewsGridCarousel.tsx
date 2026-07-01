"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Review } from "@/lib/reviews";
import ReviewCard from "@/components/site/ReviewCard";
import { useLang, tr } from "@/components/site/LangProvider";

/** Carosello paginato di recensioni: `perPage` card per pagina su desktop (griglia 2x2),
 *  ridotte a max 2 per pagina su mobile, con frecce. */
export default function ReviewsGridCarousel({
  reviews,
  perPage = 4,
  maxPages = 3,
}: {
  reviews: Review[];
  perPage?: number;
  maxPages?: number;
}) {
  const { lang } = useLang();
  const [page, setPage] = useState(0);

  // Su mobile (<640px) max 2 card per pagina; su desktop il `perPage` passato.
  const [cols, setCols] = useState(perPage);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => {
      setCols(mq.matches ? perPage : Math.min(2, perPage));
      setPage(0);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [perPage]);

  // suddivide in pagine da `cols`, limitate a `maxPages`
  const pages: Review[][] = [];
  for (let i = 0; i < reviews.length; i += cols) pages.push(reviews.slice(i, i + cols));
  // tiene solo le pagine COMPLETE (sempre `cols` card); se nessuna è completa, usa quel che c'è
  const fullPages = pages.filter((p) => p.length === cols);
  const visiblePages = (fullPages.length ? fullPages : pages).slice(0, maxPages);

  const n = visiblePages.length;
  const cur = Math.min(page, n - 1);
  const go = (d: number) => setPage((p) => (Math.min(p, n - 1) + d + n) % n);

  if (!n) return null;

  return (
    <div>
      {/* pagine impilate nella stessa cella: l'altezza resta fissa (= pagina più alta) */}
      <div className="grid">
        {visiblePages.map((pg, idx) => (
          <div
            key={idx}
            aria-hidden={idx !== cur}
            className={`col-start-1 row-start-1 grid grid-cols-1 gap-4 transition-opacity duration-300 sm:grid-cols-2 ${
              idx === cur ? "opacity-100" : "pointer-events-none invisible opacity-0"
            }`}
          >
            {pg.map((r, i) => (
              <ReviewCard key={r.name + i} r={r} compact />
            ))}
          </div>
        ))}
      </div>

      {n > 1 && (
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={tr(lang, { it: "Pagina precedente", en: "Previous page", es: "Página anterior" })}
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-deep-brown shadow-sm transition hover:bg-cream"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {visiblePages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={tr(lang, { it: `Vai alla pagina ${idx + 1}`, en: `Go to page ${idx + 1}`, es: `Ir a la página ${idx + 1}` })}
                onClick={() => setPage(idx)}
                className={`h-2 rounded-full transition-all ${idx === cur ? "w-5 bg-terracotta" : "w-2 bg-line"}`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label={tr(lang, { it: "Pagina successiva", en: "Next page", es: "Página siguiente" })}
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-deep-brown shadow-sm transition hover:bg-cream"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
