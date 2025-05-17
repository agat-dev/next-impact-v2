import { TextAnimate } from "@/components/magicui/text-animate"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import LottieAnimation from "@/components/ui/lottie-animation";
 
export function CardHoverEffectDisplay() {
  return (
    <div className="mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Performances du site web",
    description:
      <p>A technology company that builds economic infrastructure for the internet.</p>,
    link: "https://stripe.com",
  },
  {
    title: "Expérience mobile",
    description:
      <p>A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>,
    link: "https://netflix.com",
  },
  {
    title: "Autonomie et contrôle",
    description:
      <p>A multinational technology company that specializes in Internet-related services and products.</p>,
    link: "https://google.com",
  },
  {
    title: "Écosystème connecté",
    description:
      <p>A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.</p>,
    link: "https://meta.com",
  },
  {
    title: "Fonctionnalités sur mesure",
    description:
      <p>A technology company that specializes in cloud computing and artificial intelligence.</p>,
    link: "https://aws.com",
  },
  {
    title: "Sécurité renforcée",
    description:
      <p>A technology company that provides a platform for developers to build and deploy applications.</p>,
    link: "https://github.com",
  },
];

export default async function Page() 
{

    return (
      <>
         <section className="grid grid-cols-12 w-full h-full min-h-[62vh]">
              <div className="col-span-3 place-items-end mt-[40vh]">
              <LottieAnimation
                animationPath="/lotties/astronaut-floating.json"
                loop={true}
                autoplay={true}
                width="15rem"
              />
              </div>
              <div className="col-span-6 place-content-center text-center">            
                  <TextAnimate animation="blurIn" as="h1">Sites & Appli web pour PME</TextAnimate>
                  <div className="w-10/12 pt-2 pb-6 space-y-2 mt-4 mx-auto text-center">
                  <p className="text-lg font-regular font-googletitre text-regularblue">
                  WordPress standard et Headless avec Next.js, des solutions de référence 
                  performantes et sur mesure pour transformer votre présence digitale en levier de croissance.
                  </p>
                  </div>
              </div>
            <div className="col-span-3 place-items-center mt-[20vh]">
              <LottieAnimation
                animationPath="/lotties/cosmonaut.json"
                loop={true}
                autoplay={true}
                width="15rem"
              />
              </div>
        </section>

        <section className="w-full h-full min-h-[22vh]">
            <div className="w-10/12 pt-2 pb-6 space-y-2 mt-4 mx-auto text-center">          
            <CardHoverEffectDisplay />
            </div>
        </section>
      </>
    )
}