// Takes a date and transforms it into "DD/MM/YYYY, HH:mm"
// (it can take a lot of formats since it makes a new Date to work with)


const formatDate = (date:string):string => {
    const newDate = new Date(date)
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(newDate);

    return formattedDate
}

export default formatDate