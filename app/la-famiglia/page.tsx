import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import TodoNote from "@/components/site/TodoNote";
import { Eyebrow, I, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "La famiglia",
  description:
    "Una casa a conduzione familiare. La famiglia che gestisce MiriAle abita accanto, ti accoglie e ti dà supporto durante tutto il soggiorno.",
  alternates: { canonical: "https://mirialeholidayhouse.it/la-famiglia" },
  openGraph: {
    title: "La famiglia — MiriAle Holiday House",
    description:
      "Non un Airbnb anonimo: una struttura a conduzione familiare, con chi ti accoglie sempre raggiungibile.",
    url: "https://mirialeholidayhouse.it/la-famiglia",
  },
};

export default function LaFamigliaPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="La famiglia"
        title="Una casa. E una famiglia."
        lead="Non un Airbnb anonimo. Una struttura a conduzione familiare, sempre raggiungibile."
        image={{
          // TODO MiriAle: in futuro foto della famiglia/casa "abitata". Per ora foto reale dello spazio comune.
          src: "/images/house/house-17.jpg",
          alt: "Spazio accogliente di MiriAle Holiday House",
        }}
      />

      {/* Hero — foto famiglia */}
      <section className="border-b border-line-soft bg-ivory py-12">
        <div className="mx-auto max-w-3xl px-6">
          {/* TODO MiriAle: foto della famiglia o della casa "abitata" (anche di spalle, per privacy) — vedi brief SPOKE 2 §"Hero pagina" */}
          <TodoNote>
            Foto della famiglia o della casa “abitata” (anche di spalle, se
            preferite tutelare la privacy).
          </TodoNote>
        </div>
      </section>

      {/* Origine del nome */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Il nome</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Cosa significa “MiriAle”.
          </h2>
          <div className="mt-6">
            {/* TODO MiriAle: origine del nome — nomi dei proprietari/figli? combinazione di chi? aneddoto dietro la scelta — vedi brief SPOKE 2 §"Origine del nome" */}
            <TodoNote>
              Origine del nome MiriAle: nascono dai nomi della famiglia? Una
              combinazione? L’aneddoto dietro la scelta.
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Chi siamo */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Chi siamo</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Le persone dietro la casa.
          </h2>
          <div className="mt-6">
            {/* TODO MiriAle: nome della famiglia/titolari, da quando gestiscono la casa, motivazione personale dietro l'apertura — vedi brief SPOKE 2 §"Chi siamo" */}
            <TodoNote>
              Nome della famiglia / dei titolari, da quando gestiscono la casa
              e la motivazione personale dietro l’apertura di MiriAle.
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Abitiamo accanto */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Abitiamo accanto</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Non siamo un numero di telefono lontano.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-warm-gray">
            La famiglia vive nella casa adiacente. Per chi soggiorna significa
            tre cose concrete: supporto immediato per qualunque necessità,
            consigli su zona e ristoranti dalla voce di chi ci vive davvero, e
            interventi di manutenzione tempestivi se qualcosa serve.
          </p>
          <div className="mt-6">
            {/* TODO MiriAle: confermare il layout — la casa accanto è proprio adiacente? stesso edificio? cortile condiviso? — vedi brief SPOKE 2 §"Abitiamo accanto" */}
            <TodoNote>
              Conferma del layout: la casa della famiglia è proprio adiacente?
              Stesso edificio, cortile condiviso? Serve per essere precisi.
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Supporto 24/7 */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Supporto</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Raggiungibili, davvero.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-warm-gray">
            WhatsApp sempre attivo, chiamata diretta, intervento rapido se
            serve. In pratica: ti serve un asciugamano extra alle 23? Siamo
            qui. Vuoi un consiglio su dove cenare in zona? Ti rispondiamo. Hai
            un volo all’alba e ti serve un caffè caldo prima di partire? Ci si
            organizza.
          </p>
          <a
            href={waLink(
              "Ciao! Vorrei qualche informazione prima di prenotare MiriAle Holiday House.",
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

      {/* Cosa ci tieniamo a fare bene */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>I nostri valori</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Cosa ci teniamo a fare bene.
          </h2>
          <div className="mt-6">
            {/* TODO MiriAle: 3-4 valori che la famiglia vuole mettere in evidenza (pulizia, accoglienza personale, rispetto del riposo, ...) — vedi brief SPOKE 2 §"Cosa ci tengono a fare bene" */}
            <TodoNote>
              3–4 valori che la famiglia vuole mettere in evidenza (es. pulizia
              accurata, accoglienza personale, rispetto del riposo…).
            </TodoNote>
          </div>
        </div>
      </section>

      {/* Voci degli ospiti */}
      <section className="border-b border-line-soft bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Voci degli ospiti</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Cosa dicono di noi.
          </h2>
          <div className="mt-6">
            {/* TODO MiriAle: estratti reali di recensioni Booking/Airbnb con permesso di citarle + nome/iniziale ospite + città/nazionalità — vedi brief SPOKE 2 §"Voci degli ospiti" */}
            <TodoNote>
              Estratti reali di recensioni (Booking/Airbnb) con permesso di
              pubblicarle, nome o iniziale dell’ospite e città/nazionalità.
            </TodoNote>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-ivory py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl font-light text-deep-brown md:text-3xl">
            Scrivici: ti risponde il proprietario, sempre.
          </h2>
          <a
            href={waLink()}
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
