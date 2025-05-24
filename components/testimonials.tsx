import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MagicCard } from './magicui/magic-card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Agathe a livré notre projet avant l'échéance et a dépassé toutes nos attentes. Ses compétences techniques et son attention aux détails sont exceptionnelles.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechStart",
      rating: 5
    },
    {
      quote: "Travailler avec Agathe a été un changement de donne pour notre plateforme web. Elle a rapidement compris nos besoins et a implémenté des solutions qui ont grandement amélioré notre expérience utilisateur.",
      author: "Michael Chen",
      position: "Chef de Produit",
      company: "InnovateCorp",
      rating: 5
    },
    {
      quote: "Agathe n'a pas seulement construit notre application, elle a également fourni des perspectives précieuses qui ont contribué à façonner notre feuille de route produit. Une véritable partenaire technologique.",
      author: "Emma Rodriguez",
      position: "CTO",
      company: "Nexus Systems",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "none" : "currentColor"}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-600'}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 ">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full text-lightblue tracking-wider mb-4">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl md:text-5xl text-regularblue font-bold mb-6">Ce qu'en disent mes clients</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez les retours de clients avec lesquels j'ai eu le plaisir de collaborer sur divers projets technologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="h-full flex flex-col bg-white border-none transition-all rounded-xl overflow-hidden"
            >
                <MagicCard className="h-full rounded-xl">
              <CardContent className="pt-8 flex-grow">
                
                {/* Stars */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-md mb-4 text-regularblue leading-relaxed">{testimonial.quote}</p>
              </CardContent>
              
              <CardFooter className="pt-2">
                <div>
                  <p className="font-medium font-adobetitre text-base text-regularblue">{testimonial.author}</p>
                  <p className="text-sm text-regularblue/70 font-medium">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </CardFooter>
              </MagicCard>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;