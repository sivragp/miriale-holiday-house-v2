import type { Metadata } from "next";
import Experiences from "@/components/site/Experiences";

export const metadata: Metadata = {
  title: "Esperienze e dintorni — MiriAle Holiday House a Fiumicino",
  description:
    "Cosa fare intorno a MiriAle: Roma in giornata, spiagge di Fregene e Focene, Ostia Antica, il porto di Fiumicino e itinerari pronti all'uso suggeriti da Fabio. Tutto a portata di mano, a 10 minuti dall'aeroporto.",
  alternates: { canonical: "https://mirialeholidayhouse.it/cosa-fare-intorno" },
  openGraph: {
    title: "Esperienze e dintorni — MiriAle Holiday House",
    description:
      "Roma, il mare, Ostia Antica e il porto: itinerari pronti all'uso suggeriti da Fabio, vicino a MiriAle.",
    url: "https://mirialeholidayhouse.it/cosa-fare-intorno",
  },
};

export default function CosaFareIntornoPage() {
  return <Experiences />;
}
