import LandingCard from '@/components/ui/landing-cards';

interface GainsLandingProps {
    title?: string;
    subtitle?: string;
    landingCards?: {
        imageUrl: string;
        title: string;
        text: string;
    }[];
}


export default function GainsLanding(
    { title = "Les gains de la solution",
      subtitle = "Découvrez comment notre solution peut transformer votre activité",
      landingCards = [] }: GainsLandingProps
) {
    return (

        <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-medium text-regularblue mb-4">
            {title}
          </h2>
          <p className="text-lg text-regularblue/80">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-24 justify-center items-center max-w-6xl mx-auto mb-24 flex-wrap">
            {landingCards.map((card, idx) => (
          <LandingCard
              key={idx}
              imageUrl={card.imageUrl}
              title={card.title}
              text={card.text}
          />
            ))}
        </div>
      </section>


    )
}