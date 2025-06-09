"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

type ExpandableCardNIPProps = {
  cards: {
    title: string;
    description: string;
    image: string;
    ctaText: string;  
    ctaLink: string;
    content: string;
  }[];
};

export function ExpandableCardNIP({ cards }: ExpandableCardNIPProps) {
  const [active, setActive] = useState<ExpandableCardNIPProps["cards"][number] | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
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
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-mediumblue/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
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
              className="md:w-[34rem] max-w-[90%] h-fit flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex flex-col justify-between items-start p-4">
                  <div className="w-full">
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
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
                      layoutId={`description-${active.description}-${active.title}-${id}`}
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
                    <span dangerouslySetInnerHTML={{ __html: active.content }} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-[50rem] mx-0 flex flex-col gap-4 md:gap-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-white hover:bg-white/70 border border-pink-200/40 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row md:items-center md:justify-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                {/* Remplacement de l'image par Lottie */}
                <div className="rounded-lg object-contain object-top mr-4">
                  <Image
                    src={card.lottie}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-lg" 
                    />
                </div>
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="pt-1 pb-4 font-regular text-2xl text-regularblue text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${card.title}-${id}`}
                  className="text-regularblue text-left font-medium text-sm"
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


