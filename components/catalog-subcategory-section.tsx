"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { catalogSubcategories, type CatalogSubcategory } from "@/lib/catalog-subcategories";

export function SubcategorySection({ parentId }: { parentId: string }) {
  const pathname = usePathname();
  const items = catalogSubcategories.filter((s) => s.parentHref === parentId);

  if (items.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      className={[
        "group flex flex-col gap-1 rounded-xl border p-5 transition-colors",
        isActive
          ? "border-foreground/40 bg-accent/50"
          : "bg-card hover:border-foreground/30 hover:bg-accent/50",
      ].join(" ")}
    >
      <h3 className="font-semibold group-hover:underline">{item.label}</h3>
      {item.description && (
        <p className="text-sm text-muted-foreground">{item.description}</p>
      )}
    </Link>
  );
}
