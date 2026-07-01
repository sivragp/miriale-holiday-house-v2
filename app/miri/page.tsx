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
  title: "Miri — appartamento 75 m² a Fiumicino",
  description:
    "Miri: appartamento indipendente di 75 m² a Fiumicino, a 10 minuti dall'aeroporto. Soggiorno con cucina in legno, 2 camere matrimoniali, 1 bagno, fino a 6 ospiti.",
  path: "/miri",
  ogImage: "/images/house/miri-01.jpg",
});

export default function MiriPage() {
  const apt = getAppartamento("miri")!;
  return (
    <>
      <JsonLd
        data={graph(
          apartmentNode(apt),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Appartamento Miri", path: "/miri" },
          ]),
        )}
      />
      <ApartmentListing apt={apt} />
    </>
  );
}
