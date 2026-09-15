"use client";

import { Clock, MapPin, Navigation } from "lucide-react";

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
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-2">
        <Button render={<a href={store.map} target="_blank" rel="noopener noreferrer" />}>
          <Navigation className="size-4" />
          Прокласти маршрут
        </Button>
        {store.link && (
          <Button
            variant="secondary"
            render={<a href={store.link} target="_blank" rel="noopener noreferrer" />}
          >
            Детальніше
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
