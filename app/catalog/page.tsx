import Link from "next/link";
import { catalogCategories } from "@/lib/catalog-categories";

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Каталог продукції</h1>
        <p className="text-muted-foreground text-lg">Ознайомтеся з нашим асортиментом.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {catalogCategories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group rounded-xl border bg-card p-5 transition-colors hover:border-foreground/30 hover:bg-accent/50"
          >
            <h2 className="font-semibold group-hover:underline">{category.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
