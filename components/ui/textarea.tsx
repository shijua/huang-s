import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full border border-line bg-ivory px-3 py-2 text-[15px] text-ink placeholder:text-ink-soft focus-visible:outline-none focus-visible:border-brand-burgundy resize-y transition-colors",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
