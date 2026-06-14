import type { Metadata } from "next";
import ApartmentListing from "@/components/site/ApartmentListing";
import { getAppartamento } from "@/lib/apartments";

export const metadata: Metadata = {
  title: "Casa intera — MiriAle Holiday House a Fiumicino (fino a 8 ospiti)",
  description:
    "Prenota tutta MiriAle: i due appartamenti indipendenti Miri e Ale insieme. 130 m², 4 camere matrimoniali, 2 bagni, 2 cucine e giardino privato, fino a 8 ospiti. A 10 minuti dall'aeroporto di Fiumicino.",
  alternates: { canonical: "https://mirialeholidayhouse.it/la-casa" },
  openGraph: {
    title: "Casa intera — MiriAle Holiday House",
    description:
      "Miri + Ale insieme: 4 camere matrimoniali, 2 bagni, 2 cucine e giardino. Fino a 8 ospiti, a 10 min dall'aeroporto.",
    url: "https://mirialeholidayhouse.it/la-casa",
  },
};

export default function LaCasaPage() {
  const apt = getAppartamento("casa")!;
  return <ApartmentListing apt={apt} />;
}
