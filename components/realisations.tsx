"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Définition des projets
const PROJECTS = [
	{
		id: 1,
		title: "Proditec",
		type: "corporate",
		image: "/img/logo-proditec.webp",
		alt: "Site corporate Proditec",
		description: "Refonte du site corporate multilingue",
		link: "/etudes-de-cas/proditec",
		tab: ["tous", "corporate"],
	},
	{
		id: 2,
		title: "French Touch Seeds",
		type: "ecommerce",
		image: "/img/logo_french-touch-seeds.avif",
		alt: "French Touch Seeds",
		description: "Site e-commerce multilingue",
		link: "/etudes-de-cas/french-touch-seeds",
		tab: ["tous", "ecommerce"],
	},
	{
		id: 4,
		title: "Les Doléances",
		type: "headless",
		image: "/img/logo-doleances.svg",
		alt: "Vitrine des Doléances",
		description: "Vitrine des Doléances de 2018-2019",
		link: "/etudes-de-cas/doleances",
		tab: ["tous", "headless"],
	},
];

// Fonction utilitaire pour filtrer les projets par tab
const getProjectsByTab = (tab: string) => PROJECTS.filter((project) => project.tab.includes(tab));

export default function Realisations() {
	return (
		<section id="realisations" className="py-12 relative overflow-hidden">
			<div className="absolute"></div>
			<div className="container relative">
				<div className="flex flex-col items-center text-center mb-16">
					<div className="pb-12 text-center">
						<span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full text-lightblue tracking-wider">
							PROJETS
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-6">
							Réalisations récentes
						</h2>
						<p className="text-xl text-regularblue/70 max-w-3xl mx-auto">
							Chaque projet est unique et conçu pour répondre aux besoins spécifiques de mes clients.
						</p>
					</div>
				</div>

				<Tabs defaultValue="tous" className="w-full">
					<div className="flex justify-center mb-12">
						<TabsList className="bg-white p-1 rounded-full">
							<TabsTrigger value="tous" className="rounded-full data-[state=active]:bg-background/10">
								Tous les projets
							</TabsTrigger>
							<TabsTrigger value="corporate" className="rounded-full data-[state=active]:bg-background/10">
								Corporate
							</TabsTrigger>
							<TabsTrigger value="ecommerce" className="rounded-full data-[state=active]:bg-background/10">
								E-commerce
							</TabsTrigger>
							<TabsTrigger value="headless" className="rounded-full data-[state=active]:bg-background/10">
								Headless
							</TabsTrigger>
						</TabsList>
					</div>

					{["tous", "corporate", "ecommerce", "headless"].map((tab) => (
						<TabsContent value={tab} className="mt-0" key={tab}>
							<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
								{getProjectsByTab(tab).map((project, index) => (
									<motion.div
										key={project.id}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
									>
										<div className="group relative overflow-hidden rounded-2xl bg-background transition-all duration-500 hover:shadow">
											<div className="aspect-video overflow-hidden">
												<img
													src={project.image}
													alt={project.alt}
													className="max-h-full w-6/12 mx-auto pt-8 object-contain transition-transform duration-500 group-hover:scale-105"
												/>
											</div>
											<div className="p-6">
												<h3 className="text-xl font-bold transition-colors duration-300 text-regularblue group-hover:text-regularblue/70">
													{project.title}
												</h3>
												<p className="mt-2 text-regularblue/70 text-sm group-hover:text-regularblue/50">
													{project.description}
												</p>
												<div className="mt-4">
													<Link
														href={project.link}
														className="inline-flex items-center text-sm font-medium  text-regularblue group-hover:text-regularblue/70 transition-all duration-300 hover:translate-x-1"
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
					))}
				</Tabs>
			</div>
		</section>
	);
}