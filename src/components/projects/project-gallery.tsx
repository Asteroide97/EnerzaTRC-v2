import Image from "next/image";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  images: Project["gallery"];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const isSingleImage = images.length === 1;

  return (
    <div className={cn("grid gap-4", isSingleImage ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-3")}>
      {images.map((image) => (
        <div
          key={image.src}
          className={cn(
            "relative overflow-hidden border border-foreground/12 bg-card",
            isSingleImage ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes={
              isSingleImage
                ? "(max-width: 1024px) 100vw, 72vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
        </div>
      ))}
    </div>
  );
}
