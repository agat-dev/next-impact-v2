import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import DocTabs from "@/components/documentation/doc-tabs";
import { TextAnimate } from "@/components/magicui/text-animate";
import LottieAnimation from "@/components/ui/lottie-animation";
import { ExpandableCardNIP } from "@/components/conseil/expandable-cards";

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
              {/* Hero Section */}
        <section className="container mx-auto px-4 md:py-16 pt-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-12 mb-6">
            Ressources 
          </h1>
          <p className="text-xl text-regularblue/80 max-w-3xl mx-auto">
            Explorez notre documentation complète pour maîtriser WordPress, Next.js et les technologies web modernes. Des guides pratiques aux tutoriels avancés, trouvez tout ce dont vous avez besoin pour réussir vos projets.
          </p>
              <div className="container mx-auto py-12">
                <DocTabs />
              </div>
        </section>
      </main>
  );
}
