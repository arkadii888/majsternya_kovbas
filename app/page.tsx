import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const bottomLinks = [
  { href: "/network", title: "Наша мережа", desc: "Знайдіть найближчий магазин" },
  { href: "/master-card", title: "Карта Майстра", desc: "Програма лояльності" },
  { href: "/production", title: "Про виробництво", desc: "Як ми створюємо продукт" },
  { href: "/news", title: "Акції та новини", desc: "Останні події та знижки" },
  { href: "/contacts", title: "Контакти", desc: "Зв'яжіться з нами" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-16 flex flex-col items-center justify-start gap-8 md:flex-row md:gap-16 lg:gap-24">
        <div className="flex flex-col items-start text-left shrink-0">
          <h1 className="text-5xl font-black uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-foreground">Від майстрів</span>
            <span className="block text-primary">м'ясної справи!</span>
          </h1>
        </div>

        <div className="flex w-full justify-center md:w-auto md:justify-start">
          <Image
            src="/majster.png"
            alt="Майстер"
            width={500}
            height={500}
            priority
            className="h-auto w-full max-w-[350px] lg:max-w-[450px] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 auto-rows-fr">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="relative overflow-hidden flex h-full min-h-[240px] flex-col border-dashed opacity-50 justify-center items-center bg-transparent">
            <span className="text-muted-foreground text-sm">Місце для товару</span>
          </Card>
        ))}

        <Link href="/catalog" className="group block h-full outline-none">
          <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary">
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-muted/10 text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
              Фон каталогу
            </div>

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

            <CardHeader className="relative z-20 mt-auto flex flex-col gap-1 p-5">
              <CardTitle className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Каталог продукції
              </CardTitle>
              <CardDescription className="text-base text-gray-400">
                Переглянути весь асортимент
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 auto-rows-fr">
        {bottomLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group block h-full outline-none">
            <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary">
              <div className="absolute inset-0 z-0 flex items-center justify-center bg-muted/10 text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
                Місце для фото
              </div>

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

              <CardHeader className="relative z-20 mt-auto flex flex-col gap-1 p-5">
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {link.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-400">
                  {link.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
