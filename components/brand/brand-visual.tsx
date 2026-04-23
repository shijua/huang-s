import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandVisualVariant = "hero" | "story" | "wide" | "contact";

interface BrandVisualProps {
  className?: string;
  priority?: boolean;
  variant?: BrandVisualVariant;
}

interface VariantConfig {
  src: string;
  alt: string;
  objectPosition: string;
  frameClass: string;
  sizes: string;
}

const VARIANTS: Record<BrandVisualVariant, VariantConfig> = {
  hero: {
    src: "/brand/visual-landscape-olive-rail.webp",
    alt: "HUANG'S showroom rails inside the warehouse",
    objectPosition: "50% 55%",
    frameClass: "aspect-[4/5]",
    sizes: "(max-width: 768px) 100vw, 45vw",
  },
  story: {
    src: "/brand/visual-landscape-jeans.webp",
    alt: "HUANG'S stockroom — denim jeans laid out on mesh bins along the warehouse aisle",
    objectPosition: "50% 50%",
    frameClass: "aspect-[4/5]",
    sizes: "(max-width: 768px) 100vw, 45vw",
  },
  wide: {
    src: "/brand/visual-landscape-storefront.webp?v=2",
    alt: "HUANG'S — Lua Cintilante Unipessoal Lda warehouse exterior in Portugal",
    objectPosition: "50% 70%",
    frameClass: "aspect-[42/23] min-h-[280px]",
    sizes: "(max-width: 1280px) 100vw, 1200px",
  },
  contact: {
    src: "/brand/visual-landscape-shelves.webp",
    alt: "HUANG'S stockroom — shelves of folded seasonal tops and HUANG'S branded storage bins",
    objectPosition: "50% 50%",
    frameClass: "aspect-[3/2] lg:self-start",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
};

export function BrandVisual({
  className,
  priority = false,
  variant = "story",
}: BrandVisualProps) {
  const { src, alt, objectPosition, frameClass, sizes } = VARIANTS[variant];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-ivory",
        frameClass,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition }}
        className="object-cover"
      />
    </div>
  );
}
