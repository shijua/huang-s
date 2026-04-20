"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-line-soft">
        <Image
          src={images[active]}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative aspect-[4/5] overflow-hidden border-2 transition-colors",
                i === active ? "border-brand-burgundy" : "border-transparent"
              )}
              aria-label={`Image ${i + 1}`}
              aria-pressed={i === active}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
