import { businessConfig, serviceTypes } from "@/config/business";

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function getLocalBusinessJsonLd() {
  const url = businessConfig.domain;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessConfig.businessName,
    url,
    description:
      "Instalación, mantenimiento, diseño, diagnóstico y trámite CFE para sistemas solares con zonas principales en Torreón y La Laguna, atención activa en Monterrey y Nuevo León, y proyectos regionales en el norte de México.",
    email: businessConfig.email || undefined,
    telephone: businessConfig.phone || undefined,
    address: businessConfig.address || undefined,
    areaServed: businessConfig.areasServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    serviceType: [...serviceTypes],
    sameAs: Object.values(businessConfig.socialLinks).filter(Boolean),
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function getFaqJsonLd(items: ReadonlyArray<FaqItem>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
