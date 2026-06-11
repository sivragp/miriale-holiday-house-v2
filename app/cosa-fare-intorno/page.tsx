import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import TodoNote from "@/components/site/TodoNote";
import { Eyebrow, I, MAPS_EMBED, MAPS_SHORT, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cosa fare intorno",
  description:
    "Itinerari, spiagge, Roma in giornata, Ostia Antica, ristoranti. Tutto quello che puoi fare partendo da MiriAle, raccontato da chi ci vive.",
  alternates: {
    canonical: "https://mirialeholidayhouse.it/cosa-fare-intorno",
  },
  openGraph: {
    title: "Cosa fare intorno — MiriAle Holiday House",
    description:
      "Roma in giornata, il litorale, Ostia Antica e i ristoranti di zona.",
    url: "https://mirialeholidayhouse.it/cosa-fare-intorno",
  },
};

const itinerari = [
  {
    titolo: "Una giornata a Roma da MiriAle",
    testo:
      "Dalla stazione Aeroporto di Fiumicino il treno regionale FL1 collega in circa mezz'ora le fermate verso Roma; in alternativa il Leonardo Express raggiunge Roma Termini in circa 32 minuti. Se è la prima volta: Colosseo e Fori al mattino, pranzo nel rione Monti, pomeriggio tra Pantheon e Fontana di Trevi, rientro in serata con lo stesso collegamento ferroviario.",
  },
  {
    titolo: "Pomeriggio al litorale",
    testo:
      "Le spiagge più vicine sono quelle di Focene e del Lungomare della Salute, con Ostia Lido e Castel Fusano poco oltre. Mezza giornata di mare e poi cena in zona: il litorale di Fiumicino è noto per il pesce. Periodo migliore: tarda primavera ed estate; fuori stagione resta una bella passeggiata sul mare.",
  },
  {
    titolo: "Ostia Antica in mezza giornata",
    testo:
      "Il Parco archeologico di Ostia Antica è a pochi chilometri ed è una delle aree archeologiche meglio conservate vicino a Roma. Si raggiunge in auto in pochi minuti o con il trenino Roma–Lido. Bastano 2–3 ore per il percorso principale tra teatro, terme e domus.",
  },
  {
    titolo: "Roma fuori dai circuiti turistici",
    testo:
      "Se hai già visto i grandi monumenti, vale la pena dedicare mezza giornata a quartieri più vissuti: Garbatella e la sua architettura anni '20, Testaccio per la cucina romana popolare, Trastevere lontano dalla movida serale. Si mangia locale e si spende meno.",
  },
];

const ristoranti = [
  {
    nome: "It Italian Restaurant",
    distanza: "700 m",
    nota: "A pochi passi dalla casa, comodo per la prima sera senza muoversi in auto.",
  },
  {
    nome: "Luana",
    distanza: "700 m",
    nota: "Altra opzione a brevissima distanza, utile per arrivi serali.",
  },
  {
    nome: "Docking 9",
    distanza: "1,8 km",
    nota: "Sul versante del porto-canale, a breve distanza in auto.",
  },
];

export default function CosaFareIntornoPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Cosa fare intorno"
        title="Roma, mare e buona tavola. A portata di soggiorno."
        lead="Posizione strategica, raccontata da chi ci vive. Itinerari, spiagge e tavole da prendere appunti."
        image={{
          // TODO MiriAle: in futuro foto ambientale litorale/Roma. Per ora foto reale con vista sul territorio.
          src: "/images/house/house-14.jpg",
          alt: "Vista sul territorio da MiriAle Holiday House",
        }}
      />

      {/* Itinerari raccontati */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Itinerari</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Quattro idee per usare il soggiorno.
          </h2>

          <div className="mt-6">
            {/* TODO MiriAle: itinerari = prima bozza basata su conoscenza generale, DA VERIFICARE con la famiglia prima della pubblicazione (orari treni, tempi, consigli) — vedi brief SPOKE 3 §"Itinerari raccontati" */}
            <TodoNote>
              I testi qui sotto sono una <strong>prima bozza</strong> basata su
              informazioni generali: orari dei treni, tempi e consigli vanno
              verificati con la famiglia prima della pubblicazione.
            </TodoNote>
          </div>

          <div className="mt-10 space-y-10">
            {itinerari.map((it) => (
              <article key={it.titolo}>
                <h3 className="font-serif text-2xl font-light text-deep-brown">
                  {it.titolo}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-warm-gray">
                  {it.testo}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mangiare in zona */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Mangiare in zona</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Dove andiamo noi.
          </h2>
          <ul className="mt-8 divide-y divide-[#d8e2e5]">
            {ristoranti.map((r) => (
              <li key={r.nome} className="flex gap-4 py-4">
                <span className="mt-0.5 shrink-0 rounded-full bg-cream px-3 py-1 text-xs font-medium text-olive-dark">
                  {r.distanza}
                </span>
                <div>
                  <div className="text-sm font-semibold text-deep-brown">
                    {r.nome}
                  </div>
                  <div className="mt-0.5 text-sm text-warm-gray">{r.nota}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            {/* TODO MiriAle: altri ristoranti consigliati dalla famiglia con commento personale, tipo di cucina, fascia di prezzo, se serve prenotare — vedi brief SPOKE 3 §"Mangiare in zona" */}
            <TodoNote>
              Altri ristoranti consigliati dalla famiglia, con commento
              personale (“noi ci andiamo quando…”), tipo di cucina, fascia di
              prezzo e se è necessario prenotare.
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Suggerimenti per target */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>A misura di chi viaggia</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Consigli per come viaggi.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                In famiglia
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-warm-gray">
                <li>Spiagge attrezzate del litorale a pochi minuti</li>
                <li>Ostia Antica come gita culturale breve</li>
                <li>Casa intera e camere familiari per gli orari dei più piccoli</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                In coppia
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-warm-gray">
                <li>Roma in giornata, rientro tranquillo lontano dal centro</li>
                <li>Cena di pesce sul litorale</li>
                <li>Tramonto sul lungomare</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Per lavoro
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-warm-gray">
                <li>Aeroporto a circa 6 km per voli presto/tardi</li>
                <li>Wi-Fi gratuito e spazi tranquilli</li>
                <li>Parcheggio in loco, niente stress all’arrivo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Sulla mappa</Eyebrow>
          <h2 className="mt-3 mb-6 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Dove ti trovi.
          </h2>
          <iframe
            src={MAPS_EMBED}
            className="block h-[360px] w-full rounded-2xl border-0"
            style={{ border: 0 }}
            loading="lazy"
            title="Mappa MiriAle Holiday House"
          />
          <a
            href={MAPS_SHORT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-olive transition hover:text-terracotta"
          >
            <I.pin className="h-4 w-4" />
            Apri su Google Maps
          </a>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-ivory py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl font-light text-deep-brown md:text-3xl">
            Vuoi un consiglio personalizzato? Scrivici prima dell’arrivo.
          </h2>
          <a
            href={waLink(
              "Ciao! Vorrei qualche consiglio su cosa fare intorno a MiriAle Holiday House.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: "#0f2e45" }}
          >
            <I.whatsapp className="h-4 w-4" />
            Scrivici su WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
