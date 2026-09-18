import Link from "next/link";
import { catalogCategories } from "@/lib/catalog-categories";
import { products } from "@/config/products";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductsListingClient } from "@/components/products-listing-client";

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Каталог продукції</h1>
        <p className="text-muted-foreground text-lg">Ознайомтеся з нашим асортиментом.</p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 auto-rows-fr lg:grid-cols-5">
        {catalogCategories.map((category) => (
          <Link key={category.href} href={category.href} className="group block h-full outline-none">
            <Card className="relative flex h-full min-h-[240px] flex-col bg-muted/10 transition-all hover:border-primary group-focus-visible:border-primary">
              <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10" />
              <CardHeader className="relative z-20 flex flex-col gap-1 p-5">
                <CardTitle className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {category.label}
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 sm:text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">Товари</h2>
        <div className="mt-6">
          <ProductsListingClient products={products} />
        </div>
      </div>
    </div>
  );
}
