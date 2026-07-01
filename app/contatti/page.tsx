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
  title: "Contatti — MiriAle Holiday House a Fiumicino",
  description:
    "Contatta MiriAle Holiday House: scrivici su WhatsApp per prenotare in modo diretto, senza commissioni e senza pagamento online. Casa vacanze a gestione familiare a Fiumicino, a 10 minuti dall'aeroporto.",
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
