import React from 'react';
import WeatherWidget from '../../molecules/weatherWidget/WeatherWidget';
import Props from '@/app/types/types';
import ArticleList from '../articleList/ArticleList';

const SidePanel = ({ weather,localArticles }: Props) => {
  return (
    <>
      <div className='mb-4'>
        <WeatherWidget weather={weather} />
      </div>
      <div>
        <ArticleList articles={localArticles} title='local news'/>
      </div>
    </>
  );
};

export default SidePanel;
