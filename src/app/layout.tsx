import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'Next.js Tutorial - Codevolution', // for the pages that dont have title Metadata
    template: '%s | Codevolution', // put the title of the page instad of the (%s) and the complete is (| Codevolution)
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header className="bg-blue-400 p-4">
        <p className="">Header</p>
      </header>

        {children}
        
      <footer className="bg-blue-700 p-4">
        <p>Footer</p>
      </footer>
        </body>
    </html>
  )
}
