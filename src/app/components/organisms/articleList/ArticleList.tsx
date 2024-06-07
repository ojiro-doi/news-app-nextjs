import React,{ useContext, useMemo } from 'react';
import Props from '../../../types/types';
import ArticleCard from '../../molecules/articleCard/ArticleCard';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const ArticleList = ({ articles, title }: Props) => {
  const { themeColor } = useContext(ThemeColorContext);
  // テーマカラーの設定
  let bgColorSelect;
  let textColorSelect;
  let titleColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'bg-bgColor_lightTheme';
      textColorSelect = 'text-black';
      titleColorSelect='text-textColor_lightTheme'
      break;
    case 'dark':
      bgColorSelect = 'bg-bgColor_darkTheme';
      textColorSelect = 'text-white';
      titleColorSelect='text-textColor_darkTheme'
      break;
    default:
      bgColorSelect = 'bg-bgColor_lightTheme';
      textColorSelect = 'text-black';
      titleColorSelect='text-textColor_lightTheme'
      break;
  }

  return (
    <div className={`container mx-auto ${bgColorSelect} ${textColorSelect}`}>
      <h2 className={`${titleColorSelect} font-bold text-lg`}>{(title ?? '').charAt(0).toUpperCase() + (title ?? '').slice(1)}</h2>
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
