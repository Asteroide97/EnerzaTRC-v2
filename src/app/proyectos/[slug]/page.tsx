import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/container";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { ProjectDetail } from "@/components/projects/project-detail";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSeoLocation(project: { city: string; state: string; location: string }) {
  return [project.city, project.state].filter(Boolean).join(", ") || project.location;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Proyecto no encontrado",
      description: "El proyecto solicitado no está disponible.",
      path: `/proyectos/${slug}`,
      noIndex: true,
    });
  }

  const seoLocation = getSeoLocation(project);
  const keywords = [
    seoLocation ? `proyecto solar ${seoLocation}` : null,
    seoLocation ? `paneles solares ${seoLocation}` : null,
    project.serviceType,
    project.clientType,
  ].filter(Boolean) as string[];

  return createMetadata({
    title: `${project.title} | ${seoLocation || "Enerza TRC"}`,
    description: `${project.serviceType} para ${
      project.clientType
    } en ${project.location}. ${
      project.results
    } Caso de estudio de Enerza TRC con enfoque en consumo real y ejecución técnica.`,
    path: `/proyectos/${project.slug}`,
    keywords,
    image: project.coverImage,
  });
}

export default async function ProyectoDetallePage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  return (
    <Container className="py-16 lg:py-20">
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: `${project.serviceType} en ${project.location}. ${project.results}`,
          about: project.serviceType,
          locationCreated: project.location,
          image: [project.coverImage, ...project.gallery],
        }}
      />
      <ProjectDetail project={project} relatedProjects={relatedProjects} />
    </Container>
  );
}
