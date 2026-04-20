import { cn } from "@/lib/utils";
import { Wordmark } from "./wordmark";

interface LogoProps {
  className?: string;
  variant?: "burgundy" | "beige" | "charcoal" | "ivory";
  withTagline?: boolean;
}

export function Logo({
  className,
  variant = "burgundy",
  withTagline = false,
}: LogoProps) {
  return (
    <div className={cn("inline-flex flex-col gap-1", className)}>
      <Wordmark variant={variant} />
      {withTagline && (
        <span className="text-overline text-ink-soft">
          Lua Cintilante &middot; Est. 2021
        </span>
      )}
    </div>
  );
}
