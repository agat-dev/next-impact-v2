import { cn } from "@/lib/utils";
import Image from "next/image"; // 

export function Logos({ className }: { className?: string }) {
  const logos = [
    { src: "/img/logo-sowee.svg", alt: "Sowee" },
    { src: "/img/logo-itavera.png", alt: "Itavera" },
    { src: "/img/logo-wagner-hamisky.png", alt: "Wagner Hamisky" },    
    { src: "/img/logo-geofit.png", alt: "Geofit" },
    { src: "/img/logo-proditec.png", alt: "Proditec" },
    { src: "/img/logo-infralliance.png", alt: "Infralliance" },
    { src: "/img/logo-hermitage.webp", alt: "L'Hermitage" },
    { src: "/img/logo-aquitaine-robotics.png", alt: "Aquitaine Robotics" },
    { src: "/img/logo-erp-services.webp", alt: "ERP Services" },
    { src: "/img/logo-transitions-pro.png", alt: "Transitions Pro" },
    { src: "/img/logo-salondelacarrosserie.webp", alt: "Salon de la carrosserie" },
    { src: "/img/logo-naturedea.png", alt: "Naturedea" },
  ];

  return (
    <div className={cn("w-full mx-auto py-8 grid gap-8 bg-white/30 backdrop-blur-md border-slate-200/60 border-y", className)} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center justify-center p-4">
          <Image src={logo.src} alt={logo.alt} width={110} height={50} quality={100} />
        </div>
      ))}
    </div>
  );
}
