import GrokSearchBlock from "@/components/client-grok-block";
import Image from "next/image";
import { Logos } from "./logos";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Hero() {
  const { scrollY } = useScroll();
  const grokSectionY = useTransform(scrollY, [0, 800], [200, -50]);
  const grokSectionScale = useTransform(scrollY, [0, 400], [0.8, 1]);

  return (
    <>
      <section className="h-full relative pb-24 pt-8 md:pb-24 overflow-hidden">
        <div className="h-[95vh] container flex flex-col lg:flex-row justify-between lg:justify-evenly items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex flex-col lg:col-span-7">
            <div className="mb-1 text-2xl md:text-3xl lg:text-4xl text-mediumblue font-googletexte">
              Développeuse headless
            </div>
            <div className="mt-2 mb-12 text-3xl md:text-4xl lg:text-5xl text-mediumblue font-googletitre font-medium">
              WordPress & Next.js
            </div>

            <p className="font-googletexte text-xl text-mediumblue/70 max-w-xl">
              Pour un WordPress <strong>ultra-rapide</strong>,{" "}
              <strong>moderne</strong> et <strong>flexible</strong> grâce au
              headless CMS.
            </p>

            {/* Logos Section */}
            <Logos className="mt-8 mx-0 grid gap-8" />
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

              <div className="absolute -right-3 bottom-1/4 bg-white py-2 px-4 rounded-full shadow-lg animate-float-delayed">
                <span className="text-sm font-medium text-black">
                  8+ ans d'expérience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Grok Search Section */}
      <section className="relative bg-darkblue">
        <motion.div
          id="grok-search-form"
          className="flex flex-col gap-4 w-3/4 -mt-32 mx-auto px-6 pb-12"
          style={{ y: grokSectionY, scale: grokSectionScale }}
          initial={{ opacity: 0, y: 200, scale: 0.5, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <GrokSearchBlock />
        </motion.div>
      </section>
    </>
  );
}
