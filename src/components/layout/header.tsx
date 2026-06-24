import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { Container } from "@/components/common/container";
import { CTAButton } from "@/components/common/cta-button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { OptionsMenu } from "@/components/layout/options-menu";
import { SiteLogo } from "@/components/layout/site-logo";
import { headerLinks } from "@/data/site-content";
import { getWhatsAppHref } from "@/lib/contact";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/92 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.6rem]">
        <SiteLogo />
        <nav className="hidden items-center gap-5 xl:flex">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <MessageCircleMore className="h-4 w-4" />
            WhatsApp
          </a>
          <CTAButton href="/cotizar" size="sm" showArrow>
            Cotizar
          </CTAButton>
          <OptionsMenu className="inline-flex" />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-sm font-semibold text-foreground shadow-sm"
          >
            <MessageCircleMore className="h-4 w-4 text-primary" />
            WhatsApp
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
