import Link from "next/link";
import { Logos } from "./logos";
import { CTASection } from "./cta-section";


export default function Footer() {
    return (
    <footer className="w-full p-4 md:p-24 mt-24 bg-mediumblue/10 backdrop-blur-sm border-t border-white/10 space-y-8">
    {/* CTA Section */}
        <CTASection />   
    
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
  </footer>
    )
}