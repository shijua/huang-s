import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 text-[11px] tracking-[0.14em] uppercase font-medium px-2 py-[3px] border transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border-line text-ink-soft",
        new: "bg-brand-burgundy border-brand-burgundy text-ivory",
        sale: "bg-brand-beige border-brand-beige text-brand-burgundy",
        featured:
          "bg-brand-charcoal border-brand-charcoal text-ivory",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
