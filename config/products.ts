import data from "./products.json";
import { getStoreById, type Store } from "./stores";

export type ProductFilterOption = {
  id: string;
  label: string;
};

export type ProductFilterGroup = {
  key: "meatType" | "productType" | "tags";
  label: string;
  options: ProductFilterOption[];
  multi: boolean;
};

export const productFilterGroups: ProductFilterGroup[] = [
  {
    key: "meatType",
    label: "Вид м'яса",
    multi: false,
    options: [
      { id: "pork", label: "Свинина" },
      { id: "beef", label: "Яловичина" },
      { id: "chicken", label: "Курка" },
      { id: "turkey", label: "Індичка" },
      { id: "combined", label: "Комбінований склад" },
    ],
  },
  {
    key: "productType",
    label: "Тип",
    multi: false,
    options: [
      { id: "cooked", label: "Варений" },
      { id: "smoked", label: "Копчений" },
      { id: "raw", label: "Сирий" },
      { id: "marinated", label: "Маринований" },
      { id: "ready-to-eat", label: "Готовий до споживання" },
      { id: "grill", label: "Для грилю" },
    ],
  },
  {
    key: "tags",
    label: "Мітки",
    multi: true,
    options: [
      { id: "new", label: "Новинка" },
      { id: "hit", label: "Хіт" },
      { id: "own-production", label: "Власне виробництво" },
      { id: "fresh-smoking", label: "Свіже копчення" },
      { id: "grill", label: "Для грилю" },
      { id: "ready-to-eat", label: "Готово до споживання" },
      { id: "seasonal", label: "Сезонна пропозиція" },
    ],
  },
];

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
  meatType?: string;
  productType?: string;
  tags?: string[];
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
