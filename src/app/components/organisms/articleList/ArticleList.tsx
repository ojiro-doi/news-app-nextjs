import React from 'react';
import Props from '../../../types/types';
import ArticleCard from '../../molecules/articleCard/ArticleCard';

const ArticleList = ({ articles}: Props) => {

  return (
    <div className='container mx-auto'>
      <ul className="h-full">
        {articles &&
          articles.map((article, index) => (
            <li key={index}>
              <ArticleCard article={article}/> 
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;