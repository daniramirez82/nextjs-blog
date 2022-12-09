
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function fixNews (arr) {

  let returnedArray = [];

  if (arr.section) {
    arr.results.slice(0, 20).forEach((item) => {
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
  };
  return returnedArray;
}
