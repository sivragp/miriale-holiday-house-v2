"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Star } from "lucide-react";
import {
  type Review,
  type TravellerType,
  REVIEWS,
  REVIEW_STATS,
  REVIEW_TOPICS,
  TRAVELLER_LABEL,
} from "@/lib/reviews";
import ReviewCard from "@/components/site/ReviewCard";
import Reveal from "@/components/site/Reveal";
import { I, waLink } from "@/lib/site";
import { useLang, tr } from "@/components/site/LangProvider";
import type { B } from "@/lib/apartments";

type Sort = "recent" | "high" | "low";

export default function AllReviews() {
  const { lang } = useLang();
  const t = (b: B) => tr(lang, b);

  const [query, setQuery] = useState("");
  const [travellers, setTravellers] = useState<Set<TravellerType>>(new Set());
  const [topic, setTopic] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("recent");

  const eyebrow = "font-script text-2xl leading-none text-terracotta";

  // tipi di viaggiatore realmente presenti, con conteggio
  const travellerCounts = useMemo(() => {
    const m = new Map<TravellerType, number>();
    REVIEWS.forEach((r) => m.set(r.traveller, (m.get(r.traveller) ?? 0) + 1));
    return m;
  }, []);

  const toggleTraveller = (tt: TravellerType) => {
    setTravellers((prev) => {
      const next = new Set(prev);
      if (next.has(tt)) next.delete(tt);
      else next.add(tt);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let list: Review[] = REVIEWS.filter((r) => {
      if (travellers.size && !travellers.has(r.traveller)) return false;
      if (topic) {
        const blob = `${r.pos.it} ${r.pos.en} ${r.neg?.it ?? ""} ${r.neg?.en ?? ""}`.toLowerCase();
        if (!blob.includes(topic.toLowerCase())) return false;
      }
      if (query.trim()) {
        const q = query.toLowerCase();
        const blob = `${r.name} ${r.pos.it} ${r.pos.en} ${r.neg?.it ?? ""} ${r.neg?.en ?? ""}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
    list = [...list].sort((a, b) => {
      if (sort === "high") return b.score - a.score;
      if (sort === "low") return a.score - b.score;
      return b.date.localeCompare(a.date); // recent
    });
    return list;
  }, [travellers, topic, query, sort]);

  const resetFilters = () => {
    setTravellers(new Set());
    setTopic(null);
    setQuery("");
  };
  const hasFilters = travellers.size > 0 || topic !== null || query.trim() !== "";

  const sortOptions: { v: Sort; t: B }[] = [
    { v: "recent", t: { it: "Più recenti", en: "Most recent", es: "Más recientes" } },
    { v: "high", t: { it: "Punteggio più alto", en: "Highest score", es: "Puntuación más alta" } },
    { v: "low", t: { it: "Punteggio più basso", en: "Lowest score", es: "Puntuación más baja" } },
  ];

  return (
    <main className="flex-1">
      {/* ===================== HERO ===================== */}
      <section className="bg-paper">
        <Reveal className="mx-auto max-w-7xl px-6 py-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-warm-gray transition hover:text-terracotta">
            <ArrowLeft className="h-4 w-4" /> {tr(lang, { it: "Torna alla home", en: "Back to home", es: "Volver al inicio" })}
          </Link>
          <p className={`mt-4 ${eyebrow}`}>{tr(lang, { it: "Cosa dicono gli ospiti", en: "What guests say", es: "Lo que dicen los huéspedes" })}</p>
          <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-deep-brown md:text-5xl">
            {tr(lang, { it: "Recensioni di MiriAle Holiday House", en: "MiriAle Holiday House reviews", es: "Reseñas de MiriAle Holiday House" })}
          </h1>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-warm-gray">
            <span className="inline-flex items-center gap-2">
              <span className="rounded-lg rounded-tr-none bg-terracotta px-2.5 py-1 text-sm font-bold text-white">{REVIEW_STATS.overall}</span>
              <span className="font-semibold text-deep-brown">{t(REVIEW_STATS.word)}</span>
            </span>
            <span>·</span>
            <span>{tr(lang, { it: `${REVIEW_STATS.count} recensioni reali su Booking.com`, en: `${REVIEW_STATS.count} genuine reviews on Booking.com`, es: `${REVIEW_STATS.count} reseñas reales en Booking.com` })}</span>
          </p>
        </Reveal>
      </section>

      <section className="bg-cream py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[300px_1fr] lg:gap-10">
          {/* ===================== SIDEBAR ===================== */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* punteggio + sub-score */}
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-bold text-deep-brown">{REVIEW_STATS.overall}<span className="text-xl text-warm-gray">/10</span></span>
                <div>
                  <p className="font-semibold text-deep-brown">{t(REVIEW_STATS.word)}</p>
                  <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
                </div>
              </div>
              <p className="mt-2 text-xs text-warm-gray">{tr(lang, { it: `Media su ${REVIEW_STATS.count} recensioni`, en: `Average over ${REVIEW_STATS.count} reviews`, es: `Media sobre ${REVIEW_STATS.count} reseñas` })}</p>

              <p className="mt-5 text-sm font-semibold text-deep-brown">{tr(lang, { it: "Punteggi per categoria", en: "Category ratings", es: "Puntuaciones por categoría" })}</p>
              <ul className="mt-3 space-y-2.5">
                {REVIEW_STATS.subs.map((s) => (
                  <li key={s.t.en}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-warm-gray">{t(s.t)}</span>
                      <span className="font-semibold text-deep-brown">{s.v.toLocaleString(lang === "it" ? "it-IT" : "en-US")}</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-cream-2">
                      <div className="h-full rounded-full bg-terracotta" style={{ width: `${(s.v / 10) * 100}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* filtro per tipo di viaggiatore */}
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <p className="text-sm font-semibold text-deep-brown">{tr(lang, { it: "Tipo di viaggiatore", en: "Traveller type", es: "Tipo de viajero" })}</p>
              <ul className="mt-3 space-y-1.5">
                {[...travellerCounts.entries()].map(([tt, c]) => (
                  <li key={tt}>
                    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-deep-brown">
                      <input type="checkbox" checked={travellers.has(tt)} onChange={() => toggleTraveller(tt)} className="h-4 w-4 accent-terracotta" />
                      <span className="flex-1">{t(TRAVELLER_LABEL[tt])}</span>
                      <span className="text-xs text-warm-gray">{c}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* argomenti più citati */}
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <p className="text-sm font-semibold text-deep-brown">{tr(lang, { it: "Argomenti più citati", en: "Most mentioned topics", es: "Temas más mencionados" })}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {REVIEW_TOPICS.map((tp) => {
                  const active = topic === tp.it;
                  return (
                    <button
                      key={tp.en}
                      type="button"
                      onClick={() => setTopic(active ? null : tp.it)}
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition ${active ? "border-terracotta bg-terracotta text-white" : "border-line bg-bone text-deep-brown hover:border-terracotta"}`}
                    >
                      {t(tp)}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ===================== LIST ===================== */}
          <div>
            {/* toolbar: ricerca + ordina */}
            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-gray" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={tr(lang, { it: "Cerca nelle recensioni…", en: "Search reviews…", es: "Buscar en las reseñas…" })}
                  className="w-full rounded-xl border border-line bg-bone py-2.5 pl-9 pr-3 text-sm text-deep-brown outline-none focus:border-terracotta"
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-warm-gray">
                {tr(lang, { it: "Ordina:", en: "Sort:", es: "Ordenar:" })}
                <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded-xl border border-line bg-bone px-3 py-2.5 text-sm font-medium text-deep-brown outline-none focus:border-terracotta">
                  {sortOptions.map((o) => <option key={o.v} value={o.v}>{t(o.t)}</option>)}
                </select>
              </label>
            </div>

            {/* conteggio + reset */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-warm-gray">
                {tr(lang, { it: `${filtered.length} recensioni a testo integrale`, en: `${filtered.length} full-text reviews`, es: `${filtered.length} reseñas con texto completo` })}
              </p>
              {hasFilters ? (
                <button type="button" onClick={resetFilters} className="text-sm font-semibold text-terracotta hover:underline">
                  {tr(lang, { it: "Azzera filtri", en: "Clear filters", es: "Borrar filtros" })}
                </button>
              ) : null}
            </div>

            {/* griglia recensioni */}
            {filtered.length ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {filtered.map((r, i) => <ReviewCard key={r.name + i} r={r} />)}
              </div>
            ) : (
              <p className="mt-8 rounded-2xl border border-line bg-paper p-8 text-center text-sm text-warm-gray">
                {tr(lang, { it: "Nessuna recensione corrisponde ai filtri scelti.", en: "No reviews match the selected filters.", es: "Ninguna reseña coincide con los filtros seleccionados." })}
              </p>
            )}

            {/* nota trasparenza */}
            <p className="mt-6 rounded-xl bg-paper px-4 py-3 text-xs leading-relaxed text-warm-gray">
              {tr(lang, {
                it: `MiriAle ha ${REVIEW_STATS.count} recensioni su Booking.com con punteggio ${REVIEW_STATS.overall}. Qui mostriamo a testo integrale le recensioni pubblicate dagli ospiti; il punteggio complessivo e i punteggi per categoria sono calcolati su tutte le ${REVIEW_STATS.count} recensioni.`,
                en: `MiriAle has ${REVIEW_STATS.count} reviews on Booking.com with a ${REVIEW_STATS.overall} score. Here we show the full text of the guest reviews; the overall and category scores are calculated across all ${REVIEW_STATS.count} reviews.`,
                es: `MiriAle tiene ${REVIEW_STATS.count} reseñas en Booking.com con una puntuación de ${REVIEW_STATS.overall}. Aquí mostramos el texto completo de las reseñas de los huéspedes; la puntuación global y las puntuaciones por categoría se calculan sobre las ${REVIEW_STATS.count} reseñas.`,
              })}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-6 py-5 text-center sm:flex-row sm:text-left">
              <div>
                <p className="font-semibold text-deep-brown">{tr(lang, { it: "Vuoi soggiornare da noi?", en: "Want to stay with us?", es: "¿Quieres alojarte con nosotros?" })}</p>
                <p className="text-sm text-warm-gray">{tr(lang, { it: "Scrivi a Fabio su WhatsApp per disponibilità e miglior prezzo diretto.", en: "Message Fabio on WhatsApp for availability and the best direct price.", es: "Escribe a Fabio por WhatsApp para consultar disponibilidad y el mejor precio directo." })}</p>
              </div>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex flex-shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90" style={{ backgroundColor: "#25d366" }}>
                <I.whatsapp className="h-4 w-4" /> {tr(lang, { it: "Scrivi su WhatsApp", en: "Chat on WhatsApp", es: "Escribe por WhatsApp" })}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
