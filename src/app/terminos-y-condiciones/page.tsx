import { Container } from "@/components/common/container";
import { PageHero } from "@/components/pages/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Términos y Condiciones | Enerza",
  description: "Consulta los términos y condiciones de uso del sitio y servicios de Enerza.",
  path: "/terminos-y-condiciones",
});

const sections = [
  {
    title: "1. Aceptación de los términos",
    body:
      "Al utilizar este sitio web y/o contratar los servicios de Enerza, usted acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le solicitamos no hacer uso de este sitio.",
  },
  {
    title: "2. Servicios",
    body:
      "Enerza ofrece servicios de consultoría, diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, así como gestión de trámites de interconexión. Los términos específicos de cada proyecto se establecerán en un contrato individual.",
  },
  {
    title: "3. Cotizaciones",
    body:
      "Las cotizaciones proporcionadas son estimaciones basadas en la información disponible al momento de su elaboración. Los precios finales pueden variar según las condiciones específicas del proyecto tras la visita técnica.",
  },
  {
    title: "4. Garantías",
    body:
      "Las garantías de los equipos (paneles, inversores, estructura) están sujetas a los términos del fabricante. La garantía de instalación cubre defectos en la mano de obra por el periodo especificado en el contrato de servicio.",
  },
  {
    title: "5. Trámites gubernamentales",
    body:
      "Enerza gestiona y facilita los trámites de interconexión; sin embargo, los tiempos de resolución dependen de las entidades gubernamentales correspondientes y están fuera de nuestro control directo.",
  },
  {
    title: "6. Propiedad intelectual",
    body:
      "Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y diseños, es propiedad de Enerza y está protegido por las leyes de propiedad intelectual aplicables.",
  },
  {
    title: "7. Contacto",
    body:
      "Para cualquier duda sobre estos términos, puede comunicarse al correo: enerzatrc@gmail.com o al teléfono: +52 871 143 0137.",
  },
];

export default function TerminosYCondicionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Términos y Condiciones"
        description="Última actualización: Febrero 2026"
      />
      <Container className="py-16 lg:py-20">
        <article className="cut-corner technical-grid mx-auto max-w-4xl space-y-10 border border-foreground/12 bg-card p-8 text-sm leading-7 text-muted-foreground lg:p-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                {section.title}
              </h2>
              <p>{section.body}</p>
            </section>
          ))}
        </article>
      </Container>
    </>
  );
}
