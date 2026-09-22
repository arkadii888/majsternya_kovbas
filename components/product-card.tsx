import Link from "next/link";
import { ChevronRight, ImageOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/config/products";
import { cn } from "@/lib/utils";

const BADGE_CLASSES: Record<string, string> = {
  Новинка: "bg-emerald-600 text-white",
  Знижка: "bg-red-600 text-white",
};

export default function ProductCard({ item }: { item: Product }) {
  return (
    <Link
      href={`/products/${item.id}`}
      className="group block h-full outline-none"
    >
      <Card className="relative flex h-full flex-col transition-all hover:border-primary group-focus-visible:border-primary pt-0">
        <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10" />

        <div className="relative z-10 flex aspect-[16/9] w-full items-center justify-center border-b bg-muted">
          <ImageOff className="size-8 text-muted-foreground" aria-hidden />
          {(item.badges ?? []).length > 0 && (
            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
              {(item.badges ?? []).map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className={cn("h-auto py-1 text-white", BADGE_CLASSES[badge] ?? "bg-black")}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <CardContent className="relative z-10 flex flex-1 flex-col gap-2">
          <CardTitle className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {item.name}
          </CardTitle>
          {item.description && (
            <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
          )}
          <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-medium transition-colors group-hover:text-primary">
            Детальніше
            <ChevronRight className="size-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
