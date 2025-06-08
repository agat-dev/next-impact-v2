// components/CalendlyBadge.tsx
import { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialisation après le chargement
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress',
          text: 'RDV Conseil gratuit',
          color: '#1f54bf',
          textColor: '#ffffff',
          branding: false,
        });
      }
    };

    return () => {
      // Nettoyage si nécessaire
      document.body.removeChild(script);
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
