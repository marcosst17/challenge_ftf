import CommitItem from "./CommitItem"

interface CommitListProps {
    commits:any[]
}

const CommitList = ({commits}:CommitListProps) => {

    return (
        <div className="main flex flex-col p-8 gap-2">
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