import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import styles from './index.module.css';
import MainCard from '../components/cards/MainCard';
import SecondaryCard from '../components/cards/SecondaryCard';
import { useEffect, useRef, useState } from 'react';
import { getFromNYT, getNews } from '../lib/api';
import { useSelector } from 'react-redux';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import SecondArea from '../components/areas/SecondArea';
import TwoColMarketing from '../components/areas/TwoColMarketing';
import ThirdArea from '../components/areas/ThirdArea';
import SectionTitle from '../components/ui/SectionTitle';
import FourthArea from '../components/areas/FourthArea';
import useOnScreen from '../lib/useOnScreen';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  const [mainArticle, setMainArticle] = useState([]);
  const [results3Home, setResults3Home] = useState([]);
  const [sportResults, setSportResults] = useState([]);
  const [foodResults, setFoodResults] = useState([]);
  const [isFourthARef, setisFourthAREf] = useState(false);
  const fouthArea = useRef(null);
  const fouthAreaRefVal = useOnScreen(fouthArea);




  const category = useSelector(state => state.category.category);

  useEffect(async () => {

    if (!isFourthARef) {
      setisFourthAREf(fouthAreaRefVal)
    }

    const homeNews = await getFromNYT('home');
    const sportNews = await getFromNYT('sports');
    const foodNews = await getFromNYT('food');

    setMainArticle(homeNews[0]);

    setResults3Home(homeNews.slice(1, 4));

    setSportResults(sportNews.slice(0, 4));

    setFoodResults(foodNews.slice(0, 6));

  }, [category]);

  return (
    <Layout home>
      <ButtonPrimary>Go Up</ButtonPrimary>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header className={styles.header}>
        <hr />
        <h1 className={styles['title-big']}>THE NEWS</h1>
        <hr />
      </header>

      <SectionTitle category={category} />
      <section className='flex flex-col lg:flex-row'>

        <div className={"lg:basis-1/2 xl:basis-2/3"}>
          {mainArticle && <MainCard data={mainArticle} />}
        </div>

        <ul className='lg:basis-2/3 lg:ml-4 flex flex-col justify-between '>
          {results3Home && results3Home.map(item => <li key={item.title} className="flex-grow mb-4 lg:last:mb-0"><SecondaryCard data={item} /></li>)}
        </ul>

      </section>
      <SectionTitle category={"Sports"} />

      <section>
        {sportResults && <SecondArea newsArray={sportResults} />}
      </section>
      <TwoColMarketing />
      {fouthAreaRefVal ? <p>Se ve</p> : <p>No se ve</p>}
      <SectionTitle category={"Food"} />

      <section>
        <ThirdArea news={foodResults} />
      </section>
      <SectionTitle category={"Movies"} ref={fouthArea} />

      {fouthAreaRefVal && (<section >
        <FourthArea />
      </section>)}



      <section className="underline">
        <p>[I'm a web developer student!!!]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (

            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a> {title} </a>
              </Link>
              <br />
              <span className='text-sm text-gray-700' >
                {id}
              </span>
              <br />
              <Date dateString={date} />
              <p className='text-sky-400/50 text-sm'>{date} </p>


            </li>
          ))}


        </ul>

      </section>
    </Layout>
  );
}