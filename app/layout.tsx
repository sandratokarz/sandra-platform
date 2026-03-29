import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Enablement Operating Model| Sandra Tokarz',
  description: ' hands-on demonstration of how AI enablement drives adoption, behavior change, and measurable business impact.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}