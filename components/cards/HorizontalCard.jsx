import Image from 'next/future/image';
import Link from 'next/link';

const HorizontalCard = ({ data }) => {
    const { description, image, url, date, title } = data;

    return (
        // <Link src={`${url}`}>
            <a className="wrapper flex flex-col p-4">
                <Image
                    className='rounded-t'
                    src={image}
                    width={400}
                    height={800}
                />
                <p className="text-xs text-slate-400">{date}</p>
                <h4 className="text-sm md:text-base pb-2 font-semibold text-slate-900">{title}</h4>
                <p className="text-sm md:text-base text-slate-500 line-clamp-4">{description}</p>
            </a>
        // </Link>
    )
}

export default HorizontalCard;