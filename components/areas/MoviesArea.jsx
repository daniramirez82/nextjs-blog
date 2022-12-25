import HorizontalDarkCard from "../cards/HorizontalDarkCard";
import HorizontalDarkCardLoading from "../cards/HorizontalDarkCardLoading";
import { useEffect, useState } from "react";
import { getFromNYT } from "../../lib/api";

const MoviesArea = () => {

  const [moviesResults, setMoviesResults] = useState(false);

  useEffect(async () => {

    const moviesNews = await getFromNYT('movies');

    if (moviesNews && moviesNews.status === "ok") {
      setMoviesResults(moviesNews.response.slice(0, 4));
    }

  }, []);

  const apiCards = moviesResults && moviesResults.map((item) => {
    return (
      <div key={item.title} className="">
        <HorizontalDarkCard data={item} />
      </div>
    );
  });

  const loadingCards = [1, 2, 3, 4].map((i) => {
    return (
      <HorizontalDarkCardLoading />
    )
  })


  return (
    <section>
      <div className="container grid grids-cols-2 md:grid-cols-4 gap-4 mt-4">
        {moviesResults ? apiCards : loadingCards}
      </div>
    </section>
  );
};
export default MoviesArea;