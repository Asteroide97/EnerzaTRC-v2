import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Wrench } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { getFaqJsonLd } from "@/lib/json-ld";

type ServiceIndexItem = {
  index: string;
  title: string;
  audience: string;
  solution: string;
  href: string;
  cta: string;
};

const servicesIndex: ServiceIndexItem[] = [
  {
    index: "01",
    title: "Instalaci\u00f3n de paneles solares",
    audience:
      "Hogares o inmuebles que buscan una instalaci\u00f3n nueva con lectura real de consumo.",
    solution:
      "Revisi\u00f3n de consumo, dimensionamiento inicial, instalaci\u00f3n profesional y acompa\u00f1amiento t\u00e9cnico.",
    href: "/paneles-solares-residenciales",
    cta: "Conocer servicio",
  },
  {
    index: "02",
    title: "Mantenimiento de sistemas solares",
    audience:
      "Sistemas ya instalados que requieren limpieza, revisi\u00f3n o diagn\u00f3stico.",
    solution:
      "Limpieza, revisi\u00f3n de componentes, diagn\u00f3stico y seguimiento preventivo o correctivo.",
    href: "/mantenimiento-paneles-solares",
    cta: "Conocer servicio",
  },
  {
    index: "03",
    title: "Tr\u00e1mite CFE e interconexi\u00f3n",
    audience:
      "Clientes que necesitan ordenar documentaci\u00f3n y avanzar con la interconexi\u00f3n.",
    solution:
      "Integraci\u00f3n documental, revisi\u00f3n t\u00e9cnica y seguimiento del proceso con CFE.",
    href: "/tramites-cfe-paneles-solares",
    cta: "Conocer servicio",
  },
  {
    index: "04",
    title: "Sistemas comerciales e industriales",
    audience:
      "Negocios, oficinas, naves y operaciones con consumo energ\u00e9tico m\u00e1s amplio.",
    solution:
      "Revisi\u00f3n de carga, planteamiento t\u00e9cnico del sistema y planeaci\u00f3n de instalaci\u00f3n.",
    href: "/paneles-solares-comerciales",
    cta: "Conocer servicio",
  },
  {
    index: "05",
    title: "Bombeo solar",
    audience:
      "Ranchos, pozos y operaci\u00f3n agr\u00edcola que requieren energ\u00eda \u00fatil para bombeo.",
    solution:
      "Diagn\u00f3stico del punto de trabajo, demanda estimada y propuesta solar para operaci\u00f3n rural.",
    href: "/bombeo-solar",
    cta: "Conocer servicio",
  },
] as const;

const serviceOverview = [
  {
    title: "Instalamos",
    description:
      "Sistemas solares nuevos para hogares, negocios e industria.",
    icon: CheckCircle2,
  },
  {
    title: "Revisamos",
    description:
      "Diagn\u00f3stico de rendimiento, condiciones del sitio y consumo.",
    icon: Search,
  },
  {
    title: "Mantenemos",
    description: "Limpieza, revisi\u00f3n y seguimiento posterior.",
    icon: Wrench,
  },
] as const;

const serviceProcess = [
  { index: "01", title: "Revisi\u00f3n del recibo CFE" },
  { index: "02", title: "Diagn\u00f3stico del sitio" },
  { index: "03", title: "Dise\u00f1o del sistema" },
  { index: "04", title: "Instalaci\u00f3n y pruebas" },
  { index: "05", title: "Puesta en marcha y seguimiento" },
] as const;

const servicesFaqs = [
  {
    question: "\u00bfInstalan fuera de Torre\u00f3n?",
    answer:
      "S\u00ed. Torre\u00f3n y La Laguna son zonas principales, pero Enerza tambi\u00e9n atiende Monterrey, Nuevo Le\u00f3n y proyectos regionales en el norte de M\u00e9xico seg\u00fan el caso.",
  },
  {
    question: "\u00bfTrabajan en Monterrey?",
    answer:
      "S\u00ed. Enerza atiende proyectos en Monterrey y Nuevo Le\u00f3n, adem\u00e1s de sus zonas principales en La Laguna.",
  },
  {
    question: "\u00bfPueden revisar un sistema que no instalaron?",
    answer:
      "S\u00ed. Enerza puede revisar instalaciones existentes, diagnosticar fallas y proponer mantenimiento preventivo o correctivo aunque el sistema lo haya instalado otro proveedor.",
  },
  {
    question: "\u00bfQu\u00e9 necesito para cotizar?",
    answer:
      "Lo ideal es contar con tu recibo CFE m\u00e1s reciente, ciudad, tipo de inmueble y una idea general del servicio que necesitas.",
  },
] as const;

export const metadata = createMetadata({
  title: "Servicios solares para hogares, negocios e industria",
  description:
    "Enerza dise\u00f1a, instala, mantiene y acompa\u00f1a sistemas solares con tr\u00e1mite CFE y soporte posterior en La Laguna, Monterrey y el norte de M\u00e9xico.",
  path: "/servicios",
  keywords: [
    "instalaci\u00f3n de paneles solares",
    "mantenimiento de paneles solares",
    "tr\u00e1mite CFE paneles solares",
    "paneles solares Monterrey",
    "paneles solares La Laguna",
    "bombeo solar",
  ],
});

export default function ServiciosPage() {
  return (
    <>
      <SEOJsonLd data={getFaqJsonLd(servicesFaqs)} />
      <PageHero
        eyebrow="Servicios"
        title="Servicios solares para hogares, negocios e industria"
        description="Enerza dise\u00f1a, instala, mantiene y acompa\u00f1a sistemas solares con tr\u00e1mite CFE y soporte posterior en La Laguna, Monterrey y el norte de M\u00e9xico."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              {"Solicitar diagn\u00f3stico"}
            </CTAButton>
            <CTAButton href="/proyectos" variant="outline">
              Ver proyectos
            </CTAButton>
          </>
        }
      />

      <Container className="space-y-12 py-12 lg:space-y-14 lg:py-14">
        <section className="grid gap-4 md:grid-cols-3">
          {serviceOverview.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[24px] border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/12 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Servicios"
            title="Encuentra el servicio solar que necesitas"
            description="Elige si buscas instalar, revisar, mantener o gestionar tu interconexi\u00f3n con CFE."
          />
          <div className="grid gap-4">
            {servicesIndex.map((service) => (
              <article
                key={service.index}
                className="rounded-[28px] border border-border bg-card p-5 shadow-sm lg:p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[72px_1.1fr_1fr_1fr_auto] lg:items-start">
                  <div className="font-heading text-4xl font-semibold text-foreground/28">
                    {service.index}
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <p className="field-label text-muted-foreground">
                      {"Para qui\u00e9n es"}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {service.audience}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="field-label text-muted-foreground">
                      {"Qu\u00e9 resolvemos"}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {service.solution}
                    </p>
                  </div>

                  <div className="flex items-start lg:justify-end">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition hover:gap-3"
                    >
                      {service.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Proceso"
            title={"C\u00f3mo trabajamos tu proyecto"}
            description="Cada sistema se revisa antes, durante y despu\u00e9s de la instalaci\u00f3n."
          />
          <ProcessTimeline items={serviceProcess} />
          <p className="text-sm leading-7 text-muted-foreground">
            {"Tambi\u00e9n podemos revisar sistemas ya instalados para mantenimiento o diagn\u00f3stico."}
          </p>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={"Dudas habituales antes de solicitar diagn\u00f3stico"}
            description="Cobertura, Monterrey, revisi\u00f3n de sistemas existentes y requisitos para cotizar en una lectura r\u00e1pida."
          />
          <FAQAccordion items={servicesFaqs} />
        </section>

        <section className="rounded-[28px] border border-border bg-primary/10 p-7 lg:p-8">
          <p className="field-label text-primary">{"Cotizaci\u00f3n"}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-foreground">
            {"\u00bfListo para revisar tu proyecto solar?"}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            {"Comp\u00e1rtenos tu ciudad, tipo de inmueble y recibo CFE aproximado. Te orientamos por WhatsApp."}
          </p>
          <div className="mt-6">
            <CTAButton href="/cotizar" showArrow>
              Cotizar por WhatsApp
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
