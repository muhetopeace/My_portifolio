import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Peace Bamurange - Portfolio',
  description: 'Full Stack Developer and UI/UX Designer Portfolio',
  keywords: 'Peace Bamurange, Web Developer, UI/UX Designer, React, Next.js, TypeScript',
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
