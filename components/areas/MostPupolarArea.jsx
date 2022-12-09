import { useState, useEffect } from "react";
import { getFromNYT } from "../../lib/api";
import HorizontalCardMostPop from '../cards/HorizontalCardMostPop';
import TitlesArea from "./TitlesArea";

export const MostPopularArea = () => {

    const [newsArray, setNewsArray] = useState(null);

    useEffect(async () => {
        const mostPNews = await getFromNYT();
        if (mostPNews.status === 'ok') {
            const mostPNewsSliced = mostPNews.response.slice(0, 18);
            setNewsArray(mostPNewsSliced);
        }
    }, []);

    return (
        <div className="flex ">
            <section>
                <div className="container grid grids-cols-1 gap-4 mt-4">
                    {newsArray ? newsArray.map((item) => {
                        return (
                            <div key={item.title}>
                                <HorizontalCardMostPop data={item} />
                            </div>
                        );
                    }) : [1, 2, 3, 4, 5, 6].map(i => <p key={i}>Loading</p>)}
                </div>
            </section>
            <div className="basis-[30%] hidden ml-4 lg:block"><TitlesArea/></div>
        </div>


    )
}
