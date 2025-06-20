import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { title } from 'process';

interface SolutionLandingProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    features?: string[];
}

export default function SolutionLanding({
    title,
    subtitle,
    imageUrl,
    features,
    }: SolutionLandingProps
) {
    return (
    <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-regularblue mb-4">
            {title}
          </h2>
          <p className="text-lg text-regularblue/80">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
            <Image
                src={imageUrl || '/images/motivation-landing.jpg'}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg mb-8"
            />
        </div>
        <div className="max-w-2xl mx-auto">
        {features && features.length > 0 && (
            <ul className="mt-6 space-y-6 text-mediumblue text-lg">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-regularblue" />
                        {feature}
                    </li>
                ))}
            </ul>
        )}
        </div>
        </div>
      </section>
    );
    }