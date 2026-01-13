"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
// import { ArrowTopRightIcon } from "@/components/icons/arrow-top-right-icon";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement | null>(null);
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
    <section className="relative my-48 py-24 bg-white/5 backdrop-blur-lg border border-white/10 mb-12 px-4 md:px-8 lg:px-16">
      <div className="pb-24">
        <h2 className="text-4xl tracking-tight text-center font-medium text-white mb-2">
            WordPress Headless : quelques explications ?
        </h2>
        <p className="font-normal text-lg text-center text-white/80">Un site combinant performance et le back-office le plus utilisé.</p>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="absolute inset-0 grid items-center pt-12 z-[100] overflow-y-auto">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[80%] h-max max-h-[80vh] overflow-y-auto flex flex-row bg-white dark:bg-neutral-900 sm:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-regularblue dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
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
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-12">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-extralightblue hover:bg-extralightblue/90 backdrop-blur-lg rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-full w-40 md:h-24 md:w-24 rounded-lg object-cover object-top hover:blur-sm transition-all duration-300"
                />
              </motion.div>
              <div className="flex flex-col gap-2 items-center md:items-start justify-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-darkblue text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="px-4 pt-4 text-sm flex items-center gap-2"
          >
            <ArrowTopRightIcon />
          </motion.button>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export const ArrowTopRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#021373" strokeWidth="2" className="inline-block">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
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
    description: "",
    title: "Qu'est ce que WordPress Headless ?",
    src: "/icons/database-icon.svg",
    ctaText: "",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Le "Headless" (ou "sans tête") est une manière moderne de concevoir un site web en séparant totalement deux éléments qui, auparavant, étaient soudés ensemble:
           <ul> 
            <li>Le centre de gestion : C’est l’espace privé où votre équipe saisit les textes et télécharge les images3333. Dans cette architecture, son seul rôle est de stocker et d'organiser l'information de manière "pure", sans s'occuper de l'apparence
            </li>
            <li>L’interface de consultation : C’est la partie visible par vos clients (votre site, votre application mobile)5. Elle est construite de façon indépendante et va "piocher" les informations dans le centre de gestion via un connecteur numérique.
            </li>
          </ul>
          Le principe clé : Au lieu d'avoir un outil rigide qui fait tout, vous avez deux systèmes spécialisés qui communiquent entre eux. Cela permet de changer le design de votre site sans jamais toucher à vos données, ou de diffuser le même contenu sur plusieurs écrans différents simultanément.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Pourquoi choisir le Headless ?",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>
            Opter pour WordPress en mode Headless permet de combiner la puissance de l'outil de gestion le plus utilisé au monde avec les performances technologiques de demain.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Conservation de l'admin WordPress :</strong> Vos équipes conservent leurs habitudes de travail sur une interface familière, garantissant une adoption immédiate et sans coût de formation supplémentaire.
            </li>
            <li>
              <strong>Liberté de design :</strong> Vous bénéficiez d'une interface sur mesure, totalement libre, sans les limites ni la lourdeur des "page builders" (constructeurs de pages) classiques qui ralentissent souvent les sites traditionnels.
            </li>
            <li>
              <strong>Vitesse fulgurante :</strong> En séparant l'affichage de la gestion, le chargement des pages devient instantané, garantissant des indicateurs de performance (Core Web Vitals) au vert, ce qui est crucial pour retenir vos visiteurs.
            </li>
            <li>
              <strong>SEO de haut niveau :</strong> Grâce aux techniques de rendu moderne (statique ou côté serveur), les moteurs de recherche indexent votre contenu plus efficacement, boostant votre visibilité naturelle.
            </li>
            <li>
              <strong>Sécurité totale :</strong> Votre base de données devient invisible et inaccessible depuis l'interface publique, rendant les attaques de bots WordPress traditionnelles impossibles
            </li>
          </ul>
        </>
      );
    },
  },

  {
    description: "",
    title: "Pour quels projets ?",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Quelles différences avec WordPress ?",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
];
