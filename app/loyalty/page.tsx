import Link from "next/link";
import { masterCardPages } from "@/lib/master-card-pages";

export const metadata = {
  title: "Карта Майстра | Майстерня Ковбас",
  description: "Програма лояльності для наших постійних клієнтів.",
};

export default function MasterCardPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Карта Майстра</h1>
        <p className="text-muted-foreground text-lg">Програма лояльності для наших постійних клієнтів.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {masterCardPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group rounded-xl border bg-card p-5 transition-colors hover:border-foreground/30 hover:bg-accent/50"
          >
            <h2 className="font-semibold group-hover:underline">{page.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
