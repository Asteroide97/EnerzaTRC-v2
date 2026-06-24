import { CTAButton } from "@/components/common/cta-button";
import { Container } from "@/components/common/container";
import { verifiedCurrentSiteContent } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

export function Hero() {
  const highlights = [
    "Ahorro en recibo de luz",
    "Instalación profesional y segura",
    "Trámite CFE y panel de control",
  ];

  return (
    <section className="relative overflow-hidden border-b border-foreground/12 bg-background">
      <Container className="py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="field-label text-primary">Enerza TRC</p>
              <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {verifiedCurrentSiteContent.hero.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {verifiedCurrentSiteContent.hero.subtitle}
              </p>
              <p className="text-sm font-medium text-secondary">
                {verifiedCurrentSiteContent.hero.coverage}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-foreground/10 bg-card px-4 py-4">
                <p className="field-label text-muted-foreground">Zonas principales</p>
                <p className="mt-2 text-base font-medium text-foreground">
                  Torreón y La Laguna
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-card px-4 py-4">
                <p className="field-label text-muted-foreground">Atención activa</p>
                <p className="mt-2 text-base font-medium text-foreground">
                  Monterrey y Nuevo León
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-card px-4 py-4">
                <p className="field-label text-muted-foreground">Cobertura regional</p>
                <p className="mt-2 text-base font-medium text-foreground">
                  Norte de México
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/cotizar" showArrow>
                Solicitar cotización
              </CTAButton>
              <CTAButton href="/proyectos" variant="outline">
                Ver proyectos
              </CTAButton>
              <CTAButton href={getWhatsAppHref()} external variant="secondary">
                WhatsApp
              </CTAButton>
            </div>
          </div>

          <div className="rounded-[28px] border border-foreground/12 bg-secondary p-6 text-secondary-foreground lg:p-8">
            <p className="field-label text-primary">Lo que revisamos</p>
            <h2 className="mt-3 font-heading text-2xl font-semibold">
              Sistemas solares diseñados para tu consumo real
            </h2>

            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/12 bg-white/5 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="section-rule mt-6 pt-5">
              <p className="field-label text-slate-400">Cobertura</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Atención en Torreón, La Laguna, Monterrey y proyectos en otras
                zonas del norte de México.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
