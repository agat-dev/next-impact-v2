import { Button } from "@/components/ui/button";
import { BorderBeamEffect } from "@/components/ui/border-beam";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Logos } from "./logos";

export default function Hero() {
  return (
    <section className="h-full relative pt-12 pb-24 md:pt-24 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-brand-700/30 rounded-full blur-[100px]"></div>

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-8 lg:col-span-7">
          <span className="w-max inline-flex items-center px-3 py-1 text-xs font-googletexte font-medium uppercase rounded-full bg-white text-mediumblue/60 tracking-wider">
            services et conseil
          </span>

            <h1 className="tracking-tighter">
            <div className="text-2xl md:text-3xl lg:text-4xl text-regularblue font-googletexte">Développeuse</div>
            <div className="mt-4 text-3xl md:text-4xl lg:text-5xl text-regularblue font-googletitre font-medium">Next.js & WordPress</div> 
            </h1>

          <p className="font-googletexte text-2xl text-regularblue/70 max-w-xl">
            Pour un site web moderne et performant en conservant la simplicité de
            WordPress
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link href="/cms-headless" className="group">
              <Button
                size="lg"
                className="relative overflow-hidden rounded-full text-lg font-googletitre border-blue-100/40"
              >
                Choisir le headless ?
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <BorderBeamEffect />
              </Button>
            </Link>
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
              <span className="text-sm font-medium text-black">
                8+ ans d'expérience
              </span>
            </div>
          </div>
        </div>
      </div>

      <Logos className="mt-16 max-w-6xl mx-auto grid gap-8" />
    </section>
  );
}
