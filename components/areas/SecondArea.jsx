import HorizontalCard from "../cards/HorizontalCard";


const SecondArea = ({newsArray}, index) => {

    console.log(newsArray);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4">
            {newsArray && newsArray.map(item => <li key={index} className="list-none"><HorizontalCard data={item} /></li>)}
        </div>
    )
}

export default SecondArea;