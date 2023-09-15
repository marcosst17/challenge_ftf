"use client"

import Link from "@/node_modules/next/link"
import { NewTabIcon } from "../_components/IconLibrary/index"
import TechUsed from "../_components/IconLibrary/TechUsed"

export default function Home() {

  return (
    <main className="flex flex-col text-center items-center justify-between p-6">
      <div>
        <div>
          <h1 className="text-4xl font-bold mb-6 primary-text">Development Information</h1>
        </div>
        <div>
          <div>
            <p className="mb-4 secondary-text">This project was made using <b>NextJs13</b> with <b>Typescript</b> and <b>TailwindCSS</b></p>
            <TechUsed />
          </div>
          <p className="mb-4 secondary-text">It calls the github API to get all the repositories from a user</p>
          <p className="mb-4 secondary-text">You can then enter any given repo to see all the commits for it</p>
        </div>
        <div className="homepage-shortcut-div flex justify-center flex-row items-center">
          <Link href="/user/marcosst17/challenge_ftf" className="flex flex-col items-center gap-2">
            <NewTabIcon width="24" height="24" className="newtab-icon" />
            <p className="primary-text homepage-shortcut-text underline underline-offset-4">Jump straight to the challenge repository</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
