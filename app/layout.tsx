"use client";

import type { Metadata } from 'next'
import Header from '@/components/header'
import './globals.css'
import { Particles } from "@/components/magicui/particles";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode 
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />     
        <title>Next Impact - Tout pour lancer son site</title> 
        <link rel="stylesheet" href="https://use.typekit.net/ilu1rkm.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&family=Inter:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
        </head>
      <body>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={50}
        color={"#E0C035"}
        refresh
      />
        <Header />
        {children}
        </body>
    </html>
  )
}
