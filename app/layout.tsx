import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HandbookAI — Keep Employee Handbooks Legally Current',
  description: 'Monitors labor law changes and suggests handbook updates with tracked changes. Stay compliant automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="95198372-d937-48d4-ab33-e42572accab6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
