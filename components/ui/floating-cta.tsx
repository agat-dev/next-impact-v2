"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed top-20 right-5 z-50 flex flex-col items-center gap-3">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-pink-600 shadow-lg transition-transform hover:scale-110 hover:bg-pink-600 hover:text-pink-600 hover:shadow-3d-hover"
      >
        <a href="tel:0673981638" aria-label="Appeler maintenant">
          <Phone className="h-6 w-6 text-white hover:text-pink-600" />
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        variant="outline"
        className="h-14 w-14 rounded-full border-2 border-pink-600 bg-white text-pink-600 shadow-3d transition-all duration-200 hover:bg-pink-600 hover:text-white hover:shadow-3d-hover hover:-translate-y-px"
      >
        <a href="mailto:agathe@next-impact.digital" aria-label="Envoyer un e-mail">
          <Mail className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
