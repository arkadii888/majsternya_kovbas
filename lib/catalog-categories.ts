export type CatalogCategory = {
  href: string;
  label: string;
  description: string;
};

export const catalogCategories: CatalogCategory[] = [
  {
    href: "/catalog/sausages",
    label: "Ковбаси та делікатеси",
    description: "Класичні та варені ковбаси, а також делікатесні вироби власного виробництва.",
  },
  {
    href: "/catalog/franks",
    label: "Сосиски та сардельки",
    description: "Сосиски та сардельки різних видів — від щоденних до святкових.",
  },
  {
    href: "/catalog/meat-and-poultry",
    label: "М’ясо та птиця",
    description: "Свіже м’ясо та птиця від надійних постачальників.",
  },
  {
    href: "/catalog/grilling",
    label: "Для грилю",
    description: "Вироби, ідеальні для грилю та відкритого вогню.",
  },
  {
    href: "/catalog/smoked",
    label: "Копченості",
    description: "Копчені делікатеси з незабутнім димним ароматом.",
  },
  {
    href: "/catalog/ready-meals",
    label: "Готові страви",
    description: "Готові страви, які економить ваш час на кухні.",
  },
  {
    href: "/catalog/baked-goods",
    label: "Випічка",
    description: "Ароматна випічка, що виходить з духовки щодня.",
  },
  {
    href: "/catalog/cheese",
    label: "Сири",
    description: "Сири різних варіацій — для салатів і не лише.",
  },
  {
    href: "/catalog/sauces-and-seasonings",
    label: "Соуси та приправи",
    description: "Соуси та приправи, що розкривають смак страви.",
  },
  {
    href: "/catalog/gift-sets",
    label: "Набори",
    description: "Готові набори до святкового столу.",
  },
];
