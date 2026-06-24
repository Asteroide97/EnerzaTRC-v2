"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { ChevronRight, Menu, MessageCircleMore, X } from "lucide-react";
import { CTAButton } from "@/components/common/cta-button";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/layout/site-logo";
import { navLinks } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type OptionsMenuProps = {
  className?: string;
};

export function OptionsMenu({ className }: OptionsMenuProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("gap-2 border-border/80 bg-white text-foreground", className)}
          aria-label="Abrir menu de opciones"
        >
          <Menu className="h-4 w-4" />
          Menú
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-secondary/45 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-background px-5 py-5 shadow-2xl">
          <Dialog.Title className="sr-only">Menú de opciones</Dialog.Title>
          <Dialog.Description className="sr-only">
            Accesos rapidos a cotizacion, WhatsApp, servicios, proyectos y rutas principales del sitio.
          </Dialog.Description>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <SiteLogo />
              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Torreon, La Laguna, Monterrey y norte de Mexico
              </div>
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Cerrar menu">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Dialog.Close asChild>
              <CTAButton href="/cotizar" className="w-full justify-between">
                Cotizar
              </CTAButton>
            </Dialog.Close>
            <Dialog.Close asChild>
              <CTAButton
                href={getWhatsAppHref()}
                external
                variant="outline"
                className="w-full justify-between"
              >
                WhatsApp
              </CTAButton>
            </Dialog.Close>
          </div>

          <div className="section-rule mt-6 pt-5">
            <p className="field-label text-primary">Accesos rapidos</p>
          </div>

          <nav className="mt-3 flex flex-1 flex-col">
            {navLinks.map((link) => (
              <Dialog.Close key={link.href} asChild>
                <Link
                  href={link.href}
                  className="section-rule flex items-center justify-between py-4 text-base font-medium text-foreground transition hover:text-primary"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div className="section-rule mt-6 space-y-3 pt-5 text-sm leading-7 text-muted-foreground">
            <p>
              Instalacion profesional, tramite CFE, panel de control y proyectos
              reales para hogares, negocios e industria.
            </p>
            <Dialog.Close asChild>
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-primary"
              >
                <MessageCircleMore className="h-4 w-4" />
                Abrir WhatsApp
              </a>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
