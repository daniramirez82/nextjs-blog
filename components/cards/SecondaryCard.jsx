import Image from "next/image";
import styles from "./SecondaryCard.module.css";
import Link from "next/link";

const SecondaryCard = ({ data }) => {
    const { description, image, url, date, title } = data;

    return (
        <div className={`${styles.wrapper} flex flex-row-reverse md:flex-row`}>
            <div className={`${styles.image} p-4 basis-1/2`}>

                <Image
                    className="rounded"
                    src={image}
                    width={120}
                    height={90}
                    layout={'responsive'}
                    objectFit={'cover'}
                    sizes="(max-width: 768px) 50vw,
                    33vw"
                />

            </div>
            <div className={`flex flex-col justify-between p-4 basis-1/2`}>
                <Link href={`${url}`}>
                    <h4 className={`${styles.title} leading-7 text-lg`}>{title}</h4>
                </Link>
                <div className={styles.date}>{date}</div>
            </div>
        </div>
    );
};

export default SecondaryCard;