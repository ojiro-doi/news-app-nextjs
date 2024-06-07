import ArticleList from '../organisms/articleList/ArticleList';
import Props from '../../types/types';
import SidePanel from '../organisms/sidePanel/SidePanel';
import React,{ useContext } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';

const DefaultLayout = ({ articles, localArticles, keywordArticle, keyword, weather }: Props) => {
  const { topicTitle } = useContext(TopicTitleContext);
  return (
    <>
      <div className="md:ml-72 top-16 md:flex">
        <div className=" p-4 md:w-3/4 md:pl-4 md:pr-2">
          <ArticleList articles={articles} title={topicTitle} />
          <ArticleList articles={keywordArticle} title={keyword} />
        </div>
        <div className=" px-4 md:w-1/4 md:py-4 md:pl-2 md:pr-4">
          <SidePanel weather={weather} localArticles={localArticles} />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
