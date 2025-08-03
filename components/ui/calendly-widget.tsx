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

export default CalendlyBadge;
