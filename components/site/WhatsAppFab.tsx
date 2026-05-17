import { I, waLink } from "@/lib/site";

/** Bottone WhatsApp flottante, presente su tutte le pagine. */
export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fab-whatsapp"
    >
      <I.whatsapp className="h-7 w-7" />
    </a>
  );
}
