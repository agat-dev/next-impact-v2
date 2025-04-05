import type { Metadata } from 'next'
import Header from '@/components/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}


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
        <link rel="stylesheet" href="https://use.typekit.net/ilu1rkm.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&family=Inter:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
        </head>
      <body>
        <Header />
        {children}</body>
    </html>
  )
}
