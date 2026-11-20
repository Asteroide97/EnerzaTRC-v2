import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { projects } from "@/data/projects";
import { getWhatsAppHref } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Proyectos solares",
  description:
    "Conoce las instalaciones solares de Enerza en Monterrey, Real del Nogalar, Ampliación Senderos y la colonia Ampliación Los Ángeles de Torreón.",
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
        description="Explora nuestras instalaciones de sistemas fotovoltaicos en Nuevo León y Coahuila."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Cotizar proyecto
            </CTAButton>
            <CTAButton href={getWhatsAppHref()} external variant="outline">
              WhatsApp
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-12 py-14 lg:space-y-14 lg:py-16">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Casos reales"
            title="Proyectos destacados"
          />
          <ProjectCarousel projects={projects} />
        </section>

        <section className="rounded-[28px] border border-border bg-muted/50 p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="field-label text-primary">Cotizacion</p>
              <h2 className="mt-3 font-heading text-3xl font-bold">
                Si ya viste casos comparables, solicita tu cotizacion.
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
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
