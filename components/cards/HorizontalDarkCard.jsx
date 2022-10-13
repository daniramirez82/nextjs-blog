import Image from 'next/future/image';
import Link from 'next/link';

const HorizontalDarkCard = ({ data }) => {
    const { description, image, url, date, title } = data;

    return (
        <Link href={`${url}`}>
            <a className="wrapper flex flex-col bg-slate-900 rounded  min-h-full">
                <Image
                    className='rounded-t min-h-full min-w-full object-cover'
                    src={image}
                    width={400}
                    height={800}
                />
                <div className='px-4 pb-4'>
                <p className="text-xs text-slate-400">{date}</p>
                <h4 className="text-sm md:text-base pb-2 font-semibold text-slate-100 pt-2">{title}</h4>
                <p className="text-sm md:text-base text-slate-100 line-clamp-4">{description}</p>
                </div>
                
            </a>
        </Link>
    )
}

export default HorizontalDarkCard;