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
          <NavigationMenuTrigger className='font-googletitre text-lg'>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none gap-8 flex-col justify-end rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <Image src="/logo.png" alt="MarketingDocs" width={64} height={64} />
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services" title="Conseil projet">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/services" title="Création de sites web">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-googletitre text-lg'>Diagnostics gratuits</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex p-6 md:w-[600px] lg:w-[800px] gap-3">
              <li className="row-span-4 basis-1/3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none gap-8 flex-col justify-end rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <Image src="/logo.png" alt="MarketingDocs" width={64} height={64} />
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className='basis-1/3'>
              <ListItem href="/audit" title="Audit global">
                How to install dependencies and structure your app.
              </ListItem>              
              <ListItem href="/audit" title="Audit SEO">
                How to install dependencies and structure your app.
              </ListItem>
              </div> 
              <div className='basis-1/3'>             
              <ListItem href="/quizz" title="Générer son cahier des charges">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>              
              <ListItem href="/quizz" title="Choisir son CMS">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>        
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-googletitre text-lg'>Centre de ressources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid h-full w-[600px] gap-3 p-4 md:w-[800px] md:grid-cols-3 lg:w-[800px]">
              {components.map((component) => (
                <li>
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className='h-24'
                >
                  <p className='h-20 text-sm leading-tight text-muted-foreground'>
                  {component.description}
                  </p>
                </ListItem>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-regular leading-none">{title}</div>
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
          <div className='basis-1/6'>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="Next Impact Digital" width={64} height={64} />
          </Link>
          </div>
          <div className='basis-4/6 flex justify-center'>
          <NavBar />
          </div>
          <div className='basis-1/6 flex justify-end'>
          <Button className="hidden md:flex gap-1 rounded-lg bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
            <Link href="/services" className="text-lg font-regular">Rendez-vous conseil</Link>
          </Button> 
          </div>
        </div>
      </header>
  )
}