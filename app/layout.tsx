import type { Metadata } from "next"
import type React from "react"
import "./globals.css"


export const metadata: Metadata = {
  title: "Kraftbase Brand Guidelines",
  description: "Brand guidelines for Kraftbase",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-atlas">
        {children}
      </body>
    </html>
  )
}
