"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Advantages() {

  const features = [
    {
      id: "frontend",
      title: "Front-end flexible et puissant",
      description: "Des front-end adaptés aux exigeances du web moderne et de vos visiteurs développées sur-mesure avec les dernières technologies.",
      image: "/img/desktop-screen-next-event.jpg?height=400&width=600",
    },
    {
      id: "administration",
      title: "Admin de WordPress",
      description: "En conservant WordPress comme outil d'administration, votre site web reste facilement administrable.",
      image: "/img/desktop-screen-wordpress.jpg?height=400&width=600",
    },
  ]
   
  const [selectedFeature, setSelectedFeature] = useState(features[0].id)

  const currentFeature = features.find((feature) => feature.id === selectedFeature) || features[0]
 
  return (
    <>
      <div className="container px-0">
        <h2 className="text-5xl font-medium text-center mb-2 text-regularblue">Pourquoi passer en Headless ?</h2>
        <p className="text-regularblue/80 text-lg max-w-3xl mx-auto">
          En combinant la puissance de WordPress avec des technologies front-end modernes, j'offre des solutions web qui allient facilité d'utilisation, performance et design attractif.
        </p>
        <div className="mt-16 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features List */}
            <div className="space-y-4">
              <div className="space-y-2">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedFeature(feature.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-3xl border transition-all duration-200 group",
                      selectedFeature === feature.id
                        ? "bg-extralightblue/5 border-regularblue/20 hover:bg-extralightblue/30"
                        : "bg-white/70 border-border hover:bg-white/80",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3
                          className={cn(
                            "font-medium text-3xl transition-colors",
                            selectedFeature === feature.id ? "text-orange" : "text-regularblue group-hover:text-foreground",
                          )}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={cn(
                            "transition-colors border-t border-orange pt-6",
                            selectedFeature === feature.id
                              ? "text-mediumblue/80"
                              : "text-mediumblue/80 group-hover:text-mediumblue/70",
                          )}
                        >
                          {feature.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={cn(
                          "h-5 w-5 transition-all duration-200 ml-4 flex-shrink-0",
                          selectedFeature === feature.id
                            ? "text-orange rotate-360"
                            : "text-mediumblue/80 group-hover:text-mediumblue group-hover:translate-x-1",
                        )}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Video + Content with Framer Motion */}
            <div className="lg:sticky lg:top-8">
              <div className="relative aspect-[3/2] rounded-3xl overflow-hidden bg-muted border shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <video
                      src={currentFeature.image || "/placeholder.mp4"}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover object-left w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                        <h4 className="font-medium text-regularblue mb-1">{currentFeature.title}</h4>
                        <p className="text-sm text-regularblue/80">{currentFeature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
