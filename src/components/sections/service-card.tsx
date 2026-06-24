import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  index: string;
  applications: string;
};

export function ServiceCard({
  href,
  title,
  description,
  index,
  applications,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="section-rule group grid gap-4 py-6 transition-colors hover:bg-primary/6 lg:grid-cols-[120px_1fr_auto]"
    >
      <div className="font-heading text-4xl font-semibold text-foreground/30">
        {index}
      </div>
      <div className="space-y-3">
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          {description}
        </p>
        <p className="field-label text-muted-foreground">Aplicaciones: {applications}</p>
      </div>
      <div className="flex items-start justify-between gap-4 lg:justify-end">
        <span className="field-label text-primary">Ver servicio</span>
        <ArrowRight className="mt-1 h-4 w-4 text-primary transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
