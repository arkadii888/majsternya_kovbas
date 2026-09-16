import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/loyalty/faq")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

const faqs = [
  {
    q: "Як нараховуються бонуси за покупки?",
    a: "За кожні повні 50 грн у чеку ви отримуєте 1 базовий бонус, який множиться на коефіцієнт вашого статусу (від ×1.0 до ×2.0). Наприклад, на рівні «Майстер» за покупку на 1000 грн ви отримаєте 30 бонусів замість 20.",
  },
  {
    q: "Який термін дії бонусів і як вони згорають?",
    a: "Кожна отримана порція бонусів діє 12 місяців із дати її нарахування. При оплаті замовлення система автоматично списує першими ті бонуси, термін дії яких закінчується раніше. Якщо бонуси не використати протягом року, вони автоматично анулюються.",
  },
  {
    q: "Яку частину покупки можна оплатити бонусами?",
    a: "Бонусами можна покрити до 30% від суми чека. Мінімальна кількість бонусів для списання за один раз — 100 бонусів (де 1 бонус = 1 грн).",
  },
  {
    q: "Коли бонуси з'являться на моєму рахунку?",
    a: "Бонуси нараховуються автоматично одразу після повної оплати замовлення.",
  },
  {
    q: "Чи на всі товари нараховуються бонуси?",
    a: "Бонуси нараховуються на більшість товарів в асортименті. Винятком є придбання подарункових сертифікатів та окремі товари, які беруть участь у спеціальних акціях.",
  },
  {
    q: "Чи можу я обміняти бонуси на реальні гроші?",
    a: "Ні, бонуси не обмінюються на готівку та можуть бути використані виключно як знижка на наступні покупки.",
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">FAQ</h1>
        <p className="text-muted-foreground text-lg">
          Відповіді на найпопулярніші питання про «Карту Майстра».
        </p>
      </div>

      <div className="max-w-3xl">
        <Accordion defaultValue={[faqs[0].q]}>
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
