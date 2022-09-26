import Image from "next/future/image";
import styles from "./SecondaryCard.module.css";
import Link from "next/link";

const SecondaryCard = ({ data }) => {
    const { description, image, url, date, title } = data;
    const temDate = new Date(date);

    return (
        <div className={`${styles.wrapper} flex flex-row-reverse md:flex-row min-h-full`}>
            <div className={`${styles.image} p-4 basis-1/2`}>

                <Image
                    className="rounded w-full h-full object-cover"
                    src={image}
                    width={120}
                    height={90}
                    sizes="(max-width: 768px) 50vw,
                    33vw"
                />

            </div>
            <div className={`flex flex-col justify-between p-4 basis-1/2 md:basis-3/5 xl:basis-1/2`}>
                <Link href={`${url}`}>
                    <h4 className={`${styles.title} leading-6 text-lg pb-4 md:text-xl text-slate-900 font-bold antialiased tracking-tight xl:text-2xl`}>{title}</h4>
                </Link>
                <p className="text-slate-900 flex-grow hidden md:block lg:hidden">{description}</p>
                <div className="text-sm text-slate-400">{temDate.toLocaleDateString()}</div>
            </div>
        </div>
    );
};

export default SecondaryCard;