import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/pages/blog-post-template";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { createMetadata } from "@/lib/metadata";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Articulo no encontrado",
      description: "El articulo solicitado no esta disponible.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    noIndex: true,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}
