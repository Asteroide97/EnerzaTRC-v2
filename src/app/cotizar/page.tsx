import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/pages/page-hero";
import { getWhatsAppHref } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Cotizar paneles solares",
  description:
    "Solicita una cotizacion para instalacion, mantenimiento o tramite CFE de paneles solares. Atencion en Torreon, La Laguna, Monterrey y el norte de Mexico.",
  path: "/cotizar",
  keywords: [
    "cotizar paneles solares",
    "cotizacion paneles solares Torreon",
    "cotizacion paneles solares Monterrey",
    "tramite CFE paneles solares",
    "mantenimiento de sistemas solares",
  ],
});

export default function CotizarPage() {
  return (
    <>
      <PageHero
        eyebrow="Cotizar"
        title="Cotiza tu proyecto solar"
        description="Dejanos tus datos y te contactaremos para revisar tu recibo CFE, tipo de inmueble y servicio requerido."
        actions={
          <CTAButton href={getWhatsAppHref()} external variant="outline">
            WhatsApp
          </CTAButton>
        }
      />
      <Container className="grid gap-6 py-12 lg:grid-cols-[1.12fr_0.88fr] lg:py-14">
        <ContactForm
          formId="quote-contact-form"
          eyebrow="Solicitud"
          title="Envia tu solicitud"
          description="Comparte tu ciudad, tipo de inmueble y recibo CFE aproximado para preparar una orientacion inicial."
          submitLabel="Enviar solicitud"
          submitMicrocopy="Usaremos tus datos unicamente para dar seguimiento a tu solicitud."
          successMessage="Recibimos tu solicitud. Revisaremos tu caso y, si hace falta mas detalle, te pediremos tu recibo CFE mas reciente."
        />

        <aside className="space-y-4">
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
            <p className="field-label text-primary">Para cotizar mejor</p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground">
              Ten a la mano tu recibo CFE mas reciente
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Nos ayuda a revisar consumo mensual, tipo de tarifa y el contexto real
              del proyecto antes de proponerte una orientacion inicial.
            </p>
          </div>

          <div className="rounded-[28px] border border-primary/15 bg-primary/5 p-6">
            <p className="field-label text-primary">WhatsApp directo</p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Si prefieres escribir primero, tambien puedes enviar tu solicitud por
              WhatsApp con atencion directa.
            </p>
            <div className="mt-4">
              <CTAButton href={getWhatsAppHref()} external>
                WhatsApp
              </CTAButton>
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
