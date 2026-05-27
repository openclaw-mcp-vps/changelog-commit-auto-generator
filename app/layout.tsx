import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChangelogAI – Generate Changelogs from Git Commits Automatically',
  description: 'Analyze git commits and generate customer-facing changelogs with AI. Categorize features, fixes, and breaking changes automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="46d0d5b5-a5db-4281-a72c-795abbf39edb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
