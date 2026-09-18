import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { catalogCategories } from "@/lib/catalog-categories";
import { SubcategorySection } from "@/components/catalog-subcategory-section";

export function CategoryListingPage({ href }: { href: string }) {
  const category = catalogCategories.find((c) => c.href === href)!;

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
          <p className="text-muted-foreground text-lg">
            {category.description}
          </p>
        </div>
      </div>
      <SubcategorySection parentId={href} />
    </div>
  );
}
