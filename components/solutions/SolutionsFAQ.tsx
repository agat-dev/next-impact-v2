import FaqSchema from "@/components/ui/FaqSchema";

export default function SolutionsFAQ({ faqs }: { faqs: { question: string; answer: React.ReactNode }[] }) {
  return (
    <main className="w-full bg-white/10 backdrop-blur-lg border-extralightblue/40">
    <FaqSchema
      faqs={faqs}
      title="Questions fréquentes"
      description="Répondre à vos objections"
      sectionId="solutions-faq"
    />
    </main>
  );
}
