import axios  from 'axios';

export const fetchNews= async () => {
  let topArticle = null;

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines",
      {
        params: {
          country: "jp",
          apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
          pageSize: 10,
        },
      }
    );
    topArticle = response.data.articles;
  } catch (error) {
    console.error("Error fetching the news data", error);
  }

  return {
    props: {
      topArticle,
    },
    revalidate: 60 * 10,//ISR 10分
  };
}

export default fetchNews;