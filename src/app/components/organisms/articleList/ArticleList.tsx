import React, { useContext } from 'react';
import Props from '../../../types/types';
import ArticleCard from '../../molecules/articleCard/ArticleCard';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';

const ArticleList = ({ articles}: Props) => {
  const { topicTitle } = useContext(TopicTitleContext);

  return (
    <div className='container mx-auto'>
      <h2 className="text-black font-bold text-lg">{(topicTitle ?? 'headlines').charAt(0).toUpperCase() + (topicTitle ?? 'headlines').slice(1)}</h2>
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