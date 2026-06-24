import { businessConfig } from "@/config/business";

function sanitizePhoneNumber(value: string) {
  return value.replace(/\D/g, "");
}

export function getWhatsAppHref(
  message = "Hola, quiero cotizar un sistema de paneles solares con Enerza.",
) {
  const phone = sanitizePhoneNumber(businessConfig.whatsapp);

  if (!phone) {
    return "/cotizar";
  }

  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export function getPhoneHref() {
  const phone = sanitizePhoneNumber(businessConfig.phone);
  return phone ? `tel:${phone}` : "/cotizar";
}

export function getMailHref() {
  return businessConfig.email ? `mailto:${businessConfig.email}` : "/cotizar";
}
