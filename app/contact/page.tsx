import  PageHero from "@/components/page-hero";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact | Next Impact",
    description: "Contactez-moi pour discuter de votre projet web WordPress. Prise de rendez-vous et formulaire de contact disponibles.",
    openGraph: {
      title: "Contact | Next Impact",
      url: "https://next-impact.digital/contact",
      siteName: "Next Impact - Développeuse WordPress Freelance",
      description: "Contactez-moi pour discuter de votre projet web WordPress. Prise de rendez-vous et formulaire de contact disponibles.",
      type: "website",
      images: [
        {
          url: "/img/avatar.png",
          width: 1200,
          height: 630,
          alt: "Next Impact - Développeuse WordPress Freelance",
        },
      ],
    },
  };
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Contact"
        titre1="Discutons de votre projet web"
        titre2="Contactez Next Impact"
        sousTitre="Vous avez une idée, un projet ou une refonte en tête ? Parlons-en ensemble."
        cta1Text="Prendre rendez-vous"
        cta1Link="https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress"
        cta2Text="Envoyer un message"
        cta2Link="#formulaire"
        illustration="/img/illustrations/contact-hero.svg"
      />
      <div className="mt-24 space-y-12 rounded-2xl" id="formulaire">

      </div>
      <div className="mt-12 text-sm text-mediumblue text-center">
        <p>Basée en France - Disponible à distance</p>
        <p>Freelance WordPress, Next.js</p>
        <p className="pt-4 "><a href="mailto:agathe@next-impact.digital" className="text-medium font-googletitre text-lg">agathe@next-impact.digital</a></p>
      </div>
    </main>
  );
}
