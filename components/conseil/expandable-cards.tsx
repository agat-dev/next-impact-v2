"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import LottieAnimation from "@/components/ui/lottie-animation";

export function ExpandableCardNIP() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-mediumblue/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[34rem] max-w-[90%] h-fit flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex flex-col justify-between items-start p-4">
                  <div className="w-full">
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      className="px-6 py-3 text-sm rounded-full font-medium bg-lightblue/10 text-regularblue hover:bg-lightblue/20 transition-colors duration-200 flex justify-self-end items-center gap-2"
                    >
                      {active.ctaText}
                    </motion.a>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-regularblue"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-regularblue/70 text-xs uppercase font-bold"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-regularblue text-sm pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-3xl mx-0 grid grid-cols-2 gap-20">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-white hover:bg-white/70 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row md:items-center md:justify-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                {/* Remplacement de l'image par Lottie */}
                <div className="rounded-lg object-contain object-top">
                  <LottieAnimation
                    key={`lottie-${card.title}-${id}`}
                    animationPath={card.lottie}
                    loop
                    width={60}
                    height={60}
                  />
                </div>
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="pt-1 font-regular text-xl text-regularblue text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${index}-${id}`}
                  className="text-darkblue/70 text-left text-xs"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Quizz",
    title: "WordPress CMS ou Headless ?",
    lottie: "/lotties/wordpress.json",
    ctaText: "Tester en ligne",
    ctaLink: "/cms-headless",
    content: () => (
      <p>
        Outil diagnostique en ligne gratuit qui analyse votre projet de site web
        dans ses aspects techniques, ergonomiques et marketing pour déterminer
        si la solution la plus appropriée est un WordPress natif ou un WordPress
        Headless.
      </p>
    ),
  },
  {
    description: "Test en ligne",
    title: "Auditer mon site web",
    lottie: "/lotties/scan.json",
    ctaText: "Lancer l'audit",
    ctaLink: "/audit",
    content: () => (
      <p>
        Outil diagnostique complet en ligne et gratuit qui analyse en profondeur
        les aspects techniques, ergonomiques et marketing de votre site web.
        <br />
        <br />
        Sur la base de votre URL, il identifie rapidement l'ensemble des failles
        qui freinent sa visibilité et son efficacité.
      </p>
    ),
  },
  {
    description: "Générateur",
    title: "Rédiger mon cahier des charges",
    lottie: "/lotties/document.json",
    ctaText: "Commencer la rédaction",
    ctaLink: "/cahier-des-charges",
    content: () => (
      <p>
        Solution de génération de livrable gratuite et en ligne pour structurer
        et formaliser méthodiquement votre projet digital de leur conception à
        leur livraison <br />
        <br />
        En guidant l'utilisateur à travers des questions ciblées et
        personnalisables, il transforme vos besoins métiers en spécifications
        techniques précises, complètes et exploitables par tous les acteurs du
        projet.
      </p>
    ),
  },
  {
    description: "Quizz",
    title: "Quel tarif pour mon site web ?",
    lottie: "/lotties/cost-calculator.json",
    ctaText: "Lancer l'estimation",
    ctaLink: "/simulateur-tarifs",
    content: () => (
      <p>
        Simulateur en ligne et gratuit qui calcule instantanément le coût précis
        de votre projet digital en fonction de vos besoins, et du type de
        prestataire choisi.
        <br />
        <br />
        Cet outil stratégique aide les décideurs à optimiser leur budget en
        visualisant l'impact financier de chaque choix technique..
      </p>
    ),
  },
];
