import { Card, CardContent } from '@/components/ui/card';
import { CodeIcon, BadgeEuro, HandMetal, Rocket, Unplug, CloudCog, DatabaseIcon } from 'lucide-react';
import { BorderBeamEffect } from '@/components/ui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';




const About = () => {
  const skills = [
    { 
      icon: <CodeIcon className="h-6 w-6 text-brand-400" />,
      title: 'Sites Corporate',
      description: (
        <>
          <span className='uppercase font-adobetitre text-xl'>WordPress</span>
          <br /><br />
          <div className='pt-4 px-4 grid grid-cols-2 items-center'>
            <div className='flex flex-col items-center gap-4 text-xl text-regularblue transition-all duration-400 ease-in-out'><BadgeEuro/><div>Développement</div></div>
            <div className='flex flex-col items-center gap-4 text-xl text-regularblue transition-all duration-400 ease-in-out'><Rocket />Conseil</div>
          </div>
          <p className='w-[30rem] mt-6 text-regularblue/60'>
          Avec 20 ans d'existence et 40% de parts de marché du web, WordPress garantit pérennité, sécurité et support communautaire robuste.
          </p>
        </>
      ),
    },
    { 
      icon: <DatabaseIcon className="h-6 w-6 text-brand-400" />,
      title: 'Applications Web',
      description: (
        <>
          <span className='uppercase font-adobetitre text-xl'>Headless WordPress</span>
          <br /><br />
          <div className='pt-4 px-4  grid grid-cols-2 items-center'>
            <div className='flex flex-col items-center gap-4 text-xl text-regularblue transition-all duration-400 ease-in-out'><BadgeEuro/><div>Développement</div></div>
            <div className='flex flex-col items-center gap-4 text-xl text-regularblue transition-all duration-400 ease-in-out'><Rocket />Conseil</div>
          </div>
          <p className='w-[30rem] mt-6 text-regularblue/60'>
          Avec 20 ans d'existence et 40% de parts de marché du web, WordPress garantit pérennité, sécurité et support communautaire robuste.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 md:py-12 relative overflow-hidden bg-gradient-to-b">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-brand-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 w-80 h-80 bg-brand-700/20 rounded-full blur-[120px]"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full text-mediumblue/60 tracking-wider mb-4">
            À PROPOS DE MOI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-6">Expertise</h2>
          <p className="text-xl text-lightblue max-w-3xl mx-auto">
            Développeuse passionnée avec plus de 8 ans d'expérience dans la création de sites et d'applications web
            et la mise en place de solutions techniques pour des entreprises de toutes tailles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-24 my-16 p-8">      
          {skills.map((skill, index) => (    
            <Card key={index} className="w-max bg-white border shadow-none transition-all rounded-2xl overflow-hidden">      
            <MagicCard
                className="rounded-2xl"
              >
                <CardContent className="flex items-center justify-center flex-col text-center p-0">
                  <h3 className="text-4xl font-bold mb-3 pt-5 text-regularblue">{skill.title}</h3>
                  <div className="text-regularblue/60">{skill.description}</div>
                </CardContent>
          </MagicCard>
            </Card>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-regularblue">Mes Résultats</h3>
            <p className="text-lightblue mb-6 text-lg">
              Avec une formation en informatique et des années d'expérience dans l'industrie, j'ai travaillé avec des startups,
              des agences et des grandes entreprises pour fournir des solutions techniques de haute qualité qui stimulent la croissance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-adobetitre mb-2">8+</div>
              <p className="font-medium text-lightblue">Années d'expérience</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-adobetitre mb-2">50+</div>
              <p className="font-medium text-lightblue">Projets complétés</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-adobetitre mb-2">20+</div>
              <p className="font-medium text-lightblue">Clients satisfaits</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-adobetitre mb-2">5+</div>
              <p className="font-medium text-lightblue">Secteurs servis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;