import type { Metadata } from "next";
import AllReviews from "@/components/site/AllReviews";

export const metadata: Metadata = {
  title: "Recensioni — MiriAle Holiday House a Fiumicino (8.8 · 129 recensioni)",
  description:
    "Le recensioni reali degli ospiti di MiriAle Holiday House a Fiumicino: 8.8 \"Favoloso\" su 129 recensioni Booking.com. Punteggi per categoria, pareri verificati con pro e contro, filtri per tipo di viaggiatore e argomento.",
  alternates: { canonical: "https://mirialeholidayhouse.it/recensioni" },
  openGraph: {
    title: "Recensioni — MiriAle Holiday House",
    description:
      "8.8 \"Favoloso\" su 129 recensioni Booking.com. Pareri reali degli ospiti, con punteggi per categoria e filtri.",
    url: "https://mirialeholidayhouse.it/recensioni",
  },
};

export default function RecensioniPage() {
  return <AllReviews />;
}
