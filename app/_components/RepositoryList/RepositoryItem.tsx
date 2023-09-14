interface RepositoryItemProps {
    repoName:string,
    repoOwner:string,
}

const RepositoryItem = ({repoName, repoOwner}:RepositoryItemProps) => {
    

    return (
        <div className="flex flex-col">
            <p>{repoName}</p>
            <p>{repoOwner}</p>
        </div>
    )
}

export default RepositoryItem