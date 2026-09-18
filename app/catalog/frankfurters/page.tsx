import { catalogCategories } from "@/lib/catalog-categories";
import { SubcategorySection } from "@/components/catalog-subcategory-section";

const category = catalogCategories.find((c) => c.href === "/catalog/frankfurters")!;

export const metadata = {
  title: `${category.label} | Майстерня Ковбас`,
  description: category.description,
};

export default function SosiskyTaSardelkyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Сосиски та сардельки</h1>
        <p className="text-muted-foreground text-lg">Сосиски та сардельки різних видів — від щоденних до святкових.</p>
      </div>
      <SubcategorySection parentId="/catalog/frankfurters" />
    </div>
  );
}
