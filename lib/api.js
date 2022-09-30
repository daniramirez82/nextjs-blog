// Your API key is: f7d61f09446b4f59b702c548ded7d1f1


export const getNews = async (category) => {
  console.log(category);

  let baseUrl =
    category === "latest"
      ? `https://newsdata.io/api/1/news?apikey=pub_110439e846e5fdb283d972c007af6a2f59356&language=en`
      : `https://newsdata.io/api/1/news?apikey=pub_110439e846e5fdb283d972c007af6a2f59356&language=en&q=${category}`;

  try {
    const response = await fetch(baseUrl);
    const results = await response.json();
    return results.results;
  } catch (err) {
    console.log("error: ", err);
    return [];
  }
};

export const getFromNYT = async (cat) => {
  let baseUrl = `https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=vmbJSwb7M61sA8N4FLoA7XGAELlH1eqF`;

  try {
    let returnedArray = [];
    const response = await fetch(baseUrl);
    const results = await response.json();
    console.log(results.results);
    results.results.slice(0, 10).forEach((item) => {
      if(item.multimedia) {
        const { title, url, published_date, multimedia, abstract } = item;
        returnedArray.push({
          title,
          url,
          date: published_date,
          image: multimedia[1].url,
          description: abstract,
        });
      }
      
    });
    return returnedArray;
  } catch (err) {
    console.log("error: ", err);
    return [];
  }
};
