import HorizontalCard from "../cards/HorizontalCard";


const SecondArea = ({newsArray}) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4">
            {newsArray && newsArray.map((item) => <li key={item.title} className="list-none"><HorizontalCard data={item} /></li>)}
        </div>
    )
}

export default SecondArea;