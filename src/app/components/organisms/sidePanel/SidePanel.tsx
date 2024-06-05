import React from 'react';
import WeatherWidget from '../../molecules/weatherWidget/WeatherWidget';
import Props from '@/app/types/types';
import ArticleList from '../articleList/ArticleList';

const SidePanel = ({ weather,localArticles }: Props) => {
  return (
    <>
      <div>
        <WeatherWidget weather={weather} />
      </div>
      <div>
        <ArticleList articles={localArticles}/>
      </div>
    </>
  );
};

export default SidePanel;
