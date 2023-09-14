
type CommitItemProps = {
    author:string,
    date:string,
    message:string,
    html_url:string,
}

const CommitItem = ({author, date, message, html_url}:CommitItemProps) => {
    return (
        <div>
            <p>{author}</p>
            <p>{date}</p>
            <p>{message}</p>
            <p>{html_url}</p>
        </div>
    )
}

export default CommitItem