import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import TodoNote from "@/components/site/TodoNote";
import {
  ADDRESS_FULL,
  Eyebrow,
  EMAIL,
  I,
  MAPS_EMBED,
  MAPS_SHORT,
  WHATSAPP_DISPLAY,
  mailto,
  telLink,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Richiedi disponibilità, scrivi su WhatsApp o vieni a trovarci. Tutte le indicazioni per arrivare a MiriAle a Fiumicino.",
  alternates: { canonical: "https://mirialeholidayhouse.it/contatti" },
  openGraph: {
    title: "Contatti — MiriAle Holiday House",
    description:
      "Richiedi disponibilità, scrivi su WhatsApp o vieni a trovarci a Fiumicino.",
    url: "https://mirialeholidayhouse.it/contatti",
  },
};

const fieldClass =
  "mt-1 w-full border-b border-[#E5E0D8] bg-transparent py-2 text-sm text-deep-brown outline-none transition focus:border-deep-brown placeholder:text-warm-gray/50";
const labelClass = "text-[10px] uppercase tracking-[0.22em] text-warm-gray";

export default function ContattiPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Parliamone."
        subtitle="Scrivici come preferisci. A risponderti è sempre il proprietario."
      />

      {/* Canali diretti */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-[#E5E0D8] bg-paper p-5 shadow-sm transition hover:shadow-md"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
              <I.whatsapp className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className={labelClass}>WhatsApp</div>
              <div className="text-sm font-medium text-deep-brown">
                Scrivici ora
              </div>
            </div>
          </a>
          <a
            href={telLink}
            className="flex items-center gap-4 rounded-2xl border border-[#E5E0D8] bg-paper p-5 shadow-sm transition hover:shadow-md"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
              <I.phone className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className={labelClass}>Telefono</div>
              <div className="text-sm font-medium text-deep-brown">
                {WHATSAPP_DISPLAY}
              </div>
            </div>
          </a>
          <a
            href={mailto}
            className="flex items-center gap-4 rounded-2xl border border-[#E5E0D8] bg-paper p-5 shadow-sm transition hover:shadow-md"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-olive">
              <I.mail className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className={labelClass}>Email</div>
              <div className="break-all text-sm font-medium text-deep-brown">
                {EMAIL}
              </div>
            </div>
          </a>
        </div>
        <div className="mx-auto mt-6 max-w-7xl px-6">
          {/* TODO MiriAle: orari di risposta tipici (es. "entro 2 ore in orario diurno, sempre disponibili in emergenza") — vedi brief SPOKE 4 §"Canali diretti" */}
          <TodoNote>
            Orari di risposta tipici da confermare (es. “rispondiamo entro 2
            ore in orario diurno, sempre disponibili in emergenza”).
          </TodoNote>
        </div>
      </section>

      {/* Modulo richiesta articolata */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Richiesta</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Invia una richiesta articolata.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-warm-gray">
            Più dettagli ci dai, più precisa è la risposta del proprietario.
          </p>

          <form className="mt-8 rounded-2xl border border-[#E5E0D8] bg-ivory p-6 shadow-sm md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Nome *</label>
                <input type="text" required placeholder="Il tuo nome" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" required placeholder="email@esempio.it" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Telefono</label>
                <input type="tel" placeholder="+39 ..." className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Numero ospiti adulti</label>
                <input type="number" min={1} placeholder="2" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Check-in</label>
                <input type="date" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Check-out</label>
                <input type="date" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Bambini (e età)</label>
                <input type="text" placeholder="es. 1 (3 anni)" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Come ci hai conosciuto</label>
                <select className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Seleziona…
                  </option>
                  <option>Google</option>
                  <option>Passaparola</option>
                  <option>Booking</option>
                  <option>Airbnb</option>
                  <option>Altro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  Esigenze speciali (culla, allergie, orari particolari…)
                </label>
                <input type="text" placeholder="Facoltativo" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Messaggio</label>
                <textarea
                  rows={4}
                  placeholder="Raccontaci del tuo soggiorno…"
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[12px] text-warm-gray/70">
                Modulo dimostrativo. Per una risposta immediata, scrivici su
                WhatsApp.
              </p>
              <a
                href={mailto}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "#2D4A2D" }}
              >
                <I.mail className="h-4 w-4" />
                Invia richiesta
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Cosa succede dopo l'invio */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Dopo l’invio</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Cosa succede dopo.
          </h2>
          <ol className="mt-8 space-y-4">
            {[
              "Ricevi una risposta diretta dal proprietario.",
              "Ti confermiamo disponibilità e tariffa per le tue date.",
              "Per bloccare le date, caparra (modalità da confermare).",
              "Ti diamo tutte le info pratiche per l’arrivo.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-sm font-semibold text-olive-dark">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-warm-gray">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            {/* TODO MiriAle: validare il flow di booking — importo/percentuale caparra, metodo di pagamento (bonifico?), eventuali altri step — vedi brief SPOKE 4 §"Cosa succede dopo l'invio" */}
            <TodoNote>
              Da validare: importo/percentuale della caparra, metodo di
              pagamento (bonifico?) ed eventuali altri passaggi del flusso di
              prenotazione.
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Come arrivare */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Come arrivare</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Da dove arrivi.
          </h2>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-warm-gray">
            <div>
              <h3 className="font-semibold text-deep-brown">In auto</h3>
              <p className="mt-1">
                Dal GRA si raggiunge Fiumicino tramite l’autostrada
                Roma–Fiumicino; dall’aeroporto pochi minuti di strada. Indirizzo
                per il navigatore: {ADDRESS_FULL}.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-deep-brown">In treno</h3>
              <p className="mt-1">
                Stazione di riferimento: Fiumicino Aeroporto, collegata a Roma
                dalla linea FL1 e dal Leonardo Express. Dalla stazione,
                pochi minuti in taxi o auto fino alla casa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-deep-brown">In aereo</h3>
              <p className="mt-1">
                Aeroporto di Roma Fiumicino a circa 6 km: pochi minuti in
                taxi/auto. Su richiesta è disponibile una navetta privata, a
                pagamento.
              </p>
            </div>
          </div>
          <div className="mt-8">
            {/* TODO MiriAle: dettagli precisi navetta privata (tariffa, prenotazione anticipata, fasce orarie) e parcheggio privato (dimensioni, prenotazione) — vedi brief SPOKE 4 §"Come arrivare" */}
            <TodoNote>
              Dettagli precisi della navetta privata (tariffa, prenotazione
              anticipata, fasce orarie) e del parcheggio privato (dimensioni,
              prenotazione).
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Mappa grande */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <iframe
            src={MAPS_EMBED}
            className="block h-[420px] w-full rounded-2xl border-0"
            style={{ border: 0 }}
            loading="lazy"
            title="Mappa MiriAle Holiday House"
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm text-warm-gray">{ADDRESS_FULL}</span>
            <a
              href={MAPS_SHORT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-olive transition hover:text-terracotta"
            >
              <I.pin className="h-4 w-4" />
              Apri su Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Lingue parlate */}
      <section className="bg-paper py-12 text-center">
        <p className="text-sm text-warm-gray">
          Lingue parlate: <strong className="text-deep-brown">Italiano</strong>,{" "}
          <strong className="text-deep-brown">Inglese</strong>,{" "}
          <strong className="text-deep-brown">Spagnolo</strong>.
        </p>
      </section>
    </main>
  );
}
