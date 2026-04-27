"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { MicrostoreItem } from "@/lib/microstore";
import { cn } from "@/lib/utils";

interface MicrostoreGridProps {
  items: MicrostoreItem[];
  closeLabel: string;
  className?: string;
  priorityCount?: number;
}

export function MicrostoreGrid({
  items,
  closeLabel,
  className,
  priorityCount = 0,
}: MicrostoreGridProps) {
  const [active, setActive] = useState<MicrostoreItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-12",
          className
        )}
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item)}
            className="group block text-left cursor-pointer"
            aria-label={`${item.name} ${item.sku} — preview`}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-line-soft">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={i < priorityCount}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[14px] font-medium tracking-[0.04em] uppercase text-ink truncate">
                  {item.name}
                </h3>
                {item.sku && (
                  <p className="font-mono-sku text-ink-soft mt-1">{item.sku}</p>
                )}
              </div>
              {item.price && (
                <span className="shrink-0 text-[14px] font-medium text-brand-burgundy tabular-nums">
                  €{item.price}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {active && (
        <PreviewModal
          item={active}
          closeLabel={closeLabel}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

function PreviewModal({
  item,
  closeLabel,
  onClose,
}: {
  item: MicrostoreItem;
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 backdrop-blur-sm p-6 ms-fade-in cursor-zoom-out"
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label={closeLabel}
        className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-canvas/90 text-ink hover:text-brand-burgundy active:scale-95 transition cursor-pointer shadow-lg"
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.name}
        onClick={(e) => e.stopPropagation()}
        className="block max-w-[94vw] max-h-[94vh] object-contain shadow-2xl cursor-default"
      />
    </div>
  );
}
