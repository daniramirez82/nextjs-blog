import HorizontalDarkCardLoading from "../cards/HorizontalDarkCardLoading";

const LoadingAreaDark = () => {


    return (
        <section>
            <div className="container grid grids-cols-2 md:grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map((item) => {
                    return (
                        <div key={item}>
                            <HorizontalDarkCardLoading />
                        </div>
                    );
                })}
            </div>
        </section>
    );
    
};
export default LoadingAreaDark;