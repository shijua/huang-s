import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-burgundy disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-burgundy text-ivory hover:bg-[#2d1108] active:bg-[#1e0b05]",
        secondary:
          "border border-brand-burgundy bg-transparent text-brand-burgundy hover:bg-brand-burgundy hover:text-ivory active:border-[#2a100a] active:bg-[#2a100a] active:text-ivory",
        ghost:
          "bg-transparent text-ink hover:bg-brand-beige/60 border border-line",
        link:
          "bg-transparent text-brand-burgundy underline-offset-[6px] hover:underline px-0 h-auto tracking-normal normal-case",
        inverse:
          "bg-ivory text-brand-burgundy hover:bg-brand-beige",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
