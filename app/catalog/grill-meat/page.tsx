import { catalogCategories } from "@/lib/catalog-categories";
import { SubcategorySection } from "@/components/catalog-subcategory-section";

const category = catalogCategories.find((c) => c.href === "/catalog/grill-meat")!;

export const metadata = {
  title: `${category.label} | Майстерня Ковбас`,
  description: category.description,
};

export default function DlyaHryluPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">М’ясо для грилю</h1>
        <p className="text-muted-foreground text-lg">Вироби, ідеальні для грилю та відкритого вогню.</p>
      </div>
      <SubcategorySection parentId="/catalog/grill-meat" />
    </div>
  );
}
