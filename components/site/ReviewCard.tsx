"use client";

import { Check, Minus } from "lucide-react";
import {
  type Review,
  PURPOSE_LABEL,
  TRAVELLER_LABEL,
  flag,
  formatReviewDate,
} from "@/lib/reviews";
import { useLang, tr } from "@/components/site/LangProvider";

/** Card recensione in stile Booking: intestazione ospite, punteggio, pro e contro.
 *  `compact` = altezza/testo contenuti (per il carosello in home/appartamento). */
export default function ReviewCard({
  r,
  className = "",
  compact = false,
}: {
  r: Review;
  className?: string;
  compact?: boolean;
}) {
  const { lang } = useLang();
  const initial = r.name.charAt(0).toUpperCase();

  return (
    <figure className={`flex h-full flex-col rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-card ${compact ? "p-4" : "p-5"} ${className}`}>
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cream-2 font-serif text-sm font-bold text-deep-brown">
            {initial}
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-deep-brown">
              {r.name} <span className="ml-0.5">{flag(r.cc)}</span>
            </p>
            <p className="text-[11px] text-warm-gray">
              {tr(lang, TRAVELLER_LABEL[r.traveller])} · {tr(lang, PURPOSE_LABEL[r.purpose])}
            </p>
          </div>
        </div>
        <span className="flex-shrink-0 rounded-lg rounded-tr-none bg-terracotta px-2.5 py-1 text-sm font-bold text-white">
          {r.score.toLocaleString(lang === "it" ? "it-IT" : "en-US")}
        </span>
      </div>

      {/* body: pro / contro */}
      <div className={`mt-3 flex-1 space-y-2 leading-relaxed ${compact ? "text-[13px]" : "text-sm"}`}>
        <p className="flex gap-2 text-deep-brown">
          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2a9d4a]" strokeWidth={2} />
          <span className={compact ? "line-clamp-4" : ""}>{tr(lang, r.pos)}</span>
        </p>
        {r.neg ? (
          <p className="flex gap-2 text-warm-gray">
            <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-gray" strokeWidth={2} />
            <span className={compact ? "line-clamp-2" : ""}>{tr(lang, r.neg)}</span>
          </p>
        ) : null}
      </div>

      {/* footer: data */}
      <figcaption className={`border-t border-line-soft text-warm-gray ${compact ? "mt-3 pt-2.5 text-[11px]" : "mt-4 pt-3 text-xs"}`}>
        {formatReviewDate(r.date, lang)} · Booking.com
      </figcaption>
    </figure>
  );
}
