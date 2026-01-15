import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

/**
 * Font Configuration
 * ------------------
 * Using JetBrains Mono throughout for a clean, technical aesthetic.
 */
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Surya | Learning in Public",
  description: "A personal space documenting learnings, thoughts, and growth.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
