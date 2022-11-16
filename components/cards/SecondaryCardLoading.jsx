import Image from "next/future/image";

const SecondaryCardLoading = () => {

    return (
        <div className={`bg-white rounded overflow-hidden shadow-sm flex flex-row-reverse sm:flex-row min-h-full`}>
            <div className={"position-block  p-4 basis-1/2 sm:basis-[33%] bg-stone-400 flex justify-center items-center"}>

             <span className="loader"></span>

            </div>
            <div className={`flex flex-col justify-between p-4 basis-1/2 md:basis-3/5 xl:basis-1/2 bg-pu`}>
                    <h4 className={"leading-6 text-lg pb-4 md:text-xl text-slate-500 font-bold antialiased tracking-tight xl:text-2xl line-clamp-2"}>Loading...</h4>
                <p className="text-slate-400 flex-grow hidden md:block line-clamp-1">Short description of the article</p>
                <div className="text-sm text-slate-400">Date..</div>
            </div>
        </div>
    );
};

export default SecondaryCardLoading;