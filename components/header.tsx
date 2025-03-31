import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
<header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className='basis-1/6'>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="MarketingDocs" width={64} height={64} />
          </Link>
          </div>
          <div className='basis-4/6 flex justify-center'>
          <nav className="hidden md:flex gap-6">   
                     
          <Link href="/documentation" className="text-xl font-regular">
              Ressources
            </Link>       
            <Link href="/audit" className="text-xl font-regular">
              Tests en ligne
            </Link>                  
            <Link href="/quizz" className="text-xl font-regular">
              Conseils personnalisé
            </Link>      
          </nav>
          </div>
          <div className='basis-1/6 flex justify-end'>
          <Button className="hidden md:flex">
            <Link href="/services" className="text-xl font-regular">Services</Link>
          </Button> 
          </div>
        </div>
      </header>
  )
}