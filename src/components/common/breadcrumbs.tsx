import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { businessConfig } from "@/config/business";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { SEOJsonLd } from "@/components/common/seo-json-ld";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    item: new URL(item.href, businessConfig.domain).toString(),
  }));

  return (
    <>
      <SEOJsonLd data={getBreadcrumbJsonLd(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index < items.length - 1 ? (
                <Link href={item.href} className="transition hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
