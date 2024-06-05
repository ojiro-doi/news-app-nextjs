import axios  from 'axios';
import { lang } from 'moment';

export const fetchLocalNews= async () => {
  let articleData = null;

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q:"関西",
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

export default fetchLocalNews;