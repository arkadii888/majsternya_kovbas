import type { LucideIcon } from "lucide-react";
import { List, Map } from "lucide-react";

export type NetworkPage = {
  href: string;
  label: string;
  description: string;
  Icon: LucideIcon;
};

export const networkPages: NetworkPage[] = [
  {
    href: "/stores/map",
    label: "Карта",
    description: "Інтерактивна карта з розташуванням усіх магазинів мережі.",
    Icon: Map,
  },
  {
    href: "/stores/list",
    label: "Список магазинів",
    description: "Актуальний перелік магазинів «Майстерня Ковбас» з адресами та графіком.",
    Icon: List,
  },
];
