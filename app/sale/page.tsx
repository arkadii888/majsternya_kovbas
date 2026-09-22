import { products } from "@/config/products";
import { ProductsListingClient } from "@/components/products-listing-client";

const SALE_TAGS = ["discount", "new"];

export default function SalePage() {
  const saleProducts = products.filter((product) =>
    (product.tags ?? []).some((tag) => SALE_TAGS.includes(tag))
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Знижки та новинки</h1>
      </div>
      <ProductsListingClient
        products={saleProducts}
        initialTags={SALE_TAGS}
        emptyText="Поки немає товарів зі знижками чи новинками. Загляньте в каталог продукції."
      />
    </div>
  );
}
