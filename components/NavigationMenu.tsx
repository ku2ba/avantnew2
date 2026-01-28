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
    <nav className="sticky top-[73px] sm:top-[81px] flex items-center justify-center w-full px-3 sm:px-6 py-3 sm:py-4 border-b bg-white relative z-40">
      {/* Логотип показываем только на десктопе, чтобы не мешал меню на мобилке */}
      <div className="absolute left-3 sm:left-6 hidden md:block">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/avant_logo_text.png"
            alt="Avant Logo"
            width={150}
            height={40}
            className="h-auto w-24 sm:w-[150px]"
          />
        </Link>
      </div>

      <NavigationMenu className="mx-auto max-w-full md:pl-[170px]">
        {/*
          На мобильных: элементы меню в сетке 2 колонки, равномерно распределены.
          На десктопе: остаются в одну строку, выровненные по центру.
        */}
        <NavigationMenuList className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:justify-center gap-x-2 gap-y-2 sm:gap-x-4 md:gap-x-2 w-full md:w-auto">
          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink asChild>
              <Link 
                href="/" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-xs sm:text-sm whitespace-nowrap w-full text-center"
                )}
              >
                Главная
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink asChild>
              <Link 
                href="/priemka-kvartir-ekaterinburg" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-xs sm:text-sm whitespace-nowrap w-full text-center"
                )}
              >
                Приемка
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuTrigger 
              className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-xs sm:text-sm whitespace-nowrap w-full text-center"
            >
              Юр. Услуги
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white border shadow-lg">
              <ul className="grid w-[280px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                <ListItem
                  href="/yurist-po-nedvizhimosti"
                  title="Споры с застройщиком"
                />
                <ListItem
                  href="/example"
                  title="Помощь в сфере криптовалют"
                />
                <ListItem
                  href="/example"
                  title="Экспертиза после потопа пожара"
                />
                <ListItem
                  href="/example"
                  title="Взыскание задолженности"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink asChild>
              <Link 
                href="/example" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-xs sm:text-sm whitespace-nowrap w-full text-center"
                )}
              >
                Экспертиза
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink asChild>
              <Link 
                href="/o-kompanii" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-xs sm:text-sm whitespace-nowrap w-full text-center"
                )}
              >
                О компании
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink asChild>
              <Link 
                href="/contacts" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-xs sm:text-sm whitespace-nowrap w-full text-center"
                )}
              >
                Контакты
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink asChild>
              <Link 
                href="/blog" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-gray-900 font-montserrat text-xs sm:text-sm whitespace-nowrap w-full text-center"
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
