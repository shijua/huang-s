import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-11 w-full border border-line bg-ivory px-3 py-2 text-[15px] text-ink placeholder:text-ink-soft focus-visible:outline-none focus-visible:border-brand-burgundy focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
