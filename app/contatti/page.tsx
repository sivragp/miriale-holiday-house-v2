import type { Metadata } from "next";
import Contacts from "@/components/site/Contacts";
import JsonLd from "@/components/site/JsonLd";
import {
  breadcrumbNode,
  buildMetadata,
  graph,
  lodgingBusinessNode,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contatti a Fiumicino",
  description:
    "Contatta MiriAle su WhatsApp e prenota diretto, senza commissioni né pagamenti online. Casa vacanze familiare a Fiumicino, 10 min dall'aeroporto di Roma.",
  path: "/contatti",
});

export default function ContattiPage() {
  return (
    <>
      <JsonLd
        data={graph(
          lodgingBusinessNode(),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Contatti", path: "/contatti" },
          ]),
        )}
      />
      <Contacts />
    </>
  );
}
