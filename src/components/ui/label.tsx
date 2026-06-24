import * as React from "react";
import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("field-label text-foreground", className)}
      {...props}
    />
  );
}

export { Label };
