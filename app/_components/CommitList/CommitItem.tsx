import formatDate from "@/app/_utils/formatDate";
import Link from "@/node_modules/next/link";
import { NewTabIcon } from "../IconLibrary/index";

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
        <div className="bg-neutral-800 p-4 commit-relative shadow-lg flex flex-row lg:w-1/2 lg:m-auto">
            <div className="flex flex-col">
                <a href={html_url} target="_blank">
                    <div className="flex flex-row commit-message-div align-baseline mb-2">
                        <NewTabIcon width="24" height="24" className="commit-icon" />
                        <h2 className="text-xl primary-text font-bold underline underline-offset-4 tracking-wide">{message}</h2>
                    </div>
                </a>
                <p className="secondary-text text-sm">{author}</p>
                <p className="secondary-text text-sm">{formattedDate}</p>
            </div>
        </div>
    )
}

export default CommitItem