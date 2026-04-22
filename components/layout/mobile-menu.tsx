"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import { LocaleSwitcher } from "./locale-switcher";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  labels: {
    about: string;
    wholesale: string;
    contact: string;
    shop: string;
  };
}

export function MobileMenu({ labels }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center text-ink cursor-pointer active:scale-95 transition-transform"
      >
        {open ? (
          <X className="h-5 w-5" strokeWidth={1.5} />
        ) : (
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        )}
      </button>

      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 bg-canvas border-b border-line transition-all duration-200 ease-out",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav className="container-content flex flex-col py-8 gap-6 text-[15px] tracking-[0.12em] uppercase font-medium">
          <Link
            href="/about"
            className="text-ink hover:text-brand-burgundy transition-colors"
          >
            {labels.about}
          </Link>
          <Link
            href="/wholesale"
            className="text-ink hover:text-brand-burgundy transition-colors"
          >
            {labels.wholesale}
          </Link>
          <Link
            href="/contact"
            className="text-ink hover:text-brand-burgundy transition-colors"
          >
            {labels.contact}
          </Link>
          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-burgundy hover:text-brand-charcoal transition-colors"
          >
            {labels.shop}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>

          <div className="pt-6 border-t border-line">
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </div>
  );
}
