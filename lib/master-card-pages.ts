export type MasterCardPage = {
  href: string;
  label: string;
  description: string;
};

export const masterCardPages: MasterCardPage[] = [
  {
    href: "/loyalty/about",
    label: "Про програму",
    description: "Читайте, як працює програма лояльності «Карта Майстра» та як приєднатися до неї.",
  },
  {
    href: "/loyalty/bonuses",
    label: "Бонуси",
    description: "Збирайте бонуси за покупки та обмінюйте їх на смакові нагороди.",
  },
  {
    href: "/loyalty/levels",
    label: "Рівні",
    description: "Підвищуйте свій рівень статусу та отримуйте більше переваг.",
  },
  {
    href: "/loyalty/benefits",
    label: "Переваги",
    description: "Довідайтеся про всі бонусні привілеї програми лояльності.",
  },
  {
    href: "/loyalty/faq",
    label: "FAQ",
    description: "Відповіді на найпопулярніші питання про «Карту Майстра».",
  },
];
