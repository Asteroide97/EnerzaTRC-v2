import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cut-corner inline-flex items-center justify-center gap-2 whitespace-nowrap border text-sm font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground hover:bg-primary/92",
        secondary:
          "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/92",
        outline:
          "border-border bg-transparent text-foreground hover:bg-foreground/[0.03]",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-foreground/[0.05]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[0.72rem]",
        lg: "h-12 px-6 text-sm",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
