"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link"; 

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  link?: string;
}

let notifications = [
  {
    name: "Besoin d'un prestataire ?",
    description: "Déléguez à des freelances",
    link: "/freelancers",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Besoin de conseils ?",
    description: "Consultez nos expert",
    link: "/services",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Besoin d'information pour agir ?",
    description: "Accédez à notre base de connaissances",
    link: "/documentation",
    icon: "💸",
    color: "#00C9A7",
  },
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, link }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <Link href={link || "#"}>
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-xl font-adobetitre">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
           <div className="text-lg">{icon}</div>
        </div>
      </div>
      </Link>
    </figure>
  );
};

export function AnimatedListHome({
  className,
  delay = 1400,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList delay={delay} className="flex flex-col items-center gap-4">
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
