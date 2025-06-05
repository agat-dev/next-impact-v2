import ServicesDev from "@/components/services-dev";
import Hero from "@/components/hero";
import Tools from "@/components/tools";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq"
import { CTASection } from "@/components/cta-section";




export default function Home() {


  return (
    <>
      <main className="flex-1">

       {/* Hero Section */}
       <Hero />

      {/* Dev Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[900px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[1200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <ServicesDev />

      {/* Tools Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[1900px] left-0 h-[1000px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[2200px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <Tools />

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
        <CTASection />
      </main>

    </>
  );
}
