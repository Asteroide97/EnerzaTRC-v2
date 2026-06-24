import Link from "next/link";
import { MapPinned, PhoneCall } from "lucide-react";
import { businessConfig } from "@/config/business";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { CTAButton } from "@/components/common/cta-button";
import { PageHero } from "@/components/pages/page-hero";
import { getWhatsAppHref } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Canales de contacto y atencion inicial para proyectos solares con cobertura principal en La Laguna y servicio activo en Monterrey y Nuevo Leon.",
  path: "/contacto",
  keywords: ["contacto paneles solares", "cotizar paneles solares", "Enerza TRC contacto"],
});

const contactRows = [
  {
    title: "Cobertura regional",
    detail:
      "Torreon y La Laguna como zonas principales, Monterrey y Nuevo Leon como servicio activo, y proyectos regionales en el norte de Mexico.",
    icon: MapPinned,
    href: "/zonas-de-atencion",
  },
  {
    title: "Telefono / WhatsApp",
    detail: businessConfig.phone,
    icon: PhoneCall,
    href: getWhatsAppHref(),
    external: true,
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Habla con Enerza TRC"
        description="Contactanos por WhatsApp o revisa nuestra cobertura de atencion."
        actions={
          <>
            <CTAButton href="/cotizar" showArrow>
              Ir a cotizar
            </CTAButton>
            <CTAButton href={getWhatsAppHref()} external variant="outline">
              WhatsApp
            </CTAButton>
          </>
        }
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contacto directo"
            title="WhatsApp y cobertura regional"
            description="Si ya tienes recibo CFE, ciudad y tipo de servicio, tambien puedes enviar tu solicitud completa desde cotizacion."
          />
          <div className="grid gap-4 border-y border-foreground/12 py-6">
            {contactRows.map((row) => {
              const Icon = row.icon;
              const content = (
                <>
                  <Icon className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-xl font-semibold">{row.title}</h2>
                  <p className="text-sm leading-7 text-muted-foreground">{row.detail}</p>
                </>
              );

              return row.external ? (
                <a
                  key={row.title}
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-4 border-b border-foreground/12 pb-5 last:border-b-0 last:pb-0 lg:grid-cols-[28px_220px_1fr]"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={row.title}
                  href={row.href}
                  className="grid gap-4 border-b border-foreground/12 pb-5 last:border-b-0 last:pb-0 lg:grid-cols-[28px_220px_1fr]"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="cut-corner border border-foreground/12 bg-primary/10 p-8">
          <p className="field-label text-primary">Cotizacion</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
            Completa tu solicitud para revisar tu proyecto.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            Comparte ciudad, tipo de inmueble, recibo CFE aproximado y el servicio
            que necesitas para orientarte mejor.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" showArrow>
              Abrir cotizacion
            </CTAButton>
            <CTAButton href={getWhatsAppHref()} external variant="outline">
              WhatsApp
            </CTAButton>
          </div>
        </section>
      </Container>
    </>
  );
}
