"use client";

import { useState } from "react";
import { I, waLink } from "@/lib/site";

/** Converte 2026-07-12 -> 12/07/2026 */
function fmtData(d: string) {
  if (!d) return "";
  const [y, m, g] = d.split("-");
  return `${g}/${m}/${y}`;
}

/**
 * Box "Verifica disponibilità" in stile Airbnb, ma senza pagamento online:
 * check-in / check-out / ospiti → apre WhatsApp con un messaggio già scritto.
 */
export default function BookingWidget({
  className = "",
}: {
  className?: string;
}) {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [ospiti, setOspiti] = useState(2);

  const frasi = ["Ciao! Vorrei prenotare MiriAle"];
  if (checkin && checkout) frasi.push(`dal ${fmtData(checkin)} al ${fmtData(checkout)}`);
  else if (checkin) frasi.push(`a partire dal ${fmtData(checkin)}`);
  frasi.push(`per ${ospiti} ${ospiti === 1 ? "ospite" : "ospiti"}.`);
  frasi.push("C'è disponibilità?");
  const messaggio = frasi.join(" ");

  const campo =
    "mt-1 w-full rounded-xl border border-line bg-bone px-3 py-2.5 text-sm text-deep-brown outline-none transition focus:border-terracotta";

  return (
    <div
      className={`rounded-2xl border border-line bg-paper p-5 shadow-card ${className}`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-serif text-lg text-deep-brown">
          Verifica disponibilità
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-terracotta">
          <I.star className="h-3.5 w-3.5" /> 8.8
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-warm-gray">
            Check-in
          </span>
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className={campo}
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-warm-gray">
            Check-out
          </span>
          <input
            type="date"
            value={checkout}
            min={checkin || undefined}
            onChange={(e) => setCheckout(e.target.value)}
            className={campo}
          />
        </label>
      </div>

      <label className="mt-2.5 block">
        <span className="text-xs font-medium uppercase tracking-wide text-warm-gray">
          Ospiti
        </span>
        <select
          value={ospiti}
          onChange={(e) => setOspiti(Number(e.target.value))}
          className={campo}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "ospite" : "ospiti"}
            </option>
          ))}
        </select>
      </label>

      <a
        href={waLink(messaggio)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        style={{ backgroundColor: "#25d366" }}
      >
        <I.whatsapp className="h-4 w-4" />
        Prenota su WhatsApp
      </a>
      <p className="mt-2.5 text-center text-xs leading-relaxed text-warm-gray">
        Nessun pagamento online: ti rispondiamo noi e confermi tutto in chat.
      </p>
    </div>
  );
}
