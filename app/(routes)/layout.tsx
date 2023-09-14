import '../globals.css'
import type { Metadata } from 'next'
import Link from "next/link"
import { Inter } from 'next/font/google'
import SearchBar from '../_components/SearchBar/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fulltimeforce Task',
  description: 'Github Commit History Application',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-500 p-4 text-white">
          <Link href="/">
            <h1 className="text-2xl font-bold">FTF - Github Commit History</h1>
          </Link>
          <nav className="mt-2">
            <Link href="/user/marcosst17/challenge_ftf" className="mx-2">Challenge Repository</Link>
            <Link href="/about" className="mx-2">About</Link>
            <SearchBar  />
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
