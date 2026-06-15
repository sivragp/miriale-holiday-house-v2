import type { Metadata } from "next";
import HomeMiriale from "@/components/site/HomeMiriale";

export const metadata: Metadata = {
  title: "MiriAle Holiday House — Casa vacanze a Fiumicino, vicino a FCO, Roma e il mare",
  description:
    "Casa vacanze a gestione familiare a Fiumicino: due appartamenti indipendenti (Miri e Ale) o la casa intera, fino a 8 ospiti. A 10 minuti dall'aeroporto di Roma Fiumicino, vicino al mare e a Roma. Prenotazione diretta su WhatsApp, nessun pagamento online.",
  alternates: { canonical: "https://mirialeholidayhouse.it/" },
  openGraph: {
    title: "MiriAle Holiday House — Fiumicino, vicino a FCO, Roma e il mare",
    description:
      "Due appartamenti indipendenti o la casa intera a Fiumicino, fino a 8 ospiti. A 10 min dall'aeroporto. Prenotazione diretta, nessun pagamento online.",
    url: "https://mirialeholidayhouse.it/",
  },
};

export default function HomePage() {
  return <HomeMiriale />;
}
