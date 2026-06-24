import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { getFaqJsonLd } from "@/lib/json-ld";
import { verifiedCurrentSiteContent } from "@/data/site-content";

type ServiceIndexItem = {
  index: string;
  title: string;
  audience: string;
  includes: string;
  href: string;
  cta: string;
  extraLinks?: Array<{
    href: string;
    label: string;
  }>;
};

export const metadata = createMetadata({
  title: "Servicios solares para hogares, negocios e industria",
  description:
    "Enerza TRC disena, instala, mantiene y acompana sistemas solares con enfoque tecnico, tramite CFE y soporte postventa en La Laguna, Monterrey y el norte de Mexico.",
  path: "/servicios",
  keywords: [
    "instalacion de paneles solares",
    "mantenimiento de paneles solares",
    "tramite CFE paneles solares",
    "paneles solares Monterrey",
    "paneles solares La Laguna",
    "bombeo solar",
  ],
});

const servicesIndex: ServiceIndexItem[] = [
  {
    index: "01",
    title: "Instalacion de paneles solares",
    audience:
      "Hogares e inmuebles con consumo constante que buscan una instalacion nueva con lectura real de consumo.",
    includes:
      "Revision de consumo, dimensionamiento inicial, planteamiento tecnico del sistema e instalacion profesional.",
    href: "/paneles-solares-residenciales",
    cta: "Conocer servicio",
    extraLinks: [
      { href: "/paneles-solares-comerciales", label: "Comercial" },
      { href: "/paneles-solares-industriales", label: "Industrial" },
    ],
  },
  {
    index: "02",
    title: "Mantenimiento de sistemas solares",
    audience:
      "Usuarios con sistemas instalados, operaciones con baja aparente de rendimiento o inmuebles que necesitan revision periodica.",
    includes:
      "Limpieza, revision visual, diagnostico, revision de inversores y tableros, y propuesta preventiva o correctiva.",
    href: "/mantenimiento-paneles-solares",
    cta: "Conocer servicio",
  },
  {
    index: "03",
    title: "Tramite CFE e interconexion",
    audience:
      "Clientes que necesitan ordenar documentacion, interconexion o seguimiento tecnico del proceso con CFE.",
    includes:
      "Acompanamiento documental, integracion de informacion del proyecto y seguimiento del proceso.",
    href: "/tramites-cfe-paneles-solares",
    cta: "Conocer servicio",
  },
  {
    index: "04",
    title: "Sistemas comerciales e industriales",
    audience:
      "Negocios, locales, oficinas, naves y operaciones con consumo energetico mas amplio.",
    includes:
      "Revision de carga, propuesta tecnica segun operacion y planeacion de instalacion.",
    href: "/paneles-solares-comerciales",
    cta: "Conocer servicio",
    extraLinks: [{ href: "/paneles-solares-industriales", label: "Industrial" }],
  },
  {
    index: "05",
    title: "Bombeo solar",
    audience:
      "Ranchos, pozos, agricultura y operaciones rurales que requieren energia util para su funcionamiento.",
    includes:
      "Diagnostico del punto de trabajo, evaluacion de demanda y planteamiento de solucion solar para bombeo.",
    href: "/bombeo-solar",
    cta: "Conocer servicio",
  },
];

const servicesFaqs = [
  {
    question: "Instalan fuera de Torreon?",
    answer:
      "Si. Torreon y La Laguna son zonas principales, pero Enerza TRC tambien atiende Monterrey, Nuevo Leon y proyectos regionales en el norte de Mexico segun el caso.",
  },
  {
    question: "Trabajan en Monterrey?",
    answer:
      "Si. Enerza TRC atiende proyectos en Monterrey y Nuevo Leon, ademas de sus zonas principales en La Laguna.",
  },
  {
    question: "Pueden revisar un sistema que no instalaron?",
    answer:
      "Si. Enerza TRC puede revisar instalaciones existentes, diagnosticar fallas y proponer mantenimiento preventivo o correctivo aunque el sistema lo haya instalado otro proveedor.",
  },
  {
    question: "Ayudan con el tramite CFE?",
    answer:
      "Si. El acompanamiento contempla la parte documental y tecnica para que el proceso de interconexion avance con claridad.",
  },
  {
    question: "Que necesito para cotizar?",
    answer:
      "Lo ideal es contar con tu recibo CFE mas reciente, ciudad, tipo de inmueble y una idea general del servicio que necesitas.",
  },
  {
    question: "Atienden proyectos comerciales o industriales?",
    answer:
      "Si. Enerza TRC atiende hogares, negocios, industria y operacion agricola con enfoque tecnico y cobertura regional.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <SEOJsonLd data={getFaqJsonLd(servicesFaqs)} />
      <PageHero
        eyebrow="Servicios"
        title="Servicios solares para hogares, negocios e industria"
        description="Enerza TRC disena, instala, mantiene y acompana sistemas solares con enfoque tecnico, tramite CFE y soporte postventa en La Laguna, Monterrey y el norte de Mexico."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Solicitar diagnostico
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
            eyebrow="Servicios"
            title="Identifica rapido el servicio que aplica a tu proyecto"
            description="Cada opcion te ayuda a avanzar con mas claridad hacia tu cotizacion."
          />
          <div className="grid gap-2">
            {servicesIndex.map((service) => (
              <article
                key={service.index}
                className="section-rule grid gap-5 py-6 xl:grid-cols-[90px_250px_1fr_1fr_210px]"
              >
                <div className="font-heading text-4xl font-semibold text-foreground/30">
                  {service.index}
                </div>

                <div className="space-y-3">
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <p className="field-label text-muted-foreground">Servicio solar</p>
                </div>

                <div className="space-y-3">
                  <p className="field-label text-muted-foreground">Para quien aplica</p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {service.audience}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="field-label text-muted-foreground">Que incluye</p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {service.includes}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 xl:items-end">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition hover:gap-3"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {service.extraLinks?.length ? (
                    <div className="flex flex-wrap gap-3 xl:justify-end">
                      {service.extraLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="field-label text-muted-foreground transition hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Instalacion profesional"
            title={verifiedCurrentSiteContent.installationQuality.title}
            description={verifiedCurrentSiteContent.installationQuality.description}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verifiedCurrentSiteContent.installationQuality.points.map((item, index) => (
              <article key={item} className="project-plate cut-corner p-6">
                <p className="field-label text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Como trabajamos"
            title="De la revision de consumo al seguimiento posterior"
            description="Cada etapa del proyecto se revisa con enfoque tecnico antes de instalar."
          />
          <ProcessTimeline detailed />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Dudas habituales antes de solicitar diagnostico"
            description="Cobertura, Monterrey, mantenimiento, CFE y tipos de proyecto en una lectura rapida."
          />
          <FAQAccordion items={servicesFaqs} />
        </section>

        <section className="cut-corner border border-foreground/12 bg-primary/10 p-8">
          <p className="field-label text-primary">Cotizacion</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
            Si ya identificaste el servicio, solicita tu diagnostico.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            Comparte ciudad, tipo de inmueble, recibo CFE aproximado y el objetivo
            del proyecto para orientar la propuesta inicial.
          </p>
          <div className="mt-6">
            <CTAButton href="/cotizar" showArrow>
              Solicitar diagnostico
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
