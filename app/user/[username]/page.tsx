'use client'
import useOctokit from "@/app/_hooks/octokit";

const UsernamePage = ({params}:any) => {

    useOctokit("marcosst17", "challenge_ftf").then(data => {console.log(data)})

    return (
        <div className="text-slate-100 font-bold">
            <p>{params.username}</p>
        </div>
    )
}

export default UsernamePage