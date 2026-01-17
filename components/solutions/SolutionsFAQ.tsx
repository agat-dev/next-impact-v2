import FaqSchema from "@/components/ui/FaqSchema";

export default function SolutionsFAQ({ faqs }: { faqs: { question: string; answer: React.ReactNode }[] }) {
  return (
    <FaqSchema
      faqs={faqs}
      title="Questions fréquentes"
      description="Répondre à vos objections"
      sectionId="solutions-faq"
    />
  );
}
