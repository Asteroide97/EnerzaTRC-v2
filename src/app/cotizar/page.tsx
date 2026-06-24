import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/pages/page-hero";
import { getWhatsAppHref } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Cotizar paneles solares",
  description:
    "Solicita una cotización para instalación, mantenimiento o trámite CFE de paneles solares. Atención en Torreón, La Laguna, Monterrey y el norte de México.",
  path: "/cotizar",
  keywords: [
    "cotizar paneles solares",
    "cotización paneles solares Torreón",
    "cotización paneles solares Monterrey",
    "trámite CFE paneles solares",
    "mantenimiento de sistemas solares",
  ],
});

export default function CotizarPage() {
  return (
    <>
      <PageHero
        eyebrow="Cotizar"
        title="Cotiza tu proyecto solar"
        description="Déjanos tus datos y te contactaremos para revisar tu recibo CFE, tipo de inmueble y servicio requerido."
        actions={
          <CTAButton href={getWhatsAppHref()} external variant="outline">
            Cotizar por WhatsApp
          </CTAButton>
        }
      />
      <Container className="grid gap-8 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
        <ContactForm
          formId="quote-contact-form"
          eyebrow="Solicitud"
          title="Envía tu solicitud"
          description="Comparte tu ciudad, tipo de inmueble y recibo CFE aproximado para preparar una orientación inicial."
          submitLabel="Enviar solicitud"
          secondaryCtaLabel="Cotizar por WhatsApp"
          submitMicrocopy="Usaremos tus datos únicamente para dar seguimiento a tu solicitud."
          successMessage="Recibimos tu solicitud. Revisaremos tu caso y, si hace falta más detalle, te pediremos tu recibo CFE más reciente."
        />

        <aside className="space-y-4">
          <div className="cut-corner border border-foreground/12 bg-card p-6">
            <p className="field-label text-primary">Para cotizar mejor</p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight">
              Ten a la mano tu recibo CFE más reciente
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Nos ayuda a revisar consumo mensual, tipo de tarifa y el contexto real
              del proyecto antes de proponerte una orientación inicial.
            </p>
          </div>

          <div className="cut-corner border border-foreground/12 bg-primary/10 p-6">
            <p className="field-label text-primary">Contacto alterno</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              También puedes escribirnos por WhatsApp si prefieres una atención más directa.
            </p>
            <div className="mt-4">
              <CTAButton href={getWhatsAppHref()} external>
                Prefiero WhatsApp
              </CTAButton>
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
