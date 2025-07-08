import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ini Desarrollos',
  description: 'Desarrollo Web Profesional',
  generator: 'INI Desarrollos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
