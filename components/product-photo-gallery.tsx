"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProductPhotoGallery({
  photos,
  productName,
}: {
  photos?: string[];
  productName: string;
}) {
  const images = photos ?? [];
  const [index, setIndex] = React.useState(0);
  const count = images.length;

  if (count === 0) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted text-center">
        <span className="text-4xl" aria-hidden>
          📸
        </span>
        <span className="text-sm text-muted-foreground">
          Фотографії товару нещодавно будуть додані
        </span>
      </div>
    );
  }

  const go = (delta: number) =>
    setIndex((current) => (current + delta + count) % count);

  return (
    <div className="group relative">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Фото «${productName}» ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className={cn(
              "object-cover transition-opacity duration-300",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      <Button
        type="button"
        variant="secondary"
        size="icon-sm"
        aria-label="Попереднє фото"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/80 shadow-sm backdrop-blur"
      >
        <ChevronLeft className="size-4" />
      </Button>
      <Button
        type="button"
        variant="secondary"
        size="icon-sm"
        aria-label="Наступне фото"
        onClick={() => go(1)}
        className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/80 shadow-sm backdrop-blur"
      >
        <ChevronRight className="size-4" />
      </Button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 shadow-sm backdrop-blur">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Фото ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === index ? "bg-foreground" : "bg-foreground/30"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
