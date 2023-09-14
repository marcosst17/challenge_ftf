import '../globals.css'
import type { Metadata } from 'next'
import Link from "next/link"
import { Inter, Poppins } from 'next/font/google'
import SearchBar from '../_components/SearchBar/index'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ["latin"], weight: '400'})

export const metadata: Metadata = {
  title: 'Fulltimeforce Task',
  description: 'Github Commit History Application',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <header className="bg-blue-500 p-4 text-white main-header">
          <Link href="/">
            <h1 className="text-2xl font-bold main-title text-center">FTF - Github Commit History</h1>
          </Link>
          <div className="main-nav">
            <div className="mt-2 flex nav-row nav-row-links">
              <Link href="/user/marcosst17/challenge_ftf" className="mx-2">
                <p>Search for a user</p>
              </Link>
            </div>
            <div className="mt-2 flex nav-row">
              <SearchBar  />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
