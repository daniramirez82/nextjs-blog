// Your API key is: f7d61f09446b4f59b702c548ded7d1f1


export const getNews = async (category) => {

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
  let baseUrl;
  cat ? baseUrl = `https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=vmbJSwb7M61sA8N4FLoA7XGAELlH1eqF`
    : baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=vmbJSwb7M61sA8N4FLoA7XGAELlH1eqF';

  try {
    let returnedArray = [];
    const response = await fetch(baseUrl);
    const results = await response.json();
    console.log(cat, results);

    if (results.section) {
      results.results.slice(0, 20).forEach((item) => {
        if (item.multimedia && item.title && item.abstract) {
          const { title, url, published_date, multimedia, abstract } = item;
          const temDate = new Date(published_date);
          returnedArray.push({
            title,
            url,
            date: temDate.toLocaleDateString(),
            image: multimedia[1].url,
            description: abstract,
          });
        }

      });
    };

    if (!results.section) {
      results.results.forEach((item) => {
        if (item.media[0]["media-metadata"][0].url
          && item.title
          && item.abstract) {
          const { title, url, published_date, abstract } = item;
          const image = item.media[0]["media-metadata"][0].url;
          const temDate = new Date(published_date);
          returnedArray.push({
            title,
            url,
            date: temDate.toLocaleDateString(),
            image,
            description: abstract,
          });
        }
      });
    }

    return { status: "ok", response: returnedArray };
  } catch (err) {
    console.log("error: ", err);
    return { status: "error", response: [] };
  }
};

export const getMostPNYT = async () => {


  try {
    let returnedArray = [];
    const response = await fetch(baseUrl);
    const results = await response.json();
    results.results.slice(0, 100).forEach((item) => {
      if (item.multimedia && item.title && item.abstract) {
        const { title, url, published_date, multimedia, abstract } = item;
        const temDate = new Date(published_date);
        returnedArray.push({
          title,
          url,
          date: temDate.toLocaleDateString(),
          image: multimedia[1].url,
          description: abstract,
        });
      }

    });
    return { status: "ok", response: returnedArray };
  } catch (err) {
    console.log("error: ", err);
    return { status: "error", response: [] };
  }
};
