import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import styles from './index.module.css';
import MainCard from '../components/cards/MainCard';
import SecondaryCard from '../components/cards/SecondaryCard';
import { useEffect, useState } from 'react';
import { getFromNYT, getNews } from '../lib/api';
import { useSelector } from 'react-redux';
import ButtonPrimary from '../components/ui/ButtonPrimary';

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
  const [results3, setResults3] = useState([]);

  const category = useSelector(state => state.category.category);

  useEffect(async () => {

    const fromNYT = await getFromNYT('home');

    console.log(fromNYT);

    setMainArticle(fromNYT[0]);

    setResults3(fromNYT.slice(1, 4));



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

      <p className='text-xl text-slate-400 font-bold '>{category.toUpperCase()}</p>

      <section className='flex flex-col lg:flex-row'>

        <div className={"lg:basis-1/2 xl:basis-2/3"}>
          {mainArticle && <MainCard data={mainArticle} />}
        </div>

        <ul className='lg:basis-2/3 lg:ml-4 flex flex-col justify-between'>
          {results3 && results3.map(item => <li id={item.title} className="flex-grow mb-4"><SecondaryCard data={item} /></li>)}
        </ul>

      </section>

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