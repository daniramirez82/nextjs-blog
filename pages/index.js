import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import styles from './index.module.css';
import { useEffect, useRef, useState } from 'react';
import { getFromNYT } from '../lib/api';
import { useSelector } from 'react-redux';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import { SecondArea } from '../components/areas/SecondArea';
import TwoColMarketing from '../components/areas/TwoColMarketing';
import ThirdArea from '../components/areas/ThirdArea';
import SectionTitle from '../components/ui/SectionTitle';
const FourthArea = dynamic(() => import('../components/areas/FourthArea'));
import useOnScreen from '../lib/useOnScreen';
import dynamic from 'next/dynamic';
import MainArea from '../components/areas/MainArea';
import { TechArea } from '../components/areas/TechArea';


export default function Home() {

  //About lazy loading of the movies area
  const [showFourthArea, setShowFourtArea] = useState();
  const fouthArea = useRef();
  const fouthAreaRefVal = useOnScreen(fouthArea);
  //------------------------------------

  const category = useSelector(state => state.category.category);

  useEffect(() => {

    if (!showFourthArea) {
      setShowFourtArea(fouthAreaRefVal);
    }

  }, [fouthAreaRefVal]);

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
      <MainArea />

      <SectionTitle category={"Sports"} />
      <SecondArea />

      <TwoColMarketing />

      <SectionTitle category={"Food"} />
      <ThirdArea />

      <div ref={fouthArea}>
        <SectionTitle category={"Movies"} />
        {showFourthArea && <FourthArea />}
      </div>

      <SectionTitle category={'Technology'}/>
      <TechArea/>


    </Layout>
  );
}