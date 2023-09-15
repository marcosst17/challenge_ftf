import formatDate from "@/app/_utils/formatDate";
import Link from "@/node_modules/next/link";

type CommitItemProps = {
    author:string,
    date:string,
    message:string,
    html_url:string,
}

const CommitItem = ({author, date, message, html_url}:CommitItemProps) => {

    // Formats the date into "DD/MM/YYYY, HH:mm"
    const formattedDate = formatDate(date)

    return (
        <div className="bg-neutral-800 p-4 shadow-lg flex flex-row w-1/2 m-auto">
            <div className="flex flex-col">
                <a href={html_url} target="_blank">
                    <div className="flex flex-row align-baseline mb-2">
                        <svg viewBox="0 0 24 24" focusable="false" className="commit-icon"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></g></svg>
                        <h2 className="text-xl primary-text font-bold underline underline-offset-4 ml-2 tracking-wide">{message}</h2>
                    </div>
                </a>
                <p className="secondary-text text-sm">{author}</p>
                <p className="secondary-text text-sm">{formattedDate}</p>
            </div>
        </div>
    )
}

export default CommitItem