"use client"
import { useEffect, useState } from "react"
import Spinner from "../IconLibrary/Spinner"
import ToggleComponent from "../Toggle/index"
import RepositoryItem from "./RepositoryItem"

type RepositoryListProps = {
    repos:any[],
    error:boolean,
}

const RepositoryList = ({repos, error}:RepositoryListProps) => {

    const [filteredRepos, setFilteredRepos] = useState(repos)
    const [allRepos, setAllRepos] = useState(repos)
    const [reposShown, setReposShown] = useState(repos)
    const [isLoading, setIsLoading] = useState(true)
    const [onStartup, setOnStartup] = useState(true)

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        // Toggle between not forked repositories and all repositories
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
        if(error){
            setIsLoading(false)
        }
        if(onStartup && repos?.length > 0){
            setIsLoading(false)
            // Check once to fill state
            let notForked = repos.filter((el:any) => !el.fork)
            setFilteredRepos(notForked)
            setReposShown(notForked)
            setOnStartup(false)
        }
        if(repos?.length > 0) {
            setAllRepos(repos)
        }
    }, [repos, onStartup, error])

    if(!isLoading && error){
        return (
            <div className="flex flex-row items-center justify-center mt-8">
                User does not exist.
            </div>
        )
    }


    return (
        <div className="main">
            <div className="filter-container flex justify-center items-center gap-4 mt-4">
                <p className="secondary-text">Show Forked Repos</p>
                <ToggleComponent handleToggle={handleToggle} isChecked={isChecked} />
            </div>
            <div className="flex flex-col p-8 gap-4 lg:w-1/2 m-auto">
                {
                    isLoading && <Spinner />
                }
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