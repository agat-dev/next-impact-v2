import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
<header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="MarketingDocs" width={64} height={64} />
          </Link>
          <nav className="hidden md:flex gap-6">        
            <Link href="/audit" className="text-lg font-regular">
              Diagnostics
            </Link>            
            <Link href="/documentation" className="text-lg font-regular">
              Ressources
            </Link>   
          </nav>
          <div className='flex gap-4'>
          <Button className="hidden md:flex">
            <Link href="/services" className="text-lg font-regular">Services</Link>
          </Button> 
          </div>
        </div>
      </header>
  )
}