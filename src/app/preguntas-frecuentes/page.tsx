import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { fullFaqs } from "@/data/site-content";
import { getFaqJsonLd } from "@/lib/json-ld";
import { getWhatsAppHref } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Preguntas frecuentes sobre paneles solares",
  description:
    "Respuestas sobre ahorro, garantias, mantenimiento, CFE, monitoreo y cotizacion de sistemas solares.",
  path: "/preguntas-frecuentes",
  keywords: [
    "preguntas frecuentes paneles solares",
    "ahorro paneles solares",
    "mantenimiento paneles solares",
    "tramite CFE paneles solares",
  ],
});

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <SEOJsonLd data={getFaqJsonLd(fullFaqs)} />
      <PageHero
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes sobre paneles solares"
        description="Respuestas sobre ahorro, CFE, mantenimiento, monitoreo y cotizacion de sistemas solares."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Solicitar cotizacion
            </CTAButton>
            <CTAButton href={getWhatsAppHref()} external variant="outline">
              WhatsApp
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Respuestas claras"
            title="Lo que necesitas saber antes de cotizar"
            description="Informacion directa sobre ahorro, interconexion, mantenimiento y monitoreo."
          />
          <FAQAccordion items={fullFaqs} />
        </section>

        <section className="cut-corner border border-foreground/12 bg-primary/10 p-8">
          <p className="field-label text-primary">Siguiente paso</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight">
            Si ya resolviste tus dudas, continua con cotizacion o contacto.
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Ir a cotizar
            </CTAButton>
            <CTAButton href="/panel-de-control" variant="outline">
              Ver panel de control
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
