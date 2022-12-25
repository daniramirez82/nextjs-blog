import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from './index.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import { SportArea } from '../components/areas/SportArea';
import TwoColMarketing from '../components/areas/TwoColMarketing';
import FoodArea from '../components/areas/FoodArea';
import SectionTitle from '../components/ui/SectionTitle';
import dynamic from 'next/dynamic';
const MoviesArea = dynamic(() => import('../components/areas/MoviesArea'));
const TechArea = dynamic(() => import('../components/areas/TechArea'));
const TravelArea = dynamic(() => import('../components/areas/TravelArea'));
const MostPopularArea = dynamic(()=> import('../components/areas/MostPupolarArea'));
import useOnScreen from '../lib/useOnScreen';
import MainArea from '../components/areas/MainArea';
import { fixNews } from '../lib/helpers';
import LoadingAreaDark from '../components/areas/LoadingAreaDark';

function Home({ data }) {

  //SSR
  const homeNews = fixNews(data);
  //end of SSR

  //About lazy loading of the movies, tech and travel area
  const [showFourthArea, setShowFourtArea] = useState(false);
  const [showTechArea, setShowTechArea] = useState(false);
  const [showTravelArea, setShowTravelArea] = useState(false);
  const [showMostPopArea, setShowMostPopA] = useState(false);

  const fouthArea = useRef();
  const techArea = useRef();
  const travelArea = useRef();
  const mostPopArea = useRef();

  const techAreaRefVal = useOnScreen(techArea);
  const travelAreaRefVal = useOnScreen(travelArea);
  const fouthAreaRefVal = useOnScreen(fouthArea);
  const mostPopAreaRefVal = useOnScreen(mostPopArea);
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

    if (!showMostPopArea) {
      setShowMostPopA(mostPopAreaRefVal);
    }

  }, [fouthAreaRefVal, techAreaRefVal, travelAreaRefVal, mostPopAreaRefVal]);

  return (
    <Layout>
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
      <MainArea news={homeNews} />

      <SectionTitle category={"Sports"} />
      <SportArea />

      <TwoColMarketing />

      <SectionTitle category={"Food"} />
      <FoodArea />

      <div ref={fouthArea}>
        <SectionTitle category={"Movies"} />
        {!showFourthArea ?  <LoadingAreaDark/> : <MoviesArea />}
      </div>

      <div ref={techArea}>
        <SectionTitle category={'Technology'} />
        {!showTechArea ? <LoadingAreaDark /> : <TechArea />}
      </div>

      <div ref={travelArea}>
        <SectionTitle category={'Travel'} />
        {!showTravelArea ? <LoadingAreaDark /> : <TravelArea />}
      </div>
      <div ref={mostPopArea}>
        <SectionTitle category={'Most Popular of the Month'} />
        {!showMostPopArea ? <LoadingAreaDark/> : <MostPopularArea />}
      </div>

    </Layout>
  );
}

//only run on the server for ssr
// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=vmbJSwb7M61sA8N4FLoA7XGAELlH1eqF');
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

export default Home;