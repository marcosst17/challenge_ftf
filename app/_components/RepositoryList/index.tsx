"use client"
import { useEffect } from "react"
import RepositoryItem from "./RepositoryItem"

type RepositoryListProps = {
    repos:any[]
}

const RepositoryList = ({repos}:RepositoryListProps) => {


    // Memory helper
    useEffect(() => {
        if(repos?.length > 0){
            const repoStructure = {
                updatedAt: repos[0].updated_at,
                openIssues: repos[0].open_issues,
                name: repos[0].name,
                owner: repos[0].owner.login,
                forked: repos[0].fork,
                htmlUrl: repos[0].html_url,
                language: repos[0].language,
            }
            console.log({repoStructure});
        }
    }, [repos])


    return (
        <div className="main flex flex-col p-8 gap-2">
            {
                repos?.length > 0 ?
                repos.map(el => {
                    return <RepositoryItem 
                                key={el.id} 
                                repoName={el.name} 
                                repoOwner={el.owner.login}
                                openIssues={el.open_issues}
                                htmlUrl={el.html_url}
                            />
                })
                :
                <></>
            }
        </div>
    )
}

export default RepositoryList