import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getProductById, productIds } from "@/config/products";
import { catalogCategories } from "@/lib/catalog-categories";
import { getSubcategoryByHref } from "@/lib/catalog-subcategories";
import ProductPhotoGallery from "@/components/product-photo-gallery";
import StoreCard from "@/components/store-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function getBreadcrumb(product: {
  category?: string;
  subcategory?: string;
}): { categoryHref?: string; categoryLabel?: string; subcategoryHref?: string; subcategoryLabel?: string } {
  if (!product.category) return {};
  const categoryHref = `/catalog/${product.category}`;
  const categoryLabel = catalogCategories.find((c) => c.href === categoryHref)?.label;
  if (!product.subcategory) {
    return { categoryHref, categoryLabel };
  }
  const subcategoryHref = `/catalog/${product.category}/${product.subcategory}`;
  const subcategory = getSubcategoryByHref(subcategoryHref);
  return {
    categoryHref,
    categoryLabel,
    subcategoryHref,
    subcategoryLabel: subcategory?.label,
  };
}

export function generateStaticParams() {
  return productIds.map((productId) => ({ productId }));
}

export async function generateMetadata({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = getProductById(productId);
  if (!product) return {};
  return {
    title: `${product.name} | Майстерня Ковбас`,
    description: product.description ?? `${product.name} — продукція «Майстерня Ковбас».`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = getProductById(productId);
  if (!product) notFound();

  const nutrition = product.nutrition;
  const crumbs = getBreadcrumb(product);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <nav
        aria-label="Ієрархія розділів"
        className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link
          href="/catalog"
          className="inline-flex w-fit items-center gap-1 transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          Каталог
        </Link>
        {crumbs.categoryHref && (
          <>
            <span aria-hidden>/</span>
            <Link href={crumbs.categoryHref} className="transition-colors hover:text-foreground">
              {crumbs.categoryLabel ?? product.category}
            </Link>
          </>
        )}
        {crumbs.subcategoryHref && (
          <>
            <span aria-hidden>/</span>
            <Link href={crumbs.subcategoryHref} className="transition-colors hover:text-foreground">
              {crumbs.subcategoryLabel ?? product.subcategory}
            </Link>
          </>
        )}
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <ProductPhotoGallery photos={product.photos} productName={product.name} />

        <div className="flex flex-col gap-4">
          {product.badges && product.badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {product.badges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{product.name}</h1>
          {product.description && (
            <p className="text-lg text-muted-foreground">{product.description}</p>
          )}

          {nutrition && (
            <div className="flex flex-col gap-3 rounded-xl border bg-card p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-sm font-medium text-muted-foreground">
                  Харчова цінність
                </h2>
                {nutrition.per && <span className="text-xs text-muted-foreground">{nutrition.per}</span>}
              </div>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {nutrition.calories && (
                  <div className="flex flex-col gap-1 rounded-lg bg-muted px-3 py-2.5">
                    <dt className="text-xs text-muted-foreground">Калорії</dt>
                    <dd className="text-sm font-semibold">{nutrition.calories}</dd>
                  </div>
                )}
                {nutrition.protein && (
                  <div className="flex flex-col gap-1 rounded-lg bg-muted px-3 py-2.5">
                    <dt className="text-xs text-muted-foreground">Білки</dt>
                    <dd className="text-sm font-semibold">{nutrition.protein}</dd>
                  </div>
                )}
                {nutrition.fat && (
                  <div className="flex flex-col gap-1 rounded-lg bg-muted px-3 py-2.5">
                    <dt className="text-xs text-muted-foreground">Жири</dt>
                    <dd className="text-sm font-semibold">{nutrition.fat}</dd>
                  </div>
                )}
                {nutrition.carbs && (
                  <div className="flex flex-col gap-1 rounded-lg bg-muted px-3 py-2.5">
                    <dt className="text-xs text-muted-foreground">Вуглеводи</dt>
                    <dd className="text-sm font-semibold">{nutrition.carbs}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </div>
      </div>

      {(product.ingredients?.length || product.storage || product.preparation) ? (
        <div className="mt-10">
          <Accordion defaultValue={product.ingredients ? ["ingredients"] : []}>
            {product.ingredients && product.ingredients.length > 0 && (
              <AccordionItem value="ingredients">
                <AccordionTrigger>Склад</AccordionTrigger>
                <AccordionContent>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
                    {product.ingredients.map((item, i) => (
                      <span key={item} className="inline-flex items-center">
                        {i > 0 && <span className="mr-2 text-muted-foreground">•</span>}
                        {item}
                      </span>
                    ))}
                  </p>
                </AccordionContent>
              </AccordionItem>
            )}
            {product.storage && (
              <AccordionItem value="storage">
                <AccordionTrigger>Умови зберігання</AccordionTrigger>
                <AccordionContent>
                  <p>{product.storage}</p>
                </AccordionContent>
              </AccordionItem>
            )}
            {product.preparation && (
              <AccordionItem value="preparation">
                <AccordionTrigger>Спосіб застосування</AccordionTrigger>
                <AccordionContent>
                  <p>{product.preparation}</p>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      ) : null}

      <section className="mt-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight">Де купити</h2>
            <p className="text-sm text-muted-foreground">
              {product.stores.length > 0
                ? `Магазини мережі, де є «${product.name}»`
                : "Магазини мережі «Майстерня Ковбас»"}
            </p>
          </div>
          <Button variant="ghost" render={<Link href="/stores/list" />}>
            Всі магазини
            <ChevronRight className="size-4" />
          </Button>
        </div>

        {product.stores.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
            {product.stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/50 px-6 py-10 text-center">
            <p className="font-medium">
              Немає даних про наявність цього товару в окремих магазинах
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              Зверніться до найближчого магазину мережі — персонал із задоволенням
              підкаже, де продукт є в наявності.
            </p>
            <Button variant="secondary" render={<Link href="/stores/list" />}>
              Знайти магазин
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
