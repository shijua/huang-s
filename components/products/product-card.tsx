import Image from "next/image";
import { Link } from "@/lib/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { ProductName } from "@/components/products/product-name";
import { formatSku } from "@/lib/utils";
import type { Product } from "@/lib/products";
import type { Locale } from "@/lib/i18n/config";

interface ProductCardProps {
  product: Product;
  locale: Locale;
  priority?: boolean;
}

export function ProductCard({ product, locale, priority }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block h-full overflow-hidden border border-line bg-ivory transition-[border-color,box-shadow] duration-200 ease-out hover:border-ink-soft hover:shadow-[0_4px_20px_rgba(58,24,16,0.08)]"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-line-soft">
        <Image
          src={product.images[0]}
          alt={product.name[locale]}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {product.isNew && (
          <Badge variant="new" className="absolute right-3 top-3">
            New
          </Badge>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-1 min-[520px]:flex-row min-[520px]:items-baseline min-[520px]:justify-between min-[520px]:gap-3">
          <h3 className="font-serif text-[18px] leading-tight text-ink group-hover:text-brand-burgundy transition-colors">
            <ProductName name={product.name[locale]} />
          </h3>
          <span className="font-mono-sku text-ink-soft shrink-0">
            {formatSku(product.sku)}
          </span>
        </div>
        <p className="mt-3 inline-flex bg-brand-beige px-2 py-[3px] text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
          {product.category}
        </p>
      </div>
    </Link>
  );
}
