import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MagicCard } from './magicui/magic-card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Agathe s’est distinguée par sa rapidité et sa capacité à comprendre immédiatement mes attentes. Son travail est précis et de grande qualité, le tout réalisé avec professionnalisme. Une collaboration efficace que je recommande vivement !",
      author: "Juline Vidament",
      position: "Responsable Marketing",
      company: "Itavera Assets Management",
      rating: 5
    },
    {
      quote: "Du professionnalisme, un réel esprit d'initiative, le sens du conseil et une réactivité totale ! Ajouter un bon état d'esprit d'une personne qui n'hésite pas à se « dépasser » pour améliorer la qualité de la prestation.",
      author: "Luc Poigniez",
      position: "Designer UI/UX",
      company: "Créaclic",
      rating: 5
    },
    {
      quote: "Quand réactivité, savoir-faire sont réunis cela assure un résultat. Si en plus de cela l'échange même à distance est facile et efficace, cela rend la mission agréable…:) Merci Agathe.",
      author: "Philippe Barrat",
      position: "CTO",
      company: "Neway Partners",
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
          <p className="text-xl max-w-3xl mx-auto text-regularblue/70">
            Découvrez les retours de clients avec lesquels j'ai eu le plaisir de collaborer sur divers projets technologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="h-full flex flex-col bg-white rounded-2xl transition-all overflow-hidden"
            >
              <MagicCard className="h-full">
              <CardContent className="pt-8 flex-grow">
                
               
                <p className="text-md mb-4 text-regularblue leading-relaxed">{testimonial.quote}</p>
              </CardContent>
              
              <CardFooter className="pt-2">
                <div>
                  <p className="font-medium font-adobetitre text-base text-regularblue">{testimonial.author}</p>
                  <p className="text-sm font-adobetitre text-regularblue/70">
                    {testimonial.position}</p>
                  <p className="mt-2 text-xs text-regularblue/70 uppercase">
                     {testimonial.company}
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