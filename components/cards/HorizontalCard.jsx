import Image from 'next/future/image';
import Link from 'next/link';

const HorizontalCard = ({ data }) => {
    const { description, image, url, date, title } = data;

    return (
        <Link href={`${url}`}>
            <a className="flex flex-col py-4">
                <Image
                    className='rounded-t'
                    src={image}
                    width={400}
                    height={800}
                />
                <p className="text-xs text-slate-400">{date}</p>
                <div className=''>
                    <h4 className="text-sm md:text-base pb-2 font-semibold text-slate-900">{title}</h4>
                    <p className="text-sm md:text-base text-slate-500 hidden lg:block text-ellipsis overflow-hidden md:max-h-24">{description}</p>
                </div>

            </a>
        </Link>
    )
}

export default HorizontalCard;