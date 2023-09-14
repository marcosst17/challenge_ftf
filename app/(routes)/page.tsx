"use client"

import { useState } from "react"
import SearchBar from "../_components/SearchBar/index"

// import Image from 'next/image'

{/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
export default function Home() {

  const [searchState, setSearchState] = useState<string>("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar searchState={searchState} setSearchState={setSearchState} />
    </main>
  )
}
