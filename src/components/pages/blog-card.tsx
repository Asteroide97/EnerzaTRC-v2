import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="project-plate cut-corner h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="flex flex-wrap items-center gap-3 border-b border-foreground/12 pb-4">
        <span className="field-label text-primary">Blog</span>
        <span className="field-label text-muted-foreground">{post.readTime}</span>
        <span className="field-label text-muted-foreground">
          {new Date(post.publishedAt).getFullYear()}
        </span>
      </div>
      <div className="space-y-5 pt-5">
        <div className="space-y-3">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            {post.title}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            {post.description}
          </p>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition hover:gap-3"
        >
          Leer artículo
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
