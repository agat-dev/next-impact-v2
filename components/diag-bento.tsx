import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const files = [ 
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Trouver des infos",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 row-span-3 lg:col-span-3",
    background: (
        <div className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90">
            <p>test</p>   
        </div>                                                  
    ),
  },
  {
    Icon: BellIcon,
    name: "Auditer mon site",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2 lg:col-span-3",
    background: (
        <div className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
            <p>test</p>
        </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Choisir mon CMS",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2 lg:col-span-4",
    background: (
        <div className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90">
            <p>test</p>
        </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Génerer mon cahier des charges",
    description: "Consultation en ligne sur votre projet web.",
    className: "col-span-3 lg:col-span-3",
    href: "#",
    cta: "En savoir plus",
    background: (
        ''
    ),
  },
];

export function Bento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
