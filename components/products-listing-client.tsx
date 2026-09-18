"use client";

import { useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";

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
}: {
  products: Product[];
  emptyText?: string;
}) {
  const [meatType, setMeatType] = useState<string>(ALL);
  const [productType, setProductType] = useState<string>(ALL);
  const [tags, setTags] = useState<string[]>([]);

  const toggleTag = (id: string, checked: boolean) => {
    setTags((current) =>
      checked
        ? current.includes(id)
          ? current
          : [...current, id]
        : current.filter((value) => value !== id),
    );
  };

  const visible = useMemo(() => {
    return items.filter((product) => {
      if (meatType !== ALL && product.meatType !== meatType) return false;
      if (productType !== ALL && product.productType !== productType) return false;
      if (tags.length > 0 && !tags.every((id) => product.tags?.includes(id))) {
        return false;
      }
      return true;
    });
  }, [items, meatType, productType, tags]);

  const activeTagOptions = productFilterGroups
    .find((group) => group.key === "tags")
    ?.options.filter((option) => tags.includes(option.id));

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <Card className="w-full shrink-0 self-start lg:sticky lg:top-6 lg:w-80">
        <CardContent className="flex flex-col gap-6">
          {productFilterGroups.map((group) =>
            group.multi ? (
              <section key={group.key} className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">{group.label}</h3>
                <div className="flex flex-col gap-1">
                  {group.options.map((option) => {
                    const checked = tags.includes(option.id);
                    return (
                      <label
                        key={option.id}
                        className={cn(
                          "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-1.5 text-sm transition-colors hover:bg-muted",
                          checked && "font-medium",
                        )}
                      >
                        <Checkbox
                          checked={checked}
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
                      "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-1.5 text-sm transition-colors hover:bg-muted",
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
                          "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-1.5 text-sm transition-colors hover:bg-muted",
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
        <div className="mb-4 flex min-h-[3.5rem] flex-wrap items-center gap-x-3 gap-y-2">
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
          <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
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
