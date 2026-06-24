import Image from "next/image";
import { CTAButton } from "@/components/common/cta-button";
import { Container } from "@/components/common/container";
import { monterreyFeaturedProject } from "@/data/projects";
import { verifiedCurrentSiteContent } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

export function Hero() {
  const highlights = [
    "Ahorro en recibo de luz",
    "Instalacion profesional",
    "Tramite CFE",
    "Panel de control",
  ];

  const heroImage =
    monterreyFeaturedProject?.coverImage || "/images/projects/real-del-nogalar.jpeg";

  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_22%)]" />
      <Container className="relative py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/85">
                Enerza TRC
              </div>
              <h1 className="max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ahorra en tu recibo de luz con{" "}
                <span className="text-primary">paneles solares</span> instalados por
                expertos
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-200">
                {verifiedCurrentSiteContent.hero.subtitle}
              </p>
              <p className="text-sm font-medium text-white/80">
                Torreon, La Laguna, Monterrey y el norte de Mexico.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={getWhatsAppHref()} external>
                Cotizar por WhatsApp
              </CTAButton>
              <CTAButton
                href="/cotizar"
                variant="outline"
                className="border-white/15 bg-white text-secondary hover:bg-white/92"
              >
                Solicitar cotizacion
              </CTAButton>
              <CTAButton
                href="/proyectos"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Ver proyectos
              </CTAButton>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative rounded-[30px] border border-white/12 bg-white/6 p-3 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src={heroImage}
                  alt="Proyecto solar de Enerza TRC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary via-secondary/75 to-transparent p-5">
                  <p className="text-base font-semibold text-white">
                    Proyecto reciente en Monterrey, Nuevo Leon
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Cobertura activa para hogares, negocios e industria en el norte
                    de Mexico.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 text-secondary">
                  <p className="text-sm font-semibold text-primary">
                    Instalacion profesional
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Sistemas solares bien instalados, con seguimiento y soporte.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 text-secondary">
                  <p className="text-sm font-semibold text-primary">Cobertura</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Torreon, La Laguna, Monterrey y proyectos regionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
