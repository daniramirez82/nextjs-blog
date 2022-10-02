import HorizontalCard from "../cards/HorizontalCard";
const ThirdArea = ({ news }) => {
  return (
    <div className="container flex">
      {news.map((item) => {
        return (
          <div key={item.title} className="basis-full sm:basis-1/2 md:basis-1/3">
            <HorizontalCard data={item} />
          </div>
        );
      })}
    </div>
  );
};
