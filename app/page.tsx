import Link from "next/link";
import Image from "next/image";
import majsterImg from "../public/majster.png";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Aurora from "@/components/aurora";
import { popularCategories } from "@/config/popular-categories";
import {
  Beef,
  CreditCard,
  Factory,
  Megaphone,
  Phone,
  Store,
} from "lucide-react";

const PRODUCTION_URL = "https://www.premier.dp.ua/";

const bottomLinks = [
  { href: "/stores", title: "Наша мережа", desc: "Знайдіть найближчий магазин", Icon: Store },
  { href: "/loyalty", title: "Карта Майстра", desc: "Програма лояльності", Icon: CreditCard },
  { href: PRODUCTION_URL, title: "Про виробництво", desc: "Як ми створюємо продукт", Icon: Factory },
  { href: "/sale", title: "Знижки та новинки", desc: "Товари зі знижками та новинки", Icon: Megaphone },
  { href: "/contacts", title: "Контакти", desc: "Зв'яжіться з нами", Icon: Phone },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[80vh] max-h-[900px]">
        <Aurora
          colorStops={["#f2a51e", "#f2a51e", "#f2a51e"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="mb-16 flex flex-col items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
           <Image
             src={majsterImg}
             alt="Майстер"

            width={1400}
            height={700}
            priority
            quality={100}
            className="h-auto w-full rounded-xl object-contain drop-shadow-2xl"
          />

           <div className="absolute inset-0 flex flex-col items-start justify-start p-8 md:p-16 lg:p-24 pointer-events-none">
             <h1 className="text-3xl font-black uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl max-w-[70%] md:max-w-[50%] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] md:mt-0 -mt-2">
               <span className="block text-foreground">Від майстрів</span>
               <span className="block text-primary">м&rsquo;ясної справи!</span >
             </h1>
           </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-5 auto-rows-fr">

        {popularCategories.map((category) => (
          <Link key={category.href} href={category.href} className="group block h-full outline-none">
            <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary">
              <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
              </div>

              <CardHeader className="relative z-20 flex flex-col gap-1 p-5">
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {category.label}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}

        <Link href="/catalog" className="group block h-full outline-none">
          <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary">

            <div className="absolute inset-0 z-0 flex items-center justify-center text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
            </div>

            <Beef
              aria-hidden
              className="absolute bottom-4 right-4 z-20 h-8 w-8 text-muted-foreground/70 transition-colors group-hover:text-primary"
            />

            <CardHeader className="relative z-20 flex flex-col gap-1 p-5">
              <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                 Каталог продукції
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-400">
                Переглянути весь асортимент
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-5 auto-rows-fr">
        {bottomLinks.map((link) =>
          link.href.startsWith("http") ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full outline-none"
          >
            <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary">

              <div className="absolute inset-0 z-0 flex items-center justify-center text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
              </div>

              <link.Icon
                aria-hidden
                className="absolute bottom-4 right-4 z-20 h-8 w-8 text-muted-foreground/70 transition-colors group-hover:text-primary"
              />

<CardHeader className="relative z-20 flex flex-col gap-1 p-5">
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                   {link.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-400">
                  {link.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
          ) : (
          <Link
            key={link.href}
            href={link.href}
            className="group block h-full outline-none"
          >
            <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary">

              <div className="absolute inset-0 z-0 flex items-center justify-center text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
              </div>

              <link.Icon
                aria-hidden
                className="absolute bottom-4 right-4 z-20 h-8 w-8 text-muted-foreground/70 transition-colors group-hover:text-primary"
              />

              <CardHeader className="relative z-20 flex flex-col gap-1 p-5">
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                   {link.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-400">
                  {link.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          )
        )}
      </div>
      </div>
    </div>
  );
}
