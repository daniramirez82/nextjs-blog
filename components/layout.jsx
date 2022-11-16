import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "./ui/NavBar";
export const siteTitle = "Dj's blog";

const name = "Daniel Dj";

export default function Layout({ children, home }) {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }

  return (
    <div className={`${styles.container} container relative`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />

      <main>{children}</main>

      <footer className={styles.backToHome}>
      <p>here goes the footer</p>
      </footer>
    </div>
  );
}
