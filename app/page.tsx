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
    "Casa vacanze familiare a Fiumicino, 10 min dall'aeroporto di Roma: due appartamenti (Miri e Ale) o la casa intera fino a 10 ospiti. Prenoti diretto su WhatsApp.",
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
