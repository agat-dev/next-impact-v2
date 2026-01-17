export default function SolutionsHeadless({ headlessReasons }: { headlessReasons: any[] }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <span className="inline-block bg-coral/10 text-coral font-medium px-4 py-2 rounded-full text-sm mb-6">
              Pourquoi le Headless ?
            </span>
            <h2 className="text-5xl font-googletitre font-medium text-regularblue mb-6 text-balance">
              Le surcoût technique qui <span className="text-lightblue">rentabilise votre investissement</span>
            </h2>
            <p className="text-lg text-mediumblue/70 mb-8">
              Les solutions découplées (Astro/Next.js) demandent un investissement initial plus important, mais les bénéfices à long terme sont considérables.
            </p>
            <div className="space-y-6">
              {headlessReasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center">
                    <reason.icon className="h-6 w-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-medium text-regularblue mb-1">{reason.title}</h3>
                    <p className="text-mediumblue/70 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fadeInRight">
            <img src="/illustrations/headless-architecture.svg" alt="Architecture Headless" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
