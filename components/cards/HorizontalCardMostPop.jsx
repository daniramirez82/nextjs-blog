import Image from 'next/future/image';
import Link from 'next/link';

const HorizontalCenteredCard = ({ data }) => {
    const { description, image, url, date, title } = data;

    return (
        <Link href={`${url}`}>
            <a className="wrapper flex flex-row-reverse p-2 bg-slate-100 rounded  min-h-full">
                <Image
                    className='rounded object-cover basis-[28%] lg:basis-[18%]'
                    src={image}
                    width={400}
                    height={800}
                />
                <div className='basis-[72%] lg:basis-[82%] pr-2'>
                    <p className="text-xs pb-4 text-slate-400">{date}</p>
                    <h4 className="text-sm md:text-base pb-2 font-semibold text-slate-900">{title}</h4>
                    <p className="hidden md:block text-sm md:text-base text-slate-500 lg:line-clamp-4">{description}</p>
                </div>
            </a>
        </Link>
    )
}

export default HorizontalCenteredCard;