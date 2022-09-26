import Image from "next/image";
import styles from "./MainCard.module.css";
import Link from "next/link";

const MainCard = ({ data }) => {
  const { description, image, url, date, title } = data;

  const tempDate = new Date(date);

  return (
    <div className={`${styles.wrapper} flex flex-col sm:flex-row md:max-h-94 lg:flex-col mb-4`}>

      <div className={`sm:basis-1/2 md:basis-1/2`}>

        <Image
          src={image}
          width={10}
          height={10}
          layout={'responsive'}
          objectFit={'cover'}
          sizes="
                (max-widt: 540px) 100vw, 
                (max-width: 768px) 50vw,
                33vw"
                objectPosition={'50% 50%'}

        />

      </div>

      <div className={`${styles.content} sm:basis-1/2 md:basis-full`}>
        <div className={styles.date}>{tempDate.toLocaleDateString()}</div>
        <Link href={`${url}`}>
          <a>
            <h1 className={" pb-4 text-lg md:text-2xl text-slate-900 font-bold antialiased tracking-tight"}>{title}</h1>
          </a>
        </Link>
        <div className={styles.intro}>
          <p className="text-slate-600 font-medium md:font-semibold">{description}</p>
        </div>
      </div>

    </div>
  );
};

export default MainCard;
