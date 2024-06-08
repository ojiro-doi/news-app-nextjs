'use client';
import React, { useContext, useEffect, useState } from 'react';
import fetchNews from '../api/fetchNews';
import fetchWeather from '../api/fetchWeather';
import DefaultLayout from '../components/templates/DefaultLayout';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import fetchLocalNews from '../api/fetchLocalNews';
import fetchKeywordNews from '../api/fetchKeywordNews';

export default function Home() {
  const { topicTitle, setTopicTitle } = useContext(TopicTitleContext);
  const [articles, setArticles] = useState([]);
  const [localArticles, setLocalArticles] = useState([]);
  const [keyword, setKeyword] = useState('サッカー');
  const [keywordArticles, setKeywordArticles] = useState([]);
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const articleData = await fetchNews({ topicTitle });
      setArticles(articleData);
      const localArticleData = await fetchLocalNews();
      setLocalArticles(localArticleData);
      const keywordArticleData = await fetchKeywordNews({ keyword });
      setKeywordArticles(keywordArticleData);
      const weatherData = await fetchWeather();
      setWeather(weatherData);
    };
    fetchData();
  }, [topicTitle, keyword]);

  useEffect(() => {
    console.log('articles', articles);
  }, [articles]);

  useEffect(() => {
    console.log('localArticles', localArticles);
  }, [localArticles]);

  useEffect(() => {
    console.log('keywordArticles', keywordArticles);
  }, [keywordArticles]);

  useEffect(() => {
    console.log('weather', weather);
  }, [weather]);

  return (
    <>
      <DefaultLayout
        articles={articles}
        localArticles={localArticles}
        keywordArticle={keywordArticles}
        keyword={keyword}
        weather={weather}
      />
    </>
  );
}
