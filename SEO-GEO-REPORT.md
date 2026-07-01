# SEO + GEO — Report intervento

Ottimizzazione SEO/GEO di **MiriAle Holiday House** (Next.js 16 App Router, bilingue IT/EN).
Intervento **solo backend/meta**: nessuna modifica a layout, UI, testi visibili, immagini o componenti.
Il sito appare identico all'utente prima e dopo.

## Cosa è stato fatto

### 1. Structured data JSON-LD (schema.org) — principale valore GEO
Iniettato via `<script type="application/ld+json">` (non visibile), costruito solo su dati reali del repo.
- **Layout (tutte le pagine):** `Organization` + `WebSite` (nodi con `@id` condivisi).
- **Home `/`:** `LodgingBusiness`+`VacationRental` con indirizzo, contatti, amenity, `checkinTime`/`checkoutTime`, `petsAllowed`/`smokingAllowed`, `aggregateRating` (8.8/10 · 129 recensioni Booking) + `BreadcrumbList`.
- **`/miri`, `/ale`, `/la-casa`:** `Apartment` con `floorSize` (m²), `numberOfBedrooms`, `numberOfBathroomsTotal`, `occupancy` (max ospiti), amenity, immagini, `containedInPlace` → struttura + `BreadcrumbList`.
- **`/recensioni`:** `LodgingBusiness` con `aggregateRating` + le **10 recensioni testuali reali** (`Review` con autore, voto, data) + `BreadcrumbList`.
- **`/contatti`:** `LodgingBusiness` (contatti/indirizzo) + `BreadcrumbList`.
- **`/cosa-fare-intorno`, `/la-famiglia`:** `BreadcrumbList`.

Dati fattuali resi *answer-ready* per i motori AI: località (Fiumicino, ~10 min da FCO), tipo alloggio, capienze, amenity, check-in/out, politiche animali/fumo, valutazione Booking.

### 2. Metadata Next (helper centralizzato `lib/seo.ts` → `buildMetadata`)
Title/description unici già presenti sono stati **mantenuti invariati** e wrappati nell'helper, che aggiunge in modo coerente su ogni pagina:
- `canonical` (relativo, risolto via `metadataBase`);
- **Open Graph completo** (`type`, `url`, `siteName`, `locale` it_IT, `alternateLocale` en_GB, `images`) — prima le pagine perdevano `siteName`/`locale`/`type` per via del merge shallow di Next;
- **Twitter Card** `summary_large_image` con immagine;
- **hreflang** `it-IT` / `en` / `x-default`.

### 3. Open Graph / Twitter images per pagina
Immagini OG reali già nel repo: home/casa → esterno villa (`comune-28`), Miri → `miri-01`, Ale → `ale-01`.

### 4. `app/sitemap.ts` (dinamica)
Tutte le 8 route reali con `priority`/`changeFrequency` e alternates hreflang. Output verificato su `/sitemap.xml`.

### 5. `app/robots.ts`
`allow: /`, disallow route tecniche (`/api/`, `/_next/`), `host` e riferimento alla sitemap. Output verificato su `/robots.txt`.

### 6. Robots meta avanzati (layout)
`googleBot`: `max-image-preview: large`, `max-snippet: -1`, `max-video-preview: -1` (migliora rich result e citabilità GEO).

## File toccati
- **Nuovi:** `lib/seo.ts`, `components/site/JsonLd.tsx`, `app/sitemap.ts`, `app/robots.ts`, `SEO-GEO-REPORT.md`.
- **Modificati (solo metadata + injection JSON-LD, nessun cambiamento visivo):** `app/layout.tsx`, `app/page.tsx`, `app/miri/page.tsx`, `app/ale/page.tsx`, `app/la-casa/page.tsx`, `app/contatti/page.tsx`, `app/recensioni/page.tsx`, `app/cosa-fare-intorno/page.tsx`, `app/la-famiglia/page.tsx`.

## Verifiche
- `npm run build` → **OK** (13/13 pagine statiche, `/sitemap.xml` e `/robots.txt` generati).
- `npm run lint` → **OK** (nessun errore).
- HTML prerenderizzato ispezionato: canonical, hreflang, OG/Twitter, e i blocchi JSON-LD (Organization, WebSite, LodgingBusiness+aggregateRating, Apartment, 10 Review, BreadcrumbList) presenti e ben formati.

## Dati mancanti / da confermare (NON inventati)

1. **Dominio canonico — DA CONFERMARE (potenzialmente bloccante).**
   Il brief indica `miriale-house.com`, ma **tutto il repo** usa `mirialeholidayhouse.it`
   (`metadataBase` in `app/layout.tsx`, email `info@mirialeholidayhouse.it`, canonical preesistenti).
   Per coerenza e per non rompere i canonical ho usato **`mirialeholidayhouse.it`** (costante `SITE_URL` in `lib/seo.ts`).
   → Se il dominio di produzione è un altro, aggiornare **solo** `SITE_URL` in `lib/seo.ts` e `metadataBase` in `app/layout.tsx`.

2. **Coordinate geografiche (lat/long) assenti.**
   Non presenti nel repo → nodo `geo` **omesso** dallo structured data (niente coordinate inventate).
   È presente solo il link Google Maps (usato come `sameAs`). Consigliato aggiungere lat/long reali per `GeoCoordinates` (utile per local SEO/mappe).

3. **Metrature e capienze non ufficiali.**
   `lib/apartments.tsx` segnala che m² (75/55/130) e capienze (6/4/10) sono una *ricostruzione plausibile* non pubblicata su Booking. Sono già mostrate all'utente sul sito, quindi le ho rispecchiate nel JSON-LD (lo structured data deve riflettere il contenuto visibile). **Da confermare col cliente** i valori reali.

4. **FAQPage non aggiunta (scelta consapevole).**
   Non esiste una sezione FAQ Q&A visibile sul sito. Le regole (check-in/out, animali, fumo, pagamento) sono state codificate come proprietà native del `LodgingBusiness` (`checkinTime`, `checkoutTime`, `petsAllowed`, `smokingAllowed`) invece di inventare un `FAQPage` con contenuti non visibili (vietato dalle linee guida Google e dal vincolo "non inventare"). Se si vuole un `FAQPage`, servono domande/risposte reali pubblicate sulla pagina.

5. **hreflang su singola URL.**
   Il sito è bilingue **client-side** (`LangProvider`, toggle IT/EN via `localStorage`): IT ed EN condividono lo **stesso URL**, non ci sono route `/en`. Gli alternates hreflang puntano quindi correttamente alla stessa risorsa (`it-IT`, `en`, `x-default`). Non sono state inventate route `/en` inesistenti. Per un hreflang "canonico" a URL separate servirebbe un refactor i18n routing (fuori scope: cambierebbe l'architettura).

6. **Profili social assenti.**
   In `SiteFooter.tsx` i link social sono placeholder (`href="#"`). Nessun URL reale → non inseriti in `sameAs` (usato solo il link Google Maps reale).

## Nota alt text
Tutte le immagini usano `next/image` con `alt` descrittivi già presenti (nessun `<img>` grezzo, nessun alt mancante): nessun intervento necessario.
