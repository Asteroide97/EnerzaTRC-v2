import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Badge({
  className,
  children,
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
