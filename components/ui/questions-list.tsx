"use client";

import { ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function QuestionsList() {
    const [showResources, setShowResources] = useState(false);
    const resourcesRef = useRef<HTMLDivElement>(null);

    // Gestion des clics en dehors de la div
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
                setShowResources(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='relative grid grid-cols-2 gap-4 p-4 md:p-8 lg:p-12'>
            <div className='col-span-1 flex flex-row gap-4 relative'>
                <div>
                    <div className='flex gap-4 relative items-center justify-center bg-white rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:shadow-lg'>
                        <Image
                            src="/img/astronaut-doing-fishing.svg"
                            alt="Next Impact Logo"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-regularblue mb-2">Par où commencer ?</h3>
                            <p>
                                Créer un site web peut vite devenir flou quand on ne sait pas par où commencer.
                            </p>
                        </div>
                        <ChevronDown
                            className="text-regularblue cursor-pointer"
                            size={64}
                            onClick={() => setShowResources(!showResources)}
                        />
                    </div>
                    {/* Resources Section */}
                    <motion.div
                        ref={resourcesRef}
                        initial={{ height: 0, opacity: 0 }}
                        animate={showResources ? { height: "13rem", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col justify-between bg-white rounded-lg shadow-md p-2 overflow-hidden z-10"
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={() => setShowResources(false)}
                        >
                            <X size={24} />
                        </button>
                        <div className="h-full p-4 flex flex-col items-center justify-between">
                        <h3 className="text-xl font-bold text-center text-regularblue mb-2">
                        Trouvez l’essentiel pour y voir plus clair</h3>
                        <div>
                                <Link href="/commencent-commencer" className="pl-2 text-sm font-medium text-regularblue hover:text-white">
                                <Button className="gap-1 rounded-3xl bg-white border border-regularblue/30 hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">                               
                                    <Image
                                        src="/img/tools.gif"
                                        alt="Ressources"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    Outils en ligne
                                </Button>
                                </Link>
                                <Link href="/commencent-commencer" className="pl-2 text-sm font-medium text-regularblue hover:text-white">
                                <Button className="gap-1 rounded-3xl bg-white border border-regularblue/30 hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">
                                <Image
                                        src="/img/folder.gif"
                                        alt="Ressources"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    Ressources 
                                </Button>
                                </Link>
                            </div>
                            <div className="flex justify-around gap-4 mt-2">                                
                                <Link href="/commencent-commencer" className="pl-2 text-sm font-medium text-regularblue hover:text-white">
                                <Button className="gap-1 rounded-3xl bg-white border border-regularblue/30 hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">
                                <Image
                                        src="/img/meet.gif"
                                        alt="Ressources"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    RDV Conseil
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}