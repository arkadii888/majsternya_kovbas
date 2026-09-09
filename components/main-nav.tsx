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

const routes = [
  { href: "/production", label: "Про виробництво" },
  { href: "/news", label: "Акції та новини" },
  { href: "/contacts", label: "Контакти" },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [isMasterCardOpen, setIsMasterCardOpen] = useState(false)
  const [isNetworkOpen, setIsNetworkOpen] = useState(false)

  const closeMobileMenu = () => setIsOpen(false)

  return (
    <div className="flex w-full items-center justify-end md:justify-between relative">

      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center shrink-0"
      >
        <Image
          src={logoPic}
          alt="Майстерня Ковбас"
          width={280}
          height={96}
          priority
          className="h-12 md:h-16 w-auto object-contain transition-all"
        />
      </Link>

      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-1 justify-end">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Каталог продукції
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-64 p-2">
                <ul className="flex flex-col">
                  <li className="mb-1 border-b px-3 py-2">
                    <Link
                      href="/catalog"
                      className="text-sm font-semibold text-muted-foreground"
                    >
                      Всі категорії
                    </Link>
                  </li>
                  {catalogCategories.map((category) => (
                    <li key={category.href}>
                      <Link
                        href={category.href}
                        className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Головна
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Наша мережа
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-64 p-2">
                <ul className="flex flex-col">
                  <li className="mb-1 border-b px-3 py-2">
                    <Link
                      href="/network"
                      className="text-sm font-semibold text-muted-foreground"
                    >
                      Знайти магазин
                    </Link>
                  </li>
                  {networkPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Карта Майстра
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-64 p-2">
                <ul className="flex flex-col">
                  <li className="mb-1 border-b px-3 py-2">
                    <Link
                      href="/master-card"
                      className="text-sm font-semibold text-muted-foreground"
                    >
                      Програма лояльності
                    </Link>
                  </li>
                  {masterCardPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
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

      <div className="flex md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Відкрити меню</span>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">Навігаційне меню</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">
              <div>
                <button
                  type="button"
                  onClick={() => setIsCatalogOpen((open) => !open)}
                  className="flex w-full items-center justify-between rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Каталог продукції
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isCatalogOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isCatalogOpen && (
                  <ul className="mt-1 ml-3 flex flex-col gap-1 border-l pl-3">
                    <li>
                      <Link
                        href="/catalog"
                        onClick={closeMobileMenu}
                        className="block rounded-md px-4 py-2 text-base font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        Всі категорії
                      </Link>
                    </li>
                    {catalogCategories.map((category) => (
                      <li key={category.href}>
                        <Link
                          href={category.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-4 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {category.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setIsNetworkOpen((open) => !open)}
                  className="flex w-full items-center justify-between rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Наша мережа
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isNetworkOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isNetworkOpen && (
                  <ul className="mt-1 ml-3 flex flex-col gap-1 border-l pl-3">
                    <li>
                      <Link
                        href="/network"
                        onClick={closeMobileMenu}
                        className="block rounded-md px-4 py-2 text-base font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        Знайти магазин
                      </Link>
                    </li>
                    {networkPages.map((page) => (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-4 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setIsMasterCardOpen((open) => !open)}
                  className="flex w-full items-center justify-between rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Карта Майстра
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isMasterCardOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isMasterCardOpen && (
                  <ul className="mt-1 ml-3 flex flex-col gap-1 border-l pl-3">
                    <li>
                      <Link
                        href="/master-card"
                        onClick={closeMobileMenu}
                        className="block rounded-md px-4 py-2 text-base font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        Програма лояльності
                      </Link>
                    </li>
                    {masterCardPages.map((page) => (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-4 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={closeMobileMenu}
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
