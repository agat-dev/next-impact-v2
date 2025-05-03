import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import DocTabs from "@/components/documentation/doc-tabs";
import { TextAnimate } from "@/components/magicui/text-animate";
import LottieAnimation from "@/components/ui/lottie-animation";
import { ExpandableCardNIP } from "@/components/ui/expandable-cards";

export default function DocumentationPage() {
  return (
      <main className="flex-1">
   
          {/* Hero Section */}
           <section className="flex align-center justify-center w-full h-full  min-h-[16rem] pt-8">
             <div className="grid grid-cols-6 justify-center align-center px-4 md:px-6">
             <div className="col-span-1">
                 </div>
                 <div className="col-span-4 place-self-center">
                   <div className="py-2 text-center">
                     <TextAnimate className="text-xl font-googletitre" animation="blurIn" as="h1">Savoir comment créer son site web</TextAnimate>
                   </div>
                   <div className="w-10/12 py-8 space-y-2 mx-auto text-center">  
                     <p className="text-xl font-regular font-googletitre text-lightblue">
                        Des ressources et des infos pour vous orienter avant et pendant votre projet web.        
                     </p> 
                   </div>
                 </div>
               <div className="col-span-1">
                 <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" />
                 </div>
             </div>
           </section>

          {/* Questions Personas section
          <section className="w-full py-4">
          <div className="flex justify-center align-center px-4 md:px-6">
              <ExpandableCardNIP
              />
             </div>
           </section> */}



          {/* Tabs Section */}
          <section className="w-full">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="w-full">
              <div className="relative">
                <DocTabs />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}
