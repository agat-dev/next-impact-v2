import { ExpandableCardNIP } from "@/components/conseil/expandable-cards";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";

export default function ServicesConseil() {
  const ConseilSkills = [
    {
      title: "Accompagnement",
      description:   
      <>     
            <span className="uppercase font-adobetitre text-xl">CREATION ET REFONTE</span>
              <br />
              <br />
                <div className="col-span-6 flex flex-col justify-center gap-3 pt-4">
                  <div className="flex items-center">
                  <Image 
                      src="/img/meet.gif"
                      alt="Meeting animation"
                      width={20}
                      height={20}
                      className="mr-3 text-primary" />
                    <span className="font-adobetitre text-lg">4 sessions vidéo de 30 minutes</span>
                  </div>
                  <div className="flex items-center">
                  <Image 
                      src="/img/settings.gif"
                      alt="Analyse du besoin animation"
                      width={20}
                      height={20}
                      className="mr-3 text-primary" />
                    <span className="font-adobetitre text-lg">Analyse approfondie du besoin</span>
                  </div>
                  <div className="flex items-center">
                  <Image 
                      src="/img/tools.gif"
                      alt="Audit animation"
                      width={20}
                      height={20}
                      className="mr-3 text-primary" />
                    <span className="font-adobetitre text-lg">Audit du site actuel</span>
                  </div>  
                  <div className="flex items-center">
                  <Image 
                      src="/img/folder.gif"
                      alt="Cahier des charges animation"
                      width={20}
                      height={20}
                      className="mr-3 text-primary" />
                    <span className="font-adobetitre text-lg">Formalisation d'un cahier des charges</span>
                  </div>  
                  <div className="flex items-center">
                  <Image 
                      src="/img/code.gif"
                      alt="Solution technique animation"
                      width={20}
                      height={20}
                      className="mr-3 text-primary" />
                    <span className="font-adobetitre text-lg">Conseil sur la solution technique</span>
                  </div>  
                </div> 
            </>,
    },
  ];

  return (
    <>
      {/* Tools section */}
      <section className="py-12 px-16 md:py-12 lg:py-24">
        <div className="pb-12 text-center">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full text-lightblue tracking-wider">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-6">
            Outils d'analyse de projet
          </h2>
          <p className="text-xl text-regularblue/70 max-w-3xl mx-auto">
            Pour savoir, décider et agir sereinement
          </p>
        </div>
        <div className="flex justify-center align-center px-4 md:px-6 my-16">
          <ExpandableCardNIP />
        </div>
        {/*}
        <div className="grid grid-cols-1 md:grid-cols-1 place-self-center gap-24 my-16 p-8">
          {ConseilSkills.map((conseilSkill, index) => (
            <Card
              key={index}
              className="w-max bg-white border-none shadow-none transition-all rounded-2xl overflow-hidden"
            >
              <MagicCard className="rounded-2xl">
                <CardContent className="flex items-center justify-center flex-col text-center p-8">
                  <h3 className="text-4xl font-bold mb-3 pt-5 text-regularblue">
                    {conseilSkill.title}
                  </h3>
                  <div className="text-regularblue/80">
                    {conseilSkill.description}
                  </div>
                </CardContent>
              </MagicCard>
            </Card>
          ))}
        </div>*/}
      </section>
    </>
  );
}
