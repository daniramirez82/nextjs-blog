import { useState, useEffect } from "react";
import { getFromNYT } from "../../lib/api";
import HorizontalDarkCard from "../cards/HorizontalDarkCard";

export const TravelArea = () => {

    const [newsArray, setNewsArray] = useState(null);

    useEffect(async () => {
        const newsTravel = await getFromNYT('travel');
        if (newsTravel.status === 'ok') {
            const newsTravelSliced = newsTravel.response.slice(0, 4);
            setNewsArray(newsTravelSliced);
        }
    }, []);

    return (
        <section>
          <div className="container grid grids-cols-2 md:grid-cols-4 gap-4 mt-4 bg-slate-900 p-2">
            {newsArray && newsArray.map((item) => {
              return (
                <div key={item.title} className="">
                  <HorizontalDarkCard data={item} />
                </div>
              );
            })}
          </div>
        </section>
      );
}