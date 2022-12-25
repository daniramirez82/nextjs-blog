import HorizontalCenteredCard from "../cards/HorizontalCenteredCard";

const CategoryArea = ({news}) => {

  let returnedArray = [];

  news.forEach((item) => {
    if (item.multimedia && item.title && item.abstract) {
      const { title, url, published_date, multimedia, abstract } = item;
      const temDate = new Date(published_date);
      returnedArray.push({
        title,
        url,
        fullDate: temDate,
        date: temDate.toLocaleDateString(),
        image: multimedia[1].url,
        description: abstract,
      });
    }

  });

  return (
    <section>
      <div className="container grid grids-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {returnedArray.map((item) => {
          return (
            <div key={item.title}>
              <HorizontalCenteredCard data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CategoryArea;