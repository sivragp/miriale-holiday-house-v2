import type { Metadata } from "next";
import HomeMiriale from "@/components/site/HomeMiriale";
import JsonLd from "@/components/site/JsonLd";
import {
  breadcrumbNode,
  buildMetadata,
  graph,
  lodgingBusinessNode,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "MiriAle Holiday House — Casa vacanze a Fiumicino, vicino a FCO, Roma e il mare",
  description:
    "Casa vacanze a gestione familiare a Fiumicino: due appartamenti indipendenti (Miri e Ale) o la casa intera, fino a 10 ospiti. A 10 minuti dall'aeroporto di Roma Fiumicino, vicino al mare e a Roma. Prenotazione diretta su WhatsApp, nessun pagamento online.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          lodgingBusinessNode(),
          breadcrumbNode([{ name: "Home", path: "/" }]),
        )}
      />
      <HomeMiriale />
    </>
  );
}
