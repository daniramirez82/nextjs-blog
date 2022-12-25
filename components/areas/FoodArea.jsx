import HorizontalCenteredCard from "../cards/HorizontalCenteredCard";
import { useState, useEffect } from "react";
import { getFromNYT } from "../../lib/api";

const FoodArea = () => {
  const [news, setNews] = useState(null);

  useEffect(async () => {
    const temArray = await getFromNYT('food');
    if (temArray.status === 'ok') {
      setNews(temArray.response.slice(0, 6))
    }

  }, []);

  return (
    <section>
      <div className="container grid grids-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {news && news.map((item) => {
          return (
            <div key={item.title} className="">
              <HorizontalCenteredCard data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default FoodArea;