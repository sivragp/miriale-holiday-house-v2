import type { Metadata } from "next";
import ApartmentListing from "@/components/site/ApartmentListing";
import { getAppartamento } from "@/lib/apartments";

export const metadata: Metadata = {
  title: "Ale — appartamento mansardato 55 m² a Fiumicino",
  description:
    "Ale: appartamento mansardato indipendente di 55 m² a Fiumicino, a 10 minuti dall'aeroporto. Cucina attrezzata, 2 camere matrimoniali, bagno in marmo, fino a 4 ospiti.",
  alternates: { canonical: "https://mirialeholidayhouse.it/ale" },
  openGraph: {
    title: "Ale — MiriAle Holiday House",
    description:
      "Appartamento mansardato 55 m² a Fiumicino: 2 camere matrimoniali, bagno in marmo, giardino. A 10 min dall'aeroporto.",
    url: "https://mirialeholidayhouse.it/ale",
  },
};

export default function AlePage() {
  const apt = getAppartamento("ale")!;
  return <ApartmentListing apt={apt} />;
}
