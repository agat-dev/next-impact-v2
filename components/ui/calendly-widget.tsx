// components/CalendlyBadge.tsx
import { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Diffère le chargement du script Calendly après le rendu initial
    const timeout = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress',
            text: 'RDV Conseil',
            color: '#ec407a',
            textColor: '#ffffff',
            branding: false,
          });
        }
      };

      // Nettoyage
      script.dataset.calendly = "true";
    }, 1000); // Diffère de 1 seconde (ajuste si besoin)

    return () => {
      clearTimeout(timeout);
      // Nettoyage du script Calendly si présent
      const existing = document.querySelector('script[src*="calendly.com"]');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <link
      href="https://assets.calendly.com/assets/external/widget.css"
      rel="stylesheet"
    />
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-regularblue shadow-lg transition-transform hover:scale-110 hover:bg-regularblue/90"
      >
        <a href="tel:0673981638" aria-label="Appeler maintenant">
          <Phone className="h-6 w-6 text-white" />
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        variant="outline"
        className="h-14 w-14 rounded-full border-2 border-regularblue bg-white text-regularblue shadow-lg transition-transform hover:scale-110 hover:bg-gray-100"
      >
        <a href="mailto:agathe@next-impact.digital" aria-label="Envoyer un e-mail">
          <Mail className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default CalendlyBadge;
export { FloatingCTA };
