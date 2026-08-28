import Link from "next/link";
import Image from "next/image";
import majsterImg from "../public/majster.png";
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

      <div className="relative mb-16 flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.15)_0%,transparent_70%)] pointer-events-none" />

           <Image
             src={majsterImg}
             alt="Майстер"

            width={1400}
            height={700}
            priority
            className="h-auto w-full object-contain drop-shadow-2xl [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_90%)]"
          />

           <div className="absolute inset-0 flex flex-col items-start justify-start p-8 md:p-16 lg:p-24 pointer-events-none">
             <h1 className="text-3xl font-black uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl max-w-[70%] md:max-w-[50%] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] md:mt-0 -mt-2">
               <span className="block text-foreground">Від майстрів</span>
               <span className="block text-primary">м'ясної справи!</span >
             </h1>
           </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-5 auto-rows-fr">

        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="relative overflow-hidden flex h-full min-h-[240px] flex-col border-dashed opacity-50 justify-center items-center bg-transparent">
            <span className="text-muted-foreground text-sm"></span>
          </Card>
        ))}

        <Link href="/catalog" className="group block h-full outline-none">
          <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary bg-muted/10">

            <div className="absolute inset-0 z-0 flex items-center justify-center text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
            </div>

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
        {bottomLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group block h-full outline-none">
            <Card className="relative overflow-hidden flex h-full min-h-[240px] flex-col transition-all hover:border-primary group-focus-visible:border-primary bg-muted/10">

              <div className="absolute inset-0 z-0 flex items-center justify-center text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/10">
              </div>

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
        ))}
      </div>
    </div>
  );
}
