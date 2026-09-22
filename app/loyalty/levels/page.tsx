import { Badge } from "@/components/ui/badge";
import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/loyalty/levels")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

const levels = [
  {
    name: "Учень Майстра",
    total: "0 – 4 999 грн",
    multiplier: "×1.0",
    per1000: "20 бонусів",
  },
  {
    name: "Помічник Майстра",
    total: "5 000 – 14 999 грн",
    multiplier: "×1.25",
    per1000: "25 бонусів",
  },
  {
    name: "Майстер",
    total: "15 000 – 29 999 грн",
    multiplier: "×1.5",
    per1000: "30 бонусів",
  },
  {
    name: "Золотий Майстер",
    total: "від 30 000 грн",
    multiplier: "×2.0",
    per1000: "40 бонусів",
  },
];

export default function RivniPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Рівні</h1>
      </div>

      <div className="grid gap-6">
        <p className="max-w-3xl leading-relaxed text-foreground/90">
          Чим вищий статус — тим більше бонусів ви отримуєте за кожен чек! Множник
          бонусів залежить від загальної суми усіх ваших покупок за весь час.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((level) => (
            <div
              key={level.name}
              className="flex flex-col gap-4 rounded-xl border bg-card p-5"
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold">{level.name}</h2>
                <span className="text-sm text-muted-foreground">
                  {level.total}
                </span>
              </div>
              <div className="flex flex-col gap-3 border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Множник</span>
                  <Badge variant="secondary">{level.multiplier}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    За 1 000 грн
                  </span>
                  <span className="font-medium">{level.per1000}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
