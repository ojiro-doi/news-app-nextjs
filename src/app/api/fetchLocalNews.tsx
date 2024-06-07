import axios  from 'axios';

export const fetchLocalNews= async () => {
  let articleData = null;

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q:"関西",
          sortBy: "publishedAt",
          apiKey: process.env.NEXT_PUBLIC_NEWS1_API_KEY,
          pageSize: 3,
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