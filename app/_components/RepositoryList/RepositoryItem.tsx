import Link from 'next/link'

type RepositoryItemProps = {
    repoName:string,
    repoOwner:string,
    openIssues:number,
    htmlUrl:string,
}

const RepositoryItem = ({repoName, repoOwner, openIssues, htmlUrl}:RepositoryItemProps) => {
    

    return (
        <Link href={`/user/${repoOwner}/${repoName}`}>
            <div className="bg-neutral-800 p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-bold mb-2">{repoName}</h2>
                <p>{repoOwner}</p>
                <p>{htmlUrl}</p>
            </div>
        </Link>
    )
}

export default RepositoryItem