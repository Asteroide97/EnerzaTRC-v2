import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { Hero } from "@/components/sections/hero";
import { benefitsPreviewItems } from "@/data/site-content";
import { featuredProjects } from "@/data/projects";

export const metadata = createMetadata({
  title: "Ahorra en tu recibo de luz con paneles solares instalados por expertos",
  description:
    "Instalacion profesional, tramite CFE, panel de control y cobertura en Torreon, La Laguna, Monterrey y el norte de Mexico.",
  path: "/",
  keywords: [
    "paneles solares Torreon",
    "paneles solares La Laguna",
    "paneles solares Monterrey",
    "instalacion de paneles solares Torreon",
    "instalacion de paneles solares Monterrey",
    "tramite CFE paneles solares",
    "panel de control solar",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <Container className="space-y-12 py-12 lg:space-y-14 lg:py-16">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Beneficios"
            title="Tres razones para revisar tu proyecto solar"
            description="Ahorro, acompanamiento tecnico y monitoreo claro."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {benefitsPreviewItems.map((benefit, index) => (
              <article
                key={benefit.id}
                className="rounded-[24px] border border-foreground/10 bg-card p-6"
              >
                <div className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-4">
                  <span className="font-heading text-4xl font-semibold text-foreground/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="field-label text-primary">Beneficio</span>
                </div>
                <div className="mt-4 space-y-3">
                  <h2 className="font-heading text-2xl font-semibold tracking-tight">
                    {benefit.title}
                  </h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Proyectos destacados"
            title="Casos reales en Monterrey, La Laguna y Coahuila"
            description="El proyecto reciente de Monterrey aparece primero como referencia de servicio activo."
          />
          <ProjectCarousel projects={featuredProjects} />
        </section>

        <section className="rounded-[28px] border border-foreground/12 bg-primary/8 p-8">
          <p className="field-label text-primary">Cotizacion</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight">
            Comparte tu recibo CFE, tu ciudad y el servicio que necesitas.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            Revisamos tu solicitud para orientarte sobre instalacion,
            mantenimiento o tramite CFE segun el consumo real del proyecto.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Cotizar tu proyecto
            </CTAButton>
            <CTAButton href="/contacto" variant="outline">
              Contacto
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
