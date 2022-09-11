export const getNews = async () =>{
    const baseUrl = 'https://newsdata.io/api/1/news?apikey=pub_11043be0ede237772b74bb4ba686eadcdce7c';
    
    try{
        const response = await fetch(baseUrl);
        console.log(response);
        return await response.json();

    } catch (err){
        console.log('error: ', err);
        return [];
    }
    
}