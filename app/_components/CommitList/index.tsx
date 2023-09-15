import { useEffect, useState } from "react"
import Spinner from "../IconLibrary/Spinner"
import CommitItem from "./CommitItem"

interface CommitListProps {
    commits:any[],
    error:boolean,
}

const CommitList = ({commits, error}:CommitListProps) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(commits?.length > 0){
            setIsLoading(false)
        }
    }, [commits, error])

    if(error){
        return (
            <div className="flex flex-row items-center justify-center mt-8">
                User/repository does not exist.
            </div>
        )
    }

    return (
        <div className="main flex flex-col p-8 gap-4">
            {
                isLoading && <Spinner /> 
            }
            {
                commits?.length > 0 ?
                commits.map(el => {
                    return <CommitItem 
                                author={el.commit.author.name} 
                                date={el.commit.author.date} 
                                message={el.commit.message}
                                html_url={el.html_url} 
                                key={el.html_url}
                            />
                })
                :
                <></>
            }
        </div>
    )
}

export default CommitList