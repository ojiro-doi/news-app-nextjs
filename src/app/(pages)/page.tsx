'use client';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import fetchNews from '../api/api';
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
      setArticles(articleData.props.articleData);
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
