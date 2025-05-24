"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Realisations() {
    return (
                
        <section id="realisations" className="py-12 relative overflow-hidden">
          <div className="absolute"></div>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center mb-16"
            >
                <div className="pb-12 text-center">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full text-lightblue tracking-wider">
                        PROJETS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-6">
                        Réalisations récentes
                    </h2>
                    <p className="text-xl text-lightblue max-w-3xl mx-auto">
                        Chaque projet est unique et conçu pour répondre aux besoins spécifiques de mes clients.
                    </p>
                </div>
            </motion.div>

            <Tabs defaultValue="tous" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-white p-1 rounded-full">
                  <TabsTrigger value="tous" className="rounded-full data-[state=active]:bg-background/10">
                    Tous les projets
                  </TabsTrigger>
                  <TabsTrigger value="ecommerce" className="rounded-full data-[state=active]:bg-background/10">
                    E-commerce
                  </TabsTrigger>
                  <TabsTrigger value="corporate" className="rounded-full data-[state=active]:bg-background/10">
                    Corporate
                  </TabsTrigger>
                  <TabsTrigger value="blog" className="rounded-full data-[state=active]:bg-background/10">
                    Blog & Magazine
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="tous" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-background transition-all duration-500 hover:shadow-xs">

                        <div className="aspect-video overflow-hidden">
                          <img
                            src={`/placeholder-fq60p.png?height=400&width=600&query=professional wordpress website design ${item}`}
                            alt={`Projet ${item}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-teal-600">
                            Projet {item}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            {item % 2 === 0
                              ? "Site e-commerce avec fonctionnalités personnalisées"
                              : "Site corporate avec design sur mesure"}
                          </p>
                          <div className="mt-4">
                            <Link
                              href={`/realisations/${item}`}
                              className="inline-flex items-center text-sm font-medium text-teal-600 transition-all duration-300 hover:translate-x-1"
                            >
                              Voir le projet
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ecommerce" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[2].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all duration-500 hover:shadow-xl">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={`/ecommerce-wordpress-design.png?height=400&width=600&query=ecommerce wordpress website design ${item}`}
                            alt={`Projet E-commerce ${item}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-teal-600">
                            E-commerce {item}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            Site e-commerce avec fonctionnalités personnalisées
                          </p>
                          <div className="mt-4">
                            <Link
                              href={`/realisations/${item}`}
                              className="inline-flex items-center text-sm font-medium text-teal-600 transition-all duration-300 hover:translate-x-1"
                            >
                              Voir le projet
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="corporate" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 3].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all duration-500 hover:shadow-xl">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={`/corporate-wordpress-website.png?height=400&width=600&query=corporate wordpress website design ${item}`}
                            alt={`Projet Corporate ${item}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-teal-600">
                            Corporate {item}
                          </h3>
                          <p className="mt-2 text-muted-foreground">Site corporate avec design sur mesure</p>
                          <div className="mt-4">
                            <Link
                              href={`/realisations/${item}`}
                              className="inline-flex items-center text-sm font-medium text-teal-600 transition-all duration-300 hover:translate-x-1"
                            >
                              Voir le projet
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="blog" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all duration-500 hover:shadow-xl">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={`/wordpress-blog-design.png?height=400&width=600&query=blog wordpress website design ${item}`}
                            alt={`Projet Blog ${item}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-teal-600">
                            Blog {item}
                          </h3>
                          <p className="mt-2 text-muted-foreground">Blog ou magazine avec design personnalisé</p>
                          <div className="mt-4">
                            <Link
                              href={`/realisations/${item}`}
                              className="inline-flex items-center text-sm font-medium text-teal-600 transition-all duration-300 hover:translate-x-1"
                            >
                              Voir le projet
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

          </div>
        </section>
    );
    }