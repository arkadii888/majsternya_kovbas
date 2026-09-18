import { catalogCategories } from "@/lib/catalog-categories";
import { CategoryListingPage } from "@/components/category-listing-page";

const category = catalogCategories.find((c) => c.href === "/catalog/sauces-and-seasonings")!;

export const metadata = {
  title: `${category.label} | Майстерня Ковбас`,
  description: category.description,
};

export default function SousyTaPrypravyPage() {
  return <CategoryListingPage href="/catalog/sauces-and-seasonings" />;
}
