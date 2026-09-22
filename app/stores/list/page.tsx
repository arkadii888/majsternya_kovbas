import { networkPages } from "@/lib/network-pages";
import StoresListClient from "@/components/stores-list-client";

const page = networkPages.find((p) => p.href === "/stores/list")!;

export const metadata = {
  title: `${page.label} | Наша мережа | Майстерня Ковбас`,
  description: page.description,
};

export default function SpysokMahazynivPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Список магазинів</h1>
      </div>
      <StoresListClient />
    </div>
  );
}
