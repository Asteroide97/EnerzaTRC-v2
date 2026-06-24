import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = ButtonProps & {
  href: string;
  showArrow?: boolean;
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  showArrow = false,
  external = false,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <Button
      asChild
      className={cn("justify-between", className)}
      {...props}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
          {showArrow ? <ArrowRight className="h-4 w-4" /> : null}
        </a>
      ) : (
        <Link href={href}>
          {children}
          {showArrow ? <ArrowRight className="h-4 w-4" /> : null}
        </Link>
      )}
    </Button>
  );
}
