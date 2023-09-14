
type CommitItemProps = {
    author:string,
    date:string,
    message:string,
    html_url:string,
}

const CommitItem = ({author, date, message, html_url}:CommitItemProps) => {

    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return (
        <div className="bg-neutral-800 p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">{message}</h2>
            <p>{author}</p>
            <p>{formattedDate}</p>
        </div>
    )
}

export default CommitItem