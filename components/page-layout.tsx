"use client";

import React from "react";
import Threads from "@/components/ui/threads";

interface PageLayoutProps {
    titre: string;
    sousTitre?: string;
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ titre, sousTitre, children }) => (
    <div className="relative w-full h-[125vh] flex flex-col">
        {/* Décorations en arrière-plan */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Gradient en arrière-plan */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-gradient-to-b from-darkblue via-mediumblue to-white"
            />
            {/* Threads au-dessus du gradient */}
            <div className="absolute inset-0 z-10">
                <Threads
                    color={[239/255, 242/255, 167/255]} // #F0F2A7
                    amplitude={2}
                    distance={0.6}
                    enableMouseInteraction={false}
                    height="100vh" // occupe toute la hauteur visible
                />
            </div>
        </div>
        {/* Layout principal */}
        <section className="relative w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
            <div className="container px-4 md:px-6">
                <div className="flex justify-center space-y-4 py-8">
                    <h1 className="font-medium text-center text-white/80">{titre}</h1>
                </div>
                {sousTitre && (
                    <p className="text-white/70 text-center max-w-3xl mx-auto">{sousTitre}</p>
                )}
            </div>
        </section>
        {/* Contenu principal de la page */}
        <main className="relative z-20 flex-1 flex flex-col">
            {children}
        </main>
    </div>
);

export default PageLayout;