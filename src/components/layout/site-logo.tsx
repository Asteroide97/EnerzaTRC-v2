import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  inverted?: boolean;
};

export function SiteLogo({ inverted = false }: SiteLogoProps) {
  if (inverted) {
    return (
      <Link href="/" className="inline-flex items-center" aria-label="Enerza TRC">
        <Image
          src="/images/brand/enerza-logo-oficial-transparente.png"
          alt="Enerza TRC"
          width={180}
          height={72}
          className="h-auto max-h-16 w-auto"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Enerza TRC">
      <Image
        src="/images/brand/enerza-icon-oficial-transparente.png"
        alt="Enerza TRC"
        width={42}
        height={42}
        priority
      />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-heading text-[1.55rem] font-semibold leading-none tracking-tight text-secondary",
          )}
        >
          Enerza
        </span>
        <span className="field-label text-accent">Sistemas solares</span>
      </span>
    </Link>
  );
}
