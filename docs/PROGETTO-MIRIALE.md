# MiriAle Holiday House — Stato del progetto & Handoff

> Documento di continuità: leggi questo per riprendere il lavoro come se continuassi la chat precedente.
> Ultimo aggiornamento: 2026-06-17. Branch di lavoro: **`feat/miriale-airbnb-redesign`**.

---

## 0. Ultimo intervento (2026-06-17) — Revisione contenuti su dati reali Booking

Scrape reale dell'annuncio Booking (`miriale-house`) → allineamento di **tutti** i contenuti. Niente più dati inventati sulla casa; solo info Booking.

- **Recensioni**: ora 6 recensioni **verbatim reali** in italiano (Antonio, Paparcone, Ulisse, Alfonso, Martina, Guglielmo) in `lib/apartments.tsx` `RECENSIONI`. Conteggio aggiornato ovunque **122 → 129**.
- **Distanze/POI**: ricostruiti su sezione "Dintorni" di Booking (valori in km) in Home (`places`), pagine appartamento (`localPoints`) ed Esperienze (cards `top` + lista `nearby`). Reali: Aeroporto FCO 5 km · Ciampino 31 km · Bus pubblico 500 m · Treno Lido/Ostia Nord 5 km · Ostia Antica (scavi) 4,3 km · Spiagge: Lungomare della Salute 3,9 km, Focene 4,7 km, Ostia Lido 4,7 km, Castel Fusano 7 km · Bosco Macchia Grande di Focene 11 km · Fiera di Roma 7 km · PalaLottomatica 22 km · Metro EUR Fermi 23 km · Ristoranti: It Italian 700 m, Luana 700 m, Docking 9 1,8 km. (Rimossi nomi NON su Booking tipo Pascucci/Bastianelli/Conad/Carrefour.)
- **Regole**: età minima 18 era **errata** → Booking dice "nessuna età minima, bambini di tutte le età benvenuti". Corretto in tutte le pagine. Check-out home allineato a **11:00**. Culla su richiesta €10/soggiorno.
- **Capienze (DA CONFERMARE col cliente)**: Miri (grande) **fino a 6**, Ale (piccola) **fino a 4**, Casa intera = somma **fino a 10**. Aggiornato in `apartments.tsx`, Home stats/stays, pagine appartamento, metadata. (Nota: Booking pubblico mostra max 6 e "2 camere"; i numeri 6/4/10 li ha dati il cliente tramite l'agenzia.)
- **Footer**: aggiunta riga legale **host privato · CIN IT058120C27MWUIVNF · N. licenza 058120-ALT-00210** (da Booking). `© 2025 → 2026`. Costanti in `lib/site.tsx` (`LICENSE_NUMBER`, `CIN`).
- **Amenities**: aggiunte Navetta aeroporto (a pagamento) e Giardino privato; "Smart TV"→"TV a schermo piatto", "Macchina caffè"→"Moka", rimosso "Ferro/asse" (non confermato).
- **`goodToKnow` home**: ammorbiditi pagamento (in loco al check-in) e tassa di soggiorno (generica, "se applicabile") perché l'importo €2 non è confermato.
- **DA CONFERMARE col cliente** (segnato anche in commento in `apartments.tsx`): metrature 75/55 m², finiture (bagno in marmo, mansarda/lucernari, cucina in legno), capienze 6/4/10, mapping foto→stanze, tassa di soggiorno, orari telefono, social reali.

---

## 1. Contesto e accesso

- **Cliente**: MiriAle Holiday House — casa vacanze a gestione familiare a **Fiumicino (Roma)**, a ~10 min dall'aeroporto FCO. Due appartamenti indipendenti ("Miri" 75 m² e "Ale" 55 m²) affittabili singolarmente o insieme come casa intera (fino a 8 ospiti).
- **Host**: **Fabio** (e famiglia). Accoglienza di persona (NO self check-in/keybox), aiuto bagagli/parcheggio, transfer aeroporto su richiesta a pagamento. È il punto di forza n.1.
- **Percorso progetto**: `~/SIVRA-GP/clienti/miriale-v2/` — il sito Next.js è in `website/`.
- **Git / deploy**: si lavora sul branch **`feat/miriale-airbnb-redesign`**; **Vercel deploya questo branch** (NON `main`, che è un vecchio template). Flusso: commit → `git push origin feat/miriale-airbnb-redesign`. Email commit: `sivragp@gmail.com`.
- **Stack**: Next.js 16 (App Router, Turbopack), Tailwind CSS v4 (token `@theme inline` in `app/globals.css`), React client components, `next/image`, `next/font/google`.
- **AGENTS.md** (in `website/`): "This is NOT the Next.js you know" → prima di usare API Next leggere `node_modules/next/dist/docs/`.
- **Lingua**: sito **bilingue IT/EN** via context custom (`LangProvider`) + helper `tr(lang, {it,en})`. Default IT.
- **Prenotazione**: solo **WhatsApp** (numero `+39 328 489 8704`), nessun pagamento online; si paga al check-in. Helper `waLink(msg)` in `lib/site.tsx`.

### Come lavorare (dev / verifica)
```bash
cd ~/SIVRA-GP/clienti/miriale-v2/website
npm run dev            # http://localhost:3000
npx tsc --noEmit       # type check (deve essere pulito prima di commit)
npx eslint <file>      # lint
```
Screenshot headless per verifica visiva (usato spesso):
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --hide-scrollbars --window-size=1440,6000 --screenshot=/tmp/x.png "http://localhost:3000/miri"
magick /tmp/x.png -crop 1440x800+0+OFFSET +repage /tmp/crop.png   # ritaglio sezione
```

---

## 2. Design system

- **Palette "Acquamarina & Sole"** (token in `app/globals.css`):
  - bianco/paper `#ffffff`, cream `#eaf7f8`, cream-2 `#d4eef1`, bone `#f3fbfb`
  - accento **teal** `--color-terracotta: #0fa9b8` (nome storico "terracotta" ma è teal)
  - giallo stelle `--color-gold: #ffc24b`
  - testi/titoli navy-teal `--color-deep-brown: #0f3d4a`; testo morbido `--color-warm-gray: #4f6b72`
  - footer `--color-footer: #0a2b34`; sezioni scure `--color-olive-section: #0f3d4a`
  - linee `--color-line: #dceff1`, `--color-line-soft: #eaf7f8`
- **Font**: **Poppins** per titoli/sans (token `--font-serif` → Poppins), **Caveat** per gli occhielli corsivi (classe `font-script`). Caricati in `app/layout.tsx`.
- **Stile ricorrente**: card bianche bordo `border-line` arrotondate `rounded-2xl`, occhiello corsivo (`eyebrow = "font-script text-2xl ... text-terracotta"`), titoli `font-serif font-bold text-deep-brown`, onde decorative (componente `Wave` inline), bottoni WhatsApp verdi `#25d366`.

### Sfondo "acqua" (texture mare)
- Immagine: `public/images/luoghi/teal-water.jpg`, applicata come `bg-cover` + overlay `bg-paper/30` (velo leggero) + contenuto in `relative z-10`.
- **Sezioni che HANNO l'acqua** (solo queste): footer (usa invece `cta-mare.jpg`), **"Scegli il tuo soggiorno"** (home), **fascia specs + modulo prenotazione sotto l'hero** (pagine appartamento), **"Tutti i modi per contattarci"** (contatti), **"Le migliori esperienze"** (esperienze). Tutte le altre sezioni sono `bg-cream`/`bg-paper`.
- Footer: immagine spiaggia `public/images/luoghi/cta-mare.jpg` (stella marina + conchiglia), gradiente overlay `from-deep-brown/10 via/28 to/68`.

---

## 3. Struttura pagine e componenti

### Routes (`app/`)
- `page.tsx` → **Home** (server wrapper + metadata) → render `HomeMiriale`.
- `miri/`, `ale/`, `la-casa/` → wrapper con metadata → `ApartmentListing apt={getAppartamento("miri"|"ale"|"casa")}`.
- `cosa-fare-intorno/` → **Esperienze** → `Experiences`.
- `contatti/` → **Contatti** → `Contacts`.
- `la-famiglia/` → pagina "Chi siamo" VECCHIA (stile PageHero, NON ancora ridisegnata).
- `layout.tsx` → fonts, `<LangProvider>`, `<SiteHeader/>`, children, `<SiteFooter/>`, `<WhatsAppFab/>`.

### Componenti in uso (`components/site/`)
- **`HomeMiriale.tsx`** — home (client). Sezioni: Hero (titolo con parole teal + foto polaroid + stats integrate), "Scegli il tuo soggiorno" (3 card con **CardCarousel**), Giardino, Recensioni (8.8 + punteggi categoria + 6 review), Meet host, "Vicino a tutto ciò che conta" (mappa + `places` con icone auto/treno/bus), "Per chi siamo perfetti" (5 foto), "Tutti i comfort" (10 icone), "Vivi il meglio della zona" (5 foto), Regole + Buono a sapersi.
- **`ApartmentListing.tsx`** — pagina annuncio Miri/Ale/Casa (client). Prop `apt`. `isCasa` cambia titolo/specs/about/who-for/CTA. Sezioni: Hero (foto sinistra allineata a destra + popup galleria), Specs bar, Booking + Host, About, **Cosa amerai** (highlights curati per slug), **Ambienti e layout** (card orizzontali con chip dotazioni — mappa `AMENITY_ICONS` + `dotazioniBySlug`), Servizi/Amenities, Recensioni (punteggi categoria), Meet host, **Posizione** (mappa + `localPoints` POI reali), **Esplora la zona** (città + bottone → esperienze), Per chi è perfetto (4 foto), Regole. `Section` helper supporta `bg="paper"|"cream"|"teal"`.
- **`Experiences.tsx`** — pagina esperienze. Hero + 4 mini-feature, "Le migliori esperienze" (6 card), "Idee per la giornata" (4 itinerari con timeline e "consiglio di Fabio"), "Tutto nei dintorni" (mappa + distanze), "Info pratiche", CTA.
- **`Contacts.tsx`** — pagina contatti. Hero + card WhatsApp, "Tutti i modi per contattarci" (3 card), "Dove siamo" (mappa), card host + recensioni (8.8 + badge Booking), "Informazioni pratiche", "Come raggiungerci" (5 card numerate).
- **`SiteHeader.tsx`** — header. Logo immagine (`/images/logo-miriale.png`). Nav: **solo Appartamenti ▾ (dropdown Miri/Ale/Casa) · Esperienze · Contatti**. Toggle IT/EN. Bottone WhatsApp "Risposta rapida!".
- **`SiteFooter.tsx`** — CTA finale + footer in **un'unica sezione** con sfondo `cta-mare.jpg`. Logo chiaro (`/images/logo-miriale-light.png`). Colonne: Link rapidi (2 col), Contattaci, Seguici.
- **`CardCarousel.tsx`** — carosello foto con frecce + puntini (root `absolute inset-0`, parent `relative aspect-[...]`). Usato nelle card "Scegli il tuo soggiorno".
- **`GalleryModal.tsx`** — popup full-screen con tutte le foto dell'appartamento (apri da hero, chiudi con X o Esc).
- **`LangProvider.tsx`** — context IT/EN + `tr()`. **`WhatsAppFab.tsx`** — bottone WhatsApp fisso. **`Wave`/`Ph`** (placeholder) sono definiti inline nei componenti.
- **Componenti VECCHI non più usati nelle pagine principali** (residui del template precedente, da eventualmente ripulire): `PageHero`, `ImageSlider`, `Gallery`, `ImmersiveRoomSection`, `SubNav`, `BookingWidget`, `TodoNote`. Usati ancora solo da `la-famiglia` (vecchia).

### Dati (`lib/`)
- **`lib/apartments.tsx`** — `APPARTAMENTI` (miri/ale/casa) con `mq, ospiti, camere, bagni, piano, tagline, descrizione, gallery[], stanze[], love[], waMsg, titolo?`. `getAppartamento(slug)`. **`RECENSIONI`** = 6 recensioni reali Booking. Tipi `B={it,en}`, `Img`, `Stanza`, `Love`, `Appartamento`.
- **`lib/site.tsx`** — costanti (WHATSAPP_NUMBER/DISPLAY, EMAIL, ADDRESS_*, MAPS_EMBED/SHORT), `waLink()`, `mailto`, `telLink`, oggetto icone `I` (SVG inline: whatsapp, mail, phone, pin, instagram, facebook, arch, ecc.), `NAV`, `Eyebrow`, `OliveBranch`.

---

## 4. CONTENUTI REALI (da Booking + Fiumicino) — da usare per copy/SEO

> Fonte: annuncio Booking "MiriAle House Aeroporto Fiumicino" (8.8 · 122 recensioni). Immagini Booking NON scaricabili (CDN protetto): usare gli originali del cliente.

### Struttura reale
- **2 appartamenti indipendenti** (cucina/camere/bagno propri; in comune SOLO il giardino + parcheggio):
  - **Miri (App.1) — 75 m²**: 2 camere matrimoniali, 1 bagno, cucina in legno, piano terra. Fino a 4.
  - **Ale (App.2) — 55 m²**: 2 camere matrimoniali, 1 bagno in marmo, cucina attrezzata, **mansarda** (soffitti spioventi + lucernari). Fino a 4.
  - **Casa intera** = Miri+Ale: 130 m², 4 camere, 2 bagni, 2 cucine, fino a 8.
- Indirizzo: **Via Castagnevizza 76, 00054 Fiumicino (RM)**. Lingue: IT/EN/ES.

### Punteggi Booking (REALI, già nel sito)
8.8/10 · 122 recensioni. Sub-score: **Personale 9.4 · Pulizia 9.3 · Comfort 8.7 · Servizi 8.7 · Qualità-prezzo 8.7 · Posizione 8.5 · WiFi 8.0**.

### Recensioni reali (già inserite in `RECENSIONI`)
Martino 🇬🇧, Lucio 🇺🇸, Shelly-lynn 🇨🇦, Stephen 🇦🇺, Zuzana 🇨🇿, Dror 🇮🇱 (testo = sintesi fedele; Booking non espone il verbatim integrale). Altri ospiti reali disponibili dallo scrape: Keats US, Lucio US, Kileigh US (shuttle), Lance US, Victoria AU, Yusa ID, Julia CA, Vicky US, Gary US, Ian CA, Robert AU, Kathy US, Debora AU, Annemarie AU, Judy US, ecc.
- **Temi positivi ricorrenti**: ospitalità di Fabio, pulizia, vicinanza/tranquillità aeroporto, servizio navetta.
- **Neo onesto da gestire nel copy**: **soffitto basso della mansarda Ale** e le **scale** (citato da più ospiti alti).

### Servizi (verbatim Booking)
Camere famiglia · Non fumatori · Aria condizionata · Riscaldamento · TV schermo piatto · Giardino · Balcone (entrambi) · Parcheggio privato gratuito in loco · Bagno privato con phon · WiFi gratuito ovunque · **Navetta aeroporto (a pagamento)**, pick-up/drop-off.

### Regole casa (verbatim)
Check-in **15:00–00:00** · Check-out **fino alle 11:00** · Età minima **18** · **Animali NON ammessi** · Non fumatori · Nessuna cauzione danni · **Pagamento in contanti in loco** (al check-in).
> NOTA: la home dice check-out "entro le 10:00" → allineare a **11:00** (Booking).

### Distanze (Booking surroundings)
Aeroporto FCO **6 km** · PalaLottomatica **22 km** · metro EUR Fermi / San Paolo **23 km** · Laurentina **24 km** · Zoomarine **24 km** · Campus Bio-Medico **25 km**.

### POI locali usati nel sito (Posizione appartamento) — DA CONFERMARE i nomi esatti
- Supermercati: **Conad** (5 min), **Carrefour Express** (6 min)
- Ristoranti di pesce: **Pascucci al Porticciolo** (1★ Michelin, 6 min), **Bastianelli al Molo** (5 min), **L'Osteria dell'Orologio** (5 min), **Il Tino** (1★ Michelin, 7 min)
- Spiagge: **Focene** (5 min), **Fregene** (15 min), Ostia Lido (20 min)
- Farmacia / Bancomat: ~5 min · Stazione treni: 7 min a piedi · Aeroporto FCO: 10 min
- Cultura: **Ostia Antica** (12 min), **Roma** in treno (32 min con Leonardo Express)
- **Fiera di Roma**: 12 min auto · **Treno FL1** (stazione dedicata "Fiera di Roma", ~15 min) · Autobus di linea (~25 min)

### Esperienze / itinerari (pagina Esperienze) — contenuti già scritti, plausibili
Roma in giornata (Colosseo, Vaticano, Trevi, Trastevere), pomeriggio in spiaggia (Fregene/Focene), mezza giornata a Ostia Antica, serata di pesce al porto-canale di Fiumicino.

---

## 5. Cosa è stato fatto (riepilogo cronologico)

1. **Foundation**: bilingue IT/EN (LangProvider), palette "Acquamarina & Sole", font Poppins+Caveat.
2. **Pagine appartamento** (Miri/Ale/Casa) ricostruite 1:1 da mockup AI: hero collage, specs, booking+host, about, cosa amerai, ambienti, servizi (16), recensioni, meet host, posizione, who-for, regole.
3. **Casa intera** (`/la-casa`): dato `casa` + varianti `isCasa` nel componente.
4. **Esperienze** e **Contatti**: pagine nuove 1:1 da mockup.
5. **Home** ricostruita 1:1 dal mockup (HomeMiriale).
6. **Header/Footer**: logo reale MiriAle (header su bianco, footer versione chiara crema/oro). Footer unificato con CTA + sfondo spiaggia.
7. **Foto reali**: foto casa nei collage/card; foto luoghi/persone reali in "Ideale per", "Vivi il meglio", "Per chi è perfetto", "Esplora la zona" (Roma/Vittoriano, spiaggia, pesce, Ostia, tramonto, famiglia, coppia, amici, aeroporto, Fiera, Guardia di Finanza).
8. **Home rifiniture**: hero con cornici polaroid; carosello nelle card appartamenti; posizione con POI per mezzo (auto/treno/bus) + nomi ristoranti reali; pill con separatori.
9. **Pagine appartamento rifiniture**: hero con foto allineate + popup galleria (GalleryModal); WhatsApp del modulo compatto; "Ambienti e layout" → card orizzontali con chip dotazioni; "Posizione" → POI reali utili (supermercati, spiagge, farmacia, trasporti, cultura); "Esplora la zona" → città con descrizioni + bottone a Esperienze.
10. **Contenuti reali Booking**: recensioni vere + punteggi per categoria reali (home + appartamento).
11. **Sfondo acqua**: applicato e poi limitato a 5 sezioni (vedi §2) con velo leggero `/30`.

---

## 6. Immagini

- `public/images/house/` — **35 foto reali** della casa (house-02 … house-38). Mappatura in `assets/foto-mappatura.txt`.
- `public/images/luoghi/` — luoghi/persone: `roma.jpg` (Colosseo), `roma-vittoriano.jpg`, `beach.jpg`, `tramonto.jpg`, `pesce.jpg`, `ostia.jpg`, `fiera.jpg`, `guardia-finanza.jpg`, `scali.jpg` (aeroporto Roma), `famiglia.jpg`, `coppia.jpg`, `amici.jpg`, `famiglie.jpg`, `teal-water.jpg` (sfondo sezioni), `cta-mare.jpg` (footer), `branch.png` (rametto, non più usato).
- `public/images/` — `base-roma-mare.jpg`, `aereo-aeroporto.jpg`, `logo-miriale.png`, `logo-miriale-light.png`.

### Placeholder ancora da sostituire con foto reali del cliente (componente `Ph`)
- **Foto host Fabio** (card host nel modulo + meet host) e **foto famiglia di Fabio**.
- Le foto persone/luoghi attuali sono stock/AI: vanno bene come segnaposto, ma confermare con il cliente se usarle o sostituirle con foto reali.

---

## 7. PROSSIMI PASSI / TODO

### Contenuti & copy (priorità: il cliente vuole rivedere in ottica SEO)
- [ ] **Copy/SEO**: i testi di hero, bullet, descrizioni sono provvisori (scritti per "forzare il layout"). Riscrivere in ottica SEO + tono finale.
- [ ] **Recensioni**: se il cliente fornisce i testi verbatim esatti da Booking, sostituirli in `RECENSIONI`.
- [ ] **Allineare check-out a 11:00** nella home (ora dice 10:00).
- [ ] **Confermare nomi POI** reali (supermercati/farmacia più vicini a Via Castagnevizza) via Google Maps.
- [ ] Gestire con trasparenza nel copy il **soffitto basso/scale della mansarda Ale**.
- [ ] Pagina **`la-famiglia` ("Chi siamo")**: ancora vecchio stile → ridisegnare coerente (oppure rimuoverla dato che non è più nel menu).

### Foto
- [ ] Inserire **foto reali di Fabio e famiglia** al posto dei placeholder.
- [ ] Valutare se sostituire le foto stock di persone/luoghi con foto reali/royalty-free definitive.

### Tecnico / pulizia
- [ ] Rimuovere componenti morti non più usati (`PageHero`, `ImageSlider`, `Gallery`, `ImmersiveRoomSection`, `SubNav`, `BookingWidget`, `TodoNote`) e la pagina `la-famiglia` se confermato.
- [ ] Verificare gli anchor del menu/footer (alcuni `#dove-siamo` ecc. esistono solo sulla home).
- [ ] Mobile: verificare hamburger menu e responsività fine.
- [ ] Confermare/rimuovere il badge "Booking Traveller Review Awards 2024" (in Contatti) — plausibile ma da verificare.

### Decisioni aperte da chiedere al cliente
- Telefono pubblico e orari reali (ora si usa il numero WhatsApp).
- Social reali (link Instagram/Facebook/Google) per header/footer.
- Tassa di soggiorno: nel sito €2,00/persona/notte fino a 10 notti → confermare.

---

## 8. Memoria persistente
Esistono memorie auto-caricate in `~/.claude/projects/-Users-AL-SIVRA-GP-clienti-miriale-v2/memory/` (foto-reali-casa, incongruenze-contenuti-sito, deploy-vercel-branch, dati-reali-struttura, redesign-airbnb). Si caricano automaticamente in ogni nuova sessione su questo progetto. Questo documento è il riferimento principale e più aggiornato.
