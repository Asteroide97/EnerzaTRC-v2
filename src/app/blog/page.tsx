import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { PageHero } from "@/components/pages/page-hero";
import { BlogCard } from "@/components/pages/blog-card";
import { blogPosts } from "@/data/blog-posts";

export const metadata = createMetadata({
  title: "Blog",
  description: "Articulos informativos sobre paneles solares, mantenimiento y tramite CFE.",
  path: "/blog",
  noIndex: true,
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Articulos sobre paneles solares"
        description="Informacion sobre instalacion, mantenimiento, CFE y criterios para cotizar un sistema solar."
      />
      <Container className="space-y-12 py-16 lg:py-20">
        <SectionHeading
          eyebrow="Articulos"
          title="Contenido informativo"
          description="Lecturas utiles para entender mejor un proyecto solar."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
