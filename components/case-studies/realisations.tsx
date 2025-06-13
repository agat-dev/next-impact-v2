"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
		description: "Site corporate multilingue",
		link: "/etudes-de-cas/proditec",
		tab: ["derniers", "corporate"],
	},
	{
		id: 6,
		title: "French Touch Seeds",
		type: "ecommerce",
		image: "/img/logo_french-touch-seeds.avif",
		alt: "French Touch Seeds",
		description: "Site e-commerce multilingue",
		link: "/etudes-de-cas/french-touch-seeds",
		tab: ["derniers", "ecommerce"],
	},
	{
		id: 4,
		title: "Les Doléances",
		type: "headless",
		image: "/img/logo-doleances.png",
		alt: "Vitrine des Doléances",
		description: "Vitrine des Doléances de 2018-2019",
		link: "/etudes-de-cas/doleances",
		tab: ["derniers", "derniers", "headless"],
	},
	{
		id: 2,
		title: "Sowee",
		type: "corporate",
		image: "/img/logo-sowee.png",
		alt: "Section blog de Sowee",
		description: "Section blog de Sowee",
		link: "/etudes-de-cas/sowee",
		tab: ["derniers", "derniers", "corporate"],
	},
	{
		id: 6,
		title: "Salon de la Carrosserie 2024",
		type: "corporate",
		image: "/img/logo-salondelacarrosserie.webp",
		alt: "Site vitrine du Salon de la Carrosserie 2024",
		description: "Site vitrine du Salon de la Carrosserie 2024",
		link: "/etudes-de-cas/salon-de-la-carrosserie",
		tab: ["derniers",  "corporate"],
	},
	{
		id: 7,
		title: "Tiers Lieu L'Hermitage",
		type: "corporate",
		image: "/img/logo-hermitage.png",
		alt: "Site vitrine du Tiers Lieu L'Hermitage",
		description: "Site vitrine du Tiers Lieu L'Hermitage",
		link: "/etudes-de-cas/hermitage",
		tab: ["derniers", "corporate"],
	},
	{
		id: 8,
		title: "ERP Services",
		type: "corporate",
		image: "/img/logo-erp-services.webp",
		alt: "Site vitrine d'ERP Services",
		description: "Site vitrine d'ERP Services",
		link: "/etudes-de-cas/erp-services",
		tab: ["derniers", "corporate"],
	},
	{
		id: 9,
		title: "Senza Nature",
		type: "ecommerce",
		image: "/img/logo-senza-nature.png",
		alt: "Site ecommerce Senza Nature",
		description: "Site ecommerce Senza Nature",
		link: "/etudes-de-cas/senza-nature",
		tab: ["derniers", "ecommerce"],
	},
	{
		id: 10,
		title: "Wagner Hamisky",
		type: "corporate",
		image: "/img/logo-wagner-hamisky.jpeg",
		alt: "Site vitrine Wagner Hamisky",
		description: "Site vitrine de la galerie Wagner Hamisky",
		link: "/etudes-de-cas/wagner-hamisky",
		tab: ["derniers", "corporate"],
	},
];

// Fonction utilitaire pour filtrer les projets par tab et limiter le nombre
const getProjectsByTab = (tab: string, count: number) =>
	PROJECTS.filter((project) => project.tab.includes(tab)).slice(0, count);

interface RealisationsProps {
	count?: number;
}

export default function Realisations({ count }: RealisationsProps) {
	// Limiter le nombre de réalisations affichées par tab
	return (
		<section id="realisations" className="py-12 relative overflow-hidden">
			<div className="absolute"></div>
			<div className="container relative p-0">


				<Tabs defaultValue="derniers" className="w-full">
					<div className="flex justify-center mb-12">
						<TabsList className="flex flex-wrap md:bg-white bg-transparent p-1 rounded-full">
							<TabsTrigger value="derniers" className="rounded-full data-[state=active]:bg-background/10">
								Réalisations marquantes
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

					{["derniers", "corporate", "ecommerce", "headless"].map((tab) => (
						<TabsContent
							value={tab}
							className="mt-0"
							key={tab}
						>
							<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
								{getProjectsByTab(tab, count ?? PROJECTS.length).map((project, index) => (
									<motion.div
										key={project.id}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="h-full"
									>
										<div className="group relative overflow-hidden rounded-2xl bg-background transition-all duration-500 hover:shadow h-full flex flex-col">
											<div className="flex align-middle aspect-video overflow-hidden">
												<img
													src={project.image}
													alt={project.alt}
													height={200}
													width={200}
													loading="lazy"
													className="w-6/12 mx-auto pt-8 object-contain transition-transform duration-500 group-hover:scale-105"
												/>
											</div>
											<div className="p-6 flex flex-col flex-1">
												<h3 className="text-xl font-bold transition-colors duration-300 text-regularblue group-hover:text-regularblue/70">
													{project.title}
												</h3>
												<p className="mt-2 text-regularblue/70 text-sm group-hover:text-regularblue/50">
													{project.description}
												</p>
												<div className="mt-4 mt-auto">
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