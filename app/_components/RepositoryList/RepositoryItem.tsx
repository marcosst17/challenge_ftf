import formatDate from '@/app/_utils/formatDate'
import Link from 'next/link'

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
            <div className="bg-neutral-800 p-4 shadow-lg flex flex-row">
                <div className="w-1/2 flex flex-col">
                    <Link href={`/user/${repoOwner}/${repoName}`}>
                        <h2 className="text-xl primary-text font-bold mb-2 underline underline-offset-4 tracking-wide">{repoName}</h2>
                    </Link>
                    <p className="secondary-text text-sm min-h-[20px]">{language}</p>
                    <p className="secondary-text text-sm">{repoOwner}</p>
                    <p className="secondary-text text-sm">Last update: {formattedDate}</p>
                </div>
                <div className="w-1/2 flex flex-col items-end card-right-div gap-4">
                    <p className="secondary-text text-sm">Issues: {openIssues}</p>
                    <a href={htmlUrl} target="_blank" className="flex">
                        <p className="mr-2">URL</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" viewBox="0 0 512 512" id="globe"><g data-name="Layer 2"><g data-name="25_internet, world, wireless internet, earth globe, seo and web, globe grid, worldwide, earth grid, communications, interface, multimedia, signs"><path d="M256.27,512A255.86,255.86,0,0,1,.55,256,255.73,255.73,0,1,1,437.1,437,253.93,253.93,0,0,1,256.27,512Zm0-492C126.3,20,20.55,125.87,20.55,256S126.3,492,256.27,492,492,386.13,492,256,386.25,20,256.27,20Z"></path><path d="M256.27,512c-37.43,0-72.08-27.53-97.55-77.51C134.33,386.65,120.91,323.26,120.91,256s13.42-130.65,37.81-178.49C184.19,27.53,218.84,0,256.27,0s72.09,27.53,97.56,77.51c24.39,47.84,37.81,111.23,37.81,178.49s-13.42,130.65-37.81,178.49C328.36,484.47,293.71,512,256.27,512Zm0-492c-29.53,0-57.85,23.65-79.74,66.59-23,45.09-35.62,105.25-35.62,169.41s12.65,124.32,35.62,169.41C198.42,468.35,226.74,492,256.27,492s57.86-23.65,79.74-66.59c23-45.09,35.63-105.25,35.63-169.41S359,131.68,336,86.59C314.13,43.65,285.81,20,256.27,20Z"></path><path d="M255.45,391.23c-67.12,0-130.37-13.44-178.11-37.85C27.47,327.88,0,293.19,0,255.72s27.47-72.15,77.34-97.65c47.74-24.41,111-37.86,178.11-37.86s130.37,13.45,178.11,37.86c49.87,25.5,77.34,60.18,77.34,97.65s-27.47,72.16-77.34,97.66C385.82,377.79,322.56,391.23,255.45,391.23Zm0-251c-64,0-124,12.67-169,35.67C43.6,197.79,20,226.14,20,255.72s23.6,57.94,66.44,79.85c45,23,105,35.66,169,35.66s124-12.66,169-35.66c42.85-21.91,66.45-50.27,66.45-79.85s-23.6-57.93-66.45-79.84C379.48,152.88,319.46,140.21,255.45,140.21Z"></path><path d="M256.27,512a10,10,0,0,1-10-10V10a10,10,0,0,1,20,0V502A10,10,0,0,1,256.27,512Z"></path><path d="M502,266H10.55a10,10,0,0,1,0-20H502a10,10,0,0,1,0,20Z"></path></g></g></svg>
                    </a>
                    {
                        forked ? 
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M5.559,8.855c0.166,1.183,0.789,3.207,3.087,4.079C11,13.829,11,14.534,11,15v0.163C9.56,15.597,8.5,16.92,8.5,18.5 c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-0.466,0-1.171,2.354-2.065 c2.298-0.872,2.921-2.896,3.087-4.079C19.912,8.441,21,7.102,21,5.5C21,3.57,19.43,2,17.5,2S14,3.57,14,5.5 c0,1.552,1.022,2.855,2.424,3.313c-0.146,0.735-0.565,1.791-1.778,2.252c-1.192,0.452-2.053,0.953-2.646,1.536 c-0.593-0.583-1.453-1.084-2.646-1.536c-1.213-0.461-1.633-1.517-1.778-2.252C8.978,8.355,10,7.052,10,5.5C10,3.57,8.43,2,6.5,2 S3,3.57,3,5.5C3,7.102,4.088,8.441,5.559,8.855z M17.5,4C18.327,4,19,4.673,19,5.5S18.327,7,17.5,7S16,6.327,16,5.5 S16.673,4,17.5,4z M13.5,18.5c0,0.827-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5S11.173,17,12,17S13.5,17.673,13.5,18.5z M6.5,4 C7.327,4,8,4.673,8,5.5S7.327,7,6.5,7S5,6.327,5,5.5S5.673,4,6.5,4z"></path></svg>
                        : 
                        <></>
                    }
                </div>
            </div>
        
    )
}

export default RepositoryItem