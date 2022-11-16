import Image from 'next/future/image';

const css = {
  width: '100%',
  objectFit: 'cover',
  height: '100%',
}

const MainCardLoading = () => {


  return (
    <div className={"bg-white shadow-sm rounded overflow-hidden flex flex-col sm:flex-row md:max-h-94 lg:flex-col mb-4 lg:h-full"}>

      <div className={`sm:basis-1/2 md:basis-1/2 lg:basis-4/5 bg-stone-400 flex justify-center items-center`}>

        <span className="loader"></span>

      
      </div>

      <div className={"flex flex-col p-4 sm:basis-1/2 md:basis-full lg:basis-auto "}>
        <div className={"text-slate-400 text-sm"}>{"Date"}</div>
        <h1 className={" pb-4 text-lg md:text-2xl text-slate-400 font-bold antialiased tracking-tight"}>Loading...</h1>
        <div>
          <p className="text-slate-600 font-medium md:font-semibold">We expect here a lot of text </p>
        </div>
      </div>

    </div>
  );
};

export default MainCardLoading;
