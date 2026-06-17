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

/** Card recensione in stile Booking: intestazione ospite, punteggio, pro e contro. */
export default function ReviewCard({ r, className = "" }: { r: Review; className?: string }) {
  const { lang } = useLang();
  const initial = r.name.charAt(0).toUpperCase();

  return (
    <figure className={`flex h-full flex-col rounded-2xl border border-line bg-paper p-5 shadow-sm ${className}`}>
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cream-2 font-serif text-base font-bold text-deep-brown">
            {initial}
          </span>
          <div className="leading-tight">
            <p className="font-semibold text-deep-brown">
              {r.name} <span className="ml-0.5">{flag(r.cc)}</span>
            </p>
            <p className="text-xs text-warm-gray">
              {tr(lang, TRAVELLER_LABEL[r.traveller])} · {tr(lang, PURPOSE_LABEL[r.purpose])}
            </p>
          </div>
        </div>
        <span className="flex-shrink-0 rounded-lg rounded-tr-none bg-terracotta px-2.5 py-1 text-sm font-bold text-white">
          {r.score.toLocaleString(lang === "it" ? "it-IT" : "en-US")}
        </span>
      </div>

      {/* body: pro / contro */}
      <div className="mt-4 flex-1 space-y-2.5 text-sm leading-relaxed">
        <p className="flex gap-2 text-deep-brown">
          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2a9d4a]" strokeWidth={2} />
          <span>{tr(lang, r.pos)}</span>
        </p>
        {r.neg ? (
          <p className="flex gap-2 text-warm-gray">
            <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-gray" strokeWidth={2} />
            <span>{tr(lang, r.neg)}</span>
          </p>
        ) : null}
      </div>

      {/* footer: data */}
      <figcaption className="mt-4 border-t border-line-soft pt-3 text-xs text-warm-gray">
        {formatReviewDate(r.date, lang)} · Booking.com
      </figcaption>
    </figure>
  );
}
