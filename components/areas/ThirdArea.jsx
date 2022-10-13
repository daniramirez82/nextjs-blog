import HorizontalCenteredCard from "../cards/HorizontalCenteredCard";

const ThirdArea = ({ news }) => {
  return (
    <div className="container grid grids-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {news.map((item) => {
        return (
          <div key={item.title} className="">
            <HorizontalCenteredCard data={item} />
          </div>
        );
      })}
    </div>
  );
};
export default ThirdArea;