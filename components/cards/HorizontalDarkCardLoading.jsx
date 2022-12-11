import Link from 'next/link';

const HorizontalDarkCardLoading = () => {

    return (
            <div className="wrapper flex flex-col bg-slate-900 rounded  min-h-full">

                <div className='rounded-t min-h-[200px] min-w-[200px] object-cover bg-slate-600'></div>

                <div className='pb-4'>
                    <div className="h-2 w-10 m-2 rounded bg-slate-400"></div>
                    <div className="h-4 w-20 m-2 rounded bg-slate-100"></div>
                    <div className="h-4 w-32 m-2 rounded bg-slate-400"></div>
                </div>

            </div>
    )
}

export default HorizontalDarkCardLoading;