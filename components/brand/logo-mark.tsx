import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export function LogoMark({ className, size = 28 }: LogoMarkProps) {
  return (
    <img
      src="/brand/logo-mark.svg"
      alt=""
      aria-hidden
      width={(size * 70) / 150}
      height={size}
      className={cn("block shrink-0", className)}
    />
  );
}
