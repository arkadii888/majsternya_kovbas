import Link from "next/link";
import { ChevronRight, ImageOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Product } from "@/config/products";

export default function ProductCard({ item }: { item: Product }) {
  return (
    <Link
      href={`/products/${item.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-foreground/25 bg-card transition-colors hover:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <div className="relative flex aspect-[16/9] w-full items-center justify-center border-b bg-muted">
        <ImageOff className="size-8 text-muted-foreground" aria-hidden />
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
            {item.badges.slice(0, 2).map((badge) => (
              <Badge key={badge} variant="secondary" className="bg-background/80 backdrop-blur">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-semibold">{item.name}</h3>
        {item.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        )}
        <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-medium">
          Детальніше
          <ChevronRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
