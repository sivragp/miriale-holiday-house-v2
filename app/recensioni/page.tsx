import type { Metadata } from "next";
import AllReviews from "@/components/site/AllReviews";
import JsonLd from "@/components/site/JsonLd";
import {
  breadcrumbNode,
  buildMetadata,
  graph,
  lodgingBusinessNode,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Recensioni ospiti (8.8 · 129)",
  description:
    "Le recensioni reali degli ospiti di MiriAle a Fiumicino: 8.8 \"Favoloso\" su 129 valutazioni Booking, con punteggi per categoria e pareri verificati.",
  path: "/recensioni",
});

export default function RecensioniPage() {
  return (
    <>
      <JsonLd
        data={graph(
          lodgingBusinessNode({ withReviews: true }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Recensioni", path: "/recensioni" },
          ]),
        )}
      />
      <AllReviews />
    </>
  );
}
