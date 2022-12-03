import { useState, useEffect } from "react";
import { getFromNYT } from "../../lib/api";
import HorizontalCenteredCard from "../cards/HorizontalCenteredCard";

export const MostPopularArea = () => {

    const [newsArray, setNewsArray] = useState(null);

    useEffect(async () => {
        const mostPNews = await getFromNYT();
        console.log(mostPNews);
        if (mostPNews.status === 'ok') {
            const mostPNewsSliced = mostPNews.response.slice(0, 6);
            setNewsArray(mostPNewsSliced);
        }
    }, []);

    return (
        <section>
            <div className="container grid grids-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {newsArray ? newsArray.map((item) => {
                    return (
                        <div key={item.title}>
                            <HorizontalCenteredCard data={item} />
                        </div>
                    );
                }) : [1, 2, 3, 4, 5, 6].map(i => <p key={i}>Loading</p>)}
            </div>
        </section>

    )
}
