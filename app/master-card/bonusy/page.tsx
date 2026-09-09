import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/master-card/bonusy")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

export default function BonusyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Бонуси</h1>
        <p className="text-muted-foreground text-lg">
          Збирайте бонуси за покупки та обмінюйте їх на смакові нагороди.
        </p>
      </div>
      <div className="grid gap-6">
        <p className="max-w-3xl leading-relaxed text-foreground/90">
          За кожну покупку, зроблену за картою «Майстра», нараховуються бонуси.
          Кількість бонусів залежить від суми та рівня статусу. Накопичені бонуси
          можна обміняти на товари з майстерні.
        </p>
      </div>
    </div>
  );
}
