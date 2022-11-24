import Image from "next/future/image";
import Link from "next/link";

const SecondaryCard = ({ data }) => {
    const { description, image, url, date, title } = data;

    return (
        <div className={`bg-white rounded overflow-hidden shadow-sm flex flex-row-reverse sm:flex-row min-h-full`}>
            <div className={`position-block p-4 basis-1/2 sm:basis-[33%]`}>

                <Image
                    className="rounded w-full h-full object-cover"
                    src={image ? image : "/default.jpg"}
                    width={120}
                    height={90}
                    sizes="(max-width: 768px) 50vw,
                    33vw"
                />

            </div>
            <div className={`flex flex-col justify-between p-4 basis-1/2 md:basis-[66%]`}>
                <Link href={`${url}`}>
                    <h4 className={`text-lg max-h-14 pb-4 md:text-xl text-slate-800 font-bold antialiased tracking-tight xl:text-2xl  text-ellipsis overflow-hidden `}>{title}</h4>
                </Link>
                <p className="text-slate-900 flex-grow hidden md:block line-clamp-1">{description}</p>
                <div className="text-sm text-slate-400">{date}</div>
            </div>
        </div>
    );
};

export default SecondaryCard;