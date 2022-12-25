import { useState, useEffect } from "react";
import { getFromNYT } from "../../lib/api";
import HorizontalCardMostPop from '../cards/HorizontalCardMostPop';
import TitlesArea from "./TitlesArea";
import SectionTitle from "../ui/SectionTitle";
import SecondaryCardLoading from "../cards/SecondaryCardLoading";

const MostPopularArea = () => {

    const [newsArray, setNewsArray] = useState(null);

    useEffect(async () => {
        const mostPNews = await getFromNYT();
        if (mostPNews.status === 'ok') {
            const mostPNewsSliced = mostPNews.response.slice(0, 18);
            setNewsArray(mostPNewsSliced);
        }
    }, []);

    const apiCards = newsArray && newsArray.map((item) => {
        return (
            <div key={item.title}>
                <HorizontalCardMostPop data={item} />
            </div>
        );
    });

    const loadingCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        return (
            <SecondaryCardLoading />
        )
    })

    return (
        <div className="flex ">

            <section>
                <div className="container grid grids-cols-1 gap-4 mt-4">
                    {newsArray ? apiCards : loadingCards}
                </div>
            </section>

            <div className="basis-[30%] hidden ml-4 lg:flex flex-col">
                <SectionTitle category={'More'} />
                <TitlesArea />
            </div>

        </div>


    )
}

export default MostPopularArea;