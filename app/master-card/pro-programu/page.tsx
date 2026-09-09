import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/master-card/pro-programu")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

export default function ProProgramuPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Про програму</h1>
        <p className="text-muted-foreground text-lg">
          «Карта Майстра» — програма лояльності для наших постійних клієнтів.
        </p>
      </div>
      <div className="grid gap-6">
        <p className="max-w-3xl leading-relaxed text-foreground/90">
          Програма лояльності «Карта Майстра» створена для тих, хто цінує натуральні
          ковбаси, делікатеси та інші свіжі продукти власного виробництва. Обирайте
          найкраще з майстерні, заробляйте бонуси за кожну покупку та обмінюйте їх на
          смакові нагороди.
        </p>
      </div>
    </div>
  );
}
