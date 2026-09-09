import { networkPages } from "@/lib/network-pages";

const page = networkPages.find((p) => p.href === "/stores/cities")!;

export const metadata = {
  title: `${page.label} | Наша мережа | Майстерня Ковбас`,
  description: page.description,
};

export default function MistyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Міста</h1>
        <p className="text-muted-foreground text-lg">
          Міста, де представлена мережа «Майстерня Ковбас».
        </p>
      </div>
      <div className="grid gap-6">
        <p className="max-w-3xl leading-relaxed text-foreground/90">
          Наша мережа представлена в багатьох містах. Тут перелічені всі міста,
          де ви можете знайти магазини «Майстерня Ковбас».
        </p>
      </div>
    </div>
  );
}
