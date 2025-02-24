import axios from 'axios';
import Props from '../types/types';

export const fetchNews = async ({ topicTitle }: Props) => {
  let articleData = null;
  let category;
  if (topicTitle === 'Headlines') {
    category = '';
  } else {
    category = topicTitle;
  }

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: category,
        country: 'jp',
        apiKey: process.env.NEXT_PUBLIC_NEWS1_API_KEY,
        pageSize: 5,
      },
    });
    articleData = response.data.articles;
  } catch (error) {
    console.error('Error fetching the news data', error);
  }

  return articleData;
};

export default fetchNews;
