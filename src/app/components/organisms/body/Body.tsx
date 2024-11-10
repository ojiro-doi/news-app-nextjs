'use client';
import React, { useContext, useEffect, useState } from 'react';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';
import fetchNews from '@/app/api/fetchNews';
import Props from '@/app/types/types';
import ArticleList from '../articleList/ArticleList';

const DefaultLayout = ({ articles, keywordArticles, keyword }: Props) => {
  const { topicTitle } = useContext(TopicTitleContext);
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       const data = await fetchNews({ topicTitle });
  //       setArticles(data);
  //     } catch (error) {
  //       console.error('Failed to fetch articles:', error);
  //     }
  //   };
  //   fetchArticle();
  // }, [topicTitle]);

  return (
    <>
      <ArticleList articles={articles} title={topicTitle} />
      <ArticleList articles={keywordArticles} title={keyword} />
    </>
  );
};

export default DefaultLayout;
