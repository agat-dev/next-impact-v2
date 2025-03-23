import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
<header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="MarketingDocs" width={64} height={64} />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/documentation" className="text-sm font-medium hover:underline underline-offset-4">
              S'informer
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Être conseillé
            </Link>
            <Link href="/freelancers" className="text-sm font-medium hover:underline underline-offset-4">
              Trouver des prestataires
            </Link>
          </nav>
        </div>
      </header>
  )
}