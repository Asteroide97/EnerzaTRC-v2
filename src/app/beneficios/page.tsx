import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { verifiedCurrentSiteContent } from "@/data/site-content";

export const metadata = createMetadata({
  title: "Beneficios de instalar paneles solares",
  description:
    "Ahorro mensual, mejor control del consumo, interconexión CFE y monitoreo claro con sistemas solares de Enerza TRC.",
  path: "/beneficios",
  keywords: [
    "beneficios de instalar paneles solares",
    "ahorro con paneles solares",
    "paneles solares para hogar",
    "paneles solares para negocio",
  ],
});

export default function BeneficiosPage() {
  return (
    <>
      <PageHero
        eyebrow="Beneficios"
        title={verifiedCurrentSiteContent.benefits.title}
        description={verifiedCurrentSiteContent.benefits.subtitle}
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Solicitar cotización
            </CTAButton>
            <CTAButton href="/proyectos" variant="outline">
              Ver proyectos
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Beneficios reales"
            title="Ahorro, control y soporte técnico"
            description="Los beneficios cambian según el consumo, la tarifa y el tipo de proyecto. Por eso la orientación debe partir de datos reales."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {verifiedCurrentSiteContent.benefits.items.map((item, index) => (
              <article key={item.id} className="project-plate cut-corner p-6">
                <p className="field-label text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="cut-corner border border-foreground/12 bg-card p-8">
          <p className="field-label text-primary">Nota importante</p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground">
            {verifiedCurrentSiteContent.benefits.note}
          </p>
        </section>

        <section className="cut-corner border border-foreground/12 bg-primary/10 p-8">
          <p className="field-label text-primary">Siguiente paso</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight">
            Si quieres revisar cómo aplican estos beneficios a tu caso, el siguiente
            paso es cotizar con tu recibo CFE.
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Ir a cotizar
            </CTAButton>
            <CTAButton href="/como-funciona" variant="outline">
              Ver proceso
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
