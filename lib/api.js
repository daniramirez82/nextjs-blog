// Your API key is: f7d61f09446b4f59b702c548ded7d1f1

export const getNews = async (category) =>{
    console.log(category);

    let baseUrl = category === 'latest' ? `https://newsdata.io/api/1/news?apikey=pub_110439e846e5fdb283d972c007af6a2f59356&language=en`
                                        : `https://newsdata.io/api/1/news?apikey=pub_110439e846e5fdb283d972c007af6a2f59356&language=en&q=${category}`
    
    try{
        const response = await fetch(baseUrl);
        const results = await response.json();  
        return results.results;

    } catch (err){
        console.log('error: ', err);
        return [];
    }
    
}