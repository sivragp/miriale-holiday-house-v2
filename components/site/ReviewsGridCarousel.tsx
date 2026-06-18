"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Review } from "@/lib/reviews";
import ReviewCard from "@/components/site/ReviewCard";
import { useLang, tr } from "@/components/site/LangProvider";

/** Carosello paginato di recensioni: 4 card per pagina in griglia 2x2, con frecce. */
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

  // suddivide in pagine da `perPage`, limitate a `maxPages`
  const pages: Review[][] = [];
  for (let i = 0; i < reviews.length; i += perPage) pages.push(reviews.slice(i, i + perPage));
  const visiblePages = pages.slice(0, maxPages);

  const [page, setPage] = useState(0);
  const n = visiblePages.length;
  const go = (d: number) => setPage((p) => (p + d + n) % n);

  if (!n) return null;

  return (
    <div>
      {/* pagine impilate nella stessa cella: l'altezza resta fissa (= pagina più alta) */}
      <div className="grid">
        {visiblePages.map((pg, idx) => (
          <div
            key={idx}
            aria-hidden={idx !== page}
            className={`col-start-1 row-start-1 grid grid-cols-1 gap-4 transition-opacity duration-300 sm:grid-cols-2 ${
              idx === page ? "opacity-100" : "pointer-events-none invisible opacity-0"
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
            aria-label={tr(lang, { it: "Pagina precedente", en: "Previous page" })}
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
                aria-label={tr(lang, { it: `Vai alla pagina ${idx + 1}`, en: `Go to page ${idx + 1}` })}
                onClick={() => setPage(idx)}
                className={`h-2 rounded-full transition-all ${idx === page ? "w-5 bg-terracotta" : "w-2 bg-line"}`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label={tr(lang, { it: "Pagina successiva", en: "Next page" })}
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
