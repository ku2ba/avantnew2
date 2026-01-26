"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 text-gray-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function MainNavigation() {
  return (
    <nav className="flex items-center justify-center w-full px-3 sm:px-6 py-3 sm:py-4 border-b bg-white relative z-40">
      <div className="absolute left-3 sm:left-6">
        <Image
          src="/avant_logo_text.png"
          alt="Avant Logo"
          width={150}
          height={40}
          className="h-auto w-24 sm:w-[150px]"
        />
      </div>

      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex-col md:flex-row flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link 
                href="/" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-sm"
                )}
              >
                Главная
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-sm"
            >
              Физ лицам
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white border shadow-lg">
              <ul className="grid w-[280px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                <ListItem
                  href="/fiz-lica/priemka-kvartir"
                  title="Приемка квартир"
                />
                <ListItem
                  href="/fiz-lica/vzyskanie-s-zastrojshchika"
                  title="Взыскание с застройщика"
                />
                <ListItem
                  href="/fiz-lica/pomoshch-v-sfere-kriptovalyut"
                  title="Помощь в сфере криптовалют"
                />
                <ListItem
                  href="/fiz-lica/bankrotstvo"
                  title="Банкротство"
                />
                <ListItem
                  href="/fiz-lica/trudovye-raznoglasiya"
                  title="Трудовые разногласия"
                />
                <ListItem
                  href="/fiz-lica/stroitelno-tehnicheskaya-ekspertiza"
                  title="Строительно-техническая экспертиза жилых и коммерческих помещений"
                />
                <ListItem
                  href="/fiz-lica/vzyskanie-zadolzhennostej"
                  title="Взыскание задолженностей"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-sm"
            >
              Юр лицам
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white border shadow-lg">
              <ul className="grid w-[280px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                <ListItem href="/jur-lica/usluga-1" title="Услуга 1" />
                <ListItem href="/jur-lica/usluga-2" title="Услуга 2" />
                <ListItem href="/jur-lica/usluga-3" title="Услуга 3" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link 
                href="/o-kompanii" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-sm"
                )}
              >
                О компании
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link 
                href="/kontakty" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-sm"
                )}
              >
                Контакты
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link 
                href="/blog" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-sm"
                )}
              >
                Блог
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </nav>
  )
}
