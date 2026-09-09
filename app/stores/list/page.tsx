import { networkPages } from "@/lib/network-pages";

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
        <p className="text-muted-foreground text-lg">
          Актуальний перелік магазинів «Майстерня Ковбас» з адресами та графіком роботи.
        </p>
      </div>
      <div className="grid gap-6">
        <p className="max-w-3xl leading-relaxed text-foreground/90">
          У цьому розділі зібрано всі магазини мережі з повними адресами, телефонами
          та графіком роботи. Оберіть зручний для вас варіант і відвідайте нас.
        </p>
      </div>
    </div>
  );
}
