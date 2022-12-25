import HorizontalCard from "../cards/HorizontalCard";
import { useEffect, useState } from "react";
import { getFromNYT } from "../../lib/api";


export const SportArea = () => {

    const [newsArray, setNewsArray] = useState(null);

    useEffect(async () => {
        const sportNews = await getFromNYT('sports');
        if (sportNews.status === 'ok') {
            const sportsNewsSliced = sportNews.response.slice(0, 4);
            setNewsArray(sportsNewsSliced);
        }
    }, []);


    return (
        <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {newsArray && newsArray.map((item) => <li key={item.title} className="list-none"><HorizontalCard data={item} /></li>)}
            </div>
        </section>
    )
}
