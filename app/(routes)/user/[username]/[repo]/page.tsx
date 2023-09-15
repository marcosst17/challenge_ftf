"use client"
import CommitList from "@/app/_components/CommitList/index";
import callOctokit from "@/app/_utils/octokit";
import React, { useEffect, useState } from "react"

const RepoPage = ({params}:any) => {

    const [repoCommits, setRepoCommits] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        // Get the commits of a given repository
        callOctokit("/repos/{owner}/{repo}/commits", params.username, params.repo).then(data => {
            setRepoCommits(data.data)
        }).catch((err) => {
            setRepoCommits([])
            setError(true)
        })
    }, [params.username, params.repo])

    return (
        <div className="text-slate-100 font-bold">
            <div className="m-auto mt-[2rem] lg:w-1/4 text-center">
                <p>{params.repo}</p>
            </div>
            <CommitList commits={repoCommits} error={error} />
        </div>
    )
}

export default RepoPage