import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu'
import PageHeader from '@atlaskit/page-header';
import Avatar from '@atlaskit/avatar';
import { useDispatch } from 'react-redux'
import { updateCategory } from '../store/categoryStore';

const name = 'Daniel Dj';
export const siteTitle = "Dj's blog";

export default function Layout({ children, home }) {

  const dispatch = useDispatch();

  const myCategories = ['Latest', 'Sports', 'Technology', 'Spain', 'FC Barcelona', 'Funny Cats'];

  const clickHandler = (e)=>{
    console.log(e.target.textContent);
    const category = e.target.textContent;
    dispatch(updateCategory(category));
  }
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
        <div className={styles['header-avatar']}>
          <Avatar appearance='circle'
            src='/profile.jpg'
            size='large'
            name='Daniel Ramirez'
          />
          <PageHeader>The News</PageHeader>
        </div>


        <nav>
          <DropdownMenu trigger="Menu">
            <DropdownItemGroup>
              {myCategories.map((cat)=> <DropdownItem onClick={clickHandler}>{cat}</DropdownItem>)}
            </DropdownItemGroup>
          </DropdownMenu>
        </nav>
      </header>
      <main>{children}</main>

      <footer className={styles.backToHome}>
        <Link href="/">
          <button className='bg-indigo-500 rounded-lg p-5 hover:bg-indigo-700'>
            <a>← Back to home</a>
          </button>

        </Link>
      </footer>

    </div>
  );
}