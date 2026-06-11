import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ImageSlider from "@/components/site/ImageSlider";
import { Eyebrow, I, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gli appartamenti",
  description:
    "Miri e Ale: i due appartamenti di MiriAle a Fiumicino, stanza per stanza. Cucina, camere, bagni, dotazioni e dettagli pratici per il tuo soggiorno.",
  alternates: { canonical: "https://mirialeholidayhouse.it/la-casa" },
  openGraph: {
    title: "Gli appartamenti — MiriAle Holiday House",
    description:
      "Miri e Ale: i due appartamenti indipendenti di MiriAle, stanza per stanza.",
    url: "https://mirialeholidayhouse.it/la-casa",
  },
};

const appartamenti = [
  {
    nome: "Miri",
    mq: "75 m²",
    riepilogo: "2 camere matrimoniali · 1 bagno · fino a 4 ospiti",
    intro:
      "L'appartamento più ampio: un soggiorno con cucina in legno e due camere matrimoniali. Indipendente, con ingresso e bagno propri.",
    waMsg:
      "Ciao! Vorrei prenotare l'appartamento Miri (75 m²) a MiriAle. C'è disponibilità?",
    stanze: [
      {
        nome: "Soggiorno e cucina",
        tag: "Zona giorno",
        descr:
          "Salotto con divano e TV a schermo piatto, aperto sulla cucina in legno. Si cucina davvero: forno, piano cottura, frigorifero, microonde, bollitore e moka per il caffè. Tavolo da pranzo, stoviglie e pentole; lavatrice a disposizione.",
        imgs: [
          { src: "/images/house/house-02.jpg", alt: "Soggiorno di Miri" },
          { src: "/images/house/house-10.jpg", alt: "Cucina in legno" },
          { src: "/images/house/house-30.jpg", alt: "Cucina e zona pranzo" },
        ],
        dotazioni: ["Divano e TV", "Forno e piano cottura", "Frigorifero", "Microonde", "Bollitore e moka", "Lavatrice", "Stoviglie e pentole", "Tavolo da pranzo"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Parete decorativa",
        descr:
          "Letto matrimoniale con parete decorativa e affaccio sul balcone. Aria condizionata e riscaldamento, armadio e comodini; lenzuola e asciugamani inclusi.",
        imgs: [
          { src: "/images/house/house-28.jpg", alt: "Camera matrimoniale con parete decorativa" },
          { src: "/images/house/house-34.jpg", alt: "Camera matrimoniale con parete decorativa" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio e comodini", "Balcone", "Biancheria inclusa"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Toni caldi",
        descr:
          "Seconda matrimoniale, luminosa e tranquilla, con pavimento in cotto. Aria condizionata e riscaldamento, armadio e comodini; lenzuola e asciugamani inclusi.",
        imgs: [
          { src: "/images/house/house-26.jpg", alt: "Camera matrimoniale" },
          { src: "/images/house/house-05.jpg", alt: "Camera matrimoniale" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio e comodini", "Biancheria inclusa"],
      },
      {
        nome: "Bagno",
        tag: "Classico",
        descr:
          "Bagno privato con doccia, rivestito in tono caldo. Phon, asciugamani e set di cortesia inclusi; acqua calda e riscaldamento.",
        imgs: [
          { src: "/images/house/house-35.jpg", alt: "Bagno classico" },
          { src: "/images/house/house-36.jpg", alt: "Bagno classico, doccia" },
        ],
        dotazioni: ["Doccia", "Phon", "Asciugamani inclusi", "Set di cortesia", "Acqua calda"],
      },
    ],
  },
  {
    nome: "Ale",
    mq: "55 m²",
    riepilogo: "2 camere matrimoniali · 1 bagno · fino a 4 ospiti",
    intro:
      "Mansardato e raccolto: una cucina attrezzata, due camere matrimoniali sotto il tetto e un bagno moderno in marmo. Indipendente, con cucina e bagno propri.",
    waMsg:
      "Ciao! Vorrei prenotare l'appartamento Ale (55 m²) a MiriAle. C'è disponibilità?",
    stanze: [
      {
        nome: "Cucina e zona pranzo",
        tag: "Attrezzata",
        descr:
          "Angolo cottura moderno con tutto il necessario: piano cottura, frigorifero, microonde, bollitore e moka. Stoviglie, pentole e tavolo da pranzo. Perfetta per una cena veloce o la colazione prima del volo.",
        imgs: [
          { src: "/images/house/house-38.jpg", alt: "Cucina di Ale" },
          { src: "/images/house/house-32.jpg", alt: "Forno a microonde" },
          { src: "/images/house/house-33.jpg", alt: "Bollitore e moka" },
        ],
        dotazioni: ["Piano cottura", "Frigorifero", "Microonde", "Bollitore e moka", "Stoviglie e pentole", "Tavolo da pranzo"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Mansardata · rosa",
        descr:
          "Matrimoniale mansardata dai toni caldi, con parete effetto pietra e soffitto spiovente. Aria condizionata e armadio; lenzuola e asciugamani inclusi. (Soffitto basso su un lato: tienine conto se sei molto alto.)",
        imgs: [
          { src: "/images/house/house-09.jpg", alt: "Camera matrimoniale mansardata" },
          { src: "/images/house/house-37.jpg", alt: "Camera matrimoniale mansardata" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Armadio", "Soffitto mansardato", "Biancheria inclusa"],
      },
      {
        nome: "Camera matrimoniale",
        tag: "Mansardata · lucernario",
        descr:
          "Seconda matrimoniale mansardata, luminosa grazie al lucernario. Aria condizionata e armadio; lenzuola e asciugamani inclusi.",
        imgs: [
          { src: "/images/house/house-06.jpg", alt: "Camera matrimoniale con lucernario" },
          { src: "/images/house/house-21.jpg", alt: "Camera matrimoniale luminosa" },
        ],
        dotazioni: ["Letto matrimoniale", "Aria condizionata", "Lucernario", "Armadio", "Biancheria inclusa"],
      },
      {
        nome: "Bagno",
        tag: "Moderno in marmo",
        descr:
          "Bagno privato rivestito in marmo, con doccia. Phon, asciugamani e set di cortesia inclusi; acqua calda e riscaldamento.",
        imgs: [
          { src: "/images/house/house-11.jpg", alt: "Bagno in marmo" },
          { src: "/images/house/house-20.jpg", alt: "Lavabo del bagno in marmo" },
          { src: "/images/house/house-12.jpg", alt: "Bagno in marmo" },
        ],
        dotazioni: ["Doccia", "Phon", "Asciugamani inclusi", "Set di cortesia", "Acqua calda"],
      },
    ],
  },
];

const giardino = {
  descr:
    "L'unico spazio condiviso tra Miri e Ale: un giardino privato con sedute, balcone e terrazza per la colazione all'aperto. Parcheggio gratuito in loco.",
  imgs: [
    { src: "/images/house/house-29.jpg", alt: "Giardino di MiriAle" },
    { src: "/images/house/house-31.jpg", alt: "Giardino con sedute" },
    { src: "/images/house/house-17.jpg", alt: "Area relax in giardino" },
    { src: "/images/house/house-13.jpg", alt: "Terrazza di MiriAle" },
    { src: "/images/house/house-22.jpg", alt: "Terrazza con vista" },
  ],
  dotazioni: ["Giardino privato", "Terrazza e balcone", "Parcheggio gratuito", "Colazione all'aperto"],
};

export default function LaCasaPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Gli appartamenti"
        title="Miri e Ale, stanza per stanza."
        lead="Due appartamenti indipendenti a Fiumicino: cucina, camere e bagno propri. In comune solo il giardino."
        image={{
          src: "/images/house/house-28.jpg",
          alt: "Camera matrimoniale di MiriAle Holiday House",
        }}
      />

      {appartamenti.map((a, idx) => (
        <section
          key={a.nome}
          className={`border-b border-line-soft py-16 md:py-20 ${
            idx % 2 === 0 ? "bg-ivory" : "bg-bone"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow>Appartamento</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-light text-deep-brown md:text-4xl">
              {a.nome}{" "}
              <span className="text-xl text-warm-gray">· {a.mq}</span>
            </h2>
            <p className="mt-2 text-sm font-medium text-terracotta">
              {a.riepilogo}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-gray">
              {a.intro}
            </p>

            <div className="mt-12 space-y-14 md:space-y-16">
              {a.stanze.map((s, i) => (
                <article
                  key={s.nome + s.tag}
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
                    <ImageSlider
                      images={s.imgs}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-terracotta">
                      {s.tag}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-light text-deep-brown md:text-3xl">
                      {s.nome}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-warm-gray">
                      {s.descr}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.dotazioni.map((d) => (
                        <li
                          key={d}
                          className="inline-flex items-center gap-1.5 rounded-full bg-cream-2 px-3 py-1 text-xs text-deep-brown"
                        >
                          <span className="h-1 w-1 rounded-full bg-terracotta" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <a
              href={waLink(a.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: "#0f2e45" }}
            >
              <I.whatsapp className="h-4 w-4" />
              Richiedi {a.nome}
            </a>
          </div>
        </section>
      ))}

      {/* Giardino in comune */}
      <section className="border-b border-line-soft bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>In comune</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-light text-deep-brown md:text-4xl">
            Il giardino.
          </h2>
          <div className="mt-8 grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <ImageSlider
                images={giardino.imgs}
                autoplay={false}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-base leading-relaxed text-warm-gray">
                {giardino.descr}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {giardino.dotazioni.map((d) => (
                  <li
                    key={d}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cream-2 px-3 py-1 text-xs text-deep-brown"
                  >
                    <span className="h-1 w-1 rounded-full bg-terracotta" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-ivory py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl font-light text-deep-brown md:text-3xl">
            Vuoi tutta la casa per un gruppo?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-warm-gray">
            Miri e Ale insieme: 4 camere matrimoniali, 2 bagni e il giardino,
            fino a 8 ospiti.
          </p>
          <a
            href={waLink(
              "Ciao! Ho una domanda sugli appartamenti di MiriAle Holiday House.",
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
