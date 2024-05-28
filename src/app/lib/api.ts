import axios  from 'axios';

export const fetchNews= async () => {
  let topArticles = null;
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines",
      {
        params: {
          // category:topics,
          country: "jp",
          apiKey: process.env.NEXT_NEWS_API_KEY,
          pageSize: 10,
        },
      }
    );
    topArticles = response.data.articles;
  } catch (error) {
    console.error("Error fetching the news data", error);
  }

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,//ISR 10分
  };
}

export default fetchNews;