import type { Metadata } from "next";
import ApartmentListing from "@/components/site/ApartmentListing";
import { getAppartamento } from "@/lib/apartments";
import JsonLd from "@/components/site/JsonLd";
import {
  apartmentNode,
  breadcrumbNode,
  buildMetadata,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Casa intera a Fiumicino, fino a 10 ospiti",
  description:
    "Tutta MiriAle a Fiumicino: 130 m², 4 camere, 2 bagni, 2 cucine e giardino privato, fino a 10 ospiti. A 5 km dall'aeroporto, vicino a mare e treni per Roma.",
  path: "/la-casa",
});

export default function LaCasaPage() {
  const apt = getAppartamento("casa")!;
  return (
    <>
      <JsonLd
        data={graph(
          apartmentNode(apt),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Casa intera", path: "/la-casa" },
          ]),
        )}
      />
      <ApartmentListing apt={apt} />
    </>
  );
}
