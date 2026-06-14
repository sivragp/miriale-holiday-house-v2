import type { Metadata } from "next";
import Contacts from "@/components/site/Contacts";

export const metadata: Metadata = {
  title: "Contatti — MiriAle Holiday House a Fiumicino",
  description:
    "Contatta MiriAle Holiday House: scrivici su WhatsApp per prenotare in modo diretto, senza commissioni e senza pagamento online. Casa vacanze a gestione familiare a Fiumicino, a 10 minuti dall'aeroporto.",
  alternates: { canonical: "https://mirialeholidayhouse.it/contatti" },
  openGraph: {
    title: "Contatti — MiriAle Holiday House",
    description:
      "Scrivici su WhatsApp per prenotare in modo diretto. Accoglienza di persona, nessun pagamento online.",
    url: "https://mirialeholidayhouse.it/contatti",
  },
};

export default function ContattiPage() {
  return <Contacts />;
}
