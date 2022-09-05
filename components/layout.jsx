import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import PageHeader from '@atlaskit/page-header';

const name = 'Daniel Dj';
export const siteTitle = "Dj's blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>

        {home ? (
          <> <div className={`${utilStyles.borderCircle} drop-shadow-xl`} >

            {/* <Avatar appearance='circle'
              src='/profile.jpg'
              size='xxlarge'
              name='Daniel Ramirez'
            /> */}

          </div>
            <PageHeader>
              {name}
            </PageHeader>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <div className={`${utilStyles.borderCircle} drop-shadow-2xl`} >

              <Link href="/">
                <a>

                  <Image
                    priority
                    src="/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
            </div>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={`${utilStyles.colorInherit} font-bold`}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <button className='bg-indigo-500 rounded-lg p-5 hover:bg-indigo-700'>
              <a>← Back to home</a>
            </button>

          </Link>
        </div>
      )}
    </div>
  );
}