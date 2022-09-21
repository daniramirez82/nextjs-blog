import Image from 'next/image';
import styles from './MainCard.module.css'
import Link from 'next/link';

const MainCard = ({ data }) => {

    const {description, image, url, date, title} = data;

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
               { image ?  <img src={image} alt={title}/> : <img src={"/default.jpg"} alt={title}/> }
            </div>
            <div className={styles.content}>
                <div className={styles.date}>{date}</div>
                <Link href={url.toString()}>
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