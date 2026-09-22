import Link from "next/link";
import { networkPages } from "@/lib/network-pages";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Наша мережа | Майстерня Ковбас",
  description: "Знайдіть найближчий магазин «Майстерня Ковбас».",
};

export default function NetworkPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Наша мережа</h1>
        <p className="text-muted-foreground text-lg">Знайдіть найближчий магазин «Майстерня Ковбас».</p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 auto-rows-fr lg:grid-cols-5">
        {networkPages.map((page) => (
          <Link key={page.href} href={page.href} className="group block h-full outline-none">
            <Card className="relative flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary">
              <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10" />
              <page.Icon
                aria-hidden
                className="absolute bottom-4 right-4 z-20 h-8 w-8 text-muted-foreground/70 transition-colors group-hover:text-primary"
              />
              <CardHeader className="relative z-20 flex flex-col gap-1 p-5">
                <CardTitle className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {page.label}
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 sm:text-base">
                  {page.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
