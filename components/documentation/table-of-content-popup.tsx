"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TableOfContentsPopupProps {
  tableOfContents: { id: string; text: string; level: number }[];
}

export default function TableOfContentsPopup({ tableOfContents }: TableOfContentsPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to generate classes based on the heading level
  const getClassByLevel = (level: number) => {
    switch (level) {
      case 1:
        return "text-lg font-bold text-mediumblue/90";
      case 2:
        return "text-base font-medium text-mediumblue pl-4";
      case 3:
        return "text-sm font-normal text-mediumblue/80 pl-8";
      default:
        return "text-sm font-normal text-gray-500";
    }
  };

  return (
    <div className="relative w-full">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-white mb-4 px-4 py-2 rounded-lg shadow-md hover:bg-white/30"
      >
        <span>Sommaire</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {/* Animated Table of Contents */}
      <motion.div
        className="absolute left-0 top-full mt-4w-full bg-gray-50 p-4 rounded-lg shadow-lg z-10"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul className="space-y-2">
          {tableOfContents.map((item) => (
            <li key={item.id} className={getClassByLevel(item.level)}>
              <a
                href={`#${item.id}`}
                className="hover:underline"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}