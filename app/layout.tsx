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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />      
        <link rel="stylesheet" href="https://use.typekit.net/ilu1rkm.css"></link>
      </head>
      <body>
        <Header />
        {children}</body>
    </html>
  )
}
