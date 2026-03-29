import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sandra Tokarz | L&D Platform',
  description: 'Interactive Learning & Development Platform',
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