import React, { useContext, useEffect, useState } from 'react';
import fetchNews from '../api/fetchNews';
import fetchWeather from '../api/fetchWeather';
import DefaultLayout from '../components/templates/DefaultLayout';
import fetchLocalNews from '../api/fetchLocalNews';
import fetchKeywordNews from '../api/fetchKeywordNews';

export default async function Home() {
  const keyword: string = 'サッカー';
  const topicTitle: string = 'Headlines';

  const [articles, localArticles, keywordArticles, weather] = await Promise.all([
    fetchNews({ topicTitle }),
    fetchLocalNews(),
    fetchKeywordNews({ keyword }),
    fetchWeather(),
  ]);

  return (
    <>
      <DefaultLayout
        articles={articles}
        localArticles={localArticles}
        keywordArticles={keywordArticles}
        keyword={keyword}
        weather={weather}
      />
    </>
  );
}
