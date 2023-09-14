"use client"
import CommitList from "@/app/_components/CommitList/indes";
import callOctokit from "@/app/_utils/octokit";
import React, { useEffect, useState } from "react"

const RepoPage = ({params}:any) => {

    const [repoCommits, setRepoCommits] = useState([])

    useEffect(() => {
        callOctokit("/repos/{owner}/{repo}/commits", params.username, params.repo).then(data => {
            setRepoCommits(data.data)
        })
    }, [params.username, params.repo])

    return (
        <div className="text-slate-100 font-bold">
            <p>{params.username}</p>
            <CommitList commits={repoCommits} />
        </div>
    )
}

export default RepoPage