import Image from 'next/future/image';
import Link from "next/link";

const css = {
  width: '100%',
  objectFit: 'cover',
  height: '100%',
}

const MainCard = ({ data }) => {

  return (
    <div className={"bg-white shadow-sm rounded overflow-hidden flex flex-col sm:flex-row md:max-h-94 lg:flex-col mb-4 lg:h-full"}>

      <div className={`sm:basis-1/2 md:basis-1/2 lg:basis-4/5`}>
        <Image
          src={data.image ? data.image : '/default.jpg'}
          priority={true}
          style={css}
          width={400}
          height={800}
          alt={data.title}
          sizes="
                (max-widt: 540px) 100vw, 
                (max-width: 768px) 50vw,
                33vw"
        />
      </div>

      <div className={"flex flex-col p-4 sm:basis-1/2 md:basis-full lg:basis-auto"}>
        <div className={"text-slate-400 text-sm"}>{data.date}</div>
        <Link href={`${data.url}`}>
          <a>
            <h1 className={" pb-4 text-lg md:text-2xl text-slate-900 font-bold antialiased tracking-tight"}>{data.title}</h1>
          </a>
        </Link>
        <div>
          <p className="text-slate-600 font-medium md:font-semibold">{data.description}</p>
        </div>
      </div>

    </div>);
};

export default MainCard;
