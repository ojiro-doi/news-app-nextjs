import React, { useContext } from 'react';
import moment from 'moment';
import Props from '../../../types/types';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';

const ArticleCard = ({ article }: Props) => {
  const { themeColor } = useContext(ThemeColorContext);
  if (!article) {
    return null;
  }
  const time =
    moment(article.publishedAt || moment.now())
      .fromNow()
      .slice(0, 1) == 'a'
      ? 1
      : moment(article.publishedAt || moment.now())
          .fromNow()
          .slice(0, 1);

  // テーマカラーの設定
  let bgColorSelect;
  let textColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'white';
      textColorSelect = 'text-black';
      break;
    case 'dark':
      bgColorSelect = 'grayColor_darkTheme';
      textColorSelect = 'text-white';
      break;
    default:
      bgColorSelect = 'white';
      textColorSelect = 'text-black';
      break;
  }
  
  return (
    <div>
      {article && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center p-2 rounded-md border my-4 bg-${bgColorSelect}  justify-between mx-auto container `}
        >
          <div className={`mx-2 ${textColorSelect}`}>
            <p className="text-xs ">{article.title}</p>
            <p className="text-xs text-gray-400">{time}時間前</p>
          </div>
          <img src={article.urlToImage} alt={article.title} className="w-12 h-12 object-cover rounded-md" />
        </a>
      )}
    </div>
  );
};

export default ArticleCard;
