import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { Hero } from "@/components/sections/hero";
import { benefitsPreviewItems } from "@/data/site-content";
import { featuredProjects } from "@/data/projects";
import { getWhatsAppHref } from "@/lib/contact";

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

      <Container className="space-y-10 py-10 lg:space-y-12 lg:py-14">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Beneficios"
            title="Tres razones para revisar tu proyecto solar"
            description="Ahorro, instalacion profesional y acompanamiento claro desde la cotizacion."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {benefitsPreviewItems.map((benefit, index) => (
              <article
                key={benefit.id}
                className="rounded-[28px] border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 space-y-3">
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
            description="Tres instalaciones reales para reforzar confianza antes de cotizar."
          />
          <ProjectCarousel projects={featuredProjects} />
        </section>

        <section className="rounded-[32px] bg-secondary p-8 text-secondary-foreground lg:p-10">
          <p className="field-label text-primary">Cotizacion</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white">
            Comparte tu recibo CFE, tu ciudad y el servicio que necesitas.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Revisamos tu solicitud para orientarte sobre instalacion,
            mantenimiento o tramite CFE segun el consumo real del proyecto.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Cotizar tu proyecto
            </CTAButton>
            <CTAButton
              href={getWhatsAppHref()}
              external
              variant="outline"
              className="border-white/18 bg-transparent text-white hover:bg-white/10"
            >
              WhatsApp
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
