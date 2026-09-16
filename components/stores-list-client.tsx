"use client";

import { useMemo, useState } from "react";
import { MapPinOff } from "lucide-react";

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

  return (    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <Card className="w-full shrink-0 self-start lg:sticky lg:top-6 lg:w-80">
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
                  "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-1.5 text-sm transition-colors hover:bg-muted",
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
                    "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-1.5 text-sm transition-colors hover:bg-muted",
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
                      "flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-1.5 text-sm transition-colors hover:bg-muted",
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
        <div className="mb-4 flex min-h-[3.5rem] flex-wrap items-center gap-x-3 gap-y-2">
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
          <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
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
