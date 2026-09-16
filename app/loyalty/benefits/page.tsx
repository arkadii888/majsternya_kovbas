import { Cake, Crown, Sparkles } from "lucide-react";

import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/loyalty/benefits")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

const benefits = [
  {
    icon: Cake,
    title: "Даруємо до Дня народження",
    text: "Отримуйте +200 бонусів у подарунок або подвійне нарахування бонусів за всі покупки протягом 7 днів.",
  },
  {
    icon: Sparkles,
    title: "Подвійні бонуси",
    text: "Заробляйте вдвічі більше бонусів у дні народження магазину, на відкриттях нових точок та під час спеціальних святкових акцій.",
  },
  {
    icon: Crown,
    title: "Ексклюзивний доступ",
    text: "Власники картки першими дізнаються про новинки каталогу, отримують персональні знижки та спецціни, недоступні іншим покупцям.",
  },
];

export default function PerevahyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Переваги</h1>
        <p className="text-muted-foreground text-lg">
          Спеціальні можливості для власників картки.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 rounded-xl border bg-card p-5"
          >
            <item.icon className="size-6 text-foreground" />
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
