import data from "./products.json";
import { getStoreById, type Store } from "./stores";

export type ProductNutrition = {
  per?: string;
  calories?: string;
  protein?: string;
  fat?: string;
  carbs?: string;
};

export type Product = {
  id: string;
  name: string;
  category?: string;
  subcategory?: string;
  description?: string;
  photos?: string[];
  badges?: string[];
  ingredients?: string[];
  nutrition?: ProductNutrition;
  storage?: string;
  preparation?: string;
  storeIds?: string[];
  stores: Store[];
};

export const products: Product[] = data.products.map((product) => {
  const stores = (product.storeIds ?? [])
    .map((id) => getStoreById(id))
    .filter((store): store is Store => Boolean(store));
  return { ...product, stores };
});

export const productIds: string[] = data.products.map((product) => product.id);

export function getProductById(productId: string): Product | undefined {
  return products.find((product) => product.id === productId);
}

export function getProductsBySubcategory(
  category?: string,
  subcategory?: string
): Product[] {
  return products.filter((product) => {
    if (category && product.category !== category) return false;
    if (subcategory && product.subcategory !== subcategory) return false;
    return true;
  });
}
