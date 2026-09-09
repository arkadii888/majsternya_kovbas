import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/master-card/faq")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">FAQ</h1>
        <p className="text-muted-foreground text-lg">
          Відповіді на найпопулярніші питання про «Карту Майстра».
        </p>
      </div>
      <div className="grid gap-6">
        <div className="max-w-3xl flex flex-col gap-6">
          <div>
            <h2 className="font-semibold">Як отримати «Карту Майстра»?</h2>
            <p className="mt-1 text-muted-foreground">
              Ви можете отримати карту в будь-якому філії «Майстерні Ковбас».
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Як працює система бонусів?</h2>
            <p className="mt-1 text-muted-foreground">
              За кожну покупку, зроблену за картою, нараховуються бонуси, які
              можна обміняти на товари.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Чи є обмеження на використання бонусів?</h2>
            <p className="mt-1 text-muted-foreground">
              Бонуси можна обміняти на товари з майстерні та використовувати
              разом зі знижками.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
