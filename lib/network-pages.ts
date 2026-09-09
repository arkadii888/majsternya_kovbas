export type NetworkPage = {
  href: string;
  label: string;
  description: string;
};

export const networkPages: NetworkPage[] = [
  {
    href: "/network/karta",
    label: "Карта",
    description: "Інтерактивна карта з розташуванням усіх магазинів мережі.",
  },
  {
    href: "/network/spysok-mahazyniv",
    label: "Список магазинів",
    description: "Актуальний перелік магазинів «Майстерня Ковбас» з адресами та графіком.",
  },
  {
    href: "/network/misty",
    label: "Міста",
    description: "Міста, де представлена наша мережа.",
  },
];
