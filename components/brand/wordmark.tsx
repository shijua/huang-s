import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  variant?: "burgundy" | "beige" | "charcoal" | "ivory";
}

const colorMap: Record<NonNullable<WordmarkProps["variant"]>, string> = {
  burgundy: "text-brand-burgundy",
  beige: "text-brand-beige",
  charcoal: "text-brand-charcoal",
  ivory: "text-ivory",
};

export function Wordmark({ className, variant = "burgundy" }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-serif text-[22px] tracking-[0.22em] font-normal leading-none uppercase",
        colorMap[variant],
        className
      )}
    >
      HUANG&rsquo;S
    </span>
  );
}
