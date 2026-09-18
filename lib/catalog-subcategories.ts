export type CatalogSubcategory = {
  parentHref: string;
  slug: string;
  label: string;
  description?: string;
  href: string;
};

export const catalogSubcategories: CatalogSubcategory[] = [
  // Ковбаси та делікатеси
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "cooked-sausages",
    label: "Варені ковбаси",
    description: "М’які варені ковбаси щоденного асортименту.",
    href: "/catalog/sausages-delicacies/cooked-sausages",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "cooked-smoked-sausages",
    label: "Варено-копчені",
    description: "Варено-копчені ковбаси з легкою димкою.",
    href: "/catalog/sausages-delicacies/cooked-smoked-sausages",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "semi-smoked-sausages",
    label: "Напівкопчені",
    description: "Напівкопчені ковбаси з насиченим смаком.",
    href: "/catalog/sausages-delicacies/semi-smoked-sausages",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "dry-cured-smoked-sausages",
    label: "Сирокопчені",
    description: "Сирокопчені ковбаси для дозрілої смакової палітри.",
    href: "/catalog/sausages-delicacies/dry-cured-smoked-sausages",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "salami",
    label: "Салямі",
    description: "Салямі для гурманів.",
    href: "/catalog/sausages-delicacies/salami",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "hams",
    label: "Шинки",
    description: "Шинки різного маринування та дозрівання.",
    href: "/catalog/sausages-delicacies/hams",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "meat-rolls",
    label: "Рулети",
    description: "М’ясні рулети з делікатесного фаршу.",
    href: "/catalog/sausages-delicacies/meat-rolls",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "cured-pork-loin",
    label: "Балики",
    description: "Балики для нарізки та святкового столу.",
    href: "/catalog/sausages-delicacies/cured-pork-loin",
  },
  {
    parentHref: "/catalog/sausages-delicacies",
    slug: "delicacies",
    label: "Делікатеси",
    description: "Власні делікатесні вироби майстерні.",
    href: "/catalog/sausages-delicacies/delicacies",
  },
  // Сосиски та сардельки
  {
    parentHref: "/catalog/frankfurters",
    slug: "sausages",
    label: "Сосиски",
    description: "М’які сосиски для сніданку та бутербродів.",
    href: "/catalog/frankfurters/sausages",
  },
  {
    parentHref: "/catalog/frankfurters",
    slug: "knackwurst",
    label: "Сардельки",
    description: "Сардельки з легкою хрусткою скоринкою.",
    href: "/catalog/frankfurters/knackwurst",
  },
  {
    parentHref: "/catalog/frankfurters",
    slug: "special-seasonal-recipes",
    label: "Спеціальні / сезонні рецептури",
    description: "Особливі рецептури та сезонні новинки.",
    href: "/catalog/frankfurters/special-seasonal-recipes",
  },
  {
    parentHref: "/catalog/frankfurters",
    slug: "grill-sausages",
    label: "Для грилю",
    description: "Сосиски та сардельки для відкритого вогню.",
    href: "/catalog/frankfurters/grill-sausages",
  },
  // М’ясо та птиця
  {
    parentHref: "/catalog/meat-poultry",
    slug: "pork",
    label: "Свинина",
    description: "Свиняче м’ясо преміум-якості.",
    href: "/catalog/meat-poultry/pork",
  },
  {
    parentHref: "/catalog/meat-poultry",
    slug: "beef",
    label: "Яловичина",
    description: "Яловичина для страв на вогні.",
    href: "/catalog/meat-poultry/beef",
  },
  {
    parentHref: "/catalog/meat-poultry",
    slug: "chicken",
    label: "Курятина",
    description: "Куряче філе та порції.",
    href: "/catalog/meat-poultry/chicken",
  },
  {
    parentHref: "/catalog/meat-poultry",
    slug: "turkey",
    label: "Індичка",
    description: "Легке дієтичне індичатинне м’ясо.",
    href: "/catalog/meat-poultry/turkey",
  },
  {
    parentHref: "/catalog/meat-poultry",
    slug: "ready-to-cook-meats",
    label: "Порційні напівфабрикати",
    description: "Готові порції для приготування на сковорідці.",
    href: "/catalog/meat-poultry/ready-to-cook-meats",
  },
  // М’ясо для грилю
  {
    parentHref: "/catalog/grill-meat",
    slug: "shashlik",
    label: "Шашлик",
    description: "М’ясо, призначене для шашликового маринування.",
    href: "/catalog/grill-meat/shashlik",
  },
  {
    parentHref: "/catalog/grill-meat",
    slug: "marinated-meat",
    label: "Мариноване м’ясо",
    description: "М’ясо, замарене для грилю.",
    href: "/catalog/grill-meat/marinated-meat",
  },
  {
    parentHref: "/catalog/grill-meat",
    slug: "ribs",
    label: "Ребра",
    description: "Ребра, готові до маринування.",
    href: "/catalog/grill-meat/ribs",
  },
  {
    parentHref: "/catalog/grill-meat",
    slug: "steaks",
    label: "Стейки",
    description: "М’ясні стейки для гарячого вогню.",
    href: "/catalog/grill-meat/steaks",
  },
  {
    parentHref: "/catalog/grill-meat",
    slug: "grilling-sausages",
    label: "Ковбаски для грилю",
    description: "Ковбаски, призначені для грилю.",
    href: "/catalog/grill-meat/grilling-sausages",
  },
  {
    parentHref: "/catalog/grill-meat",
    slug: "grilling-chicken",
    label: "Курятина для грилю",
    description: "Порційні нарізки курки для грилю.",
    href: "/catalog/grill-meat/grilling-chicken",
  },
  // Копченості
  {
    parentHref: "/catalog/smoked-meat",
    slug: "smoked-meat",
    label: "М’ясо",
    description: "Копчене м’ясо з димковим ароматом.",
    href: "/catalog/smoked-meat/smoked-meat",
  },
  {
    parentHref: "/catalog/smoked-meat",
    slug: "smoked-poultry",
    label: "Птиця",
    description: "Копчена птиця — смак традицій.",
    href: "/catalog/smoked-meat/smoked-poultry",
  },
  {
    parentHref: "/catalog/smoked-meat",
    slug: "smoked-sausages",
    label: "Ковбаси",
    description: "Копчені ковбаси для дозрілого смаку.",
    href: "/catalog/smoked-meat/smoked-sausages",
  },
  {
    parentHref: "/catalog/smoked-meat",
    slug: "smoked-meat-rolls",
    label: "Рулети",
    description: "Копчені рулети для аперитиву.",
    href: "/catalog/smoked-meat/smoked-meat-rolls",
  },
  {
    parentHref: "/catalog/smoked-meat",
    slug: "seasonal-smoked-items",
    label: "Сезонні позиції",
    description: "Обмежені сезонні копченості.",
    href: "/catalog/smoked-meat/seasonal-smoked-items",
  },
  // Готові страви
  {
    parentHref: "/catalog/ready-eat-meals",
    slug: "grilled-chicken",
    label: "Курка-гриль",
    description: "Ціла курка, приготувана на грилі.",
    href: "/catalog/ready-eat-meals/grilled-chicken",
  },
  {
    parentHref: "/catalog/ready-eat-meals",
    slug: "chicken-tabaka",
    label: "Курча-табака",
    description: "Печене курча з ароматними спеціями.",
    href: "/catalog/ready-eat-meals/chicken-tabaka",
  },
  {
    parentHref: "/catalog/ready-eat-meals",
    slug: "grilled-shashlik",
    label: "Шашлик",
    description: "Готовий шашлик, готовий до подачі.",
    href: "/catalog/ready-eat-meals/grilled-shashlik",
  },
  {
    parentHref: "/catalog/ready-eat-meals",
    slug: "grilled-sausages",
    label: "Ковбаски",
    description: "Засмажені готові ковбаски.",
    href: "/catalog/ready-eat-meals/grilled-sausages",
  },
  {
    parentHref: "/catalog/ready-eat-meals",
    slug: "meat-rolls",
    label: "Рулети",
    description: "Готові м’ясні рулети.",
    href: "/catalog/ready-eat-meals/meat-rolls",
  },
  {
    parentHref: "/catalog/ready-eat-meals",
    slug: "other-fried-specialties",
    label: "Інша жарена продукція",
    description: "Інші страви з горячого вогню.",
    href: "/catalog/ready-eat-meals/other-fried-specialties",
  },
  // Випічка
  {
    parentHref: "/catalog/bakery-pastries",
    slug: "savory-meat-pastries",
    label: "М’ясна",
    description: "М’ясні пироги та вироби.",
    href: "/catalog/bakery-pastries/savory-meat-pastries",
  },
  {
    parentHref: "/catalog/bakery-pastries",
    slug: "cheese-pastries",
    label: "Сирна",
    description: "Випічка з сиром.",
    href: "/catalog/bakery-pastries/cheese-pastries",
  },
  {
    parentHref: "/catalog/bakery-pastries",
    slug: "sweet-pastries",
    label: "Солодка",
    description: "Солодка випічка до чаю.",
    href: "/catalog/bakery-pastries/sweet-pastries",
  },
  {
    parentHref: "/catalog/bakery-pastries",
    slug: "seasonal-specialties",
    label: "Сезонні новинки",
    description: "Асортимент обмежених сезонних новинок.",
    href: "/catalog/bakery-pastries/seasonal-specialties",
  },
  // Набори
  {
    parentHref: "/catalog/sets-bundles",
    slug: "grill-sets",
    label: "Для грилю",
    description: "Комплекти для приготування на грилі.",
    href: "/catalog/sets-bundles/grill-sets",
  },
  {
    parentHref: "/catalog/sets-bundles",
    slug: "family-bundles",
    label: "Сімейні",
    description: "Набори для великої сім’ї.",
    href: "/catalog/sets-bundles/family-bundles",
  },
  {
    parentHref: "/catalog/sets-bundles",
    slug: "holiday-sets",
    label: "Святкові",
    description: "Набори до свята.",
    href: "/catalog/sets-bundles/holiday-sets",
  },
  {
    parentHref: "/catalog/sets-bundles",
    slug: "gift-sets",
    label: "Подарункові",
    description: "Набори, готові до подарунку.",
    href: "/catalog/sets-bundles/gift-sets",
  },
];

export const subcategoryByHref = new Map(
  catalogSubcategories.map((s) => [s.href, s])
);

export function getSubcategoryByHref(href: string) {
  return subcategoryByHref.get(href);
}

export function getSubcategoriesByParent(parentHref: string) {
  return catalogSubcategories.filter((s) => s.parentHref === parentHref);
}
