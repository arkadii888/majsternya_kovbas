import data from "./popular-categories.json";
import { catalogCategories } from "@/lib/catalog-categories";

export type PopularCategory = {
  href: string;
  label: string;
};

export const popularCategories: PopularCategory[] = data.selectedHrefs.map(
  (href) => {
    const category = catalogCategories.find((item) => item.href === href)!;
    return {
      href: category.href,
      label: category.label,
    };
  },
);
