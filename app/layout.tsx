import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reflectia - Find Your Inner Balance',
  description: 'Share anonymous feedback and track your personal growth journey',
  keywords: 'reflection, feedback, personal growth, self-improvement, anonymous feedback',
  authors: [{ name: 'Reflectia' }],
  openGraph: {
    title: 'Reflectia - Find Your Inner Balance',
    description: 'Share anonymous feedback and track your personal growth journey',
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
