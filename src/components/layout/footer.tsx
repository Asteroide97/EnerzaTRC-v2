import Link from "next/link";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { SiteLogo } from "@/components/layout/site-logo";
import { homeServices, navLinks } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="h-px bg-primary" />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-16">
        <div className="space-y-6">
          <SiteLogo inverted />
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Instalación y mantenimiento de sistemas solares en Torreón, La Laguna,
            Monterrey y el norte de México.
          </p>
          <div className="section-rule max-w-xl pt-5">
            <p className="field-label text-primary">Cobertura</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Torreón y La Laguna son zonas principales. Monterrey y Nuevo León
              forman parte de la atención activa y de los proyectos regionales.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/cotizar" variant="default" showArrow>
              Cotizar
            </CTAButton>
            <CTAButton
              href={getWhatsAppHref()}
              external
              variant="outline"
              className="border-white/18 text-white hover:bg-white/5"
            >
              WhatsApp
            </CTAButton>
          </div>
        </div>

        <div className="space-y-5">
          <p className="field-label text-primary">Navegación</p>
          <ul className="space-y-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cotizar" className="transition hover:text-white">
                Cotizar
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="transition hover:text-white">
                Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/terminos-y-condiciones"
                className="transition hover:text-white"
              >
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div className="space-y-5">
            <p className="field-label text-primary">Servicios</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {homeServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="transition hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <p className="field-label text-primary">Zonas activas</p>
            <p className="text-sm leading-7 text-slate-400">
              Torreón, Gómez Palacio, La Laguna, Monterrey y Nuevo León.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
