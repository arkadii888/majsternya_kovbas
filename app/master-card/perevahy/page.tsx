import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/master-card/perevahy")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

export default function PerevahyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Переваги</h1>
        <p className="text-muted-foreground text-lg">
          Довідайтеся про всі бонусні привілеї програми лояльності.
        </p>
      </div>
      <div className="grid gap-6">
        <p className="max-w-3xl leading-relaxed text-foreground/90">
          У власників карти «Майстра» є особливі привілеї: персональні знижки, подарунки
          до дня народження та доступ до ексклюзивних акцій та смакових новиток.
        </p>
      </div>
    </div>
  );
}
