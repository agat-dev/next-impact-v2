"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Marketing Digital",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "SEO",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "CMS",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "E-commerce",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Headless CMS",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Développement custom",
    href: "/docs/primitives/tooltip",
    description:
      "receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className='font-googletitre text-regularblue text-lg font-medium px-6'>Accueil</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-googletitre text-regularblue text-lg'>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none gap-8 flex-col justify-end rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <Image src="/img/logo.png" alt="MarketingDocs" width={64} height={64} />
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services" title="Création de site web">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/services" title="Conseil">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-googletitre text-regularblue text-lg'>Outils</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex p-6 md:w-[600px] lg:w-[800px] gap-3">
              <div className='basis-1/2'>
              <ListItem href="/audit" title="Audit de site web">
                How to install dependencies and structure your app.
              </ListItem>                
              <ListItem href="/quizz" title="Choix du CMS">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>      
              </div> 
              <div className='basis-1/2'>             
              <ListItem href="/cahier-des-charges" title="Rédaction du cahier des charges">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>            
              <ListItem href="/simulateur-tarifs" title="Estimation du budget">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> 
        <NavigationMenuItem>
          <Link href="/documentation" className='font-googletitre text-regularblue text-lg font-medium px-6'>Ressources</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" className='font-googletitre text-regularblue text-lg font-medium px-6'>Blog</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-lightblue/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-regular text-regularblue leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



export default function Header() {
  return (
<header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className='basis-1/6 pt-2'>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/img/logo-small.png" alt="Next Impact Digital" width={40} height={40} />
          </Link>
          </div>
          <div className='basis-4/6 flex justify-center'>
          <NavBar />
          </div>
          <div className='basis-1/6 flex justify-end'>
          <Button className="hidden md:flex gap-1 rounded-full px-6 bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
            <Link href="/services" className="text-base font-regular">Prendre RDV</Link>
          </Button> 
          </div>
        </div>
      </header>
  )
}