import React from 'react';
import Props from '../../types';
import ArticleCard from '../../molecules/articleCard/ArticleCard';

const ArticleList = ({ articles, keyword }: Props) => {
  return (
    <div>
      <h2 className="text-black font-bold">{(keyword ?? '').charAt(0).toUpperCase() + (keyword ?? '').slice(1)}</h2>
      <ul className="h-full">
        {articles &&
          articles.map((article, index) => (
            <li key={index}>
              <ArticleCard article={article} /> 
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;