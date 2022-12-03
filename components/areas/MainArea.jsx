import MainCard from "../cards/MainCard";
import MainCardLoading from "../cards/MainCardLoading";
import SecondaryCard from "../cards/SecondaryCard";
import SecondaryCardLoading from "../cards/SecondaryCardLoading";
import { useState, useEffect } from "react";
import { getFromNYT } from "../../lib/api";


const MainArea = () => {

    const [mainArticle, setMainArticle] = useState();
    const [results3Home, setResults3Home] = useState();

    useEffect(async () => {

        const homeNews = await getFromNYT('home');

        if (homeNews.status === "ok") {
            setMainArticle(homeNews.response[0]);
            setResults3Home(homeNews.response.slice(1, 4));
        }

    }, [])

    return (
        <section className='flex flex-col lg:flex-row'>

            <div className={"lg:basis-1/2 xl:basis-2/3"}>
                {mainArticle ? <MainCard data={mainArticle}/> : <MainCardLoading/>}
            </div>

            <ul className='lg:basis-2/3 lg:ml-4 flex flex-col justify-between '>
                {results3Home ? results3Home.map(item => <li key={item.title} className="flex-grow mb-4 lg:last:mb-0"><SecondaryCard data={item} /></li>)
                    : [1, 2, 3].map((item) => <li key={item} className="flex-grow mb-4 lg:last:mb-0"><SecondaryCardLoading /></li>)}
            </ul>

        </section>
    )
}

export default MainArea;