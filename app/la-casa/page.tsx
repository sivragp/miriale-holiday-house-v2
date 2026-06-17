import type { Metadata } from "next";
import ApartmentListing from "@/components/site/ApartmentListing";
import { getAppartamento } from "@/lib/apartments";

export const metadata: Metadata = {
  title: "Casa intera — MiriAle Holiday House a Fiumicino (fino a 10 ospiti)",
  description:
    "Prenota tutta MiriAle: i due appartamenti indipendenti Miri e Ale insieme. 130 m², 4 camere matrimoniali, 2 bagni, 2 cucine e giardino privato, fino a 10 ospiti. A 5 km dall'aeroporto di Fiumicino, vicino al mare e ai treni per Roma.",
  alternates: { canonical: "https://mirialeholidayhouse.it/la-casa" },
  openGraph: {
    title: "Casa intera — MiriAle Holiday House",
    description:
      "Miri + Ale insieme: 4 camere matrimoniali, 2 bagni, 2 cucine e giardino. Fino a 10 ospiti, a 5 km dall'aeroporto.",
    url: "https://mirialeholidayhouse.it/la-casa",
  },
};

export default function LaCasaPage() {
  const apt = getAppartamento("casa")!;
  return <ApartmentListing apt={apt} />;
}
