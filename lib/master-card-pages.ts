import type { LucideIcon } from "lucide-react";
import { Award, BadgePercent, Coins, HelpCircle, Info } from "lucide-react";

export type MasterCardPage = {
  href: string;
  label: string;
  description: string;
  Icon: LucideIcon;
};

export const masterCardPages: MasterCardPage[] = [
  {
    href: "/loyalty/about",
    label: "Про програму",
    description: "Читайте, як працює програма лояльності «Карта Майстра» та як приєднатися до неї.",
    Icon: Info,
  },
  {
    href: "/loyalty/bonuses",
    label: "Бонуси",
    description: "Збирайте бонуси за покупки та обмінюйте їх на смакові нагороди.",
    Icon: Coins,
  },
  {
    href: "/loyalty/levels",
    label: "Рівні",
    description: "Підвищуйте свій рівень статусу та отримуйте більше переваг.",
    Icon: Award,
  },
  {
    href: "/loyalty/benefits",
    label: "Переваги",
    description: "Довідайтеся про всі бонусні привілеї програми лояльності.",
    Icon: BadgePercent,
  },
  {
    href: "/loyalty/faq",
    label: "FAQ",
    description: "Відповіді на найпопулярніші питання про «Карту Майстра».",
    Icon: HelpCircle,
  },
];
