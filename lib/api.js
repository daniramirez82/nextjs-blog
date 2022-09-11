// Your API key is: f7d61f09446b4f59b702c548ded7d1f1

export const getNews = async (category) =>{
    let baseUrl = category != 'latest' ?
    `https://newsapi.org/v2/everything?q=${category}&apiKey=f7d61f09446b4f59b702c548ded7d1f1`
    :'https://newsapi.org/v2/top-headlines?country=us&apiKey=f7d61f09446b4f59b702c548ded7d1f1';

    
    try{
        const response = await fetch(baseUrl);
        console.log(response);
        return await response.json();

    } catch (err){
        console.log('error: ', err);
        return [];
    }
    
}