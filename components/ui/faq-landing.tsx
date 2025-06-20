import React from "react";

    type FaqItem = {
        question: string;
        answer: string;
    };

    type FaqLandingProps = {
        title?: string;
        items: FaqItem[];
    };

    export const FaqLanding: React.FC<FaqLandingProps> = ({
        title = "Foire aux questions",
        items,
    }) => (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-medium text-regularblue mb-4">{title}</h2>
            </div>
            <div className="grid gap-8 max-w-3xl mx-auto">
                {items.map((item, idx) => (
                    <div key={idx}>
                        <h3 className="font-semibold text-regularblue mb-2">{item.question}</h3>
                        <p className="text-mediumblue">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
