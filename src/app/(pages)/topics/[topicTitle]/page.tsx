'use client';
import React, { useContext, useEffect, useState } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import ArticleList from '@/app/components/organisms/articleList/ArticleList';
import fetchNews from '@/app/api/fetchNews';

const Topics = () => {
  const { topicTitle } = useContext(TopicTitleContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articleData = await fetchNews({ topicTitle });
      setArticles(articleData);
    };
    fetchData();
  }, [topicTitle]);

  useEffect(() => {
    console.log('articles', articles);
  }, [articles]);

  return (
    <>
      <div className="p-4 md:ml-72 top-16">
        <ArticleList articles={articles} title={topicTitle} />
      </div>
    </>
  );
};

export default Topics;
