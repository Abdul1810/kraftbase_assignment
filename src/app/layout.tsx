import type { Metadata } from "next"
import type React from "react"
import "./globals.css"


export const metadata: Metadata = {
  title: "Kraftbase Brand Guidelines",
  description: "Brand guidelines for Kraftbase",
  icons: [
      {
          url: "favicon.ico",
          type: "image/x-icon",
      },
  ]
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
