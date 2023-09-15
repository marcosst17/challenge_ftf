"use client"
import { useEffect, useState } from "react"
import ToggleComponent from "../Toggle/index"
import FilterComponent from "../Toggle/index"
import RepositoryItem from "./RepositoryItem"

type RepositoryListProps = {
    repos:any[]
}

const RepositoryList = ({repos}:RepositoryListProps) => {

    const [filteredRepos, setFilteredRepos] = useState(repos)
    const [allRepos, setAllRepos] = useState(repos)
    const [reposShown, setReposShown] = useState(repos)
    const [onStartup, setOnStartup] = useState(true)

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked((prevState) => {
            if(!prevState){
                setReposShown(allRepos)
            } else {
                setReposShown(filteredRepos)
            }
            return !prevState
        });
    };


    useEffect(() => {
        if(onStartup && repos?.length > 0){
            let notForked = repos.filter((el:any) => !el.fork)
            setFilteredRepos(notForked)
            setReposShown(notForked)
            setOnStartup(false)
        }
        if(repos?.length > 0) {
            setAllRepos(repos)
        }
    }, [repos, isChecked, onStartup])


    return (
        <div className="main">
            <div className="filter-container flex justify-center items-center gap-4 mt-4">
                <p className="secondary-text">Show Forked Repos</p>
                <ToggleComponent handleToggle={handleToggle} isChecked={isChecked} />
            </div>
            <div className="flex flex-col p-8 gap-4 w-1/2 m-auto">
                {
                    reposShown?.length > 0 ?
                    reposShown.map(el => {
                        return <RepositoryItem 
                                    key={el.id} 
                                    repoName={el.name} 
                                    repoOwner={el.owner.login}
                                    openIssues={el.open_issues}
                                    htmlUrl={el.html_url}
                                    forked={el.fork}
                                    language={el.language}
                                    updatedAt={el.updated_at}
                                />
                    })
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default RepositoryList