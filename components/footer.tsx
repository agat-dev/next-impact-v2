import Link from "next/link";
import { Logos } from "./logos";


export default function Footer() {
    return (
    <footer className="w-full border-t py-6 md:py-0">
    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p className="text-center text-sm leading-loose text-meidumblue md:text-left">
        2025
      </p>
      <nav className="flex gap-4 sm:gap-6 mr-24">
        <Link
          href="/mentions-legales"
          className="text-sm font-medium hover:underline underline-offset-4">
          Mentions légales
        </Link>
      </nav>
    </div>
    <Logos /> 
  </footer>
    )
}