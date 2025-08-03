"use client";

import { useState } from "react";

interface TableOfContentsPopupProps {
  tableOfContents: { id: string; text: string; level: number }[];
}

export default function TableOfContentsPopup({ tableOfContents }: TableOfContentsPopupProps) {
  // Affichage direct de la table des matières, sans bouton et sans puces
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
    <nav className="relative w-full">
      <ul className="space-y-2 list-none m-0 p-0">
        {tableOfContents.map((item) => (
          <li key={item.id} className={getClassByLevel(item.level)}>
            <a
              href={`#${item.id}`}
              className="hover:text-regularblue/80 transition-colors duration-200"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}