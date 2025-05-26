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
                    <Image src="/img/logo-small.png" alt="Logo Next Impact Digital" width={48} height={48} />
                    <p className="text-sm leading-tight">
                      Des services de création et refonte de sites web conçus avec et pour vous.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services/creation-refonte" title="Création & Refonte" className='h-24'>
                <p className='text-xs'>Création de sites corporate ou associatifs</p>
              </ListItem>
              <ListItem href="/services" title="Conseil" className='h-24'>
                <p className='text-xs'>Accompagnement dans la réalisation de votre projet web</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>               
        <NavigationMenuItem>
          <Link href="/demo" className='font-googletitre text-regularblue text-lg font-medium px-6'>Démo</Link>
        </NavigationMenuItem>     
        <NavigationMenuItem>
          <Link href="/etudes-de-cas" className='font-googletitre text-regularblue text-lg font-medium px-6'>Réalisations</Link>
        </NavigationMenuItem>      
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-googletitre text-regularblue text-lg'>Outils</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex p-6 md:w-[600px] lg:w-[800px] gap-3">
            <li className="basis-1/3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none gap-8 flex-col justify-end rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <Image src="/img/logo-small.png" alt="Logo Next Impact Digital" width={48} height={48} />
                    <p className="text-sm leading-tight">
                      Des outils en ligne pour vous aider à décider et à formaliser votre projet web.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className='basis-1/3'>
              <ListItem href="/audit" title="Audit de site web" className='h-28'>
              <p className='text-xs'>Outil en ligne pour tester globalement la qualité de votre site web.</p>
              </ListItem>                
              <ListItem href="/cms-headless" title="WordPress CMS ou Headless ?" className='h-28'>
              <p className='text-xs'>Quiz pour vous aider à choisir le CMS le plus adapté à votre projet.</p>
              </ListItem>      
              </div> 
              <div className='basis-1/3'>             
              <ListItem href="/cahier-des-charges" title="Générateur de cahier des charges" className='h-28'>
              <p className='text-xs'>Outil interactif pour vous guider dans la rédaction d'un cahier des charges.</p>
              </ListItem>            
              <ListItem href="/simulateur-tarifs" title="Simulateur du budget" className='h-28'>
              <p className='text-xs'>Outil interactif pour estimer le budget de votre projet web.</p>
              </ListItem>
              </div>
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
          <Button className="hidden md:flex gap-1 rounded-full px-6 bg-regularblue hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
            <Link href="/services" className="text-base text-white hover:text-white font-regular">Prendre RDV</Link>
          </Button> 
          </div>
        </div>
      </header>
  )
}