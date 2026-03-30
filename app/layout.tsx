import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sandra Tokarz | AI Enablement & L&D Platform',
  description: 'Interactive platform demonstrating AI enablement strategy, role-based learning, and L&D leadership by Sandra Tokarz — Strategic L&D Leader with 12+ years experience.',
  metadataBase: new URL('https://sandratokarz.com'),
  openGraph: {
    title: 'Sandra Tokarz | AI Enablement Platform',
    description: 'Explore how AI capability is built across roles, leadership levels, and geographies.',
    url: 'https://sandratokarz.com',
    siteName: 'Sandra Tokarz',
    locale: 'en_US',
    type: 'website',
  },
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