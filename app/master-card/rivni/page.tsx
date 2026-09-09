import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/master-card/rivni")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

export default function RivniPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Рівні</h1>
        <p className="text-muted-foreground text-lg">
          Підвищуйте свій рівень статусу та отримуйте більше переваг.
        </p>
      </div>
      <div className="grid gap-6">
        <p className="max-w-3xl leading-relaxed text-foreground/90">
          Чим частіше ви звертаєтеся до «Майстерні Ковбас», тим вищий рівень статусу
          ви отримуєте. Кожен рівень відкриває нові бонуси та підвищуються умови
          нарахування балів.
        </p>
      </div>
    </div>
  );
}
