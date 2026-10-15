"use client";

import { useMemo, useState } from "react";
import { ChevronDown, PackageSearch, SlidersHorizontal } from "lucide-react";

import {
  productFilterGroups,
  type Product,
} from "@/config/products";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/product-card";

const ALL: string = "all";

export function ProductsListingClient({
  products: items,
  emptyText,
  initialTags = [],
}: {
  products: Product[];
  emptyText?: string;
  initialTags?: string[];
}) {
  const [meatType, setMeatType] = useState<string>(ALL);
  const [productType, setProductType] = useState<string>(ALL);
  const [tags, setTags] = useState<string[]>(initialTags);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleTag = (id: string, checked: boolean) => {
    setTags((current) =>
      checked
        ? current.includes(id)
          ? current
          : [...current, id]
        : current.filter((value) => value !== id),
    );
  };

  const activeTags = tags.filter((id) => !initialTags.includes(id));

  const visible = useMemo(() => {
    return items.filter((product) => {
      if (meatType !== ALL && product.meatType !== meatType) return false;
      if (productType !== ALL && product.productType !== productType) return false;
      if (initialTags.length > 0 && !initialTags.some((id) => product.tags?.includes(id))) {
        return false;
      }
      if (activeTags.length > 0 && !activeTags.every((id) => product.tags?.includes(id))) {
        return false;
      }
      return true;
    });
  }, [items, meatType, productType, tags, activeTags, initialTags]);

  const activeTagOptions = productFilterGroups
    .find((group) => group.key === "tags")
    ?.options.filter((option) => tags.includes(option.id));

  const activeFiltersCount =
    (meatType !== ALL ? 1 : 0) +
    (productType !== ALL ? 1 : 0) +
    activeTags.length;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
      <button
        type="button"
        onClick={() => setFiltersOpen((open) => !open)}
        aria-expanded={filtersOpen}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-border bg-card px-4 py-3 transition-colors active:bg-muted lg:hidden"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <SlidersHorizontal className="size-4" aria-hidden />
          Фільтри
          {activeFiltersCount > 0 && (
            <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-xs font-semibold leading-none text-primary-foreground">
              {activeFiltersCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "size-5 text-muted-foreground transition-transform",
            filtersOpen && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      <Card
        className={cn(
          "hidden w-full shrink-0 self-start lg:sticky lg:top-6 lg:block lg:w-80",
          filtersOpen && "block"
        )}
      >
        <CardContent className="flex flex-col gap-6">
          {productFilterGroups.map((group) =>
            group.multi ? (
              <section key={group.key} className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">{group.label}</h3>
                <div className="flex flex-col gap-1">
                    {group.options.map((option) => {
                      const checked = tags.includes(option.id);
                      const locked = initialTags.includes(option.id);
                      return (
                        <label
                          key={option.id}
                          className={cn(
                            "flex items-center gap-2.5 rounded-lg px-1 py-2.5 text-sm transition-colors sm:py-1.5",
                            locked
                              ? "cursor-default opacity-60"
                              : "cursor-pointer hover:bg-muted",
                            checked && "font-medium",
                          )}
                        >
                          <Checkbox
                            checked={checked}
                            disabled={locked}
                            onCheckedChange={(value) =>
                              toggleTag(option.id, value === true)
                            }
                          />
                          <span>{option.label}</span>
                        </label>
                      );
                    })}
                </div>
              </section>
            ) : (
              <section key={group.key} className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">{group.label}</h3>
                <RadioGroup
                  value={
                    group.key === "meatType" ? meatType : productType
                  }
                  onValueChange={(value) => {
                    if (group.key === "meatType") {
                      setMeatType(value as string);
                    } else {
                      setProductType(value as string);
                    }
                  }}
                  className="gap-1"
                >
                  <label
                    className={cn(
                      "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-2.5 text-sm transition-colors hover:bg-muted sm:py-1.5",
                      (group.key === "meatType" ? meatType : productType) ===
                        ALL && "font-medium",
                    )}
                  >
                    <RadioGroupItem value={ALL} />
                    <span>Будь-який</span>
                  </label>
                  {group.options.map((option) => {
                    const active =
                      group.key === "meatType"
                        ? meatType === option.id
                        : productType === option.id;
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-2.5 text-sm transition-colors hover:bg-muted sm:py-1.5",
                          active && "font-medium",
                        )}
                      >
                        <RadioGroupItem value={option.id} />
                        <span>{option.label}</span>
                      </label>
                    );
                  })}
                </RadioGroup>
              </section>
            ),
          )}
        </CardContent>
      </Card>

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex min-h-[2.75rem] flex-wrap items-center gap-x-3 gap-y-2 sm:min-h-[3.5rem]">
          <p className="text-sm text-muted-foreground">
            Знайдено товарів:{" "}
            <span className="font-medium text-foreground">
              {visible.length}
            </span>
          </p>
          {activeTagOptions && activeTagOptions.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {activeTagOptions.map((option) => (
                <Badge key={option.id} variant="secondary" className="h-auto py-1">
                  {option.label}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 2xl:grid-cols-3">
            {visible.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                <PackageSearch className="size-6 text-muted-foreground" />
              </div>
              <p className="font-medium">
                За обраними фільтрами не знайдено товарів
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                {emptyText ??
                  "Спробуйте зняти частину фільтрів або оберіть інший розділ каталогу."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
