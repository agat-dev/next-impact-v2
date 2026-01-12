import Image from "next/image";
import { useScroll } from "framer-motion";
import ClientGeminiBlock from "./client-gemini-block";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowLeftRightIcon, ArrowRightLeftIcon, ArrowRightSquare, LucideArrowUpRight, PresentationIcon } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  return (
    <>
      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Background SVG */}
        <div className="fixed inset-0 z-0">
          <img
            src="/img/chipset-tech-background.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container flex flex-col lg:flex-row justify-between lg:justify-evenly items-end gap-12 lg:gap-24 px-4 md:px-6 relative">
          {/* Text Content */}
          <div className="flex flex-col lg:col-span-7 bg-mediumblue/70 backdrop-blur-md border border-white/20 p-6 md:p-10 rounded-2xl mt-12 lg:mt-0">
            <div className="mb-1 text-2xl md:text-3xl lg:text-4xl text-white/90 font-googletexte">
              Développeuse headless
            </div>
            <div className="mt-2 mb-4 md:mb-12 text-3xl md:text-4xl lg:text-5xl text-coral font-googletitre font-medium">
              WordPress & Next.js
            </div>

            <p className="font-googletexte md:text-xl text-white/80 max-w-xl">
              Pour un WordPress ultra-rapide, moderne et flexible grâce au
              headless CMS.
            </p>

            <div className="flex items-center gap-6 mt-6">
              <Image
                src="/img/logo-wordpress-blanc.png"
                alt="Logo WordPress"
                width={70}
                height={40}
              />
              <Image
                src="/img/logo-nextjs-blanc.png"
                alt="Logo Next.js"
                width={170}
                height={80}
              />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row content-start justify-start gap-4">
              <Button className="mx-0 inline-flex bg-lightyellow py-1 px-6 rounded-2xl shadow-lg hover:bg-lightyellow/80 transition duration-300 ease-in">
                <Link
                  href="/demo"
                  className="gap-2 text-darkblue font-googletitre font-semibold text-xl"
                >
                  Démo Headless
                </Link>
                  <LucideArrowUpRight className="w-8 h-8 text-darkblue" />
              </Button>
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
                <span className="text-sm font-medium text-black">
                  Disponible
                </span>
              </div>

              <div className="absolute right-4 bottom-12 bg-white py-2 px-4 rounded-full shadow-lg animate-float-delayed">
                <span className="text-sm font-medium text-black">
                  8+ ans d'expérience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Gemini Search Section */}
      <section className="bg-white/5 w-3/4 mx-auto flex flex-col gap-8 backdrop-blur-xl border border-white/20 rounded-xl p-12">
        {/* Background image for GeminiBlock container
          <img 
            src="/illustrations/data-flow-animated.svg" 
            alt="Arrière-plan Gemini" 
            className="absolute left-[65%] top-16 inset-0 h-full object-cover z-0 pointer-events-none select-none opacity-20" 
            aria-hidden="true"
          /> */}
        <h2 className="font-googletexte font-medium text-3xl lg:text-4xl text-white text-center mb-2">
          Passer votre site en WordPress{" "}
          <span className="font-googletitre text-coral text-5xl font-medium">
            {" "}
            headless
          </span>
          <div>maintenant ?</div>
        </h2>
        <p className="text-white/70 text-2xl text-center mb-4">
          Audit gratuit détaillé en 10 secondes
        </p>
        <div className="relative h-full overflow-hidden">
          <div className="relative flex items-center justify-center z-10 p-6">
            <ClientGeminiBlock />
          </div>
        </div>
      </section>
    </>
  );
}
