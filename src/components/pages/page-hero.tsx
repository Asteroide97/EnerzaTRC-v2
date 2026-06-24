import type { ReactNode } from "react";
import { Container } from "@/components/common/container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="border-b border-foreground/12 bg-background">
      <Container className="space-y-6 py-12 lg:py-14">
        <div className="space-y-3">
          <p className="field-label text-primary">{eyebrow || "Enerza TRC"}</p>
          <p className="field-label text-muted-foreground">Inicio / {title}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl space-y-4">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          </div>
          {actions ? (
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">{actions}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
