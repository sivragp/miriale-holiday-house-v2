/**
 * Inietta structured data JSON-LD (schema.org) nel documento.
 * Server component: renderizza SOLO un <script type="application/ld+json">,
 * nessun output visivo. Non altera in alcun modo il rendering della pagina.
 */

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON serializzato: nessun contenuto controllato dall'utente.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
