import { CityLandingTemplate } from "@/components/pages/city-landing-template";
import { cityPages } from "@/data/service-pages";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

const content = cityPages.torreon;
const relatedProjects = projects.filter((project) =>
  project.relatedCities.some((city) =>
    ["Torreon", "La Laguna", "Gomez Palacio", "Lerdo", "San Pedro"].includes(city),
  ),
);

const torreonFaq = [
  {
    question: "Atienden solo Torreon?",
    answer:
      "No. La cobertura tambien contempla La Laguna en su conjunto, incluyendo Gomez Palacio, Lerdo, Matamoros y otras zonas cercanas.",
  },
  {
    question: "Enerza TRC tambien trabaja en Monterrey y Nuevo Leon?",
    answer:
      "Si. Ademas de Torreon y La Laguna, Enerza TRC tambien atiende Monterrey, Nuevo Leon y proyectos regionales en el norte de Mexico.",
  },
  {
    question: "El clima de La Laguna influye en el diseno?",
    answer:
      "Si. Las condiciones termicas, el polvo y los patrones de consumo cambian la forma en que debe plantearse un sistema solar y su mantenimiento.",
  },
  {
    question: "Pueden dar mantenimiento a un sistema ya instalado en la region?",
    answer:
      "Si. Enerza TRC puede revisar, diagnosticar y proponer mantenimiento preventivo o correctivo para sistemas existentes.",
  },
];

export const metadata = createMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  keywords: content.keywords,
});

export default function PanelesSolaresTorreonPage() {
  return (
    <CityLandingTemplate
      title={content.title}
      description={content.metaDescription}
      intro={content.intro}
      localFocus={content.localFocus}
      faq={torreonFaq}
      projects={relatedProjects}
    />
  );
}
