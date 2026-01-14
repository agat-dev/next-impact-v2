"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export function ExpandableCardDemo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative my-48 py-24 bg-regularblue backdrop-blur-lg border border-white/10 mb-12 px-4 md:px-8 lg:px-16">
      <div className="pb-24">
        <h2 className="font-googletexte text-4xl tracking-tight text-center text-white mb-2">
          WordPress Headless :{" "}
          <span className="font-googletitre text-coral text-5xl font-medium">
            quelques explications ?
          </span>
        </h2>
        <p className="font-normal text-lg text-center text-white/80">
          Un site combinant performance et le back-office le plus utilisé.
        </p>
      </div>
      <ul className="max-w-6xl mx-auto w-full flex flex-col gap-12">
        {cards.map((card, idx) => (
          <li key={card.title} className="w-full">
            <button
              className="w-full p-4 flex flex-col md:flex-row justify-between items-center bg-regularblue hover:bg-regularblue backdrop-blur-xl rounded-xl cursor-pointer focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`panel-${idx}`}
            >
              <div className="flex gap-4 flex-col md:flex-row w-full">
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-full w-40 md:h-24 md:w-24 rounded-lg object-cover object-top hover:blur-sm transition-all duration-300"
                />
                <div className="flex flex-col items-center md:items-start justify-center flex-1">
                  <h3 className="font-medium text-white/80 text-center md:text-left text-3xl">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-base text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  id={`panel-${idx}`}
                  initial={{ height: 0, opacity: 0, scale: 0.98 }}
                  animate={{ height: "auto", opacity: 1, scale: 1 }}
                  exit={{ height: 0, opacity: 0, scale: 0.98 }}
                  transition={{
                    height: { duration: 0.35, ease: "easeInOut" },
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.25 },
                  }}
                  style={{ originY: 0.1 }}
                  className="overflow-hidden bg-extralightblue rounded-xl shadow-inner mt-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex flex-col md:flex-row p-6 gap-6">
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <div className="overflow-auto flex flex-col gap-4">
                          {typeof card.content === "function"
                            ? card.content()
                            : card.content}
                          {card.ctaText && card.ctaLink && (
                            <a
                              href={card.ctaLink}
                              className="mt-4 self-start inline-block px-5 py-1 rounded-2xl bg-coral text-lg text-white font-medium shadow hover:bg-coral/90 transition"
                            >
                              {card.ctaText}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const ArrowTopRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#021373"
    strokeWidth="2"
    className="inline-block"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M7 7h10v10"
    />
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
    description:
      "Comprendre les principes fondamentaux du Headless et comment cette architecture révolutionne la manière dont les sites web sont conçus et gérés.",
    title: "Fonctionnement du Headless",
    src: "/icons/scale-icon.svg",
    ctaText: "En savoir plus",
    ctaLink: "/wp-headless-fonctionnement",
    content: () => {
      return (
        <div className="flex flex-col gap-12">
          <div className="mb-2 text-lg">
            Le "Headless" (ou "sans tête") est une manière moderne de concevoir
            un site web en séparant totalement deux éléments qui, auparavant,
            étaient soudés ensemble :
          </div>
          <div className="flex items-center justify-center gap-6">
            {/* Carte Backoffice */}
            <div className="flex flex-col items-center bg-regularblue rounded-xl p-4 w-60 shadow-md">
              <img
                src="/icons/dashboard-icon.svg"
                alt="Backoffice"
                className="w-10 h-10 mb-2"
              />
              <span className="font-medium text-lightyellow font-googletitre text-2xl mb-1">
                Backoffice
              </span>
              <span className="text-base text-white/80 text-center">
                Gestion des contenus, médias, utilisateurs...
              </span>
            </div>
            {/* Icône plugin */}
            <img
              src="/icons/plugin-icon.svg"
              alt="Plugin"
              className="w-24 h-24"
            />
            {/* Carte Interface Visiteur */}
            <div className="flex flex-col items-center bg-mediumblue rounded-xl p-4 w-60 shadow-md">
              <img
                src="/icons/desktop-headless-icon.svg"
                alt="Interface web"
                className="w-10 h-10 mb-2"
              />
              <span className="font-medium text-lightyellow font-googletitre text-2xl mb-1">
                Interface web
              </span>
              <span className="text-base text-white/80 text-center">
                Site, application, affichage public...
              </span>
            </div>
          </div>
          <div className="text-lg">
            <div className="mb-2 font-medium text-regularblue font-googletitre text-3xl">
              Le principe clé
            </div>
            Au lieu d'avoir un outil rigide qui fait tout, vous avez deux
            systèmes spécialisés qui communiquent entre eux. Cela permet de
            changer le design de votre site sans jamais toucher à vos données,
            ou de diffuser le même contenu sur plusieurs écrans différents
            simultanément.
          </div>
        </div>
      );
    },
  },
  {
    description:
      "Voir si le Headless est adapté à votre projet et comprendre les avantages concrets qu'il peut offrir à votre site web.",
    title: "Pourquoi choisir le Headless ?",
    src: "/icons/api-icon.svg",
    ctaText: "En savoir plus",
    ctaLink: "/wp-headless-advantages",
    content: () => {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-lg text-darkblue">
            <div className="font-googletitre text-3xl font-medium text-regularblue">
              Le principe clé
            </div>
            <br />
            Bénéficier de l'administration de WordPress tout en offrant une
            flexibilité maximale pour l'interface client, des performances, des
            normes SEO et un sécurité optimisées.
          </div>
          {/* Carte 1 */}
          <div className="flex flex-col items-center bg-lightblue rounded-xl p-6 shadow-md h-full">
            <img
              src="/icons/dashboard-icon.svg"
              alt="Admin WordPress"
              className="w-10 h-10 mb-2"
            />
            <span className="font-medium text-mediumblue font-googletitre text-2xl mb-1 text-center">
              Admin WordPress
            </span>
            <span className="text-sm text-white/80 text-center">
              Une interface familière garantissant une adoption immédiate et
              sans coût de formation supplémentaire.
            </span>
          </div>
          {/* Carte 2 */}
          <div className="flex flex-col items-center bg-lightblue rounded-xl p-6 shadow-md h-full">
            <img
              src="/icons/desktop-headless-icon.svg"
              alt="Liberté de design"
              className="w-10 h-10 mb-2"
            />
            <span className="font-medium text-mediumblue font-googletitre text-2xl mb-1 text-center">
              Liberté de design
            </span>
            <span className="text-sm text-white/80 text-center">
              Interface développée sur mesure, totalement libre, sans les
              limites ni la lourdeur des "page builders".
            </span>
          </div>
          {/* Carte 5 */}
          <div className="flex flex-col items-center bg-regularblue rounded-xl p-6 shadow-md h-full">
            <img
              src="/icons/shield-icon.svg"
              alt="Sécurité totale"
              className="w-10 h-10 mb-2"
            />
            <span className="font-medium text-darkblue font-googletitre text-2xl mb-1 text-center">
              Sécurité totale
            </span>
            <span className="text-sm text-white/80 text-center">
              Votre base de données devient invisible et inaccessible rendant
              les attaques traditionnelles impossibles.
            </span>
          </div>
          {/* Carte 3 */}
          <div className="flex flex-col items-center bg-regularblue rounded-xl p-6 shadow-md h-full">
            <img
              src="/icons/speed-icon.svg"
              alt="Vitesse fulgurante"
              className="w-10 h-10 mb-2"
            />
            <span className="font-medium text-darkblue font-googletitre text-2xl mb-1 text-center">
              Vitesse fulgurante
            </span>
            <span className="text-sm text-white/80 text-center">
              Chargement des pages instantané, garantissant des indicateurs de
              performance (Core Web Vitals) au vert.
            </span>
          </div>
          {/* Carte 4 */}
          <div className="flex flex-col items-center bg-lightblue rounded-xl p-6 shadow-md h-full">
            <img
              src="/icons/globe-network-icon.svg"
              alt="SEO de haut niveau"
              className="w-10 h-10 mb-2"
            />
            <span className="font-medium text-orange font-googletitre text-2xl mb-1 text-center">
              SEO de haut niveau
            </span>
            <span className="text-sm text-white/80 text-center">
              Grâce aux techniques de rendu moderne, les moteurs de recherche
              indexent votre contenu plus efficacement.
            </span>
          </div>
        </div>
      );
    },
  },

  {
    description:
      "Voir si le Headless est adapté à votre projet et comprendre les avantages concrets qu'il peut offrir à votre site web.",
    title: "Pour quels projets ?",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="flex flex-col gap-12">
          <div className="mb-2 text-lg">
            L'architecture Headless WordPress est puissante, mais elle n'est pas
            nécessaire pour tous. Elle s'adresse aux projets où le site web est
            un moteur de croissance critique et non une simple carte de visite.
          </div>
          <div className="grid grid-cols-2 content-center gap-6">
            {/* Cartes pme */}
            <div className="col-span-1 flex flex-col items-center bg-regularblue rounded-xl p-4 w-full max-w-96 shadow-md">
              <Badge className="mb-2 bg-orange text-white font-googletitre">
                PME
              </Badge>
              <span className="text-centerfont-medium text-lightyellow font-googletitre text-2xl mb-1">
                Passer à l'échelle
              </span>
              <span className="text-base text-white/80 text-center">
                Pour répondre ou provoquer une croissance de l'activité en alignant le site web avec les objectifs commerciaux.
              </span>
            </div>
            <div className="col-span-1 flex flex-col items-center gap-2 bg-regularblue rounded-xl p-4 w-full max-w-96 shadow-md">
              <Badge className="mb-2 bg-orange text-white font-googletitre">
                PME
              </Badge>
              <span className="text-center font-medium text-orange font-googletitre text-2xl mb-1">
                Proposer des services en ligne
              </span>
              <span className="text-base text-white/80 text-center border-t-2 border-orange pt-2">
                Pour créer des offres en ligne ou des services associés, et renforcer l'expérience client.
              </span>
            </div>
            {/* Cartes ess */}
            <div className="col-span-1 flex flex-col items-center bg-mediumblue rounded-xl p-4 w-full max-w-96 shadow-md">
              <img
                src="/icons/desktop-headless-icon.svg"
                alt="Interface web"
                className="w-10 h-10 mb-2"
              />
              <span className="font-medium text-lightyellow font-googletitre text-2xl mb-1">
                Interface web
              </span>
              <span className="text-base text-white/80 text-center">
                Site, application, affichage public...
              </span>
            </div>
            <div className="col-span-1 flex flex-col items-center bg-mediumblue rounded-xl p-4 w-full max-w-96 shadow-md">
              <img
                src="/icons/desktop-headless-icon.svg"
                alt="Interface web"
                className="w-10 h-10 mb-2"
              />
              <span className="font-medium text-lightyellow font-googletitre text-2xl mb-1">
                Interface web
              </span>
              <span className="text-base text-white/80 text-center">
                Site, application, affichage public...
              </span>
            </div>
          </div>
          <div className="text-lg">
            <div className="mb-2 font-medium text-regularblue font-googletitre text-3xl">
              Le principe clé
            </div>
            Idéal pour les PME et les organisations de l'ESS cherchant à
            maximiser leur impact en ligne avec un budget maîtrisé. Lié à des
            besoins de performance, sécurité et flexibilité élevés pour
            développer et soutenir la croissance et l'engagement.
          </div>
        </div>
      );
    },
  },
];
