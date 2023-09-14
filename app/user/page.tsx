'use client'
import SearchBar from "../_components/SearchBar"
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