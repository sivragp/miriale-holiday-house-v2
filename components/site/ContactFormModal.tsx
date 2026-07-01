"use client";

import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send, X } from "lucide-react";
import { I } from "@/lib/site";
import { type Lang, useLang, tr } from "@/components/site/LangProvider";

/* -------------------------------------------------------------------------- */
/*  Tipi                                                                       */
/* -------------------------------------------------------------------------- */

type B = { it: string; en: string };
type Status = "idle" | "loading" | "success" | "error";

interface ContactFormModalProps {
  /**
   * Trigger personalizzato: ricevi `open` e rendi il bottone che preferisci
   * (usato in ogni punto per rispecchiare 1:1 il bottone WhatsApp adiacente).
   * Se omesso, viene reso il bottone di default (blu, "Email", logo Gmail).
   */
  renderTrigger?: (open: () => void) => ReactNode;
  /** Classi extra applicate al trigger di default. */
  className?: string;
}

/* Destinatario + endpoint FormSubmit (AJAX, nessun backend). */
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/miriale.holidayhouse@gmail.com";

/* Blu Gmail: colore unico del bottone Email in tutto il sito. */
export const GMAIL_BLUE = "#1a73e8";

/**
 * Logo Gmail dentro un chip bianco arrotondato: garantisce leggibilità
 * dell'icona multicolore sul fondo blu. Dimensioni proporzionabili per punto.
 */
export function GmailChip({
  iconClass = "h-4 w-4",
  chipClass = "p-0.5",
}: {
  iconClass?: string;
  chipClass?: string;
}) {
  return (
    <span className={`grid flex-shrink-0 place-items-center rounded bg-white ${chipClass}`}>
      <I.gmail className={iconClass} />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Componente                                                                 */
/* -------------------------------------------------------------------------- */

export default function ContactFormModal({
  renderTrigger,
  className = "",
}: ContactFormModalProps) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <>
      {renderTrigger ? (
        renderTrigger(openModal)
      ) : (
        <button
          type="button"
          onClick={openModal}
          aria-haspopup="dialog"
          aria-label="Email"
          className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 ${className}`}
          style={{ backgroundColor: GMAIL_BLUE }}
        >
          <GmailChip />
          <span>Email</span>
        </button>
      )}

      {open ? (
        <ContactDialog lang={lang} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Dialog + form                                                              */
/* -------------------------------------------------------------------------- */

const T = {
  title: { it: "Scrivici un messaggio", en: "Send us a message" },
  intro: {
    it: "Compila il modulo: ti rispondiamo il prima possibile.",
    en: "Fill in the form: we'll get back to you as soon as possible.",
  },
  firstName: { it: "Nome", en: "First name" },
  lastName: { it: "Cognome", en: "Last name" },
  email: { it: "Email", en: "Email" },
  phone: { it: "Numero di telefono", en: "Phone number" },
  reason: { it: "Motivo del contatto", en: "Reason for contact" },
  optional: { it: "facoltativo", en: "optional" },
  firstNamePh: { it: "Es. Mario", en: "e.g. Mario" },
  lastNamePh: { it: "Es. Rossi", en: "e.g. Rossi" },
  emailPh: { it: "nome@email.com", en: "name@email.com" },
  phonePh: { it: "+39 ...", en: "+39 ..." },
  reasonPh: {
    it: "Date, numero di ospiti, domande sul soggiorno...",
    en: "Dates, number of guests, questions about your stay...",
  },
  send: { it: "Invia richiesta", en: "Send request" },
  sending: { it: "Invio in corso...", en: "Sending..." },
  close: { it: "Chiudi", en: "Close" },
  successTitle: { it: "Richiesta inviata!", en: "Request sent!" },
  successBody: {
    it: "Grazie! Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.",
    en: "Thank you! We received your message and will reply as soon as possible.",
  },
  errorTitle: { it: "Qualcosa è andato storto", en: "Something went wrong" },
  errorBody: {
    it: "Non siamo riusciti a inviare la richiesta. Riprova o scrivici su WhatsApp.",
    en: "We couldn't send your request. Please try again or reach us on WhatsApp.",
  },
  retry: { it: "Riprova", en: "Try again" },
  required: { it: "Campo obbligatorio", en: "Required field" },
} satisfies Record<string, B>;

const EMPTY = { firstName: "", lastName: "", email: "", phone: "", reason: "" };

function ContactDialog({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [honey, setHoney] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const descId = useId();

  /* Focus iniziale + blocco scroll del body + chiusura con Esc. */
  useEffect(() => {
    firstFieldRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const set = (k: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) return; // trappola anti-spam: bot compilano campi nascosti
    setStatus("loading");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nome: form.firstName,
          Cognome: form.lastName,
          Email: form.email,
          Telefono: form.phone,
          Motivo: form.reason,
          _subject: "Nuova richiesta dal sito MiriAle",
          _template: "table",
          _captcha: "false",
          _honey: honey,
        }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data && String(data.success) === "true") {
        setStatus("success");
        setForm(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const loading = status === "loading";
  const labelCls =
    "flex items-center gap-1 text-xs font-semibold text-deep-brown";
  const reqMark = (
    <span className="text-terracotta" aria-hidden>
      *
    </span>
  );

  const dialog = (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label={tr(lang, T.close)}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-deep-brown/50 backdrop-blur-sm"
      />

      {/* pannello */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-paper shadow-card sm:rounded-3xl">
        {/* header */}
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 pb-4 pt-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-deep-brown text-white">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h2
                id={titleId}
                className="font-serif text-lg font-bold text-deep-brown"
              >
                {tr(lang, T.title)}
              </h2>
              <p id={descId} className="text-xs text-warm-gray">
                {tr(lang, T.intro)}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={tr(lang, T.close)}
            className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-line text-warm-gray transition hover:bg-cream-2 hover:text-deep-brown"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-terracotta" strokeWidth={1.6} />
            <h3 className="font-serif text-lg font-bold text-deep-brown">
              {tr(lang, T.successTitle)}
            </h3>
            <p className="max-w-xs text-sm text-warm-gray">
              {tr(lang, T.successBody)}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-deep-brown px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              {tr(lang, T.close)}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6" noValidate={false}>
            {/* honeypot anti-spam (nascosto agli umani) */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="cf-first" className={labelCls}>
                  {tr(lang, T.firstName)} {reqMark}
                </label>
                <input
                  ref={firstFieldRef}
                  id="cf-first"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  disabled={loading}
                  value={form.firstName}
                  onChange={set("firstName")}
                  placeholder={tr(lang, T.firstNamePh)}
                  className="input-base disabled:opacity-60"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="cf-last" className={labelCls}>
                  {tr(lang, T.lastName)} {reqMark}
                </label>
                <input
                  id="cf-last"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  disabled={loading}
                  value={form.lastName}
                  onChange={set("lastName")}
                  placeholder={tr(lang, T.lastNamePh)}
                  className="input-base disabled:opacity-60"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="cf-email" className={labelCls}>
                {tr(lang, T.email)} {reqMark}
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={loading}
                value={form.email}
                onChange={set("email")}
                placeholder={tr(lang, T.emailPh)}
                className="input-base disabled:opacity-60"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="cf-phone" className={labelCls}>
                {tr(lang, T.phone)} {reqMark}
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                disabled={loading}
                value={form.phone}
                onChange={set("phone")}
                placeholder={tr(lang, T.phonePh)}
                className="input-base disabled:opacity-60"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="cf-reason" className={labelCls}>
                <span>{tr(lang, T.reason)}</span>
                <span className="font-normal text-warm-gray">
                  ({tr(lang, T.optional)})
                </span>
              </label>
              <textarea
                id="cf-reason"
                name="reason"
                rows={3}
                disabled={loading}
                value={form.reason}
                onChange={set("reason")}
                placeholder={tr(lang, T.reasonPh)}
                className="input-base resize-none disabled:opacity-60"
              />
            </div>

            {status === "error" ? (
              <div className="flex items-start gap-2 rounded-xl border border-terracotta/30 bg-terracotta/5 px-3 py-2.5 text-xs text-deep-brown">
                <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" />
                <div>
                  <p className="font-semibold">{tr(lang, T.errorTitle)}</p>
                  <p className="text-warm-gray">{tr(lang, T.errorBody)}</p>
                </div>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep-brown px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {tr(lang, T.sending)}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {tr(lang, status === "error" ? T.retry : T.send)}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
}
