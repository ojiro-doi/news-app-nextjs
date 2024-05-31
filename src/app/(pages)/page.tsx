'use client';
import React, { useEffect, useState } from 'react';
import fetchNews from '../lib/api';
import DefaultLayout from '../components/templates/DefaultLayout';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topArticle = await fetchNews();
      setArticles(topArticle.props.topArticle);
      console.log('top', topArticle.props.topArticle);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('articles', articles);
  }, [articles]);

  return (
    <main>
      <h1 className="text-3xl text-red-300">Home</h1>
      <DefaultLayout articles={articles} />
    </main>
  );
}
