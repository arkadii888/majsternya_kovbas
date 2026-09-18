import { catalogCategories } from "@/lib/catalog-categories";
import { CategoryListingPage } from "@/components/category-listing-page";

const category = catalogCategories.find((c) => c.href === "/catalog/meat-poultry")!;

export const metadata = {
  title: `${category.label} | Майстерня Ковбас`,
  description: category.description,
};

export default function MyasoTaPtytsyaPage() {
  return <CategoryListingPage href="/catalog/meat-poultry" />;
}
