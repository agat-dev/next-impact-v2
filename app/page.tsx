
import LottieAnimation from "@/components/ui/lottie-animation";
import ServicesDev from "@/components/services-dev";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Hero from "@/components/hero";
import ServicesConseil from "@/components/services-conseil";
import Realisations from "@/components/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq"
import { CTASection } from "@/components/cta-section";


export function CardHoverEffectDisplay() {
  return (
    <div className="mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    image: <LottieAnimation animationPath="/lotties/astronaut-with-surprise-box.json" width="6rem" height="6rem"/>,
    title: "Qualité finale",
    description:
        <p className="text-base font-regular font-googletitre text-regularblue">
          Votre site web doit être à votre image et performant sans rogner sur la qualité ?
          <br />
        </p>,
    link: "https://stripe.com",
  },
  {
    image: <LottieAnimation animationPath="/lotties/super-astronaut.json" width="6rem" height="6rem"/>,
    title: "Fonctionnalités avancées",
    description:
      <p className="text-base font-regular font-googletitre text-regularblue">
        Vous avez besoin d'un site adapté à vos besoins techniques spécifiques ?
      </p>,
    link: "https://netflix.com",
  },
  {
    image: <LottieAnimation animationPath="/lotties/astronaut-in-rocket.json" width="6rem" height="6rem"/>,
    title: "Autonomie et contrôle",
    description:
      <p className="text-base font-regular font-googletitre text-regularblue">
        Vous avez besoin d'un site web efficace mais facile à gérer ?                      
      </p>,
    link: "https://google.com",
  },
];

export default function Home() {

  return (
    <>
      <main className="flex-1">

       {/* Hero Section */}
       <Hero />

      {/* About Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[900px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[1200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <ServicesDev />

      {/* Personas Section 
      <div className="absolute inset-0 -z-10">
            <div className="absolute top-[400px] left-0 h-full w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
      </div>
        <section className="w-full py-6 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 pb-12">
              <TextAnimate animation="blurIn" as="h2">Pour ceux qui veulent maîtriser leur projet</TextAnimate>
              </div>
              <div>
                <CardHoverEffectDisplay />
              </div>
            <Link href="/learning-paths/content">
              <Button className="mt-8 gap-1 rounded-3xl bg-white border bg-regularblue hover:bg-regularblue/80 text-white transition-all duration-900 ease-in-out">Voir la démo</Button>
            </Link>
            </div>
          </div>
        </section>
        */}

      {/* Tools Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[1900px] left-0 h-[1000px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[2200px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <ServicesConseil />

      {/* Realisation Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[3200px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[3600px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <Realisations />
      

      {/* Testimonials Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[4400px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[4600px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <Testimonials />



        {/* FAQ Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[5000px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[5400px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <FAQ />

        {/* CTA Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[5900px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[6200px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <CTASection />
      </main>

     {/* Carousel Section 
        <section className="flex align-center justify-center w-4/6 m-auto p-4 mt-8 mb-12">         
          <FeatureCarousel
            title=""
            description=""
            image={{
              step1light1: "", // Replace with the actual path to your image
              step1light2: "/path/to/image2.jpg", // Replace with the actual path to your image
              step2light1: "/path/to/image3.jpg", // Replace with the actual path to your image
              step2light2: "/path/to/image4.jpg", // Replace with the actual path to your image
              step3light: "/path/to/image5.jpg", // Replace with the actual path to your image
              step4light: "/path/to/image6.jpg", // Replace with the actual path to your image
              alt: "Feature showcase",
            }}
          />
        </section>
        */}

        {/* Features Section 
        <section className="flex align-center justify-center w-10/12 mx-auto py-24">
            <Timeline data={[
              { title: "Prendre les bonnes infos", content:                   
                  <div className="grid py-6 md:w-[600px] lg:w-[800px]">
                  <div className="grid grid-cols-4 row-span-1 gap-4">  
                    <div className='grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md'>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS personnalisé
                    </div>
                  </a>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    Headless CMS
                    </div>
                  </a> 
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    Développement personnalisé
                    </div>
                  </a> 
              </div>  
              <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                    <Link href="/documentation" className="text-base font-regular">Auditer mon site web</Link>
                  </Button>
                </div>
                  </div>
                  
                  </div>},
              { title: "Explorer les meilleures solutions", content: 
              <div className="grid py-6 md:w-[600px] lg:w-[800px]">
              <div className="grid grid-cols-4 row-span-1 gap-4">
                <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                  <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                  <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                    <Link href="/quizz" className="text-base font-regular">Choisir mon CMS</Link>
                  </Button>
                </div>
              <div className='grid col-span-2 row-span-1 row h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md'>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS pour vitrines
                    </div>
                  </a>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS pour site de contenus
                    </div>
                  </a>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS E-commerce
                    </div>
                  </a> 
              </div>  



              </div>
              </div>},
              { title: "Préparer son projet", content: 
                <div className="grid py-6 md:w-[600px] lg:w-[800px]">
                <div className="grid grid-cols-4 row-span-1 gap-4">
                  <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                      <Link href="/quizz" className="text-base font-regular">Faire mon cahier des charges</Link>
                    </Button>
                  </div>  
  
                  <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                      <Link href="/quizz" className="text-base font-regular">Estimer le coût</Link>
                    </Button>
                  </div>  
  
  
                </div>
                </div>
               },              
              { title: "Lancer son projet web", content: 
                <div className="grid py-6 md:w-[600px] lg:w-[800px]">
                <div className="grid grid-cols-4 row-span-1 gap-4">
                  <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                      <Link href="/quizz" className="text-base font-regular">Faire appel à un prestataire</Link>
                    </Button>
                  </div>
                <div className='grid col-span-2 row-span-1 row h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md'>
                    <a href="/audit" title="Audit de site web">
                      <div className="bg-white h-max rounded-md p-4">
                      CMS pour vitrines
                      </div>
                    </a>
                    <a href="/audit" title="Audit de site web">
                      <div className="bg-white h-max rounded-md p-4">
                      CMS pour site de contenus
                      </div>
                    </a>
                    <a href="/audit" title="Audit de site web">
                      <div className="bg-white h-max rounded-md p-4">
                      CMS E-commerce
                      </div>
                    </a> 
                </div>  
  
  
  
                </div>
                </div>
               },
            ]} />
        </section>
        */}







    </>
  );
}
