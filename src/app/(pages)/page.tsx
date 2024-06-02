'use client';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import fetchNews from '../api/fetchNews';
import fetchWeather from '../api/fetchWeather';
import DefaultLayout from '../components/templates/DefaultLayout';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';

export default function Home() {
  const { topicTitle, setTopicTitle } = useContext(TopicTitleContext);
  const [articles, setArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('topicTitle', topicTitle);
      const articleData = await fetchNews({topicTitle});
      setArticles(articleData);
      const weatherData = await fetchWeather();
      console.log('weatherData', weatherData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('articles', articles);
  }, [articles]);

  return (
    <>
      <DefaultLayout articles={articles} />
    </>
  );
}
