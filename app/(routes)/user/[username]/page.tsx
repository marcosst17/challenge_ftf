'use client'
import RepositoryList from "@/app/_components/RepositoryList/index";
import callOctokit from "@/app/_utils/octokit";
import React, { useEffect, useState } from "react"
const UsernamePage = ({params}:any) => {

    const [userRepositories, setUserRepositories] = useState([])

    useEffect(() => {
        // Get the repositories that belong to a given user and are publicly available
        callOctokit("/users/{owner}/repos", params.username).then(data => {
            setUserRepositories(data.data)
        })
    }, [params.username])

    return (
        <div className="text-slate-100 font-bold">
            <div className="m-auto mt-[2rem] lg:w-1/4 text-center">
                <p >{`${params.username}'s Repositories`}</p>
            </div>
            <RepositoryList repos={userRepositories} />
        </div>
    )
}

export default UsernamePage