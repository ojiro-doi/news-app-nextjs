'use client';
import React, { useEffect, useState } from 'react';
import ArticleList from '@/app/components/organisms/articleList/ArticleList';
import fetchKeywordNews from '@/app/api/fetchKeywordNews';
import { useParams } from 'next/navigation';

const Search = () => {
  const { keyword: encodedKeyword } = useParams();
  const keyword = decodeURIComponent(encodedKeyword as string);
  // console.log('params', keyword);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articleData = await fetchKeywordNews({ keyword });
      setArticles(articleData);
    };
    fetchData();
  }, [keyword]);

  useEffect(() => {
    // console.log('articles', articles);
  }, [articles]);

  return (
    <>
      <div className="p-4 md:ml-72 top-16">
        <ArticleList articles={articles} title={keyword} />
      </div>
    </>
  );
};

export default Search;
