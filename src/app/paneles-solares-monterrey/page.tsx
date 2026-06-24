import { CityLandingTemplate } from "@/components/pages/city-landing-template";
import { cityPages } from "@/data/service-pages";
import {
  featuredProjects,
  monterreyFeaturedProject,
  projects,
} from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

const content = cityPages.monterrey;
const regionalSupportProjects = [
  ...featuredProjects.filter((project) => project.id !== "monterrey-proyecto-reciente"),
  ...projects.filter(
    (project) =>
      project.id !== "monterrey-proyecto-reciente" && !project.featured,
  ),
].slice(0, 3);

const monterreyFaq = [
  {
    question: "Enerza TRC tiene proyectos en Monterrey?",
    answer:
      "Si. Enerza TRC ya cuenta con un proyecto reciente en Monterrey como referencia de atencion activa en Nuevo Leon.",
  },
  {
    question: "Atienden la zona metropolitana?",
    answer:
      "Si. La cobertura incluye Monterrey y municipios de la zona metropolitana, segun alcance tecnico y operativo del proyecto.",
  },
  {
    question: "Tienen oficina fisica en Monterrey?",
    answer:
      "Enerza TRC atiende proyectos en Monterrey y Nuevo Leon, pero no afirma oficina fisica si ese dato no esta confirmado.",
  },
  {
    question: "Pueden cotizar proyectos comerciales e industriales en Nuevo Leon?",
    answer:
      "Si. Enerza TRC atiende hogares, negocios e industria con enfoque tecnico y propuesta ajustada al consumo real.",
  },
];

export const metadata = createMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  keywords: content.keywords,
});

export default function PanelesSolaresMonterreyPage() {
  return (
    <CityLandingTemplate
      title={content.title}
      description={content.metaDescription}
      intro={content.intro}
      localFocus={content.localFocus}
      faq={monterreyFaq}
      projects={regionalSupportProjects}
      featuredProject={monterreyFeaturedProject}
    />
  );
}
