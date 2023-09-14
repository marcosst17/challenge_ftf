'use client'
import SearchBar from "@/app/_components/SearchBar/index"
import { useState } from "react"

const UserPage = () => {

    const [searchState, setSearchState] = useState<string>("")

    return (
        <div>
            <SearchBar searchState={searchState} setSearchState={setSearchState} />
        </div>
    )
} 

export default UserPage