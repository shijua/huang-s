import { cn } from "@/lib/utils";

interface ProductNameProps {
  name: string;
  className?: string;
  numberClassName?: string;
}

export function ProductName({
  name,
  className,
  numberClassName,
}: ProductNameProps) {
  const match = name.match(/^(.*?)(\s+\d+)$/u);

  if (!match) {
    return <span className={className}>{name}</span>;
  }

  const [, label, number] = match;

  return (
    <span className={className}>
      {label}
      <span className={cn("product-name-number", numberClassName)}>
        {number}
      </span>
    </span>
  );
}
