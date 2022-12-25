import { useState, useEffect } from "react";
import { getFromNYT } from "../../lib/api";
import TitleCard from "../cards/TitleCard";

const TitlesArea = () => {

    const [newsArray, setNewsArray] = useState(null);

    useEffect(async () => {
        const titlesNews = await getFromNYT('home');
        if (titlesNews.status === 'ok') {
            setNewsArray(titlesNews.response);
        }
    }, []);

    return (
        <section>
            <div className="container flex flex-col mt-4">
                {newsArray ? newsArray.map((item) => {
                    return (
                        <div key={item.title}>
                            <TitleCard data={item} />
                        </div>
                    );
                }) : [1, 2, 3, 4, 5, 6].map(i => <p key={i}>Loading...</p>)}
            </div>
        </section>

    )
}

export default TitlesArea;