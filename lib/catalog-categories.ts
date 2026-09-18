export type CatalogCategory = {
  href: string;
  label: string;
  description: string;
};

export const catalogCategories: CatalogCategory[] = [
  {
    href: "/catalog/sausages-delicacies",
    label: "Ковбаси та делікатеси",
    description: "Класичні та варені ковбаси, а також делікатесні вироби власного виробництва.",
  },
  {
    href: "/catalog/frankfurters",
    label: "Сосиски та сардельки",
    description: "Сосиски та сардельки різних видів — від щоденних до святкових.",
  },
  {
    href: "/catalog/meat-poultry",
    label: "М’ясо та птиця",
    description: "Свіже м’ясо та птиця від надійних постачальників.",
  },
  {
    href: "/catalog/grill-meat",
    label: "М’ясо для грилю",
    description: "Вироби, ідеальні для грилю та відкритого вогню.",
  },
  {
    href: "/catalog/smoked-meat",
    label: "Копченості",
    description: "Копчені делікатеси з незабутнім димним ароматом.",
  },
  {
    href: "/catalog/ready-eat-meals",
    label: "Готові страви",
    description: "Готові страви, які економить ваш час на кухні.",
  },
  {
    href: "/catalog/bakery-pastries",
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
    href: "/catalog/sets-bundles",
    label: "Набори",
    description: "Готові набори до святкового столу.",
  },
];
