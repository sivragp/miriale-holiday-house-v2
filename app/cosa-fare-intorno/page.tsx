import type { Metadata } from "next";
import Experiences from "@/components/site/Experiences";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbNode, buildMetadata, graph } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Esperienze e dintorni a Fiumicino",
  description:
    "Cosa fare intorno a MiriAle: Roma in giornata, spiagge di Fregene e Focene, Ostia Antica e il porto di Fiumicino, con itinerari pronti suggeriti da Fabio.",
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
