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
        description="Comparte tu ciudad, tipo de inmueble y recibo CFE aproximado. Con esa informacion podemos preparar una orientacion inicial para instalacion, mantenimiento o tramite CFE."
        actions={
          <CTAButton href={getWhatsAppHref()} external variant="outline">
            Abrir WhatsApp
          </CTAButton>
        }
      />
      <Container className="grid gap-6 py-12 lg:grid-cols-[1.12fr_0.88fr] lg:py-14">
        <ContactForm
          formId="quote-contact-form"
          eyebrow="Solicitud"
          title="Envia tu solicitud"
          description="Completa tus datos para abrir WhatsApp con un mensaje precargado y avanzar mas rapido con la revision inicial."
          submitLabel="Enviar por WhatsApp"
          secondaryCtaLabel="Abrir WhatsApp"
          submitMicrocopy="Al enviar, se abrira WhatsApp con tu solicitud precargada para que puedas confirmar el mensaje."
          successMessage="Se abrio WhatsApp con tu solicitud precargada. Revisa el mensaje y envialo para continuar."
        />

        <aside className="space-y-4">
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
            <p className="field-label text-primary">Para cotizar mejor</p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground">
              Ten a la mano tu recibo CFE mas reciente
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Nos ayuda a revisar consumo mensual, tipo de tarifa y el contexto real
              del proyecto antes de orientarte sobre el sistema o servicio que
              necesitas.
            </p>
          </div>

          <div className="rounded-[28px] border border-primary/15 bg-primary/5 p-6">
            <p className="field-label text-primary">WhatsApp directo</p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Si prefieres escribir primero, tambien puedes abrir WhatsApp directo
              con el mensaje base de cotizacion.
            </p>
            <div className="mt-4">
              <CTAButton href={getWhatsAppHref()} external>
                Abrir WhatsApp
              </CTAButton>
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
