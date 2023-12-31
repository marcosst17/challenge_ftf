import formatDate from '@/app/_utils/formatDate'
import Link from 'next/link'
import { UrlIcon } from '../IconLibrary/index'

type RepositoryItemProps = {
    repoName:string,
    repoOwner:string,
    openIssues:number,
    htmlUrl:string,
    forked:boolean,
    language:any,
    updatedAt:string,
}

const RepositoryItem = ({repoName, repoOwner, openIssues, htmlUrl, forked, updatedAt, language}:RepositoryItemProps) => {
    
    // Formats the date into "DD/MM/YYYY, HH:mm"
    const formattedDate = formatDate(updatedAt)

    return (
            <div className="bg-neutral-800 justify-between p-4 shadow-lg flex flex-row">
                <div className="lg:w-1/2 flex flex-col">
                    <Link href={`/user/${repoOwner}/${repoName}`}>
                        <h2 className="text-xl primary-text font-bold mb-2 underline underline-offset-4 tracking-wide">{repoName}</h2>
                    </Link>
                    <p className="secondary-text text-sm min-h-[20px]">{language}</p>
                    <p className="secondary-text text-sm">{repoOwner}</p>
                    <p className="secondary-text text-sm">Last update: {formattedDate}</p>
                </div>
                <div className="lg:w-1/2 flex flex-col items-end card-right-div gap-4">
                    <p className="secondary-text text-sm">Issues: {openIssues}</p>
                    <a href={htmlUrl} target="_blank" className="flex">
                        <p className="mr-2">URL</p>
                        <UrlIcon width="24" height="24" />
                    </a>
                    {
                        forked &&
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M5.559,8.855c0.166,1.183,0.789,3.207,3.087,4.079C11,13.829,11,14.534,11,15v0.163C9.56,15.597,8.5,16.92,8.5,18.5 c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-0.466,0-1.171,2.354-2.065 c2.298-0.872,2.921-2.896,3.087-4.079C19.912,8.441,21,7.102,21,5.5C21,3.57,19.43,2,17.5,2S14,3.57,14,5.5 c0,1.552,1.022,2.855,2.424,3.313c-0.146,0.735-0.565,1.791-1.778,2.252c-1.192,0.452-2.053,0.953-2.646,1.536 c-0.593-0.583-1.453-1.084-2.646-1.536c-1.213-0.461-1.633-1.517-1.778-2.252C8.978,8.355,10,7.052,10,5.5C10,3.57,8.43,2,6.5,2 S3,3.57,3,5.5C3,7.102,4.088,8.441,5.559,8.855z M17.5,4C18.327,4,19,4.673,19,5.5S18.327,7,17.5,7S16,6.327,16,5.5 S16.673,4,17.5,4z M13.5,18.5c0,0.827-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5S11.173,17,12,17S13.5,17.673,13.5,18.5z M6.5,4 C7.327,4,8,4.673,8,5.5S7.327,7,6.5,7S5,6.327,5,5.5S5.673,4,6.5,4z"></path></svg>
                    }
                </div>
            </div>
        
    )
}

export default RepositoryItem