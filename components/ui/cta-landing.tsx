import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

    interface CtaLandingProps {
        title: ReactNode;
        description: ReactNode;
        buttonText: string;
        buttonLink: string;
        buttonVariant?: "default" | "secondary" | "link" | "destructive" | "outline" | "ghost";
        button2Text?: string;
        button2Link?: string;
        button2Variant?: "secondary" | "secondary";
    }

    export function CtaLanding({
        title,
        description,
        buttonText,
        buttonLink,
        buttonVariant = "default",
        button2Text,
        button2Link,
        button2Variant = "secondary",
    }: CtaLandingProps) {
        return (
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-4xl font-medium text-regularblue mb-4">
                    {title}
                </h2>
                <p className="mb-6 text-lg text-regularblue/80">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={buttonLink}>
                        <Button
                            size="lg"
                            variant={buttonVariant}
                            className="gap-1 rounded-full text-white bg-regularblue/90 hover:bg-regularblue/80"
                        >
                            {buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <a
                        href={button2Link || "https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size="lg"
                            variant={button2Variant}
                            className="gap-1 rounded-full text-regularblue bg-extralightblue/40 hover:bg-extralightblue/30"
                        >
                            {button2Text || "Prendre rendez-vous"}
                        </Button>
                    </a>
                </div>
            </section>
        );
    }