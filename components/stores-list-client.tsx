"use client";

import { useMemo, useState } from "react";
import { ChevronDown, MapPinOff, SlidersHorizontal } from "lucide-react";

import { cities, features, stores } from "@/config/stores";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import StoreCard from "@/components/store-card";

type CityFilter = "all" | (typeof cities)[number]["id"];

const ALL_CITY = "all";

export default function StoresListClient() {
  const [city, setCity] = useState<CityFilter>(ALL_CITY);
  const [selected, setSelected] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFeature = (id: string, checked: boolean) => {
    setSelected((current) =>
      checked
        ? current.includes(id)
          ? current
          : [...current, id]
        : current.filter((value) => value !== id),
    );
  };

  const visible = useMemo(() => {
    return stores.filter((store) => {
      const cityOption = cities.find((option) => option.label === store.city);
      if (city !== ALL_CITY) {
        if (city === "other") {
          if (cityOption) return false;
        } else if (!cityOption || cityOption.id !== city) {
          return false;
        }
      }
      return selected.every((id) => store.features.includes(id));
    });
  }, [city, selected]);

  const activeFiltersCount = (city !== ALL_CITY ? 1 : 0) + selected.length;

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
          <section className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Місто</h3>
            <RadioGroup
              value={city}
              onValueChange={(value) => setCity(value as CityFilter)}
              className="gap-1"
            >
              <label
                className={cn(
                  "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-2.5 text-sm transition-colors hover:bg-muted sm:py-1.5",
                  city === ALL_CITY && "font-medium",
                )}
              >
                <RadioGroupItem value={ALL_CITY} />
                <span>Всі міста</span>
              </label>
              {cities.map((option) => (
                <label
                  key={option.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-2.5 text-sm transition-colors hover:bg-muted sm:py-1.5",
                    city === option.id && "font-medium",
                  )}
                >
                  <RadioGroupItem value={option.id} />
                  <span>{option.label}</span>
                </label>
              ))}
            </RadioGroup>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Що є в магазині</h3>
            <div className="flex flex-col gap-1">
              {features.map((feature) => {
                const checked = selected.includes(feature.id);
                return (
                  <label
                    key={feature.id}
                    className={cn(
                      "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-2.5 text-sm transition-colors hover:bg-muted sm:py-1.5",
                      checked && "font-medium",
                    )}
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(value) =>
                        toggleFeature(feature.id, value === true)
                      }
                    />
                    <span>{feature.label}</span>
                  </label>
                );
              })}
            </div>
          </section>
        </CardContent>
      </Card>

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex min-h-[2.75rem] flex-wrap items-center gap-x-3 gap-y-2 sm:min-h-[3.5rem]">
          <p className="text-sm text-muted-foreground">
            Знайдено магазинів:{" "}
            <span className="font-medium text-foreground">
              {visible.length}
            </span>
          </p>
          {selected.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {features
                .filter((f) => selected.includes(f.id))
                .map((f) => (
                  <Badge key={f.id} variant="secondary" className="h-auto py-1">
                    {f.label}
                  </Badge>
                ))}
            </div>
          )}
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 2xl:grid-cols-3">
            {visible.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                <MapPinOff className="size-6 text-muted-foreground" />
              </div>
              <p className="font-medium">
                За обраними фільтрами не знайдено магазинів
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Спробуйте зняти частину фільтрів або оберіть інше місто.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
