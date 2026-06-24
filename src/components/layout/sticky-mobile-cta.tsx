import { MessageCircleMore, Send } from "lucide-react";
import { CTAButton } from "@/components/common/cta-button";
import { Container } from "@/components/common/container";
import { getWhatsAppHref } from "@/lib/contact";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-secondary/95 py-3 backdrop-blur md:hidden">
      <Container className="grid grid-cols-2 gap-3">
        <CTAButton
          href={getWhatsAppHref()}
          external
          variant="outline"
          className="w-full border-white/20 bg-white text-secondary hover:bg-white/92"
        >
          <MessageCircleMore className="h-4 w-4" />
          WhatsApp
        </CTAButton>
        <CTAButton href="/cotizar" className="w-full">
          <Send className="h-4 w-4" />
          Cotizar
        </CTAButton>
      </Container>
    </div>
  );
}
