import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { projects } from "@/data/projects";

export const metadata = createMetadata({
  title: "Proyectos solares",
  description:
    "Portafolio de Enerza TRC con tres proyectos: Monterrey, Real del Nogalar y Ampliacion Senderos.",
  path: "/proyectos",
  keywords: [
    "proyectos solares Monterrey",
    "real del nogalar paneles solares",
    "ampliacion senderos paneles solares",
    "casos de estudio paneles solares",
  ],
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Proyectos solares en Monterrey, La Laguna y Coahuila"
        description="Cada caso funciona como prueba de confianza. El proyecto reciente de Monterrey aparece primero, seguido por Real del Nogalar y Ampliacion Senderos."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Cotizar proyecto
            </CTAButton>
            <CTAButton href="/contacto" variant="outline">
              Contacto
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Casos reales"
            title="Tres proyectos destacados"
            description="Monterrey aparece primero, seguido por Real del Nogalar y Ampliacion Senderos."
          />
          <ProjectCarousel projects={projects} />
        </section>

        <section className="cut-corner border border-foreground/12 bg-primary/10 p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="field-label text-primary">Cotizacion</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold">
                Si ya viste casos comparables, solicita tu cotizacion.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Comparte tu recibo CFE, tu ciudad y el objetivo del sistema para
                orientar la solucion solar adecuada.
              </p>
            </div>
            <CTAButton href="/cotizar" size="lg" showArrow>
              Ir a cotizar
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
