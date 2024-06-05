'use client';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import fetchNews from '../api/fetchNews';
import fetchWeather from '../api/fetchWeather';
import DefaultLayout from '../components/templates/DefaultLayout';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import fetchLocalNews from '../api/fetchLocalNews';

export default function Home() {
  const { topicTitle,setTopicTitle } = useContext(TopicTitleContext);
  const [articles, setArticles] = useState([]);
  const [localArticles, setLocalArticles] = useState([]);
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setTopicTitle('Headlines');
      const articleData = await fetchNews({ topicTitle });
      setArticles(articleData);
      const weatherData = await fetchWeather();
      setWeather(weatherData);
      const localArticleData = await fetchLocalNews();
      setLocalArticles(localArticleData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('articles', articles);
  }, [articles]);

  useEffect(() => {
    console.log('weather', weather);
  }, [weather]);

  useEffect(() => {
    console.log('localArticles', localArticles);
  }, [localArticles]);

  return (
    <>
      <DefaultLayout articles={articles} localArticles={localArticles} weather={weather} />
    </>
  );
}
