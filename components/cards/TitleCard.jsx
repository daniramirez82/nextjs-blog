import Link from 'next/link';

const TitleCard = ({ data }) => {
    const { url, fullDate, title } = data;
    console.log('date before formating', fullDate);
    const formatedDate = fullDate.toLocaleDateString("en-GB",{month: 'long', year:'numeric', day: 'numeric'});
    console.log('formated date', formatedDate);

    return (
        <Link href={`${url}`}>
            <a className="wrapper flex flex-col p-2 mb-2 bg-slate-100 rounded  min-h-full">
                <p className="text-xs pb-2 text-slate-400">{formatedDate}</p>
                <h4 className="font-semibold text-slate-900">{title}</h4>
            </a>
        </Link>
    )
}

export default TitleCard;