import { cn } from "@/lib/utils";
import Image from "next/image"; 
import LogoLoop from "./logo-loop";

export function Logos({ className }: { className?: string }) {
  const logos = [
    { src: "/img/logo-sowee.svg", alt: "Sowee" },  
    { src: "/img/logo-geofit.png", alt: "Geofit" },
    { src: "/img/logo-aquitaine-robotics.png", alt: "Aquitaine Robotics" },
    { src: "/img/logo-proditec.png", alt: "Proditec" },
    { src: "/img/logo-infralliance.png", alt: "Infralliance" },
    { src: "/img/logo-hermitage.webp", alt: "L'Hermitage" },
    { src: "/img/logo-transitions-pro.png", alt: "Transitions Pro" },
    { src: "/img/logo-wagner-hamisky.png", alt: "Wagner Hamisky" },  
  ];

  return (
    <div className={cn("max-w-xl mx-auto grid gap-4", className)} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))" }}>
      <LogoLoop logos={logos} />
    </div>
  );
}
