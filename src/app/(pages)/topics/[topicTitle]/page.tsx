'use client';
import React, { useContext, useEffect, useState } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import ArticleList from '@/app/components/organisms/articleList/ArticleList';
import fetchNews from '@/app/api/fetchNews';

const Topics = () => {
  const { topicTitle} = useContext(TopicTitleContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articleData = await fetchNews({ topicTitle });
      setArticles(articleData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('articles', articles);
  }, [articles]);



  return (
    <>
      <div className="ml-72 top-16">
        <h2 className="text-black font-bold text-lg">
          {/* {(topicTitle ?? 'headlines').charAt(0).toUpperCase() + (topicTitle ?? 'headlines').slice(1)} */}
        </h2>
        <ArticleList articles={articles} title={topicTitle}/>
      </div>
    </>
  );
};

export default Topics;
