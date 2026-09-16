import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  Clock,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import { features, getStoreById, storeIds } from "@/config/stores";
import StorePhotoGallery from "@/components/store-photo-gallery";
import StoreMapClient from "@/components/store-map-client";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return storeIds.map((storeId) => ({ storeId }));
}

export async function generateMetadata({ params }: { params: Promise<{ storeId: string }> }) {
  const { storeId } = await params;
  const store = getStoreById(storeId);
  if (!store) return {};
  return {
    title: `${store.city}, ${store.address} | Майстерня Ковбас`,
    description: `${store.name} — ${store.city}, ${store.address}. Графік: ${store.hours ?? "—"}`,
  };
}

export default async function StorePage({ params }: { params: Promise<{ storeId: string }> }) {
  const { storeId } = await params;
  const store = getStoreById(storeId);
  if (!store) notFound();

  const storeFeatures = store.features
    .map((id) => features.find((f) => f.id === id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-3">
        <Link
          href="/stores/list"
          className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          До списку магазинів
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <StorePhotoGallery photos={store.photos} />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">
                У цьому магазині є
              </h2>
            </div>
            {storeFeatures.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {storeFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3"
                  >
                    <span className="text-2xl" aria-hidden>
                      {feature.emoji}
                    </span>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Інформацію про асортимент магазину можна уточнити за телефоном.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <StoreMapClient store={store} />

          <dl className="flex flex-col gap-3 rounded-xl border bg-card p-5 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <div className="flex flex-col gap-0.5">
                <dt className="text-muted-foreground">Адреса</dt>
                <dd className="font-medium">
                  {store.city}, {store.address}
                </dd>
              </div>
            </div>
            {store.hours && (
              <div className="flex items-start gap-2 border-t pt-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div className="flex flex-col gap-0.5">
                  <dt className="text-muted-foreground">Час роботи</dt>
                  <dd className="font-medium">{store.hours}</dd>
                </div>
              </div>
            )}
            {store.phone && (
              <div className="flex items-start gap-2 border-t pt-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div className="flex flex-col gap-0.5">
                  <dt className="text-muted-foreground">Телефон</dt>
                  <dd className="font-medium">
                    <a
                      href={`tel:${store.phone.replace(/[^+\d]/g, "")}`}
                      className="transition-colors hover:text-foreground"
                    >
                      {store.phone}
                    </a>
                  </dd>
                </div>
              </div>
            )}
          </dl>

          <div className="flex flex-col gap-2">
            <Button
              variant="secondary"
              style={{ color: "#ffffff" }}
              render={<a href={store.map} target="_blank" rel="noopener noreferrer" />}
            >
              <Navigation className="size-4" />
              Прокласти маршрут
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
