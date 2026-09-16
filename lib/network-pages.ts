export type NetworkPage = {
  href: string;
  label: string;
  description: string;
};

export const networkPages: NetworkPage[] = [
  {
    href: "/stores/map",
    label: "Карта",
    description: "Інтерактивна карта з розташуванням усіх магазинів мережі.",
  },
  {
    href: "/stores/list",
    label: "Список магазинів",
    description: "Актуальний перелік магазинів «Майстерня Ковбас» з адресами та графіком.",
  },
];
