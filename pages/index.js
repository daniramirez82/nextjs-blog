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
const FourthArea = dynamic(() => import('../components/areas/FourthArea'));
import useOnScreen from '../lib/useOnScreen';
import dynamic from 'next/dynamic';
import MainCardLoading from '../components/cards/MainCardLoading';
import SecondaryCardLoading from '../components/cards/SecondaryCardLoading';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  const [mainArticle, setMainArticle] = useState(null);
  const [results3Home, setResults3Home] = useState(undefined);
  const [foodResults, setFoodResults] = useState([]);
  const [showFourthArea, setShowFourtArea] = useState();

  const fouthArea = useRef();
  const fouthAreaRefVal = useOnScreen(fouthArea);

  const category = useSelector(state => state.category.category);

  useEffect(async () => {

    const homeNews = await getFromNYT('home');
    const foodNews = await getFromNYT('food');

    setMainArticle(homeNews[0]);

    setResults3Home(homeNews.slice(1, 4));


    setFoodResults(foodNews.slice(0, 6));

  }, [category]);

  useEffect(()=>{

    if(!showFourthArea){
      setShowFourtArea(fouthAreaRefVal);
    }

  },[fouthAreaRefVal]);

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
          {mainArticle ? <MainCard data={mainArticle} /> : <MainCardLoading />}
        </div>

        <ul className='lg:basis-2/3 lg:ml-4 flex flex-col justify-between '>
          {results3Home ? results3Home.map(item => <li key={item.title} className="flex-grow mb-4 lg:last:mb-0"><SecondaryCard data={item} /></li>)
            : [1, 2, 3].map((item) => <li key={item} className="flex-grow mb-4 lg:last:mb-0"><SecondaryCardLoading /></li>)}
        </ul>

      </section>
      <SectionTitle category={"Sports"} />

      <section>
        <SecondArea />
      </section>
      <TwoColMarketing />
      {showFourthArea ? <p>Se ve</p> : <p>no se ve</p>}
      <SectionTitle category={"Food"} />

      <section>
        <ThirdArea news={foodResults} />
      </section>
      <div ref={fouthArea}>
        <SectionTitle category={"Movies"} />

      </div>

      {showFourthArea && (<section > <FourthArea /> </section>)}

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