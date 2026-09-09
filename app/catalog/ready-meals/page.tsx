import { catalogCategories } from "@/lib/catalog-categories";

const category = catalogCategories.find((c) => c.href === "/catalog/ready-meals")!;

export const metadata = {
  title: `${category.label} | Майстерня Ковбас`,
  description: category.description,
};

export default function HotovyiStravyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Готові страви</h1>
        <p className="text-muted-foreground text-lg">Готові страви, що економлять ваш час на кухні.</p>
      </div>
      <div className="grid gap-6">
      </div>
    </div>
  );
}
