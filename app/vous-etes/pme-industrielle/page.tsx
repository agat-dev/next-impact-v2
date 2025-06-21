import HeroLanding from "@/components/ui/hero-landing";
import SolutionLanding from "@/components/ui/solution-landing";
import GainsLanding from "@/components/ui/gains-landing";
import { TarifsLanding } from "@/components/ui/tarifs-landing";
import { FaqLanding } from "@/components/ui/faq-landing";
import { CtaLanding } from "@/components/ui/cta-landing";

export default function LandingPMEIndustrielle() {

const Hero = {
    badgeText: "PME Industrielle",
    title: "Site web professionnel pour PME industrielles",
    subtitle: "Modernisez votre communication, générez des contacts qualifiés, valorisez vos compétences techniques et interconnectez vos systèmes.",
    buttonText: "Faire une estimation",
    buttonLink: "/simulateur-tarifs",
    buttonVariant: "primary",
    button2Link: "https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress",
    button2Text: "Prendre rendez-vous",
    button2Variant: "secondary",   
}
const solution = {
    title: " Pourquoi investir dans un site vitrine industriel ?",
    subtitle: "Votre professionnalisme, votre expertise et vos compétences techniques se doivent d'être mis en avant avec un site reflétant la qualité et la précision de vow services et produits.",
    imageUrl: "/img/pme-homepage.jpg",
    features: [
        "Un design professionnel, aligné sur votre identité visuelle",  
        "Un site optimisé pour le référencement naturel (SEO) afin d'être visible sur Google",
        "Un site responsive, adapté aux mobiles, tablettes et grands écrans",
        "Un accès simple pour mettre à jour vos contenus",
    ]
}
const gains = {
    title: "Ce que vous obtenez",
    subtitle: "Un site professionnel pour une image et des fonctionnalités à l'image de votre expertise.",
    landingCards: [
        {
            imageUrl: "/img/pme-indus-contact.jpg",
            title: "Visibilité locale et internationale",
            text: "Être trouvé par des clients locaux ou distants, en France et à l'international",
        },
        {
            imageUrl: "/img/pme-indus-reassurance.jpg",
            title: "Réassurance pour vos clients",
            text: "Présenter clairement votre activité, vos process, votre savoir-faire, votre parc machine",
        },
        {
            imageUrl: "/img/pme-indus-expertise.jpg",
            title: "Démonstration de votre expertise",
            text: "Gagner en légitimité auprès de vos clients, prospects et partenaires",
        },
        {
            imageUrl: "/img/pme-indus-support.jpg",
            title: "Suivi client et qualité de service",
            text: "Interconnecter vos systèmes pour une relation optimisée avec vos clients",
        },
    ],
}
const tarifs = {
    sectionTitle: "Tarifs de création de site vitrine pour PME industrielles",
    sectionSubtitle: "Des offres adaptées à vos besoins et à votre budget.",
    offers: [
        {
            title: "Starter Industrie",
            description: "PME souhaitant une présence professionnelle en ligne.",
            price: "dès 1500 €",
            features: [
                "Services", 
                "Réalisations", 
                "Contact", 
                "SEO local", 
                "responsive"
            ],
            
            button: {
                label: "Choisir cette formule",
                href: "/simulateur-tarifs",
            },
            highlighted: false,
        },
        {
            title: "Pro Industrie",
            description: "Pour un usage commercial / RH, avec des fonctionnalités avancées.",
            price: "À partir de 2 200€",
            features: [
                "+ Pages métiers", 
                "Recrutement", 
                "Galerie", 
                "Blog", 
                "Fiche PDF à télécharger"
            ],
            button: {
                label: "Choisir cette formule",
                href: "/simulateur-tarifs",
            },
            highlighted: true,
        },
        {
            title: "Sur-mesure	",
            description: "	Pour les besoins spécifiques des PME industrielles.",
            price: "Sur devis",
            features: [
                "Site multi-langue", 
                "catalogue technique", 
                "tunnel de vente", 
                "extranet",
                "interconnexion avec vos systèmes",
            ],
            button: {
                label: "Choisir cette formule",
                href: "/simulateur-tarifs",
            },
            highlighted: false,
        },
    ],
}
const Faq = {
    title: "Foire aux questions",
    image: "/img/pme-indus-mobile.jpg",
    imageAlt: "Foire aux questions pour PME industrielles",
    questions: [
        {
            question: "Combien de temps faut-il pour créer un site vitrine ?",
            answer: "En moyenne, la création d'un site vitrine prend entre 4 à 6 semaines, selon la complexité du projet et la disponibilité des contenus.",    
        },
        {
            question: "Est-ce que je peux mettre à jour le contenu de mon site moi-même ?",
            answer: "Oui, nous vous formons à l'utilisation du CMS WordPress pour que vous puissiez facilement mettre à jour vos contenus (textes, images, etc.) sans compétences techniques particulières.",
        },
        {
            question: "Est-ce que le site est optimisé pour le référencement naturel (SEO) ?",
            answer: "Oui, tous nos sites sont optimisés pour le SEO afin de vous aider à être visible sur les moteurs de recherche comme Google.",
        },
        {
            question: "Le site est-il évolutif ?",
            answer: "Oui. Il peut être enrichi de nouvelles sections, fonctionnalités ou services.",
        },
    ]
}
const cta = {
    title: "Prêt à moderniser votre site vitrine ?",
    description: "Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.",
    buttonText: "Générer un cahier des charges",
    buttonLink: "/cahier-des-charges",
    buttonVariant: "primary",
    button2Text: "Prendre rendez-vous",
    button2Link: "https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress",
    button2Variant: "secondary",
}


          return (
            <div className="min-h-screen">
              {/* Hero */}
                <HeroLanding
                    badgeText={Hero.badgeText}
                    title={Hero.title}
                    subtitle={Hero.subtitle}
                    buttonText={Hero.buttonText}
                    buttonLink={Hero.buttonLink}
                    buttonVariant={Hero.buttonVariant}
                />
        
              {/* Pourquoi un site vitrine */}
                <SolutionLanding 
                    title={solution.title}
                    subtitle={solution.subtitle}
                    imageUrl={solution.imageUrl}
                    features={solution.features}
                   />
        
              {/* Solution*/}
              
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-[1000px] left-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
                  <div className="absolute top-[1600px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
                </div>
                <GainsLanding
                    title={gains.title}
                    subtitle={gains.subtitle}
                    landingCards={gains.landingCards}
                 />
        
              {/* Tarifs */}
                <TarifsLanding 
                    sectionTitle={tarifs.sectionTitle}
                    sectionSubtitle={tarifs.sectionSubtitle}
                    offers={tarifs.offers}
                />
                 
        
              {/* FAQ */}
              
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-[2000px] left-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
                  <div className="absolute top-[2600px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
                </div>
               <FaqLanding
                    title={Faq.title}
                    image={Faq.image}
                    imageAlt={Faq.imageAlt}
                    items={Faq.questions}
                />  
        
              {/* Call to action final */}
              <CtaLanding
                    title={cta.title}   
                    description={cta.description}
                    buttonText={cta.buttonText}
                    buttonLink={cta.buttonLink}
                    buttonVariant={cta.buttonVariant}
                    button2Text={cta.button2Text}
                    button2Link={cta.button2Link}
                    button2Variant={cta.button2Variant}
                />
            </div>
          );
}