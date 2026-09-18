import { catalogCategories } from "@/lib/catalog-categories";
import { CategoryListingPage } from "@/components/category-listing-page";

const category = catalogCategories.find((c) => c.href === "/catalog/ready-eat-meals")!;

export const metadata = {
  title: `${category.label} | Майстерня Ковбас`,
  description: category.description,
};

export default function HotovyiStravyPage() {
  return <CategoryListingPage href="/catalog/ready-eat-meals" />;
}
