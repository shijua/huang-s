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
    <Link href={`/products/${product.slug}`} className="group block">
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
          <Badge variant="new" className="absolute top-3 left-3">
            New
          </Badge>
        )}
      </div>

      <div className="pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[18px] leading-tight text-ink group-hover:text-brand-burgundy transition-colors">
            <ProductName name={product.name[locale]} />
          </h3>
          <span className="font-mono-sku text-ink-soft">
            {formatSku(product.sku)}
          </span>
        </div>
        <p className="text-caption mt-1 capitalize">{product.category}</p>
      </div>
    </Link>
  );
}
