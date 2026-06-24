"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { CTAButton } from "@/components/common/cta-button";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/layout/site-logo";
import { navLinks } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

export function MobileNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden" aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex min-h-screen flex-col bg-background px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <SiteLogo />
              <div className="field-label text-muted-foreground">Cobertura regional</div>
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Cerrar menu">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="section-rule mt-8 pt-6">
            <p className="field-label text-primary">Atención</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
              Torreón, La Laguna, Monterrey y proyectos en el norte de México.
            </p>
          </div>

          <nav className="mt-8 flex flex-1 flex-col">
            {navLinks.map((link, index) => (
              <Dialog.Close key={link.href} asChild>
                <Link
                  href={link.href}
                  className="section-rule flex items-center justify-between py-4 text-lg text-foreground"
                >
                  <span>{link.label}</span>
                  <span className="field-label text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div className="section-rule mt-auto grid gap-4 pt-6">
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp
            </a>
            <Dialog.Close asChild>
              <CTAButton href="/cotizar" className="w-full justify-between" showArrow>
                Cotizar
              </CTAButton>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
