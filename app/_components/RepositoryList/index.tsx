import RepositoryItem from "./RepositoryItem"

interface RepositoryListProps {
    repos:any[]
}

const RepositoryList = ({repos}:RepositoryListProps) => {

    return (
        <div className="main flex flex-col p-8 gap-2">
            {
                repos?.length > 0 ?
                repos.map(el => {
                    return <RepositoryItem key={el.id} repoName={el.name} repoOwner={el.owner.login} />
                })
                :
                <></>
            }
        </div>
    )
}

export default RepositoryList