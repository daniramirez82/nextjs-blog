import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from './index.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import { SecondArea } from '../components/areas/SecondArea';
import TwoColMarketing from '../components/areas/TwoColMarketing';
import ThirdArea from '../components/areas/ThirdArea';
import SectionTitle from '../components/ui/SectionTitle';
const FourthArea = dynamic(() => import('../components/areas/FourthArea'));
const TechArea = dynamic(() => import('../components/areas/TechArea'));
const TravelArea = dynamic(() => import('../components/areas/TravelArea'));
import useOnScreen from '../lib/useOnScreen';
import dynamic from 'next/dynamic';
import MainArea from '../components/areas/MainArea';
import { MostPopularArea } from '../components/areas/MostPupolarArea';
import { fixNews } from '../lib/helpers';

function Home({ data }) {

  //SSR
  const homeNews = fixNews(data);
  //end of SSR

  //About lazy loading of the movies, tech and travel area
  const [showFourthArea, setShowFourtArea] = useState();
  const [showTechArea, setShowTechArea] = useState();
  const [showTravelArea, setShowTravelArea] = useState();

  const fouthArea = useRef();
  const techArea = useRef();
  const travelArea = useRef();
  const mostPopArea = useRef();

  const techAreaRefVal = useOnScreen(techArea);
  const travelAreaRefVal = useOnScreen(travelArea);
  const fouthAreaRefVal = useOnScreen(fouthArea);
  //------------------------------------

  const category = useSelector(state => state.category.category);

  useEffect(() => {

    if (!showFourthArea) {
      setShowFourtArea(fouthAreaRefVal);
    }

    if (!showTechArea) {
      setShowTechArea(techAreaRefVal);
    }

    if (!showTravelArea) {
      setShowTravelArea(travelAreaRefVal);
    }

  }, [fouthAreaRefVal, techAreaRefVal, travelAreaRefVal]);

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
      <MainArea news={homeNews}/>

      <SectionTitle category={"Sports"} />
      <SecondArea />

      <TwoColMarketing />

      <SectionTitle category={"Food"} />
      <ThirdArea />

      <div ref={fouthArea}>
        <SectionTitle category={"Movies"} />
        {showFourthArea && <FourthArea />}
      </div>

      <div ref={techArea}>
        <SectionTitle category={'Technology'} />
        {showTechArea && <TechArea />}
      </div>

      <div ref={travelArea}>
        <SectionTitle category={'Travel'} />
        {showTravelArea && <TravelArea />}
      </div>

      <div ref={mostPopArea}>
        <SectionTitle category={'Most Popular of the Month'} />
        <MostPopularArea />
      </div>


    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=vmbJSwb7M61sA8N4FLoA7XGAELlH1eqF');
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

export default Home;