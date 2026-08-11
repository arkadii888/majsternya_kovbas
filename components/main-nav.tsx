"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const routes = [
  { href: "/", label: "Головна" },
  { href: "/catalog", label: "Каталог продукції" },
  { href: "/network", label: "Наша мережа" },
  { href: "/master-card", label: "Карта Майстра" },
  { href: "/production", label: "Про виробництво" },
  { href: "/news", label: "Акції та новини" },
  { href: "/contacts", label: "Контакти" },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex w-full items-center justify-between md:justify-center">

      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-2 justify-center">
            {routes.map((route) => (
              <NavigationMenuItem key={route.href}>
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex w-full items-center justify-between md:hidden">
        <span className="text-lg font-bold">Майстерня Ковбас</span>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Відкрити меню</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">Навігаційне меню</SheetTitle>
            <nav className="mt-8 flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
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
