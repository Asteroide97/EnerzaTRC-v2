import { MessageCircleMore } from "lucide-react";
import { getWhatsAppHref } from "@/lib/contact";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-30 hidden rounded-full border border-primary/40 bg-primary px-4 py-3 text-primary-foreground shadow-lg transition hover:-translate-y-1 md:flex"
      aria-label="Abrir WhatsApp"
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold">
        <MessageCircleMore className="h-4 w-4" />
        WhatsApp
      </span>
    </a>
  );
}
