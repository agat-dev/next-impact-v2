import { Button } from "@/components/ui/button"
import { BorderBeamEffect } from "@/components/ui/border-beam"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function Hero() {
    return (
    <section className="relative pt-12 pb-24 md:pt-24 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-brand-700/30 rounded-full blur-[100px]"></div>

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-8 lg:col-span-7">
          <span className="w-max inline-flex items-center px-3 py-1 text-xs font-adobetext font-medium uppercase rounded-full bg-white text-mediumblue/60 tracking-wider">
            services et conseil
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
           Sites web & Apps<br /><span className="font-adobetext md:text-5xl text-4xl text-regularblue/80">WordPress et Headless</span>
          </h1>
          
          <p className="font-adobetext text-xl text-regularblue/70 max-w-xl">
            Développeuse full-stack et consultante spécialisée en site web corporate WordPress et applications web WordPress Headless.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link href="#services" className="group">
            <Button 
              size="lg" 
              variant="outline"
              className="relative overflow-hidden rounded-full text-md font-googletitre border-blue-100/40"
            >
              Mes services
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <BorderBeamEffect />
            </Button>
            </Link>
            <Link href="https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress?month=2025-06" target="_blank" className="group">
            <Button 
              size="lg" 
              variant="outline" 
              className="relative overflow-hidden rounded-full text-md font-googletitre border-blue-100/40"
            >
              Me contacter
              <BorderBeamEffect />
            </Button>
            </Link>
          </div>
          
          {/* Social proof */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm font-regular  text-lightblue mb-4">Entreprises qui me font confiance :</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-lg font-adobetitre text-regularblue/80">SOWEE</div>
              <div className="text-lg font-adobetitre text-regularblue/80">PRODITEC</div>
              <div className="text-lg font-adobetitre text-regularblue/80">INFRALLIANCE</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden aspect-square max-w-md mx-auto">
            {/* Placeholder for profile image - replace with actual image */}
            <div className="bg-gradient-to-br from-brand-400/80 to-brand-600/80 w-full h-full flex items-center justify-center">
              <Image
                src="/img/avatar.png" // Replace with your image path
                alt="Profile"
                className="bg-white object-cover w-full h-full rounded-xl"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                />
            </div>
            
            {/* Floating badges */}
            <div className="absolute left-6 top-6 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2 animate-float">
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium text-black">Disponible</span>
            </div>
            
            <div className="absolute -right-3 bottom-1/4 bg-white py-2 px-4 rounded-full shadow-lg animate-float-delayed">
              <span className="text-sm font-medium text-black">8+ ans d'expérience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}