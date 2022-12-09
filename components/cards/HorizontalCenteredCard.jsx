import Image from 'next/future/image';
import Link from 'next/link';

const HorizontalCenteredCard = ({ data }) => {
    const { description, image, url, date, title } = data;

    return (
        <Link href={`${url}`}>
            <a className="wrapper flex flex-col p-4 bg-slate-100 rounded  min-h-full">
                <Image
                    className='rounded-t min-h-full min-w-full object-cover'
                    src={image}
                    width={400}
                    height={800}
                />
                <p className="text-xs pt-2 text-slate-400">{date}</p>
                <h4 className="text-lg pb-2 font-semibold text-slate-900">{title}</h4>
                <p className="text-sm md:text-base text-slate-500 line-clamp-4">{description}</p>
            </a>
        </Link>
    )
}

export default HorizontalCenteredCard;