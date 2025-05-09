import Link from "next/link"


export default function Footer() {
    return (
    <footer className="w-full border-t py-6 md:py-0">
    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        © 2025 MarketingDocs. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:gap-6">
        <Link
          href="/terms"
          className="text-sm font-medium hover:underline underline-offset-4">
          Terms
        </Link>
        <Link
          href="/privacy"
          className="text-sm font-medium hover:underline underline-offset-4">
          Privacy
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
    </div>
  </footer>
    )
}