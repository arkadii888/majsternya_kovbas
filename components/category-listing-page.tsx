import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { catalogCategories } from "@/lib/catalog-categories";
import { getProductsBySubcategory } from "@/config/products";
import { SubcategorySection } from "@/components/catalog-subcategory-section";
import { ProductsListingClient } from "@/components/products-listing-client";

export function CategoryListingPage({ href }: { href: string }) {
  const category = catalogCategories.find((c) => c.href === href)!;
  const parentSlug = category.href.replace("/catalog/", "");
  const items = getProductsBySubcategory(parentSlug);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-3">
        <Link
          href="/catalog"
          className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          До каталогу
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {category.label}
          </h1>
        </div>
      </div>
      <SubcategorySection parentId={href} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">Товари</h2>
        <div className="mt-6">
          <ProductsListingClient
            products={items}
            emptyText={
              items.length === 0
                ? "Асортимент цього розділу оновлюється. Зателефонуйте нам — підкажемо, що є сьогодні."
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
