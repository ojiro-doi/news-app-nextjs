import React, { useEffect, useState } from 'react';
import fetchNews from '../lib/api';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topArticle = await fetchNews();
      setArticles(topArticle.props.topArticles);
    };

    fetchData();
    console.log(articles);
  }, []);
  
  return (
    <main>
      <h1 className='text-3xl text-red-300'>Home</h1>
    </main>
  );
}
