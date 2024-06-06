import React, { useContext } from 'react';
import Props from '../../../types/types';
import ArticleCard from '../../molecules/articleCard/ArticleCard';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const ArticleList = ({ articles, title }: Props) => {
  const { themeColor } = useContext(ThemeColorContext);
  // テーマカラーの設定
  let bgColorSelect;
  let textColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-black';
      break;
    case 'dark':
      bgColorSelect = 'bg-bgColor_darkTheme';
      textColorSelect = 'text-white';
      break;
    default:
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-black';
      break;
  }

  return (
    <div className={`container mx-auto ${bgColorSelect} ${textColorSelect}`}>
      <h2 className="font-bold text-lg">{(title ?? '').charAt(0).toUpperCase() + (title ?? '').slice(1)}</h2>
      <ul className="h-full">
        {articles &&
          articles.map((article, index) => (
            <li key={index}>
              <ArticleCard article={article} themeColor={themeColor}/>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;
