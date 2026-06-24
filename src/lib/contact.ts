import { businessConfig } from "@/config/business";
import type { ContactFormValues } from "@/lib/validators/contact";

function sanitizePhoneNumber(value: string) {
  return value.replace(/\D/g, "");
}

function toDisplayValue(value?: string) {
  const normalized = value?.trim();
  return normalized ? normalized : "No compartido";
}

export function buildQuoteWhatsAppMessage(values: ContactFormValues) {
  return [
    "Hola, quiero cotizar un sistema de paneles solares con Enerza.",
    "",
    "Datos de contacto:",
    `Nombre: ${toDisplayValue(values.name)}`,
    `Telefono: ${toDisplayValue(values.phone)}`,
    `Correo: ${toDisplayValue(values.email)}`,
    "",
    "Datos del proyecto:",
    `Ciudad / colonia: ${toDisplayValue(values.city)}`,
    `Estado: ${toDisplayValue(values.state)}`,
    `Tipo de inmueble: ${toDisplayValue(values.customerType)}`,
    `Servicio requerido: ${toDisplayValue(values.service)}`,
    `Recibo CFE aproximado: ${toDisplayValue(values.averageBill)}`,
    "",
    "Mensaje adicional:",
    toDisplayValue(values.message),
  ].join("\n");
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
