import Image from "next/image";
import { useScroll } from "framer-motion";
import ClientGeminiBlock from "./client-gemini-block";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowDownLeft,
  ArrowLeftRightIcon,
  ArrowRightLeftIcon,
  ArrowRightSquare,
  LucideArrowUpRight,
  PresentationIcon,
} from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  return (
    <>
      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Background SVG */}
        <div className="fixed inset-0 z-0">
          <img
            src="/img/chipset-background-light.svg"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="container flex flex-col lg:flex-row justify-between lg:justify-evenly items-center gap-12 lg:gap-24 px-4 md:px-6 relative">
          {/* Text Content */}
          <div className="flex flex-col lg:col-span-7 bg-white backdrop-blur-md border border-mediumblue/20 p-6 md:p-10 rounded-2xl mt-12 lg:mt-0">
            <div className="mb-1 text-2xl md:text-3xl lg:text-4xl text-mediumblue/80 font-googletexte">
              Développeuse WordPress
            </div>
            <div className="mt-2 text-3xl md:text-4xl lg:text-5xl text-coral font-googletitre font-medium">
               Headless
            </div>        
            <p className="mt-16 font-googletexte md:text-xl text-mediumblue/80 max-w-xl">
              Pour un WordPress ultra-rapide, moderne et flexible grâce au
              headless CMS.
            </p>


            <p className="mt-4 mb-4 font-googletitre font-semibold text-mediumblue text-lg">Prêt à passer en headless ?</p>
            <div className="flex flex-col sm:flex-row content-start justify-start gap-4">
              <Button className="mx-0 inline-flex bg-white border-2 border-lightyellow py-1 px-6 rounded-2xl hover:border-lightyellow/80 transition duration-300 ease-in">
                <Link
                  href="/demo"
                  className="gap-2 text-darkblue font-googletitre font-semibold text-lg"
                >
                  Démo
                </Link>
                <LucideArrowUpRight className="w-8 h-8 text-darkblue" />
              </Button>
              <Button className="mx-0 inline-flex bg-white border-2 border-coral py-1 px-6 rounded-2xl hover:border-coral/80 transition duration-300 ease-in">
                <Link
                  href="#audit"
                  className="gap-2 text-darkblue font-googletitre font-semibold text-lg"
                >
                  Audit 
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
            <div className="mt-5 flex items-center justify-start gap-6">
              <Image
                src="/img/logo-wordpress-small.png"
                alt="Logo WordPress"
                width={45}
                height={60}
              />
              <Image
                src="/img/logo-nextjs.png"
                alt="Logo Next.js"
                width={80}
                height={80}
              />
              <Image
                src="/img/logo-astro.png"
                alt="Logo Astro"
                width={90}
                height={80}
                className="mt-1.5"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Gemini Search Section */}
      <section id="audit" className="bg-white w-3/4 max-w-4xl mx-auto flex flex-col gap-8 backdrop-blur-xl border border-coral rounded-xl p-12 pt-20">

          <h2 className="text-center font-googletitre text-mediumblue/80 text-5xl font-medium">
            {" "}
             Faut-il migrer en headless ?
          <div className="font-googletexte text-2xl lg:text-3xl text-mediumblue/80 font-regular text-center mt-6 mb-2"><span className="text-3xl font-googletexte text-coral font-medium">Audit gratuit</span> en 10 secondes</div>
          </h2>
        <p className="max-w-3xl mx-auto text-mediumblue/70 text-xl text-center mb-4">
          Analysez votre site WordPress et recevez un rapport complet avec des recommandations personnalisées pour une migration en headless CMS.
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
