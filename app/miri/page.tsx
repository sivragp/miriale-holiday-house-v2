import type { Metadata } from "next";
import ApartmentListing from "@/components/site/ApartmentListing";
import { getAppartamento } from "@/lib/apartments";

export const metadata: Metadata = {
  title: "Miri — appartamento 75 m² a Fiumicino",
  description:
    "Miri: appartamento indipendente di 75 m² a Fiumicino, a 10 minuti dall'aeroporto. Soggiorno con cucina in legno, 2 camere matrimoniali, 1 bagno, fino a 4 ospiti.",
  alternates: { canonical: "https://mirialeholidayhouse.it/miri" },
  openGraph: {
    title: "Miri — MiriAle Holiday House",
    description:
      "Appartamento 75 m² a Fiumicino: 2 camere matrimoniali, cucina in legno, giardino. A 10 min dall'aeroporto.",
    url: "https://mirialeholidayhouse.it/miri",
  },
};

export default function MiriPage() {
  const apt = getAppartamento("miri")!;
  return <ApartmentListing apt={apt} />;
}
