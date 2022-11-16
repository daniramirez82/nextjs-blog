import HorizontalCard from "../cards/HorizontalCard";
import { useEffect, useState } from "react";
import { getFromNYT } from "../../lib/api";

//ver luego:

// esto no funciona porque debe ser directo de una pagina
//pensar hacerlo en el index directo pero de manera modularizada!!!
//podemos cargar las noticias del main directo desde el index con esta funcion de manera que se cargen desde el servidor

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const newsArray = sportNews.slice(0, 4);

//     console.log('noticias deportes', newsArray);
//     return { props: { newsArray } }
// }

export const SecondArea = () => {

    const [newsArray, setNewsArray] = useState(null);

    useEffect(async () => {
        const sportNews = await getFromNYT('sports');
        if (sportNews.status === 'ok') {
            const sportsNewsSliced = sportNews.response.slice(0, 4);
            setNewsArray(sportsNewsSliced);
        }
    }, []);


    return (
        <div className="grid grid-cols-2 md:grid-cols-4">
            {newsArray && newsArray.map((item) => <li key={item.title} className="list-none"><HorizontalCard data={item} /></li>)}
        </div>
    )
}
