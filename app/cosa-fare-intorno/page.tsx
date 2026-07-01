import type { Metadata } from "next";
import Experiences from "@/components/site/Experiences";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbNode, buildMetadata, graph } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Esperienze e dintorni — MiriAle Holiday House a Fiumicino",
  description:
    "Cosa fare intorno a MiriAle: Roma in giornata, spiagge di Fregene e Focene, Ostia Antica, il porto di Fiumicino e itinerari pronti all'uso suggeriti da Fabio. Tutto a portata di mano, a 10 minuti dall'aeroporto.",
  path: "/cosa-fare-intorno",
});

export default function CosaFareIntornoPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Esperienze e dintorni", path: "/cosa-fare-intorno" },
          ]),
        )}
      />
      <Experiences />
    </>
  );
}
