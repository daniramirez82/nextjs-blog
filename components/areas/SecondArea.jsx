import HorizontalCard from "../cards/HorizontalCard";

export async function getServerSideProps() {
    // Fetch data from external API
    const sportNews = await getFromNYT('sports');
    const newsArray = sportNews.slice(0, 4);

    console.log('noticias deportes', newsArray);
    return { props: { newsArray } }
}

const SecondArea = ({ newsArray }) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4">
            {newsArray && newsArray.map((item) => <li key={item.title} className="list-none"><HorizontalCard data={item} /></li>)}
        </div>
    )
}

export default SecondArea;