"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import logoPic from "../public/logo.png"
import { ChevronDown, Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { catalogCategories } from "@/lib/catalog-categories"
import { masterCardPages } from "@/lib/master-card-pages"
import { networkPages } from "@/lib/network-pages"

type MenuItem = { href: string; label: string }

type MenuGroup = {
  id: string
  trigger: string
  items: MenuItem[]
}

const groups: MenuGroup[] = [
  {
    id: "catalog",
    trigger: "Каталог продукції",
    items: catalogCategories,
  },
  {
    id: "network",
    trigger: "Наша мережа",
    items: networkPages,
  },
  {
    id: "master-card",
    trigger: "Карта Майстра",
    items: masterCardPages,
  },
]

const routes = [
  { href: "/production", label: "Про виробництво" },
  { href: "/news", label: "Акції та новини" },
  { href: "/contacts", label: "Контакти" },
]

function NavList({ group }: { group: MenuGroup }) {
  return (
    <ul className="flex flex-col gap-1">
      {group.items.map((item) => (
        <li key={item.href}>
          <NavigationMenuLink
            href={item.href}
            closeOnClick
            className="cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground"
          >
            {item.label}
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  )
}

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const closeMobileMenu = () => setIsOpen(false)
  const toggleGroup = (id: string) =>
    setOpenGroup((current) => (current === id ? null : id))

  return (
    <div className="relative flex w-full items-center justify-end md:justify-between">
      <Link
        href="/"
        className="absolute left-1/2 flex shrink-0 -translate-x-1/2 items-center md:static md:translate-x-0"
      >
        <Image
          src={logoPic}
          alt="Майстерня Ковбас"
          width={280}
          height={96}
          priority
          className="h-12 w-auto object-contain transition-all md:h-16"
        />
      </Link>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap items-center justify-end gap-1">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Головна
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {groups.map((group) => (
              <NavigationMenuItem key={group.id}>
                <NavigationMenuTrigger>{group.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent className="w-64 p-2">
                  <NavList group={group} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            {routes.map((route) => (
              <NavigationMenuItem key={route.href}>
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Відкрити меню</span>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">Навігаційне меню</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex w-full items-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground"
              >
                Головна
              </Link>

              {groups.map((group) => (
                <div key={group.id}>
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.id)}
                    aria-expanded={openGroup === group.id}
                    className="flex w-full items-center justify-between rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {group.trigger}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openGroup === group.id ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {openGroup === group.id && (
                    <ul className="ml-3 mt-1 flex flex-col gap-1 border-l pl-3">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block rounded-md px-4 py-2 text-base transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={closeMobileMenu}
                  className="flex w-full items-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
