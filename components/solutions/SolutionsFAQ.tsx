import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function SolutionsFAQ({ faqs }: { faqs: any[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-5xl font-googletitre font-medium text-regularblue mb-6">Questions fréquentes</h2>
          <p className="text-lg text-mediumblue/70">Répondre à vos objections</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="overflow-hidden rounded-2xl border-lightblue/20 shadow">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-extralightblue/30 transition-colors"
              >
                <h3 className="text-lg font-medium text-regularblue pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-lightblue flex-shrink-0 transition-transform ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-mediumblue/70 leading-relaxed animate-fadeInUp">{faq.answer}</div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
