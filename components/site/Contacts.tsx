"use client";

import Link from "next/link";
import {
  CalendarCheck,
  CalendarX,
  Car,
  Check,
  CigaretteOff,
  Clock,
  Footprints,
  Heart,
  Home as HomeIcon,
  Image as ImageIcon,
  Mail,
  MapPin,
  PartyPopper,
  PawPrint,
  Phone,
  Plane,
  ShieldCheck,
  ShoppingCart,
  Star,
  Train,
  UserCheck,
  Users,
} from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  EMAIL,
  I,
  MAPS_EMBED,
  MAPS_SHORT,
  WHATSAPP_DISPLAY,
  mailto,
  telLink,
  waLink,
} from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import ContactFormModal, { GmailChip, GMAIL_BLUE } from "@/components/site/ContactFormModal";
import { useLang, tr } from "@/components/site/LangProvider";
import { type B } from "@/lib/apartments";

function Ph({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-cream-2 to-cream text-warm-gray ${className}`}>
      <ImageIcon className="h-6 w-6 opacity-60" strokeWidth={1.4} />
      <span className="px-2 text-center text-[10px] uppercase tracking-wide opacity-70">{label}</span>
    </div>
  );
}

function Wave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 8" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 5 q 7 -6 14 0 t 14 0 t 14 0 t 14 0" />
    </svg>
  );
}

export default function Contacts() {
  const { lang } = useLang();
  const t = (b: B) => tr(lang, b);
  const eyebrow = "font-script text-2xl leading-none text-terracotta";
  const titleC = "font-serif text-2xl font-bold text-deep-brown md:text-3xl";

  const heroFeatures: { Icon: typeof Clock; t: B; s: B }[] = [
    { Icon: Clock, t: { it: "Risposte rapide", en: "Fast replies", es: "Respuestas rápidas" }, s: { it: "di solito in pochi minuti", en: "usually within minutes", es: "normalmente en pocos minutos" } },
    { Icon: ShieldCheck, t: { it: "Nessun pagamento online", en: "No online payment", es: "Sin pago online" }, s: { it: "paghi al check-in, facile e sicuro", en: "pay at check-in, easy & safe", es: "pagas en el check-in, fácil y seguro" } },
    { Icon: UserCheck, t: { it: "Accoglienza di persona", en: "Personal welcome", es: "Bienvenida en persona" }, s: { it: "ti incontriamo di persona e siamo sempre qui", en: "We meet you in person and are always here", es: "te recibimos en persona y siempre estamos aquí" } },
  ];

  const hostChecks: B[] = [
    { it: "Accoglienza di persona (niente self check-in)", en: "Welcome in person (no self check-in)", es: "Bienvenida en persona (sin check-in automático)" },
    { it: "Aiuto con bagagli e parcheggio", en: "Help with luggage and parking", es: "Ayuda con el equipaje y el aparcamiento" },
    { it: "Transfer aeroporto su richiesta (a pagamento)", en: "Airport transfer on request (paid)", es: "Traslado al aeropuerto bajo petición (de pago)" },
    { it: "Consigli su Roma, spiagge e ristoranti", en: "Local tips for Rome, beaches & restaurants", es: "Consejos sobre Roma, playas y restaurantes" },
    { it: "Italiano, inglese e spagnolo", en: "Italian, English and Spanish", es: "Italiano, inglés y español" },
  ];

  const loveChecks: B[] = [
    { it: "Accoglienza calorosa dell'host", en: "Warm welcome from the host", es: "Acogida cálida por parte del anfitrión" },
    { it: "Pulizia eccezionale", en: "Exceptionally clean", es: "Limpieza excepcional" },
    { it: "Vicino all'aeroporto", en: "Close to the airport", es: "Cerca del aeropuerto" },
    { it: "Zona tranquilla", en: "Quiet area", es: "Zona tranquila" },
    { it: "Appartamenti luminosi e ben attrezzati", en: "Bright, well-equipped apartments", es: "Apartamentos luminosos y bien equipados" },
  ];

  const practical: { Icon: typeof Clock; t: B; s: B }[] = [
    { Icon: CalendarCheck, t: { it: "Check-in", en: "Check-in", es: "Check-in" }, s: { it: "dalle 15:00 a mezzanotte", en: "from 15:00 to midnight", es: "de 15:00 a medianoche" } },
    { Icon: CalendarX, t: { it: "Check-out", en: "Check-out", es: "Check-out" }, s: { it: "entro le 11:00", en: "by 11:00", es: "antes de las 11:00" } },
    { Icon: Users, t: { it: "Bambini", en: "Children", es: "Niños" }, s: { it: "di tutte le età benvenuti", en: "all ages welcome", es: "de todas las edades, bienvenidos" } },
    { Icon: PawPrint, t: { it: "Niente animali", en: "No pets", es: "Sin animales" }, s: { it: "", en: "", es: "" } },
    { Icon: CigaretteOff, t: { it: "Non fumatori", en: "No smoking", es: "No fumadores" }, s: { it: "all'interno", en: "indoors", es: "en el interior" } },
    { Icon: PartyPopper, t: { it: "Niente feste", en: "No parties", es: "Sin fiestas" }, s: { it: "o eventi", en: "or events", es: "ni eventos" } },
  ];

  const reach: { n: string; Icon: typeof Plane; t: B; time: B; s: B }[] = [
    { n: "1", Icon: Plane, t: { it: "Dall'aeroporto FCO", en: "From FCO Airport", es: "Desde el aeropuerto FCO" }, time: { it: "10 min", en: "10 min", es: "10 min" }, s: { it: "In auto/taxi circa 10 minuti. Possiamo organizzare un transfer su richiesta (a pagamento).", en: "By car/taxi: about 10 minutes. We can arrange an airport transfer on request (paid).", es: "En coche/taxi unos 10 minutos. Podemos organizar un traslado bajo petición (de pago)." } },
    { n: "2", Icon: Train, t: { it: "In treno verso Roma", en: "Train to Rome", es: "En tren hacia Roma" }, time: { it: "32 min", en: "32 min", es: "32 min" }, s: { it: "Leonardo Express dall'aeroporto di Fiumicino a Roma Termini. Senza auto!", en: "Leonardo Express from Fiumicino Airport to Roma Termini. No car needed!", es: "Leonardo Express desde el aeropuerto de Fiumicino a Roma Termini. ¡Sin coche!" } },
    { n: "3", Icon: Car, t: { it: "In auto", en: "By car", es: "En coche" }, time: { it: "", en: "", es: "" }, s: { it: "Accesso comodo dall'A91 e dalle strade principali. Parcheggio privato gratuito in loco.", en: "Easy access from the A91 and main roads. Free private parking on-site.", es: "Acceso cómodo desde la A91 y las carreteras principales. Aparcamiento privado gratuito in situ." } },
    { n: "4", Icon: Footprints, t: { it: "A piedi", en: "On foot", es: "A pie" }, time: { it: "7 min", en: "7 min", es: "7 min" }, s: { it: "La stazione dei treni di Fiumicino è a soli 7 minuti a piedi dalla casa.", en: "Fiumicino train station is just a 7-minute walk from the house.", es: "La estación de tren de Fiumicino está a solo 7 minutos a pie de la casa." } },
    { n: "5", Icon: ShoppingCart, t: { it: "Nei dintorni", en: "Nearby", es: "En los alrededores" }, time: { it: "500 m", en: "500 m", es: "500 m" }, s: { it: "Fermata del bus pubblico a 500 m e ristoranti (It Italian, Luana) a circa 700 m.", en: "Public bus stop 500 m away and restaurants (It Italian, Luana) about 700 m away.", es: "Parada de autobús público a 500 m y restaurantes (It Italian, Luana) a unos 700 m." } },
  ];

  return (
    <main className="flex-1">
      {/* ===================== HERO ===================== */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1">
            <p className={eyebrow}>{tr(lang, { it: "Siamo qui per te!", en: "We're here for you!", es: "¡Estamos aquí para ti!" })}</p>
            <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-deep-brown md:text-5xl">
              {tr(lang, { it: "Contattaci e prenota con noi", en: "Get in touch & book with us", es: "Contáctanos y reserva con nosotros" })}
            </h1>
            <Wave className="mt-3 h-2 w-20 text-terracotta" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-warm-gray">
              {tr(lang, {
                it: "Siamo una casa vacanze a gestione familiare a Fiumicino. Accogliamo personalmente ogni ospite, aiutiamo con bagagli e parcheggio e condividiamo i consigli migliori per goderti Roma e il mare.",
                en: "We're a family-run holiday house in Fiumicino. We personally welcome every guest, help with luggage and parking, and share the best tips to enjoy Rome and the sea.",
                es: "Somos una casa vacacional de gestión familiar en Fiumicino. Recibimos personalmente a cada huésped, ayudamos con el equipaje y el aparcamiento y compartimos los mejores consejos para disfrutar de Roma y el mar.",
              })}
            </p>
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {heroFeatures.map((f) => (
                <div key={f.t.en} className="flex flex-col gap-1.5 border-line-soft sm:[&:not(:last-child)]:border-r sm:[&:not(:last-child)]:pr-4">
                  <f.Icon className="h-6 w-6 text-terracotta" strokeWidth={1.5} />
                  <p className="text-sm font-semibold leading-tight text-deep-brown">{t(f.t)}</p>
                  <p className="text-xs leading-snug text-warm-gray">{t(f.s)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* photo + overlapping cards (nascosta su mobile: resta solo il testo) */}
          <div className="relative order-1 hidden md:order-2 md:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card">
              <Ph label={tr(lang, { it: "Foto della famiglia di Fabio", en: "Photo of Fabio's family", es: "Foto de la familia de Fabio" })} className="absolute inset-0" />
            </div>
            <div className="relative z-10 mx-4 -mt-10">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl px-6 py-4 text-white shadow-lg transition hover:opacity-95" style={{ backgroundColor: "#25d366" }}>
                <span className="flex items-center gap-3">
                  <I.whatsapp className="h-6 w-6" />
                  <span className="leading-tight">
                    <span className="block text-base font-semibold">{tr(lang, { it: "Scrivici su WhatsApp", en: "Chat on WhatsApp", es: "Escríbenos por WhatsApp" })}</span>
                    <span className="block text-xs text-white/90">{tr(lang, { it: "Risposta immediata!", en: "Instant reply!", es: "¡Respuesta inmediata!" })}</span>
                  </span>
                </span>
                <span aria-hidden className="text-xl">›</span>
              </a>
              <ContactFormModal
                renderTrigger={(open) => (
                  <button
                    type="button"
                    onClick={open}
                    aria-haspopup="dialog"
                    aria-label="Email"
                    className="mt-3 flex w-full items-center justify-between gap-3 rounded-2xl px-6 py-4 text-white shadow-lg transition hover:opacity-95"
                    style={{ backgroundColor: GMAIL_BLUE }}
                  >
                    <span className="flex items-center gap-3">
                      <GmailChip iconClass="h-6 w-6" chipClass="p-1" />
                      <span className="leading-tight text-left">
                        <span className="block text-base font-semibold">Email</span>
                        <span className="block text-xs text-white/90">{tr(lang, { it: "Ti rispondiamo presto", en: "We reply soon", es: "Te respondemos pronto" })}</span>
                      </span>
                    </span>
                    <span aria-hidden className="text-xl">›</span>
                  </button>
                )}
              />
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-line bg-paper px-4 py-3 text-xs text-warm-gray shadow-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 text-terracotta" />
                {tr(lang, { it: "Il modo migliore per aiutarti in fretta. Salutaci, chiedici qualsiasi cosa, siamo qui!", en: "Our best way to help you quickly. Say hello, ask anything, we're here!", es: "La mejor forma de ayudarte rápidamente. Salúdanos, pregúntanos lo que quieras, ¡estamos aquí!" })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ALL WAYS TO CONTACT ===================== */}
      <section className="relative overflow-hidden bg-cover bg-center py-12 md:py-14" style={{ backgroundImage: "url('/images/luoghi/teal-water.jpg')" }}>
        <div className="absolute inset-0 bg-paper/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl font-bold italic text-white drop-shadow md:text-3xl">{tr(lang, { it: "Tutti i modi per contattarci", en: "All the ways to contact us", es: "Todas las formas de contactarnos" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <a href={telLink} className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 text-left shadow-sm transition hover:shadow-card sm:block sm:p-6 sm:text-center">
              <Phone className="h-7 w-7 flex-shrink-0 text-terracotta sm:mx-auto" strokeWidth={1.5} />
              <div className="sm:mt-3">
                <h3 className="font-semibold text-deep-brown">{tr(lang, { it: "Chiamaci", en: "Call us", es: "Llámanos" })}</h3>
                <p className="font-semibold text-terracotta sm:mt-1">{WHATSAPP_DISPLAY}</p>
                <p className="mt-1 text-xs text-warm-gray sm:mt-2">{tr(lang, { it: "Tutti i giorni · risposta rapida", en: "Every day · quick reply", es: "Todos los días · respuesta rápida" })}</p>
                <p className="text-xs text-warm-gray">{tr(lang, { it: "Parliamo italiano, inglese e spagnolo", en: "We speak Italian, English & Spanish", es: "Hablamos italiano, inglés y español" })}</p>
              </div>
            </a>
            <a href={mailto} className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 text-left shadow-sm transition hover:shadow-card sm:block sm:p-6 sm:text-center">
              <Mail className="h-7 w-7 flex-shrink-0 text-terracotta sm:mx-auto" strokeWidth={1.5} />
              <div className="sm:mt-3">
                <h3 className="font-semibold text-deep-brown">{tr(lang, { it: "Scrivici una email", en: "Email us", es: "Escríbenos un email" })}</h3>
                <p className="font-semibold text-terracotta sm:mt-1">{EMAIL}</p>
                <p className="mt-1 text-xs text-warm-gray sm:mt-2">{tr(lang, { it: "Di solito rispondiamo in poche ore", en: "We usually reply within a few hours", es: "Normalmente respondemos en pocas horas" })}</p>
              </div>
            </a>
            <a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 text-left shadow-sm transition hover:shadow-card sm:block sm:p-6 sm:text-center">
              <MapPin className="h-7 w-7 flex-shrink-0 text-terracotta sm:mx-auto" strokeWidth={1.5} />
              <div className="sm:mt-3">
                <h3 className="font-semibold text-deep-brown">{tr(lang, { it: "Vieni a trovarci", en: "Write to us", es: "Ven a visitarnos" })}</h3>
                <p className="text-sm font-semibold text-deep-brown sm:mt-1">{ADDRESS_LINE_1}</p>
                <p className="text-sm text-deep-brown">{ADDRESS_LINE_2}</p>
                <p className="mt-1 text-xs text-warm-gray sm:mt-2">{tr(lang, { it: "Zona residenziale, tranquilla e sicura", en: "Residential area, quiet and safe", es: "Zona residencial, tranquila y segura" })}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== WHERE WE ARE ===================== */}
      <section className="bg-paper py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div>
            <h2 className={titleC}>{tr(lang, { it: "Dove siamo", en: "Where we are", es: "Dónde estamos" })}</h2>
            <Wave className="mt-2 h-2 w-16 text-terracotta" />
            <div className="mt-6 flex items-start gap-3">
              <HomeIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
              <div><p className="font-semibold text-deep-brown">MiriAle Holiday House</p><p className="text-sm text-warm-gray">{ADDRESS_LINE_1}</p><p className="text-sm text-warm-gray">{ADDRESS_LINE_2}, {tr(lang, { it: "Italia", en: "Italy", es: "Italia" })}</p></div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta" strokeWidth={1.6} />
              <div><p className="font-semibold text-deep-brown">{tr(lang, { it: "Posizione", en: "Location", es: "Ubicación" })}</p><p className="text-sm text-warm-gray">{tr(lang, { it: "Fiumicino (Roma), a 10 min dall'aeroporto", en: "Fiumicino (Rome), 10 min from the airport", es: "Fiumicino (Roma), a 10 min del aeropuerto" })}</p></div>
            </div>
            <a href={MAPS_SHORT} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-terracotta px-5 py-2.5 text-sm font-semibold text-terracotta transition hover:bg-terracotta hover:text-white">
              <MapPin className="h-4 w-4" /> {tr(lang, { it: "Apri su Google Maps", en: "View on Google Maps", es: "Abrir en Google Maps" })}
            </a>
          </div>
          <iframe src={MAPS_EMBED} className="h-[320px] w-full rounded-2xl border-0 shadow-sm" loading="lazy" title="Map" />
        </div>
      </section>

      {/* ===================== HOST + REVIEWS ===================== */}
      <section className="bg-cream py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
          {/* host card */}
          <div className="rounded-2xl bg-olive-section p-7 text-white shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/70">{tr(lang, { it: "I tuoi host", en: "Your hosts", es: "Tus anfitriones" })}</p>
                <p className="font-serif text-2xl font-bold">{tr(lang, { it: "Fabio e famiglia", en: "Fabio & family", es: "Fabio y familia" })}</p>
              </div>
              <Ph label="Fabio" className="h-20 w-20 flex-shrink-0 rounded-2xl" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/85">{tr(lang, { it: "Viviamo qui a Fiumicino e amiamo accogliere ospiti da tutto il mondo. Saremo i tuoi amici del posto durante il soggiorno!", en: "We live here in Fiumicino and love welcoming guests from all over the world. We'll be your local friends during your stay!", es: "Vivimos aquí en Fiumicino y nos encanta recibir a huéspedes de todo el mundo. ¡Seremos tus amigos locales durante tu estancia!" })}</p>
            <ul className="mt-5 space-y-2">
              {hostChecks.map((c) => (
                <li key={c.en} className="flex items-center gap-2 text-sm text-white/90"><Check className="h-4 w-4 flex-shrink-0 text-gold" /> {t(c)}</li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 font-script text-xl text-white">{tr(lang, { it: "Non vediamo l'ora di conoscerti!", en: "Looking forward to meeting you!", es: "¡Estamos deseando conocerte!" })} <Heart className="h-4 w-4 fill-white/30" /></p>
          </div>

          {/* reviews card */}
          <div className="rounded-2xl border border-line bg-paper p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-xl font-bold text-deep-brown">{tr(lang, { it: "Perché gli ospiti amano stare da noi", en: "Why guests love staying with us", es: "Por qué a los huéspedes les encanta quedarse con nosotros" })}</h3>
              <span className="flex-shrink-0 rounded-lg bg-[#003580] px-3 py-2 text-center text-[10px] font-semibold leading-tight text-white">Booking.com<br />{tr(lang, { it: "8.8 · Favoloso", en: "8.8 · Fabulous", es: "8.8 · Fabuloso" })}</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-serif text-4xl font-bold text-deep-brown">8.8<span className="text-xl text-warm-gray">/10</span></span>
              <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            </div>
            <p className="mt-1 text-sm text-warm-gray">{tr(lang, { it: "da 129 recensioni su Booking.com", en: "from 129 reviews on Booking.com", es: "de 129 reseñas en Booking.com" })}</p>
            <ul className="mt-5 space-y-2.5">
              {loveChecks.map((c) => (
                <li key={c.en} className="flex items-center gap-2 text-sm text-deep-brown"><Check className="h-4 w-4 flex-shrink-0 text-terracotta" /> {t(c)}</li>
              ))}
            </ul>
            <Link href="/recensioni" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline">
              {tr(lang, { it: "Leggi tutte le 129 recensioni →", en: "Read all 129 reviews →", es: "Lee las 129 reseñas →" })}
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== PRACTICAL INFO ===================== */}
      <section className="bg-paper py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className={titleC}>{tr(lang, { it: "Informazioni pratiche", en: "Practical information", es: "Información práctica" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-5 rounded-2xl border border-line bg-cream px-6 py-6 sm:grid-cols-3 lg:grid-cols-6">
            {practical.map((p) => (
              <div key={p.t.en} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
                <p.Icon className="h-6 w-6 flex-shrink-0 text-terracotta" strokeWidth={1.5} />
                <div className="leading-tight"><div className="text-sm font-semibold text-deep-brown">{t(p.t)}</div>{t(p.s) ? <div className="text-xs text-warm-gray">{t(p.s)}</div> : null}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW TO REACH US ===================== */}
      <section className="bg-cream py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className={titleC}>{tr(lang, { it: "Come raggiungerci", en: "How to reach us", es: "Cómo llegar" })}</h2>
            <Wave className="mx-auto mt-2 h-2 w-16 text-terracotta" />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {reach.map((r) => (
              <article key={r.n} className="flex flex-col rounded-2xl border border-line bg-paper p-4 shadow-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-white">{r.n}</span>
                  <div className="leading-tight"><p className="font-semibold text-deep-brown">{t(r.t)}</p>{t(r.time) ? <p className="text-xs font-medium text-terracotta">{t(r.time)}</p> : null}</div>
                </div>
                <r.Icon className="mt-4 hidden h-9 w-9 text-terracotta/80 sm:block" strokeWidth={1.3} />
                <p className="mt-2 text-xs leading-relaxed text-warm-gray sm:mt-3">{t(r.s)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
