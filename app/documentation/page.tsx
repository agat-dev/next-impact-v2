import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import DocTabs from "@/components/documentation/doc-tabs";
import { TextAnimate } from "@/components/magicui/text-animate";
import { LottieAnimation4 } from "@/components/ui/lottie-animation";
import { ExpandableCardNIP } from "@/components/ui/expandable-cards";

export default function DocumentationPage() {
  return (
      <main className="flex-1">
   
          {/* Hero Section */}
           <section className="flex align-center justify-center w-full h-full pt-8">
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
                 <LottieAnimation4 />
                 </div>
             </div>
           </section>

          {/* Questions Personas section */}
          <section className="w-full py-4">
          <div className="flex justify-center align-center px-4 md:px-6">
              <ExpandableCardNIP
              />
             </div>
           </section>

          {/* Hero Section */}
          <section className="flex align-center justify-center w-full h-full pt-24">
             <div className="grid grid-cols-6 justify-center align-center px-4 md:px-6">
             <div className="col-span-1">
                 </div>
                 <div className="col-span-4 place-self-center">
                   <div className="py-2 text-center">
                     <TextAnimate className="text-xl font-googletitre" animation="blurIn" as="h1">Les infos au complet</TextAnimate>
                   </div>
                   <div className="w-10/12 py-8 space-y-2 mx-auto text-center">  
                     <p className="text-xl font-regular font-googletitre text-lightblue">
                        Des ressources et des infos pour vous accompagner avant, pendant et après votre projet web.        
                     </p> 
                   </div>
                 </div>
               <div className="col-span-1">

                 </div>
             </div>
           </section>


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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Learning Paths
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Follow structured learning paths to master specific areas of
                  digital marketing.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">SEO Specialist</h3>
                    <p className="text-muted-foreground">
                      Master search engine optimization from beginner to
                      advanced level.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">0%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-0 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <Link href="/learning-paths/seo">
                    <Button className="w-full">Start Learning</Button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">UX Designer</h3>
                    <p className="text-muted-foreground">
                      Learn to create user-friendly and engaging website
                      experiences.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">0%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-0 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <Link href="/learning-paths/ux">
                    <Button className="w-full">Start Learning</Button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Content Strategist</h3>
                    <p className="text-muted-foreground">
                      Develop skills to create and manage effective website
                      content.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">0%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-0 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <Link href="/learning-paths/content">
                    <Button className="w-full">Start Learning</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
