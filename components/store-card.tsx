"use client";

import { Clock, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

import { features } from "@/config/stores";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Store } from "@/config/stores";

export default function StoreCard({
  store,
  className,
}: {
  store: Store;
  className?: string;
}) {
  return (
    <Card size="sm" className={cn("w-full text-left", className)}>
      <CardHeader>
        <CardTitle>{store.city}</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-col gap-2 text-sm">
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>{store.address}</span>
          </li>
          {store.hours && (
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-muted-foreground" />
              <span>{store.hours}</span>
            </li>
          )}
        </ul>
        {store.features.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {store.features.map((id) => {
              const label = features.find((f) => f.id === id)?.label;
              if (!label) return null;
              return (
                <Badge key={id} variant="secondary" className="h-auto py-1">
                  {label}
                </Badge>
              );
            })}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-2">
        <Button
          variant="secondary"
          style={{ color: "#ffffff" }}
          render={<a href={store.map} target="_blank" rel="noopener noreferrer" />}
        >
          <Navigation className="size-4" />
          Прокласти маршрут
        </Button>
        <Button
          variant="secondary"
          style={{ color: "#ffffff" }}
          render={<Link href={`/stores/${store.id}`} />}
        >
          Детальніше
        </Button>
      </CardFooter>
    </Card>
  );
}
