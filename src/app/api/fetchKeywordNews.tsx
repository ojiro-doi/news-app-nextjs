import axios  from 'axios';
import Props from '../types/types';

export const fetchKeywordNews= async ({keyword}:Props) => {
  let articleData = null;
  if(!keyword){
    return articleData;
  }

  try {
    console.log('keyword',keyword);
    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q:keyword,
          sortBy: "popularity",
          apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
          pageSize: 5,
        },
      }
    );
    articleData = response.data.articles;
  } catch (error) {
    console.error("Error fetching the news data", error);
  }

  return articleData;
}

export default fetchKeywordNews;