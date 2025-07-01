import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'INI Dev',
  description: 'Desarrollo Web Profesional',
  generator: 'INI Dev',
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
