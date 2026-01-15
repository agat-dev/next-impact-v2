"use client";
import Hero from "@/components/hero";
import { ExpandableCardDemo } from "./expandable-cards";
import DetailsServices from "./details-services";
import QuestCeQueHeadless from "@/components/quest-ce-que-headless";
import PourquoiSection from "@/components/pourquoi-headless";
import PourQuiSection from "@/components/pour-qui-section";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Logos } from "./logos";
import { VideoDemo } from "./video-demo";

export default function HomeClient() {


  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Whats's Headless Section */}
        <ExpandableCardDemo />

        {/* Video Demo Section */}
        <VideoDemo />

      </main>
    </>
  );
}
