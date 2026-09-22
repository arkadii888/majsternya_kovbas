import { Coins, Timer, TrendingUp } from "lucide-react";

import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/loyalty/about")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

const keyRules = [
  {
    icon: Coins,
    title: "1 бонус = 1 грн знижки",
    text: "Кожен накопичений бонус дорівнює одиній гривні знижки на наступну покупку.",
  },
  {
    icon: TrendingUp,
    title: "Бонуси зростають разом із вами",
    text: "Ваш рівень і множник бонусів залежать від загальної суми усіх покупок за весь час.",
  },
  {
    icon: Timer,
    title: "Термін дії — 1 рік",
    text: "Кожен нарахований бонус діє рівно 12 місяців із моменту отримання.",
  },
];

export default function ProProgramuPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Про програму</h1>
      </div>

      <div className="grid gap-6">
        <div className="max-w-3xl flex flex-col gap-4">
          <p className="leading-relaxed text-foreground/90">
            «Карта Майстра» — це бонусно-накопичувальна система, яка дозволяє
            заощаджувати на кожній покупці. Ви купуєте улюблені товари,
            накопичуєте бонуси та оплачуєте ними наступні замовлення.
          </p>
          <p className="leading-relaxed text-foreground/90">
            Чим більше ви купуєте разом із нами, тим вищим стає ваш статус і тим
            більше бонусів повертається на ваш рахунок!
          </p>
        </div>

        <h2 className="text-xl font-semibold tracking-tight">Ключові правила</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {keyRules.map((rule) => (
            <div
              key={rule.title}
              className="flex flex-col gap-3 rounded-xl border bg-card p-5"
            >
              <rule.icon className="size-6 text-foreground" />
              <h3 className="font-semibold">{rule.title}</h3>
              <p className="text-sm text-muted-foreground">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
