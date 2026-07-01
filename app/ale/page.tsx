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
  title: "Ale — appartamento mansardato 55 m² a Fiumicino",
  description:
    "Ale: appartamento mansardato indipendente di 55 m² a Fiumicino, a 10 minuti dall'aeroporto. Cucina attrezzata, 2 camere matrimoniali, bagno in marmo, fino a 4 ospiti.",
  path: "/ale",
  ogImage: "/images/house/ale-01.jpg",
});

export default function AlePage() {
  const apt = getAppartamento("ale")!;
  return (
    <>
      <JsonLd
        data={graph(
          apartmentNode(apt),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Appartamento Ale", path: "/ale" },
          ]),
        )}
      />
      <ApartmentListing apt={apt} />
    </>
  );
}
