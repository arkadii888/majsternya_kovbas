"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { catalogSubcategories, type CatalogSubcategory } from "@/lib/catalog-subcategories";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SubcategorySection({ parentId }: { parentId: string }) {
  const pathname = usePathname();
  const items = catalogSubcategories.filter((s) => s.parentHref === parentId);

  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 auto-rows-fr lg:grid-cols-5">
      {items.map((item: CatalogSubcategory) => (
        <SubcategoryTile key={item.slug} item={item} pathname={pathname} />
      ))}
    </div>
  );
}

function SubcategoryTile({
  item,
  pathname,
}: {
  item: CatalogSubcategory;
  pathname: string;
}) {
  const isActive = pathname === item.href;
  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className="group block h-full outline-none"
    >
      <Card
        className={cn(
          "relative flex h-full min-h-[240px] flex-col bg-muted/10 transition-all group-focus-visible:border-primary",
          isActive ? "border-primary bg-primary/10" : "hover:border-primary"
        )}
      >
        <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10" />
        <CardHeader className="relative z-20 flex flex-col gap-1 p-5">
          <CardTitle
            className={cn(
              "text-xl font-bold tracking-tight transition-colors sm:text-2xl",
              isActive ? "text-primary" : "text-foreground group-hover:text-primary"
            )}
          >
            {item.label}
          </CardTitle>
          {item.description && (
            <CardDescription className="text-sm text-gray-400 sm:text-base">
              {item.description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
