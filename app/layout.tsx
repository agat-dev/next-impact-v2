"use client";

import type { Metadata } from 'next'
import Header from '@/components/header'
import './globals.css'
import { Particles } from "@/components/magicui/particles";
import Footer from '@/components/footer';
import CalendlyBadge from '@/components/ui/calendly-widget';





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode 
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />    
        <link rel="icon" href="/img/logo-small.png" />

        <title>Next Impact - Tout pour lancer son site</title> 
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Quicksand:wght@300..700&family=Inter:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
        </head>
{/* Google tag (gtag.js) */}
<script
  defer
  src="https://www.googletagmanager.com/gtag/js?id=G-3D5PKXEN72"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3D5PKXEN72');
    `,
  }}
/>
      <body>
      <Particles
        className="absolute inset-0 z-0 h-screen w-full mx-auto"
        quantity={150}
        ease={50}
        color={"#E0C035"}
        refresh
      />      
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 h-[500px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-30 blur-3xl"></div>
          </div>
        <Header />
        {children}
        <Footer />
        <CalendlyBadge />
        </body>
    </html>
  )
}
