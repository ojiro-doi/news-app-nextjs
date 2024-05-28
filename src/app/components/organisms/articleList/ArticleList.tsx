import React from 'react';
import Props from '../../types';
import ArticleLink from '../../atoms/articleLink/ArticleLink';

const ArticleCard = ({ articles, title, keyword }: Props) => {
  return (
    <div>
      <h2 className="text-white font-bold">{(keyword ?? '').charAt(0).toUpperCase() + (keyword ?? '').slice(1)} News</h2>
      <ul className="h-full">
        {articles &&
          articles.map((article, index) => (
            <li key={index}>
              <ArticleLink article={article} /> 
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArticleCard;