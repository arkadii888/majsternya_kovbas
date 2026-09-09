export type MasterCardPage = {
  href: string;
  label: string;
  description: string;
};

export const masterCardPages: MasterCardPage[] = [
  {
    href: "/master-card/pro-programu",
    label: "Про програму",
    description: "Читайте, як працює програма лояльності «Карта Майстра» та як приєднатися до неї.",
  },
  {
    href: "/master-card/bonusy",
    label: "Бонуси",
    description: "Збирайте бонуси за покупки та обмінюйте їх на смакові нагороди.",
  },
  {
    href: "/master-card/rivni",
    label: "Рівні",
    description: "Підвищуйте свій рівень статусу та отримуйте більше переваг.",
  },
  {
    href: "/master-card/perevahy",
    label: "Переваги",
    description: "Довідайтеся про всі бонусні привілеї програми лояльності.",
  },
  {
    href: "/master-card/faq",
    label: "FAQ",
    description: "Відповіді на найпопулярніші питання про «Карту Майстра».",
  },
];
