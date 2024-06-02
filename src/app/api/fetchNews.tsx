import axios  from 'axios';

export const fetchNews= async ({topicTitle}: {topicTitle: string}) => {
  let articleData = null;
  let category = topicTitle === "Headlines" ? "" : topicTitle;

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines",
      {
        params: {
          category: category,
          country: "jp",
          apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
          pageSize: 10,
        },
      }
    );
    articleData = response.data.articles;
  } catch (error) {
    console.error("Error fetching the news data", error);
  }

  return articleData;
}

export default fetchNews;