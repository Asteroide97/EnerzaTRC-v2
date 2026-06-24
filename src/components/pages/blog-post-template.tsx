import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { Container } from "@/components/common/container";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { PageHero } from "@/components/pages/page-hero";
import type { BlogPost } from "@/data/blog-posts";
import { getFaqJsonLd } from "@/lib/json-ld";

type BlogPostTemplateProps = {
  post: BlogPost;
};

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  return (
    <>
      {post.faq?.length ? <SEOJsonLd data={getFaqJsonLd(post.faq)} /> : null}
      <PageHero
        eyebrow="Blog"
        title={post.title}
        description={post.description}
      />
      <Container className="space-y-12 py-16 lg:py-20">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />
        <article className="mx-auto max-w-4xl space-y-10">
          {post.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
        {post.faq?.length ? (
          <section className="mx-auto max-w-4xl space-y-8">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Preguntas frecuentes
            </h2>
            <FAQAccordion items={post.faq} />
          </section>
        ) : null}
      </Container>
    </>
  );
}
