import Image from "next/image";
import Threads from "@/components/ui/threads";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ClientGeminiBlock from "./client-gemini-block";

export default function Hero() {
  const { scrollY } = useScroll();
  const grokSectionY = useTransform(scrollY, [0, 800], [200, -50]);
  const grokSectionScale = useTransform(scrollY, [0, 400], [0.8, 1]);

  return (
    <>
      <section className="h-[115vh] relative overflow-hidden">
        <div className="absolute inset-0 z-10">
        <Threads
          color={[239/255, 242/255, 167/255]} // #F0F2A7
          amplitude={2}
          distance={0.6}
          enableMouseInteraction={false}
          height="100vh" // ou toute autre valeur souhaitée
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-darkblue via-mediumblue to-white"
      />
        <div className="container flex flex-col lg:flex-row justify-between lg:justify-evenly items-center gap-12 lg:gap-24 pt-[10vh]">
          {/* Text Content */}
          <div className="flex flex-col lg:col-span-7 z-20">
            <div className="mb-1 text-2xl md:text-3xl lg:text-4xl text-white/90 font-googletexte">
              Développeuse headless
            </div>
            <div className="mt-2 mb-12 text-3xl md:text-4xl lg:text-5xl text-white/90 font-googletitre font-medium">
              WordPress & Next.js
            </div>

            <p className="font-googletexte text-xl text-white/80 max-w-xl">
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
            {/*
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link href="/#grok-search-form" className="group">
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
        */}
          </div>

          {/* Hero Image */}
          <div className="relative lg:col-span-5 z-20">
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

      {/*Grok Search Section */}
      <section className="relative -mt-[55vh] xxl:mt-[63vh] w-2/3 mx-auto z-40">
          <ClientGeminiBlock />       
      </section>
    </>
  );
}
