import Image from 'next/image';
import styles from './MainCard.module.css'
import Link from 'next/link';

const MainCard = ({ data }) => {

    const {description, image_url, link, pubDate, title} = data;

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
               { image_url ?  <img src={image_url} alt={title}/> : <img src={"/default.jpg"} alt={title}/> }
            </div>
            <div className={styles.content}>
                <div className={styles.date}>{pubDate}</div>
                <Link href={link}>
                <h3 className={styles.title}>{title}</h3>
                </Link>
                <div className={styles.intro}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default MainCard;