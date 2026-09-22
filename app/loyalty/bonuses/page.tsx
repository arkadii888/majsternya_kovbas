import { Badge } from "@/components/ui/badge";
import { masterCardPages } from "@/lib/master-card-pages";

const page = masterCardPages.find((p) => p.href === "/loyalty/bonuses")!;

export const metadata = {
  title: `${page.label} | Карта Майстра | Майстерня Ковбас`,
  description: page.description,
};

const earningRows = [
  { amount: "50 грн", base: "1 бонус" },
  { amount: "100 грн", base: "2 бонуси" },
  { amount: "250 грн", base: "5 бонусів" },
  { amount: "500 грн", base: "10 бонусів" },
  { amount: "1 000 грн", base: "20 бонусів" },
];

const spendExamples = [
  { receipt: "600 грн", bonus: "до 180 бонусів", note: "−180 грн" },
  { receipt: "1 200 грн", bonus: "до 360 бонусів", note: "−360 грн" },
];

export default function BonusyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Бонуси</h1>
      </div>

      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Як нараховуються бонуси
          </h2>
          <p className="max-w-3xl leading-relaxed text-foreground/90">
            За кожні повні 50 грн у чеку ви отримуєте 1 базовий бонус. Отримані
            базові бонуси множатся на коефіцієнт вашого поточного рівня.
          </p>
          <div className="overflow-hidden rounded-xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 text-left">
                  <th className="px-4 py-3 font-medium">Сума покупки</th>
                  <th className="px-4 py-3 font-medium">
                    Базові бонуси (до множника)
                  </th>
                </tr>
              </thead>
              <tbody>
                {earningRows.map((row) => (
                  <tr key={row.amount} className="border-t">
                    <td className="px-4 py-3">{row.amount}</td>
                    <td className="px-4 py-3 flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        {row.base}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Бонуси зараховуються на ваш рахунок одразу після повної оплати покупки.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Як витрачати бонуси</h2>
          <p className="max-w-3xl leading-relaxed text-foreground/90">
            Накопиченими бонусами можна оплатити до 30% вартості нової покупки.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {spendExamples.map((ex) => (
              <div
                key={ex.receipt}
                className="flex flex-col gap-2 rounded-xl border bg-card p-5"
              >
                <span className="text-sm text-muted-foreground">
                  При чеку на {ex.receipt}
                </span>
                <span className="font-semibold">{ex.bonus}</span>
                <span className="text-sm text-foreground/70">{ex.note}</span>
              </div>
            ))}
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Мінімальна сума для списання — 100 бонусів.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Винятки та обмеження</h2>
          <ul className="max-w-3xl flex flex-col gap-2 text-foreground/90">
            <li>
              Бонуси не нараховуються за придбання подарункових сертифікатів та на
              окремі акційні товари (згідно з умовами конкретної акції).
            </li>
            <li>Бонуси не виплачуються в готівковому еквіваленті.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
