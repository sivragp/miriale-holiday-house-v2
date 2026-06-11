import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Gallery from "@/components/site/Gallery";
import TodoNote from "@/components/site/TodoNote";
import { Eyebrow, I, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "Tour della casa ambiente per ambiente: ingresso, cucina, camere e zone comfort. Foto, dotazioni e dettagli pratici per il tuo soggiorno a Fiumicino.",
  alternates: { canonical: "https://mirialeholidayhouse.it/la-casa" },
  openGraph: {
    title: "La casa — MiriAle Holiday House",
    description:
      "Tour della casa ambiente per ambiente: ingresso, cucina, camere e zone comfort.",
    url: "https://mirialeholidayhouse.it/la-casa",
  },
};

const ambienti = [
  {
    label: "Ingresso e living",
    img: "/images/house/house-16.jpg",
    narrazione:
      "La prima cosa che fai quando entri: posi la valigia e rallenti. La zona living è il punto in cui il viaggio finisce e inizia il soggiorno — pensata per chi arriva stanco e vuole solo sedersi.",
    todo: "Foto extra del living, metratura, numero posti del divano, presenza TV e oggetti che caratterizzano l'ambiente.",
  },
  {
    label: "Cucina",
    img: "/images/house/house-10.jpg",
    narrazione:
      "Una cucina vera, non un angolo cottura simbolico: si usa davvero, anche solo per una cena veloce prima di un volo all'alba o per organizzare la colazione dei bambini.",
    todo: "Dotazioni complete: forno, tipo piano cottura (gas/induzione), frigo, lavastoviglie, macchina caffè, microonde, set piatti/posate per quante persone — più foto di dettaglio.",
  },
  {
    label: "Camere",
    img: "/images/house/house-26.jpg",
    narrazione:
      "Quattro camere matrimoniali distribuite nei due appartamenti, pensate per riposare bene anche con orari da viaggio: silenzio, biancheria curata e aria condizionata. In tutto fino a 8 ospiti, in base alla disponibilità.",
    todo: "Descrizione precisa delle 3 camere matrimoniali: tipologia letti, eventuale letto aggiuntivo, armadio, comodini, eventuale balcone collegato, foto extra per ognuna.",
  },
  {
    label: "Bagni e zone comfort",
    img: "/images/house/house-20.jpg",
    narrazione:
      "I due bagni e gli spazi comuni completano il quadro: tutto quello che serve per sentirsi a casa anche per una sola notte, senza rinunce.",
    todo: "Dettagli dei due bagni (doccia, asciugacapelli, set cortesia), balcone e giardino con foto.",
  },
];

export default function LaCasaPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="La casa"
        title="La casa, ambiente per ambiente."
        lead="Tutto quello che trovi quando entri: spazi, dotazioni e dettagli pensati per chi viaggia."
        image={{
          src: "/images/house/house-16.jpg",
          alt: "Ingresso e zona living di MiriAle Holiday House",
        }}
      />

      {/* Layout della casa */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Layout della casa</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Due appartamenti, fino a 8 ospiti.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-warm-gray">
            MiriAle è una struttura a conduzione familiare con due appartamenti
            indipendenti (75 e 55 m²): li prenoti singolarmente o insieme come
            casa intera. In tutto 4 camere matrimoniali, 2 bagni e zone giorno,
            fino a 8 ospiti.
          </p>
          <div className="mt-8 max-w-2xl">
            {/* TODO MiriAle: metratura totale, planimetria (SVG/PNG), distribuzione precisa delle stanze — vedi brief SPOKE 1 §"Layout della casa" */}
            <TodoNote>
              Appartamenti da 75 m² e 55 m². Planimetria e distribuzione precisa
              delle stanze: da confermare col cliente.
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Tour ambiente per ambiente */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Ambiente per ambiente</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Il tour della casa.
          </h2>

          <div className="mt-12 space-y-16">
            {ambienti.map((a, i) => (
              <article
                key={a.label}
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={`MiriAle Holiday House — ${a.label}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-deep-brown">
                    {a.label}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-warm-gray">
                    {a.narrazione}
                  </p>
                  <div className="mt-5">
                    {/* TODO MiriAle: ${a.label} — foto extra, descrizione granulare e dotazioni complete — vedi brief SPOKE 1 §"Tour ambiente per ambiente" */}
                    <TodoNote>{a.todo}</TodoNote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dotazioni complete */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Dotazioni</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Cosa trovi, raggruppato per come lo userai.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Per il riposo
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-warm-gray">
                <li>Camere familiari</li>
                <li>Aria condizionata e riscaldamento</li>
                <li>Bagno privato</li>
                <li>Casa non fumatori</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Per la vita di tutti i giorni
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-warm-gray">
                <li>Cucina attrezzata</li>
                <li>Lavatrice</li>
                <li>TV schermo piatto</li>
                <li>Wi-Fi gratuito</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Spazi e arrivo
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-warm-gray">
                <li>Balcone e giardino</li>
                <li>Parcheggio gratuito in loco</li>
                <li>Navetta aeroporto (a pagamento)</li>
                <li>Contatto diretto col proprietario</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 max-w-2xl">
            {/* TODO MiriAle: dotazioni "in più" non elencate in home — cassaforte, ferro/asse da stiro, culla, seggiolone, kit prima colazione, ecc. — vedi brief SPOKE 1 §"Dotazioni complete" */}
            <TodoNote>
              Eventuali dotazioni aggiuntive non in home (cassaforte, ferro e
              asse da stiro, set culla, seggiolone, kit prima colazione…).
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Gallery completa */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-3 mb-8 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Guarda ogni ambiente.
          </h2>
          <Gallery />
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-ivory py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl font-light text-deep-brown md:text-3xl">
            Hai una domanda specifica su un ambiente?
          </h2>
          <a
            href={waLink(
              "Ciao! Ho una domanda su uno degli ambienti di MiriAle Holiday House.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: "#1d4a5a" }}
          >
            <I.whatsapp className="h-4 w-4" />
            Scrivici su WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
