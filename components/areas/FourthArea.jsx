import HorizontalDarkCard from "../cards/HorizontalDarkCard";
import { useEffect, useState } from "react";
import { getFromNYT } from "../../lib/api";

const FourthArea = () => {

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(async () => {
    const moviesNews = await getFromNYT('movies');

    if (moviesNews.status === "ok") {
      setMoviesResults(moviesNews.response.slice(0, 4));

    }


  }, []);

  return (
    <div className="container grid grids-cols-2 md:grid-cols-4 gap-4 mt-4">
      {moviesResults.map((item) => {
        return (
          <div key={item.title} className="">
            <HorizontalDarkCard data={item} />
          </div>
        );
      })}
    </div>
  );
};
export default FourthArea;