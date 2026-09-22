import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import {
  catalogSubcategories,
  getSubcategoryByHref,
} from "@/lib/catalog-subcategories";
import { catalogCategories } from "@/lib/catalog-categories";
import { getProductsBySubcategory } from "@/config/products";
import { ProductsListingClient } from "@/components/products-listing-client";

export function generateStaticParams() {
  return catalogSubcategories.map((s) => ({
    parent: s.parentHref.replace("/catalog/", ""),
    subcategory: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ parent: string; subcategory: string }> }) {
  const { parent, subcategory } = await params;
  const subcategoryHref = `/catalog/${parent}/${subcategory}`;
  const sub = getSubcategoryByHref(subcategoryHref);
  if (!sub) return {};
  const parentCategory = catalogCategories.find((c) => c.href === sub.parentHref);
  return {
    title: `${sub.label} | Майстерня Ковбас`,
    description: sub.description ?? `${sub.label} — ${parentCategory?.label ?? ""}.`,
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ parent: string; subcategory: string }>;
}) {
  const { parent, subcategory } = await params;
  const subcategoryHref = `/catalog/${parent}/${subcategory}`;
  const sub = getSubcategoryByHref(subcategoryHref);
  if (!sub) notFound();

  const parentCategory = catalogCategories.find((c) => c.href === sub.parentHref);
  const parentSlug = parentCategory?.href.replace("/catalog/", "");
  const items = getProductsBySubcategory(parentSlug, subcategory);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-3">
        <Link
          href={sub.parentHref}
          className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          До розділу «{parentCategory?.label}»
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{sub.label}</h1>
        </div>
      </div>

      <ProductsListingClient
        products={items}
        emptyText={
          items.length === 0
            ? "Асортимент цього розділу оновлюється. Зателефонуйте нам — підкажемо, що є сьогодні."
            : undefined
        }
      />
    </div>
  );
}
