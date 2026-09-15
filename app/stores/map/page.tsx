import { networkPages } from "@/lib/network-pages";
import StoresMap from "@/components/stores-map-client";

const page = networkPages.find((p) => p.href === "/stores/map")!;

export const metadata = {
  title: `${page.label} | Наша мережа | Майстерня Ковбас`,
  description: page.description,
};

export default function KartaPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Карта</h1>
        <p className="text-muted-foreground text-lg">
          Знайдіть найближчий магазин «Майстерня Ковбас» на карті та натисніть на
          маркер, щоб побачити деталі.
        </p>
      </div>
      <StoresMap />
    </div>
  );
}
