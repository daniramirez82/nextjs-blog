import { Main } from 'next/document';
import styles from './MainCard.module.css'

const MainCard = ({ data }) => {
    console.log('item que recibe el card', data);

    const {content, image_url, link, pubDate, title} = data;

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={image_url} alt={title}/>
            </div>
            <div className={styles.content}>
                <div className={styles.date}>{pubDate}</div>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.intro}>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default MainCard;