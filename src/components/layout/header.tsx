import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/layout/site-logo";
import { navLinks } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/12 bg-background/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <SiteLogo />
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <MessageCircleMore className="h-4 w-4" />
            WhatsApp
          </a>
          <CTAButton href="/cotizar" size="sm" showArrow>
            Cotizar
          </CTAButton>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
